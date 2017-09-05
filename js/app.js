$(()=> {

    // Initialize Firebase
    let config = {
        apiKey: "AIzaSyCqzuD95b2pBjUnifmJWaFn43og_55Y0co",
        authDomain: "think-outside-the-box-f4d2a.firebaseapp.com",
        databaseURL: "https://think-outside-the-box-f4d2a.firebaseio.com",
        projectId: "think-outside-the-box-f4d2a",
        storageBucket: "think-outside-the-box-f4d2a.appspot.com",
        messagingSenderId: "618118857609"
      };
      firebase.initializeApp(config);


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

       if ((window.innerWidth >= 1200 && scrollY >= 840) || (window.innerWidth < 1200 && scrollY >= 470))
       {
           navbar.css("backgroundColor", "#63181f");
       } else {
           navbar.css("backgroundColor", "transparent");
       }


   });


   //nawigacja chowa sie po kliknięciu w sekcje

   $(document).on('click','.navbar-collapse.in', function(e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }

});

//przycisk read more

let btn = $(".btn");
let hiddenP = $(".hidden");


    btn.on("click", e => {
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

//clients 


let clientBtn = $(".client-btn");
let clientImg = $(".clients-image img");
   
    let firstBtn = $(clientBtn[0]);
    let secondBtn = $(clientBtn[1]);
    let thirdBtn = $(clientBtn[2]);

    const url = "https://think-outside-the-box-f4d2a.firebaseio.com/";
    $.ajax({
        method: "GET",
        url: url + "opinions.json",
        dataType: "json"
    }).done((response) => {
        firstBtn.on("click", (e) => {

           $(e.target).parent().parent().parent().children()[0].innerText = response[0].opinion;
           $(e.target).parent().parent().parent().children()[1].innerText = (response[0].author + ", " + response[0].title)
           clientImg.attr("src", (response[0].image));
        })

        secondBtn.on("click", (e) => {

            $(e.target).parent().parent().parent().children()[0].innerText = response[1].opinion;
            $(e.target).parent().parent().parent().children()[1].innerText = (response[1].author + ", " + response[1].title)
            clientImg.attr("src", (response[1].image));
        })
                
        thirdBtn.on("click", (e) => {
            
            $(e.target).parent().parent().parent().children()[0].innerText = response[2].opinion;
            $(e.target).parent().parent().parent().children()[1].innerText = (response[2].author + ", " + response[2].title)
            clientImg.attr("src", (response[2].image));
        })

    });
        




        //smooth scroll




$("a").on('click', function(event) {
    
        if (this.hash !== "") {
          event.preventDefault();
          let hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        } 
      });
                
    


});


