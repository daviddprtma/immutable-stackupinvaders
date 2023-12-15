window.passport = new window.immutable.passport.Passport({
    baseConfig: new window.immutable.config.ImmutableConfiguration({
      environment: window.immutable.config.Environment.SANDBOX,
    }),
    clientId: 'Q7oIopFm8gyxzLXJvNTdmoLq7gwlKbMV',
    redirectUri: 'https://leech-pure-gorilla.ngrok-free.app',
    logoutRedirectUri: 'https://leech-pure-gorilla.ngrok-free.app/logout.html',
    audience: 'platform_api',
    scope: 'openid offline_access email transact'
  });

