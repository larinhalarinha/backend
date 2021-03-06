'use strict'

const PostController = require('../app/Controllers/Http/PostController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/registro', 'AuthController.register')
Route.post('/authentication', 'AuthController.authenticate')

Route.resource('posts', "PostController")
Route.resource('comentarios', "ComentarioController")