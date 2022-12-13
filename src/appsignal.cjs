const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  active: true,
  name: 'Your app name',
  pushApiKey: 'API_KEY',
});
