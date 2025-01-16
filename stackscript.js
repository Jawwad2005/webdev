

document.addEventListener("DOMContentLoaded", function () {

    

    document.getElementById("push").addEventListener("click", function () {

        const input = document.getElementById("elems").value;


            const div = document.createElement("div"); 
            div.style.background = "gray";
            div.style.border = "2px solid black";
            div.style.width = "50px";
            div.style.margin = "1px";
            div.innerHTML = input;
            document.getElementById("container").appendChild(div);

        
    });

    document.getElementById("pop").addEventListener("click", function(){
        const container = document.getElementById("container");

        document.getElementById("popped").innerHTML 
        = "Current popped element: " + container.lastChild.innerHTML;

        if(container.lastChild){
            container.removeChild(container.lastChild);
        }
    });
});
