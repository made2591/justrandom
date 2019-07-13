# Just Random
[![Build Status](https://travis-ci.org/made2591/justrandom.svg?branch=master)](https://travis-ci.org/made2591/justrandom)

A simple Just Random tool created with only Vue.js! The choices added in this app are stored in `localStorage`, so it doesnt matter whether if the webpage is refreshed or even closed, the data will still gonna be there. Try it live on https://random.madeddu.xyz

### How to Run this App natively
```
npm install
npm run serve
```

### How to Run this App with Docker
```
docker build -t justrandom:0.1.0 .
docker run -d -p 8080:80 justrandom:0.1.0
```

### Compiles and Minifies for Production
```
npm run build
```

### Lints and Fixes Files
```
npm run lint
```

## Built with

* [Vue.js](https://vuejs.org/) - JavaScript Framework
* [Materialize CSS](https://materializecss.com/) - CSS Framework

## Author

* **Matteo Madeddu** - [made2591](https://github.com/made2591)
