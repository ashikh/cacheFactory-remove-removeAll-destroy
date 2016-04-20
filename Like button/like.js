var n=0; //click_count
function action() {
var userChoice = document.getElementById("choice");
    if (n % 2 == 0){
userChoice.style.backgroundColor="pink";
userChoice.setAttribute("value","Unlike");
        n=n+1;
        }
    else
        {
userChoice.style.backgroundColor="skyblue";
userChoice.setAttribute("value","Like");
        n=n+1;
        }
}