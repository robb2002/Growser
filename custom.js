
//Close the responsive navbar menu when a link is clicked
document.querySelectorAll('.navbar-nav a.nav-link').forEach(function (element) {
    element.addEventListener('click', function () {
     
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (navbarToggler && getComputedStyle(navbarToggler).display !== 'none') {
        navbarToggler.classList.remove("show");
        navbarToggler.click();
      }
    });
  });

  //header scrolled
  let nav=document.querySelector(".navbar");
  window.onscroll=function(){
      if(document.documentElement.scrollTop > 50){
          nav.classList.add("header-scrolled");
      }else{
          nav.classList.revome("header-scrolled");
      }
  }
