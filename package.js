Package.describe({
  name: 'pedromendonka:rssgen',
  version: '0.0.1',
  summary: 'A simple RSS generator from a mongo collection',
  git: 'https://github.com/pedromendonka/RSSGen',
  documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.2.1');
    api.use('ecmascript');
    api.addFiles('rssGen.js', 'server');
    api.export('RSSGenInfo', 'server');
    api.export('RSSGen', 'server');
});
