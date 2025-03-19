### user manual

- npm install

- npm start

- npm install react-bootstrap bootstrap

### if react is not operation...

- rm -rf node_modules package-lock.json

- npm install

- npm run build

- such like below log, if npm start... activate bleow

  - export NODE_OPTIONS=--openssl-legacy-provider

```
Starting the development server...

/Users/paul_jeoung/project/react-web/portpolio-for-qa/node_modules/react-scripts/scripts/start.js:19
  throw err;
  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:79:19)
    at Object.createHash (node:crypto:139:10)
    at module.exports (/Users/paul_jeoung/project/react-web/portpolio-for-qa/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (/Users/paul_jeoung/project/react-web/portpolio-for-qa/node_modules/webpack/lib/NormalModule.js:417:16)
    at /Users/paul_jeoung/project/react-web/portpolio-for-qa/node_modules/webpack/lib/NormalModule.js:452:10
    at /Users/paul_jeoung/project/react-web/portpolio-for-qa/node_modules/webpack/lib/NormalModule.js:323:13
    at /Users/paul_jeoung/project/react-web/portpolio-for-qa/node_modules/loader-runner/lib/LoaderRunner.js:367:11
    at /Users/paul_jeoung/project/react-web/portpolio-for-qa/node_modules/loader-runner/lib/LoaderRunner.js:233:18
    at context.callback (/Users/paul_jeoung/project/react-web/portpolio-for-qa/node_modules/loader-runner/lib/LoaderRunner.js:111:13)
    at /Users/paul_jeoung/project/react-web/portpolio-for-qa/node_modules/babel-loader/lib/index.js:59:103 {
  opensslErrorStack: [
    'error:03000086:digital envelope routines::initialization error',
    'error:0308010C:digital envelope routines::unsupported'
  ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v23.5.0

```

### gitpage usable

- package.json need to modified

```
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "homepage": "https://pauljeoung.github.io/portpolio-for-qa/",
```

- npm install gh-pages --save-dev

- npm install @babel/core@latest @babel/preset-env@latest @babel/preset-react@latest --save-dev

- npm run build

- npm run deploy

### origin code and reference to

- https://uideck.com/templates/resume-react

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).