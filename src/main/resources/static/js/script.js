/*function dispLoginDiv() {
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
    const logindivright = document.querySelector('.login-div-right');
    const signupChar = document.querySelector('.signup-char');
    const logininputcontact = document.querySelector('.login-input-contact');
    const signupinputname = document.querySelector('.signup-input-name');
    const loginInfoContainer = document.querySelector('.login-info-container-div');
    const signupInfoContainer = document.querySelector('.signup-info-container-div');
    const signupsendotpbtn = document.getElementById('signup-send-otp-btn');
    const signupinputcontact = document.getElementById('signup-input-contact');
    const loginsendotpbtn = document.getElementById('login-send-otp-btn');
    const loginputcontact = document.getElementById('login-input-contact');
    const signupinputotp = document.getElementById('signup-input-otp');
    const signupbtn = document.getElementById('signup-btn');
    const logininputotp = document.getElementById('login-input-otp');
    const loginbtn = document.getElementById('login-btn');

    let isLoginVisible = true;

    function showSignup() {
        signupChar.style.marginTop = '10%';
        signupinputname.style.marginTop = '2%';
        signupInfoContainer.classList.add('show');
        signupInfoContainer.classList.remove('hide');
        loginInfoContainer.classList.add('hide');
        loginInfoContainer.classList.remove('show');
        loginChar.style.marginTop = '60%';
        logininputcontact.style.marginTop = '63%';
        isLoginVisible = false;
        loginsendotpbtn.disabled = false;
        loginputcontact.disabled = false;
        loginsendotpbtn.style.backgroundColor = 'rgb(16, 214, 66)';
        loginputcontact.style.backgroundColor = 'white';
        loginsendotpbtn.style.cursor = 'pointer';
        loginputcontact.style.cursor = '';
        logininputotp.style.opacity = '0';
        logininputotp.style.visibility = 'hidden';
        logininputotp.style.marginTop = '-5%';
        loginbtn.style.marginTop = '-5%';
        logindivright.style.overflow = 'auto';
    }

    function showLogin() {
        loginChar.style.marginTop = '10%';
        logininputcontact.style.marginTop = '2%';
        loginInfoContainer.classList.add('show');
        loginInfoContainer.classList.remove('hide');
        signupInfoContainer.classList.add('hide');
        signupInfoContainer.classList.remove('show');
        signupChar.style.marginTop = '60%';
        signupinputname.style.marginTop = '63%';
        signupsendotpbtn.disabled = false;
        signupinputcontact.disabled = false;
        signupsendotpbtn.style.backgroundColor = 'rgb(16, 214, 66)';
        signupinputcontact.style.backgroundColor = 'white';
        signupsendotpbtn.style.cursor = 'pointer';
        signupinputcontact.style.cursor = '';
        signupinputotp.style.opacity = '0';
        signupinputotp.style.visibility = 'hidden';
        signupinputotp.style.marginTop = '-5%';
        signupbtn.style.marginTop = '-5%';
        logindivright.style.overflow = 'hidden';
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
    logininputcontact.style.marginTop = '2%';
    signupinputname.style.marginTop = '63%';
    logindivright.style.overflow = 'hidden';
});
*/









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
    if (window.scrollY > 0) {
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
        navbarsearchbtn.style.marginTop = "72.8vh";
        navbarsearchbtn.style.marginLeft = "65.3vw";
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
        searchcontainer.style.marginLeft = "29.69vw";
        searchcontainer.style.marginTop = "128vh";
        searchbox.style.height = "6.94vh";
        suggestionlist.style.marginTop = "6.8vh";
        navbarmenu.style.opacity = "1";
        navbarmenu.style.marginLeft = "60vw";
        navbarmenu.style.visibility = "visible";
        navbarsearchbtn.style.marginTop = "128.8vh";
        navbarsearchbtn.style.marginLeft = "61.8vw";
    }
});


















/*----------------------------------------DASHBOARD PAGE-----------------------------------------------*/











document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('dash-search-box');
    const suggestionsList = document.getElementById('dash-suggestions-list');

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












function dashmobileMenu() {
    const menuList = document.getElementById('dash-threeline-menu-list');
    const button = document.querySelector('.dash-threelineicon');

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
    const menu = document.getElementById('dash-threeline-menu-list');
    const button = document.querySelector('.dash-threelineicon');
    const loginchar = document.querySelector('.login-char');
    const signupchar = document.querySelector('.signup-char');

    // Check if the click is outside the menu and not on the toggle button
    if (!menu.contains(event.target) && event.target !== button && event.target !== loginchar && event.target !== signupchar) {
        menu.style.transform = "translateX(100%)";
        menu.style.opacity = "0";
    }
});

window.addEventListener('scroll', function() {
    const menuList = document.getElementById('dash-threeline-menu-list');
    menuList.style.transform = "translateX(100%)";
    menuList.style.opacity = "0";
});








