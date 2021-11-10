const path = require('path');

const apimock = require('@ng-apimock/core');
const {createProxyMiddleware} = require('http-proxy-middleware');
const devInterface = require('@ng-apimock/dev-interface');
const express = require('express');

const app = express();
app.set('port', 9999);

const mocksDirectory = path.join(process.cwd(), 'mocks');

apimock.processor.process({src: mocksDirectory, watch: true});

app.use(apimock.middleware);

app.use('/', express.static(path.join(process.cwd(), 'dist')));
app.use('/dev-interface', express.static(devInterface));

app.use('/orgs/ng-apimock', createProxyMiddleware({
                                                      target: 'https://api.github.com',
                                                      changeOrigin: true,
                                                      timeout: 5000
                                                  }));

app.use('/ng-apimock', createProxyMiddleware({
                                                 target: 'https://raw.githubusercontent.com',
                                                 changeOrigin: true
                                             }));

app.listen(app.get('port'), () => {
  console.log('@ng-apimock/core running on port', app.get('port'));
  console.log('@ng-apimock/test-application is accessible under /');
  console.log('@ng-apimock/dev-interface is available under /dev-interface');
});

