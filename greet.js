// creating an instance
var greetInstanceFactory = greetFactoryFunction();

// inputs
var userInput = "";
var languageSelected = "";

// buttons
var greetBtn = document.querySelector('.getName');
var clearCountBtn = document.querySelector('.clearCount');

// messages
var greetMsg = document.querySelector('.output');
var nextMsg = document.querySelector('.joined');
var fullMsg = document.querySelector('.message');

// localStorage-vibes
var count = document.querySelector('.count');
var errors = document.querySelector('.error')
var peopleGreeted = document.querySelector('.greeted');



if (localStorage['countUsers']) {
    numGreeted = Number(localStorage['countUsers']);
}

if(localStorage['greetedUsers']) {
    namesGreeted = JSON.parse(localStorage.getItem('greetedUsers'));
}

count.innerHTML = greetInstanceFactory.setCounter();


if(localStorage['greetedUsers']) {
    peopleGreeted.classList.remove("hide");
}

function greet(){
    if (count.classList.contains("error")) {
        count.classList.remove("error");
    }
    userInput = document.querySelector('.name').value;
    var regex = /[^A-z]/g;
    
    try {
        if(userInput === "" && document.querySelector(".language:checked") === null) throw "Please enter your name and select your language!";
        if(regex.test(userInput.trim())) throw "Invalid name!";
        if(userInput === "") throw "Please enter your name!";
        if(document.querySelector(".language:checked") === null) throw "Please select your language!";
    }
    
    catch(err) {
        errors.innerHTML = err;
        setTimeout(function(){
            errors.innerHTML= "";
        }, 3000);
        errors.classList.add("error");
        if (count.classList.contains("hide")) {
            count.classList.remove("hide");
            fullMsg.classList.add("hide");
        }
        document.querySelector('.name').value = "";
        return;
    }

    languageSelected = document.querySelector(".language:checked").value;
    
    greetMsg.innerHTML = greetInstanceFactory.greetUser(userInput,languageSelected);
    nextMsg.innerHTML = greetInstanceFactory.additionalMsg();

        if (fullMsg.classList.contains("hide")) {
            count.classList.add("hide");
            fullMsg.classList.remove("hide");
            }

        document.querySelector('.name').value = "";
        document.querySelector(".language:checked").checked = false;

        count.innerHTML = greetInstanceFactory.setCounter();

        localStorage.setItem('greetedUsers', JSON.stringify(namesGreeted));
        localStorage.setItem('countUsers',numGreeted);
        if (peopleGreeted.classList.contains("hide")) {
            peopleGreeted.classList.remove("hide");
            }

}
greetBtn.addEventListener('click', greet);



function clearCountFunction(){
    greetInstanceFactory.clearCount();
    count.innerHTML = 0;
    
    if (count.classList.contains("hide")) {
        count.classList.remove("hide");
        fullMsg.classList.add("hide");
        }
        if (!peopleGreeted.classList.contains("hide")) {
            peopleGreeted.classList.add("hide");
            }
}
clearCountBtn.addEventListener('click', clearCountFunction);


