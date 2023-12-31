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
 * TransferRepoOption options when transfer a repository\'s ownership
 * @export
 * @interface TransferRepoOption
 */
export interface TransferRepoOption {
    /**
     * 
     * @type {string}
     * @memberof TransferRepoOption
     */
    'new_owner': string;
    /**
     * ID of the team or teams to add to the repository. Teams can only be added to organization-owned repositories.
     * @type {Array<number>}
     * @memberof TransferRepoOption
     */
    'team_ids'?: Array<number>;
}

