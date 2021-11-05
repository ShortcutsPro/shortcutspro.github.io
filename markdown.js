// markdown.js


    let TITLE = '57.2°F and Mostly Cloudy';
    let THEME = 'United';
    let XMP = {
        text :
`# ![57.2°F and Mostly Cloudy](https://i.imgur.com/XqTWMT3.png) **Thibodaux, LA -- Fri, 29 Oct**

### _There Are Mostly Cloudy Skies in Thibodaux Tonight With a Visibility of **9.9 Miles**_.

***

>* #### There is a northwesterly wind blowing at 6 miles per hour.
* #### The temperature is 57°F.
* #### The high today was 66°F.

***

* #### Tomorrow's high will be 70°F and the low will be 48°F with mostly clear skies and a northwesterly wind at about 10 miles per hour.
* #### The chance for precipitation on Saturday is 10%.

***`}
    const Q = new URL (window.location.href);
    if (Q.searchParams.get('title') != null) {
        TITLE = decodeURIComponent(Q.searchParams.get('title'));
        THEME = decodeURIComponent(Q.searchParams.get('theme'));
        XMP = JSON.parse(decodeURIComponent(Q.searchParams.get('xmp')));
    }
    console.log(TITLE)
    console.log(THEME)
    console.log(XMP.text)

    document.querySelector("title").innerHTML = TITLE;
    document.querySelector("textarea").setAttribute('theme', THEME)
    document.querySelector("textarea").innerHTML = `${XMP.text}`;
