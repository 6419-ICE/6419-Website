const headerHTML = `
	<header>
  	<div style="display: flex; align-items: center;">
  	  <button class="menu-button" onclick="toggleSidebar()">
  	    <span></span>
  	    <span></span>
  	    <span></span>
  	  </button>
  	</div>
  	<div style="display: flex; align-items: center; gap: 40px; margin-right: 20px;">
  	  <div class="search-container">
  	    <div class="search-bar">
  	      <input type="text" id="searchInput" placeholder="Search">
  	      <button style="font-weight:bolder; margin-left:9px;" id="searchBtn">
  	      	<img src="https://codehs.com/uploads/d32d2b2c0d288d661e2dc2a5aa74f91c" style="margin-left:-10px;">
					</button>
  	      <div id="searchResults" class="search-results"></div>
  	    </div>
    	</div>
    	<a href="index">
      	<img class="logo" src="/6419-Website/res/logo.png" alt="ICE">
    	</a>
  	</div>
	</header>
	<div id="sidebar" class="sidebar">
   		<a href="index.html">
			Home
		</a>
    	<hr style="border-top: 1px;margin: 0;">
    	<a href="about.html">
			About Us
		</a>
    	<hr style="border-top: 1px;margin: 0;">
    	<a href="events.html">
			Calender Of Events
		</a>
    	<hr style="border-top: 1px;margin: 0;">
    	<a href="impact.html">
			Our Impact
		</a>
		<hr style="border-top: 1px;margin: 0;">
		<a href="robots.html">
			Our Robots
		</a>
    	<hr style="border-top: 1px;margin: 0;">
    	<a href="sponsors.html">
			Sponsors
		</a>
    	<hr style="border-top: 1px;margin: 0;">
    	<a href="donate.html">
			Support Us
		</a>
    	<hr style="border-top: 1px;margin: 0;">
    	<a href="contact.html">
			Contact Us
		</a>
    	<hr style="border-top: 1px;margin: 0;">
  	</div>
  	<br>
  	<br>
`;
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("open");
}
const footerLeft = document.createElement("footer");
footerLeft.style.cssText = "z-index:999;";
footerLeft.style.textAlign = "left";
footerLeft.innerHTML = `<p>&#169 2017-2026 Kernel Chaos</p>`;
const footerRight = document.createElement("footer");
footerRight.style.cssText = "background-color:transparent; text-align:right; z-index:999;";
footerRight.innerHTML = `
	<p>
		<a href="https://www.facebook.com/IowaICE/">
			<img src="https://codehs.com/uploads/00e3f072f91daff5ee3be734d74c49b9" class="icons" alt="facebook">
		</a>
		<a href="https://www.youtube.com/channel/UCLY9sPpdscFBkIIbrT1DKiQ">
			<img src="https://codehs.com/uploads/948d8323a9b44f3b408e5eaf32935f81" class="icons" alt="youtube">
		</a>
		<a href="https://twitter.com/iowaice?lang=en">
			<img src="https://codehs.com/uploads/1f4154cde184ea0aab9ea5bf7048b3d7" class="icons" alt="X">
		</a>
		<a href="https://www.instagram.com/iowaice6419">
			<img src="https://codehs.com/uploads/6661776061c91e21bce06d4c881e8bb8" class="icons" alt="Instagram">
		</a>
		<a href="https://github.com/6419-ICE">
			<img src="https://codehs.com/uploads/47c64d37b96e7570b39060260d1002b6" class="icons" alt="Github">
		</a>
	</p>`;
document.body.appendChild(footerLeft);
document.body.appendChild(footerRight);
document.addEventListener("DOMContentLoaded", () => {
  const headerWrapper = document.createElement("div");
  headerWrapper.innerHTML = headerHTML;
  document.body.insertBefore(headerWrapper, document.body.firstChild);
});