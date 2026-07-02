const devServerConfig = {
  setupMiddlewares: (middlewares, devServer) => {
    devServer.app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      res.setHeader('Access-Control-Expose-Headers', 'Content-Type');

      if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
      }
      next();
    });
    return middlewares;
  }
};

module.exports = devServerConfig;

