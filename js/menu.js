$(".menu-toggle").click(function (e) { 
  $("nav").toggleClass("show-menu");
        e.preventDefault(); 
        e.stopPropagation(); 
});

$("#nav-menu ul li").click(function (e) { 
  $("nav").toggleClass("show-menu");
        e.preventDefault(); 
        e.stopPropagation(); 
});