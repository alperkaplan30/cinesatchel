const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      "/api",
      createProxyMiddleware({
        target: "cinesatchel-deneme-api.vercel.app",
        changeOrigin: true,
      })
    );
  };
