$(()=> {

   let navbar = $(".navbar");



   $(window).on("scroll", () => {

       if (scrollY >= 900) {
           navbar.css("backgroundColor", "#63181f");
           console.log("ok");
       } else {
           navbar.css("backgroundColor", "transparent");
           console.log("sc")
       }


   });



});