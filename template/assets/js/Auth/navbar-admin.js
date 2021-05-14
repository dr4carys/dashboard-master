$(document).ready(async () => {
  $("#nama-admin").html(localStorage.getItem("username"));
  $("#sidebar-nama-admin").html(localStorage.getItem("username"));
});
