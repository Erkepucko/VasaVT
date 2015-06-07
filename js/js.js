function openRoom(room, lang) {
    var iframe = document.getElementById("iframe");
    if (lang === 'sv') {
        var src = "/src/pannellum.htm?tour=/pano/svPano.json&firstScene=" + room + "&";
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
    document.getElementById("mainContent").style.background = "url('/img/icons/map.svg')";
    document.getElementById("icons").style.display = "block";
}









        /*function loadXMLDoc() {
            var xmlhttp;
            if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else { // code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
                }
            }
            xmlhttp.open("GET", "/learnAjax/txt.txt", true);
            xmlhttp.send();
        }*/