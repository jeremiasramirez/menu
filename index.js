(function(){

    document.addEventListener("contextmenu", (e)=>{

        /*preventing eventing*/
        e.preventDefault();

        let containerMenu = document.createElement("ul");
            containerMenu.textContent = "Menu  " +  "  X";
            containerMenu.setAttribute("id", "containerMenu");
            containerMenu.setAttribute("class", "containerMenu");

        let itemMenu = null,
            /* text item < menu */
            textItemMenu = ["Open", "Edit", "Delete", "Copy", "Paste", "Close"];

        /*specify 6 item */
        for(let i=0; i<6; i++){

            //creating item of menu
            itemMenu = document.createElement("li");
                itemMenu.setAttribute("id", "item-" + i);
                itemMenu.setAttribute("class", "item-" + i);
                itemMenu.textContent = textItemMenu[i];

                /*adding item to menu*/
            containerMenu.appendChild(itemMenu);

        }



        /*adding menu to body*/
        document.body.appendChild(containerMenu);


        /*  get menu id*/
        let menu = document.getElementById("containerMenu"),
            order = 15;




        /*place of menu*/
        menu.style.top = e.clientY - order + "px";
        menu.style.left = e.clientX + order + "px";



        /*if menu is clicked when removed*/
        menu.addEventListener("click", ()=>{
            menu.remove();
        }, false);



    }, false);



})();