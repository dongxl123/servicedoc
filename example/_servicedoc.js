// ------------------------------------------------------------------------------------------
// General serviceDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------
/**
 * @serviceDefine CreateUserError
 * @serviceVersion 0.2.0
 *
 * @serviceError NoAccessRight Only authenticated Admins can access the data.
 * @serviceError UserNameTooShort Minimum of 5 characters required.
 *
 * @serviceErrorExample  Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "UserNameTooShort"
 *     }
 */


// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
/**
 * @serviceDefine admin Admin access rights needed.
 * Optionally you can write here further Informations about the permission.
 *
 * An "apiDefinePermission"-block can have an "apiVersion", so you can attach the block to a specific version.
 *
 * @serviceVersion 0.3.0
 */


// ------------------------------------------------------------------------------------------
// History.
// ------------------------------------------------------------------------------------------
/**
 * @serviceDefine admin This title is visible in version 0.1.0 and 0.2.0
 * @serviceVersion 0.1.0
 */

/**
 * @service {get} /user/:id Read data of a User
 * @serviceVersion 0.2.0
 * @serviceName GetUser
 * @serviceGroup User
 * @servicePermission admin
 *
 * @serviceDescription Here you can describe the function.
 * Multilines are possible.
 *
 * @serviceParam {String} id The Users-ID.
 *
 * @serviceSuccess {String} id         The Users-ID.
 * @serviceSuccess {Date}   name       Fullname of the User.
 *
 * @serviceError UserNotFound   The <code>id</code> of the User was not found.
 */

/**
 * @service {get} /user/:id Read data of a User
 * @serviceVersion 0.1.0
 * @serviceName GetUser
 * @serviceGroup User
 * @servicePermission admin
 *
 * @serviceDescription Here you can describe the function.
 * Multilines are possible.
 *
 * @serviceParam {String} id The Users-ID.
 *
 * @serviceSuccess {String} id         The Users-ID.
 * @serviceSuccess {Date}   name       Fullname of the User.
 *
 * @serviceError UserNotFound   The error description text in version 0.1.0.
 */

/**
 * @service {post} /user Create a User
 * @serviceVersion 0.2.0
 * @serviceName PostUser
 * @serviceGroup User
 * @servicePermission none
 *
 * @serviceDescription In this case "apiErrorStructure" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @serviceParam {String} name Name of the User.
 *
 * @serviceSuccess {String} id         The Users-ID.
 *
 * @serviceUse CreateUserError
 */
