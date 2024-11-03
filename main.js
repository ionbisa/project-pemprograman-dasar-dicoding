//animasi text jumbotron

var animation = document.getElementById("judul");

setInterval(function () {
  animation.style.color = "blue";

  setTimeout(function () {
    animation.style.color = "yellow";
  }, 500);
}, 1000);

//alert web
alert("Kota Reang Kota Indramayu, klik OK untuk ceritanya");

//color text content
var textContent = document.getElementById("text");
var konten = document.getElementById("text2");

textContent.style.color = "#140352";
konten.style.color = "#140352";

//background body
var boxStyle = document.getElementById("elemen");
boxStyle.style.background = "#d0d8fa";

function send() {
  var storage = document.getElementsByClassName("contact-form1").value;
  var textText = document.getElementsByClassName("contact-form2").value;
  var docText = document.getElementById("text-area").value;
  localStorage.setItem("Text", storage);
  localStorage.setItem("Text", textText);
  localStorage.setItem("Text", docText);
}
