var nameText=document.getElementById('valueName'),
    emailText=document.getElementById('valueEmail'),
    passwordText=document.getElementById('valuePassword'),
    signButton=document.getElementById('sign');
    
    function signUp() {
    var form = document.getElementById('enter');
    var sign =  document.getElementById('signup');
    form.setAttribute('class', 'hide');
    sign.setAttribute('class', 'show');
    document.getElementById('msg').setAttribute('class', 'hide');
    }
        
    function init() {
        if (! Modernizr.localstorage) {
            signButton.style.display ='none';
        }
    }
init();

    function login() {
    var form =document.getElementById('enter');
    var login = document.getElementById('login');
    form.setAttribute('class', 'hide');
    login.setAttribute('class', 'show');
    document.getElementById('error').setAttribute('class','hide');
    emailText.value='';
    passwordText.value='';
    }

        function storeValue() {
        var name="Name", 
            nameValue=nameText.value,
            email="Email",
            emailValue=emailText.value,
            password="Password", 
            passwordValue=passwordText.value;
        if (nameValue && emailValue && passwordValue) {
            localStorage.setItem(name, nameValue);
            nameText.value='';
            localStorage.setItem(email, emailValue);
            emailText.value='';
            localStorage.setItem(password, passwordValue);
            passwordText.value='';
            document.getElementById('msg').setAttribute('class', 'show');
        }
    }

function mailId()
{
    var mail=emailText.value;
    document.getElementById('mailError').setAttribute('class', 'hide');
    var validmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!(validmail.test(mail)))
    document.getElementById('mailError').setAttribute('class', 'show');
}

    function verifyValue() {
    var enteredEmail=document.getElementById('checkEmail').value,
            enteredPassword=document.getElementById('checkPassword').value;
           var name=localStorage.getItem("Name"),
           email=localStorage.getItem("Email"),
             password=localStorage.getItem("Password");
    if((email == enteredEmail) && (password == enteredPassword)) {
                document.getElementById('checkEmail').value='';
                document.getElementById('checkPassword').value='';
            var login = document.getElementById('login');
            login.setAttribute('class', 'hide');
         document.getElementById('success').setAttribute('class', 'show');
       document.getElementById('user').innerHTML=name;
               }
else {
    document.getElementById('error').setAttribute('class', 'show');
}
}
               
function home() {
    document.getElementById('success').setAttribute('class', 'hide');
    var login = document.getElementById('login');
     var form =document.getElementById('enter');
     var sign =  document.getElementById('signup');
    login.setAttribute('class', 'hide');
    form.setAttribute('class', 'show');
    sign.setAttribute('class', 'hide');
}