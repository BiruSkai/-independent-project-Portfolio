//Fortune Teller
function addedMsg() {
        const number = Math.floor(Math.random() * 7);
        if (number == 0) {
                return "You could meet a wonderful person.";
        }
        else if (number == 1) {
                return "You could get a lot of present";
        }
        else if (number == 2) {
                return "You might find an ancient gold treasure";
        }
        else if (number == 3) {
                return "Be exited for it!";
        }
        else if (number == 4) {
                return "You might spend the day in the nature.";
        }
        else if (number == 5) {
                return "You might do a great thing for the society.";
        }
        else if(number == 6) {
                return "Let's see what will happen.";
        };
};

const message = () => {
        const number = Math.floor(Math.random() * 7);
        let day;
        switch (number) {   
                case 0:
                        day = "Monday";
                        break;
                case 1:
                        day = "Tuesday";
                        break;
                case 2:
                        day = "Wednesday";
                        break;
                case 3:
                        day = "Thursday";
                        break;
                case 4:
                        day = "Friday";
                        break;
                case 5:
                        day = "Saturday";
                        break;
                case 6:
                        day = "Sunday";
                        break;   
        };
        return (`Your luckiest day in the week is ${day}. ${addedMsg()}`);
};


/*
//Method 1 to trigger JS
function showMessage () {
        let randomMessage = document.getElementById("fortune-message");
        randomMessage.innerHTML = message();
}

document.getElementById("fortune-button").addEventListener("click", showMessage);
*/

//Method 2 to trigger Fortune Teller
let button = document.getElementById("fortune-button");
let fortuneMessage = document.getElementById("fortune-message");
let fortuneHead = document.getElementById("fortuneHead");
let askFortune = document.getElementById("askFortune");
const speaking = [
        "Have a drink before asking me again",
        "Touch me again to have another fortune",
        "Invite your friends to have their fortune",
        "Well...",
        "Your cloth looks great",
        "Can I help you?",
        "You did a great job!",
        "How are you today? "
]
let speakingLength = speaking.length;


button.onclick = function() {
        fortuneMessage.innerHTML = message();
        fortuneHead.innerHTML = "Fortune:"
        let number = Math.floor(Math.random() * speakingLength);
        askFortune.innerHTML = speaking[number];
}

//Theme color
let body = document.getElementById("body");
let profileContainer = document.getElementById("container-profile");
let aboutMeContainer = document.getElementById("container-about-me");
let projectsContainer = document.getElementById("container-projects");
let contactContainer = document.getElementById("container-contact");
let dark = document.getElementById("dark");
let light = document.getElementById("light");

light.hidden = true;

dark.onclick = function() {  
        dark.hidden = true;
        light.hidden = false;
        body.style.backgroundColor = "black";
        profileContainer.style.background = "url(./images/nightsky.jpg)";
        profileContainer.style.backgroundRepeat = "no-repeat";
        profileContainer.style.backgroundSize = "cover";
        profileContainer.style.backgroundPosition = "left 15% top 25%";
        profileContainer.style.color = "hotpink";
        aboutMeContainer.style.backgroundColor = "rgba(5, 5, 106, 0.8)";
        projectsContainer.style.backgroundColor = "black";
        contactContainer.style.backgroundColor = "rgba(5, 5, 106, 0.8)";   
        body.style.color = "white";
}

light.onclick = function() {
        dark.hidden = false;
        light.hidden = true;
        body.style.backgroundColor = "";
        profileContainer.style.backgroundImage = "";
        profileContainer.style.backgroundRepeat = "";
        profileContainer.style.backgroundSize = "";
        profileContainer.style.color = "";
        aboutMeContainer.style.backgroundColor = "";
        projectsContainer.style.backgroundColor = "";
        contactContainer.style.backgroundColor = ""; 
        body.style.color = "";
}


//Mobile navigation
let menu = document.getElementById("menu");
let mModeSwitch = document.getElementById("mobile-modeSwitch");
let mNavList = document.getElementById("mobile-navList");

mModeSwitch.hidden = true;
mNavList.hidden = true;


menu.onclick = function () {
        menu.hidden = true;
        mModeSwitch.hidden = false;
        mNavList.hidden = false;
}

mNavList.onclick = function () {
        menu.hidden = false;
        mModeSwitch.hidden = true;
        mNavList.hidden = true;
}

let mDark = document.getElementById("mobile-dark");
let mLight = document.getElementById("mobile-light");

mDark.onclick = function () {
        mNavList.hidden = true;
        mModeSwitch.hidden = true;
        body.style.backgroundColor = "black";
        profileContainer.style.background = "url(./images/nightsky.jpg)";
        profileContainer.style.backgroundRepeat = "no-repeat";
        profileContainer.style.backgroundSize = "cover";
        profileContainer.style.backgroundPosition = "left 15% top 25%";
        profileContainer.style.color = "hotpink";
        aboutMeContainer.style.backgroundColor = "rgba(5, 5, 106, 0.8)";
        projectsContainer.style.backgroundColor = "black";
        contactContainer.style.backgroundColor = "rgba(5, 5, 106, 0.8)";   
        body.style.color = "white";

}

mLight.onclick = function () {
        mNavList.hidden = true;
        mModeSwitch.hidden = true;
        body.style.backgroundColor = "";
        profileContainer.style.backgroundImage = "";
        profileContainer.style.backgroundRepeat = "";
        profileContainer.style.backgroundSize = "";
        profileContainer.style.color = "";
        aboutMeContainer.style.backgroundColor = "";
        projectsContainer.style.backgroundColor = "";
        contactContainer.style.backgroundColor = ""; 
        body.style.color = "";
}



