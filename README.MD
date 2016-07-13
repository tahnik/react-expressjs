# Behold the React + Express + Webpack + Babel Boilerplate

This is a boilerplate to use ReactJS ExpressJS and Redux in a project.
Althought Redux is not included, the file structure for Redux is setup so it'll ease your development if you want to use it.

- [ReactJS] - The state based framework for your Views
- [Babel] - The compiler to compile your JS files with es6, es7, JSX syntax to regular javascript
- [Webpack] - The module binder which takes all your JS files from different directories and compiles them into a single app.bundle.js (you can change the filename of course) so you can include it in a HTML page
- [ExpressJS] - The node framework to serve your views to the world when they hit the server at example.com or example.com/awesome.html

#Installation
Just close this repo or download the zip file. cd into the directory and run

    npm install

To use webpack you also need to run

    npm install webpack -g

You might need to run this command as sudo.

#Flow of the app/What is going on
So here is the flow.

First you create all you reactJS files using whatever syntax you like. This files will stay in the views directory. If you are using redux then you'll be using all the directories but if you don't know Redux you can just remove the actions, containers and reducers directory. You can use plain JSX or ES6 or Experimental ES7 in your JS files.

Once you've done that you fire up a terminal in that directory and run webpack. This has two steps:

- Webpack calls babel to compile all the files in the views directory to standard javascript. Because current browsers doesn't understand ES6/ES7/JSX syntax.
- Once the compiling is done webpack takes all the compiled files and binds then into one app.bundle.js file along with all the dependencies.

So now you have a file in your bin which is app.bundle.js. This is basically your whole react app into one file.

Now to server your react app you need an index.html page which I located inside public folder. You public folders holds all the static files like your stylesheets. In this index.html you include the app.bundle.js which was just created by webpack. So now if you click your index.html it will open up your app you created with ReactJS. Cool!

Now your index.html page needs to be SERVED! To server this index.html page along with other static contents like images, stylesheets you need ExpressJS. Express will server your app based on your route. For now I have kept it simple so it just serves some static contents and '/' route.

Any question you can email me at tahnik@live.co.uk


[ReactJS]: <https://facebook.github.io/react/>
[Babel]: <https://babeljs.io/>
[Webpack]: <https://webpack.github.io/>
[ExpressJS]: <http://expressjs.com/>
