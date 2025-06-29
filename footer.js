const footerLeft = document.createElement("footer");
footerLeft.style.textAlign = "left";
footerLeft.innerHTML = `<p>© ICE</p>`;

const footerRight = document.createElement("footer");
footerRight.style.cssText = "background-color:transparent; text-align:right;";
footerRight.innerHTML = `<p>socials</p>`;

document.body.appendChild(footerLeft);
document.body.appendChild(footerRight);
