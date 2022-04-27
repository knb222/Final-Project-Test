window.onload = function () {

    document.getElementById("Lsubmit").addEventListener("click",function(e){ 

        //gran the current form in the HTML document
        var form = document.querySelector("form");

        //data given by the user
        username = form.elements.User.value;
        password = form.elements.Pass.value;

        x=2
        y=2
        //if user and pass match in the database
        if(x==1){
            //if NSFW
            if(y==1){
                window.location.href = "ChuckNoShirt.html";
            }
            else{
                window.location.href = "ChuckShirt.html";
            }
        }
        else{
            document.getElementById("inval").style = "color:red; opacity:1"

        }
    })

}