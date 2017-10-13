exports.config = {
  bundles: [
    { components: [] },
    { components: [] }
  ],
  collections: [{ name: '@stencil/router' }]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
