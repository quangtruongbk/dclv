/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/homepage' },


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/

  //Quang Trường 3/12/2018 add
  'GET  /queuerequest/queuedemo1': { controller: 'QueuerequestController', action: 'list' },
  'GET /queuerequest/queuedemo1/addrequest': { view: 'pages/add' },
  'POST  /queuerequest/create': { controller: 'QueuerequestController', action: 'create' },
  //Quang Trường 3/12/2018 end add
  //Quang Truong 7/12/2018 add
  'POST  /queuerequest/delete/:id': { controller: 'QueuerequestController', action: 'delete' },
  //Quang Truong 7/12/2018 end add

  //Quang Truong 8/12/2018 add
  'GET  /branch': { controller: 'BranchController', action: 'list' },
  //Quang Truong 8/12/2018 end add

  //Quang Truong 8/12/2018 add
  'GET  /branch/:id': { controller: 'QueueController', action: 'list' },
  'GET  /branch/:branch_id/:id': { controller: 'QueuerequestController', action: 'list' },
  'GET  /branch/json': { controller: 'BranchController', action: 'listJson' },
  'GET  /branch/:id/json': { controller: 'QueueController', action: 'listJson' },
  'GET  /branch/:branch_id/:id/json': { controller: 'QueuerequestController', action: 'listJson' },
  //Quang Truong 8/12/2018 end add

  'GET  /branch/:id': { controller: 'QueueController', action: 'list' },

//Quang Truong 15/12/2018
  'POST /account/signup' : {controller:'AccountController',action:'signup'}
};
