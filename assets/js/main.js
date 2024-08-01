// ---------Responsive-navbar-active-animation-----------
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px",
  });
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
    // Close navbar after 200ms when clicking on a menu item
    setTimeout(function () {
      $(".navbar-collapse").slideUp(500);
    }, 1000);
  });
  // Close navbar after 200ms when clicking outside of navbar
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".navbar").length) {
      setTimeout(function () {
        $(".navbar-collapse").slideUp(500);
      }, 200);
    }
  });
}
$(document).ready(function () {
  setTimeout(function () {
    test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
    test();
  });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if (path == "") {
    path = "index.html";
  }

  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  // Add active class to target link
  target.parent().addClass("active");
});

/* mailjs */

/* document.addEventListener('DOMContentLoaded', (event) => {
    emailjs.init("RYDTZCXo6jvhrTEDf"); // Replace with your EmailJS user ID

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            name: document.getElementById('fname').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        emailjs
          .send("service_nrbwl0q", "template_k1as03b", formData)
          .then((response) => {
            alert("Email sent successfully!");
          })
          .catch((error) => {
            alert("Failed to send email. Please try again later.");
          });
    });
}); */

document.addEventListener("DOMContentLoaded", (event) => {
  emailjs.init("epbrPdD3txPahqE7R"); // Replace with your EmailJS user ID

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const formData = {
        name:
          document.getElementById("fname").value +
          " " +
          document.getElementById("lname").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
      };

      emailjs
        .send("service_el1u13j", "template_mn3ssc9", formData)
        .then((response) => {
          alert("Email sent successfully!");
        })
        .catch((error) => {
          alert("Failed to send email. Please try again later.");
          console.error("Error:", error);
        });
    });
});

/* mailjs */
