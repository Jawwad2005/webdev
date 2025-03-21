

document.addEventListener("DOMContentLoaded", function () {

    

    document.getElementById("push").addEventListener("click", function () {

        const input = document.getElementById("elems").value;


            const div = document.createElement("div"); 
            div.style.color = "white";
            div.style.background = "gray";
            div.style.border = "2px solid lightgray";
            div.style.borderRadius = "3px";
            div.style.height = "30px"
            div.style.width = "100px";
            div.style.margin = "1px";
            div.style.display = "flex";
            div.style.justifyContent = "center";
            div.style.alignItems = "center";
            div.innerHTML = input;
            document.getElementById("stack").appendChild(div);
    });

    document.getElementById("pop").addEventListener("click", function(){
        const container = document.getElementById("stack");

        document.getElementById("popped").innerHTML 
        = "Current popped element: " + container.lastChild.innerHTML;

        if(container.lastChild){
            container.removeChild(container.lastChild);
        }
    });
});
