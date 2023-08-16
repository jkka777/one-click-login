
function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);

    if (response.status === 'connected') {
        // Logged into your app and Facebook.
        testAPI();
    } else {
        // The person is not logged into your app or we are unable to tell.
        document.getElementById('status').innerHTML = 'Please log into this app.';
    }
}

function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = () => {
    FB.init({
        appId: '198579683010383',
        cookie: true,
        xfbml: true,
        version: 'v17.0'
    });

    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
        console.log(response);
    });
};

(function (doc, scr, id) {
    let js, fjs = doc.getElementsByTagName(scr)[0];
    if (doc.getElementById(id)) return;
    js = doc.createElement(scr); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        localStorage.setItem("name", JSON.stringify(response.name));
        console.log(response);
        window.open('https://one-click-login.vercel.app/main.html')
    });
}

// Facebook Login Button Click Event
document.getElementById('facebookLogin').addEventListener('click', () => {

    checkLoginState();

});


// Gmail Login Button Click Event
document.getElementById('gmailLogin').addEventListener('click', () => {

    const gmailAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
        'client_id=113981145395-h9hhgokpqmumieih7g63pbc74a41pahc.apps.googleusercontent.com' +
        '&redirect_uri=https://one-click-login.vercel.app/main.html' +
        '&response_type=token' +
        '&scope=email%20profile';
    window.open(gmailAuthUrl, '_blank');
});
