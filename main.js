window.onload = function () {

    document.getElementById("Lsubmit").addEventListener("click",function(e){ 

        //gran the current form in the HTML document
        var form = document.querySelector("form");

        //data given by the user
        username = form.elements.User.value;
        password = form.elements.Pass.value;

        //creating the user
        userprom=fetch("http://localhost:3000/users",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "Username": username, 
                "Password": password,
            })
            }).then(response => response.json())
            .then(data => console.log(data));

        async function resolveprom() {
            const user= await userprom;
            x=1 //if 200 good if 400 bad
            //if user and pass match in the database
            if(x==1){
                window.location.href = "chuckleZone.html";
            }
            else{
                document.getElementById("inval").style = "color:red; opacity:1"
            }
        }
        resolveprom();
    })

}