exports.config = {
  bundles: [{ components: ['stylebook-site'] }],
  collections: [{ name: '@stencil/router' }],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**',
};
