import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProSidebarProvider } from 'react-pro-sidebar';
// import { PublicClientApplication } from '@azure/msal-browser';
// import { MsalProvider } from '@azure/msal-react';
// import { msalConfig } from './authConfig';
// import { AzureAD } from 'react-aad-msal';
// import { authProvider } from './AuthProvider';
// import { AuthenticationState } from 'react-aad-msal';

// const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <App />
    </ProSidebarProvider>
    {/* <AzureAD provider={authProvider} forceLogin={true}>
      {
        ({ login, authenticationState, }) => {
          switch (authenticationState) {
            case AuthenticationState.Unauthenticated:
              return (
                <div>
                    <span>Welcome to Intelligent Edge</span>
                    <button onClick={login}>Login</button>
                </div>
              );
            case AuthenticationState.Authenticated:
              return (
                  <ProSidebarProvider>
                   <App />
                  </ProSidebarProvider>
              );
            case AuthenticationState.InProgress:
              return (<p>Authenticating...</p>);
            default:
          }
        }
      }
    </AzureAD> */}
  </React.StrictMode>
);
reportWebVitals();
