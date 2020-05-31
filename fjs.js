function myFunction() {

    var username = document.getElementById("username");
    var pass = document.getElementById("password");
    

    if (username.value.length==0 && pass.value.length==0){
        alert ("Please enter username and password!");
    }
    else if (username.value.length==0){
        alert ("Please enter username");
    }
    else if (pass.value.length==0){
        alert("Please enter password");
    }
    else if (username.value == "user" && pass.value == "user"){
        document.getElementById("usr").innerHTML = "It works!";
		document.getElementById("adm").innerHTML = " ";
    }
    else if(username.value == "admin" && pass.value == "admin"){
        document.getElementById("adm").innerHTML = "It works!";
		document.getElementById("usr").innerHTML = " ";
    }
    else{
        alert("unrecognized user")
    }
   
   
}