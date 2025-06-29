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
        <input type="text" id="searchInput" placeholder="Search...">
        <button style="font-weight:bolder; margin-left:9px;" id="searchBtn">
        <img src="https://codehs.com/uploads/d32d2b2c0d288d661e2dc2a5aa74f91c" style="filter: invert(100%); margin-left:-10px;"></button>
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
`;

document.addEventListener("DOMContentLoaded", () => {
  const headerWrapper = document.createElement("div");
  headerWrapper.innerHTML = headerHTML;
  document.body.insertBefore(headerWrapper, document.body.firstChild);
});