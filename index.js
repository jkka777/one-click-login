// Load the Facebook SDK asynchronously
window.fbAsyncInit = function () {
    FB.init({
        appId: '198579683010383',
        cookie: true,
        xfbml: true,
        version: 'v17.0'
    });
};

(function (doc, scr, id) {
    let js, fjs = doc.getElementsByTagName(scr)[0];
    if (doc.getElementById(id)) return;
    js = doc.createElement(scr); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Gmail Login Button Click Event
document.getElementById('gmailLogin').addEventListener('click', function () {
    // Open a new window to the Gmail authentication URL
    // After successful authentication, move to the next page
    const gmailAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
        'client_id=113981145395-h9hhgokpqmumieih7g63pbc74a41pahc.apps.googleusercontent.com' +
        '&redirect_uri=https://one-click-login.vercel.app/main.html' +
        '&response_type=token' +
        '&scope=email%20profile';
    window.open(gmailAuthUrl, '_blank');
});

// Facebook Login Button Click Event
document.getElementById('facebookLogin').addEventListener('click', function () {
    FB.login(function (response) {
        if (response.authResponse) {
            // User authenticated and granted permissions
            // Move to the next page
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });
});
