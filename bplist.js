export let creator = (function() {
  return (function() {
    return function e(t, r, n) {
      function i(s, a) {
        if (!r[s]) {
          if (!t[s]) {
            var u = "function" == typeof require && require;
            if (!a && u) return u(s, !0);
            if (o) return o(s, !0);
            var f = new Error("Cannot find module '" + s + "'");
            throw ((f.code = "MODULE_NOT_FOUND"), f);
          }
          var l = (r[s] = { exports: {} });
          t[s][0].call(
            l.exports,
            function(e) {
              return i(t[s][1][e] || e);
            },
            l,
            l.exports,
            e,
            t,
            r,
            n
          );
        }
        return r[s].exports;
      }
      for (
        var o = "function" == typeof require && require, s = 0;
        s < n.length;
        s++
      )
        i(n[s]);
      return i;
    };
  })()(
    {
      1: [
        function(e, t, r) {
          "use strict";
          (r.byteLength = function(e) {
            var t = f(e),
              r = t[0],
              n = t[1];
            return (3 * (r + n)) / 4 - n;
          }),
            (r.toByteArray = function(e) {
              var t,
                r,
                n = f(e),
                s = n[0],
                a = n[1],
                u = new o(
                  (function(e, t, r) {
                    return (3 * (t + r)) / 4 - r;
                  })(0, s, a)
                ),
                l = 0,
                c = a > 0 ? s - 4 : s;
              for (r = 0; r < c; r += 4)
                (t =
                  (i[e.charCodeAt(r)] << 18) |
                  (i[e.charCodeAt(r + 1)] << 12) |
                  (i[e.charCodeAt(r + 2)] << 6) |
                  i[e.charCodeAt(r + 3)]),
                  (u[l++] = (t >> 16) & 255),
                  (u[l++] = (t >> 8) & 255),
                  (u[l++] = 255 & t);
              2 === a &&
                ((t =
                  (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)),
                (u[l++] = 255 & t));
              1 === a &&
                ((t =
                  (i[e.charCodeAt(r)] << 10) |
                  (i[e.charCodeAt(r + 1)] << 4) |
                  (i[e.charCodeAt(r + 2)] >> 2)),
                (u[l++] = (t >> 8) & 255),
                (u[l++] = 255 & t));
              return u;
            }),
            (r.fromByteArray = function(e) {
              for (
                var t, r = e.length, i = r % 3, o = [], s = 0, a = r - i;
                s < a;
                s += 16383
              )
                o.push(l(e, s, s + 16383 > a ? a : s + 16383));
              1 === i
                ? ((t = e[r - 1]), o.push(n[t >> 2] + n[(t << 4) & 63] + "=="))
                : 2 === i &&
                  ((t = (e[r - 2] << 8) + e[r - 1]),
                  o.push(
                    n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + "="
                  ));
              return o.join("");
            });
          for (
            var n = [],
              i = [],
              o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              s =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              a = 0,
              u = s.length;
            a < u;
            ++a
          )
            (n[a] = s[a]), (i[s.charCodeAt(a)] = a);
          function f(e) {
            var t = e.length;
            if (t % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t), [r, r === t ? 0 : 4 - (r % 4)];
          }
          function l(e, t, r) {
            for (var i, o, s = [], a = t; a < r; a += 3)
              (i =
                ((e[a] << 16) & 16711680) +
                ((e[a + 1] << 8) & 65280) +
                (255 & e[a + 2])),
                s.push(
                  n[((o = i) >> 18) & 63] +
                    n[(o >> 12) & 63] +
                    n[(o >> 6) & 63] +
                    n[63 & o]
                );
            return s.join("");
          }
          (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
        },
        {}
      ],
      2: [function(e, t, r) {}, {}],
      3: [
        function(e, t, r) {
          (function(t) {
            "use strict";
            var n = e("base64-js"),
              i = e("ieee754");
            (r.Buffer = t),
              (r.SlowBuffer = function(e) {
                +e != e && (e = 0);
                return t.alloc(+e);
              }),
              (r.INSPECT_MAX_BYTES = 50);
            var o = 2147483647;
            function s(e) {
              if (e > o)
                throw new RangeError(
                  'The value "' + e + '" is invalid for option "size"'
                );
              var r = new Uint8Array(e);
              return (r.__proto__ = t.prototype), r;
            }
            function t(e, t, r) {
              if ("number" == typeof e) {
                if ("string" == typeof t)
                  throw new TypeError(
                    'The "string" argument must be of type string. Received type number'
                  );
                return f(e);
              }
              return a(e, t, r);
            }
            function a(e, r, n) {
              if ("string" == typeof e)
                return (function(e, r) {
                  ("string" == typeof r && "" !== r) || (r = "utf8");
                  if (!t.isEncoding(r))
                    throw new TypeError("Unknown encoding: " + r);
                  var n = 0 | h(e, r),
                    i = s(n),
                    o = i.write(e, r);
                  o !== n && (i = i.slice(0, o));
                  return i;
                })(e, r);
              if (ArrayBuffer.isView(e)) return l(e);
              if (null == e)
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof e
                );
              if (z(e, ArrayBuffer) || (e && z(e.buffer, ArrayBuffer)))
                return (function(e, r, n) {
                  if (r < 0 || e.byteLength < r)
                    throw new RangeError(
                      '"offset" is outside of buffer bounds'
                    );
                  if (e.byteLength < r + (n || 0))
                    throw new RangeError(
                      '"length" is outside of buffer bounds'
                    );
                  var i;
                  i =
                    void 0 === r && void 0 === n
                      ? new Uint8Array(e)
                      : void 0 === n
                      ? new Uint8Array(e, r)
                      : new Uint8Array(e, r, n);
                  return (i.__proto__ = t.prototype), i;
                })(e, r, n);
              if ("number" == typeof e)
                throw new TypeError(
                  'The "value" argument must not be of type number. Received type number'
                );
              var i = e.valueOf && e.valueOf();
              if (null != i && i !== e) return t.from(i, r, n);
              var o = (function(e) {
                if (t.isBuffer(e)) {
                  var r = 0 | c(e.length),
                    n = s(r);
                  return 0 === n.length ? n : (e.copy(n, 0, 0, r), n);
                }
                if (void 0 !== e.length)
                  return "number" != typeof e.length || P(e.length)
                    ? s(0)
                    : l(e);
                if ("Buffer" === e.type && Array.isArray(e.data))
                  return l(e.data);
              })(e);
              if (o) return o;
              if (
                "undefined" != typeof Symbol &&
                null != Symbol.toPrimitive &&
                "function" == typeof e[Symbol.toPrimitive]
              )
                return t.from(e[Symbol.toPrimitive]("string"), r, n);
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof e
              );
            }
            function u(e) {
              if ("number" != typeof e)
                throw new TypeError('"size" argument must be of type number');
              if (e < 0)
                throw new RangeError(
                  'The value "' + e + '" is invalid for option "size"'
                );
            }
            function f(e) {
              return u(e), s(e < 0 ? 0 : 0 | c(e));
            }
            function l(e) {
              for (
                var t = e.length < 0 ? 0 : 0 | c(e.length), r = s(t), n = 0;
                n < t;
                n += 1
              )
                r[n] = 255 & e[n];
              return r;
            }
            function c(e) {
              if (e >= o)
                throw new RangeError(
                  "Attempt to allocate Buffer larger than maximum size: 0x" +
                    o.toString(16) +
                    " bytes"
                );
              return 0 | e;
            }
            function h(e, r) {
              if (t.isBuffer(e)) return e.length;
              if (ArrayBuffer.isView(e) || z(e, ArrayBuffer))
                return e.byteLength;
              if ("string" != typeof e)
                throw new TypeError(
                  'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                    typeof e
                );
              var n = e.length,
                i = arguments.length > 2 && !0 === arguments[2];
              if (!i && 0 === n) return 0;
              for (var o = !1; ; )
                switch (r) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return n;
                  case "utf8":
                  case "utf-8":
                    return I(e).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * n;
                  case "hex":
                    return n >>> 1;
                  case "base64":
                    return N(e).length;
                  default:
                    if (o) return i ? -1 : I(e).length;
                    (r = ("" + r).toLowerCase()), (o = !0);
                }
            }
            function p(e, t, r) {
              var n = e[t];
              (e[t] = e[r]), (e[r] = n);
            }
            function d(e, r, n, i, o) {
              if (0 === e.length) return -1;
              if (
                ("string" == typeof n
                  ? ((i = n), (n = 0))
                  : n > 2147483647
                  ? (n = 2147483647)
                  : n < -2147483648 && (n = -2147483648),
                P((n = +n)) && (n = o ? 0 : e.length - 1),
                n < 0 && (n = e.length + n),
                n >= e.length)
              ) {
                if (o) return -1;
                n = e.length - 1;
              } else if (n < 0) {
                if (!o) return -1;
                n = 0;
              }
              if (("string" == typeof r && (r = t.from(r, i)), t.isBuffer(r)))
                return 0 === r.length ? -1 : g(e, r, n, i, o);
              if ("number" == typeof r)
                return (
                  (r &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf
                    ? o
                      ? Uint8Array.prototype.indexOf.call(e, r, n)
                      : Uint8Array.prototype.lastIndexOf.call(e, r, n)
                    : g(e, [r], n, i, o)
                );
              throw new TypeError("val must be string, number or Buffer");
            }
            function g(e, t, r, n, i) {
              var o,
                s = 1,
                a = e.length,
                u = t.length;
              if (
                void 0 !== n &&
                ("ucs2" === (n = String(n).toLowerCase()) ||
                  "ucs-2" === n ||
                  "utf16le" === n ||
                  "utf-16le" === n)
              ) {
                if (e.length < 2 || t.length < 2) return -1;
                (s = 2), (a /= 2), (u /= 2), (r /= 2);
              }
              function f(e, t) {
                return 1 === s ? e[t] : e.readUInt16BE(t * s);
              }
              if (i) {
                var l = -1;
                for (o = r; o < a; o++)
                  if (f(e, o) === f(t, -1 === l ? 0 : o - l)) {
                    if ((-1 === l && (l = o), o - l + 1 === u)) return l * s;
                  } else -1 !== l && (o -= o - l), (l = -1);
              } else
                for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
                  for (var c = !0, h = 0; h < u; h++)
                    if (f(e, o + h) !== f(t, h)) {
                      c = !1;
                      break;
                    }
                  if (c) return o;
                }
              return -1;
            }
            function y(e, t, r, n) {
              r = Number(r) || 0;
              var i = e.length - r;
              n ? (n = Number(n)) > i && (n = i) : (n = i);
              var o = t.length;
              n > o / 2 && (n = o / 2);
              for (var s = 0; s < n; ++s) {
                var a = parseInt(t.substr(2 * s, 2), 16);
                if (P(a)) return s;
                e[r + s] = a;
              }
              return s;
            }
            function b(e, t, r, n) {
              return D(I(t, e.length - r), e, r, n);
            }
            function v(e, t, r, n) {
              return D(
                (function(e) {
                  for (var t = [], r = 0; r < e.length; ++r)
                    t.push(255 & e.charCodeAt(r));
                  return t;
                })(t),
                e,
                r,
                n
              );
            }
            function w(e, t, r, n) {
              return v(e, t, r, n);
            }
            function m(e, t, r, n) {
              return D(N(t), e, r, n);
            }
            function _(e, t, r, n) {
              return D(
                (function(e, t) {
                  for (
                    var r, n, i, o = [], s = 0;
                    s < e.length && !((t -= 2) < 0);
                    ++s
                  )
                    (r = e.charCodeAt(s)),
                      (n = r >> 8),
                      (i = r % 256),
                      o.push(i),
                      o.push(n);
                  return o;
                })(t, e.length - r),
                e,
                r,
                n
              );
            }
            function S(e, t, r) {
              return 0 === t && r === e.length
                ? n.fromByteArray(e)
                : n.fromByteArray(e.slice(t, r));
            }
            function E(e, t, r) {
              r = Math.min(e.length, r);
              for (var n = [], i = t; i < r; ) {
                var o,
                  s,
                  a,
                  u,
                  f = e[i],
                  l = null,
                  c = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                if (i + c <= r)
                  switch (c) {
                    case 1:
                      f < 128 && (l = f);
                      break;
                    case 2:
                      128 == (192 & (o = e[i + 1])) &&
                        (u = ((31 & f) << 6) | (63 & o)) > 127 &&
                        (l = u);
                      break;
                    case 3:
                      (o = e[i + 1]),
                        (s = e[i + 2]),
                        128 == (192 & o) &&
                          128 == (192 & s) &&
                          (u = ((15 & f) << 12) | ((63 & o) << 6) | (63 & s)) >
                            2047 &&
                          (u < 55296 || u > 57343) &&
                          (l = u);
                      break;
                    case 4:
                      (o = e[i + 1]),
                        (s = e[i + 2]),
                        (a = e[i + 3]),
                        128 == (192 & o) &&
                          128 == (192 & s) &&
                          128 == (192 & a) &&
                          (u =
                            ((15 & f) << 18) |
                            ((63 & o) << 12) |
                            ((63 & s) << 6) |
                            (63 & a)) > 65535 &&
                          u < 1114112 &&
                          (l = u);
                  }
                null === l
                  ? ((l = 65533), (c = 1))
                  : l > 65535 &&
                    ((l -= 65536),
                    n.push(((l >>> 10) & 1023) | 55296),
                    (l = 56320 | (1023 & l))),
                  n.push(l),
                  (i += c);
              }
              return (function(e) {
                var t = e.length;
                if (t <= x) return String.fromCharCode.apply(String, e);
                var r = "",
                  n = 0;
                for (; n < t; )
                  r += String.fromCharCode.apply(String, e.slice(n, (n += x)));
                return r;
              })(n);
            }
            (r.kMaxLength = o),
              (t.TYPED_ARRAY_SUPPORT = (function() {
                try {
                  var e = new Uint8Array(1);
                  return (
                    (e.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function() {
                        return 42;
                      }
                    }),
                    42 === e.foo()
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              t.TYPED_ARRAY_SUPPORT ||
                "undefined" == typeof console ||
                "function" != typeof console.error ||
                console.error(
                  "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                ),
              Object.defineProperty(t.prototype, "parent", {
                enumerable: !0,
                get: function() {
                  if (t.isBuffer(this)) return this.buffer;
                }
              }),
              Object.defineProperty(t.prototype, "offset", {
                enumerable: !0,
                get: function() {
                  if (t.isBuffer(this)) return this.byteOffset;
                }
              }),
              "undefined" != typeof Symbol &&
                null != Symbol.species &&
                t[Symbol.species] === t &&
                Object.defineProperty(t, Symbol.species, {
                  value: null,
                  configurable: !0,
                  enumerable: !1,
                  writable: !1
                }),
              (t.poolSize = 8192),
              (t.from = function(e, t, r) {
                return a(e, t, r);
              }),
              (t.prototype.__proto__ = Uint8Array.prototype),
              (t.__proto__ = Uint8Array),
              (t.alloc = function(e, t, r) {
                return (function(e, t, r) {
                  return (
                    u(e),
                    e <= 0
                      ? s(e)
                      : void 0 !== t
                      ? "string" == typeof r
                        ? s(e).fill(t, r)
                        : s(e).fill(t)
                      : s(e)
                  );
                })(e, t, r);
              }),
              (t.allocUnsafe = function(e) {
                return f(e);
              }),
              (t.allocUnsafeSlow = function(e) {
                return f(e);
              }),
              (t.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== t.prototype;
              }),
              (t.compare = function(e, r) {
                if (
                  (z(e, Uint8Array) && (e = t.from(e, e.offset, e.byteLength)),
                  z(r, Uint8Array) && (r = t.from(r, r.offset, r.byteLength)),
                  !t.isBuffer(e) || !t.isBuffer(r))
                )
                  throw new TypeError(
                    'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                  );
                if (e === r) return 0;
                for (
                  var n = e.length, i = r.length, o = 0, s = Math.min(n, i);
                  o < s;
                  ++o
                )
                  if (e[o] !== r[o]) {
                    (n = e[o]), (i = r[o]);
                    break;
                  }
                return n < i ? -1 : i < n ? 1 : 0;
              }),
              (t.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return !0;
                  default:
                    return !1;
                }
              }),
              (t.concat = function(e, r) {
                if (!Array.isArray(e))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                if (0 === e.length) return t.alloc(0);
                var n;
                if (void 0 === r)
                  for (r = 0, n = 0; n < e.length; ++n) r += e[n].length;
                var i = t.allocUnsafe(r),
                  o = 0;
                for (n = 0; n < e.length; ++n) {
                  var s = e[n];
                  if ((z(s, Uint8Array) && (s = t.from(s)), !t.isBuffer(s)))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  s.copy(i, o), (o += s.length);
                }
                return i;
              }),
              (t.byteLength = h),
              (t.prototype._isBuffer = !0),
              (t.prototype.swap16 = function() {
                var e = this.length;
                if (e % 2 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 16-bits"
                  );
                for (var t = 0; t < e; t += 2) p(this, t, t + 1);
                return this;
              }),
              (t.prototype.swap32 = function() {
                var e = this.length;
                if (e % 4 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 32-bits"
                  );
                for (var t = 0; t < e; t += 4)
                  p(this, t, t + 3), p(this, t + 1, t + 2);
                return this;
              }),
              (t.prototype.swap64 = function() {
                var e = this.length;
                if (e % 8 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 64-bits"
                  );
                for (var t = 0; t < e; t += 8)
                  p(this, t, t + 7),
                    p(this, t + 1, t + 6),
                    p(this, t + 2, t + 5),
                    p(this, t + 3, t + 4);
                return this;
              }),
              (t.prototype.toString = function() {
                var e = this.length;
                return 0 === e
                  ? ""
                  : 0 === arguments.length
                  ? E(this, 0, e)
                  : function(e, t, r) {
                      var n = !1;
                      if (((void 0 === t || t < 0) && (t = 0), t > this.length))
                        return "";
                      if (
                        ((void 0 === r || r > this.length) && (r = this.length),
                        r <= 0)
                      )
                        return "";
                      if ((r >>>= 0) <= (t >>>= 0)) return "";
                      for (e || (e = "utf8"); ; )
                        switch (e) {
                          case "hex":
                            return A(this, t, r);
                          case "utf8":
                          case "utf-8":
                            return E(this, t, r);
                          case "ascii":
                            return T(this, t, r);
                          case "latin1":
                          case "binary":
                            return k(this, t, r);
                          case "base64":
                            return S(this, t, r);
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return L(this, t, r);
                          default:
                            if (n)
                              throw new TypeError("Unknown encoding: " + e);
                            (e = (e + "").toLowerCase()), (n = !0);
                        }
                    }.apply(this, arguments);
              }),
              (t.prototype.toLocaleString = t.prototype.toString),
              (t.prototype.equals = function(e) {
                if (!t.isBuffer(e))
                  throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === t.compare(this, e);
              }),
              (t.prototype.inspect = function() {
                var e = "",
                  t = r.INSPECT_MAX_BYTES;
                return (
                  (e = this.toString("hex", 0, t)
                    .replace(/(.{2})/g, "$1 ")
                    .trim()),
                  this.length > t && (e += " ... "),
                  "<Buffer " + e + ">"
                );
              }),
              (t.prototype.compare = function(e, r, n, i, o) {
                if (
                  (z(e, Uint8Array) && (e = t.from(e, e.offset, e.byteLength)),
                  !t.isBuffer(e))
                )
                  throw new TypeError(
                    'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                      typeof e
                  );
                if (
                  (void 0 === r && (r = 0),
                  void 0 === n && (n = e ? e.length : 0),
                  void 0 === i && (i = 0),
                  void 0 === o && (o = this.length),
                  r < 0 || n > e.length || i < 0 || o > this.length)
                )
                  throw new RangeError("out of range index");
                if (i >= o && r >= n) return 0;
                if (i >= o) return -1;
                if (r >= n) return 1;
                if (this === e) return 0;
                for (
                  var s = (o >>>= 0) - (i >>>= 0),
                    a = (n >>>= 0) - (r >>>= 0),
                    u = Math.min(s, a),
                    f = this.slice(i, o),
                    l = e.slice(r, n),
                    c = 0;
                  c < u;
                  ++c
                )
                  if (f[c] !== l[c]) {
                    (s = f[c]), (a = l[c]);
                    break;
                  }
                return s < a ? -1 : a < s ? 1 : 0;
              }),
              (t.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r);
              }),
              (t.prototype.indexOf = function(e, t, r) {
                return d(this, e, t, r, !0);
              }),
              (t.prototype.lastIndexOf = function(e, t, r) {
                return d(this, e, t, r, !1);
              }),
              (t.prototype.write = function(e, t, r, n) {
                if (void 0 === t) (n = "utf8"), (r = this.length), (t = 0);
                else if (void 0 === r && "string" == typeof t)
                  (n = t), (r = this.length), (t = 0);
                else {
                  if (!isFinite(t))
                    throw new Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  (t >>>= 0),
                    isFinite(r)
                      ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                      : ((n = r), (r = void 0));
                }
                var i = this.length - t;
                if (
                  ((void 0 === r || r > i) && (r = i),
                  (e.length > 0 && (r < 0 || t < 0)) || t > this.length)
                )
                  throw new RangeError(
                    "Attempt to write outside buffer bounds"
                  );
                n || (n = "utf8");
                for (var o = !1; ; )
                  switch (n) {
                    case "hex":
                      return y(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                      return b(this, e, t, r);
                    case "ascii":
                      return v(this, e, t, r);
                    case "latin1":
                    case "binary":
                      return w(this, e, t, r);
                    case "base64":
                      return m(this, e, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return _(this, e, t, r);
                    default:
                      if (o) throw new TypeError("Unknown encoding: " + n);
                      (n = ("" + n).toLowerCase()), (o = !0);
                  }
              }),
              (t.prototype.toJSON = function() {
                return {
                  type: "Buffer",
                  data: Array.prototype.slice.call(this._arr || this, 0)
                };
              });
            var x = 4096;
            function T(e, t, r) {
              var n = "";
              r = Math.min(e.length, r);
              for (var i = t; i < r; ++i) n += String.fromCharCode(127 & e[i]);
              return n;
            }
            function k(e, t, r) {
              var n = "";
              r = Math.min(e.length, r);
              for (var i = t; i < r; ++i) n += String.fromCharCode(e[i]);
              return n;
            }
            function A(e, t, r) {
              var n = e.length;
              (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
              for (var i = "", o = t; o < r; ++o) i += U(e[o]);
              return i;
            }
            function L(e, t, r) {
              for (var n = e.slice(t, r), i = "", o = 0; o < n.length; o += 2)
                i += String.fromCharCode(n[o] + 256 * n[o + 1]);
              return i;
            }
            function j(e, t, r) {
              if (e % 1 != 0 || e < 0)
                throw new RangeError("offset is not uint");
              if (e + t > r)
                throw new RangeError("Trying to access beyond buffer length");
            }
            function B(e, r, n, i, o, s) {
              if (!t.isBuffer(e))
                throw new TypeError(
                  '"buffer" argument must be a Buffer instance'
                );
              if (r > o || r < s)
                throw new RangeError('"value" argument is out of bounds');
              if (n + i > e.length) throw new RangeError("Index out of range");
            }
            function M(e, t, r, n, i, o) {
              if (r + n > e.length) throw new RangeError("Index out of range");
              if (r < 0) throw new RangeError("Index out of range");
            }
            function C(e, t, r, n, o) {
              return (
                (t = +t),
                (r >>>= 0),
                o || M(e, 0, r, 4),
                i.write(e, t, r, n, 23, 4),
                r + 4
              );
            }
            function R(e, t, r, n, o) {
              return (
                (t = +t),
                (r >>>= 0),
                o || M(e, 0, r, 8),
                i.write(e, t, r, n, 52, 8),
                r + 8
              );
            }
            (t.prototype.slice = function(e, r) {
              var n = this.length;
              (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
                (r = void 0 === r ? n : ~~r) < 0
                  ? (r += n) < 0 && (r = 0)
                  : r > n && (r = n),
                r < e && (r = e);
              var i = this.subarray(e, r);
              return (i.__proto__ = t.prototype), i;
            }),
              (t.prototype.readUIntLE = function(e, t, r) {
                (e >>>= 0), (t >>>= 0), r || j(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                  n += this[e + o] * i;
                return n;
              }),
              (t.prototype.readUIntBE = function(e, t, r) {
                (e >>>= 0), (t >>>= 0), r || j(e, t, this.length);
                for (var n = this[e + --t], i = 1; t > 0 && (i *= 256); )
                  n += this[e + --t] * i;
                return n;
              }),
              (t.prototype.readUInt8 = function(e, t) {
                return (e >>>= 0), t || j(e, 1, this.length), this[e];
              }),
              (t.prototype.readUInt16LE = function(e, t) {
                return (
                  (e >>>= 0),
                  t || j(e, 2, this.length),
                  this[e] | (this[e + 1] << 8)
                );
              }),
              (t.prototype.readUInt16BE = function(e, t) {
                return (
                  (e >>>= 0),
                  t || j(e, 2, this.length),
                  (this[e] << 8) | this[e + 1]
                );
              }),
              (t.prototype.readUInt32LE = function(e, t) {
                return (
                  (e >>>= 0),
                  t || j(e, 4, this.length),
                  (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
                    16777216 * this[e + 3]
                );
              }),
              (t.prototype.readUInt32BE = function(e, t) {
                return (
                  (e >>>= 0),
                  t || j(e, 4, this.length),
                  16777216 * this[e] +
                    ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
                );
              }),
              (t.prototype.readIntLE = function(e, t, r) {
                (e >>>= 0), (t >>>= 0), r || j(e, t, this.length);
                for (var n = this[e], i = 1, o = 0; ++o < t && (i *= 256); )
                  n += this[e + o] * i;
                return n >= (i *= 128) && (n -= Math.pow(2, 8 * t)), n;
              }),
              (t.prototype.readIntBE = function(e, t, r) {
                (e >>>= 0), (t >>>= 0), r || j(e, t, this.length);
                for (var n = t, i = 1, o = this[e + --n]; n > 0 && (i *= 256); )
                  o += this[e + --n] * i;
                return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o;
              }),
              (t.prototype.readInt8 = function(e, t) {
                return (
                  (e >>>= 0),
                  t || j(e, 1, this.length),
                  128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                );
              }),
              (t.prototype.readInt16LE = function(e, t) {
                (e >>>= 0), t || j(e, 2, this.length);
                var r = this[e] | (this[e + 1] << 8);
                return 32768 & r ? 4294901760 | r : r;
              }),
              (t.prototype.readInt16BE = function(e, t) {
                (e >>>= 0), t || j(e, 2, this.length);
                var r = this[e + 1] | (this[e] << 8);
                return 32768 & r ? 4294901760 | r : r;
              }),
              (t.prototype.readInt32LE = function(e, t) {
                return (
                  (e >>>= 0),
                  t || j(e, 4, this.length),
                  this[e] |
                    (this[e + 1] << 8) |
                    (this[e + 2] << 16) |
                    (this[e + 3] << 24)
                );
              }),
              (t.prototype.readInt32BE = function(e, t) {
                return (
                  (e >>>= 0),
                  t || j(e, 4, this.length),
                  (this[e] << 24) |
                    (this[e + 1] << 16) |
                    (this[e + 2] << 8) |
                    this[e + 3]
                );
              }),
              (t.prototype.readFloatLE = function(e, t) {
                return (
                  (e >>>= 0),
                  t || j(e, 4, this.length),
                  i.read(this, e, !0, 23, 4)
                );
              }),
              (t.prototype.readFloatBE = function(e, t) {
                return (
                  (e >>>= 0),
                  t || j(e, 4, this.length),
                  i.read(this, e, !1, 23, 4)
                );
              }),
              (t.prototype.readDoubleLE = function(e, t) {
                return (
                  (e >>>= 0),
                  t || j(e, 8, this.length),
                  i.read(this, e, !0, 52, 8)
                );
              }),
              (t.prototype.readDoubleBE = function(e, t) {
                return (
                  (e >>>= 0),
                  t || j(e, 8, this.length),
                  i.read(this, e, !1, 52, 8)
                );
              }),
              (t.prototype.writeUIntLE = function(e, t, r, n) {
                ((e = +e), (t >>>= 0), (r >>>= 0), n) ||
                  B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1,
                  o = 0;
                for (this[t] = 255 & e; ++o < r && (i *= 256); )
                  this[t + o] = (e / i) & 255;
                return t + r;
              }),
              (t.prototype.writeUIntBE = function(e, t, r, n) {
                ((e = +e), (t >>>= 0), (r >>>= 0), n) ||
                  B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1,
                  o = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256); )
                  this[t + i] = (e / o) & 255;
                return t + r;
              }),
              (t.prototype.writeUInt8 = function(e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 1, 255, 0),
                  (this[t] = 255 & e),
                  t + 1
                );
              }),
              (t.prototype.writeUInt16LE = function(e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 2, 65535, 0),
                  (this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  t + 2
                );
              }),
              (t.prototype.writeUInt16BE = function(e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 2, 65535, 0),
                  (this[t] = e >>> 8),
                  (this[t + 1] = 255 & e),
                  t + 2
                );
              }),
              (t.prototype.writeUInt32LE = function(e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 4, 4294967295, 0),
                  (this[t + 3] = e >>> 24),
                  (this[t + 2] = e >>> 16),
                  (this[t + 1] = e >>> 8),
                  (this[t] = 255 & e),
                  t + 4
                );
              }),
              (t.prototype.writeUInt32BE = function(e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 4, 4294967295, 0),
                  (this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e),
                  t + 4
                );
              }),
              (t.prototype.writeIntLE = function(e, t, r, n) {
                if (((e = +e), (t >>>= 0), !n)) {
                  var i = Math.pow(2, 8 * r - 1);
                  B(this, e, t, r, i - 1, -i);
                }
                var o = 0,
                  s = 1,
                  a = 0;
                for (this[t] = 255 & e; ++o < r && (s *= 256); )
                  e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1),
                    (this[t + o] = (((e / s) >> 0) - a) & 255);
                return t + r;
              }),
              (t.prototype.writeIntBE = function(e, t, r, n) {
                if (((e = +e), (t >>>= 0), !n)) {
                  var i = Math.pow(2, 8 * r - 1);
                  B(this, e, t, r, i - 1, -i);
                }
                var o = r - 1,
                  s = 1,
                  a = 0;
                for (this[t + o] = 255 & e; --o >= 0 && (s *= 256); )
                  e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1),
                    (this[t + o] = (((e / s) >> 0) - a) & 255);
                return t + r;
              }),
              (t.prototype.writeInt8 = function(e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 1, 127, -128),
                  e < 0 && (e = 255 + e + 1),
                  (this[t] = 255 & e),
                  t + 1
                );
              }),
              (t.prototype.writeInt16LE = function(e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 2, 32767, -32768),
                  (this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  t + 2
                );
              }),
              (t.prototype.writeInt16BE = function(e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 2, 32767, -32768),
                  (this[t] = e >>> 8),
                  (this[t + 1] = 255 & e),
                  t + 2
                );
              }),
              (t.prototype.writeInt32LE = function(e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 4, 2147483647, -2147483648),
                  (this[t] = 255 & e),
                  (this[t + 1] = e >>> 8),
                  (this[t + 2] = e >>> 16),
                  (this[t + 3] = e >>> 24),
                  t + 4
                );
              }),
              (t.prototype.writeInt32BE = function(e, t, r) {
                return (
                  (e = +e),
                  (t >>>= 0),
                  r || B(this, e, t, 4, 2147483647, -2147483648),
                  e < 0 && (e = 4294967295 + e + 1),
                  (this[t] = e >>> 24),
                  (this[t + 1] = e >>> 16),
                  (this[t + 2] = e >>> 8),
                  (this[t + 3] = 255 & e),
                  t + 4
                );
              }),
              (t.prototype.writeFloatLE = function(e, t, r) {
                return C(this, e, t, !0, r);
              }),
              (t.prototype.writeFloatBE = function(e, t, r) {
                return C(this, e, t, !1, r);
              }),
              (t.prototype.writeDoubleLE = function(e, t, r) {
                return R(this, e, t, !0, r);
              }),
              (t.prototype.writeDoubleBE = function(e, t, r) {
                return R(this, e, t, !1, r);
              }),
              (t.prototype.copy = function(e, r, n, i) {
                if (!t.isBuffer(e))
                  throw new TypeError("argument should be a Buffer");
                if (
                  (n || (n = 0),
                  i || 0 === i || (i = this.length),
                  r >= e.length && (r = e.length),
                  r || (r = 0),
                  i > 0 && i < n && (i = n),
                  i === n)
                )
                  return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (r < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length)
                  throw new RangeError("Index out of range");
                if (i < 0) throw new RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length),
                  e.length - r < i - n && (i = e.length - r + n);
                var o = i - n;
                if (
                  this === e &&
                  "function" == typeof Uint8Array.prototype.copyWithin
                )
                  this.copyWithin(r, n, i);
                else if (this === e && n < r && r < i)
                  for (var s = o - 1; s >= 0; --s) e[s + r] = this[s + n];
                else Uint8Array.prototype.set.call(e, this.subarray(n, i), r);
                return o;
              }),
              (t.prototype.fill = function(e, r, n, i) {
                if ("string" == typeof e) {
                  if (
                    ("string" == typeof r
                      ? ((i = r), (r = 0), (n = this.length))
                      : "string" == typeof n && ((i = n), (n = this.length)),
                    void 0 !== i && "string" != typeof i)
                  )
                    throw new TypeError("encoding must be a string");
                  if ("string" == typeof i && !t.isEncoding(i))
                    throw new TypeError("Unknown encoding: " + i);
                  if (1 === e.length) {
                    var o = e.charCodeAt(0);
                    (("utf8" === i && o < 128) || "latin1" === i) && (e = o);
                  }
                } else "number" == typeof e && (e &= 255);
                if (r < 0 || this.length < r || this.length < n)
                  throw new RangeError("Out of range index");
                if (n <= r) return this;
                var s;
                if (
                  ((r >>>= 0),
                  (n = void 0 === n ? this.length : n >>> 0),
                  e || (e = 0),
                  "number" == typeof e)
                )
                  for (s = r; s < n; ++s) this[s] = e;
                else {
                  var a = t.isBuffer(e) ? e : t.from(e, i),
                    u = a.length;
                  if (0 === u)
                    throw new TypeError(
                      'The value "' + e + '" is invalid for argument "value"'
                    );
                  for (s = 0; s < n - r; ++s) this[s + r] = a[s % u];
                }
                return this;
              });
            var O = /[^+\/0-9A-Za-z-_]/g;
            function U(e) {
              return e < 16 ? "0" + e.toString(16) : e.toString(16);
            }
            function I(e, t) {
              var r;
              t = t || 1 / 0;
              for (var n = e.length, i = null, o = [], s = 0; s < n; ++s) {
                if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                  if (!i) {
                    if (r > 56319) {
                      (t -= 3) > -1 && o.push(239, 191, 189);
                      continue;
                    }
                    if (s + 1 === n) {
                      (t -= 3) > -1 && o.push(239, 191, 189);
                      continue;
                    }
                    i = r;
                    continue;
                  }
                  if (r < 56320) {
                    (t -= 3) > -1 && o.push(239, 191, 189), (i = r);
                    continue;
                  }
                  r = 65536 + (((i - 55296) << 10) | (r - 56320));
                } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                if (((i = null), r < 128)) {
                  if ((t -= 1) < 0) break;
                  o.push(r);
                } else if (r < 2048) {
                  if ((t -= 2) < 0) break;
                  o.push((r >> 6) | 192, (63 & r) | 128);
                } else if (r < 65536) {
                  if ((t -= 3) < 0) break;
                  o.push(
                    (r >> 12) | 224,
                    ((r >> 6) & 63) | 128,
                    (63 & r) | 128
                  );
                } else {
                  if (!(r < 1114112)) throw new Error("Invalid code point");
                  if ((t -= 4) < 0) break;
                  o.push(
                    (r >> 18) | 240,
                    ((r >> 12) & 63) | 128,
                    ((r >> 6) & 63) | 128,
                    (63 & r) | 128
                  );
                }
              }
              return o;
            }
            function N(e) {
              return n.toByteArray(
                (function(e) {
                  if (
                    (e = (e = e.split("=")[0]).trim().replace(O, "")).length < 2
                  )
                    return "";
                  for (; e.length % 4 != 0; ) e += "=";
                  return e;
                })(e)
              );
            }
            function D(e, t, r, n) {
              for (
                var i = 0;
                i < n && !(i + r >= t.length || i >= e.length);
                ++i
              )
                t[i + r] = e[i];
              return i;
            }
            function z(e, t) {
              return (
                e instanceof t ||
                (null != e &&
                  null != e.constructor &&
                  null != e.constructor.name &&
                  e.constructor.name === t.name)
              );
            }
            function P(e) {
              return e != e;
            }
          }.call(this, e("buffer").Buffer));
        },
        { "base64-js": 1, buffer: 3, ieee754: 6 }
      ],
      4: [
        function(e, t, r) {
          (function(e) {
            function t(e) {
              return Object.prototype.toString.call(e);
            }
            (r.isArray = function(e) {
              return Array.isArray
                ? Array.isArray(e)
                : "[object Array]" === t(e);
            }),
              (r.isBoolean = function(e) {
                return "boolean" == typeof e;
              }),
              (r.isNull = function(e) {
                return null === e;
              }),
              (r.isNullOrUndefined = function(e) {
                return null == e;
              }),
              (r.isNumber = function(e) {
                return "number" == typeof e;
              }),
              (r.isString = function(e) {
                return "string" == typeof e;
              }),
              (r.isSymbol = function(e) {
                return "symbol" == typeof e;
              }),
              (r.isUndefined = function(e) {
                return void 0 === e;
              }),
              (r.isRegExp = function(e) {
                return "[object RegExp]" === t(e);
              }),
              (r.isObject = function(e) {
                return "object" == typeof e && null !== e;
              }),
              (r.isDate = function(e) {
                return "[object Date]" === t(e);
              }),
              (r.isError = function(e) {
                return "[object Error]" === t(e) || e instanceof Error;
              }),
              (r.isFunction = function(e) {
                return "function" == typeof e;
              }),
              (r.isPrimitive = function(e) {
                return (
                  null === e ||
                  "boolean" == typeof e ||
                  "number" == typeof e ||
                  "string" == typeof e ||
                  "symbol" == typeof e ||
                  void 0 === e
                );
              }),
              (r.isBuffer = e.isBuffer);
          }.call(this, { isBuffer: e("../../is-buffer/index.js") }));
        },
        { "../../is-buffer/index.js": 8 }
      ],
      5: [
        function(e, t, r) {
          var n =
              Object.create ||
              function(e) {
                var t = function() {};
                return (t.prototype = e), new t();
              },
            i =
              Object.keys ||
              function(e) {
                var t = [];
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                return r;
              },
            o =
              Function.prototype.bind ||
              function(e) {
                var t = this;
                return function() {
                  return t.apply(e, arguments);
                };
              };
          function s() {
            (this._events &&
              Object.prototype.hasOwnProperty.call(this, "_events")) ||
              ((this._events = n(null)), (this._eventsCount = 0)),
              (this._maxListeners = this._maxListeners || void 0);
          }
          (t.exports = s),
            (s.EventEmitter = s),
            (s.prototype._events = void 0),
            (s.prototype._maxListeners = void 0);
          var a,
            u = 10;
          try {
            var f = {};
            Object.defineProperty &&
              Object.defineProperty(f, "x", { value: 0 }),
              (a = 0 === f.x);
          } catch (e) {
            a = !1;
          }
          function l(e) {
            return void 0 === e._maxListeners
              ? s.defaultMaxListeners
              : e._maxListeners;
          }
          function c(e, t, r, i) {
            var o, s, a;
            if ("function" != typeof r)
              throw new TypeError('"listener" argument must be a function');
            if (
              ((s = e._events)
                ? (s.newListener &&
                    (e.emit("newListener", t, r.listener ? r.listener : r),
                    (s = e._events)),
                  (a = s[t]))
                : ((s = e._events = n(null)), (e._eventsCount = 0)),
              a)
            ) {
              if (
                ("function" == typeof a
                  ? (a = s[t] = i ? [r, a] : [a, r])
                  : i
                  ? a.unshift(r)
                  : a.push(r),
                !a.warned && (o = l(e)) && o > 0 && a.length > o)
              ) {
                a.warned = !0;
                var u = new Error(
                  "Possible EventEmitter memory leak detected. " +
                    a.length +
                    ' "' +
                    String(t) +
                    '" listeners added. Use emitter.setMaxListeners() to increase limit.'
                );
                (u.name = "MaxListenersExceededWarning"),
                  (u.emitter = e),
                  (u.type = t),
                  (u.count = a.length),
                  "object" == typeof console &&
                    console.warn &&
                    console.warn("%s: %s", u.name, u.message);
              }
            } else (a = s[t] = r), ++e._eventsCount;
            return e;
          }
          function h() {
            if (!this.fired)
              switch (
                (this.target.removeListener(this.type, this.wrapFn),
                (this.fired = !0),
                arguments.length)
              ) {
                case 0:
                  return this.listener.call(this.target);
                case 1:
                  return this.listener.call(this.target, arguments[0]);
                case 2:
                  return this.listener.call(
                    this.target,
                    arguments[0],
                    arguments[1]
                  );
                case 3:
                  return this.listener.call(
                    this.target,
                    arguments[0],
                    arguments[1],
                    arguments[2]
                  );
                default:
                  for (
                    var e = new Array(arguments.length), t = 0;
                    t < e.length;
                    ++t
                  )
                    e[t] = arguments[t];
                  this.listener.apply(this.target, e);
              }
          }
          function p(e, t, r) {
            var n = {
                fired: !1,
                wrapFn: void 0,
                target: e,
                type: t,
                listener: r
              },
              i = o.call(h, n);
            return (i.listener = r), (n.wrapFn = i), i;
          }
          function d(e, t, r) {
            var n = e._events;
            if (!n) return [];
            var i = n[t];
            return i
              ? "function" == typeof i
                ? r
                  ? [i.listener || i]
                  : [i]
                : r
                ? (function(e) {
                    for (var t = new Array(e.length), r = 0; r < t.length; ++r)
                      t[r] = e[r].listener || e[r];
                    return t;
                  })(i)
                : y(i, i.length)
              : [];
          }
          function g(e) {
            var t = this._events;
            if (t) {
              var r = t[e];
              if ("function" == typeof r) return 1;
              if (r) return r.length;
            }
            return 0;
          }
          function y(e, t) {
            for (var r = new Array(t), n = 0; n < t; ++n) r[n] = e[n];
            return r;
          }
          a
            ? Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                  return u;
                },
                set: function(e) {
                  if ("number" != typeof e || e < 0 || e != e)
                    throw new TypeError(
                      '"defaultMaxListeners" must be a positive number'
                    );
                  u = e;
                }
              })
            : (s.defaultMaxListeners = u),
            (s.prototype.setMaxListeners = function(e) {
              if ("number" != typeof e || e < 0 || isNaN(e))
                throw new TypeError('"n" argument must be a positive number');
              return (this._maxListeners = e), this;
            }),
            (s.prototype.getMaxListeners = function() {
              return l(this);
            }),
            (s.prototype.emit = function(e) {
              var t,
                r,
                n,
                i,
                o,
                s,
                a = "error" === e;
              if ((s = this._events)) a = a && null == s.error;
              else if (!a) return !1;
              if (a) {
                if (
                  (arguments.length > 1 && (t = arguments[1]),
                  t instanceof Error)
                )
                  throw t;
                var u = new Error('Unhandled "error" event. (' + t + ")");
                throw ((u.context = t), u);
              }
              if (!(r = s[e])) return !1;
              var f = "function" == typeof r;
              switch ((n = arguments.length)) {
                case 1:
                  !(function(e, t, r) {
                    if (t) e.call(r);
                    else
                      for (var n = e.length, i = y(e, n), o = 0; o < n; ++o)
                        i[o].call(r);
                  })(r, f, this);
                  break;
                case 2:
                  !(function(e, t, r, n) {
                    if (t) e.call(r, n);
                    else
                      for (var i = e.length, o = y(e, i), s = 0; s < i; ++s)
                        o[s].call(r, n);
                  })(r, f, this, arguments[1]);
                  break;
                case 3:
                  !(function(e, t, r, n, i) {
                    if (t) e.call(r, n, i);
                    else
                      for (var o = e.length, s = y(e, o), a = 0; a < o; ++a)
                        s[a].call(r, n, i);
                  })(r, f, this, arguments[1], arguments[2]);
                  break;
                case 4:
                  !(function(e, t, r, n, i, o) {
                    if (t) e.call(r, n, i, o);
                    else
                      for (var s = e.length, a = y(e, s), u = 0; u < s; ++u)
                        a[u].call(r, n, i, o);
                  })(r, f, this, arguments[1], arguments[2], arguments[3]);
                  break;
                default:
                  for (i = new Array(n - 1), o = 1; o < n; o++)
                    i[o - 1] = arguments[o];
                  !(function(e, t, r, n) {
                    if (t) e.apply(r, n);
                    else
                      for (var i = e.length, o = y(e, i), s = 0; s < i; ++s)
                        o[s].apply(r, n);
                  })(r, f, this, i);
              }
              return !0;
            }),
            (s.prototype.addListener = function(e, t) {
              return c(this, e, t, !1);
            }),
            (s.prototype.on = s.prototype.addListener),
            (s.prototype.prependListener = function(e, t) {
              return c(this, e, t, !0);
            }),
            (s.prototype.once = function(e, t) {
              if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
              return this.on(e, p(this, e, t)), this;
            }),
            (s.prototype.prependOnceListener = function(e, t) {
              if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
              return this.prependListener(e, p(this, e, t)), this;
            }),
            (s.prototype.removeListener = function(e, t) {
              var r, i, o, s, a;
              if ("function" != typeof t)
                throw new TypeError('"listener" argument must be a function');
              if (!(i = this._events)) return this;
              if (!(r = i[e])) return this;
              if (r === t || r.listener === t)
                0 == --this._eventsCount
                  ? (this._events = n(null))
                  : (delete i[e],
                    i.removeListener &&
                      this.emit("removeListener", e, r.listener || t));
              else if ("function" != typeof r) {
                for (o = -1, s = r.length - 1; s >= 0; s--)
                  if (r[s] === t || r[s].listener === t) {
                    (a = r[s].listener), (o = s);
                    break;
                  }
                if (o < 0) return this;
                0 === o
                  ? r.shift()
                  : (function(e, t) {
                      for (
                        var r = t, n = r + 1, i = e.length;
                        n < i;
                        r += 1, n += 1
                      )
                        e[r] = e[n];
                      e.pop();
                    })(r, o),
                  1 === r.length && (i[e] = r[0]),
                  i.removeListener && this.emit("removeListener", e, a || t);
              }
              return this;
            }),
            (s.prototype.removeAllListeners = function(e) {
              var t, r, o;
              if (!(r = this._events)) return this;
              if (!r.removeListener)
                return (
                  0 === arguments.length
                    ? ((this._events = n(null)), (this._eventsCount = 0))
                    : r[e] &&
                      (0 == --this._eventsCount
                        ? (this._events = n(null))
                        : delete r[e]),
                  this
                );
              if (0 === arguments.length) {
                var s,
                  a = i(r);
                for (o = 0; o < a.length; ++o)
                  "removeListener" !== (s = a[o]) && this.removeAllListeners(s);
                return (
                  this.removeAllListeners("removeListener"),
                  (this._events = n(null)),
                  (this._eventsCount = 0),
                  this
                );
              }
              if ("function" == typeof (t = r[e])) this.removeListener(e, t);
              else if (t)
                for (o = t.length - 1; o >= 0; o--)
                  this.removeListener(e, t[o]);
              return this;
            }),
            (s.prototype.listeners = function(e) {
              return d(this, e, !0);
            }),
            (s.prototype.rawListeners = function(e) {
              return d(this, e, !1);
            }),
            (s.listenerCount = function(e, t) {
              return "function" == typeof e.listenerCount
                ? e.listenerCount(t)
                : g.call(e, t);
            }),
            (s.prototype.listenerCount = g),
            (s.prototype.eventNames = function() {
              return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
            });
        },
        {}
      ],
      6: [
        function(e, t, r) {
          (r.read = function(e, t, r, n, i) {
            var o,
              s,
              a = 8 * i - n - 1,
              u = (1 << a) - 1,
              f = u >> 1,
              l = -7,
              c = r ? i - 1 : 0,
              h = r ? -1 : 1,
              p = e[t + c];
            for (
              c += h, o = p & ((1 << -l) - 1), p >>= -l, l += a;
              l > 0;
              o = 256 * o + e[t + c], c += h, l -= 8
            );
            for (
              s = o & ((1 << -l) - 1), o >>= -l, l += n;
              l > 0;
              s = 256 * s + e[t + c], c += h, l -= 8
            );
            if (0 === o) o = 1 - f;
            else {
              if (o === u) return s ? NaN : (1 / 0) * (p ? -1 : 1);
              (s += Math.pow(2, n)), (o -= f);
            }
            return (p ? -1 : 1) * s * Math.pow(2, o - n);
          }),
            (r.write = function(e, t, r, n, i, o) {
              var s,
                a,
                u,
                f = 8 * o - i - 1,
                l = (1 << f) - 1,
                c = l >> 1,
                h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                p = n ? 0 : o - 1,
                d = n ? 1 : -1,
                g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0;
              for (
                t = Math.abs(t),
                  isNaN(t) || t === 1 / 0
                    ? ((a = isNaN(t) ? 1 : 0), (s = l))
                    : ((s = Math.floor(Math.log(t) / Math.LN2)),
                      t * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                      (t += s + c >= 1 ? h / u : h * Math.pow(2, 1 - c)) * u >=
                        2 && (s++, (u /= 2)),
                      s + c >= l
                        ? ((a = 0), (s = l))
                        : s + c >= 1
                        ? ((a = (t * u - 1) * Math.pow(2, i)), (s += c))
                        : ((a = t * Math.pow(2, c - 1) * Math.pow(2, i)),
                          (s = 0)));
                i >= 8;
                e[r + p] = 255 & a, p += d, a /= 256, i -= 8
              );
              for (
                s = (s << i) | a, f += i;
                f > 0;
                e[r + p] = 255 & s, p += d, s /= 256, f -= 8
              );
              e[r + p - d] |= 128 * g;
            });
        },
        {}
      ],
      7: [
        function(e, t, r) {
          "function" == typeof Object.create
            ? (t.exports = function(e, t) {
                t &&
                  ((e.super_ = t),
                  (e.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  })));
              })
            : (t.exports = function(e, t) {
                if (t) {
                  e.super_ = t;
                  var r = function() {};
                  (r.prototype = t.prototype),
                    (e.prototype = new r()),
                    (e.prototype.constructor = e);
                }
              });
        },
        {}
      ],
      8: [
        function(e, t, r) {
          function n(e) {
            return (
              !!e.constructor &&
              "function" == typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          }
          t.exports = function(e) {
            return (
              null != e &&
              (n(e) ||
                (function(e) {
                  return (
                    "function" == typeof e.readFloatLE &&
                    "function" == typeof e.slice &&
                    n(e.slice(0, 0))
                  );
                })(e) ||
                !!e._isBuffer)
            );
          };
        },
        {}
      ],
      9: [
        function(e, t, r) {
          var n = {}.toString;
          t.exports =
            Array.isArray ||
            function(e) {
              return "[object Array]" == n.call(e);
            };
        },
        {}
      ],
      10: [
        function(e, t, r) {
          (function(e) {
            "use strict";
            void 0 === e ||
            !e.version ||
            0 === e.version.indexOf("v0.") ||
            (0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8."))
              ? (t.exports = {
                  nextTick: function(t, r, n, i) {
                    if ("function" != typeof t)
                      throw new TypeError(
                        '"callback" argument must be a function'
                      );
                    var o,
                      s,
                      a = arguments.length;
                    switch (a) {
                      case 0:
                      case 1:
                        return e.nextTick(t);
                      case 2:
                        return e.nextTick(function() {
                          t.call(null, r);
                        });
                      case 3:
                        return e.nextTick(function() {
                          t.call(null, r, n);
                        });
                      case 4:
                        return e.nextTick(function() {
                          t.call(null, r, n, i);
                        });
                      default:
                        for (o = new Array(a - 1), s = 0; s < o.length; )
                          o[s++] = arguments[s];
                        return e.nextTick(function() {
                          t.apply(null, o);
                        });
                    }
                  }
                })
              : (t.exports = e);
          }.call(this, e("_process")));
        },
        { _process: 11 }
      ],
      11: [
        function(e, t, r) {
          var n,
            i,
            o = (t.exports = {});
          function s() {
            throw new Error("setTimeout has not been defined");
          }
          function a() {
            throw new Error("clearTimeout has not been defined");
          }
          function u(e) {
            if (n === setTimeout) return setTimeout(e, 0);
            if ((n === s || !n) && setTimeout)
              return (n = setTimeout), setTimeout(e, 0);
            try {
              return n(e, 0);
            } catch (t) {
              try {
                return n.call(null, e, 0);
              } catch (t) {
                return n.call(this, e, 0);
              }
            }
          }
          !(function() {
            try {
              n = "function" == typeof setTimeout ? setTimeout : s;
            } catch (e) {
              n = s;
            }
            try {
              i = "function" == typeof clearTimeout ? clearTimeout : a;
            } catch (e) {
              i = a;
            }
          })();
          var f,
            l = [],
            c = !1,
            h = -1;
          function p() {
            c &&
              f &&
              ((c = !1),
              f.length ? (l = f.concat(l)) : (h = -1),
              l.length && d());
          }
          function d() {
            if (!c) {
              var e = u(p);
              c = !0;
              for (var t = l.length; t; ) {
                for (f = l, l = []; ++h < t; ) f && f[h].run();
                (h = -1), (t = l.length);
              }
              (f = null),
                (c = !1),
                (function(e) {
                  if (i === clearTimeout) return clearTimeout(e);
                  if ((i === a || !i) && clearTimeout)
                    return (i = clearTimeout), clearTimeout(e);
                  try {
                    i(e);
                  } catch (t) {
                    try {
                      return i.call(null, e);
                    } catch (t) {
                      return i.call(this, e);
                    }
                  }
                })(e);
            }
          }
          function g(e, t) {
            (this.fun = e), (this.array = t);
          }
          function y() {}
          (o.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
              for (var r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
            l.push(new g(e, t)), 1 !== l.length || c || u(d);
          }),
            (g.prototype.run = function() {
              this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = y),
            (o.addListener = y),
            (o.once = y),
            (o.off = y),
            (o.removeListener = y),
            (o.removeAllListeners = y),
            (o.emit = y),
            (o.prependListener = y),
            (o.prependOnceListener = y),
            (o.listeners = function(e) {
              return [];
            }),
            (o.binding = function(e) {
              throw new Error("process.binding is not supported");
            }),
            (o.cwd = function() {
              return "/";
            }),
            (o.chdir = function(e) {
              throw new Error("process.chdir is not supported");
            }),
            (o.umask = function() {
              return 0;
            });
        },
        {}
      ],
      12: [
        function(e, t, r) {
          t.exports = e("./lib/_stream_duplex.js");
        },
        { "./lib/_stream_duplex.js": 13 }
      ],
      13: [
        function(e, t, r) {
          "use strict";
          var n = e("process-nextick-args"),
            i =
              Object.keys ||
              function(e) {
                var t = [];
                for (var r in e) t.push(r);
                return t;
              };
          t.exports = c;
          var o = e("core-util-is");
          o.inherits = e("inherits");
          var s = e("./_stream_readable"),
            a = e("./_stream_writable");
          o.inherits(c, s);
          for (var u = i(a.prototype), f = 0; f < u.length; f++) {
            var l = u[f];
            c.prototype[l] || (c.prototype[l] = a.prototype[l]);
          }
          function c(e) {
            if (!(this instanceof c)) return new c(e);
            s.call(this, e),
              a.call(this, e),
              e && !1 === e.readable && (this.readable = !1),
              e && !1 === e.writable && (this.writable = !1),
              (this.allowHalfOpen = !0),
              e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1),
              this.once("end", h);
          }
          function h() {
            this.allowHalfOpen ||
              this._writableState.ended ||
              n.nextTick(p, this);
          }
          function p(e) {
            e.end();
          }
          Object.defineProperty(c.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
              return this._writableState.highWaterMark;
            }
          }),
            Object.defineProperty(c.prototype, "destroyed", {
              get: function() {
                return (
                  void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  (this._readableState.destroyed &&
                    this._writableState.destroyed)
                );
              },
              set: function(e) {
                void 0 !== this._readableState &&
                  void 0 !== this._writableState &&
                  ((this._readableState.destroyed = e),
                  (this._writableState.destroyed = e));
              }
            }),
            (c.prototype._destroy = function(e, t) {
              this.push(null), this.end(), n.nextTick(t, e);
            });
        },
        {
          "./_stream_readable": 15,
          "./_stream_writable": 17,
          "core-util-is": 4,
          inherits: 7,
          "process-nextick-args": 10
        }
      ],
      14: [
        function(e, t, r) {
          "use strict";
          t.exports = o;
          var n = e("./_stream_transform"),
            i = e("core-util-is");
          function o(e) {
            if (!(this instanceof o)) return new o(e);
            n.call(this, e);
          }
          (i.inherits = e("inherits")),
            i.inherits(o, n),
            (o.prototype._transform = function(e, t, r) {
              r(null, e);
            });
        },
        { "./_stream_transform": 16, "core-util-is": 4, inherits: 7 }
      ],
      15: [
        function(e, t, r) {
          (function(r, n) {
            "use strict";
            var i = e("process-nextick-args");
            t.exports = w;
            var o,
              s = e("isarray");
            w.ReadableState = v;
            e("events").EventEmitter;
            var a = function(e, t) {
                return e.listeners(t).length;
              },
              u = e("./internal/streams/stream"),
              f = e("safe-buffer").Buffer,
              l = n.Uint8Array || function() {};
            var c = e("core-util-is");
            c.inherits = e("inherits");
            var h = e("util"),
              p = void 0;
            p = h && h.debuglog ? h.debuglog("stream") : function() {};
            var d,
              g = e("./internal/streams/BufferList"),
              y = e("./internal/streams/destroy");
            c.inherits(w, u);
            var b = ["error", "close", "destroy", "pause", "resume"];
            function v(t, r) {
              t = t || {};
              var n = r instanceof (o = o || e("./_stream_duplex"));
              (this.objectMode = !!t.objectMode),
                n &&
                  (this.objectMode = this.objectMode || !!t.readableObjectMode);
              var i = t.highWaterMark,
                s = t.readableHighWaterMark,
                a = this.objectMode ? 16 : 16384;
              (this.highWaterMark =
                i || 0 === i ? i : n && (s || 0 === s) ? s : a),
                (this.highWaterMark = Math.floor(this.highWaterMark)),
                (this.buffer = new g()),
                (this.length = 0),
                (this.pipes = null),
                (this.pipesCount = 0),
                (this.flowing = null),
                (this.ended = !1),
                (this.endEmitted = !1),
                (this.reading = !1),
                (this.sync = !0),
                (this.needReadable = !1),
                (this.emittedReadable = !1),
                (this.readableListening = !1),
                (this.resumeScheduled = !1),
                (this.destroyed = !1),
                (this.defaultEncoding = t.defaultEncoding || "utf8"),
                (this.awaitDrain = 0),
                (this.readingMore = !1),
                (this.decoder = null),
                (this.encoding = null),
                t.encoding &&
                  (d || (d = e("string_decoder/").StringDecoder),
                  (this.decoder = new d(t.encoding)),
                  (this.encoding = t.encoding));
            }
            function w(t) {
              if (((o = o || e("./_stream_duplex")), !(this instanceof w)))
                return new w(t);
              (this._readableState = new v(t, this)),
                (this.readable = !0),
                t &&
                  ("function" == typeof t.read && (this._read = t.read),
                  "function" == typeof t.destroy &&
                    (this._destroy = t.destroy)),
                u.call(this);
            }
            function m(e, t, r, n, i) {
              var o,
                s = e._readableState;
              null === t
                ? ((s.reading = !1),
                  (function(e, t) {
                    if (t.ended) return;
                    if (t.decoder) {
                      var r = t.decoder.end();
                      r &&
                        r.length &&
                        (t.buffer.push(r),
                        (t.length += t.objectMode ? 1 : r.length));
                    }
                    (t.ended = !0), x(e);
                  })(e, s))
                : (i ||
                    (o = (function(e, t) {
                      var r;
                      (n = t),
                        f.isBuffer(n) ||
                          n instanceof l ||
                          "string" == typeof t ||
                          void 0 === t ||
                          e.objectMode ||
                          (r = new TypeError(
                            "Invalid non-string/buffer chunk"
                          ));
                      var n;
                      return r;
                    })(s, t)),
                  o
                    ? e.emit("error", o)
                    : s.objectMode || (t && t.length > 0)
                    ? ("string" == typeof t ||
                        s.objectMode ||
                        Object.getPrototypeOf(t) === f.prototype ||
                        (t = (function(e) {
                          return f.from(e);
                        })(t)),
                      n
                        ? s.endEmitted
                          ? e.emit(
                              "error",
                              new Error("stream.unshift() after end event")
                            )
                          : _(e, s, t, !0)
                        : s.ended
                        ? e.emit("error", new Error("stream.push() after EOF"))
                        : ((s.reading = !1),
                          s.decoder && !r
                            ? ((t = s.decoder.write(t)),
                              s.objectMode || 0 !== t.length
                                ? _(e, s, t, !1)
                                : k(e, s))
                            : _(e, s, t, !1)))
                    : n || (s.reading = !1));
              return (function(e) {
                return (
                  !e.ended &&
                  (e.needReadable ||
                    e.length < e.highWaterMark ||
                    0 === e.length)
                );
              })(s);
            }
            function _(e, t, r, n) {
              t.flowing && 0 === t.length && !t.sync
                ? (e.emit("data", r), e.read(0))
                : ((t.length += t.objectMode ? 1 : r.length),
                  n ? t.buffer.unshift(r) : t.buffer.push(r),
                  t.needReadable && x(e)),
                k(e, t);
            }
            Object.defineProperty(w.prototype, "destroyed", {
              get: function() {
                return (
                  void 0 !== this._readableState &&
                  this._readableState.destroyed
                );
              },
              set: function(e) {
                this._readableState && (this._readableState.destroyed = e);
              }
            }),
              (w.prototype.destroy = y.destroy),
              (w.prototype._undestroy = y.undestroy),
              (w.prototype._destroy = function(e, t) {
                this.push(null), t(e);
              }),
              (w.prototype.push = function(e, t) {
                var r,
                  n = this._readableState;
                return (
                  n.objectMode
                    ? (r = !0)
                    : "string" == typeof e &&
                      ((t = t || n.defaultEncoding) !== n.encoding &&
                        ((e = f.from(e, t)), (t = "")),
                      (r = !0)),
                  m(this, e, t, !1, r)
                );
              }),
              (w.prototype.unshift = function(e) {
                return m(this, e, null, !0, !1);
              }),
              (w.prototype.isPaused = function() {
                return !1 === this._readableState.flowing;
              }),
              (w.prototype.setEncoding = function(t) {
                return (
                  d || (d = e("string_decoder/").StringDecoder),
                  (this._readableState.decoder = new d(t)),
                  (this._readableState.encoding = t),
                  this
                );
              });
            var S = 8388608;
            function E(e, t) {
              return e <= 0 || (0 === t.length && t.ended)
                ? 0
                : t.objectMode
                ? 1
                : e != e
                ? t.flowing && t.length
                  ? t.buffer.head.data.length
                  : t.length
                : (e > t.highWaterMark &&
                    (t.highWaterMark = (function(e) {
                      return (
                        e >= S
                          ? (e = S)
                          : (e--,
                            (e |= e >>> 1),
                            (e |= e >>> 2),
                            (e |= e >>> 4),
                            (e |= e >>> 8),
                            (e |= e >>> 16),
                            e++),
                        e
                      );
                    })(e)),
                  e <= t.length
                    ? e
                    : t.ended
                    ? t.length
                    : ((t.needReadable = !0), 0));
            }
            function x(e) {
              var t = e._readableState;
              (t.needReadable = !1),
                t.emittedReadable ||
                  (p("emitReadable", t.flowing),
                  (t.emittedReadable = !0),
                  t.sync ? i.nextTick(T, e) : T(e));
            }
            function T(e) {
              p("emit readable"), e.emit("readable"), B(e);
            }
            function k(e, t) {
              t.readingMore || ((t.readingMore = !0), i.nextTick(A, e, t));
            }
            function A(e, t) {
              for (
                var r = t.length;
                !t.reading &&
                !t.flowing &&
                !t.ended &&
                t.length < t.highWaterMark &&
                (p("maybeReadMore read 0"), e.read(0), r !== t.length);

              )
                r = t.length;
              t.readingMore = !1;
            }
            function L(e) {
              p("readable nexttick read 0"), e.read(0);
            }
            function j(e, t) {
              t.reading || (p("resume read 0"), e.read(0)),
                (t.resumeScheduled = !1),
                (t.awaitDrain = 0),
                e.emit("resume"),
                B(e),
                t.flowing && !t.reading && e.read(0);
            }
            function B(e) {
              var t = e._readableState;
              for (p("flow", t.flowing); t.flowing && null !== e.read(); );
            }
            function M(e, t) {
              return 0 === t.length
                ? null
                : (t.objectMode
                    ? (r = t.buffer.shift())
                    : !e || e >= t.length
                    ? ((r = t.decoder
                        ? t.buffer.join("")
                        : 1 === t.buffer.length
                        ? t.buffer.head.data
                        : t.buffer.concat(t.length)),
                      t.buffer.clear())
                    : (r = (function(e, t, r) {
                        var n;
                        e < t.head.data.length
                          ? ((n = t.head.data.slice(0, e)),
                            (t.head.data = t.head.data.slice(e)))
                          : (n =
                              e === t.head.data.length
                                ? t.shift()
                                : r
                                ? (function(e, t) {
                                    var r = t.head,
                                      n = 1,
                                      i = r.data;
                                    e -= i.length;
                                    for (; (r = r.next); ) {
                                      var o = r.data,
                                        s = e > o.length ? o.length : e;
                                      if (
                                        (s === o.length
                                          ? (i += o)
                                          : (i += o.slice(0, e)),
                                        0 === (e -= s))
                                      ) {
                                        s === o.length
                                          ? (++n,
                                            r.next
                                              ? (t.head = r.next)
                                              : (t.head = t.tail = null))
                                          : ((t.head = r),
                                            (r.data = o.slice(s)));
                                        break;
                                      }
                                      ++n;
                                    }
                                    return (t.length -= n), i;
                                  })(e, t)
                                : (function(e, t) {
                                    var r = f.allocUnsafe(e),
                                      n = t.head,
                                      i = 1;
                                    n.data.copy(r), (e -= n.data.length);
                                    for (; (n = n.next); ) {
                                      var o = n.data,
                                        s = e > o.length ? o.length : e;
                                      if (
                                        (o.copy(r, r.length - e, 0, s),
                                        0 === (e -= s))
                                      ) {
                                        s === o.length
                                          ? (++i,
                                            n.next
                                              ? (t.head = n.next)
                                              : (t.head = t.tail = null))
                                          : ((t.head = n),
                                            (n.data = o.slice(s)));
                                        break;
                                      }
                                      ++i;
                                    }
                                    return (t.length -= i), r;
                                  })(e, t));
                        return n;
                      })(e, t.buffer, t.decoder)),
                  r);
              var r;
            }
            function C(e) {
              var t = e._readableState;
              if (t.length > 0)
                throw new Error('"endReadable()" called on non-empty stream');
              t.endEmitted || ((t.ended = !0), i.nextTick(R, t, e));
            }
            function R(e, t) {
              e.endEmitted ||
                0 !== e.length ||
                ((e.endEmitted = !0), (t.readable = !1), t.emit("end"));
            }
            function O(e, t) {
              for (var r = 0, n = e.length; r < n; r++)
                if (e[r] === t) return r;
              return -1;
            }
            (w.prototype.read = function(e) {
              p("read", e), (e = parseInt(e, 10));
              var t = this._readableState,
                r = e;
              if (
                (0 !== e && (t.emittedReadable = !1),
                0 === e &&
                  t.needReadable &&
                  (t.length >= t.highWaterMark || t.ended))
              )
                return (
                  p("read: emitReadable", t.length, t.ended),
                  0 === t.length && t.ended ? C(this) : x(this),
                  null
                );
              if (0 === (e = E(e, t)) && t.ended)
                return 0 === t.length && C(this), null;
              var n,
                i = t.needReadable;
              return (
                p("need readable", i),
                (0 === t.length || t.length - e < t.highWaterMark) &&
                  p("length less than watermark", (i = !0)),
                t.ended || t.reading
                  ? p("reading or ended", (i = !1))
                  : i &&
                    (p("do read"),
                    (t.reading = !0),
                    (t.sync = !0),
                    0 === t.length && (t.needReadable = !0),
                    this._read(t.highWaterMark),
                    (t.sync = !1),
                    t.reading || (e = E(r, t))),
                null === (n = e > 0 ? M(e, t) : null)
                  ? ((t.needReadable = !0), (e = 0))
                  : (t.length -= e),
                0 === t.length &&
                  (t.ended || (t.needReadable = !0),
                  r !== e && t.ended && C(this)),
                null !== n && this.emit("data", n),
                n
              );
            }),
              (w.prototype._read = function(e) {
                this.emit("error", new Error("_read() is not implemented"));
              }),
              (w.prototype.pipe = function(e, t) {
                var n = this,
                  o = this._readableState;
                switch (o.pipesCount) {
                  case 0:
                    o.pipes = e;
                    break;
                  case 1:
                    o.pipes = [o.pipes, e];
                    break;
                  default:
                    o.pipes.push(e);
                }
                (o.pipesCount += 1),
                  p("pipe count=%d opts=%j", o.pipesCount, t);
                var u =
                  (!t || !1 !== t.end) && e !== r.stdout && e !== r.stderr
                    ? l
                    : w;
                function f(t, r) {
                  p("onunpipe"),
                    t === n &&
                      r &&
                      !1 === r.hasUnpiped &&
                      ((r.hasUnpiped = !0),
                      p("cleanup"),
                      e.removeListener("close", b),
                      e.removeListener("finish", v),
                      e.removeListener("drain", c),
                      e.removeListener("error", y),
                      e.removeListener("unpipe", f),
                      n.removeListener("end", l),
                      n.removeListener("end", w),
                      n.removeListener("data", g),
                      (h = !0),
                      !o.awaitDrain ||
                        (e._writableState && !e._writableState.needDrain) ||
                        c());
                }
                function l() {
                  p("onend"), e.end();
                }
                o.endEmitted ? i.nextTick(u) : n.once("end", u),
                  e.on("unpipe", f);
                var c = (function(e) {
                  return function() {
                    var t = e._readableState;
                    p("pipeOnDrain", t.awaitDrain),
                      t.awaitDrain && t.awaitDrain--,
                      0 === t.awaitDrain &&
                        a(e, "data") &&
                        ((t.flowing = !0), B(e));
                  };
                })(n);
                e.on("drain", c);
                var h = !1;
                var d = !1;
                function g(t) {
                  p("ondata"),
                    (d = !1),
                    !1 !== e.write(t) ||
                      d ||
                      (((1 === o.pipesCount && o.pipes === e) ||
                        (o.pipesCount > 1 && -1 !== O(o.pipes, e))) &&
                        !h &&
                        (p(
                          "false write response, pause",
                          n._readableState.awaitDrain
                        ),
                        n._readableState.awaitDrain++,
                        (d = !0)),
                      n.pause());
                }
                function y(t) {
                  p("onerror", t),
                    w(),
                    e.removeListener("error", y),
                    0 === a(e, "error") && e.emit("error", t);
                }
                function b() {
                  e.removeListener("finish", v), w();
                }
                function v() {
                  p("onfinish"), e.removeListener("close", b), w();
                }
                function w() {
                  p("unpipe"), n.unpipe(e);
                }
                return (
                  n.on("data", g),
                  (function(e, t, r) {
                    if ("function" == typeof e.prependListener)
                      return e.prependListener(t, r);
                    e._events && e._events[t]
                      ? s(e._events[t])
                        ? e._events[t].unshift(r)
                        : (e._events[t] = [r, e._events[t]])
                      : e.on(t, r);
                  })(e, "error", y),
                  e.once("close", b),
                  e.once("finish", v),
                  e.emit("pipe", n),
                  o.flowing || (p("pipe resume"), n.resume()),
                  e
                );
              }),
              (w.prototype.unpipe = function(e) {
                var t = this._readableState,
                  r = { hasUnpiped: !1 };
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount)
                  return e && e !== t.pipes
                    ? this
                    : (e || (e = t.pipes),
                      (t.pipes = null),
                      (t.pipesCount = 0),
                      (t.flowing = !1),
                      e && e.emit("unpipe", this, r),
                      this);
                if (!e) {
                  var n = t.pipes,
                    i = t.pipesCount;
                  (t.pipes = null), (t.pipesCount = 0), (t.flowing = !1);
                  for (var o = 0; o < i; o++) n[o].emit("unpipe", this, r);
                  return this;
                }
                var s = O(t.pipes, e);
                return -1 === s
                  ? this
                  : (t.pipes.splice(s, 1),
                    (t.pipesCount -= 1),
                    1 === t.pipesCount && (t.pipes = t.pipes[0]),
                    e.emit("unpipe", this, r),
                    this);
              }),
              (w.prototype.on = function(e, t) {
                var r = u.prototype.on.call(this, e, t);
                if ("data" === e)
                  !1 !== this._readableState.flowing && this.resume();
                else if ("readable" === e) {
                  var n = this._readableState;
                  n.endEmitted ||
                    n.readableListening ||
                    ((n.readableListening = n.needReadable = !0),
                    (n.emittedReadable = !1),
                    n.reading ? n.length && x(this) : i.nextTick(L, this));
                }
                return r;
              }),
              (w.prototype.addListener = w.prototype.on),
              (w.prototype.resume = function() {
                var e = this._readableState;
                return (
                  e.flowing ||
                    (p("resume"),
                    (e.flowing = !0),
                    (function(e, t) {
                      t.resumeScheduled ||
                        ((t.resumeScheduled = !0), i.nextTick(j, e, t));
                    })(this, e)),
                  this
                );
              }),
              (w.prototype.pause = function() {
                return (
                  p("call pause flowing=%j", this._readableState.flowing),
                  !1 !== this._readableState.flowing &&
                    (p("pause"),
                    (this._readableState.flowing = !1),
                    this.emit("pause")),
                  this
                );
              }),
              (w.prototype.wrap = function(e) {
                var t = this,
                  r = this._readableState,
                  n = !1;
                for (var i in (e.on("end", function() {
                  if ((p("wrapped end"), r.decoder && !r.ended)) {
                    var e = r.decoder.end();
                    e && e.length && t.push(e);
                  }
                  t.push(null);
                }),
                e.on("data", function(i) {
                  (p("wrapped data"),
                  r.decoder && (i = r.decoder.write(i)),
                  r.objectMode && null == i) ||
                    ((r.objectMode || (i && i.length)) &&
                      (t.push(i) || ((n = !0), e.pause())));
                }),
                e))
                  void 0 === this[i] &&
                    "function" == typeof e[i] &&
                    (this[i] = (function(t) {
                      return function() {
                        return e[t].apply(e, arguments);
                      };
                    })(i));
                for (var o = 0; o < b.length; o++)
                  e.on(b[o], this.emit.bind(this, b[o]));
                return (
                  (this._read = function(t) {
                    p("wrapped _read", t), n && ((n = !1), e.resume());
                  }),
                  this
                );
              }),
              Object.defineProperty(w.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                  return this._readableState.highWaterMark;
                }
              }),
              (w._fromList = M);
          }.call(
            this,
            e("_process"),
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          ));
        },
        {
          "./_stream_duplex": 13,
          "./internal/streams/BufferList": 18,
          "./internal/streams/destroy": 19,
          "./internal/streams/stream": 20,
          _process: 11,
          "core-util-is": 4,
          events: 5,
          inherits: 7,
          isarray: 9,
          "process-nextick-args": 10,
          "safe-buffer": 21,
          "string_decoder/": 22,
          util: 2
        }
      ],
      16: [
        function(e, t, r) {
          "use strict";
          t.exports = s;
          var n = e("./_stream_duplex"),
            i = e("core-util-is");
          function o(e, t) {
            var r = this._transformState;
            r.transforming = !1;
            var n = r.writecb;
            if (!n)
              return this.emit(
                "error",
                new Error("write callback called multiple times")
              );
            (r.writechunk = null),
              (r.writecb = null),
              null != t && this.push(t),
              n(e);
            var i = this._readableState;
            (i.reading = !1),
              (i.needReadable || i.length < i.highWaterMark) &&
                this._read(i.highWaterMark);
          }
          function s(e) {
            if (!(this instanceof s)) return new s(e);
            n.call(this, e),
              (this._transformState = {
                afterTransform: o.bind(this),
                needTransform: !1,
                transforming: !1,
                writecb: null,
                writechunk: null,
                writeencoding: null
              }),
              (this._readableState.needReadable = !0),
              (this._readableState.sync = !1),
              e &&
                ("function" == typeof e.transform &&
                  (this._transform = e.transform),
                "function" == typeof e.flush && (this._flush = e.flush)),
              this.on("prefinish", a);
          }
          function a() {
            var e = this;
            "function" == typeof this._flush
              ? this._flush(function(t, r) {
                  u(e, t, r);
                })
              : u(this, null, null);
          }
          function u(e, t, r) {
            if (t) return e.emit("error", t);
            if ((null != r && e.push(r), e._writableState.length))
              throw new Error("Calling transform done when ws.length != 0");
            if (e._transformState.transforming)
              throw new Error("Calling transform done when still transforming");
            return e.push(null);
          }
          (i.inherits = e("inherits")),
            i.inherits(s, n),
            (s.prototype.push = function(e, t) {
              return (
                (this._transformState.needTransform = !1),
                n.prototype.push.call(this, e, t)
              );
            }),
            (s.prototype._transform = function(e, t, r) {
              throw new Error("_transform() is not implemented");
            }),
            (s.prototype._write = function(e, t, r) {
              var n = this._transformState;
              if (
                ((n.writecb = r),
                (n.writechunk = e),
                (n.writeencoding = t),
                !n.transforming)
              ) {
                var i = this._readableState;
                (n.needTransform ||
                  i.needReadable ||
                  i.length < i.highWaterMark) &&
                  this._read(i.highWaterMark);
              }
            }),
            (s.prototype._read = function(e) {
              var t = this._transformState;
              null !== t.writechunk && t.writecb && !t.transforming
                ? ((t.transforming = !0),
                  this._transform(
                    t.writechunk,
                    t.writeencoding,
                    t.afterTransform
                  ))
                : (t.needTransform = !0);
            }),
            (s.prototype._destroy = function(e, t) {
              var r = this;
              n.prototype._destroy.call(this, e, function(e) {
                t(e), r.emit("close");
              });
            });
        },
        { "./_stream_duplex": 13, "core-util-is": 4, inherits: 7 }
      ],
      17: [
        function(e, t, r) {
          (function(r, n, i) {
            "use strict";
            var o = e("process-nextick-args");
            function s(e) {
              var t = this;
              (this.next = null),
                (this.entry = null),
                (this.finish = function() {
                  !(function(e, t, r) {
                    var n = e.entry;
                    e.entry = null;
                    for (; n; ) {
                      var i = n.callback;
                      t.pendingcb--, i(r), (n = n.next);
                    }
                    t.corkedRequestsFree
                      ? (t.corkedRequestsFree.next = e)
                      : (t.corkedRequestsFree = e);
                  })(t, e);
                });
            }
            t.exports = v;
            var a,
              u =
                !r.browser &&
                ["v0.10", "v0.9."].indexOf(r.version.slice(0, 5)) > -1
                  ? i
                  : o.nextTick;
            v.WritableState = b;
            var f = e("core-util-is");
            f.inherits = e("inherits");
            var l = { deprecate: e("util-deprecate") },
              c = e("./internal/streams/stream"),
              h = e("safe-buffer").Buffer,
              p = n.Uint8Array || function() {};
            var d,
              g = e("./internal/streams/destroy");
            function y() {}
            function b(t, r) {
              (a = a || e("./_stream_duplex")), (t = t || {});
              var n = r instanceof a;
              (this.objectMode = !!t.objectMode),
                n &&
                  (this.objectMode = this.objectMode || !!t.writableObjectMode);
              var i = t.highWaterMark,
                f = t.writableHighWaterMark,
                l = this.objectMode ? 16 : 16384;
              (this.highWaterMark =
                i || 0 === i ? i : n && (f || 0 === f) ? f : l),
                (this.highWaterMark = Math.floor(this.highWaterMark)),
                (this.finalCalled = !1),
                (this.needDrain = !1),
                (this.ending = !1),
                (this.ended = !1),
                (this.finished = !1),
                (this.destroyed = !1);
              var c = !1 === t.decodeStrings;
              (this.decodeStrings = !c),
                (this.defaultEncoding = t.defaultEncoding || "utf8"),
                (this.length = 0),
                (this.writing = !1),
                (this.corked = 0),
                (this.sync = !0),
                (this.bufferProcessing = !1),
                (this.onwrite = function(e) {
                  !(function(e, t) {
                    var r = e._writableState,
                      n = r.sync,
                      i = r.writecb;
                    if (
                      ((function(e) {
                        (e.writing = !1),
                          (e.writecb = null),
                          (e.length -= e.writelen),
                          (e.writelen = 0);
                      })(r),
                      t)
                    )
                      !(function(e, t, r, n, i) {
                        --t.pendingcb,
                          r
                            ? (o.nextTick(i, n),
                              o.nextTick(x, e, t),
                              (e._writableState.errorEmitted = !0),
                              e.emit("error", n))
                            : (i(n),
                              (e._writableState.errorEmitted = !0),
                              e.emit("error", n),
                              x(e, t));
                      })(e, r, n, t, i);
                    else {
                      var s = S(r);
                      s ||
                        r.corked ||
                        r.bufferProcessing ||
                        !r.bufferedRequest ||
                        _(e, r),
                        n ? u(m, e, r, s, i) : m(e, r, s, i);
                    }
                  })(r, e);
                }),
                (this.writecb = null),
                (this.writelen = 0),
                (this.bufferedRequest = null),
                (this.lastBufferedRequest = null),
                (this.pendingcb = 0),
                (this.prefinished = !1),
                (this.errorEmitted = !1),
                (this.bufferedRequestCount = 0),
                (this.corkedRequestsFree = new s(this));
            }
            function v(t) {
              if (
                ((a = a || e("./_stream_duplex")),
                !(d.call(v, this) || this instanceof a))
              )
                return new v(t);
              (this._writableState = new b(t, this)),
                (this.writable = !0),
                t &&
                  ("function" == typeof t.write && (this._write = t.write),
                  "function" == typeof t.writev && (this._writev = t.writev),
                  "function" == typeof t.destroy && (this._destroy = t.destroy),
                  "function" == typeof t.final && (this._final = t.final)),
                c.call(this);
            }
            function w(e, t, r, n, i, o, s) {
              (t.writelen = n),
                (t.writecb = s),
                (t.writing = !0),
                (t.sync = !0),
                r ? e._writev(i, t.onwrite) : e._write(i, o, t.onwrite),
                (t.sync = !1);
            }
            function m(e, t, r, n) {
              r ||
                (function(e, t) {
                  0 === t.length &&
                    t.needDrain &&
                    ((t.needDrain = !1), e.emit("drain"));
                })(e, t),
                t.pendingcb--,
                n(),
                x(e, t);
            }
            function _(e, t) {
              t.bufferProcessing = !0;
              var r = t.bufferedRequest;
              if (e._writev && r && r.next) {
                var n = t.bufferedRequestCount,
                  i = new Array(n),
                  o = t.corkedRequestsFree;
                o.entry = r;
                for (var a = 0, u = !0; r; )
                  (i[a] = r), r.isBuf || (u = !1), (r = r.next), (a += 1);
                (i.allBuffers = u),
                  w(e, t, !0, t.length, i, "", o.finish),
                  t.pendingcb++,
                  (t.lastBufferedRequest = null),
                  o.next
                    ? ((t.corkedRequestsFree = o.next), (o.next = null))
                    : (t.corkedRequestsFree = new s(t)),
                  (t.bufferedRequestCount = 0);
              } else {
                for (; r; ) {
                  var f = r.chunk,
                    l = r.encoding,
                    c = r.callback;
                  if (
                    (w(e, t, !1, t.objectMode ? 1 : f.length, f, l, c),
                    (r = r.next),
                    t.bufferedRequestCount--,
                    t.writing)
                  )
                    break;
                }
                null === r && (t.lastBufferedRequest = null);
              }
              (t.bufferedRequest = r), (t.bufferProcessing = !1);
            }
            function S(e) {
              return (
                e.ending &&
                0 === e.length &&
                null === e.bufferedRequest &&
                !e.finished &&
                !e.writing
              );
            }
            function E(e, t) {
              e._final(function(r) {
                t.pendingcb--,
                  r && e.emit("error", r),
                  (t.prefinished = !0),
                  e.emit("prefinish"),
                  x(e, t);
              });
            }
            function x(e, t) {
              var r = S(t);
              return (
                r &&
                  (!(function(e, t) {
                    t.prefinished ||
                      t.finalCalled ||
                      ("function" == typeof e._final
                        ? (t.pendingcb++,
                          (t.finalCalled = !0),
                          o.nextTick(E, e, t))
                        : ((t.prefinished = !0), e.emit("prefinish")));
                  })(e, t),
                  0 === t.pendingcb && ((t.finished = !0), e.emit("finish"))),
                r
              );
            }
            f.inherits(v, c),
              (b.prototype.getBuffer = function() {
                for (var e = this.bufferedRequest, t = []; e; )
                  t.push(e), (e = e.next);
                return t;
              }),
              (function() {
                try {
                  Object.defineProperty(b.prototype, "buffer", {
                    get: l.deprecate(
                      function() {
                        return this.getBuffer();
                      },
                      "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.",
                      "DEP0003"
                    )
                  });
                } catch (e) {}
              })(),
              "function" == typeof Symbol &&
              Symbol.hasInstance &&
              "function" == typeof Function.prototype[Symbol.hasInstance]
                ? ((d = Function.prototype[Symbol.hasInstance]),
                  Object.defineProperty(v, Symbol.hasInstance, {
                    value: function(e) {
                      return (
                        !!d.call(this, e) ||
                        (this === v && (e && e._writableState instanceof b))
                      );
                    }
                  }))
                : (d = function(e) {
                    return e instanceof this;
                  }),
              (v.prototype.pipe = function() {
                this.emit("error", new Error("Cannot pipe, not readable"));
              }),
              (v.prototype.write = function(e, t, r) {
                var n,
                  i = this._writableState,
                  s = !1,
                  a =
                    !i.objectMode && ((n = e), h.isBuffer(n) || n instanceof p);
                return (
                  a &&
                    !h.isBuffer(e) &&
                    (e = (function(e) {
                      return h.from(e);
                    })(e)),
                  "function" == typeof t && ((r = t), (t = null)),
                  a ? (t = "buffer") : t || (t = i.defaultEncoding),
                  "function" != typeof r && (r = y),
                  i.ended
                    ? (function(e, t) {
                        var r = new Error("write after end");
                        e.emit("error", r), o.nextTick(t, r);
                      })(this, r)
                    : (a ||
                        (function(e, t, r, n) {
                          var i = !0,
                            s = !1;
                          return (
                            null === r
                              ? (s = new TypeError(
                                  "May not write null values to stream"
                                ))
                              : "string" == typeof r ||
                                void 0 === r ||
                                t.objectMode ||
                                (s = new TypeError(
                                  "Invalid non-string/buffer chunk"
                                )),
                            s &&
                              (e.emit("error", s), o.nextTick(n, s), (i = !1)),
                            i
                          );
                        })(this, i, e, r)) &&
                      (i.pendingcb++,
                      (s = (function(e, t, r, n, i, o) {
                        if (!r) {
                          var s = (function(e, t, r) {
                            e.objectMode ||
                              !1 === e.decodeStrings ||
                              "string" != typeof t ||
                              (t = h.from(t, r));
                            return t;
                          })(t, n, i);
                          n !== s && ((r = !0), (i = "buffer"), (n = s));
                        }
                        var a = t.objectMode ? 1 : n.length;
                        t.length += a;
                        var u = t.length < t.highWaterMark;
                        u || (t.needDrain = !0);
                        if (t.writing || t.corked) {
                          var f = t.lastBufferedRequest;
                          (t.lastBufferedRequest = {
                            chunk: n,
                            encoding: i,
                            isBuf: r,
                            callback: o,
                            next: null
                          }),
                            f
                              ? (f.next = t.lastBufferedRequest)
                              : (t.bufferedRequest = t.lastBufferedRequest),
                            (t.bufferedRequestCount += 1);
                        } else w(e, t, !1, a, n, i, o);
                        return u;
                      })(this, i, a, e, t, r))),
                  s
                );
              }),
              (v.prototype.cork = function() {
                this._writableState.corked++;
              }),
              (v.prototype.uncork = function() {
                var e = this._writableState;
                e.corked &&
                  (e.corked--,
                  e.writing ||
                    e.corked ||
                    e.finished ||
                    e.bufferProcessing ||
                    !e.bufferedRequest ||
                    _(this, e));
              }),
              (v.prototype.setDefaultEncoding = function(e) {
                if (
                  ("string" == typeof e && (e = e.toLowerCase()),
                  !(
                    [
                      "hex",
                      "utf8",
                      "utf-8",
                      "ascii",
                      "binary",
                      "base64",
                      "ucs2",
                      "ucs-2",
                      "utf16le",
                      "utf-16le",
                      "raw"
                    ].indexOf((e + "").toLowerCase()) > -1
                  ))
                )
                  throw new TypeError("Unknown encoding: " + e);
                return (this._writableState.defaultEncoding = e), this;
              }),
              Object.defineProperty(v.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                  return this._writableState.highWaterMark;
                }
              }),
              (v.prototype._write = function(e, t, r) {
                r(new Error("_write() is not implemented"));
              }),
              (v.prototype._writev = null),
              (v.prototype.end = function(e, t, r) {
                var n = this._writableState;
                "function" == typeof e
                  ? ((r = e), (e = null), (t = null))
                  : "function" == typeof t && ((r = t), (t = null)),
                  null != e && this.write(e, t),
                  n.corked && ((n.corked = 1), this.uncork()),
                  n.ending ||
                    n.finished ||
                    (function(e, t, r) {
                      (t.ending = !0),
                        x(e, t),
                        r && (t.finished ? o.nextTick(r) : e.once("finish", r));
                      (t.ended = !0), (e.writable = !1);
                    })(this, n, r);
              }),
              Object.defineProperty(v.prototype, "destroyed", {
                get: function() {
                  return (
                    void 0 !== this._writableState &&
                    this._writableState.destroyed
                  );
                },
                set: function(e) {
                  this._writableState && (this._writableState.destroyed = e);
                }
              }),
              (v.prototype.destroy = g.destroy),
              (v.prototype._undestroy = g.undestroy),
              (v.prototype._destroy = function(e, t) {
                this.end(), t(e);
              });
          }.call(
            this,
            e("_process"),
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {},
            e("timers").setImmediate
          ));
        },
        {
          "./_stream_duplex": 13,
          "./internal/streams/destroy": 19,
          "./internal/streams/stream": 20,
          _process: 11,
          "core-util-is": 4,
          inherits: 7,
          "process-nextick-args": 10,
          "safe-buffer": 21,
          timers: 28,
          "util-deprecate": 29
        }
      ],
      18: [
        function(e, t, r) {
          "use strict";
          var n = e("safe-buffer").Buffer,
            i = e("util");
          (t.exports = (function() {
            function e() {
              !(function(e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.head = null),
                (this.tail = null),
                (this.length = 0);
            }
            return (
              (e.prototype.push = function(e) {
                var t = { data: e, next: null };
                this.length > 0 ? (this.tail.next = t) : (this.head = t),
                  (this.tail = t),
                  ++this.length;
              }),
              (e.prototype.unshift = function(e) {
                var t = { data: e, next: this.head };
                0 === this.length && (this.tail = t),
                  (this.head = t),
                  ++this.length;
              }),
              (e.prototype.shift = function() {
                if (0 !== this.length) {
                  var e = this.head.data;
                  return (
                    1 === this.length
                      ? (this.head = this.tail = null)
                      : (this.head = this.head.next),
                    --this.length,
                    e
                  );
                }
              }),
              (e.prototype.clear = function() {
                (this.head = this.tail = null), (this.length = 0);
              }),
              (e.prototype.join = function(e) {
                if (0 === this.length) return "";
                for (var t = this.head, r = "" + t.data; (t = t.next); )
                  r += e + t.data;
                return r;
              }),
              (e.prototype.concat = function(e) {
                if (0 === this.length) return n.alloc(0);
                if (1 === this.length) return this.head.data;
                for (
                  var t, r, i, o = n.allocUnsafe(e >>> 0), s = this.head, a = 0;
                  s;

                )
                  (t = s.data),
                    (r = o),
                    (i = a),
                    t.copy(r, i),
                    (a += s.data.length),
                    (s = s.next);
                return o;
              }),
              e
            );
          })()),
            i &&
              i.inspect &&
              i.inspect.custom &&
              (t.exports.prototype[i.inspect.custom] = function() {
                var e = i.inspect({ length: this.length });
                return this.constructor.name + " " + e;
              });
        },
        { "safe-buffer": 21, util: 2 }
      ],
      19: [
        function(e, t, r) {
          "use strict";
          var n = e("process-nextick-args");
          function i(e, t) {
            e.emit("error", t);
          }
          t.exports = {
            destroy: function(e, t) {
              var r = this,
                o = this._readableState && this._readableState.destroyed,
                s = this._writableState && this._writableState.destroyed;
              return o || s
                ? (t
                    ? t(e)
                    : !e ||
                      (this._writableState &&
                        this._writableState.errorEmitted) ||
                      n.nextTick(i, this, e),
                  this)
                : (this._readableState && (this._readableState.destroyed = !0),
                  this._writableState && (this._writableState.destroyed = !0),
                  this._destroy(e || null, function(e) {
                    !t && e
                      ? (n.nextTick(i, r, e),
                        r._writableState &&
                          (r._writableState.errorEmitted = !0))
                      : t && t(e);
                  }),
                  this);
            },
            undestroy: function() {
              this._readableState &&
                ((this._readableState.destroyed = !1),
                (this._readableState.reading = !1),
                (this._readableState.ended = !1),
                (this._readableState.endEmitted = !1)),
                this._writableState &&
                  ((this._writableState.destroyed = !1),
                  (this._writableState.ended = !1),
                  (this._writableState.ending = !1),
                  (this._writableState.finished = !1),
                  (this._writableState.errorEmitted = !1));
            }
          };
        },
        { "process-nextick-args": 10 }
      ],
      20: [
        function(e, t, r) {
          t.exports = e("events").EventEmitter;
        },
        { events: 5 }
      ],
      21: [
        function(e, t, r) {
          var n = e("buffer"),
            i = n.Buffer;
          function o(e, t) {
            for (var r in e) t[r] = e[r];
          }
          function s(e, t, r) {
            return i(e, t, r);
          }
          i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow
            ? (t.exports = n)
            : (o(n, r), (r.Buffer = s)),
            o(i, s),
            (s.from = function(e, t, r) {
              if ("number" == typeof e)
                throw new TypeError("Argument must not be a number");
              return i(e, t, r);
            }),
            (s.alloc = function(e, t, r) {
              if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
              var n = i(e);
              return (
                void 0 !== t
                  ? "string" == typeof r
                    ? n.fill(t, r)
                    : n.fill(t)
                  : n.fill(0),
                n
              );
            }),
            (s.allocUnsafe = function(e) {
              if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
              return i(e);
            }),
            (s.allocUnsafeSlow = function(e) {
              if ("number" != typeof e)
                throw new TypeError("Argument must be a number");
              return n.SlowBuffer(e);
            });
        },
        { buffer: 3 }
      ],
      22: [
        function(e, t, r) {
          "use strict";
          var n = e("safe-buffer").Buffer,
            i =
              n.isEncoding ||
              function(e) {
                switch ((e = "" + e) && e.toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                  case "raw":
                    return !0;
                  default:
                    return !1;
                }
              };
          function o(e) {
            var t;
            switch (
              ((this.encoding = (function(e) {
                var t = (function(e) {
                  if (!e) return "utf8";
                  for (var t; ; )
                    switch (e) {
                      case "utf8":
                      case "utf-8":
                        return "utf8";
                      case "ucs2":
                      case "ucs-2":
                      case "utf16le":
                      case "utf-16le":
                        return "utf16le";
                      case "latin1":
                      case "binary":
                        return "latin1";
                      case "base64":
                      case "ascii":
                      case "hex":
                        return e;
                      default:
                        if (t) return;
                        (e = ("" + e).toLowerCase()), (t = !0);
                    }
                })(e);
                if ("string" != typeof t && (n.isEncoding === i || !i(e)))
                  throw new Error("Unknown encoding: " + e);
                return t || e;
              })(e)),
              this.encoding)
            ) {
              case "utf16le":
                (this.text = u), (this.end = f), (t = 4);
                break;
              case "utf8":
                (this.fillLast = a), (t = 4);
                break;
              case "base64":
                (this.text = l), (this.end = c), (t = 3);
                break;
              default:
                return (this.write = h), void (this.end = p);
            }
            (this.lastNeed = 0),
              (this.lastTotal = 0),
              (this.lastChar = n.allocUnsafe(t));
          }
          function s(e) {
            return e <= 127
              ? 0
              : e >> 5 == 6
              ? 2
              : e >> 4 == 14
              ? 3
              : e >> 3 == 30
              ? 4
              : e >> 6 == 2
              ? -1
              : -2;
          }
          function a(e) {
            var t = this.lastTotal - this.lastNeed,
              r = (function(e, t, r) {
                if (128 != (192 & t[0])) return (e.lastNeed = 0), "�";
                if (e.lastNeed > 1 && t.length > 1) {
                  if (128 != (192 & t[1])) return (e.lastNeed = 1), "�";
                  if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2]))
                    return (e.lastNeed = 2), "�";
                }
              })(this, e);
            return void 0 !== r
              ? r
              : this.lastNeed <= e.length
              ? (e.copy(this.lastChar, t, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal))
              : (e.copy(this.lastChar, t, 0, e.length),
                void (this.lastNeed -= e.length));
          }
          function u(e, t) {
            if ((e.length - t) % 2 == 0) {
              var r = e.toString("utf16le", t);
              if (r) {
                var n = r.charCodeAt(r.length - 1);
                if (n >= 55296 && n <= 56319)
                  return (
                    (this.lastNeed = 2),
                    (this.lastTotal = 4),
                    (this.lastChar[0] = e[e.length - 2]),
                    (this.lastChar[1] = e[e.length - 1]),
                    r.slice(0, -1)
                  );
              }
              return r;
            }
            return (
              (this.lastNeed = 1),
              (this.lastTotal = 2),
              (this.lastChar[0] = e[e.length - 1]),
              e.toString("utf16le", t, e.length - 1)
            );
          }
          function f(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
              var r = this.lastTotal - this.lastNeed;
              return t + this.lastChar.toString("utf16le", 0, r);
            }
            return t;
          }
          function l(e, t) {
            var r = (e.length - t) % 3;
            return 0 === r
              ? e.toString("base64", t)
              : ((this.lastNeed = 3 - r),
                (this.lastTotal = 3),
                1 === r
                  ? (this.lastChar[0] = e[e.length - 1])
                  : ((this.lastChar[0] = e[e.length - 2]),
                    (this.lastChar[1] = e[e.length - 1])),
                e.toString("base64", t, e.length - r));
          }
          function c(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed
              ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed)
              : t;
          }
          function h(e) {
            return e.toString(this.encoding);
          }
          function p(e) {
            return e && e.length ? this.write(e) : "";
          }
          (r.StringDecoder = o),
            (o.prototype.write = function(e) {
              if (0 === e.length) return "";
              var t, r;
              if (this.lastNeed) {
                if (void 0 === (t = this.fillLast(e))) return "";
                (r = this.lastNeed), (this.lastNeed = 0);
              } else r = 0;
              return r < e.length
                ? t
                  ? t + this.text(e, r)
                  : this.text(e, r)
                : t || "";
            }),
            (o.prototype.end = function(e) {
              var t = e && e.length ? this.write(e) : "";
              return this.lastNeed ? t + "�" : t;
            }),
            (o.prototype.text = function(e, t) {
              var r = (function(e, t, r) {
                var n = t.length - 1;
                if (n < r) return 0;
                var i = s(t[n]);
                if (i >= 0) return i > 0 && (e.lastNeed = i - 1), i;
                if (--n < r || -2 === i) return 0;
                if ((i = s(t[n])) >= 0) return i > 0 && (e.lastNeed = i - 2), i;
                if (--n < r || -2 === i) return 0;
                if ((i = s(t[n])) >= 0)
                  return i > 0 && (2 === i ? (i = 0) : (e.lastNeed = i - 3)), i;
                return 0;
              })(this, e, t);
              if (!this.lastNeed) return e.toString("utf8", t);
              this.lastTotal = r;
              var n = e.length - (r - this.lastNeed);
              return e.copy(this.lastChar, 0, n), e.toString("utf8", t, n);
            }),
            (o.prototype.fillLast = function(e) {
              if (this.lastNeed <= e.length)
                return (
                  e.copy(
                    this.lastChar,
                    this.lastTotal - this.lastNeed,
                    0,
                    this.lastNeed
                  ),
                  this.lastChar.toString(this.encoding, 0, this.lastTotal)
                );
              e.copy(
                this.lastChar,
                this.lastTotal - this.lastNeed,
                0,
                e.length
              ),
                (this.lastNeed -= e.length);
            });
        },
        { "safe-buffer": 21 }
      ],
      23: [
        function(e, t, r) {
          t.exports = e("./readable").PassThrough;
        },
        { "./readable": 24 }
      ],
      24: [
        function(e, t, r) {
          ((r = t.exports = e("./lib/_stream_readable.js")).Stream = r),
            (r.Readable = r),
            (r.Writable = e("./lib/_stream_writable.js")),
            (r.Duplex = e("./lib/_stream_duplex.js")),
            (r.Transform = e("./lib/_stream_transform.js")),
            (r.PassThrough = e("./lib/_stream_passthrough.js"));
        },
        {
          "./lib/_stream_duplex.js": 13,
          "./lib/_stream_passthrough.js": 14,
          "./lib/_stream_readable.js": 15,
          "./lib/_stream_transform.js": 16,
          "./lib/_stream_writable.js": 17
        }
      ],
      25: [
        function(e, t, r) {
          t.exports = e("./readable").Transform;
        },
        { "./readable": 24 }
      ],
      26: [
        function(e, t, r) {
          t.exports = e("./lib/_stream_writable.js");
        },
        { "./lib/_stream_writable.js": 17 }
      ],
      27: [
        function(e, t, r) {
          t.exports = i;
          var n = e("events").EventEmitter;
          function i() {
            n.call(this);
          }
          e("inherits")(i, n),
            (i.Readable = e("readable-stream/readable.js")),
            (i.Writable = e("readable-stream/writable.js")),
            (i.Duplex = e("readable-stream/duplex.js")),
            (i.Transform = e("readable-stream/transform.js")),
            (i.PassThrough = e("readable-stream/passthrough.js")),
            (i.Stream = i),
            (i.prototype.pipe = function(e, t) {
              var r = this;
              function i(t) {
                e.writable && !1 === e.write(t) && r.pause && r.pause();
              }
              function o() {
                r.readable && r.resume && r.resume();
              }
              r.on("data", i),
                e.on("drain", o),
                e._isStdio ||
                  (t && !1 === t.end) ||
                  (r.on("end", a), r.on("close", u));
              var s = !1;
              function a() {
                s || ((s = !0), e.end());
              }
              function u() {
                s || ((s = !0), "function" == typeof e.destroy && e.destroy());
              }
              function f(e) {
                if ((l(), 0 === n.listenerCount(this, "error"))) throw e;
              }
              function l() {
                r.removeListener("data", i),
                  e.removeListener("drain", o),
                  r.removeListener("end", a),
                  r.removeListener("close", u),
                  r.removeListener("error", f),
                  e.removeListener("error", f),
                  r.removeListener("end", l),
                  r.removeListener("close", l),
                  e.removeListener("close", l);
              }
              return (
                r.on("error", f),
                e.on("error", f),
                r.on("end", l),
                r.on("close", l),
                e.on("close", l),
                e.emit("pipe", r),
                e
              );
            });
        },
        {
          events: 5,
          inherits: 7,
          "readable-stream/duplex.js": 12,
          "readable-stream/passthrough.js": 23,
          "readable-stream/readable.js": 24,
          "readable-stream/transform.js": 25,
          "readable-stream/writable.js": 26
        }
      ],
      28: [
        function(e, t, r) {
          (function(t, n) {
            var i = e("process/browser.js").nextTick,
              o = Function.prototype.apply,
              s = Array.prototype.slice,
              a = {},
              u = 0;
            function f(e, t) {
              (this._id = e), (this._clearFn = t);
            }
            (r.setTimeout = function() {
              return new f(o.call(setTimeout, window, arguments), clearTimeout);
            }),
              (r.setInterval = function() {
                return new f(
                  o.call(setInterval, window, arguments),
                  clearInterval
                );
              }),
              (r.clearTimeout = r.clearInterval = function(e) {
                e.close();
              }),
              (f.prototype.unref = f.prototype.ref = function() {}),
              (f.prototype.close = function() {
                this._clearFn.call(window, this._id);
              }),
              (r.enroll = function(e, t) {
                clearTimeout(e._idleTimeoutId), (e._idleTimeout = t);
              }),
              (r.unenroll = function(e) {
                clearTimeout(e._idleTimeoutId), (e._idleTimeout = -1);
              }),
              (r._unrefActive = r.active = function(e) {
                clearTimeout(e._idleTimeoutId);
                var t = e._idleTimeout;
                t >= 0 &&
                  (e._idleTimeoutId = setTimeout(function() {
                    e._onTimeout && e._onTimeout();
                  }, t));
              }),
              (r.setImmediate =
                "function" == typeof t
                  ? t
                  : function(e) {
                      var t = u++,
                        n = !(arguments.length < 2) && s.call(arguments, 1);
                      return (
                        (a[t] = !0),
                        i(function() {
                          a[t] &&
                            (n ? e.apply(null, n) : e.call(null),
                            r.clearImmediate(t));
                        }),
                        t
                      );
                    }),
              (r.clearImmediate =
                "function" == typeof n
                  ? n
                  : function(e) {
                      delete a[e];
                    });
          }.call(this, e("timers").setImmediate, e("timers").clearImmediate));
        },
        { "process/browser.js": 11, timers: 28 }
      ],
      29: [
        function(e, t, r) {
          (function(e) {
            function r(t) {
              try {
                if (!e.localStorage) return !1;
              } catch (e) {
                return !1;
              }
              var r = e.localStorage[t];
              return null != r && "true" === String(r).toLowerCase();
            }
            t.exports = function(e, t) {
              if (r("noDeprecation")) return e;
              var n = !1;
              return function() {
                if (!n) {
                  if (r("throwDeprecation")) throw new Error(t);
                  r("traceDeprecation") ? console.trace(t) : console.warn(t),
                    (n = !0);
                }
                return e.apply(this, arguments);
              };
            };
          }.call(
            this,
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          ));
        },
        {}
      ],
      30: [
        function(e, t, r) {
          "function" == typeof Object.create
            ? (t.exports = function(e, t) {
                (e.super_ = t),
                  (e.prototype = Object.create(t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0
                    }
                  }));
              })
            : (t.exports = function(e, t) {
                e.super_ = t;
                var r = function() {};
                (r.prototype = t.prototype),
                  (e.prototype = new r()),
                  (e.prototype.constructor = e);
              });
        },
        {}
      ],
      31: [
        function(e, t, r) {
          t.exports = function(e) {
            return (
              e &&
              "object" == typeof e &&
              "function" == typeof e.copy &&
              "function" == typeof e.fill &&
              "function" == typeof e.readUInt8
            );
          };
        },
        {}
      ],
      32: [
        function(e, t, r) {
          (function(t, n) {
            var i = /%[sdj%]/g;
            (r.format = function(e) {
              if (!b(e)) {
                for (var t = [], r = 0; r < arguments.length; r++)
                  t.push(a(arguments[r]));
                return t.join(" ");
              }
              r = 1;
              for (
                var n = arguments,
                  o = n.length,
                  s = String(e).replace(i, function(e) {
                    if ("%%" === e) return "%";
                    if (r >= o) return e;
                    switch (e) {
                      case "%s":
                        return String(n[r++]);
                      case "%d":
                        return Number(n[r++]);
                      case "%j":
                        try {
                          return JSON.stringify(n[r++]);
                        } catch (e) {
                          return "[Circular]";
                        }
                      default:
                        return e;
                    }
                  }),
                  u = n[r];
                r < o;
                u = n[++r]
              )
                g(u) || !m(u) ? (s += " " + u) : (s += " " + a(u));
              return s;
            }),
              (r.deprecate = function(e, i) {
                if (v(n.process))
                  return function() {
                    return r.deprecate(e, i).apply(this, arguments);
                  };
                if (!0 === t.noDeprecation) return e;
                var o = !1;
                return function() {
                  if (!o) {
                    if (t.throwDeprecation) throw new Error(i);
                    t.traceDeprecation ? console.trace(i) : console.error(i),
                      (o = !0);
                  }
                  return e.apply(this, arguments);
                };
              });
            var o,
              s = {};
            function a(e, t) {
              var n = { seen: [], stylize: f };
              return (
                arguments.length >= 3 && (n.depth = arguments[2]),
                arguments.length >= 4 && (n.colors = arguments[3]),
                d(t) ? (n.showHidden = t) : t && r._extend(n, t),
                v(n.showHidden) && (n.showHidden = !1),
                v(n.depth) && (n.depth = 2),
                v(n.colors) && (n.colors = !1),
                v(n.customInspect) && (n.customInspect = !0),
                n.colors && (n.stylize = u),
                l(n, e, n.depth)
              );
            }
            function u(e, t) {
              var r = a.styles[t];
              return r
                ? "[" + a.colors[r][0] + "m" + e + "[" + a.colors[r][1] + "m"
                : e;
            }
            function f(e, t) {
              return e;
            }
            function l(e, t, n) {
              if (
                e.customInspect &&
                t &&
                E(t.inspect) &&
                t.inspect !== r.inspect &&
                (!t.constructor || t.constructor.prototype !== t)
              ) {
                var i = t.inspect(n, e);
                return b(i) || (i = l(e, i, n)), i;
              }
              var o = (function(e, t) {
                if (v(t)) return e.stylize("undefined", "undefined");
                if (b(t)) {
                  var r =
                    "'" +
                    JSON.stringify(t)
                      .replace(/^"|"$/g, "")
                      .replace(/'/g, "\\'")
                      .replace(/\\"/g, '"') +
                    "'";
                  return e.stylize(r, "string");
                }
                if (y(t)) return e.stylize("" + t, "number");
                if (d(t)) return e.stylize("" + t, "boolean");
                if (g(t)) return e.stylize("null", "null");
              })(e, t);
              if (o) return o;
              var s = Object.keys(t),
                a = (function(e) {
                  var t = {};
                  return (
                    e.forEach(function(e, r) {
                      t[e] = !0;
                    }),
                    t
                  );
                })(s);
              if (
                (e.showHidden && (s = Object.getOwnPropertyNames(t)),
                S(t) &&
                  (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
              )
                return c(t);
              if (0 === s.length) {
                if (E(t)) {
                  var u = t.name ? ": " + t.name : "";
                  return e.stylize("[Function" + u + "]", "special");
                }
                if (w(t))
                  return e.stylize(RegExp.prototype.toString.call(t), "regexp");
                if (_(t))
                  return e.stylize(Date.prototype.toString.call(t), "date");
                if (S(t)) return c(t);
              }
              var f,
                m = "",
                x = !1,
                T = ["{", "}"];
              (p(t) && ((x = !0), (T = ["[", "]"])), E(t)) &&
                (m = " [Function" + (t.name ? ": " + t.name : "") + "]");
              return (
                w(t) && (m = " " + RegExp.prototype.toString.call(t)),
                _(t) && (m = " " + Date.prototype.toUTCString.call(t)),
                S(t) && (m = " " + c(t)),
                0 !== s.length || (x && 0 != t.length)
                  ? n < 0
                    ? w(t)
                      ? e.stylize(RegExp.prototype.toString.call(t), "regexp")
                      : e.stylize("[Object]", "special")
                    : (e.seen.push(t),
                      (f = x
                        ? (function(e, t, r, n, i) {
                            for (var o = [], s = 0, a = t.length; s < a; ++s)
                              A(t, String(s))
                                ? o.push(h(e, t, r, n, String(s), !0))
                                : o.push("");
                            return (
                              i.forEach(function(i) {
                                i.match(/^\d+$/) ||
                                  o.push(h(e, t, r, n, i, !0));
                              }),
                              o
                            );
                          })(e, t, n, a, s)
                        : s.map(function(r) {
                            return h(e, t, n, a, r, x);
                          })),
                      e.seen.pop(),
                      (function(e, t, r) {
                        if (
                          e.reduce(function(e, t) {
                            return (
                              0,
                              t.indexOf("\n") >= 0 && 0,
                              e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                            );
                          }, 0) > 60
                        )
                          return (
                            r[0] +
                            ("" === t ? "" : t + "\n ") +
                            " " +
                            e.join(",\n  ") +
                            " " +
                            r[1]
                          );
                        return r[0] + t + " " + e.join(", ") + " " + r[1];
                      })(f, m, T))
                  : T[0] + m + T[1]
              );
            }
            function c(e) {
              return "[" + Error.prototype.toString.call(e) + "]";
            }
            function h(e, t, r, n, i, o) {
              var s, a, u;
              if (
                ((u = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] })
                  .get
                  ? (a = u.set
                      ? e.stylize("[Getter/Setter]", "special")
                      : e.stylize("[Getter]", "special"))
                  : u.set && (a = e.stylize("[Setter]", "special")),
                A(n, i) || (s = "[" + i + "]"),
                a ||
                  (e.seen.indexOf(u.value) < 0
                    ? (a = g(r)
                        ? l(e, u.value, null)
                        : l(e, u.value, r - 1)).indexOf("\n") > -1 &&
                      (a = o
                        ? a
                            .split("\n")
                            .map(function(e) {
                              return "  " + e;
                            })
                            .join("\n")
                            .substr(2)
                        : "\n" +
                          a
                            .split("\n")
                            .map(function(e) {
                              return "   " + e;
                            })
                            .join("\n"))
                    : (a = e.stylize("[Circular]", "special"))),
                v(s))
              ) {
                if (o && i.match(/^\d+$/)) return a;
                (s = JSON.stringify("" + i)).match(
                  /^"([a-zA-Z_][a-zA-Z_0-9]*)"$/
                )
                  ? ((s = s.substr(1, s.length - 2)),
                    (s = e.stylize(s, "name")))
                  : ((s = s
                      .replace(/'/g, "\\'")
                      .replace(/\\"/g, '"')
                      .replace(/(^"|"$)/g, "'")),
                    (s = e.stylize(s, "string")));
              }
              return s + ": " + a;
            }
            function p(e) {
              return Array.isArray(e);
            }
            function d(e) {
              return "boolean" == typeof e;
            }
            function g(e) {
              return null === e;
            }
            function y(e) {
              return "number" == typeof e;
            }
            function b(e) {
              return "string" == typeof e;
            }
            function v(e) {
              return void 0 === e;
            }
            function w(e) {
              return m(e) && "[object RegExp]" === x(e);
            }
            function m(e) {
              return "object" == typeof e && null !== e;
            }
            function _(e) {
              return m(e) && "[object Date]" === x(e);
            }
            function S(e) {
              return m(e) && ("[object Error]" === x(e) || e instanceof Error);
            }
            function E(e) {
              return "function" == typeof e;
            }
            function x(e) {
              return Object.prototype.toString.call(e);
            }
            function T(e) {
              return e < 10 ? "0" + e.toString(10) : e.toString(10);
            }
            (r.debuglog = function(e) {
              if (
                (v(o) && (o = t.env.NODE_DEBUG || ""),
                (e = e.toUpperCase()),
                !s[e])
              )
                if (new RegExp("\\b" + e + "\\b", "i").test(o)) {
                  var n = t.pid;
                  s[e] = function() {
                    var t = r.format.apply(r, arguments);
                    console.error("%s %d: %s", e, n, t);
                  };
                } else s[e] = function() {};
              return s[e];
            }),
              (r.inspect = a),
              (a.colors = {
                bold: [1, 22],
                italic: [3, 23],
                underline: [4, 24],
                inverse: [7, 27],
                white: [37, 39],
                grey: [90, 39],
                black: [30, 39],
                blue: [34, 39],
                cyan: [36, 39],
                green: [32, 39],
                magenta: [35, 39],
                red: [31, 39],
                yellow: [33, 39]
              }),
              (a.styles = {
                special: "cyan",
                number: "yellow",
                boolean: "yellow",
                undefined: "grey",
                null: "bold",
                string: "green",
                date: "magenta",
                regexp: "red"
              }),
              (r.isArray = p),
              (r.isBoolean = d),
              (r.isNull = g),
              (r.isNullOrUndefined = function(e) {
                return null == e;
              }),
              (r.isNumber = y),
              (r.isString = b),
              (r.isSymbol = function(e) {
                return "symbol" == typeof e;
              }),
              (r.isUndefined = v),
              (r.isRegExp = w),
              (r.isObject = m),
              (r.isDate = _),
              (r.isError = S),
              (r.isFunction = E),
              (r.isPrimitive = function(e) {
                return (
                  null === e ||
                  "boolean" == typeof e ||
                  "number" == typeof e ||
                  "string" == typeof e ||
                  "symbol" == typeof e ||
                  void 0 === e
                );
              }),
              (r.isBuffer = e("./support/isBuffer"));
            var k = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec"
            ];
            function A(e, t) {
              return Object.prototype.hasOwnProperty.call(e, t);
            }
            (r.log = function() {
              var e, t;
              console.log(
                "%s - %s",
                ((e = new Date()),
                (t = [
                  T(e.getHours()),
                  T(e.getMinutes()),
                  T(e.getSeconds())
                ].join(":")),
                [e.getDate(), k[e.getMonth()], t].join(" ")),
                r.format.apply(r, arguments)
              );
            }),
              (r.inherits = e("inherits")),
              (r._extend = function(e, t) {
                if (!t || !m(t)) return e;
                for (var r = Object.keys(t), n = r.length; n--; )
                  e[r[n]] = t[r[n]];
                return e;
              });
          }.call(
            this,
            e("_process"),
            "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : {}
          ));
        },
        { "./support/isBuffer": 31, _process: 11, inherits: 30 }
      ],
      33: [
        function(e, t, r) {
          (function(r) {
            "use strict";
            var n = e("stream-buffers"),
              i = !1;
            function o(e) {
              this.value = e;
            }
            function s(e) {
              if (e.bplistOverride) return [e];
              if (e instanceof Array)
                return (function(e) {
                  i && console.log("toEntriesArray");
                  var t = [{ type: "array", entries: [] }];
                  return (
                    e.forEach(function(e) {
                      var r = s(e);
                      t[0].entries.push(r[0]), (t = t.concat(r));
                    }),
                    t
                  );
                })(e);
              if (e instanceof r) return [{ type: "data", value: e }];
              if (e instanceof o) return [{ type: "double", value: e.value }];
              if ("object" == typeof e)
                return e instanceof Date
                  ? [{ type: "date", value: e }]
                  : 1 == Object.keys(e).length && "number" == typeof e.UID
                  ? [{ type: "UID", value: e.UID }]
                  : (function(e) {
                      i && console.log("toEntriesObject");
                      var t = [
                        { type: "dict", entryKeys: [], entryValues: [] }
                      ];
                      return (
                        Object.keys(e).forEach(function(e) {
                          var r = s(e);
                          t[0].entryKeys.push(r[0]), (t = t.concat(r[0]));
                        }),
                        Object.keys(e).forEach(function(r) {
                          var n = s(e[r]);
                          t[0].entryValues.push(n[0]), (t = t.concat(n));
                        }),
                        t
                      );
                    })(e);
              if ("string" == typeof e) return [{ type: "string", value: e }];
              if ("number" == typeof e) return [{ type: "number", value: e }];
              if ("boolean" == typeof e) return [{ type: "boolean", value: e }];
              if ("bigint" == typeof e)
                return [
                  { type: "number", value: Number(BigInt.asIntN(32, e)) }
                ];
              throw new Error("unhandled entry: " + e);
            }
            (t.exports = function(t) {
              var o = new n.WritableStreamBuffer();
              o.write(new r("bplist00")),
                i && console.log("create", e("util").inspect(t, !1, 10)),
                t instanceof Array && 1 === t.length && (t = t[0]);
              var a = s(t);
              i && console.log("entries", a);
              var u,
                f,
                l,
                c,
                h = (function(e) {
                  if (e < 256) return 1;
                  if (e < 65536) return 2;
                  return 4;
                })(a.length),
                p = [];
              return (
                (l = {}),
                (c = 0),
                a.forEach(function(e) {
                  e.id ||
                    ("string" === e.type
                      ? !e.bplistOverride && l.hasOwnProperty(e.value)
                        ? ((e.type = "stringref"), (e.id = l[e.value]))
                        : (l[e.value] = e.id = c++)
                      : (e.id = c++));
                }),
                (a = a.filter(function(e) {
                  return "stringref" !== e.type;
                })).forEach(function(e, t) {
                  (p[t] = o.size()),
                    e
                      ? (function(e) {
                          switch (e.type) {
                            case "dict":
                              !(function(e) {
                                if (i) {
                                  var t = e.entryKeys.map(function(e) {
                                      return e.id;
                                    }),
                                    r = e.entryValues.map(function(e) {
                                      return e.id;
                                    });
                                  console.log(
                                    "0x" + o.size().toString(16),
                                    "writeDict",
                                    "(id: " + e.id + ")",
                                    "(keys: " + t + ")",
                                    "(values: " + r + ")"
                                  );
                                }
                                b(13, e.entryKeys.length),
                                  e.entryKeys.forEach(function(e) {
                                    v(e.id);
                                  }),
                                  e.entryValues.forEach(function(e) {
                                    v(e.id);
                                  });
                              })(e);
                              break;
                            case "number":
                            case "double":
                              !(function(e) {
                                i &&
                                  console.log(
                                    "0x" + o.size().toString(16),
                                    "writeNumber",
                                    e.value,
                                    " (type: " + e.type + ")",
                                    "(id: " + e.id + ")"
                                  );
                                "double" !== e.type &&
                                parseFloat(e.value.toFixed()) == e.value
                                  ? e.value < 0
                                    ? (g(19), w(e.value, 8, !0))
                                    : e.value <= 255
                                    ? (g(16), w(e.value, 1))
                                    : e.value <= 65535
                                    ? (g(17), w(e.value, 2))
                                    : e.value <= 4294967295
                                    ? (g(18), w(e.value, 4))
                                    : (g(20), w(e.value, 8))
                                  : (g(35), y(e.value));
                              })(e);
                              break;
                            case "UID":
                              !(function(e) {
                                i &&
                                  console.log(
                                    "0x" + o.size().toString(16),
                                    "writeUID",
                                    e.value,
                                    " (type: " + e.type + ")",
                                    "(id: " + e.id + ")"
                                  );
                                b(8, 0), v(e.value);
                              })(e);
                              break;
                            case "array":
                              !(function(e) {
                                i &&
                                  console.log(
                                    "0x" + o.size().toString(16),
                                    "writeArray (length: " +
                                      e.entries.length +
                                      ")",
                                    "(id: " + e.id + ")"
                                  );
                                b(10, e.entries.length),
                                  e.entries.forEach(function(e) {
                                    v(e.id);
                                  });
                              })(e);
                              break;
                            case "boolean":
                              !(function(e) {
                                i &&
                                  console.log(
                                    "0x" + o.size().toString(16),
                                    "writeBoolean",
                                    e.value,
                                    "(id: " + e.id + ")"
                                  );
                                g(e.value ? 9 : 8);
                              })(e);
                              break;
                            case "string":
                            case "string-utf16":
                              !(function(e) {
                                i &&
                                  console.log(
                                    "0x" + o.size().toString(16),
                                    "writeString",
                                    e.value,
                                    "(id: " + e.id + ")"
                                  );
                                if (
                                  "string-utf16" === e.type ||
                                  ((u = e.value),
                                  r.byteLength(u, "utf8") != u.length)
                                ) {
                                  var t = new r(e.value, "ucs2");
                                  b(6, t.length / 2);
                                  for (var n = 0; n < t.length; n += 2) {
                                    var s = t[n + 0];
                                    (t[n + 0] = t[n + 1]), (t[n + 1] = s);
                                  }
                                  o.write(t);
                                } else {
                                  var a = new r(e.value, "ascii");
                                  b(5, a.length), o.write(a);
                                }
                                var u;
                              })(e);
                              break;
                            case "date":
                              !(function(e) {
                                g(51), y(Date.parse(e.value) / 1e3 - 978307200);
                              })(e);
                              break;
                            case "data":
                              !(function(e) {
                                i &&
                                  console.log(
                                    "0x" + o.size().toString(16),
                                    "writeData",
                                    e.value,
                                    "(id: " + e.id + ")"
                                  );
                                b(4, e.value.length), o.write(e.value);
                              })(e);
                              break;
                            default:
                              throw new Error(
                                "unhandled entry type: " + e.type
                              );
                          }
                        })(e)
                      : o.write(0);
                }),
                (function() {
                  i &&
                    console.log(
                      "0x" + o.size().toString(16),
                      "writeOffsetTable"
                    );
                  (f = o.size()),
                    (u = (function(e) {
                      if (e < 256) return 1;
                      if (e < 65536) return 2;
                      if (e < 4294967296) return 4;
                      return 8;
                    })(f)),
                    p.forEach(function(e) {
                      w(e, u);
                    });
                })(),
                (function() {
                  i &&
                    console.log("0x" + o.size().toString(16), "writeTrailer");
                  o.write(new r([0, 0, 0, 0, 0, 0])),
                    i &&
                      console.log(
                        "0x" + o.size().toString(16),
                        "writeTrailer(offsetSizeInBytes):",
                        u
                      );
                  g(u),
                    i &&
                      console.log(
                        "0x" + o.size().toString(16),
                        "writeTrailer(offsetSizeInBytes):",
                        h
                      );
                  g(h),
                    i &&
                      console.log(
                        "0x" + o.size().toString(16),
                        "writeTrailer(number of objects):",
                        a.length
                      );
                  d(a.length),
                    i &&
                      console.log(
                        "0x" + o.size().toString(16),
                        "writeTrailer(top object)"
                      );
                  d(0),
                    i &&
                      console.log(
                        "0x" + o.size().toString(16),
                        "writeTrailer(offset table offset):",
                        f
                      );
                  d(f);
                })(),
                o.getContents()
              );
              function d(e) {
                w(e, 8);
              }
              function g(e) {
                o.write(new r([e]));
              }
              function y(e) {
                var t = new r(8);
                t.writeDoubleBE(e, 0), o.write(t);
              }
              function b(e, t) {
                t < 15
                  ? g((e << 4) + t)
                  : t < 256
                  ? (g(15 + (e << 4)), g(16), w(t, 1))
                  : t < 65536
                  ? (g(15 + (e << 4)), g(17), w(t, 2))
                  : (g(15 + (e << 4)), g(18), w(t, 4));
              }
              function v(e) {
                w(e, h);
              }
              function w(e, t, n) {
                var i = new r(t),
                  s = 0;
                if (!n) for (; t > 4; ) (i[s++] = 0), t--;
                for (var a = t - 1; a >= 0; a--) i[s++] = e >> (8 * a);
                o.write(i);
              }
            }),
              (t.exports.Real = o);
          }.call(this, e("buffer").Buffer));
        },
        { buffer: 3, "stream-buffers": 36, util: 32 }
      ],
      34: [
        function(e, t, r) {
          t.exports = {
            DEFAULT_INITIAL_SIZE: 8192,
            DEFAULT_INCREMENT_AMOUNT: 8192,
            DEFAULT_FREQUENCY: 1,
            DEFAULT_CHUNK_SIZE: 1024
          };
        },
        {}
      ],
      35: [
        function(e, t, r) {
          (function(r) {
            var n = e("stream"),
              i = e("./constants"),
              o = e("util"),
              s = (t.exports = function(e) {
                var t = this;
                n.Stream.call(this);
                var o = (e = e || {}).hasOwnProperty("frequency")
                    ? e.frequency
                    : i.DEFAULT_FREQUENCY,
                  s = e.chunkSize || i.DEFAULT_CHUNK_SIZE,
                  a = e.initialSize || i.DEFAULT_INITIAL_SIZE,
                  u = e.incrementAmount || i.DEFAULT_INCREMENT_AMOUNT,
                  f = 0,
                  l = new r(a),
                  c = null;
                (this.readable = !0), (this.writable = !1);
                var h = function() {
                  var e = Math.min(s, f);
                  if (e > 0) {
                    var n = null;
                    c
                      ? (n = l.toString(c, 0, e))
                      : ((n = new r(e)), l.copy(n, 0, 0, e)),
                      t.emit("data", n),
                      e < l.length && l.copy(l, 0, e, f),
                      (f -= e);
                  }
                  0 !== f ||
                    t.readable ||
                    (t.emit("end"),
                    t.emit("close"),
                    h &&
                      h.interval &&
                      (clearInterval(h.interval), (h.interval = null)));
                };
                (this.size = function() {
                  return f;
                }),
                  (this.maxSize = function() {
                    return l.length;
                  });
                var p = function(e) {
                  if (l.length - f < e) {
                    var t = Math.ceil((e - (l.length - f)) / u),
                      n = new r(l.length + u * t);
                    l.copy(n, 0, 0, f), (l = n);
                  }
                };
                (this.put = function(e, n) {
                  if (t.readable) {
                    var i = 0 === f;
                    if (r.isBuffer(e))
                      p(e.length), e.copy(l, f, 0), (f += e.length);
                    else {
                      e += "";
                      var s = r.byteLength(e);
                      p(s), l.write(e, f, n || "utf8"), (f += s);
                    }
                    if (
                      (i && f > 0 && this.emit("readable"),
                      !this.isPaused && !o)
                    )
                      for (; f > 0; ) h();
                  }
                }),
                  (this.pause = function() {
                    (this.isPaused = !0),
                      h &&
                        h.interval &&
                        (clearInterval(h.interval), delete h.interval);
                  }),
                  (this.resume = function() {
                    (this.isPaused = !1),
                      h &&
                        !h.interval &&
                        o > 0 &&
                        (h.interval = setInterval(h, o));
                  }),
                  (this.destroy = function() {
                    t.emit("end"),
                      h.interval && clearInterval(h.interval),
                      (h = null),
                      (t.readable = !1),
                      t.emit("close");
                  }),
                  (this.destroySoon = function() {
                    (t.readable = !1),
                      h.interval || (t.emit("end"), t.emit("close"));
                  }),
                  (this.setEncoding = function(e) {
                    c = e;
                  }),
                  this.resume();
              });
            o.inherits(s, n.Stream);
          }.call(this, e("buffer").Buffer));
        },
        { "./constants": 34, buffer: 3, stream: 27, util: 32 }
      ],
      36: [
        function(e, t, r) {
          (t.exports = e("./constants")),
            (t.exports.ReadableStreamBuffer = e("./readable_streambuffer")),
            (t.exports.WritableStreamBuffer = e("./writable_streambuffer"));
        },
        {
          "./constants": 34,
          "./readable_streambuffer": 35,
          "./writable_streambuffer": 37
        }
      ],
      37: [
        function(e, t, r) {
          (function(r) {
            var n = e("util"),
              i = e("stream"),
              o = e("./constants"),
              s = (t.exports = function(e) {
                var t = this;
                i.Stream.call(this);
                var n = (e = e || {}).initialSize || o.DEFAULT_INITIAL_SIZE,
                  s = e.incrementAmount || o.DEFAULT_INCREMENT_AMOUNT,
                  a = new r(n),
                  u = 0;
                (this.writable = !0),
                  (this.readable = !1),
                  (this.size = function() {
                    return u;
                  }),
                  (this.maxSize = function() {
                    return a.length;
                  }),
                  (this.getContents = function(e) {
                    if (!u) return !1;
                    var t = new r(Math.min(e || u, u));
                    return (
                      a.copy(t, 0, 0, t.length),
                      t.length < u && a.copy(a, 0, t.length),
                      (u -= t.length),
                      t
                    );
                  }),
                  (this.getContentsAsString = function(e, t) {
                    if (!u) return !1;
                    var n = a.toString(e || "utf8", 0, Math.min(t || u, u)),
                      i = r.byteLength(n);
                    return i < u && a.copy(a, 0, i), (u -= i), n;
                  });
                var f = function(e) {
                  if (a.length - u < e) {
                    var t = Math.ceil((e - (a.length - u)) / s),
                      n = new r(a.length + s * t);
                    a.copy(n, 0, 0, u), (a = n);
                  }
                };
                (this.write = function(e, n, i) {
                  t.writable &&
                    (r.isBuffer(e)
                      ? (f(e.length), e.copy(a, u, 0), (u += e.length))
                      : ((e += ""),
                        f(r.byteLength(e)),
                        a.write(e, u, n || "utf8"),
                        (u += r.byteLength(e))),
                    "function" == typeof i && i());
                }),
                  (this.end = function() {
                    var e = Array.prototype.slice.apply(arguments);
                    e.length && t.write.apply(t, e),
                      t.emit("finish"),
                      t.destroy();
                  }),
                  (this.destroySoon = this.destroy = function() {
                    (t.writable = !1), t.emit("close");
                  });
              });
            n.inherits(s, i.Stream);
          }.call(this, e("buffer").Buffer));
        },
        { "./constants": 34, buffer: 3, stream: 27, util: 32 }
      ]
    },
    {},
    [33]
  )(33);
})();
export let parser = (function() {
  return (function() {
    return function t(e, r, n) {
      function o(u, a) {
        if (!r[u]) {
          if (!e[u]) {
            var s = "function" == typeof require && require;
            if (!a && s) return s(u, !0);
            if (i) return i(u, !0);
            var f = new Error("Cannot find module '" + u + "'");
            throw ((f.code = "MODULE_NOT_FOUND"), f);
          }
          var p = (r[u] = { exports: {} });
          e[u][0].call(
            p.exports,
            function(t) {
              return o(e[u][1][t] || t);
            },
            p,
            p.exports,
            t,
            e,
            r,
            n
          );
        }
        return r[u].exports;
      }
      for (
        var i = "function" == typeof require && require, u = 0;
        u < n.length;
        u++
      )
        o(n[u]);
      return o;
    };
  })()(
    {
      1: [
        function(t, e, r) {
          "use strict";
          (r.byteLength = function(t) {
            var e = f(t),
              r = e[0],
              n = e[1];
            return (3 * (r + n)) / 4 - n;
          }),
            (r.toByteArray = function(t) {
              var e,
                r,
                n = f(t),
                u = n[0],
                a = n[1],
                s = new i(
                  (function(t, e, r) {
                    return (3 * (e + r)) / 4 - r;
                  })(0, u, a)
                ),
                p = 0,
                l = a > 0 ? u - 4 : u;
              for (r = 0; r < l; r += 4)
                (e =
                  (o[t.charCodeAt(r)] << 18) |
                  (o[t.charCodeAt(r + 1)] << 12) |
                  (o[t.charCodeAt(r + 2)] << 6) |
                  o[t.charCodeAt(r + 3)]),
                  (s[p++] = (e >> 16) & 255),
                  (s[p++] = (e >> 8) & 255),
                  (s[p++] = 255 & e);
              2 === a &&
                ((e =
                  (o[t.charCodeAt(r)] << 2) | (o[t.charCodeAt(r + 1)] >> 4)),
                (s[p++] = 255 & e));
              1 === a &&
                ((e =
                  (o[t.charCodeAt(r)] << 10) |
                  (o[t.charCodeAt(r + 1)] << 4) |
                  (o[t.charCodeAt(r + 2)] >> 2)),
                (s[p++] = (e >> 8) & 255),
                (s[p++] = 255 & e));
              return s;
            }),
            (r.fromByteArray = function(t) {
              for (
                var e, r = t.length, o = r % 3, i = [], u = 0, a = r - o;
                u < a;
                u += 16383
              )
                i.push(p(t, u, u + 16383 > a ? a : u + 16383));
              1 === o
                ? ((e = t[r - 1]), i.push(n[e >> 2] + n[(e << 4) & 63] + "=="))
                : 2 === o &&
                  ((e = (t[r - 2] << 8) + t[r - 1]),
                  i.push(
                    n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + "="
                  ));
              return i.join("");
            });
          for (
            var n = [],
              o = [],
              i = "undefined" != typeof Uint8Array ? Uint8Array : Array,
              u =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
              a = 0,
              s = u.length;
            a < s;
            ++a
          )
            (n[a] = u[a]), (o[u.charCodeAt(a)] = a);
          function f(t) {
            var e = t.length;
            if (e % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            var r = t.indexOf("=");
            return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
          }
          function p(t, e, r) {
            for (var o, i, u = [], a = e; a < r; a += 3)
              (o =
                ((t[a] << 16) & 16711680) +
                ((t[a + 1] << 8) & 65280) +
                (255 & t[a + 2])),
                u.push(
                  n[((i = o) >> 18) & 63] +
                    n[(i >> 12) & 63] +
                    n[(i >> 6) & 63] +
                    n[63 & i]
                );
            return u.join("");
          }
          (o["-".charCodeAt(0)] = 62), (o["_".charCodeAt(0)] = 63);
        },
        {}
      ],
      2: [function(t, e, r) {}, {}],
      3: [
        function(t, e, r) {
          (function(e) {
            "use strict";
            var n = t("base64-js"),
              o = t("ieee754");
            (r.Buffer = e),
              (r.SlowBuffer = function(t) {
                +t != t && (t = 0);
                return e.alloc(+t);
              }),
              (r.INSPECT_MAX_BYTES = 50);
            var i = 2147483647;
            function u(t) {
              if (t > i)
                throw new RangeError(
                  'The value "' + t + '" is invalid for option "size"'
                );
              var r = new Uint8Array(t);
              return (r.__proto__ = e.prototype), r;
            }
            function e(t, e, r) {
              if ("number" == typeof t) {
                if ("string" == typeof e)
                  throw new TypeError(
                    'The "string" argument must be of type string. Received type number'
                  );
                return f(t);
              }
              return a(t, e, r);
            }
            function a(t, r, n) {
              if ("string" == typeof t)
                return (function(t, r) {
                  ("string" == typeof r && "" !== r) || (r = "utf8");
                  if (!e.isEncoding(r))
                    throw new TypeError("Unknown encoding: " + r);
                  var n = 0 | h(t, r),
                    o = u(n),
                    i = o.write(t, r);
                  i !== n && (o = o.slice(0, i));
                  return o;
                })(t, r);
              if (ArrayBuffer.isView(t)) return p(t);
              if (null == t)
                throw TypeError(
                  "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                    typeof t
                );
              if (z(t, ArrayBuffer) || (t && z(t.buffer, ArrayBuffer)))
                return (function(t, r, n) {
                  if (r < 0 || t.byteLength < r)
                    throw new RangeError(
                      '"offset" is outside of buffer bounds'
                    );
                  if (t.byteLength < r + (n || 0))
                    throw new RangeError(
                      '"length" is outside of buffer bounds'
                    );
                  var o;
                  o =
                    void 0 === r && void 0 === n
                      ? new Uint8Array(t)
                      : void 0 === n
                      ? new Uint8Array(t, r)
                      : new Uint8Array(t, r, n);
                  return (o.__proto__ = e.prototype), o;
                })(t, r, n);
              if ("number" == typeof t)
                throw new TypeError(
                  'The "value" argument must not be of type number. Received type number'
                );
              var o = t.valueOf && t.valueOf();
              if (null != o && o !== t) return e.from(o, r, n);
              var i = (function(t) {
                if (e.isBuffer(t)) {
                  var r = 0 | l(t.length),
                    n = u(r);
                  return 0 === n.length ? n : (t.copy(n, 0, 0, r), n);
                }
                if (void 0 !== t.length)
                  return "number" != typeof t.length || D(t.length)
                    ? u(0)
                    : p(t);
                if ("Buffer" === t.type && Array.isArray(t.data))
                  return p(t.data);
              })(t);
              if (i) return i;
              if (
                "undefined" != typeof Symbol &&
                null != Symbol.toPrimitive &&
                "function" == typeof t[Symbol.toPrimitive]
              )
                return e.from(t[Symbol.toPrimitive]("string"), r, n);
              throw new TypeError(
                "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
                  typeof t
              );
            }
            function s(t) {
              if ("number" != typeof t)
                throw new TypeError('"size" argument must be of type number');
              if (t < 0)
                throw new RangeError(
                  'The value "' + t + '" is invalid for option "size"'
                );
            }
            function f(t) {
              return s(t), u(t < 0 ? 0 : 0 | l(t));
            }
            function p(t) {
              for (
                var e = t.length < 0 ? 0 : 0 | l(t.length), r = u(e), n = 0;
                n < e;
                n += 1
              )
                r[n] = 255 & t[n];
              return r;
            }
            function l(t) {
              if (t >= i)
                throw new RangeError(
                  "Attempt to allocate Buffer larger than maximum size: 0x" +
                    i.toString(16) +
                    " bytes"
                );
              return 0 | t;
            }
            function h(t, r) {
              if (e.isBuffer(t)) return t.length;
              if (ArrayBuffer.isView(t) || z(t, ArrayBuffer))
                return t.byteLength;
              if ("string" != typeof t)
                throw new TypeError(
                  'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
                    typeof t
                );
              var n = t.length,
                o = arguments.length > 2 && !0 === arguments[2];
              if (!o && 0 === n) return 0;
              for (var i = !1; ; )
                switch (r) {
                  case "ascii":
                  case "latin1":
                  case "binary":
                    return n;
                  case "utf8":
                  case "utf-8":
                    return _(t).length;
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return 2 * n;
                  case "hex":
                    return n >>> 1;
                  case "base64":
                    return R(t).length;
                  default:
                    if (i) return o ? -1 : _(t).length;
                    (r = ("" + r).toLowerCase()), (i = !0);
                }
            }
            function c(t, e, r) {
              var n = t[e];
              (t[e] = t[r]), (t[r] = n);
            }
            function y(t, r, n, o, i) {
              if (0 === t.length) return -1;
              if (
                ("string" == typeof n
                  ? ((o = n), (n = 0))
                  : n > 2147483647
                  ? (n = 2147483647)
                  : n < -2147483648 && (n = -2147483648),
                D((n = +n)) && (n = i ? 0 : t.length - 1),
                n < 0 && (n = t.length + n),
                n >= t.length)
              ) {
                if (i) return -1;
                n = t.length - 1;
              } else if (n < 0) {
                if (!i) return -1;
                n = 0;
              }
              if (("string" == typeof r && (r = e.from(r, o)), e.isBuffer(r)))
                return 0 === r.length ? -1 : g(t, r, n, o, i);
              if ("number" == typeof r)
                return (
                  (r &= 255),
                  "function" == typeof Uint8Array.prototype.indexOf
                    ? i
                      ? Uint8Array.prototype.indexOf.call(t, r, n)
                      : Uint8Array.prototype.lastIndexOf.call(t, r, n)
                    : g(t, [r], n, o, i)
                );
              throw new TypeError("val must be string, number or Buffer");
            }
            function g(t, e, r, n, o) {
              var i,
                u = 1,
                a = t.length,
                s = e.length;
              if (
                void 0 !== n &&
                ("ucs2" === (n = String(n).toLowerCase()) ||
                  "ucs-2" === n ||
                  "utf16le" === n ||
                  "utf-16le" === n)
              ) {
                if (t.length < 2 || e.length < 2) return -1;
                (u = 2), (a /= 2), (s /= 2), (r /= 2);
              }
              function f(t, e) {
                return 1 === u ? t[e] : t.readUInt16BE(e * u);
              }
              if (o) {
                var p = -1;
                for (i = r; i < a; i++)
                  if (f(t, i) === f(e, -1 === p ? 0 : i - p)) {
                    if ((-1 === p && (p = i), i - p + 1 === s)) return p * u;
                  } else -1 !== p && (i -= i - p), (p = -1);
              } else
                for (r + s > a && (r = a - s), i = r; i >= 0; i--) {
                  for (var l = !0, h = 0; h < s; h++)
                    if (f(t, i + h) !== f(e, h)) {
                      l = !1;
                      break;
                    }
                  if (l) return i;
                }
              return -1;
            }
            function v(t, e, r, n) {
              r = Number(r) || 0;
              var o = t.length - r;
              n ? (n = Number(n)) > o && (n = o) : (n = o);
              var i = e.length;
              n > i / 2 && (n = i / 2);
              for (var u = 0; u < n; ++u) {
                var a = parseInt(e.substr(2 * u, 2), 16);
                if (D(a)) return u;
                t[r + u] = a;
              }
              return u;
            }
            function d(t, e, r, n) {
              return j(_(e, t.length - r), t, r, n);
            }
            function w(t, e, r, n) {
              return j(
                (function(t) {
                  for (var e = [], r = 0; r < t.length; ++r)
                    e.push(255 & t.charCodeAt(r));
                  return e;
                })(e),
                t,
                r,
                n
              );
            }
            function m(t, e, r, n) {
              return w(t, e, r, n);
            }
            function b(t, e, r, n) {
              return j(R(e), t, r, n);
            }
            function E(t, e, r, n) {
              return j(
                (function(t, e) {
                  for (
                    var r, n, o, i = [], u = 0;
                    u < t.length && !((e -= 2) < 0);
                    ++u
                  )
                    (r = t.charCodeAt(u)),
                      (n = r >> 8),
                      (o = r % 256),
                      i.push(o),
                      i.push(n);
                  return i;
                })(e, t.length - r),
                t,
                r,
                n
              );
            }
            function S(t, e, r) {
              return 0 === e && r === t.length
                ? n.fromByteArray(t)
                : n.fromByteArray(t.slice(e, r));
            }
            function B(t, e, r) {
              r = Math.min(t.length, r);
              for (var n = [], o = e; o < r; ) {
                var i,
                  u,
                  a,
                  s,
                  f = t[o],
                  p = null,
                  l = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
                if (o + l <= r)
                  switch (l) {
                    case 1:
                      f < 128 && (p = f);
                      break;
                    case 2:
                      128 == (192 & (i = t[o + 1])) &&
                        (s = ((31 & f) << 6) | (63 & i)) > 127 &&
                        (p = s);
                      break;
                    case 3:
                      (i = t[o + 1]),
                        (u = t[o + 2]),
                        128 == (192 & i) &&
                          128 == (192 & u) &&
                          (s = ((15 & f) << 12) | ((63 & i) << 6) | (63 & u)) >
                            2047 &&
                          (s < 55296 || s > 57343) &&
                          (p = s);
                      break;
                    case 4:
                      (i = t[o + 1]),
                        (u = t[o + 2]),
                        (a = t[o + 3]),
                        128 == (192 & i) &&
                          128 == (192 & u) &&
                          128 == (192 & a) &&
                          (s =
                            ((15 & f) << 18) |
                            ((63 & i) << 12) |
                            ((63 & u) << 6) |
                            (63 & a)) > 65535 &&
                          s < 1114112 &&
                          (p = s);
                  }
                null === p
                  ? ((p = 65533), (l = 1))
                  : p > 65535 &&
                    ((p -= 65536),
                    n.push(((p >>> 10) & 1023) | 55296),
                    (p = 56320 | (1023 & p))),
                  n.push(p),
                  (o += l);
              }
              return (function(t) {
                var e = t.length;
                if (e <= A) return String.fromCharCode.apply(String, t);
                var r = "",
                  n = 0;
                for (; n < e; )
                  r += String.fromCharCode.apply(String, t.slice(n, (n += A)));
                return r;
              })(n);
            }
            (r.kMaxLength = i),
              (e.TYPED_ARRAY_SUPPORT = (function() {
                try {
                  var t = new Uint8Array(1);
                  return (
                    (t.__proto__ = {
                      __proto__: Uint8Array.prototype,
                      foo: function() {
                        return 42;
                      }
                    }),
                    42 === t.foo()
                  );
                } catch (t) {
                  return !1;
                }
              })()),
              e.TYPED_ARRAY_SUPPORT ||
                "undefined" == typeof console ||
                "function" != typeof console.error ||
                console.error(
                  "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
                ),
              Object.defineProperty(e.prototype, "parent", {
                enumerable: !0,
                get: function() {
                  if (e.isBuffer(this)) return this.buffer;
                }
              }),
              Object.defineProperty(e.prototype, "offset", {
                enumerable: !0,
                get: function() {
                  if (e.isBuffer(this)) return this.byteOffset;
                }
              }),
              "undefined" != typeof Symbol &&
                null != Symbol.species &&
                e[Symbol.species] === e &&
                Object.defineProperty(e, Symbol.species, {
                  value: null,
                  configurable: !0,
                  enumerable: !1,
                  writable: !1
                }),
              (e.poolSize = 8192),
              (e.from = function(t, e, r) {
                return a(t, e, r);
              }),
              (e.prototype.__proto__ = Uint8Array.prototype),
              (e.__proto__ = Uint8Array),
              (e.alloc = function(t, e, r) {
                return (function(t, e, r) {
                  return (
                    s(t),
                    t <= 0
                      ? u(t)
                      : void 0 !== e
                      ? "string" == typeof r
                        ? u(t).fill(e, r)
                        : u(t).fill(e)
                      : u(t)
                  );
                })(t, e, r);
              }),
              (e.allocUnsafe = function(t) {
                return f(t);
              }),
              (e.allocUnsafeSlow = function(t) {
                return f(t);
              }),
              (e.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== e.prototype;
              }),
              (e.compare = function(t, r) {
                if (
                  (z(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)),
                  z(r, Uint8Array) && (r = e.from(r, r.offset, r.byteLength)),
                  !e.isBuffer(t) || !e.isBuffer(r))
                )
                  throw new TypeError(
                    'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
                  );
                if (t === r) return 0;
                for (
                  var n = t.length, o = r.length, i = 0, u = Math.min(n, o);
                  i < u;
                  ++i
                )
                  if (t[i] !== r[i]) {
                    (n = t[i]), (o = r[i]);
                    break;
                  }
                return n < o ? -1 : o < n ? 1 : 0;
              }),
              (e.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                  case "hex":
                  case "utf8":
                  case "utf-8":
                  case "ascii":
                  case "latin1":
                  case "binary":
                  case "base64":
                  case "ucs2":
                  case "ucs-2":
                  case "utf16le":
                  case "utf-16le":
                    return !0;
                  default:
                    return !1;
                }
              }),
              (e.concat = function(t, r) {
                if (!Array.isArray(t))
                  throw new TypeError(
                    '"list" argument must be an Array of Buffers'
                  );
                if (0 === t.length) return e.alloc(0);
                var n;
                if (void 0 === r)
                  for (r = 0, n = 0; n < t.length; ++n) r += t[n].length;
                var o = e.allocUnsafe(r),
                  i = 0;
                for (n = 0; n < t.length; ++n) {
                  var u = t[n];
                  if ((z(u, Uint8Array) && (u = e.from(u)), !e.isBuffer(u)))
                    throw new TypeError(
                      '"list" argument must be an Array of Buffers'
                    );
                  u.copy(o, i), (i += u.length);
                }
                return o;
              }),
              (e.byteLength = h),
              (e.prototype._isBuffer = !0),
              (e.prototype.swap16 = function() {
                var t = this.length;
                if (t % 2 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 16-bits"
                  );
                for (var e = 0; e < t; e += 2) c(this, e, e + 1);
                return this;
              }),
              (e.prototype.swap32 = function() {
                var t = this.length;
                if (t % 4 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 32-bits"
                  );
                for (var e = 0; e < t; e += 4)
                  c(this, e, e + 3), c(this, e + 1, e + 2);
                return this;
              }),
              (e.prototype.swap64 = function() {
                var t = this.length;
                if (t % 8 != 0)
                  throw new RangeError(
                    "Buffer size must be a multiple of 64-bits"
                  );
                for (var e = 0; e < t; e += 8)
                  c(this, e, e + 7),
                    c(this, e + 1, e + 6),
                    c(this, e + 2, e + 5),
                    c(this, e + 3, e + 4);
                return this;
              }),
              (e.prototype.toString = function() {
                var t = this.length;
                return 0 === t
                  ? ""
                  : 0 === arguments.length
                  ? B(this, 0, t)
                  : function(t, e, r) {
                      var n = !1;
                      if (((void 0 === e || e < 0) && (e = 0), e > this.length))
                        return "";
                      if (
                        ((void 0 === r || r > this.length) && (r = this.length),
                        r <= 0)
                      )
                        return "";
                      if ((r >>>= 0) <= (e >>>= 0)) return "";
                      for (t || (t = "utf8"); ; )
                        switch (t) {
                          case "hex":
                            return T(this, e, r);
                          case "utf8":
                          case "utf-8":
                            return B(this, e, r);
                          case "ascii":
                            return I(this, e, r);
                          case "latin1":
                          case "binary":
                            return M(this, e, r);
                          case "base64":
                            return S(this, e, r);
                          case "ucs2":
                          case "ucs-2":
                          case "utf16le":
                          case "utf-16le":
                            return O(this, e, r);
                          default:
                            if (n)
                              throw new TypeError("Unknown encoding: " + t);
                            (t = (t + "").toLowerCase()), (n = !0);
                        }
                    }.apply(this, arguments);
              }),
              (e.prototype.toLocaleString = e.prototype.toString),
              (e.prototype.equals = function(t) {
                if (!e.isBuffer(t))
                  throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === e.compare(this, t);
              }),
              (e.prototype.inspect = function() {
                var t = "",
                  e = r.INSPECT_MAX_BYTES;
                return (
                  (t = this.toString("hex", 0, e)
                    .replace(/(.{2})/g, "$1 ")
                    .trim()),
                  this.length > e && (t += " ... "),
                  "<Buffer " + t + ">"
                );
              }),
              (e.prototype.compare = function(t, r, n, o, i) {
                if (
                  (z(t, Uint8Array) && (t = e.from(t, t.offset, t.byteLength)),
                  !e.isBuffer(t))
                )
                  throw new TypeError(
                    'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                      typeof t
                  );
                if (
                  (void 0 === r && (r = 0),
                  void 0 === n && (n = t ? t.length : 0),
                  void 0 === o && (o = 0),
                  void 0 === i && (i = this.length),
                  r < 0 || n > t.length || o < 0 || i > this.length)
                )
                  throw new RangeError("out of range index");
                if (o >= i && r >= n) return 0;
                if (o >= i) return -1;
                if (r >= n) return 1;
                if (this === t) return 0;
                for (
                  var u = (i >>>= 0) - (o >>>= 0),
                    a = (n >>>= 0) - (r >>>= 0),
                    s = Math.min(u, a),
                    f = this.slice(o, i),
                    p = t.slice(r, n),
                    l = 0;
                  l < s;
                  ++l
                )
                  if (f[l] !== p[l]) {
                    (u = f[l]), (a = p[l]);
                    break;
                  }
                return u < a ? -1 : a < u ? 1 : 0;
              }),
              (e.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r);
              }),
              (e.prototype.indexOf = function(t, e, r) {
                return y(this, t, e, r, !0);
              }),
              (e.prototype.lastIndexOf = function(t, e, r) {
                return y(this, t, e, r, !1);
              }),
              (e.prototype.write = function(t, e, r, n) {
                if (void 0 === e) (n = "utf8"), (r = this.length), (e = 0);
                else if (void 0 === r && "string" == typeof e)
                  (n = e), (r = this.length), (e = 0);
                else {
                  if (!isFinite(e))
                    throw new Error(
                      "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                    );
                  (e >>>= 0),
                    isFinite(r)
                      ? ((r >>>= 0), void 0 === n && (n = "utf8"))
                      : ((n = r), (r = void 0));
                }
                var o = this.length - e;
                if (
                  ((void 0 === r || r > o) && (r = o),
                  (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
                )
                  throw new RangeError(
                    "Attempt to write outside buffer bounds"
                  );
                n || (n = "utf8");
                for (var i = !1; ; )
                  switch (n) {
                    case "hex":
                      return v(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                      return d(this, t, e, r);
                    case "ascii":
                      return w(this, t, e, r);
                    case "latin1":
                    case "binary":
                      return m(this, t, e, r);
                    case "base64":
                      return b(this, t, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                      return E(this, t, e, r);
                    default:
                      if (i) throw new TypeError("Unknown encoding: " + n);
                      (n = ("" + n).toLowerCase()), (i = !0);
                  }
              }),
              (e.prototype.toJSON = function() {
                return {
                  type: "Buffer",
                  data: Array.prototype.slice.call(this._arr || this, 0)
                };
              });
            var A = 4096;
            function I(t, e, r) {
              var n = "";
              r = Math.min(t.length, r);
              for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
              return n;
            }
            function M(t, e, r) {
              var n = "";
              r = Math.min(t.length, r);
              for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
              return n;
            }
            function T(t, e, r) {
              var n = t.length;
              (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
              for (var o = "", i = e; i < r; ++i) o += C(t[i]);
              return o;
            }
            function O(t, e, r) {
              for (var n = t.slice(e, r), o = "", i = 0; i < n.length; i += 2)
                o += String.fromCharCode(n[i] + 256 * n[i + 1]);
              return o;
            }
            function U(t, e, r) {
              if (t % 1 != 0 || t < 0)
                throw new RangeError("offset is not uint");
              if (t + e > r)
                throw new RangeError("Trying to access beyond buffer length");
            }
            function x(t, r, n, o, i, u) {
              if (!e.isBuffer(t))
                throw new TypeError(
                  '"buffer" argument must be a Buffer instance'
                );
              if (r > i || r < u)
                throw new RangeError('"value" argument is out of bounds');
              if (n + o > t.length) throw new RangeError("Index out of range");
            }
            function N(t, e, r, n, o, i) {
              if (r + n > t.length) throw new RangeError("Index out of range");
              if (r < 0) throw new RangeError("Index out of range");
            }
            function q(t, e, r, n, i) {
              return (
                (e = +e),
                (r >>>= 0),
                i || N(t, 0, r, 4),
                o.write(t, e, r, n, 23, 4),
                r + 4
              );
            }
            function P(t, e, r, n, i) {
              return (
                (e = +e),
                (r >>>= 0),
                i || N(t, 0, r, 8),
                o.write(t, e, r, n, 52, 8),
                r + 8
              );
            }
            (e.prototype.slice = function(t, r) {
              var n = this.length;
              (t = ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n),
                (r = void 0 === r ? n : ~~r) < 0
                  ? (r += n) < 0 && (r = 0)
                  : r > n && (r = n),
                r < t && (r = t);
              var o = this.subarray(t, r);
              return (o.__proto__ = e.prototype), o;
            }),
              (e.prototype.readUIntLE = function(t, e, r) {
                (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
                  n += this[t + i] * o;
                return n;
              }),
              (e.prototype.readUIntBE = function(t, e, r) {
                (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                for (var n = this[t + --e], o = 1; e > 0 && (o *= 256); )
                  n += this[t + --e] * o;
                return n;
              }),
              (e.prototype.readUInt8 = function(t, e) {
                return (t >>>= 0), e || U(t, 1, this.length), this[t];
              }),
              (e.prototype.readUInt16LE = function(t, e) {
                return (
                  (t >>>= 0),
                  e || U(t, 2, this.length),
                  this[t] | (this[t + 1] << 8)
                );
              }),
              (e.prototype.readUInt16BE = function(t, e) {
                return (
                  (t >>>= 0),
                  e || U(t, 2, this.length),
                  (this[t] << 8) | this[t + 1]
                );
              }),
              (e.prototype.readUInt32LE = function(t, e) {
                return (
                  (t >>>= 0),
                  e || U(t, 4, this.length),
                  (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                    16777216 * this[t + 3]
                );
              }),
              (e.prototype.readUInt32BE = function(t, e) {
                return (
                  (t >>>= 0),
                  e || U(t, 4, this.length),
                  16777216 * this[t] +
                    ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
                );
              }),
              (e.prototype.readIntLE = function(t, e, r) {
                (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                for (var n = this[t], o = 1, i = 0; ++i < e && (o *= 256); )
                  n += this[t + i] * o;
                return n >= (o *= 128) && (n -= Math.pow(2, 8 * e)), n;
              }),
              (e.prototype.readIntBE = function(t, e, r) {
                (t >>>= 0), (e >>>= 0), r || U(t, e, this.length);
                for (var n = e, o = 1, i = this[t + --n]; n > 0 && (o *= 256); )
                  i += this[t + --n] * o;
                return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i;
              }),
              (e.prototype.readInt8 = function(t, e) {
                return (
                  (t >>>= 0),
                  e || U(t, 1, this.length),
                  128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                );
              }),
              (e.prototype.readInt16LE = function(t, e) {
                (t >>>= 0), e || U(t, 2, this.length);
                var r = this[t] | (this[t + 1] << 8);
                return 32768 & r ? 4294901760 | r : r;
              }),
              (e.prototype.readInt16BE = function(t, e) {
                (t >>>= 0), e || U(t, 2, this.length);
                var r = this[t + 1] | (this[t] << 8);
                return 32768 & r ? 4294901760 | r : r;
              }),
              (e.prototype.readInt32LE = function(t, e) {
                return (
                  (t >>>= 0),
                  e || U(t, 4, this.length),
                  this[t] |
                    (this[t + 1] << 8) |
                    (this[t + 2] << 16) |
                    (this[t + 3] << 24)
                );
              }),
              (e.prototype.readInt32BE = function(t, e) {
                return (
                  (t >>>= 0),
                  e || U(t, 4, this.length),
                  (this[t] << 24) |
                    (this[t + 1] << 16) |
                    (this[t + 2] << 8) |
                    this[t + 3]
                );
              }),
              (e.prototype.readFloatLE = function(t, e) {
                return (
                  (t >>>= 0),
                  e || U(t, 4, this.length),
                  o.read(this, t, !0, 23, 4)
                );
              }),
              (e.prototype.readFloatBE = function(t, e) {
                return (
                  (t >>>= 0),
                  e || U(t, 4, this.length),
                  o.read(this, t, !1, 23, 4)
                );
              }),
              (e.prototype.readDoubleLE = function(t, e) {
                return (
                  (t >>>= 0),
                  e || U(t, 8, this.length),
                  o.read(this, t, !0, 52, 8)
                );
              }),
              (e.prototype.readDoubleBE = function(t, e) {
                return (
                  (t >>>= 0),
                  e || U(t, 8, this.length),
                  o.read(this, t, !1, 52, 8)
                );
              }),
              (e.prototype.writeUIntLE = function(t, e, r, n) {
                ((t = +t), (e >>>= 0), (r >>>= 0), n) ||
                  x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var o = 1,
                  i = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256); )
                  this[e + i] = (t / o) & 255;
                return e + r;
              }),
              (e.prototype.writeUIntBE = function(t, e, r, n) {
                ((t = +t), (e >>>= 0), (r >>>= 0), n) ||
                  x(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
                var o = r - 1,
                  i = 1;
                for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
                  this[e + o] = (t / i) & 255;
                return e + r;
              }),
              (e.prototype.writeUInt8 = function(t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 1, 255, 0),
                  (this[e] = 255 & t),
                  e + 1
                );
              }),
              (e.prototype.writeUInt16LE = function(t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 2, 65535, 0),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  e + 2
                );
              }),
              (e.prototype.writeUInt16BE = function(t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 2, 65535, 0),
                  (this[e] = t >>> 8),
                  (this[e + 1] = 255 & t),
                  e + 2
                );
              }),
              (e.prototype.writeUInt32LE = function(t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 4, 4294967295, 0),
                  (this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t),
                  e + 4
                );
              }),
              (e.prototype.writeUInt32BE = function(t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 4, 4294967295, 0),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (e.prototype.writeIntLE = function(t, e, r, n) {
                if (((t = +t), (e >>>= 0), !n)) {
                  var o = Math.pow(2, 8 * r - 1);
                  x(this, t, e, r, o - 1, -o);
                }
                var i = 0,
                  u = 1,
                  a = 0;
                for (this[e] = 255 & t; ++i < r && (u *= 256); )
                  t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1),
                    (this[e + i] = (((t / u) >> 0) - a) & 255);
                return e + r;
              }),
              (e.prototype.writeIntBE = function(t, e, r, n) {
                if (((t = +t), (e >>>= 0), !n)) {
                  var o = Math.pow(2, 8 * r - 1);
                  x(this, t, e, r, o - 1, -o);
                }
                var i = r - 1,
                  u = 1,
                  a = 0;
                for (this[e + i] = 255 & t; --i >= 0 && (u *= 256); )
                  t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1),
                    (this[e + i] = (((t / u) >> 0) - a) & 255);
                return e + r;
              }),
              (e.prototype.writeInt8 = function(t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 1, 127, -128),
                  t < 0 && (t = 255 + t + 1),
                  (this[e] = 255 & t),
                  e + 1
                );
              }),
              (e.prototype.writeInt16LE = function(t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 2, 32767, -32768),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  e + 2
                );
              }),
              (e.prototype.writeInt16BE = function(t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 2, 32767, -32768),
                  (this[e] = t >>> 8),
                  (this[e + 1] = 255 & t),
                  e + 2
                );
              }),
              (e.prototype.writeInt32LE = function(t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 4, 2147483647, -2147483648),
                  (this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24),
                  e + 4
                );
              }),
              (e.prototype.writeInt32BE = function(t, e, r) {
                return (
                  (t = +t),
                  (e >>>= 0),
                  r || x(this, t, e, 4, 2147483647, -2147483648),
                  t < 0 && (t = 4294967295 + t + 1),
                  (this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t),
                  e + 4
                );
              }),
              (e.prototype.writeFloatLE = function(t, e, r) {
                return q(this, t, e, !0, r);
              }),
              (e.prototype.writeFloatBE = function(t, e, r) {
                return q(this, t, e, !1, r);
              }),
              (e.prototype.writeDoubleLE = function(t, e, r) {
                return P(this, t, e, !0, r);
              }),
              (e.prototype.writeDoubleBE = function(t, e, r) {
                return P(this, t, e, !1, r);
              }),
              (e.prototype.copy = function(t, r, n, o) {
                if (!e.isBuffer(t))
                  throw new TypeError("argument should be a Buffer");
                if (
                  (n || (n = 0),
                  o || 0 === o || (o = this.length),
                  r >= t.length && (r = t.length),
                  r || (r = 0),
                  o > 0 && o < n && (o = n),
                  o === n)
                )
                  return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (r < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length)
                  throw new RangeError("Index out of range");
                if (o < 0) throw new RangeError("sourceEnd out of bounds");
                o > this.length && (o = this.length),
                  t.length - r < o - n && (o = t.length - r + n);
                var i = o - n;
                if (
                  this === t &&
                  "function" == typeof Uint8Array.prototype.copyWithin
                )
                  this.copyWithin(r, n, o);
                else if (this === t && n < r && r < o)
                  for (var u = i - 1; u >= 0; --u) t[u + r] = this[u + n];
                else Uint8Array.prototype.set.call(t, this.subarray(n, o), r);
                return i;
              }),
              (e.prototype.fill = function(t, r, n, o) {
                if ("string" == typeof t) {
                  if (
                    ("string" == typeof r
                      ? ((o = r), (r = 0), (n = this.length))
                      : "string" == typeof n && ((o = n), (n = this.length)),
                    void 0 !== o && "string" != typeof o)
                  )
                    throw new TypeError("encoding must be a string");
                  if ("string" == typeof o && !e.isEncoding(o))
                    throw new TypeError("Unknown encoding: " + o);
                  if (1 === t.length) {
                    var i = t.charCodeAt(0);
                    (("utf8" === o && i < 128) || "latin1" === o) && (t = i);
                  }
                } else "number" == typeof t && (t &= 255);
                if (r < 0 || this.length < r || this.length < n)
                  throw new RangeError("Out of range index");
                if (n <= r) return this;
                var u;
                if (
                  ((r >>>= 0),
                  (n = void 0 === n ? this.length : n >>> 0),
                  t || (t = 0),
                  "number" == typeof t)
                )
                  for (u = r; u < n; ++u) this[u] = t;
                else {
                  var a = e.isBuffer(t) ? t : e.from(t, o),
                    s = a.length;
                  if (0 === s)
                    throw new TypeError(
                      'The value "' + t + '" is invalid for argument "value"'
                    );
                  for (u = 0; u < n - r; ++u) this[u + r] = a[u % s];
                }
                return this;
              });
            var L = /[^+\/0-9A-Za-z-_]/g;
            function C(t) {
              return t < 16 ? "0" + t.toString(16) : t.toString(16);
            }
            function _(t, e) {
              var r;
              e = e || 1 / 0;
              for (var n = t.length, o = null, i = [], u = 0; u < n; ++u) {
                if ((r = t.charCodeAt(u)) > 55295 && r < 57344) {
                  if (!o) {
                    if (r > 56319) {
                      (e -= 3) > -1 && i.push(239, 191, 189);
                      continue;
                    }
                    if (u + 1 === n) {
                      (e -= 3) > -1 && i.push(239, 191, 189);
                      continue;
                    }
                    o = r;
                    continue;
                  }
                  if (r < 56320) {
                    (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
                    continue;
                  }
                  r = 65536 + (((o - 55296) << 10) | (r - 56320));
                } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                if (((o = null), r < 128)) {
                  if ((e -= 1) < 0) break;
                  i.push(r);
                } else if (r < 2048) {
                  if ((e -= 2) < 0) break;
                  i.push((r >> 6) | 192, (63 & r) | 128);
                } else if (r < 65536) {
                  if ((e -= 3) < 0) break;
                  i.push(
                    (r >> 12) | 224,
                    ((r >> 6) & 63) | 128,
                    (63 & r) | 128
                  );
                } else {
                  if (!(r < 1114112)) throw new Error("Invalid code point");
                  if ((e -= 4) < 0) break;
                  i.push(
                    (r >> 18) | 240,
                    ((r >> 12) & 63) | 128,
                    ((r >> 6) & 63) | 128,
                    (63 & r) | 128
                  );
                }
              }
              return i;
            }
            function R(t) {
              return n.toByteArray(
                (function(t) {
                  if (
                    (t = (t = t.split("=")[0]).trim().replace(L, "")).length < 2
                  )
                    return "";
                  for (; t.length % 4 != 0; ) t += "=";
                  return t;
                })(t)
              );
            }
            function j(t, e, r, n) {
              for (
                var o = 0;
                o < n && !(o + r >= e.length || o >= t.length);
                ++o
              )
                e[o + r] = t[o];
              return o;
            }
            function z(t, e) {
              return (
                t instanceof e ||
                (null != t &&
                  null != t.constructor &&
                  null != t.constructor.name &&
                  t.constructor.name === e.name)
              );
            }
            function D(t) {
              return t != t;
            }
          }.call(this, t("buffer").Buffer));
        },
        { "base64-js": 1, buffer: 3, ieee754: 4 }
      ],
      4: [
        function(t, e, r) {
          (r.read = function(t, e, r, n, o) {
            var i,
              u,
              a = 8 * o - n - 1,
              s = (1 << a) - 1,
              f = s >> 1,
              p = -7,
              l = r ? o - 1 : 0,
              h = r ? -1 : 1,
              c = t[e + l];
            for (
              l += h, i = c & ((1 << -p) - 1), c >>= -p, p += a;
              p > 0;
              i = 256 * i + t[e + l], l += h, p -= 8
            );
            for (
              u = i & ((1 << -p) - 1), i >>= -p, p += n;
              p > 0;
              u = 256 * u + t[e + l], l += h, p -= 8
            );
            if (0 === i) i = 1 - f;
            else {
              if (i === s) return u ? NaN : (1 / 0) * (c ? -1 : 1);
              (u += Math.pow(2, n)), (i -= f);
            }
            return (c ? -1 : 1) * u * Math.pow(2, i - n);
          }),
            (r.write = function(t, e, r, n, o, i) {
              var u,
                a,
                s,
                f = 8 * i - o - 1,
                p = (1 << f) - 1,
                l = p >> 1,
                h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                c = n ? 0 : i - 1,
                y = n ? 1 : -1,
                g = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
              for (
                e = Math.abs(e),
                  isNaN(e) || e === 1 / 0
                    ? ((a = isNaN(e) ? 1 : 0), (u = p))
                    : ((u = Math.floor(Math.log(e) / Math.LN2)),
                      e * (s = Math.pow(2, -u)) < 1 && (u--, (s *= 2)),
                      (e += u + l >= 1 ? h / s : h * Math.pow(2, 1 - l)) * s >=
                        2 && (u++, (s /= 2)),
                      u + l >= p
                        ? ((a = 0), (u = p))
                        : u + l >= 1
                        ? ((a = (e * s - 1) * Math.pow(2, o)), (u += l))
                        : ((a = e * Math.pow(2, l - 1) * Math.pow(2, o)),
                          (u = 0)));
                o >= 8;
                t[r + c] = 255 & a, c += y, a /= 256, o -= 8
              );
              for (
                u = (u << o) | a, f += o;
                f > 0;
                t[r + c] = 255 & u, c += y, u /= 256, f -= 8
              );
              t[r + c - y] |= 128 * g;
            });
        },
        {}
      ],
      5: [
        function(t, e, r) {
          (function(e) {
            "use strict";
            const n = t("fs"),
              o = t("big-integer"),
              i = !1;
            (r.maxObjectSize = 1e8), (r.maxObjectCount = 32768);
            const u = 9783072e5,
              a = (r.UID = function(t) {
                this.UID = t;
              }),
              s =
                ((r.parseFile = function(t, r) {
                  return new Promise(function(o, i) {
                    function u(t) {
                      let e,
                        n = null;
                      try {
                        (e = s(t)), o(e);
                      } catch (t) {
                        i((n = t));
                      } finally {
                        r && r(n, e);
                      }
                    }
                    if (e.isBuffer(t)) return u(t);
                    n.readFile(t, function(t, e) {
                      if (t) return i(t), r(t);
                      u(e);
                    });
                  });
                }),
                (r.parseBuffer = function(t) {
                  if ("bplist" !== t.slice(0, "bplist".length).toString("utf8"))
                    throw new Error(
                      "Invalid binary plist. Expected 'bplist' at offset 0."
                    );
                  const n = t.slice(t.length - 32, t.length),
                    s = n.readUInt8(6);
                  i && console.log("offsetSize: " + s);
                  const l = n.readUInt8(7);
                  i && console.log("objectRefSize: " + l);
                  const h = p(n, 8);
                  i && console.log("numObjects: " + h);
                  const c = p(n, 16);
                  i && console.log("topObject: " + c);
                  const y = p(n, 24);
                  if (
                    (i && console.log("offsetTableOffset: " + y),
                    h > r.maxObjectCount)
                  )
                    throw new Error("maxObjectCount exceeded");
                  const g = [];
                  for (let e = 0; e < h; e++) {
                    const r = t.slice(y + e * s, y + (e + 1) * s);
                    (g[e] = f(r, 0)),
                      i &&
                        console.log(
                          "Offset for Object #" +
                            e +
                            " is " +
                            g[e] +
                            " [" +
                            g[e].toString(16) +
                            "]"
                        );
                  }
                  return [
                    (function n(s) {
                      const p = g[s],
                        h = t[p],
                        c = (240 & h) >> 4,
                        y = 15 & h;
                      switch (c) {
                        case 0:
                          return (function() {
                            switch (y) {
                              case 0:
                                return null;
                              case 8:
                                return !1;
                              case 9:
                                return !0;
                              case 15:
                                return null;
                              default:
                                throw new Error(
                                  "Unhandled simple type 0x" + c.toString(16)
                                );
                            }
                          })();
                        case 1:
                          return (function() {
                            const e = Math.pow(2, y);
                            if (4 == y) {
                              const r = t.slice(p + 1, p + 1 + e),
                                n = (function(t) {
                                  let e,
                                    r = "";
                                  for (e = 0; e < t.length && 0 == t[e]; e++);
                                  for (; e < t.length; e++) {
                                    const n = "00" + t[e].toString(16);
                                    r += n.substr(n.length - 2);
                                  }
                                  return r;
                                })(r);
                              return o(n, 16);
                            }
                            if (3 == y) return t.readInt32BE(p + 1);
                            if (e < r.maxObjectSize)
                              return f(t.slice(p + 1, p + 1 + e));
                            throw new Error(
                              "To little heap space available! Wanted to read " +
                                e +
                                " bytes, but only " +
                                r.maxObjectSize +
                                " are available."
                            );
                          })();
                        case 8:
                          return (function() {
                            const e = y + 1;
                            if (e < r.maxObjectSize)
                              return new a(f(t.slice(p + 1, p + 1 + e)));
                            throw new Error(
                              "To little heap space available! Wanted to read " +
                                e +
                                " bytes, but only " +
                                r.maxObjectSize +
                                " are available."
                            );
                          })();
                        case 2:
                          return (function() {
                            const e = Math.pow(2, y);
                            if (!(e < r.maxObjectSize))
                              throw new Error(
                                "To little heap space available! Wanted to read " +
                                  e +
                                  " bytes, but only " +
                                  r.maxObjectSize +
                                  " are available."
                              );
                            {
                              const r = t.slice(p + 1, p + 1 + e);
                              if (4 === e) return r.readFloatBE(0);
                              if (8 === e) return r.readDoubleBE(0);
                            }
                          })();
                        case 3:
                          return (function() {
                            3 != y &&
                              console.error(
                                "Unknown date type :" +
                                  y +
                                  ". Parsing anyway..."
                              );
                            const e = t.slice(p + 1, p + 9);
                            return new Date(u + 1e3 * e.readDoubleBE(0));
                          })();
                        case 4:
                          return (function() {
                            let e = 1,
                              n = y;
                            if (15 == y) {
                              const r = t[p + 1],
                                o = (240 & r) / 16;
                              1 != o &&
                                console.error(
                                  "0x4: UNEXPECTED LENGTH-INT TYPE! " + o
                                );
                              const i = 15 & r,
                                u = Math.pow(2, i);
                              (e = 2 + u), (n = f(t.slice(p + 2, p + 2 + u)));
                            }
                            if (n < r.maxObjectSize)
                              return t.slice(p + e, p + e + n);
                            throw new Error(
                              "To little heap space available! Wanted to read " +
                                n +
                                " bytes, but only " +
                                r.maxObjectSize +
                                " are available."
                            );
                          })();
                        case 5:
                          return v();
                        case 6:
                          return v(!0);
                        case 10:
                          return (function() {
                            let e = y,
                              o = 1;
                            if (15 == y) {
                              const r = t[p + 1],
                                n = (240 & r) / 16;
                              1 != n &&
                                console.error(
                                  "0xa: UNEXPECTED LENGTH-INT TYPE! " + n
                                );
                              const i = 15 & r,
                                u = Math.pow(2, i);
                              (o = 2 + u), (e = f(t.slice(p + 2, p + 2 + u)));
                            }
                            if (e * l > r.maxObjectSize)
                              throw new Error(
                                "To little heap space available!"
                              );
                            const i = [];
                            for (let r = 0; r < e; r++) {
                              const e = f(
                                t.slice(p + o + r * l, p + o + (r + 1) * l)
                              );
                              i[r] = n(e);
                            }
                            return i;
                          })();
                        case 13:
                          return (function() {
                            let e = y,
                              o = 1;
                            if (15 == y) {
                              const r = t[p + 1],
                                n = (240 & r) / 16;
                              1 != n &&
                                console.error(
                                  "0xD: UNEXPECTED LENGTH-INT TYPE! " + n
                                );
                              const i = 15 & r,
                                u = Math.pow(2, i);
                              (o = 2 + u), (e = f(t.slice(p + 2, p + 2 + u)));
                            }
                            if (2 * e * l > r.maxObjectSize)
                              throw new Error(
                                "To little heap space available!"
                              );
                            i && console.log("Parsing dictionary #" + s);
                            const u = {};
                            for (let r = 0; r < e; r++) {
                              const a = f(
                                  t.slice(p + o + r * l, p + o + (r + 1) * l)
                                ),
                                h = f(
                                  t.slice(
                                    p + o + e * l + r * l,
                                    p + o + e * l + (r + 1) * l
                                  )
                                ),
                                c = n(a),
                                y = n(h);
                              i &&
                                console.log(
                                  "  DICT #" + s + ": Mapped " + c + " to " + y
                                ),
                                (u[c] = y);
                            }
                            return u;
                          })();
                        default:
                          throw new Error("Unhandled type 0x" + c.toString(16));
                      }
                      function v(n) {
                        n = n || 0;
                        let o = "utf8",
                          i = y,
                          u = 1;
                        if (15 == y) {
                          const e = t[p + 1],
                            r = (240 & e) / 16;
                          1 != r &&
                            console.err("UNEXPECTED LENGTH-INT TYPE! " + r);
                          const n = 15 & e,
                            o = Math.pow(2, n);
                          (u = 2 + o), (i = f(t.slice(p + 2, p + 2 + o)));
                        }
                        if ((i *= n + 1) < r.maxObjectSize) {
                          let r = e.from(t.slice(p + u, p + u + i));
                          return (
                            n &&
                              ((r = (function(t) {
                                const e = t.length;
                                for (let r = 0; r < e; r += 2) {
                                  const e = t[r];
                                  (t[r] = t[r + 1]), (t[r + 1] = e);
                                }
                                return t;
                              })(r)),
                              (o = "ucs2")),
                            r.toString(o)
                          );
                        }
                        throw new Error(
                          "To little heap space available! Wanted to read " +
                            i +
                            " bytes, but only " +
                            r.maxObjectSize +
                            " are available."
                        );
                      }
                    })(c)
                  ];
                }));
            function f(t, e) {
              let r = 0;
              for (let n = (e = e || 0); n < t.length; n++)
                (r <<= 8), (r |= 255 & t[n]);
              return r;
            }
            function p(t, e) {
              return t.slice(e, e + 8).readUInt32BE(4, 8);
            }
          }.call(this, t("buffer").Buffer));
        },
        { "big-integer": 6, buffer: 3, fs: 2 }
      ],
      6: [
        function(t, e, r) {
          var n = (function(t) {
            "use strict";
            var e = 1e7,
              r = 7,
              o = 9007199254740992,
              i = c(o),
              u = "0123456789abcdefghijklmnopqrstuvwxyz",
              a = "function" == typeof BigInt;
            function s(t, e, r, n) {
              return void 0 === t
                ? s[0]
                : void 0 !== e && (10 != +e || r)
                ? F(t, e, r, n)
                : H(t);
            }
            function f(t, e) {
              (this.value = t), (this.sign = e), (this.isSmall = !1);
            }
            function p(t) {
              (this.value = t), (this.sign = t < 0), (this.isSmall = !0);
            }
            function l(t) {
              this.value = t;
            }
            function h(t) {
              return -o < t && t < o;
            }
            function c(t) {
              return t < 1e7
                ? [t]
                : t < 1e14
                ? [t % 1e7, Math.floor(t / 1e7)]
                : [t % 1e7, Math.floor(t / 1e7) % 1e7, Math.floor(t / 1e14)];
            }
            function y(t) {
              g(t);
              var r = t.length;
              if (r < 4 && x(t, i) < 0)
                switch (r) {
                  case 0:
                    return 0;
                  case 1:
                    return t[0];
                  case 2:
                    return t[0] + t[1] * e;
                  default:
                    return t[0] + (t[1] + t[2] * e) * e;
                }
              return t;
            }
            function g(t) {
              for (var e = t.length; 0 === t[--e]; );
              t.length = e + 1;
            }
            function v(t) {
              for (var e = new Array(t), r = -1; ++r < t; ) e[r] = 0;
              return e;
            }
            function d(t) {
              return t > 0 ? Math.floor(t) : Math.ceil(t);
            }
            function w(t, r) {
              var n,
                o,
                i = t.length,
                u = r.length,
                a = new Array(i),
                s = 0,
                f = e;
              for (o = 0; o < u; o++)
                (s = (n = t[o] + r[o] + s) >= f ? 1 : 0), (a[o] = n - s * f);
              for (; o < i; )
                (s = (n = t[o] + s) === f ? 1 : 0), (a[o++] = n - s * f);
              return s > 0 && a.push(s), a;
            }
            function m(t, e) {
              return t.length >= e.length ? w(t, e) : w(e, t);
            }
            function b(t, r) {
              var n,
                o,
                i = t.length,
                u = new Array(i),
                a = e;
              for (o = 0; o < i; o++)
                (n = t[o] - a + r),
                  (r = Math.floor(n / a)),
                  (u[o] = n - r * a),
                  (r += 1);
              for (; r > 0; ) (u[o++] = r % a), (r = Math.floor(r / a));
              return u;
            }
            function E(t, r) {
              var n,
                o,
                i = t.length,
                u = r.length,
                a = new Array(i),
                s = 0,
                f = e;
              for (n = 0; n < u; n++)
                (o = t[n] - s - r[n]) < 0 ? ((o += f), (s = 1)) : (s = 0),
                  (a[n] = o);
              for (n = u; n < i; n++) {
                if (!((o = t[n] - s) < 0)) {
                  a[n++] = o;
                  break;
                }
                (o += f), (a[n] = o);
              }
              for (; n < i; n++) a[n] = t[n];
              return g(a), a;
            }
            function S(t, r, n) {
              var o,
                i,
                u = t.length,
                a = new Array(u),
                s = -r,
                l = e;
              for (o = 0; o < u; o++)
                (i = t[o] + s),
                  (s = Math.floor(i / l)),
                  (i %= l),
                  (a[o] = i < 0 ? i + l : i);
              return "number" == typeof (a = y(a))
                ? (n && (a = -a), new p(a))
                : new f(a, n);
            }
            function B(t, r) {
              var n,
                o,
                i,
                u,
                a = t.length,
                s = r.length,
                f = v(a + s),
                p = e;
              for (i = 0; i < a; ++i) {
                u = t[i];
                for (var l = 0; l < s; ++l)
                  (n = u * r[l] + f[i + l]),
                    (o = Math.floor(n / p)),
                    (f[i + l] = n - o * p),
                    (f[i + l + 1] += o);
              }
              return g(f), f;
            }
            function A(t, r) {
              var n,
                o,
                i = t.length,
                u = new Array(i),
                a = e,
                s = 0;
              for (o = 0; o < i; o++)
                (n = t[o] * r + s), (s = Math.floor(n / a)), (u[o] = n - s * a);
              for (; s > 0; ) (u[o++] = s % a), (s = Math.floor(s / a));
              return u;
            }
            function I(t, e) {
              for (var r = []; e-- > 0; ) r.push(0);
              return r.concat(t);
            }
            function M(t, r, n) {
              return new f(t < e ? A(r, t) : B(r, c(t)), n);
            }
            function T(t) {
              var r,
                n,
                o,
                i,
                u = t.length,
                a = v(u + u),
                s = e;
              for (o = 0; o < u; o++) {
                n = 0 - (i = t[o]) * i;
                for (var f = o; f < u; f++)
                  (r = i * t[f] * 2 + a[o + f] + n),
                    (n = Math.floor(r / s)),
                    (a[o + f] = r - n * s);
                a[o + u] = n;
              }
              return g(a), a;
            }
            function O(t, r) {
              var n,
                o,
                i,
                u,
                a = t.length,
                s = v(a),
                f = e;
              for (i = 0, n = a - 1; n >= 0; --n)
                (i = (u = i * f + t[n]) - (o = d(u / r)) * r), (s[n] = 0 | o);
              return [s, 0 | i];
            }
            function U(t, r) {
              var n,
                o = H(r);
              if (a)
                return [new l(t.value / o.value), new l(t.value % o.value)];
              var i,
                u = t.value,
                h = o.value;
              if (0 === h) throw new Error("Cannot divide by zero");
              if (t.isSmall)
                return o.isSmall ? [new p(d(u / h)), new p(u % h)] : [s[0], t];
              if (o.isSmall) {
                if (1 === h) return [t, s[0]];
                if (-1 == h) return [t.negate(), s[0]];
                var w = Math.abs(h);
                if (w < e) {
                  i = y((n = O(u, w))[0]);
                  var m = n[1];
                  return (
                    t.sign && (m = -m),
                    "number" == typeof i
                      ? (t.sign !== o.sign && (i = -i), [new p(i), new p(m)])
                      : [new f(i, t.sign !== o.sign), new p(m)]
                  );
                }
                h = c(w);
              }
              var b = x(u, h);
              if (-1 === b) return [s[0], t];
              if (0 === b) return [s[t.sign === o.sign ? 1 : -1], s[0]];
              i = (n =
                u.length + h.length <= 200
                  ? (function(t, r) {
                      var n,
                        o,
                        i,
                        u,
                        a,
                        s,
                        f,
                        p = t.length,
                        l = r.length,
                        h = e,
                        c = v(r.length),
                        g = r[l - 1],
                        d = Math.ceil(h / (2 * g)),
                        w = A(t, d),
                        m = A(r, d);
                      for (
                        w.length <= p && w.push(0),
                          m.push(0),
                          g = m[l - 1],
                          o = p - l;
                        o >= 0;
                        o--
                      ) {
                        for (
                          n = h - 1,
                            w[o + l] !== g &&
                              (n = Math.floor(
                                (w[o + l] * h + w[o + l - 1]) / g
                              )),
                            i = 0,
                            u = 0,
                            s = m.length,
                            a = 0;
                          a < s;
                          a++
                        )
                          (i += n * m[a]),
                            (f = Math.floor(i / h)),
                            (u += w[o + a] - (i - f * h)),
                            (i = f),
                            u < 0
                              ? ((w[o + a] = u + h), (u = -1))
                              : ((w[o + a] = u), (u = 0));
                        for (; 0 !== u; ) {
                          for (n -= 1, i = 0, a = 0; a < s; a++)
                            (i += w[o + a] - h + m[a]) < 0
                              ? ((w[o + a] = i + h), (i = 0))
                              : ((w[o + a] = i), (i = 1));
                          u += i;
                        }
                        c[o] = n;
                      }
                      return (w = O(w, d)[0]), [y(c), y(w)];
                    })(u, h)
                  : (function(t, r) {
                      for (
                        var n,
                          o,
                          i,
                          u,
                          a,
                          s = t.length,
                          f = r.length,
                          p = [],
                          l = [],
                          h = e;
                        s;

                      )
                        if ((l.unshift(t[--s]), g(l), x(l, r) < 0)) p.push(0);
                        else {
                          (i = l[(o = l.length) - 1] * h + l[o - 2]),
                            (u = r[f - 1] * h + r[f - 2]),
                            o > f && (i = (i + 1) * h),
                            (n = Math.ceil(i / u));
                          do {
                            if (x((a = A(r, n)), l) <= 0) break;
                            n--;
                          } while (n);
                          p.push(n), (l = E(l, a));
                        }
                      return p.reverse(), [y(p), y(l)];
                    })(u, h))[0];
              var S = t.sign !== o.sign,
                B = n[1],
                I = t.sign;
              return (
                "number" == typeof i
                  ? (S && (i = -i), (i = new p(i)))
                  : (i = new f(i, S)),
                "number" == typeof B
                  ? (I && (B = -B), (B = new p(B)))
                  : (B = new f(B, I)),
                [i, B]
              );
            }
            function x(t, e) {
              if (t.length !== e.length) return t.length > e.length ? 1 : -1;
              for (var r = t.length - 1; r >= 0; r--)
                if (t[r] !== e[r]) return t[r] > e[r] ? 1 : -1;
              return 0;
            }
            function N(t) {
              var e = t.abs();
              return (
                !e.isUnit() &&
                (!!(e.equals(2) || e.equals(3) || e.equals(5)) ||
                  (!(e.isEven() || e.isDivisibleBy(3) || e.isDivisibleBy(5)) &&
                    (!!e.lesser(49) || void 0)))
              );
            }
            function q(t, e) {
              for (var r, o, i, u = t.prev(), a = u, s = 0; a.isEven(); )
                (a = a.divide(2)), s++;
              t: for (o = 0; o < e.length; o++)
                if (
                  !t.lesser(e[o]) &&
                  !(i = n(e[o]).modPow(a, t)).isUnit() &&
                  !i.equals(u)
                ) {
                  for (r = s - 1; 0 != r; r--) {
                    if ((i = i.square().mod(t)).isUnit()) return !1;
                    if (i.equals(u)) continue t;
                  }
                  return !1;
                }
              return !0;
            }
            (f.prototype = Object.create(s.prototype)),
              (p.prototype = Object.create(s.prototype)),
              (l.prototype = Object.create(s.prototype)),
              (f.prototype.add = function(t) {
                var e = H(t);
                if (this.sign !== e.sign) return this.subtract(e.negate());
                var r = this.value,
                  n = e.value;
                return e.isSmall
                  ? new f(b(r, Math.abs(n)), this.sign)
                  : new f(m(r, n), this.sign);
              }),
              (f.prototype.plus = f.prototype.add),
              (p.prototype.add = function(t) {
                var e = H(t),
                  r = this.value;
                if (r < 0 !== e.sign) return this.subtract(e.negate());
                var n = e.value;
                if (e.isSmall) {
                  if (h(r + n)) return new p(r + n);
                  n = c(Math.abs(n));
                }
                return new f(b(n, Math.abs(r)), r < 0);
              }),
              (p.prototype.plus = p.prototype.add),
              (l.prototype.add = function(t) {
                return new l(this.value + H(t).value);
              }),
              (l.prototype.plus = l.prototype.add),
              (f.prototype.subtract = function(t) {
                var e = H(t);
                if (this.sign !== e.sign) return this.add(e.negate());
                var r = this.value,
                  n = e.value;
                return e.isSmall
                  ? S(r, Math.abs(n), this.sign)
                  : (function(t, e, r) {
                      var n;
                      return (
                        x(t, e) >= 0
                          ? (n = E(t, e))
                          : ((n = E(e, t)), (r = !r)),
                        "number" == typeof (n = y(n))
                          ? (r && (n = -n), new p(n))
                          : new f(n, r)
                      );
                    })(r, n, this.sign);
              }),
              (f.prototype.minus = f.prototype.subtract),
              (p.prototype.subtract = function(t) {
                var e = H(t),
                  r = this.value;
                if (r < 0 !== e.sign) return this.add(e.negate());
                var n = e.value;
                return e.isSmall ? new p(r - n) : S(n, Math.abs(r), r >= 0);
              }),
              (p.prototype.minus = p.prototype.subtract),
              (l.prototype.subtract = function(t) {
                return new l(this.value - H(t).value);
              }),
              (l.prototype.minus = l.prototype.subtract),
              (f.prototype.negate = function() {
                return new f(this.value, !this.sign);
              }),
              (p.prototype.negate = function() {
                var t = this.sign,
                  e = new p(-this.value);
                return (e.sign = !t), e;
              }),
              (l.prototype.negate = function() {
                return new l(-this.value);
              }),
              (f.prototype.abs = function() {
                return new f(this.value, !1);
              }),
              (p.prototype.abs = function() {
                return new p(Math.abs(this.value));
              }),
              (l.prototype.abs = function() {
                return new l(this.value >= 0 ? this.value : -this.value);
              }),
              (f.prototype.multiply = function(t) {
                var r,
                  n,
                  o,
                  i = H(t),
                  u = this.value,
                  a = i.value,
                  p = this.sign !== i.sign;
                if (i.isSmall) {
                  if (0 === a) return s[0];
                  if (1 === a) return this;
                  if (-1 === a) return this.negate();
                  if ((r = Math.abs(a)) < e) return new f(A(u, r), p);
                  a = c(r);
                }
                return (
                  (n = u.length),
                  (o = a.length),
                  new f(
                    -0.012 * n - 0.012 * o + 15e-6 * n * o > 0
                      ? (function t(e, r) {
                          var n = Math.max(e.length, r.length);
                          if (n <= 30) return B(e, r);
                          n = Math.ceil(n / 2);
                          var o = e.slice(n),
                            i = e.slice(0, n),
                            u = r.slice(n),
                            a = r.slice(0, n),
                            s = t(i, a),
                            f = t(o, u),
                            p = t(m(i, o), m(a, u)),
                            l = m(m(s, I(E(E(p, s), f), n)), I(f, 2 * n));
                          return g(l), l;
                        })(u, a)
                      : B(u, a),
                    p
                  )
                );
              }),
              (f.prototype.times = f.prototype.multiply),
              (p.prototype._multiplyBySmall = function(t) {
                return h(t.value * this.value)
                  ? new p(t.value * this.value)
                  : M(
                      Math.abs(t.value),
                      c(Math.abs(this.value)),
                      this.sign !== t.sign
                    );
              }),
              (f.prototype._multiplyBySmall = function(t) {
                return 0 === t.value
                  ? s[0]
                  : 1 === t.value
                  ? this
                  : -1 === t.value
                  ? this.negate()
                  : M(Math.abs(t.value), this.value, this.sign !== t.sign);
              }),
              (p.prototype.multiply = function(t) {
                return H(t)._multiplyBySmall(this);
              }),
              (p.prototype.times = p.prototype.multiply),
              (l.prototype.multiply = function(t) {
                return new l(this.value * H(t).value);
              }),
              (l.prototype.times = l.prototype.multiply),
              (f.prototype.square = function() {
                return new f(T(this.value), !1);
              }),
              (p.prototype.square = function() {
                var t = this.value * this.value;
                return h(t) ? new p(t) : new f(T(c(Math.abs(this.value))), !1);
              }),
              (l.prototype.square = function(t) {
                return new l(this.value * this.value);
              }),
              (f.prototype.divmod = function(t) {
                var e = U(this, t);
                return { quotient: e[0], remainder: e[1] };
              }),
              (l.prototype.divmod = p.prototype.divmod = f.prototype.divmod),
              (f.prototype.divide = function(t) {
                return U(this, t)[0];
              }),
              (l.prototype.over = l.prototype.divide = function(t) {
                return new l(this.value / H(t).value);
              }),
              (p.prototype.over = p.prototype.divide = f.prototype.over =
                f.prototype.divide),
              (f.prototype.mod = function(t) {
                return U(this, t)[1];
              }),
              (l.prototype.mod = l.prototype.remainder = function(t) {
                return new l(this.value % H(t).value);
              }),
              (p.prototype.remainder = p.prototype.mod = f.prototype.remainder =
                f.prototype.mod),
              (f.prototype.pow = function(t) {
                var e,
                  r,
                  n,
                  o = H(t),
                  i = this.value,
                  u = o.value;
                if (0 === u) return s[1];
                if (0 === i) return s[0];
                if (1 === i) return s[1];
                if (-1 === i) return o.isEven() ? s[1] : s[-1];
                if (o.sign) return s[0];
                if (!o.isSmall)
                  throw new Error(
                    "The exponent " + o.toString() + " is too large."
                  );
                if (this.isSmall && h((e = Math.pow(i, u)))) return new p(d(e));
                for (
                  r = this, n = s[1];
                  !0 & u && ((n = n.times(r)), --u), 0 !== u;

                )
                  (u /= 2), (r = r.square());
                return n;
              }),
              (p.prototype.pow = f.prototype.pow),
              (l.prototype.pow = function(t) {
                var e = H(t),
                  r = this.value,
                  n = e.value,
                  o = BigInt(0),
                  i = BigInt(1),
                  u = BigInt(2);
                if (n === o) return s[1];
                if (r === o) return s[0];
                if (r === i) return s[1];
                if (r === BigInt(-1)) return e.isEven() ? s[1] : s[-1];
                if (e.isNegative()) return new l(o);
                for (
                  var a = this, f = s[1];
                  (n & i) === i && ((f = f.times(a)), --n), n !== o;

                )
                  (n /= u), (a = a.square());
                return f;
              }),
              (f.prototype.modPow = function(t, e) {
                if (((t = H(t)), (e = H(e)).isZero()))
                  throw new Error("Cannot take modPow with modulus 0");
                var r = s[1],
                  n = this.mod(e);
                for (
                  t.isNegative() &&
                  ((t = t.multiply(s[-1])), (n = n.modInv(e)));
                  t.isPositive();

                ) {
                  if (n.isZero()) return s[0];
                  t.isOdd() && (r = r.multiply(n).mod(e)),
                    (t = t.divide(2)),
                    (n = n.square().mod(e));
                }
                return r;
              }),
              (l.prototype.modPow = p.prototype.modPow = f.prototype.modPow),
              (f.prototype.compareAbs = function(t) {
                var e = H(t),
                  r = this.value,
                  n = e.value;
                return e.isSmall ? 1 : x(r, n);
              }),
              (p.prototype.compareAbs = function(t) {
                var e = H(t),
                  r = Math.abs(this.value),
                  n = e.value;
                return e.isSmall
                  ? r === (n = Math.abs(n))
                    ? 0
                    : r > n
                    ? 1
                    : -1
                  : -1;
              }),
              (l.prototype.compareAbs = function(t) {
                var e = this.value,
                  r = H(t).value;
                return (e = e >= 0 ? e : -e) === (r = r >= 0 ? r : -r)
                  ? 0
                  : e > r
                  ? 1
                  : -1;
              }),
              (f.prototype.compare = function(t) {
                if (t === 1 / 0) return -1;
                if (t === -1 / 0) return 1;
                var e = H(t),
                  r = this.value,
                  n = e.value;
                return this.sign !== e.sign
                  ? e.sign
                    ? 1
                    : -1
                  : e.isSmall
                  ? this.sign
                    ? -1
                    : 1
                  : x(r, n) * (this.sign ? -1 : 1);
              }),
              (f.prototype.compareTo = f.prototype.compare),
              (p.prototype.compare = function(t) {
                if (t === 1 / 0) return -1;
                if (t === -1 / 0) return 1;
                var e = H(t),
                  r = this.value,
                  n = e.value;
                return e.isSmall
                  ? r == n
                    ? 0
                    : r > n
                    ? 1
                    : -1
                  : r < 0 !== e.sign
                  ? r < 0
                    ? -1
                    : 1
                  : r < 0
                  ? 1
                  : -1;
              }),
              (p.prototype.compareTo = p.prototype.compare),
              (l.prototype.compare = function(t) {
                if (t === 1 / 0) return -1;
                if (t === -1 / 0) return 1;
                var e = this.value,
                  r = H(t).value;
                return e === r ? 0 : e > r ? 1 : -1;
              }),
              (l.prototype.compareTo = l.prototype.compare),
              (f.prototype.equals = function(t) {
                return 0 === this.compare(t);
              }),
              (l.prototype.eq = l.prototype.equals = p.prototype.eq = p.prototype.equals = f.prototype.eq =
                f.prototype.equals),
              (f.prototype.notEquals = function(t) {
                return 0 !== this.compare(t);
              }),
              (l.prototype.neq = l.prototype.notEquals = p.prototype.neq = p.prototype.notEquals = f.prototype.neq =
                f.prototype.notEquals),
              (f.prototype.greater = function(t) {
                return this.compare(t) > 0;
              }),
              (l.prototype.gt = l.prototype.greater = p.prototype.gt = p.prototype.greater = f.prototype.gt =
                f.prototype.greater),
              (f.prototype.lesser = function(t) {
                return this.compare(t) < 0;
              }),
              (l.prototype.lt = l.prototype.lesser = p.prototype.lt = p.prototype.lesser = f.prototype.lt =
                f.prototype.lesser),
              (f.prototype.greaterOrEquals = function(t) {
                return this.compare(t) >= 0;
              }),
              (l.prototype.geq = l.prototype.greaterOrEquals = p.prototype.geq = p.prototype.greaterOrEquals = f.prototype.geq =
                f.prototype.greaterOrEquals),
              (f.prototype.lesserOrEquals = function(t) {
                return this.compare(t) <= 0;
              }),
              (l.prototype.leq = l.prototype.lesserOrEquals = p.prototype.leq = p.prototype.lesserOrEquals = f.prototype.leq =
                f.prototype.lesserOrEquals),
              (f.prototype.isEven = function() {
                return 0 == (1 & this.value[0]);
              }),
              (p.prototype.isEven = function() {
                return 0 == (1 & this.value);
              }),
              (l.prototype.isEven = function() {
                return (this.value & BigInt(1)) === BigInt(0);
              }),
              (f.prototype.isOdd = function() {
                return 1 == (1 & this.value[0]);
              }),
              (p.prototype.isOdd = function() {
                return 1 == (1 & this.value);
              }),
              (l.prototype.isOdd = function() {
                return (this.value & BigInt(1)) === BigInt(1);
              }),
              (f.prototype.isPositive = function() {
                return !this.sign;
              }),
              (p.prototype.isPositive = function() {
                return this.value > 0;
              }),
              (l.prototype.isPositive = p.prototype.isPositive),
              (f.prototype.isNegative = function() {
                return this.sign;
              }),
              (p.prototype.isNegative = function() {
                return this.value < 0;
              }),
              (l.prototype.isNegative = p.prototype.isNegative),
              (f.prototype.isUnit = function() {
                return !1;
              }),
              (p.prototype.isUnit = function() {
                return 1 === Math.abs(this.value);
              }),
              (l.prototype.isUnit = function() {
                return this.abs().value === BigInt(1);
              }),
              (f.prototype.isZero = function() {
                return !1;
              }),
              (p.prototype.isZero = function() {
                return 0 === this.value;
              }),
              (l.prototype.isZero = function() {
                return this.value === BigInt(0);
              }),
              (f.prototype.isDivisibleBy = function(t) {
                var e = H(t);
                return (
                  !e.isZero() &&
                  (!!e.isUnit() ||
                    (0 === e.compareAbs(2)
                      ? this.isEven()
                      : this.mod(e).isZero()))
                );
              }),
              (l.prototype.isDivisibleBy = p.prototype.isDivisibleBy =
                f.prototype.isDivisibleBy),
              (f.prototype.isPrime = function(t) {
                var e = N(this);
                if (void 0 !== e) return e;
                var r = this.abs(),
                  o = r.bitLength();
                if (o <= 64)
                  return q(r, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
                for (
                  var i = Math.log(2) * o.toJSNumber(),
                    u = Math.ceil(!0 === t ? 2 * Math.pow(i, 2) : i),
                    a = [],
                    s = 0;
                  s < u;
                  s++
                )
                  a.push(n(s + 2));
                return q(r, a);
              }),
              (l.prototype.isPrime = p.prototype.isPrime = f.prototype.isPrime),
              (f.prototype.isProbablePrime = function(t, e) {
                var r = N(this);
                if (void 0 !== r) return r;
                for (
                  var o = this.abs(), i = void 0 === t ? 5 : t, u = [], a = 0;
                  a < i;
                  a++
                )
                  u.push(n.randBetween(2, o.minus(2), e));
                return q(o, u);
              }),
              (l.prototype.isProbablePrime = p.prototype.isProbablePrime =
                f.prototype.isProbablePrime),
              (f.prototype.modInv = function(t) {
                for (
                  var e, r, o, i = n.zero, u = n.one, a = H(t), s = this.abs();
                  !s.isZero();

                )
                  (e = a.divide(s)),
                    (r = i),
                    (o = a),
                    (i = u),
                    (a = s),
                    (u = r.subtract(e.multiply(u))),
                    (s = o.subtract(e.multiply(s)));
                if (!a.isUnit())
                  throw new Error(
                    this.toString() +
                      " and " +
                      t.toString() +
                      " are not co-prime"
                  );
                return (
                  -1 === i.compare(0) && (i = i.add(t)),
                  this.isNegative() ? i.negate() : i
                );
              }),
              (l.prototype.modInv = p.prototype.modInv = f.prototype.modInv),
              (f.prototype.next = function() {
                var t = this.value;
                return this.sign
                  ? S(t, 1, this.sign)
                  : new f(b(t, 1), this.sign);
              }),
              (p.prototype.next = function() {
                var t = this.value;
                return t + 1 < o ? new p(t + 1) : new f(i, !1);
              }),
              (l.prototype.next = function() {
                return new l(this.value + BigInt(1));
              }),
              (f.prototype.prev = function() {
                var t = this.value;
                return this.sign ? new f(b(t, 1), !0) : S(t, 1, this.sign);
              }),
              (p.prototype.prev = function() {
                var t = this.value;
                return t - 1 > -o ? new p(t - 1) : new f(i, !0);
              }),
              (l.prototype.prev = function() {
                return new l(this.value - BigInt(1));
              });
            for (var P = [1]; 2 * P[P.length - 1] <= e; )
              P.push(2 * P[P.length - 1]);
            var L = P.length,
              C = P[L - 1];
            function _(t) {
              return Math.abs(t) <= e;
            }
            function R(t, e, r) {
              e = H(e);
              for (
                var o = t.isNegative(),
                  i = e.isNegative(),
                  u = o ? t.not() : t,
                  a = i ? e.not() : e,
                  s = 0,
                  f = 0,
                  p = null,
                  l = null,
                  h = [];
                !u.isZero() || !a.isZero();

              )
                (s = (p = U(u, C))[1].toJSNumber()),
                  o && (s = C - 1 - s),
                  (f = (l = U(a, C))[1].toJSNumber()),
                  i && (f = C - 1 - f),
                  (u = p[0]),
                  (a = l[0]),
                  h.push(r(s, f));
              for (
                var c = 0 !== r(o ? 1 : 0, i ? 1 : 0) ? n(-1) : n(0),
                  y = h.length - 1;
                y >= 0;
                y -= 1
              )
                c = c.multiply(C).add(n(h[y]));
              return c;
            }
            (f.prototype.shiftLeft = function(t) {
              var e = H(t).toJSNumber();
              if (!_(e))
                throw new Error(String(e) + " is too large for shifting.");
              if (e < 0) return this.shiftRight(-e);
              var r = this;
              if (r.isZero()) return r;
              for (; e >= L; ) (r = r.multiply(C)), (e -= L - 1);
              return r.multiply(P[e]);
            }),
              (l.prototype.shiftLeft = p.prototype.shiftLeft =
                f.prototype.shiftLeft),
              (f.prototype.shiftRight = function(t) {
                var e,
                  r = H(t).toJSNumber();
                if (!_(r))
                  throw new Error(String(r) + " is too large for shifting.");
                if (r < 0) return this.shiftLeft(-r);
                for (var n = this; r >= L; ) {
                  if (n.isZero() || (n.isNegative() && n.isUnit())) return n;
                  (n = (e = U(n, C))[1].isNegative() ? e[0].prev() : e[0]),
                    (r -= L - 1);
                }
                return (e = U(n, P[r]))[1].isNegative() ? e[0].prev() : e[0];
              }),
              (l.prototype.shiftRight = p.prototype.shiftRight =
                f.prototype.shiftRight),
              (f.prototype.not = function() {
                return this.negate().prev();
              }),
              (l.prototype.not = p.prototype.not = f.prototype.not),
              (f.prototype.and = function(t) {
                return R(this, t, function(t, e) {
                  return t & e;
                });
              }),
              (l.prototype.and = p.prototype.and = f.prototype.and),
              (f.prototype.or = function(t) {
                return R(this, t, function(t, e) {
                  return t | e;
                });
              }),
              (l.prototype.or = p.prototype.or = f.prototype.or),
              (f.prototype.xor = function(t) {
                return R(this, t, function(t, e) {
                  return t ^ e;
                });
              }),
              (l.prototype.xor = p.prototype.xor = f.prototype.xor);
            var j = 1 << 30,
              z = ((e & -e) * (e & -e)) | j;
            function D(t) {
              var r = t.value,
                n =
                  "number" == typeof r
                    ? r | j
                    : "bigint" == typeof r
                    ? r | BigInt(j)
                    : (r[0] + r[1] * e) | z;
              return n & -n;
            }
            function k(t, e) {
              return (t = H(t)), (e = H(e)), t.greater(e) ? t : e;
            }
            function Z(t, e) {
              return (t = H(t)), (e = H(e)), t.lesser(e) ? t : e;
            }
            function J(t, e) {
              if (((t = H(t).abs()), (e = H(e).abs()), t.equals(e))) return t;
              if (t.isZero()) return e;
              if (e.isZero()) return t;
              for (var r, n, o = s[1]; t.isEven() && e.isEven(); )
                (r = Z(D(t), D(e))),
                  (t = t.divide(r)),
                  (e = e.divide(r)),
                  (o = o.multiply(r));
              for (; t.isEven(); ) t = t.divide(D(t));
              do {
                for (; e.isEven(); ) e = e.divide(D(e));
                t.greater(e) && ((n = e), (e = t), (t = n)),
                  (e = e.subtract(t));
              } while (!e.isZero());
              return o.isUnit() ? t : t.multiply(o);
            }
            (f.prototype.bitLength = function() {
              var t = this;
              return (
                t.compareTo(n(0)) < 0 && (t = t.negate().subtract(n(1))),
                0 === t.compareTo(n(0))
                  ? n(0)
                  : n(
                      (function t(e, r) {
                        if (r.compareTo(e) <= 0) {
                          var o = t(e, r.square(r)),
                            i = o.p,
                            u = o.e,
                            a = i.multiply(r);
                          return a.compareTo(e) <= 0
                            ? { p: a, e: 2 * u + 1 }
                            : { p: i, e: 2 * u };
                        }
                        return { p: n(1), e: 0 };
                      })(t, n(2)).e
                    ).add(n(1))
              );
            }),
              (l.prototype.bitLength = p.prototype.bitLength =
                f.prototype.bitLength);
            var F = function(t, e, r, n) {
              (r = r || u),
                (t = String(t)),
                n || ((t = t.toLowerCase()), (r = r.toLowerCase()));
              var o,
                i = t.length,
                a = Math.abs(e),
                s = {};
              for (o = 0; o < r.length; o++) s[r[o]] = o;
              for (o = 0; o < i; o++) {
                if ("-" !== (l = t[o]) && (l in s && s[l] >= a)) {
                  if ("1" === l && 1 === a) continue;
                  throw new Error(
                    l + " is not a valid digit in base " + e + "."
                  );
                }
              }
              e = H(e);
              var f = [],
                p = "-" === t[0];
              for (o = p ? 1 : 0; o < t.length; o++) {
                var l;
                if ((l = t[o]) in s) f.push(H(s[l]));
                else {
                  if ("<" !== l)
                    throw new Error(l + " is not a valid character");
                  var h = o;
                  do {
                    o++;
                  } while (">" !== t[o] && o < t.length);
                  f.push(H(t.slice(h + 1, o)));
                }
              }
              return Y(f, e, p);
            };
            function Y(t, e, r) {
              var n,
                o = s[0],
                i = s[1];
              for (n = t.length - 1; n >= 0; n--)
                (o = o.add(t[n].times(i))), (i = i.times(e));
              return r ? o.negate() : o;
            }
            function W(t, e) {
              if ((e = n(e)).isZero()) {
                if (t.isZero()) return { value: [0], isNegative: !1 };
                throw new Error("Cannot convert nonzero numbers to base 0.");
              }
              if (e.equals(-1)) {
                if (t.isZero()) return { value: [0], isNegative: !1 };
                if (t.isNegative())
                  return {
                    value: [].concat.apply(
                      [],
                      Array.apply(null, Array(-t.toJSNumber())).map(
                        Array.prototype.valueOf,
                        [1, 0]
                      )
                    ),
                    isNegative: !1
                  };
                var r = Array.apply(null, Array(t.toJSNumber() - 1)).map(
                  Array.prototype.valueOf,
                  [0, 1]
                );
                return (
                  r.unshift([1]),
                  { value: [].concat.apply([], r), isNegative: !1 }
                );
              }
              var o = !1;
              if (
                (t.isNegative() && e.isPositive() && ((o = !0), (t = t.abs())),
                e.isUnit())
              )
                return t.isZero()
                  ? { value: [0], isNegative: !1 }
                  : {
                      value: Array.apply(null, Array(t.toJSNumber())).map(
                        Number.prototype.valueOf,
                        1
                      ),
                      isNegative: o
                    };
              for (
                var i, u = [], a = t;
                a.isNegative() || a.compareAbs(e) >= 0;

              ) {
                (i = a.divmod(e)), (a = i.quotient);
                var s = i.remainder;
                s.isNegative() && ((s = e.minus(s).abs()), (a = a.next())),
                  u.push(s.toJSNumber());
              }
              return (
                u.push(a.toJSNumber()), { value: u.reverse(), isNegative: o }
              );
            }
            function X(t, e, r) {
              var n = W(t, e);
              return (
                (n.isNegative ? "-" : "") +
                n.value
                  .map(function(t) {
                    return (function(t, e) {
                      return t < (e = e || u).length ? e[t] : "<" + t + ">";
                    })(t, r);
                  })
                  .join("")
              );
            }
            function G(t) {
              if (h(+t)) {
                var e = +t;
                if (e === d(e)) return a ? new l(BigInt(e)) : new p(e);
                throw new Error("Invalid integer: " + t);
              }
              var n = "-" === t[0];
              n && (t = t.slice(1));
              var o = t.split(/e/i);
              if (o.length > 2)
                throw new Error("Invalid integer: " + o.join("e"));
              if (2 === o.length) {
                var i = o[1];
                if (
                  ("+" === i[0] && (i = i.slice(1)), (i = +i) !== d(i) || !h(i))
                )
                  throw new Error(
                    "Invalid integer: " + i + " is not a valid exponent."
                  );
                var u = o[0],
                  s = u.indexOf(".");
                if (
                  (s >= 0 &&
                    ((i -= u.length - s - 1),
                    (u = u.slice(0, s) + u.slice(s + 1))),
                  i < 0)
                )
                  throw new Error(
                    "Cannot include negative exponent part for integers"
                  );
                t = u += new Array(i + 1).join("0");
              }
              if (!/^([0-9][0-9]*)$/.test(t))
                throw new Error("Invalid integer: " + t);
              if (a) return new l(BigInt(n ? "-" + t : t));
              for (var c = [], y = t.length, v = r, w = y - v; y > 0; )
                c.push(+t.slice(w, y)), (w -= v) < 0 && (w = 0), (y -= v);
              return g(c), new f(c, n);
            }
            function H(t) {
              return "number" == typeof t
                ? (function(t) {
                    if (a) return new l(BigInt(t));
                    if (h(t)) {
                      if (t !== d(t))
                        throw new Error(t + " is not an integer.");
                      return new p(t);
                    }
                    return G(t.toString());
                  })(t)
                : "string" == typeof t
                ? G(t)
                : "bigint" == typeof t
                ? new l(t)
                : t;
            }
            (f.prototype.toArray = function(t) {
              return W(this, t);
            }),
              (p.prototype.toArray = function(t) {
                return W(this, t);
              }),
              (l.prototype.toArray = function(t) {
                return W(this, t);
              }),
              (f.prototype.toString = function(t, e) {
                if ((void 0 === t && (t = 10), 10 !== t)) return X(this, t, e);
                for (
                  var r, n = this.value, o = n.length, i = String(n[--o]);
                  --o >= 0;

                )
                  (r = String(n[o])), (i += "0000000".slice(r.length) + r);
                return (this.sign ? "-" : "") + i;
              }),
              (p.prototype.toString = function(t, e) {
                return (
                  void 0 === t && (t = 10),
                  10 != t ? X(this, t, e) : String(this.value)
                );
              }),
              (l.prototype.toString = p.prototype.toString),
              (l.prototype.toJSON = f.prototype.toJSON = p.prototype.toJSON = function() {
                return this.toString();
              }),
              (f.prototype.valueOf = function() {
                return parseInt(this.toString(), 10);
              }),
              (f.prototype.toJSNumber = f.prototype.valueOf),
              (p.prototype.valueOf = function() {
                return this.value;
              }),
              (p.prototype.toJSNumber = p.prototype.valueOf),
              (l.prototype.valueOf = l.prototype.toJSNumber = function() {
                return parseInt(this.toString(), 10);
              });
            for (var V = 0; V < 1e3; V++)
              (s[V] = H(V)), V > 0 && (s[-V] = H(-V));
            return (
              (s.one = s[1]),
              (s.zero = s[0]),
              (s.minusOne = s[-1]),
              (s.max = k),
              (s.min = Z),
              (s.gcd = J),
              (s.lcm = function(t, e) {
                return (
                  (t = H(t).abs()),
                  (e = H(e).abs()),
                  t.divide(J(t, e)).multiply(e)
                );
              }),
              (s.isInstance = function(t) {
                return t instanceof f || t instanceof p || t instanceof l;
              }),
              (s.randBetween = function(t, r, n) {
                (t = H(t)), (r = H(r));
                var o = n || Math.random,
                  i = Z(t, r),
                  u = k(t, r)
                    .subtract(i)
                    .add(1);
                if (u.isSmall) return i.add(Math.floor(o() * u));
                for (
                  var a = W(u, e).value, f = [], p = !0, l = 0;
                  l < a.length;
                  l++
                ) {
                  var h = p ? a[l] : e,
                    c = d(o() * h);
                  f.push(c), c < h && (p = !1);
                }
                return i.add(s.fromArray(f, e, !1));
              }),
              (s.fromArray = function(t, e, r) {
                return Y(t.map(H), H(e || 10), r);
              }),
              s
            );
          })();
          void 0 !== e && e.hasOwnProperty("exports") && (e.exports = n);
        },
        {}
      ]
    },
    {},
    [5]
  )(5);
})();
