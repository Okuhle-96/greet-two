var list = document.querySelector('.nameList');

// var numGreeted = 0;
// var namesGreeted = {};

if(localStorage['greetedUsers']) {
 var   namesGreeted = JSON.parse(localStorage.getItem('greetedUsers'));
}
if(localStorage['greetedUsers']) {
  var  namesGreeted = JSON.parse(localStorage.getItem('greetedUsers'));
}

for (var name in namesGreeted) {

    let peopleGreeted = document.createElement("li");
    let names = document.createElement("p");

    names.innerHTML = greet(namesGreeted[name]);
    peopleGreeted.innerHTML = namesGreeted[name][0];

    peopleGreeted.appendChild(names);
    list.appendChild(peopleGreeted);

    peopleGreeted.classList.add(name);
    names.classList.add('hide')

    peopleGreeted.addEventListener('click', function() {
        this.classList.toggle('more');
        this.children[0].classList.toggle('hide');
    });
}

function greet(data) {
    function langNameCount(times,lang) {
        switch(times) {
            case 0:
                return lang + " : " + times + ";  <br>";
            case 1:
                return lang + " : " + times + ";  <br>";
            case 2:
                return lang + " : " + times + ";  <br>";
            default:
                return lang + " :  " + times + ";  <br>";
        }
    }
    return langNameCount(data[1],"IsiXhosa") + " " + langNameCount(data[2],"SeSotho") + " " + langNameCount(data[3],"XiTsonga");
}
