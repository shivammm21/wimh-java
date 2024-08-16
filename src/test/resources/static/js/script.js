function dispLoginDiv() {
    const loginDiv = document.getElementById('login-div');
    const body = document.body;

    if (loginDiv.style.opacity === "1") {
        loginDiv.style.opacity = "0";
        loginDiv.style.visibility = "hidden";
        loginDiv.style.transform = "translateY(500px)";
        body.classList.remove('blurred-body');
    } else {
        loginDiv.style.opacity = "1";
        loginDiv.style.visibility = "visible";
        loginDiv.style.transform = "translateY(0px)";
        body.classList.add('blurred-body');
    }
}

document.addEventListener('click', function(event) {
    const loginDiv = document.getElementById('login-div');
    const showModalBtn = document.querySelector('.nav-bar-login-btn');
    const menuItem = document.querySelector('.menu-item');
    const body = document.body;
    if (!loginDiv.contains(event.target) && event.target !== showModalBtn && event.target !== menuItem) {
        loginDiv.style.opacity = "0";
        loginDiv.style.visibility = "hidden";
        loginDiv.style.transform = "translateY(500px)";
        body.classList.remove('blurred-body');
    }
});
















document.addEventListener('DOMContentLoaded', function() {
    const loginChar = document.querySelector('.login-char');
    const signupChar = document.querySelector('.signup-char');
    const logininputmail = document.querySelector('.login-input-contact');
    const signupinputname = document.querySelector('.signup-input-name');
    const loginInfoContainer = document.querySelector('.login-info-container-div');
    const signupInfoContainer = document.querySelector('.signup-info-container-div');

    let isLoginVisible = true;

    function showSignup() {
        signupChar.style.marginTop = '10%';
        signupinputname.style.marginTop = '2%';
        signupInfoContainer.classList.add('show');
        signupInfoContainer.classList.remove('hide');
        loginInfoContainer.classList.add('hide');
        loginInfoContainer.classList.remove('show');
        loginChar.style.marginTop = '60%';
        logininputmail.style.marginTop = '63%';
        isLoginVisible = false;
    }

    function showLogin() {
        loginChar.style.marginTop = '10%';
        logininputmail.style.marginTop = '2%';
        loginInfoContainer.classList.add('show');
        loginInfoContainer.classList.remove('hide');
        signupInfoContainer.classList.add('hide');
        signupInfoContainer.classList.remove('show');
        signupChar.style.marginTop = '60%';
        signupinputname.style.marginTop = '63%';
        isLoginVisible = true;
    }

    signupChar.addEventListener('click', function() {
        if (isLoginVisible) {
            showSignup();
        }
    });

    loginChar.addEventListener('click', function() {
        if (!isLoginVisible) {
            showLogin();
        }
    });

    // Initialize visibility on page load
    loginInfoContainer.classList.add('show');
    signupInfoContainer.classList.add('hide');
    logininputmail.style.marginTop = '2%';
    signupinputname.style.marginTop = '63%';
});


















document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('search-box');
    const suggestionsList = document.getElementById('suggestions-list');

    const suggestions = ["Grass", "Grasshopper", "Grassland", "Grassy knoll", "Grassroots", "Grass snake"];

    searchBox.addEventListener('input', function() {
        const query = searchBox.value.toLowerCase();
        suggestionsList.innerHTML = '';
        if (query) {
            const filteredSuggestions = suggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(query)
            );
            filteredSuggestions.forEach(suggestion => {
                const listItem = document.createElement('li');
                listItem.textContent = suggestion;
                listItem.addEventListener('click', function() {
                    searchBox.value = suggestion;
                    suggestionsList.innerHTML = '';
                });
                suggestionsList.appendChild(listItem);
            });
            suggestionsList.style.display = filteredSuggestions.length ? 'block' : 'none';
        } else {
            suggestionsList.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-container')) {
            suggestionsList.style.display = 'none';
        }
    });
});










