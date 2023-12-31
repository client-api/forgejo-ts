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
 * CreateLabelOption options for creating a label
 * @export
 * @interface CreateLabelOption
 */
export interface CreateLabelOption {
    /**
     * 
     * @type {string}
     * @memberof CreateLabelOption
     */
    'color': string;
    /**
     * 
     * @type {string}
     * @memberof CreateLabelOption
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateLabelOption
     */
    'description'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateLabelOption
     */
    'exclusive'?: boolean;
}

