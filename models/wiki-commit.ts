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


// May contain unused imports in some cases
// @ts-ignore
import { CommitUser } from './commit-user';

/**
 * WikiCommit page commit/revision
 * @export
 * @interface WikiCommit
 */
export interface WikiCommit {
    /**
     * 
     * @type {CommitUser}
     * @memberof WikiCommit
     */
    'author'?: CommitUser;
    /**
     * 
     * @type {CommitUser}
     * @memberof WikiCommit
     */
    'commiter'?: CommitUser;
    /**
     * 
     * @type {string}
     * @memberof WikiCommit
     */
    'message'?: string;
    /**
     * 
     * @type {string}
     * @memberof WikiCommit
     */
    'sha'?: string;
}

