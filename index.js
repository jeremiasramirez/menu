(function(){

    document.addEventListener("contextmenu", (e)=>{
        /*preventing block*/
        e.preventDefault();

        //if click and element container Exist removed and create other
        if(document.getElementById("containerMenu")){
            document.getElementById("containerMenu").remove();
        }


        if(!document.getElementById("containerMenu")){


            /*
             ***********   functions   **************
            */

            function createItem(itemMenu, containerMenu){

                /*specify 6 item to create*/
                for(let i=0; i<6; i++){

                    //creating item of menu
                    itemMenu = document.createElement("li");
                    itemMenu.setAttribute("id", "item-" + i);
                    itemMenu.setAttribute("class", "item-" + i);
                    itemMenu.textContent = textItemMenu[i];

                    /*adding item to menu*/
                    containerMenu.appendChild(itemMenu);

                }

            }




            function placeMenu(menu, order){

                menu.style.top = ( e.clientY - order )  + "px";
                menu.style.left = ( e.clientX + order ) + "px";
            }




            function removeMenu(menu){

                if(menu){

                    menu.addEventListener("click", ()=>{
                        menu.remove();
                    }, false);

                }

            }

  
            


            function containerMenuFunc(containerMenu){

                containerMenu.textContent = "Menu  " +  "  X";
                containerMenu.setAttribute("id", "containerMenu");
                containerMenu.setAttribute("class", "containerMenu");

            }




            /*********** End functions  ***********/


            let containerMenu = document.createElement("ul");

            containerMenuFunc(containerMenu);

            let itemMenu = null,
                textItemMenu = ["Open", "Edit", "Delete", "Copy", "Paste", "Close"];

            createItem(itemMenu, containerMenu);


            /*adding menu to body*/
            document.body.appendChild(containerMenu);


            /*  get menu id*/
            let menu = document.getElementById("containerMenu"),
                order = 15;


            /*place of menu*/
            placeMenu(menu, order);


            /*if menu is clicked then removed*/
            removeMenu(menu);


        }


    }, false);



})();
