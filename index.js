(function(){

    document.addEventListener("click", (e)=>{
        let menuBack = document.getElementById("containerMenu");
        if(menuBack){
            menuBack.remove();

        }

        let containerMenu = document.createElement("ul");


        containerMenu.setAttribute("id", "containerMenu");
        containerMenu.textContent = "Menu";
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

        menu.style.top = e.clientY - order + "px";
        menu.style.left = e.clientX + order + "px";


    }, false);









})();