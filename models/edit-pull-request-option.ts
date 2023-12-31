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
 * EditPullRequestOption options when modify pull request
 * @export
 * @interface EditPullRequestOption
 */
export interface EditPullRequestOption {
    /**
     * 
     * @type {boolean}
     * @memberof EditPullRequestOption
     */
    'allow_maintainer_edit'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    'assignee'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EditPullRequestOption
     */
    'assignees'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    'base'?: string;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    'body'?: string;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    'due_date'?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof EditPullRequestOption
     */
    'labels'?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof EditPullRequestOption
     */
    'milestone'?: number;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    'state'?: string;
    /**
     * 
     * @type {string}
     * @memberof EditPullRequestOption
     */
    'title'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EditPullRequestOption
     */
    'unset_due_date'?: boolean;
}

