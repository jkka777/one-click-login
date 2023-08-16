
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

// Gmail Login Button Click Event
document.getElementById('gmailLogin').addEventListener('click', () => {

    const gmailAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth?' +
        'client_id=113981145395-h9hhgokpqmumieih7g63pbc74a41pahc.apps.googleusercontent.com' +
        '&redirect_uri=https://one-click-login.vercel.app/main.html' +
        '&response_type=token' +
        '&scope=email%20profile';
    window.open(gmailAuthUrl, '_blank');
});

// Facebook Login Button Click Event
document.getElementById('facebookLogin').addEventListener('click', () => {
    FB.login(function (response) {
        if (response.authResponse) {

            const accessToken = response.authResponse.accessToken;

            //getting profile info using access token

            FB.api('/me', { fields: 'id,name,email' }, function (profileResponse) {
                if (profileResponse && !profileResponse.error) {
                    const userId = profileResponse.id;
                    const userName = profileResponse.name;
                    const userEmail = profileResponse.email;

                    // window.open('https://one-click-login.vercel.app/main.html', '_blank');
                }
            });

        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    });

});
