async function clearAllFileds() {
    document.getElementById("name").value = "".then(()=>{
        document.getElementById("email").value = "";
    })
    
    document.getElementById("twitter").value = "";
    document.getElementById("github").value = "";
}

function createUserBadge(){
    try {
        const name = document.forms["myForm"]["name"].value;
        const email = document.forms["myForm"]["email"].value;
        const twitter = document.forms["myForm"]["twitter"].value;
        const github = document.forms["myForm"]["github"].value;
        if(name == "" && email){
            alert("Informe nome e email válidos")
            return false
        }
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("name", twitter);
        sessionStorage.setItem("email", github);
    } catch (error) {
        return console.log(error)
    }
}
