$(document).ready(function(){
  $('#heroSlider').slick({
    slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      arrows:false
  });


  $('#companies').slick({
    slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      dots:false,
      prevArrow:'<button type="button" class="slick-prev bg-transparent border-0 position-absolute top-50 start-0 translate-middle"><i class="bi bi-chevron-bar-left fs-1 "></i></button>',
      nextArrow:'<button type="button" class="slick-next bg-transparent border-0 position-absolute top-50 start-100 translate-middle"><i class="bi bi-chevron-bar-right fs-1 "></i></button>',
      responsive:[
        {
          breakpoint:769,
          settings:{
            slidesToShow: 3,
          }
        },
        {
          breakpoint:576,
          settings:{
            slidesToShow: 1,
          }
        }
      ]

     
  });


});
	







































function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}
