function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-180px") {
      sidebar.style.left = "0";
    } else {
      sidebar.style.left = "-180px";
    }
  }
  