function openRoom(room, lang) {
    var iframe = document.getElementById("iframe");
    if (lang === 'sv') {
        var src = "src/pannellum.htm?tour=/pano/svPano.json&firstScene=" + room + "&";
    } else if (lang === 'en' || lang === 'eng') {
        var src = "/src/pannellum.htm?tour=/pano/enPano.json&firstScene=" + room + "&";
    }
    iframe.setAttribute("src", src);
    iframe.style.display = "block";
    document.getElementById("closeButton").style.display = "block";
    document.getElementById("mainContent").style.background = "none";
    document.getElementById("icons").style.display = "none";
}

function closeRoom() {
    document.getElementById("iframe").style.display = "none";
    document.getElementById("closeButton").style.display = "none";
    document.getElementById("mainContent").style.background = "url('img/icons/map.svg')";
    document.getElementById("icons").style.display = "block";
    document.getElementById("iframe").setAttribute("src", "");
}