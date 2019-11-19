(function(){

    document.addEventListener("contextmenu", (e)=>{
        e.preventDefault();
        let menuBack = document.getElementById("containerMenu");
        if(menuBack){
            menuBack.remove();

        }

        let containerMenu = document.createElement("ul");


        containerMenu.setAttribute("id", "containerMenu");
        containerMenu.textContent = "Menu  " +  "  X";
        containerMenu.setAttribute("class", "containerMenu");

        let itemMenu = null;
        let textItemMenu = ["Open", "Edit", "Delete", "Copy", "Close"];

        for(let i=0; i<5; i++){

            itemMenu = document.createElement("li");
            itemMenu.setAttribute("id", "item");
            itemMenu.setAttribute("class", "item");
            itemMenu.textContent = textItemMenu[i];
            containerMenu.appendChild(itemMenu);

        }




        document.body.appendChild(containerMenu);



        let menu = document.getElementById("containerMenu");
        let order = 15;

        menu.addEventListener("click", ()=>{
            menu.remove();
        }, false);

        menu.style.top = e.clientY - order + "px";
        menu.style.left = e.clientX + order + "px";



    }, false);









})();