function mobileMenu() {
    const menuList = document.getElementById('threeline-menu-list');
    const button = document.querySelector('.threelineicon');

    if (menuList.style.transform === "translateX(100%)" || menuList.style.transform === "") {
        menuList.style.transform = "translateX(0)";
        menuList.style.opacity = "1";
        menuList.style.zIndex = "1";
        button.style.zIndex = "3";
    } else {
        menuList.style.transform = "translateX(100%)";
        menuList.style.opacity = "0";
    }
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('threeline-menu-list');
    const button = document.querySelector('.threelineicon');
    const loginchar = document.querySelector('.login-char');
    const signupchar = document.querySelector('.signup-char');

    // Check if the click is outside the menu and not on the toggle button
    if (!menu.contains(event.target) && event.target !== button && event.target !== loginchar && event.target !== signupchar) {
        menu.style.transform = "translateX(100%)";
        menu.style.opacity = "0";
    }
});

window.addEventListener('scroll', function() {
    const menuList = document.getElementById('threeline-menu-list');
    menuList.style.transform = "translateX(100%)";
    menuList.style.opacity = "0";
});










window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav-bar');
    const navbarloginbtn = document.querySelector('.nav-bar-login-btn');
    const WIMHlogo = document.querySelector('.WIMH-logo');
    const threelineicon = document.querySelector('.threelineicon');
    const searchcontainer = document.querySelector('.search-container');
    const searchbox = document.querySelector('.search-box');
    const suggestionlist = document.querySelector('.suggestions-list');
    const navbarmenu = document.querySelector('.navbar-menu');
    const navbarsearchbtn = document.querySelector('.navbar-search-btn');

    //if (window.scrollY > 0) {

        navbar.style.borderRadius = "0 0 0 0";
        navbar.style.height= "81vh";
        navbarloginbtn.style.marginLeft = "79.5vw";
        navbarloginbtn.style.opacity = "0";
        navbarloginbtn.style.visibility = "hidden";
        WIMHlogo.style.marginTop = "71vh";
        WIMHlogo.style.marginLeft = "-89.6vw";
        WIMHlogo.style.height = "10vh";
        WIMHlogo.style.width = "22vw";
        threelineicon.style.marginLeft = "67.4vw";
        threelineicon.style.opacity = "1";
        threelineicon.style.visibility = "visible";
        searchcontainer.style.marginLeft = "33.09vw";
        searchcontainer.style.marginTop = "72.3vh";
        searchbox.style.height = "6.35vh";
        suggestionlist.style.marginTop = "5.9vh";
        navbarmenu.style.opacity = "0";
        navbarmenu.style.marginLeft = "65vw";
        navbarmenu.style.visibility = "hidden";
        navbarsearchbtn.style.marginTop = "72.3vh";
        navbarsearchbtn.style.marginLeft = "65.3vw";

   /*
    } else {
        navbar.style.borderRadius = "0 0 50% 50%";
        navbar.style.height= "160vh";
        navbarloginbtn.style.marginLeft = "2.3vw";
        navbarloginbtn.style.opacity = "1";
        navbarloginbtn.style.visibility = "visible";
        WIMHlogo.style.marginTop = "85vh";
        WIMHlogo.style.marginLeft = "8.8vw";
        WIMHlogo.style.height = "40vh";
        WIMHlogo.style.width = "52vw";
        threelineicon.style.marginLeft = "16.2vw";
        threelineicon.style.opacity = "0";
        threelineicon.style.visibility = "hidden";
        searchcontainer.style.marginLeft = "28.69vw";
        searchcontainer.style.marginTop = "128vh";
        searchbox.style.height = "7.94vh";
        suggestionlist.style.marginTop = "7.9vh";
        navbarmenu.style.opacity = "1";
        navbarmenu.style.marginLeft = "60vw";
        navbarmenu.style.visibility = "visible";
        navbarsearchbtn.style.marginTop = "128.7vh";
        navbarsearchbtn.style.marginLeft = "60.3vw";
    }
    */
});