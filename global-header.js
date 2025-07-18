const headerHTML = `
<header style="display:block;">
  <p style="color:white; margin-top:15px; text-align:center;">
    I.C.E. for Innovation, Collaboration, and Exellence
  </p>
</header>
<header style="background-color:transparent;>
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
        <img src="https://codehs.com/uploads/d32d2b2c0d288d661e2dc2a5aa74f91c" style="margin-left:-10px;"></button>
        <div id="searchResults" class="search-results"></div>
      </div>
    </div>
    <script src="searchbar.js">    
    </script>
    <a href="index">
      <img class="logo" src="https://codehs.com/uploads/cb46df9431dd7ffe3372f71a3c7a97a8" alt="ICE">
    </a>
  </div>
</header>
<div id="sidebar" class="sidebar">
    <a href="https://6419-ice.github.io/6419-Website/">Home</a>
    <hr style="border-top: 1px;margin: 0;">
    <a href="about">About</a>
    <hr style="border-top: 1px;margin: 0;">
    <a href="register">Register</a>
    <hr style="border-top: 1px;margin: 0;">
    <a href="donate">Donate</a>
    <hr style="border-top: 1px;margin: 0;">
    <a href="sponsors">Sponsors</a>
    <hr style="border-top: 1px;margin: 0;">
    <a href="events">Events</a>
    <hr style="border-top: 1px;margin: 0;">
    <a href="contact">Contact Us</a>
    <hr style="border-top: 1px;margin: 0;">
  </div>
  <br>
  <br>
  <br>
  <br>
`;

document.addEventListener("DOMContentLoaded", () => {
  const headerWrapper = document.createElement("div");
  headerWrapper.innerHTML = headerHTML;
  document.body.insertBefore(headerWrapper, document.body.firstChild);
});