/* tslint:disable */
/* eslint-disable */
/**
 * Forgejo API.
 * This documentation describes the Forgejo API.
 *
 * The version of the OpenAPI document: 1.20.5+0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * CreateAccessTokenOption options when create access token
 * @export
 * @interface CreateAccessTokenOption
 */
export interface CreateAccessTokenOption {
    /**
     * 
     * @type {string}
     * @memberof CreateAccessTokenOption
     */
    'name': string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateAccessTokenOption
     */
    'scopes'?: Array<string>;
}

