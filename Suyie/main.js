var tabsList;
var contentsList;

window.onload = function () {
    tabsList = document.getElementById("tabs").getElementsByTagName("li");
    contentsList = document.getElementById("contents").getElementsByTagName("section");
    displayCourse(tabsList[0]);
    for (var i = 0; i < tabsList.length; i++) {
        tabsList[i].onclick = function() {
            displayCourse(this);
            // return false;
        }
    }
    semesterSelector = document.getElementById("contents").getElementsByTagName("li");
    semesterDetail = document.getElementById("contents").getElementsByTagName("div");
    for (var i = 0; i < semesterSelector.length; i++) {
        select (semesterSelector[i]);
    }
    // select (semesterSelector[0]);
    for (var i = 0; i < semesterSelector.length; i++) {
        semesterSelector[i].onclick = function() {
            select (this);
            return false;
        }
        semesterSelector[i].onfocus = function() {
            select (this);
            return false;
        }
    }
}

function displayCourse(tab) {
    for (var i = 0; i < tabsList.length; i++) {
        if (tabsList[i] == tab) {
            tabsList[i].classList.add("active");
            contentsList[i].style.display = "block";
        }
		else {
            tabsList[i].classList.remove("active");
            contentsList[i].style.display = "none";
        }
    }
}

var semesterSelector;
var semesterDetail;

function select (sem) {
    for (var i = 0; i < semesterSelector.length; i++) {
        if (semesterSelector[i] == sem) {
            if (semesterSelector[i].classList.contains("active")) {
                semesterSelector[i].classList.remove("active");
                semesterDetail[i].style.display = "none";
            }
            else {
                semesterSelector[i].classList.add("active");
                semesterDetail[i].style.display = "block";
            }
        }
    }
}
