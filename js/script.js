$(document).ready(function () {
  $(".burger").click(function () {
    $(".burger").toggleClass("toggle");
    $(".menu-list").toggleClass("open");
    $("body").toggleClass("overflowhidden");
  });
});
