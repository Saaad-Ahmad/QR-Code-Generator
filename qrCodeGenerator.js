const text = document.getElementById("text");
const imgBox = document.querySelector(".imgBox");
const qrImage = document.getElementById("qrImage");
const generate = document.getElementById("generate");

function generateQr() {
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    text.value;
  imgBox.classList.add("showImg");
}

generate.addEventListener("click", function () {
  if (text.value === "") {
    text.classList.add("error");
    setTimeout(() => {
      text.classList.remove("error");
    }, 1000);
  } else {
    generateQr();
  }
});