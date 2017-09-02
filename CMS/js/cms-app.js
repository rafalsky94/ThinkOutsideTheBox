$(() => {

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



    //firebase logowanie

    const email = $("#email");
    const pass = $("#pass");
    const loginBtn = $("#login-btn");
    const logoutBtn = $("#logout-btn");
    const opinions = $("#opinions");
    const loginText = $("h2");
    const loginArea = $("#login");
    let span = $("<span></span>");

    loginBtn.on("click", e => {
        
        
        const emailValue = email.val();
        const passValue = pass.val();
        const auth = firebase.auth();
        
        
        auth.signInWithEmailAndPassword(emailValue, passValue)
        .catch(e => {
            console.log(e.message) //komunikat z firebase
            
            span.addClass("error");
            
            
            if(e.message == "The email address is badly formatted.") {
                span.text("Zły format adresu e-mail");
                email.after(span);
            } else if (e.message == "The password is invalid or the user does not have a password.") {
                span.text("Zły adres e-mail lub hasło");
                email.after(span);
            } else if (e.message == "There is no user record corresponding to this identifier. The user may have been deleted.") {
                span.text("Nie ma takiego adresu e-mail w bazie danych");
                email.after(span);
            }
        });



    });

    logoutBtn.on("click", e => {
        location.reload();
        firebase.auth().signOut();

    });



    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            logoutBtn.removeClass("hide");
            opinions.removeClass("hide");
            email.addClass("hide");
            pass.addClass("hide");
            loginBtn.addClass("hide");
            loginText.addClass("hide");
            loginArea.css("lineHeight", "0%");
            span.remove();
        } else {
            
            console.log("Użytkownik niezalogowany");
        }
     });

    //ajax

    const url = "http://localhost:3000/";

    let list = $("ul");
    
    const storage = firebase.storage();
    const storageRef = firebase.storage().ref();

    function readOpinions() {

    $.ajax({
        method: "GET",
        url: url + "opinions",
        dataType: "json"
    }).done((response) => {
        console.log(response);
    
        list.empty();

        
        for (let i = 0; i < response.length; i++) {

        let span = $("<span></span>");
        let img = $("<img></img>");
        let li = $("<li></li>");
        let h3 = $("<h4></h4>");
        let h4 = $("<h5></h5>");
        let deleteButton = $("<br><br><button class='delete'>Usuń</button>");
        let editButton = $("<button class='edit'>Edytuj</button>");
        img.attr("src", (response[i].image));
        li.attr("data-id", response[i].id);
        li.css("border-bottom", "5px solid purple")
            .css("margin-bottom", "20px")
            .css("padding-bottom", "20px")
            .css("list-style", "none");
        li.append(h3.text(response[i].author))
        .append(h4.text(response[i].title))
        .append(span.text(response[i].opinion))
        .append(img)
        .append(deleteButton)
        .append(editButton);


        list.append(li);

        }

    });

}

    readOpinions();


    //dodawanie

        let addOpinion = $("#addOpinion");
        let author = $("#author");
        let title = $("#title");
        let opinion = $("#opinion");


    addOpinion.on("click", e => {
        e.preventDefault();

        let h3 = $("<h4></h4>").text(author.val());
        let h4 = $("<h5></h5>").text(title.val());
        let span = $("<span></span>").text(opinion.val());

        let li = $("<li></li>");

        li.append(h3)
        .append(h4)
        .append(span);

        list.append(li);

        let obj = {
            author: author.val(),
            title: title.val(),
            opinion: opinion.val()
        };

        addOpinion(obj, readOpinions);

        function addOpinion(obj, fn) {
            $.ajax({
                method: "POST",
                url: url + "opinions",
                dataType: "json",
                data: obj
            }).done(fn)

        }

    });

    //usuwanie

    list.on("click", ".delete", e => {
        e.preventDefault();
        let myId = $(e.target).parent().data("id");

        removeOpinion(myId, readOpinions);
    });


    function removeOpinion(id, fn) {

        $.ajax({
            method: "DELETE",
            url: url + "opinions/" + id,
            dataType: "json"
        }).done(fn)

    }


    //edytowanie 

list.on("click", ".edit", e => {
    e.preventDefault();

    let item = $(e.target);
    let myId = item.parent().data("id");
    let siblings = item.siblings();

    if(!item.hasClass("active")) {
        item.addClass("active");
        item.text("Zatwierdź");


        siblings.eq(0).attr("contenteditable", "true");
        siblings.eq(1).attr("contenteditable", "true");
        siblings.eq(2).attr("contenteditable", "true");

    } else {
        item.removeClass("active");
        item.text("Edytuj");

        siblings.eq(0).attr("contenteditable", "false");
        siblings.eq(1).attr("contenteditable", "false");
        siblings.eq(2).attr("contenteditable", "false");


        let newAuthor = siblings.eq(0).text();
        let newTitle = siblings.eq(1).text();
        let newOpinion = siblings.eq(2).text();

        let obj = {
            author: newAuthor,
            title: newTitle,
            opinion: newOpinion
        };
        updateOpinion(myId, obj, readOpinions)
    }


});
    function updateOpinion(id, obj, fn) {
        $.ajax({
            url: url + "opinions/" + id,
            type: "PUT",
            dataType: "json",
            data: obj
        }).done(fn);
    }


});