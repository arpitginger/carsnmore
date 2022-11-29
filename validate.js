function registration() {

    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pwd = document.getElementById("password").value;
    var cpwd = document.getElementById("password2").value;
    var cb = document.getElementById("check").value;

    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    var letters = /^[A-Za-z]+$/;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var tel = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
    if (name == '') {
        alert('Please enter your name');
    }
    else if (!letters.test(name)) {
        alert('Name field required only alphabet characters');
    }
    else if (email == '') {
        alert('Please enter your user email id');
    }
    else if (!filter.test(email)) {
        alert('Invalid email');
    }
    else if (phone== '') {
        alert('Please enter the phone number.');
    }
    else if (!tel.test(phone)) {
        alert('phone number field required only numbers');
    }
    else if (pwd == '') {
        alert('Please enter Password');
    }
    else if (cpwd == '') {
        alert('Enter Confirm Password');
    }
    else if (!pwd_expression.test(pwd)) {
        alert('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
    else if (pwd != cpwd) {
        alert('Password not Matched');
        location.reload();
    }
    else if (document.getElementById("password2").value.length < 6) {
        alert('Password minimum length is 6');
    }
    else if (document.getElementById("password2").value.length > 12) {
        alert('Password max length is 12');
    }
    else {
        alert('Thank You for Login & You are Redirecting to Campuslife Website');
        window.location.href = "success.html";
    }
}
function clearFunc() {
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("password").value = "";
    document.getElementById("password2").value = "";
}