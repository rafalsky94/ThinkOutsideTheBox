$(()=> {

    let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
        },
        autoplay: 2000,
        autoplayDisableOnInteraction: false
    });
   let navbar = $(".navbar");

   $(window).on("scroll", () => {

       if (scrollY >= 840) {
           navbar.css("backgroundColor", "#63181f");
           console.log("ok");
       } else {
           navbar.css("backgroundColor", "transparent");
           console.log("sc")
       }


   });



});