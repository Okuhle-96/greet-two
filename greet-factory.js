
var numGreeted = 0;
var namesGreeted = {};

function greetFactoryFunction() {

    
    var name = "";
    var afterHello = "";
    var newUser = false;

    function counter() {
        numGreeted ++;
    }

    function addToNames() {
        namesGreeted[name] = [getName(),0,0,0];
    }

    function nameV() {
        return namesGreeted[name];
    }
    

    function setName(newname) {
        name = newname.trim().toLowerCase();
        if (namesGreeted[name] === undefined) {
            newUser = true;
            counter();
            addToNames();
            afterHello = newNameMsg();
        } else {
            afterHello = returnNameMsg();
            newUser = false;
        }
    }

    function isNew() {
        return newUser;
    }

    function getName() {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function setCounter() {
        switch(numGreeted) {
            case 0:
                return "0";
            case 1:
                return "1";
            default:
                return numGreeted ;
        }
    }

    function newNameMsg() {
        if (numGreeted == 1) {
            return '';
        }
        return  ""
    }

    function returnNameMsg() {
        return '';
    }

    function additionalMsg() {
        return afterHello;
    }

    function greetInIsixhosa() {
        return "Mholo, " + getName();
    }

    function greetInSesotho() {
        return "Dumelang, " + getName();
    }

    function greetInXitsonga() {
        return "Ahee, " + getName();
    }

    function setLanguage(language) {
        switch(language) {
            case 'isixhosa':
                namesGreeted[name][1] ++;
                return greetInIsixhosa();
            case 'sesotho':
                namesGreeted[name][2] ++;
                return greetInSesotho();
            case 'xitsonga':
                namesGreeted[name][3] ++;
               return greetInXitsonga();
        }
    }

    function greetUser(user,language) {

            setName(user);
            return setLanguage(language);
    }

    function clearCount() {
        localStorage.clear();
        numGreeted = 0;
        namesGreeted = {};
    }

    return {
        isNew,
        additionalMsg,
        newNameMsg,
        returnNameMsg,

        setName,
        nameV,
        greetUser,

        setCounter,
        counter,
        addToNames,

        setLanguage,
        greetInIsixhosa,
        greetInSesotho,
        greetInXitsonga,
      
        clearCount
    }
}