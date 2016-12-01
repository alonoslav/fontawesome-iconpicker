Package.describe({
  name: 'alonoslav:fontawesome-iconpicker',
  version: '0.0.2',
  summary: 'Fontawesome bootstrap icon picker',
  git: 'https://github.com/alonoslav/fontawesome-iconpicker',
  documentation: 'README.md',
});

// eslint-disable-next-line func-names, prefer-arrow-callback
Package.onUse(function (api) {
  api.versionsFrom('1.3');

  api.use([
    'ecmascript',
    'jquery',
    'fortawesome:fontawesome@4.7.0',
  ], 'client');

  api.addFiles(['lib/fontawesome-iconpicker.css'], 'client');

  api.mainModule('lib/fontawesome-iconpicker.js', 'client');
});
