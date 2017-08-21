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

//clients 


let clientBtn = $(".client-btn");
let clientImg = $(".clients-image img");
   
        let firstBtn = $(clientBtn[0]);
        let secondBtn = $(clientBtn[1]);
        let thirdBtn = $(clientBtn[2])
        

        firstBtn.on("click", (e) => {

        
        
           $(e.target).parent().parent().parent().children()[0].innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
           Integer sagittis, mi sit amet pellentesque pulvinar, lorem erat gravida elit, non lacinia neque tortor vitae tellus. Cras vel ligula vehicula, 
           accumsan dui ac, dictum augue. Sed dapibus nisi sit amet volutpat lobortis. Donec mattis sem lectus, a tincidunt sapien sagittis vitae. 
           Donec at ex ligula. Aenean molestie in nisl eget ultrices. In quis quam id leo semper vehicula at in elit. 
           Suspendisse auctor facilisis tincidunt. Curabitur facilisis eu arcu ut interdum. Phasellus vitae eros mi.`;
           
           $(e.target).parent().parent().parent().children()[1].innerText = "Jon Snow, Company SEO";
           clientImg.attr("src", "images/clients/client1-image.png");

           //.active
        })

        secondBtn.on("click", (e) => {
            
            $(e.target).parent().parent().parent().children()[0].innerText = `Donec porta euismod justo ut dignissim. 
            Nulla vestibulum quam eget varius auctor. Sed justo eros, faucibus vel ex vitae, tristique tempus lacus. 
            Aenean placerat nisi a molestie venenatis. Nunc fermentum at libero a bibendum. Integer ac pulvinar eros. 
            Cras mollis egestas velit nec condimentum. 
            Praesent leo tellus, faucibus quis nunc eget, viverra rutrum arcu. 
            Nullam condimentum nisi vel hendrerit pretium.`;
            
            $(e.target).parent().parent().parent().children()[1].innerText = "Jinny Summer, Company Secretary";
            clientImg.attr("src", "images/clients/client2-image.png");
        })
                
        thirdBtn.on("click", (e) => {
            
            $(e.target).parent().parent().parent().children()[0].innerText = `Set ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloemque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo iventore veritatis et quasi architecto
            beatae vitae dicta sunt expalicabo.`;
            $(e.target).parent().parent().parent().children()[1].innerText = "Jinny Snow, Company CEO";
            clientImg.attr("src", "images/clients/client-image.png");
        })
                
    





});


