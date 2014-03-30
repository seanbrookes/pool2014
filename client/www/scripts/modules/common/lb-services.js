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
