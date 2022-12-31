function openSearchBar() {
    document.querySelector(".search").style.visibility = "visible";
    document.querySelector(".SEARCH").style.visibility = "hidden";
}

function openMenu(){
    document.querySelector(".menuContainer").style.visibility = "visible";
    document.getElementById("menuBtn").style.visibility = "hidden";
}

function closeMenu(){
    document.querySelector(".menuContainer").style.visibility = "hidden";
    document.getElementById("menuBtn").style.visibility = "visible";
}

document.querySelector(".body").addEventListen('click', function(){
    document.querySelector(".menuContainer").style.visibility = "hidden";
});

function bellBtn(){
    document.querySelector(".bellContainer").style.visibility = "visible";

}

setTimeout(() => {
    document.querySelector(".bellContainer").style.visibility = "hidden";
}, 1000);

//cart// cont

function openProduct() {
    document.querySelector(".messageCheck").style.visibility = 'visible';
    document.getElementById('displayCheckOut').style.visibility = "visible";
    document.querySelector(".iconProduct").style.visibility = "hidden";
}

function backk(){
    document.getElementById('displayCheckOut').style.visibility = "hidden"
    document.querySelector(".iconProduct").style.visibility = "visible";
}


function openprivacy(){
    document.querySelector(".containerPrivacy").style.visibility = "visible";
    document.querySelector("footer").style.visibility = "hidden";
}




function closeMessageCheck(){
    document.querySelector(".iconProduct").style.visibility = "visible";
    document.querySelector(".messageCheck").style.visibility = 'hidden';
}

//close functions//

//define //

//close define elements//
//checkout//



//open settimeout//

setTimeout(() => {
    document.getElementById('displayCheckOut').style.visibility = "hidden";
}, 1000);

setTimeout(() => {
    document.querySelector(".containerPrivacy").style.visibility = "hidden";
    document.querySelector("footer").style.visibility = "visible";
}, 4000);

setTimeout(() => {
    document.querySelector(".productContainer").style.visibility = "hidden";
}, 96000);

setTimeout(() => {
    document.querySelector(".search").style.visibility = "hidden";
    document.querySelector(".SEARCH").style.visibility = "visible";
}, 80000);

//close search container//

function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "mackline1616@gmail.com",
        Password : "lekawmgefyvclcml",
        To : 'mackline1616@gmail.com',
        From : document.getElementById('email').value,
        Subject : "This is new Subscription from Cont-Parts",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}