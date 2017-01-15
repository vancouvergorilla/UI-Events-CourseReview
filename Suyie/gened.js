var genEdList;
var picList;
var courseList;

var imgSource = ["背景/Western 1.jpg", "背景/Western 2.jpg", "背景/Western 1.jpg", "背景/Western 2.jpg", "背景/Art 1.jpg", "背景/Art 2.jpg", "背景/Western 1.jpg", "背景/Western 2.jpg", "背景/Western 1.jpg", "背景/Western 2.jpg", "背景/Western 1.jpg", "背景/Western 2.jpg", "背景/Western 1.jpg", "背景/Western 2.jpg", "背景/Western 1.jpg", "背景/Western 2.jpg"];

window.onload = function () {
    genEdList = document.getElementById("gened_category").getElementsByTagName("div");
    picList = document.getElementById("gened_category").getElementsByClassName("genedPic");
    for (var i = 0; i < picList.length; i++) {
        picList[i].src = imgSource[2*i];
    }
    courseList = document.getElementById("gened_course").getElementsByTagName("li");
    checkAll ();
    for (var i = 0; i < genEdList.length; i++) {
        genEdList[i].onclick = function() {
            chosen (this);
        }
    }
};

function chosen (tab) {
    for (var i = 0; i < genEdList.length; i++) {
        if (genEdList[i] == tab) {
            if (genEdList[i].classList.contains("active")) {
                genEdList[i].classList.remove("active");
                picList[i].src = imgSource[2*i];
                checkAll ();
            }
            else {
                genEdList[i].classList.add("active");
                picList[i].src = imgSource[2*i + 1];
                filter (tab);
            }
        }
    }
}

function checkAll () {
    for (var i = 0; i < courseList.length; i++) {
        courseList[i].style.display = "block";
    }
    for (var i = 0; i < genEdList.length; i++) {
        if (genEdList[i].classList.contains("active")) {
            for (var j = 0; j < courseList.length; j++) {
                if (courseList[j].classList.contains(i) == false) {
                    courseList[j].style.display = "none";
                }
            }
        }
    }
}

function filter (tab) {
    var id = tab.id;
    var target = tab.id;
    for (var i = 0; i < courseList.length; i++) {
        if (courseList[i].style.display == "block") {
            if (courseList[i].classList.contains(id) && tab.classList.contains("active")) {
                courseList[i].style.display = "block";
            } else {
                courseList[i].style.display = "none";
            }
        }
    }
}
