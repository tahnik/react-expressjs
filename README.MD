# Behold the ReactJS + ExpressJS Boilerplate

I wrote an [article] about this repo which explains the structure.

This is a boilerplate to use ReactJS, ExpressJS, Redux and React Router v4 in a project.

- [ReactJS] - The state based framework for your Views
- [React Router v4] - For routing to different paths
- [Redux] - Redux manages your state
- [Babel] - The compiler to compile your JS files with es6, es7, JSX syntax to regular javascript
- [Webpack] - The module binder which takes all your JS files from different directories and compiles them into a single app.bundle.js (you can change the filename of course) so you can include it in a HTML page
- [ExpressJS] - The node framework to serve your views to the world when they hit the server at example.com or example.com/awesome.html


# Installation

Node Version: v8.3.0

Just clone this repo or download the zip file. `cd` into the directory and run

    npm install

## Developing App with [Hot Reload]
To develop your own react application, you can take advantage of React Hot Loader and Webpack Dev Server. To develop app with hot reload:

    npm run dev

Now you can access your react application on http://localhost:8080

## Production build and Deploy
To make a production build of your project, run the following commands

    npm run build
  
This will create create two files: `index.js` in `server/public/js` and `server.js` in `server/bin`.

`server.js` will be used for serving the application on port 3000 and `index.js` is the actual react app itself.

Finally run

    npm start

The you will be able to access this app from http://localhost:3000.

To get a distributable tarball of your application, run this command

    npm pack

Remember that you have to run `npm run build` before doing this. This will create a tar.gz file in your root folder. The contents in this file is deployable. All you need to do is copy the contents inside package folder inside this tar.gz file to your server and run the app with something like [pm2].


[ReactJS]: <https://facebook.github.io/react/>
[Babel]: <https://babeljs.io/>
[Webpack]: <https://webpack.github.io/>
[React Router v4]: <https://reacttraining.com/react-router/>
[Hot Reload]: <https://stackoverflow.com/questions/41428954>
[ExpressJS]: <http://expressjs.com/>
[Redux]: <http://redux.js.org/>
[pm2]: <https://github.com/Unitech/pm2>
[article]: <https://medium.com/@tahnik.mstsn/reactjs-expressjs-with-hot-reloading-and-server-side-rendering-901a01ea2711>