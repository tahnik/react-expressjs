# Behold the React + Express + Webpack + Babel Boilerplate
## Server-side rendering and Redux is now included!

This is a boilerplate to use ReactJS ExpressJS and Redux in a project.

- [ReactJS] - The state based framework for your Views
- [Redux] - Redux manages your state
- [Babel] - The compiler to compile your JS files with es6, es7, JSX syntax to regular javascript
- [Webpack] - The module binder which takes all your JS files from different directories and compiles them into a single app.bundle.js (you can change the filename of course) so you can include it in a HTML page
- [ExpressJS] - The node framework to serve your views to the world when they hit the server at example.com or example.com/awesome.html


# Installation

Node Version: v7.2.1

Just clone this repo or download the zip file. `cd` into the directory and run

    npm install

To use webpack you also need to run

    npm install webpack -g

You might need to run this command as `sudo`.

Once you have the webpack installed, cd into the directory where you cloned this repo and run

    webpack

This will create update two files: `server.bundle.js` and `bin/app.bundle.js`.

`server.bundle.js` will be used for serving the application on port 3000 and `app.bundle.js` is the actual react app itself.

Finally run

    npm start

The you will be able to access this app from http://localhost:3000.

# Flow of the app/what is going on
So here is the flow.

First you create all your ReactJS files using whatever syntax you like. These files will stay in the `views` directory. If you are using Redux then you'll be using all the directories but if you don't know Redux you can just remove the `actions`, `containers` and `reducers` directories. You can use plain JSX or ES6 or Experimental ES7 in your JS files.

Once you've done that you fire up a terminal in that directory and run webpack. This has two steps:

- Webpack calls babel to compile all the files in the views directory to standard javascript, because current browsers doesn't understand ES6/ES7/JSX syntax.
- Once the compiling is done webpack takes all the compiled files and binds then into `app.bundle.js` and `server.bundle.js` along with all the dependencies.

So now you have a file in your `bin` directory which is `app.bundle.js`. This is basically your whole React app in one file. And you also have a file `server.bundle.js` which your ExpressJS server.

### Serve your app with server side rendering (and why it is important)

To serve your app with server side rendering, all you need to do is run `npm start`. The way it works is that the ExpressJS server (`server.js`) renders the app on the server and serves it to the public.

I know it's confusing. Hold on!

When the React app is served without server side rendering, a browser will download the `index.html` and load the `app.bundle.js` in real time. When the `app.bundle.js` has finished loading up it will render the page the way you have programmed. This initial render takes longer than usual and can be a nightmare for SEO or search engines. Also, a big reason of using React is how fast it is right?!

With server side rendering, the ExpressJS server will use the React engine to take your `app.bundle.js` and render the necessary parts of your webpage to plain HTML string. So the client/public will receive the same `index.html` with `app.bundle.js` included with it, but this time the rendering is already completed by the server. Your `app.bundle.js` won't modify or change anything in the page unless you have clicked something on the page.

To understand how this server side rendering is done, you need do some research on the following resources:

- [ReactDOMServer]
- [Redux Server Side]
- [React Router Server Side]


[ReactJS]: <https://facebook.github.io/react/>
[Babel]: <https://babeljs.io/>
[Webpack]: <https://webpack.github.io/>
[ExpressJS]: <http://expressjs.com/>
[Redux]: <http://redux.js.org/>
[ReactDOMServer]: <https://facebook.github.io/react/docs/react-dom-server.html>
[Redux Server Side]: <http://redux.js.org/docs/recipes/ServerRendering.html>
[React Router Server Side]: <https://github.com/ReactTraining/react-router/blob/master/docs/guides/ServerRendering.md>
