Package.describe({
  name: 'dougthwaites:jquery-match-height',
  version: '0.0.3',
  summary: 'matchHeight makes the height of all selected elements exactly equal.',
  git: 'https://github.com/DougThwaites/jquery-match-height',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.3');

  api.use([
    'aldeed:template-extension@3.4.3',
    'templating',
  ], ['client']);

  api.addFiles([
    'jquery.matchHeight.js',
    '.meteor/lib/init.js',
  ], ['client']);

});
