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

### For Netilfy Build 

1. postcss-safe-parser 제거

  - npm uninstall postcss-safe-parser

2. postcss.config.js 파일 추가

3. netlify.toml 파일 추가

4. 모듈, package 제거 후 재 설치

  - rm -rf node_modules package-lock.json

  - npm install --legacy-peer-deps

  - npm run build


- postcss 다운그레이드

  - rm -rf node_modules package-lock.json

  - npm install postcss@7 autoprefixer@9

  - npm install --legacy-peer-deps

  - npm install @babel/core@^7.16.0 @babel/preset-react@^7.16.0

  - tailwindcss 버전확인 (@tailwindcss/postcss7-compat)

  - npm install 재설치

### origin code and reference to

- https://uideck.com/templates/resume-react

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).