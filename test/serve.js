const { createProxyMiddleware } = require('http-proxy-middleware');

const apimock = require('@ng-apimock/core');
const connect = require('connect');
const devInterface = require('@ng-apimock/dev-interface');
const path = require('path');
const serveStatic = require('serve-static');

const app = connect();

apimock.processor.process({ src: path.join(process.cwd(), 'mocks') });

app.use(apimock.middleware);

app.use('/', serveStatic(path.join(process.cwd(),'dist')));
app.use('/dev-interface', serveStatic(devInterface));

app.use('/orgs/ng-apimock', createProxyMiddleware({
  target: 'https://api.github.com',
  changeOrigin: true,
  timeout: 5000
}));

app.use('/ng-apimock', createProxyMiddleware({
  target: 'https://raw.githubusercontent.com',
  changeOrigin: true
}));

app.listen(9999);
console.log('@ng-apimock/test-application is running on port 9999');
