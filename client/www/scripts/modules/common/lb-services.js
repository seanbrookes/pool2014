'use strict';

var urlBase = "/api";

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/users/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         *
         * Object properties:
         *
         * - `credentials` – `{object}` - 
         *
         * - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "login": {
          url: urlBase + "/users/login",
          method: "POST",
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.accessTokenId = accessToken.id;
              return response.resource;
            }
          }

        },
        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         *
         * Object properties:
         *
         * - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "logout": {
          url: urlBase + "/users/logout",
          method: "POST",
          interceptor: {
            response: function(response) {
              LoopBackAuth.accessTokenId = null;
              return response.resource;
            }
          }

        },
        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `uid` – `{string}` - 
         *
         * - `token` – `{string}` - 
         *
         * - `redirect` – `{string}` - 
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/users/confirm",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/users/reset",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#email
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "email": {
          url: urlBase + "/users/Emails",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#accessToken
         * @methodOf lbServices.User
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "accessToken": {
          url: urlBase + "/users/AccessTokens",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/users",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/users",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/users",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/users/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/users/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/users",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/users/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/users/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/users/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/users/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/users/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/users/:id",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Fetches accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - 
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__get__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates accessTokens
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes accessTokens
         *
         * @param {Object=} parameters Request parameters.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/users/:id/accessTokens",
          method: "DELETE",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.AccessToken
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AccessToken` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AccessToken",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/accessTokens/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#create
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/accessTokens",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateOrCreate
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/accessTokens",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#upsert
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/accessTokens",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#exists
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/accessTokens/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/accessTokens/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#find
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/accessTokens",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findOne
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/accessTokens/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#destroyById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/accessTokens/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#deleteById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/accessTokens/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#removeById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/accessTokens/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#count
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/accessTokens/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.AccessToken#prototype$updateAttributes
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/accessTokens/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Application
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Application` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Application",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/applications/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Application#create
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/applications",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#updateOrCreate
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/applications",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#upsert
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/applications",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#exists
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/applications/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#findById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/applications/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#find
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/applications",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#findOne
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/applications/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#destroyById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/applications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#deleteById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/applications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#removeById
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/applications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#count
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/applications/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Application#prototype$updateAttributes
         * @methodOf lbServices.Application
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/applications/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Push
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Push` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Push",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/push/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Push#notifyByQuery
         * @methodOf lbServices.Push
         *
         * @description
         *
         * Send a push notification by installation query
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         *
         * Object properties:
         *
         * - `deviceQuery` – `{object=}` - Installation query
         *
         * - `notification` – `{object=}` - Notification
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "notifyByQuery": {
          url: urlBase + "/push",
          method: "POST",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Installation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Installation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Installation",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/installations/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Installation#findByApp
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find installations by application id
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `deviceType` – `{string=}` - Device type
         *
         * - `appId` – `{string=}` - Application id
         *
         * - `appVersion` – `{string=}` - Application version
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findByApp": {
          url: urlBase + "/installations/byApp",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#findByUser
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find installations by user id
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `deviceType` – `{string=}` - Device type
         *
         * - `userId` – `{string=}` - User id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findByUser": {
          url: urlBase + "/installations/byUser",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#findBySubscriptions
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find installations by subscriptions
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `deviceType` – `{string=}` - Device type
         *
         * - `subscriptions` – `{string=}` - Subscriptions
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findBySubscriptions": {
          url: urlBase + "/installations/bySubscriptions",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#create
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/installations",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#updateOrCreate
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/installations",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#upsert
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/installations",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#exists
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/installations/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#findById
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/installations/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#find
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/installations",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#findOne
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/installations/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#destroyById
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/installations/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#deleteById
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/installations/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#removeById
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/installations/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#count
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/installations/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Installation#prototype$updateAttributes
         * @methodOf lbServices.Installation
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/installations/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Notification
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Notification` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Notification",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/notifications/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Notification#create
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/notifications",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#updateOrCreate
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/notifications",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#upsert
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/notifications",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#exists
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/notifications/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#findById
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/notifications/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#find
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/notifications",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#findOne
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/notifications/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#destroyById
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/notifications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#deleteById
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/notifications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#removeById
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/notifications/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#count
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/notifications/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Notification#prototype$updateAttributes
         * @methodOf lbServices.Notification
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/notifications/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Batterstats
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Batterstats` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Batterstats",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/batterstats/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#create
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/batterstats",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#updateOrCreate
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/batterstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#upsert
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/batterstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#exists
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/batterstats/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#findById
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/batterstats/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#find
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/batterstats",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#findOne
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/batterstats/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#destroyById
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/batterstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#deleteById
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/batterstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#removeById
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/batterstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#count
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/batterstats/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Batterstats#prototype$updateAttributes
         * @methodOf lbServices.Batterstats
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/batterstats/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Chatmessage
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Chatmessage` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Chatmessage",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/chatmessages/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#create
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/chatmessages",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#updateOrCreate
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/chatmessages",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#upsert
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/chatmessages",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#exists
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/chatmessages/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#findById
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/chatmessages/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#find
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/chatmessages",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#findOne
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/chatmessages/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#destroyById
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/chatmessages/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#deleteById
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/chatmessages/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#removeById
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/chatmessages/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#count
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/chatmessages/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Chatmessage#prototype$updateAttributes
         * @methodOf lbServices.Chatmessage
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/chatmessages/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Draft
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Draft` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Draft",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/drafts/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Draft#create
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/drafts",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draft#updateOrCreate
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/drafts",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draft#upsert
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/drafts",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draft#exists
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/drafts/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draft#findById
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/drafts/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draft#find
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/drafts",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Draft#findOne
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/drafts/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draft#destroyById
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/drafts/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draft#deleteById
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/drafts/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draft#removeById
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/drafts/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draft#count
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/drafts/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draft#prototype$updateAttributes
         * @methodOf lbServices.Draft
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/drafts/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Draftpick
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Draftpick` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Draftpick",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/draftpicks/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#create
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/draftpicks",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#updateOrCreate
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/draftpicks",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#upsert
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/draftpicks",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#exists
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/draftpicks/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#findById
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/draftpicks/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#find
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/draftpicks",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#findOne
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/draftpicks/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#destroyById
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/draftpicks/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#deleteById
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/draftpicks/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#removeById
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/draftpicks/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#count
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/draftpicks/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Draftpick#prototype$updateAttributes
         * @methodOf lbServices.Draftpick
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/draftpicks/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Pitcherstats
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Pitcherstats` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Pitcherstats",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/pitcherstats/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#create
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/pitcherstats",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#updateOrCreate
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/pitcherstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#upsert
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/pitcherstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#exists
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/pitcherstats/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#findById
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/pitcherstats/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#find
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/pitcherstats",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#findOne
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/pitcherstats/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#destroyById
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/pitcherstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#deleteById
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/pitcherstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#removeById
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/pitcherstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#count
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/pitcherstats/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Pitcherstats#prototype$updateAttributes
         * @methodOf lbServices.Pitcherstats
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/pitcherstats/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Player
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Player` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Player",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/players/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Player#create
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/players",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Player#updateOrCreate
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/players",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Player#upsert
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/players",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Player#exists
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/players/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Player#findById
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/players/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Player#find
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/players",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Player#findOne
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/players/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Player#destroyById
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/players/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Player#deleteById
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/players/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Player#removeById
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/players/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Player#count
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/players/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Player#prototype$updateAttributes
         * @methodOf lbServices.Player
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/players/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Roster
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Roster` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Roster",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/rosters/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Roster#create
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/rosters",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Roster#updateOrCreate
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/rosters",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Roster#upsert
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/rosters",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Roster#exists
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/rosters/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Roster#findById
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/rosters/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Roster#find
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/rosters",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Roster#findOne
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/rosters/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Roster#destroyById
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/rosters/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Roster#deleteById
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/rosters/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Roster#removeById
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/rosters/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Roster#count
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/rosters/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Roster#prototype$updateAttributes
         * @methodOf lbServices.Roster
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/rosters/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Totals
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Totals` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Totals",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/totals/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Totals#create
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/totals",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Totals#updateOrCreate
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/totals",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Totals#upsert
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/totals",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Totals#exists
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/totals/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Totals#findById
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/totals/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Totals#find
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/totals",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Totals#findOne
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/totals/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Totals#destroyById
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/totals/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Totals#deleteById
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/totals/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Totals#removeById
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/totals/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Totals#count
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/totals/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Totals#prototype$updateAttributes
         * @methodOf lbServices.Totals
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/totals/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Rawbatterstats
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rawbatterstats` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rawbatterstats",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/rawbatterstats/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#create
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/rawbatterstats",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#updateOrCreate
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/rawbatterstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#upsert
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/rawbatterstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#exists
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/rawbatterstats/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#findById
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/rawbatterstats/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#find
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/rawbatterstats",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#findOne
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/rawbatterstats/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#destroyById
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/rawbatterstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#deleteById
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/rawbatterstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#removeById
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/rawbatterstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#count
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/rawbatterstats/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterstats#prototype$updateAttributes
         * @methodOf lbServices.Rawbatterstats
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/rawbatterstats/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Rawpitcherstats
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rawpitcherstats` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rawpitcherstats",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/rawpitcherstats/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#create
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/rawpitcherstats",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#updateOrCreate
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/rawpitcherstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#upsert
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/rawpitcherstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#exists
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/rawpitcherstats/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#findById
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/rawpitcherstats/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#find
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/rawpitcherstats",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#findOne
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/rawpitcherstats/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#destroyById
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/rawpitcherstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#deleteById
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/rawpitcherstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#removeById
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/rawpitcherstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#count
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/rawpitcherstats/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#stats
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `stats` – `{object=}` - 
         */
        "stats": {
          url: urlBase + "/rawpitcherstats/stats",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherstats#prototype$updateAttributes
         * @methodOf lbServices.Rawpitcherstats
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/rawpitcherstats/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Rawpitcherid
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rawpitcherid` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rawpitcherid",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/rawpitcherids/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#create
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/rawpitcherids",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#updateOrCreate
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/rawpitcherids",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#upsert
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/rawpitcherids",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#exists
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/rawpitcherids/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#findById
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/rawpitcherids/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#find
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/rawpitcherids",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#findOne
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/rawpitcherids/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#destroyById
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/rawpitcherids/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#deleteById
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/rawpitcherids/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#removeById
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/rawpitcherids/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#count
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/rawpitcherids/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawpitcherid#prototype$updateAttributes
         * @methodOf lbServices.Rawpitcherid
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/rawpitcherids/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Rawbatterid
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rawbatterid` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rawbatterid",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/rawbatterids/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#create
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/rawbatterids",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#updateOrCreate
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/rawbatterids",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#upsert
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/rawbatterids",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#exists
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/rawbatterids/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#findById
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/rawbatterids/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#find
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/rawbatterids",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#findOne
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/rawbatterids/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#destroyById
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/rawbatterids/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#deleteById
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/rawbatterids/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#removeById
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/rawbatterids/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#count
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/rawbatterids/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rawbatterid#prototype$updateAttributes
         * @methodOf lbServices.Rawbatterid
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/rawbatterids/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Statupdate
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Statupdate` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Statupdate",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/statupdates/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#create
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/statupdates",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#updateOrCreate
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/statupdates",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#upsert
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/statupdates",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#exists
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/statupdates/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#findById
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/statupdates/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#find
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/statupdates",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#findOne
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/statupdates/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#destroyById
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/statupdates/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#deleteById
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/statupdates/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#removeById
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/statupdates/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#count
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/statupdates/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statupdate#prototype$updateAttributes
         * @methodOf lbServices.Statupdate
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/statupdates/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Dailypitcherstat
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Dailypitcherstat` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Dailypitcherstat",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/dailypitcherstats/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#create
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/dailypitcherstats",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#updateOrCreate
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/dailypitcherstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#upsert
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/dailypitcherstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#exists
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/dailypitcherstats/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#findById
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/dailypitcherstats/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#find
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/dailypitcherstats",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#findOne
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/dailypitcherstats/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#destroyById
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/dailypitcherstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#deleteById
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/dailypitcherstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#removeById
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/dailypitcherstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#count
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/dailypitcherstats/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#raw
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `stats` – `{array=}` - 
         */
        "raw": {
          url: urlBase + "/dailypitcherstats/raw",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailypitcherstat#prototype$updateAttributes
         * @methodOf lbServices.Dailypitcherstat
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/dailypitcherstats/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Dailybatterstat
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Dailybatterstat` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Dailybatterstat",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/dailybatterstats/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#create
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/dailybatterstats",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#updateOrCreate
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/dailybatterstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#upsert
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/dailybatterstats",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#exists
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/dailybatterstats/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#findById
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/dailybatterstats/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#find
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/dailybatterstats",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#findOne
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/dailybatterstats/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#destroyById
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/dailybatterstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#deleteById
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/dailybatterstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#removeById
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/dailybatterstats/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#count
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/dailybatterstats/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#raw
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         * This method does not accept any parameters. Supply an empty object.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `stats` – `{array=}` - 
         */
        "raw": {
          url: urlBase + "/dailybatterstats/raw",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Dailybatterstat#prototype$updateAttributes
         * @methodOf lbServices.Dailybatterstat
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/dailybatterstats/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Rosterbatter
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rosterbatter` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rosterbatter",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/rosterbatters/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#create
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/rosterbatters",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#updateOrCreate
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/rosterbatters",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#upsert
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/rosterbatters",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#exists
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/rosterbatters/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#findById
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/rosterbatters/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#find
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/rosterbatters",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#findOne
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/rosterbatters/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#destroyById
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/rosterbatters/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#deleteById
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/rosterbatters/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#removeById
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/rosterbatters/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#count
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/rosterbatters/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterbatter#prototype$updateAttributes
         * @methodOf lbServices.Rosterbatter
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/rosterbatters/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Rosterpitcher
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rosterpitcher` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rosterpitcher",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/rosterpitchers/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#create
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/rosterpitchers",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#updateOrCreate
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/rosterpitchers",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#upsert
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/rosterpitchers",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#exists
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/rosterpitchers/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#findById
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/rosterpitchers/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#find
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/rosterpitchers",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#findOne
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/rosterpitchers/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#destroyById
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/rosterpitchers/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#deleteById
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/rosterpitchers/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#removeById
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/rosterpitchers/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#count
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/rosterpitchers/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Rosterpitcher#prototype$updateAttributes
         * @methodOf lbServices.Rosterpitcher
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/rosterpitchers/:id",
          method: "PUT",

        },
      }
    );
  }]);

/**
 * @ngdoc object
 * @name lbServices.Statsupdate
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Statsupdate` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Statsupdate",
  ['LoopBackResource', 'LoopBackAuth', function(Resource, LoopBackAuth) {
    return Resource(
      urlBase + "/statsupdates/:id",
      { 'id': '@id' },
      {
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#create
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "create": {
          url: urlBase + "/statsupdates",
          method: "POST",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#updateOrCreate
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "updateOrCreate": {
          url: urlBase + "/statsupdates",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#upsert
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "upsert": {
          url: urlBase + "/statsupdates",
          method: "PUT",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#exists
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Check whether a model instance exists in the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `exists` – `{*=}` - 
         */
        "exists": {
          url: urlBase + "/statsupdates/:id/exists",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#findById
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Find a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findById": {
          url: urlBase + "/statsupdates/:id",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#find
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Array.<Object>, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "find": {
          url: urlBase + "/statsupdates",
          method: "GET",
          isArray: true,

        },
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#findOne
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `filter` – `{object=}` - Filter defining fields, where, orderBy, offset, and limit
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "findOne": {
          url: urlBase + "/statsupdates/findOne",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#destroyById
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "destroyById": {
          url: urlBase + "/statsupdates/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#deleteById
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/statsupdates/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#removeById
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Delete a model instance by id from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `id` – `{*}` - Model id
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         * This method returns no data.
         */
        "removeById": {
          url: urlBase + "/statsupdates/:id",
          method: "DELETE",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#count
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Count instances of the model matched by where from the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * Object properties:
         *
         * - `where` – `{object=}` - Criteria to match model instances
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         * - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/statsupdates/count",
          method: "GET",

        },
        /**
         * @ngdoc method
         * @name lbServices.Statsupdate#prototype$updateAttributes
         * @methodOf lbServices.Statsupdate
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source
         *
         * @param {Object=} parameters Request parameters.
         *
         * @param {Object} postData Request data.
         * This method expects a subset of model properties as request parameters.
         *

         * @param {Function(Object, Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {Function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @return {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "prototype$updateAttributes": {
          url: urlBase + "/statsupdates/:id",
          method: "PUT",

        },
      }
    );
  }]);


module
  .factory('LoopBackAuth', function() {
    return {
      accessTokenId: null
    };
  })
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  })
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          if (LoopBackAuth.accessTokenId) {
            config.headers.authorization = LoopBackAuth.accessTokenId;
          }
          return config || $q.when(config);
        }
      }
    }])
  .factory('LoopBackResource', [ '$resource', function($resource) {
    return function(url, params, actions) {
      var resource = $resource(url, params, actions);

      // Angular always calls POST on $save()
      // This hack is based on
      // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
      resource.prototype.$save = function(success, error) {
        // Fortunately, LoopBack provides a convenient `upsert` method
        // that exactly fits our needs.
        var result = resource.upsert.call(this, {}, this, success, error);
        return result.$promise || result;
      }

      return resource;
    };
  }]);
