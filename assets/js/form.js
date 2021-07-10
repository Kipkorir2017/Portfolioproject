window.onload = function () {
    document.getElementById('btn').addEventListener('click', function () {
        validateMyForm()
    });

    function validateMyForm() {
        var tel = document.forms["myForm"]["phonenumber"].value;
        var email = document.forms["myForm"]["email"].value;
        var message = document.forms["myForm"]["message"].value;
        atposition = email.indexOf("@");
        dotposition = email.lastIndexOf(".");

        if (email == "" || tel == "" || message == "") {
            alert("Please fill out all fields");
            return false;
        } else if (atposition < 1 || (dotposition - atposition < 2)) {
            alert("Please enter correct email")
            email.focus();
            return false;
        } else {
            alert('Message Sent')
            reset();
        }
        if(tel.length <10){
            alert("please incorrect phone number");
            return false;

        }
        return true;
    }

    function reset() {
        location.reload();
    }


}
// function validateMyForm(){
//     var email=document.getElementById("myForm")("email").value;
//     var tel =document.getElementById("myForm")("phonenumber").vale;

//     atpos=email.indexOf("@");
//     dotpos =tel.lastIndexOf(".");
//     if (atpos<2 || dotposition<atposition+2 || dotposition+2>=email.length){  
//         alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
//         return false;  
//         }  
//else if (names.length < 3 || names.length > 35 || names.match(/^[0-9]+$/)) {
   // alert("Please enter correct name");
   // names.focus();
    //return false;
//} //
// }
