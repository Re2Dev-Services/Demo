let scrolledAwayFromTop = false;
let scrolledToTop = false;

const blockTimeout = 500;

let blockAutoScroll = false;
if (window.pageYOffset > 50) {
    document.body.style.backgroundColor = "#5ca1a8";
}
if (window.pageYOffset <= 818) {
    scrolledToTop = true;
}
window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset;
    if (scrollTop === 0) {
        // Scrolled to top
        scrolledAwayFromTop = false;
        grow()
    } else if (scrollTop > 0 && !scrolledAwayFromTop) {
        scrolledAwayFromTop = true;
        // Scrolled away from top
        shrink()
        if (!blockAutoScroll) {
            blockAutoScroll = true;
            window.scrollTo(0, document.getElementById('store').offsetTop - 240);
            setTimeout(function () {
                blockAutoScroll = false;
            }, blockTimeout)
        }
    } else if (scrollTop <= 818) {
        // Richtung Top gescrollt
        if (!scrolledToTop) {
            blockAutoScroll = true;
            window.scrollTo(0, 0);
            setTimeout(function () {
                window.scrollTo(0, 0);
                blockAutoScroll = false;
            }, blockTimeout)
        }
        scrolledToTop = true;

    } else if (scrollTop > 818) {
        scrolledToTop = false;
    }

    if (scrollTop <= 50) {
        document.body.style.backgroundColor = "#5ca1a8";
        document.getElementById("nav").style.backgroundColor = "#add9ff";
        document.getElementById("nav-i1").style.color = "steelblue";
        for (let e of document.getElementsByClassName("nav-items")) {
            e.style.color = "steelblue";
        }
        for (let e of document.getElementsByClassName("menu-line")) {
            e.style.backgroundColor = "steelblue";
        }
    } else {
        document.body.style.backgroundColor = "black";
        document.getElementById("nav").style.backgroundColor = "#272727";
        document.getElementById("nav-i1").style.color = "white";
        for (let e of document.getElementsByClassName("nav-items")) {
            e.style.color = "white";
        }
        for (let e of document.getElementsByClassName("menu-line")) {
            e.style.backgroundColor = "white";
        }
    }
});

window.addEventListener("hashchange", checkHash);

function shrink() {
    document.getElementById("logo").style.height = "60px";
    document.getElementById("logo").getElementsByTagName("a").item(0).style.fontSize = "30pt";
    document.getElementById("logo").style.margin = "-130px calc(120px + 100px * 2)";
    document.getElementById("logo").style.width = "calc(100vw - 100px * 2 * 2 - 120px * 2)";
    setTimeout(function () {
        document.getElementById("logo").style.borderTopRightRadius = "0";
        document.getElementById("logo").style.borderTopLeftRadius = "0";
    }, 500)
    document.getElementById("nav-items").style.opacity = "1";
    document.getElementById("nav-i1").style.opacity = "0";
    document.getElementById("nav-i2").style.opacity = "0";
    document.getElementById("nav").style.height = "120px";
}

function grow() {
    document.getElementById("logo").style.height = "100px";
    document.getElementById("logo").getElementsByTagName("a").item(0).style.fontSize = "50pt";
    document.getElementById("logo").style.margin = "-60px calc(120px + 80px + 80px)";
    document.getElementById("logo").style.width = "calc(100vw - 80px * 2 * 2 - 120px * 2)";
    document.getElementById("logo").style.borderRadius = "15px"
    setTimeout(function () {
        document.getElementById("logo").style.borderRadius = "15px"
    }, 500)
    document.getElementById("nav-items").style.opacity = "0";
    document.getElementById("nav-i1").style.opacity = "1";
    document.getElementById("nav-i2").style.opacity = "1";
    document.getElementById("nav").style.height = "100px";
}

function checkHash() {
    let hash;
    hash = window.location.hash;
    hash = hash.substring(1);
    if (hash === "") return;
    window.scrollTo(0, document.getElementById(hash).offsetTop - 240)
}