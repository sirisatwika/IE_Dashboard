import { MsalAuthProvider, LoginType } from 'react-aad-msal';

const config = {
    auth: {
        authority: "https://login.microsoftonline.com/df7b3572-e484-4fcf-a072-6edd5d73f11f",
        clientId: "53376664-a8de-4e8a-805e-0cd1c5390d4d",
        // redirectUri: 'https://practiceportal-dev-dps-dashboard.azurewebsites.net/home',
        redirectUri: 'http://localhost:3000/dashboard',
        validateAuthority: true,
        navigateToLoginRequestUrl: true
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    },  
};

// Authentication Parameters
export const authenticationParameters = {
    scopes: ["user.read"]
}


// Options

const options = {
    loginType: LoginType.Redirect,
    //tokenRefreshUri: window.location.origin + '/auth.html'
}

export const authProvider = new MsalAuthProvider(config, authenticationParameters, options)