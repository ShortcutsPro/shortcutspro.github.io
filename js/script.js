
function simpleObjToString(obj, lvl=0) {

    if (typeof(obj) == "string") {
        return JSON.stringify(obj);
    } else if (typeof(obj) == "number") {
        return obj.toString();
    } else if (typeof(obj) == "boolean") {
        if (obj) {
            return "true";
        } else {
            return "false";
        }
    } else if (typeof(obj) == "function") {
        return ""+obj;
    } else if (obj instanceof HTMLElement && lvl == 0) {
        if (obj.parentNode !== null) {
            return "JSHTMLPath:"+getDomPath(obj);
        } else {
            return "JSHTML:"+obj.outerHTML;
        }
    } else if (obj == undefined) {
        return "undefined";
    } else if (obj instanceof Array) {
        let str = "["
        var i = 0;
        
        obj.forEach(function (item) {
            if (i > 0) {
                str += ', ';
            }
            str += objToString(item, lvl+1);
            i += 1;
        });
        
        return str+"]";
    }
}
function objToString(obj, lvl=0, returnIsObject=false) {
    
    var simple = simpleObjToString(obj, lvl);
    if (simple !== undefined) {
        return simple;
    }
    if (lvl > 1 || (Object.entries(obj).length == 0)) {
        try {
            var repr = simpleObjToString(obj, lvl);
            if (repr === undefined) {
                repr = obj.toString();
            }
            return repr;
        } catch (error) {
            return JSON.stringify(error.toString());
        }
    }
    if (returnIsObject) {
        return true;
    }
  
    let str = '{';
    var i = 0;
    var entries = [];
    for (const [p, val] of Object.entries(obj)) {
        if (!entries.includes(p)) {
            entries.push(p);
        }
    }
    for (const p of getProperties(obj)) {
        if (!entries.includes(p)) {
            entries.push(p);
        }
    }
    for (const p of entries) {
        const val = obj[p];
        if (i > 0) {
            str += ', ';
        }
        var repr = objToString(val, lvl+1, true);
        if (repr != true) {
            repr = '"'+encodeURIComponent(repr)+'"';
        } else {
            repr = objToString(val, lvl+1);
        }
        str += `"${encodeURIComponent(p)}": ${repr}`;

        i += 1;
    }
    var toStr = "";
    if (lvl == 0) {
        if (obj instanceof Node) {
            toStr = "JSOBJ:"+obj.nodeName;
        } else {
            toStr = "JSOBJ:"+obj.toString();
        }
    }
    return toStr+"\n"+str+'}';
}
const isGetter = (x, name) => (Object.getOwnPropertyDescriptor(x, name) || {}).get
const deepProperties = x =>
x && x !== Object.prototype &&
Object.getOwnPropertyNames(x)
    .filter(name => isGetter(x, name))
    .concat(deepProperties(Object.getPrototypeOf(x)) || []);
const distinctDeepProperties = x => Array.from(new Set(deepProperties(x)));
const getProperties = (obj) => distinctDeepProperties(obj).filter(
    name => name !== "constructor" && !~name.indexOf("__"));
    
function argumentsToString(args) {
    if (args.length == 1 && typeof(args[0]) == "string") {
        return args[0];
    }
    let str = "";
    var i = 0;
    for (let arg of args) {
        if (i > 0) {
            str += "\n";
        }
        str += objToString(arg, 1);
        i += 1;
    }
    return str;
}
var oldLog = console.log;
var oldError = console.error;
var oldWarn = console.warn;
console.log = function (message) {
    oldLog.apply(console, arguments);
    if (arguments.length == 0) {
        return;
    }
    var i = 0;
    var text = "";
    for (let arg of arguments) {
        if (i == 0 && typeof(arg) == "string") {
            text += "JSLog:";
            text += arg;
        } else {
            var description = objToString(arg);
            if (i > 0) {
                text += "\n";
            } else if (!description.startsWith("JSHTML:") && !description.startsWith("JSHTMLPath:") && !description.startsWith("JSOBJ:")) {
                text += "JSValue:";
            }
            text += description;
        }
        i += 1;
    }
    window.postMessage({ console : text }, "*");
}
console.warn = function (message) {
    oldWarn.apply(console, arguments);
    if (arguments.length == 0) {
        return;
    }
    var i = 0;
    window.postMessage({ console : "JSWarning:"+argumentsToString(arguments) }, "*");
}
console.error = function (message) {
    oldError.apply(console, arguments);
    if (arguments.length == 0) {
        return;
    }
    var i = 0;
    window.postMessage({ console : "JSError:"+argumentsToString(arguments) }, "*");
}
function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}