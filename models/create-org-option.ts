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
 * CreateOrgOption options for creating an organization
 * @export
 * @interface CreateOrgOption
 */
export interface CreateOrgOption {
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    'full_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    'location'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateOrgOption
     */
    'repo_admin_change_team_access'?: boolean;
    /**
     * possible values are `public` (default), `limited` or `private`
     * @type {string}
     * @memberof CreateOrgOption
     */
    'visibility'?: CreateOrgOptionVisibilityEnum;
    /**
     * 
     * @type {string}
     * @memberof CreateOrgOption
     */
    'website'?: string;
}

export const CreateOrgOptionVisibilityEnum = {
    Public: 'public',
    Limited: 'limited',
    Private: 'private'
} as const;

export type CreateOrgOptionVisibilityEnum = typeof CreateOrgOptionVisibilityEnum[keyof typeof CreateOrgOptionVisibilityEnum];


