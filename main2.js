window.onload = function () {

    document.getElementById("CAsubmit").addEventListener("click",function(e){ 
        console.log("form submitted")

        //gran the current form in the HTML document
        var form = document.querySelector("form");

        //data given by the user
        username = form.elements.User.value;
        password = form.elements.Pass.value;
        NSFW = document.getElementsByName('NSFW');

        //checking that all fields are filled out
        if(username=="" || password == "" || firstname == "" || lastname==""){
            document.getElementById("inval").style = "color:red; opacity:1"
        }

        else{
            //if yes checked
            if(NSFW[0].checked){
                //creating the user
                fetch("http://localhost:3000/users",{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "Username": username, 
                        "Password": password,
                        "NSFW": "Yes",
                    })
                    }).then(response => response.json())
                    .then(data => console.log(data));

                window.location.href = "chuckleZone.html";

            }
            else if (NSFW[1].checked){ 
                //creating the user
                fetch("http://localhost:3000/users",{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "Username": username, 
                        "Password": password,
                        "NSFW": "No",
                    })
                    }).then(response => response.json())
                    .then(data => console.log(data));

                window.location.href = "chuckleZone.html";
            }

            else{
                document.getElementById("inval").style = "color:red; opacity:1"
            }
        }
    })

}