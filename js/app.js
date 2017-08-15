$(() => {


    const btn = $(".btn");



                btn.on("click", (e) => {
                    e.preventDefault();

                    if (btn.find("a").text("READ MORE")) {
                        btn.find("a").text("HIDE");
                    }
                    if (btn.find("a").text("HIDE")) {
                        btn.find("a").text("READ MORE");
                    }
                });
















});