const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
      "/api",
      createProxyMiddleware({
        target: "https://cinesatchel-deneme-api.vercel.app/",
        changeOrigin: true,
      })
    );
  };
