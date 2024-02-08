export const loginUrl = 'https://login.microsoftonline.com/';
export const localTenantId = '77184292-5830-433b-9731-60d4cd6fe68a';

export type ConfigEntry = {
  clientId: string;
  redirectUri: string;
  scopes: string[];
//   apiUrl: string;
  authority: string;
};

export const environment: Record<string, ConfigEntry> = {
  'localhost:3000': {
    clientId: '2fc15079-67d1-44b8-82da-c34bb39b0586',
    redirectUri: 'http://localhost:3000/',
    scopes: ['User.Read', 'Mail.Read', 'Calendars.Read', 'Files.Read', 'Sites.Read.All'],
    // apiUrl: 'https://localhost:44381/',
    authority: `${loginUrl}${localTenantId}`,
  },
  'webbappmsal1.azurewebsites.net': {
    clientId: '2fc15079-67d1-44b8-82da-c34bb39b0586',
    redirectUri: 'https://webbappmsal1.azurewebsites.net/',
    scopes: ['User.Read', 'Mail.Read', 'Calendars.Read', 'Files.Read', 'Sites.Read.All'],
    // apiUrl: 'https://localhost:44381/',
    authority: `${loginUrl}${localTenantId}`,
  },
};
