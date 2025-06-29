const footerLeft = document.createElement("footer");
footerLeft.style.textAlign = "left";
footerLeft.innerHTML = `<p>© ICE</p>`;

const footerRight = document.createElement("footer");
footerRight.style.cssText = "background-color:transparent; text-align:right;";
footerRight.innerHTML = `<p><a class="socials"href="https://www.facebook.com/IowaICE/"><img src="https://codehs.com/uploads/00e3f072f91daff5ee3be734d74c49b9" class="icons" alt="facebook"></a></p>`;

document.body.appendChild(footerLeft);
document.body.appendChild(footerRight);
