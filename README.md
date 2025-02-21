
## create a package.json file
```
npm init
```

## edit package.json and add a “start” script as in:
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node src/app.js"
},
```


## install nodemon as a dev (-D) dependency
```
npm install -D nodemon
```

## edit package.json and add a “dev” script as in:
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node src/app.js",
   "dev": "nodemon src/app.js"
},

## install axios as a prod dependency
url: https://www.npmjs.com/package/axios

```
npm i axios
```
