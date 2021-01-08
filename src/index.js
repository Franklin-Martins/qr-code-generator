async function clearAllFileds() {
    document.getElementById("name").value = "".then(()=>{
        document.getElementById("email").value = "";
    })
    
    document.getElementById("twitter").value = "";
    document.getElementById("github").value = "";
}