# Fancy Bear Eateries

This is an interactive menu created for a fictional restaurant.  This project was made entirely in vanilla JavaScript without the help of any libraries.  [Browserify](https://github.com/substack/node-browserify#usage) and [Babel](https://github.com/babel/babel) were used to convert the ES6 to ES5 and then bundle all the modules together.

# Running locally

To run this locally, download the dependencies using npm.  Then compile the JavaScript and SCSS.  Lastly view it in your browser!

```bash
npm install
npm run build
```
# Local development

If you want to hack on this, there are a few npm scripts that can be used to watch for changes.

```bash
# Build and watch the JavaScript
npm run watch:js

# Build and watch the SCSS
npm run watch:scss
```
