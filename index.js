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
let aboutMeContainer = document.getElementById("container-about-me")
let projectsContainer = document.getElementById("container-projects")
let contactContainer = document.getElementById("container-contact")
let themeSwitcher = document.getElementById("theme-switcher")
let dark = document.getElementById("dark");
let light = document.getElementById("light");
let themeOption = document.getElementById("themeOption");

themeOption.hidden = true;

themeSwitcher.onclick = function() {
        themeSwitcher.hidden = true;
        themeOption.hidden = false;
        themeOption.style.display = "flex";
        themeOption.style.flexDirection = "row";
}

dark.onclick = function() {
        themeOption.hidden = false;
        dark.hidden = true;
        light.hidden = false;
        body.style.backgroundColor = "black";
        aboutMeContainer.style.backgroundColor = "rgba(5, 5, 106, 0.8)";
        projectsContainer.style.backgroundColor = "black";
        contactContainer.style.backgroundColor = "rgba(5, 5, 106, 0.8)";   
        body.style.color = "white";
}

light.onclick = function() {
        themeOption.hidden = false;
        dark.hidden = false;
        light.hidden = true;
        body.style.backgroundColor = "";
        aboutMeContainer.style.backgroundColor = "";
        projectsContainer.style.backgroundColor = "";
        contactContainer.style.backgroundColor = ""; 
        body.style.color = "";
}

