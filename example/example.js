/**
 * @service {get} /user/:id Read data of a User
 * @serviceVersion 0.3.0
 * @serviceName GetUser
 * @serviceGroup User
 * @servicePermission admin
 *
 * @serviceDescription Compare Verison 0.3.0 with 0.2.0 and you will see the green markers with new items in version 0.3.0 and red markers with removed items since 0.2.0.
 *
 * @serviceParam {Number} id The Users-ID.
 *
 * @serviceExample Example usage:
 * curl -i http://localhost/user/4711
 *
 * @serviceSuccess {Number}   id            The Users-ID.
 * @serviceSuccess {Date}     registered    Registration Date.
 * @serviceSuccess {Date}     name          Fullname of the User.
 * @serviceSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @serviceSuccess {Object}   profile       Profile data (example for an Object)
 * @serviceSuccess {Number}   profile.age   Users age.
 * @serviceSuccess {String}   profile.image Avatar-Image.
 * @serviceSuccess {Object[]} options       List of Users options (Array of Objects).
 * @serviceSuccess {String}   options.name  Option Name.
 * @serviceSuccess {String}   options.value Option Value.
 *
 * @serviceError NoAccessRight Only authenticated Admins can access the data.
 * @serviceError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @serviceErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
function getUser() { return; }

/**
 * @service {post} /user Create a new User
 * @serviceVersion 0.3.0
 * @serviceName PostUser
 * @serviceGroup User
 * @servicePermission none
 *
 * @serviceDescription In this case "apiErrorStructure" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @serviceParam {String} name Name of the User.
 *
 * @serviceSuccess {Number} id         The new Users-ID.
 *
 * @serviceUse CreateUserError
 */
function postUser() { return; }

/**
 * @service {put} /user/:id Change a User
 * @serviceVersion 0.3.0
 * @serviceName PutUser
 * @serviceGroup User
 * @servicePermission none
 *
 * @serviceDescription This function has same errors like POST /user, but errors not defined again, they were included with "apiErrorStructure"
 *
 * @serviceParam {String} name Name of the User.
 *
 * @serviceUse CreateUserError
 */
function putUser() { return; }
