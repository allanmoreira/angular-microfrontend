const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  name: 'vendas',

  remotes: {
    "produtos": "http://localhost:4201/remoteEntry.js",
    "grafico": "http://localhost:4202/remoteEntry.js",
  },

  exposes: {
    './Component': './src/app/app.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