function dispProfileDiv() {
    const profileDiv = document.getElementById('profile-div');
    const body = document.body;

    if (profileDiv.style.opacity === "1") {
        profileDiv.style.opacity = "0";
        profileDiv.style.visibility = "hidden";
        profileDiv.style.transform = "translateY(500px)";
        body.classList.remove('blurred-body');
    } else {
        profileDiv.style.opacity = "1";
        profileDiv.style.visibility = "visible";
        profileDiv.style.transform = "translateY(0px)";
        body.classList.add('blurred-body');
    }
}

document.addEventListener('click', function(event) {
    const profileDiv = document.getElementById('profile-div');
    const dashprofileicon = document.querySelector('.dash-profileicon');
    const body = document.body;
    if (!profileDiv.contains(event.target) && event.target !== dashprofileicon) {
        profileDiv.style.opacity = "0";
        profileDiv.style.visibility = "hidden";
        profileDiv.style.transform = "translateY(500px)";
        body.classList.remove('blurred-body');
    }
});










function openFileDialog() {
    document.getElementById('file-input').click();
}

function loadImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imageContainer = document.getElementById('profile-pic');
        const profileicon = document.getElementById('dash-profileicon');
        imageContainer.innerHTML = '<img src="' + e.target.result + '" alt="Uploaded Image" class="clear-blur">';
        profileicon.src=e.target.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}











/*----------------------------------------LOGIN PAGE-----------------------------------------------*/










function loginsendOTP() {
    const loginsendotpbtn = document.getElementById('login-send-otp-btn');
    const logininputcontact = document.getElementById('login-input-contact');
    const logininputotp = document.getElementById('login-input-otp');
    const loginresendotp = document.getElementById('login-resend-otp');
    const loginbtn = document.getElementById('login-btn');

    loginsendotpbtn.disabled = true;
    logininputcontact.disabled = true;
    //loginsendotpbtn.style.backgroundColor = 'lightgrey';
    //logininputcontact.style.backgroundColor = 'lightgrey';
    loginsendotpbtn.style.cursor = 'not-allowed';
    logininputcontact.style.cursor = 'not-allowed';
    logininputotp.style.opacity = '1';
    logininputotp.style.visibility = 'visible';
    logininputotp.style.marginTop = '4vh';
    loginresendotp.style.opacity = '1';
    loginresendotp.style.visibility = 'visible';
    loginresendotp.style.marginTop = '3vh';
    loginbtn.style.marginTop = '0vh';


    function startTimer() {
        const h6Element = document.querySelector('.login-resend-otp');
        const timerSpan = document.getElementById('timer');
        let timeLeft = 30;

        // Disable the h6 element
        h6Element.classList.add('disable');
        h6Element.style.pointerEvents = 'none';

        // Start the countdown
        let countdown = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(countdown);

                // Re-enable the h6 element when the timer reaches 00:00
                h6Element.classList.remove('disable');
                h6Element.style.pointerEvents = 'auto';
                timerSpan.textContent = " 00:00";
            } else {
                timerSpan.textContent = ` 00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
                timeLeft -= 1;
            }
        }, 1000);
    }
   startTimer();
}















/*----------------------------------------SIGNUP PAGE-----------------------------------------------*/











function signupsendOTP() {
    const signupsendotpbtn = document.getElementById('signup-send-otp-btn');
    const signupinputcontact = document.getElementById('signup-input-contact');
    const signupinputotp = document.getElementById('signup-input-otp');
    const signupresendotp = document.getElementById('signup-resend-otp');
    const signupbtn = document.getElementById('signup-btn');
    //signupsendotpbtn.disabled = true;
    //signupinputcontact.disabled = true;
    //signupsendotpbtn.style.backgroundColor = 'lightgrey';
    //signupinputcontact.style.backgroundColor = 'lightgrey';
    //signupsendotpbtn.style.cursor = 'not-allowed';
    //signupinputcontact.style.cursor = 'not-allowed';
    signupinputotp.style.opacity = '1';
    signupinputotp.style.visibility = 'visible';
    signupinputotp.style.marginTop = '4vh';
    signupresendotp.style.opacity = '1';
    signupresendotp.style.visibility = 'visible';
    signupresendotp.style.marginTop = '3vh';
    signupbtn.style.marginTop = '0vh';

    document.getElementById('signup-send-otp-btn').addEventListener('click', function() {
        const form = document.getElementById('signup-form');
        const formData = new FormData(form);

        fetch('/register', {
            method: 'POST',
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            // Handle the response data or update the UI accordingly
            console.log('Response:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });



    function startTimer() {
        const h6Element = document.querySelector('.signup-resend-otp');
        const timerSpan = document.getElementById('timer');
        let timeLeft = 30;

        // Disable the h6 element
        h6Element.classList.add('disabled');
        h6Element.style.pointerEvents = 'none';

        // Start the countdown
        let countdown = setInterval(function() {
            if (timeLeft <= 0) {
                clearInterval(countdown);

                // Re-enable the h6 element when the timer reaches 00:00
                h6Element.classList.remove('disabled');
                h6Element.style.pointerEvents = 'auto';
                timerSpan.textContent = " 00:00";
            } else {
                timerSpan.textContent = ` 00:${timeLeft < 10 ? '0' : ''}${timeLeft}`;
                timeLeft -= 1;
            }
        }, 1000);
    }
   startTimer();
}