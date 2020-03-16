window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header").style.background = "#FFF";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("header").style.background = "none";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function mobileNavigation() {
  var link = document.getElementById("myLinks");
  if (link.style.display === "block") {
    link.style.display = "none";
  } else {
    link.style.display = "block";
  }
}