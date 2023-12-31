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
import { IssueFormField } from './issue-form-field';

/**
 * IssueTemplate represents an issue template for a repository
 * @export
 * @interface IssueTemplate
 */
export interface IssueTemplate {
    /**
     * 
     * @type {string}
     * @memberof IssueTemplate
     */
    'about'?: string;
    /**
     * 
     * @type {Array<IssueFormField>}
     * @memberof IssueTemplate
     */
    'body'?: Array<IssueFormField>;
    /**
     * 
     * @type {string}
     * @memberof IssueTemplate
     */
    'content'?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueTemplate
     */
    'file_name'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof IssueTemplate
     */
    'labels'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IssueTemplate
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueTemplate
     */
    'ref'?: string;
    /**
     * 
     * @type {string}
     * @memberof IssueTemplate
     */
    'title'?: string;
}

