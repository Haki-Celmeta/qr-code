let qrContainer = document.querySelector(".qr-container");

function removePixels(a) {
  return a.slice(0, -2);
}

let isBig = false;
qrContainer.addEventListener("click", function() {
  let padding = removePixels(window.getComputedStyle(qrContainer, null).getPropertyValue('padding'));
  if (!isBig) {
    qrContainer.style.padding = String(Number(padding) + Number('10')) + 'px';
    isBig = true;
  } else {
    qrContainer.style.padding = String(Number(padding) - Number('10')) + 'px';
    isBig = false;
  }
})