const { createProxyMiddleware } = require('http-proxy-middleware');

const apimock = require('@ng-apimock/core');
const connect = require('connect');
const devInterface = require('@ng-apimock/dev-interface');
const path = require('path');
const serveStatic = require('serve-static');
const app = connect();
const mocksDirectory = path.join(process.cwd(), 'mocks');

apimock.processor.process({ src: mocksDirectory });

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
console.log('Server is running on port 9999');
console.log('@ng-apimock/test-application is accessible under http://localhost:9999/');
console.log('@ng-apimock/dev-interface is accessible under http://localhost:9999/dev-interface');

