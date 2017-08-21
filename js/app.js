$(()=> {


    //swiper 

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

    //zmiana tła nawigacji przy odpowiedniej wysokości podczas scrollowania

   let navbar = $(".navbar");

   $(window).on("scroll", () => {

       if (scrollY >= 840) {
           navbar.css("backgroundColor", "#63181f");
       } else {
           navbar.css("backgroundColor", "transparent");
       }


   });


   //nawigacja chowa sie po kliknięciu w sekcje

   $(document).on('click','.navbar-collapse.in', function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }

});

//przycisk read more

let btn = $(".btn");
let hiddenP = $(".hidden");


    btn.on("click", function(e) {
        e.preventDefault();

        let target = e.target;


        console.log(target.previousElementSibling.classList);

        if (target.innerText === "READ MORE") {
            target.innerText = "HIDE";
            target.previousElementSibling.classList.remove("hidden");
        } else {
            target.innerText = "READ MORE"
            target.previousElementSibling.classList.add("hidden");
        }


    });


});