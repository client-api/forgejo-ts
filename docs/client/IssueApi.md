# IssueApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**issueAddLabel**](IssueApi.md#issueAddLabel) | **POST** /repos/{owner}/{repo}/issues/{index}/labels | Add a label to an issue |
| [**issueAddSubscription**](IssueApi.md#issueAddSubscription) | **PUT** /repos/{owner}/{repo}/issues/{index}/subscriptions/{user} | Subscribe user to issue |
| [**issueAddTime**](IssueApi.md#issueAddTime) | **POST** /repos/{owner}/{repo}/issues/{index}/times | Add tracked time to a issue |
| [**issueCheckSubscription**](IssueApi.md#issueCheckSubscription) | **GET** /repos/{owner}/{repo}/issues/{index}/subscriptions/check | Check if user is subscribed to an issue |
| [**issueClearLabels**](IssueApi.md#issueClearLabels) | **DELETE** /repos/{owner}/{repo}/issues/{index}/labels | Remove all labels from an issue |
| [**issueCreateComment**](IssueApi.md#issueCreateComment) | **POST** /repos/{owner}/{repo}/issues/{index}/comments | Add a comment to an issue |
| [**issueCreateIssue**](IssueApi.md#issueCreateIssue) | **POST** /repos/{owner}/{repo}/issues | Create an issue. If using deadline only the date will be taken into account, and time of day ignored. |
| [**issueCreateIssueAttachment**](IssueApi.md#issueCreateIssueAttachment) | **POST** /repos/{owner}/{repo}/issues/{index}/assets | Create an issue attachment |
| [**issueCreateIssueBlocking**](IssueApi.md#issueCreateIssueBlocking) | **POST** /repos/{owner}/{repo}/issues/{index}/blocks | Block the issue given in the body by the issue in path |
| [**issueCreateIssueCommentAttachment**](IssueApi.md#issueCreateIssueCommentAttachment) | **POST** /repos/{owner}/{repo}/issues/comments/{id}/assets | Create a comment attachment |
| [**issueCreateIssueDependencies**](IssueApi.md#issueCreateIssueDependencies) | **POST** /repos/{owner}/{repo}/issues/{index}/dependencies | Make the issue in the url depend on the issue in the form. |
| [**issueCreateLabel**](IssueApi.md#issueCreateLabel) | **POST** /repos/{owner}/{repo}/labels | Create a label |
| [**issueCreateMilestone**](IssueApi.md#issueCreateMilestone) | **POST** /repos/{owner}/{repo}/milestones | Create a milestone |
| [**issueDelete**](IssueApi.md#issueDelete) | **DELETE** /repos/{owner}/{repo}/issues/{index} | Delete an issue |
| [**issueDeleteComment**](IssueApi.md#issueDeleteComment) | **DELETE** /repos/{owner}/{repo}/issues/comments/{id} | Delete a comment |
| [**issueDeleteCommentDeprecated**](IssueApi.md#issueDeleteCommentDeprecated) | **DELETE** /repos/{owner}/{repo}/issues/{index}/comments/{id} | Delete a comment |
| [**issueDeleteCommentReaction**](IssueApi.md#issueDeleteCommentReaction) | **DELETE** /repos/{owner}/{repo}/issues/comments/{id}/reactions | Remove a reaction from a comment of an issue |
| [**issueDeleteIssueAttachment**](IssueApi.md#issueDeleteIssueAttachment) | **DELETE** /repos/{owner}/{repo}/issues/{index}/assets/{attachment_id} | Delete an issue attachment |
| [**issueDeleteIssueCommentAttachment**](IssueApi.md#issueDeleteIssueCommentAttachment) | **DELETE** /repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id} | Delete a comment attachment |
| [**issueDeleteIssueReaction**](IssueApi.md#issueDeleteIssueReaction) | **DELETE** /repos/{owner}/{repo}/issues/{index}/reactions | Remove a reaction from an issue |
| [**issueDeleteLabel**](IssueApi.md#issueDeleteLabel) | **DELETE** /repos/{owner}/{repo}/labels/{id} | Delete a label |
| [**issueDeleteMilestone**](IssueApi.md#issueDeleteMilestone) | **DELETE** /repos/{owner}/{repo}/milestones/{id} | Delete a milestone |
| [**issueDeleteStopWatch**](IssueApi.md#issueDeleteStopWatch) | **DELETE** /repos/{owner}/{repo}/issues/{index}/stopwatch/delete | Delete an issue&#39;s existing stopwatch. |
| [**issueDeleteSubscription**](IssueApi.md#issueDeleteSubscription) | **DELETE** /repos/{owner}/{repo}/issues/{index}/subscriptions/{user} | Unsubscribe user from issue |
| [**issueDeleteTime**](IssueApi.md#issueDeleteTime) | **DELETE** /repos/{owner}/{repo}/issues/{index}/times/{id} | Delete specific tracked time |
| [**issueEditComment**](IssueApi.md#issueEditComment) | **PATCH** /repos/{owner}/{repo}/issues/comments/{id} | Edit a comment |
| [**issueEditCommentDeprecated**](IssueApi.md#issueEditCommentDeprecated) | **PATCH** /repos/{owner}/{repo}/issues/{index}/comments/{id} | Edit a comment |
| [**issueEditIssue**](IssueApi.md#issueEditIssue) | **PATCH** /repos/{owner}/{repo}/issues/{index} | Edit an issue. If using deadline only the date will be taken into account, and time of day ignored. |
| [**issueEditIssueAttachment**](IssueApi.md#issueEditIssueAttachment) | **PATCH** /repos/{owner}/{repo}/issues/{index}/assets/{attachment_id} | Edit an issue attachment |
| [**issueEditIssueCommentAttachment**](IssueApi.md#issueEditIssueCommentAttachment) | **PATCH** /repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id} | Edit a comment attachment |
| [**issueEditIssueDeadline**](IssueApi.md#issueEditIssueDeadline) | **POST** /repos/{owner}/{repo}/issues/{index}/deadline | Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored. |
| [**issueEditLabel**](IssueApi.md#issueEditLabel) | **PATCH** /repos/{owner}/{repo}/labels/{id} | Update a label |
| [**issueEditMilestone**](IssueApi.md#issueEditMilestone) | **PATCH** /repos/{owner}/{repo}/milestones/{id} | Update a milestone |
| [**issueGetComment**](IssueApi.md#issueGetComment) | **GET** /repos/{owner}/{repo}/issues/comments/{id} | Get a comment |
| [**issueGetCommentReactions**](IssueApi.md#issueGetCommentReactions) | **GET** /repos/{owner}/{repo}/issues/comments/{id}/reactions | Get a list of reactions from a comment of an issue |
| [**issueGetComments**](IssueApi.md#issueGetComments) | **GET** /repos/{owner}/{repo}/issues/{index}/comments | List all comments on an issue |
| [**issueGetCommentsAndTimeline**](IssueApi.md#issueGetCommentsAndTimeline) | **GET** /repos/{owner}/{repo}/issues/{index}/timeline | List all comments and events on an issue |
| [**issueGetIssue**](IssueApi.md#issueGetIssue) | **GET** /repos/{owner}/{repo}/issues/{index} | Get an issue |
| [**issueGetIssueAttachment**](IssueApi.md#issueGetIssueAttachment) | **GET** /repos/{owner}/{repo}/issues/{index}/assets/{attachment_id} | Get an issue attachment |
| [**issueGetIssueCommentAttachment**](IssueApi.md#issueGetIssueCommentAttachment) | **GET** /repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id} | Get a comment attachment |
| [**issueGetIssueReactions**](IssueApi.md#issueGetIssueReactions) | **GET** /repos/{owner}/{repo}/issues/{index}/reactions | Get a list reactions of an issue |
| [**issueGetLabel**](IssueApi.md#issueGetLabel) | **GET** /repos/{owner}/{repo}/labels/{id} | Get a single label |
| [**issueGetLabels**](IssueApi.md#issueGetLabels) | **GET** /repos/{owner}/{repo}/issues/{index}/labels | Get an issue&#39;s labels |
| [**issueGetMilestone**](IssueApi.md#issueGetMilestone) | **GET** /repos/{owner}/{repo}/milestones/{id} | Get a milestone |
| [**issueGetMilestonesList**](IssueApi.md#issueGetMilestonesList) | **GET** /repos/{owner}/{repo}/milestones | Get all of a repository&#39;s opened milestones |
| [**issueGetRepoComments**](IssueApi.md#issueGetRepoComments) | **GET** /repos/{owner}/{repo}/issues/comments | List all comments in a repository |
| [**issueListBlocks**](IssueApi.md#issueListBlocks) | **GET** /repos/{owner}/{repo}/issues/{index}/blocks | List issues that are blocked by this issue |
| [**issueListIssueAttachments**](IssueApi.md#issueListIssueAttachments) | **GET** /repos/{owner}/{repo}/issues/{index}/assets | List issue&#39;s attachments |
| [**issueListIssueCommentAttachments**](IssueApi.md#issueListIssueCommentAttachments) | **GET** /repos/{owner}/{repo}/issues/comments/{id}/assets | List comment&#39;s attachments |
| [**issueListIssueDependencies**](IssueApi.md#issueListIssueDependencies) | **GET** /repos/{owner}/{repo}/issues/{index}/dependencies | List an issue&#39;s dependencies, i.e all issues that block this issue. |
| [**issueListIssues**](IssueApi.md#issueListIssues) | **GET** /repos/{owner}/{repo}/issues | List a repository&#39;s issues |
| [**issueListLabels**](IssueApi.md#issueListLabels) | **GET** /repos/{owner}/{repo}/labels | Get all of a repository&#39;s labels |
| [**issuePostCommentReaction**](IssueApi.md#issuePostCommentReaction) | **POST** /repos/{owner}/{repo}/issues/comments/{id}/reactions | Add a reaction to a comment of an issue |
| [**issuePostIssueReaction**](IssueApi.md#issuePostIssueReaction) | **POST** /repos/{owner}/{repo}/issues/{index}/reactions | Add a reaction to an issue |
| [**issueRemoveIssueBlocking**](IssueApi.md#issueRemoveIssueBlocking) | **DELETE** /repos/{owner}/{repo}/issues/{index}/blocks | Unblock the issue given in the body by the issue in path |
| [**issueRemoveIssueDependencies**](IssueApi.md#issueRemoveIssueDependencies) | **DELETE** /repos/{owner}/{repo}/issues/{index}/dependencies | Remove an issue dependency |
| [**issueRemoveLabel**](IssueApi.md#issueRemoveLabel) | **DELETE** /repos/{owner}/{repo}/issues/{index}/labels/{id} | Remove a label from an issue |
| [**issueReplaceLabels**](IssueApi.md#issueReplaceLabels) | **PUT** /repos/{owner}/{repo}/issues/{index}/labels | Replace an issue&#39;s labels |
| [**issueResetTime**](IssueApi.md#issueResetTime) | **DELETE** /repos/{owner}/{repo}/issues/{index}/times | Reset a tracked time of an issue |
| [**issueSearchIssues**](IssueApi.md#issueSearchIssues) | **GET** /repos/issues/search | Search for issues across the repositories that the user has access to |
| [**issueStartStopWatch**](IssueApi.md#issueStartStopWatch) | **POST** /repos/{owner}/{repo}/issues/{index}/stopwatch/start | Start stopwatch on an issue. |
| [**issueStopStopWatch**](IssueApi.md#issueStopStopWatch) | **POST** /repos/{owner}/{repo}/issues/{index}/stopwatch/stop | Stop an issue&#39;s existing stopwatch. |
| [**issueSubscriptions**](IssueApi.md#issueSubscriptions) | **GET** /repos/{owner}/{repo}/issues/{index}/subscriptions | Get users who subscribed on an issue. |
| [**issueTrackedTimes**](IssueApi.md#issueTrackedTimes) | **GET** /repos/{owner}/{repo}/issues/{index}/times | List an issue&#39;s tracked times |
| [**moveIssuePin**](IssueApi.md#moveIssuePin) | **PATCH** /repos/{owner}/{repo}/issues/{index}/pin/{position} | Moves the Pin to the given Position |
| [**pinIssue**](IssueApi.md#pinIssue) | **POST** /repos/{owner}/{repo}/issues/{index}/pin | Pin an Issue |
| [**unpinIssue**](IssueApi.md#unpinIssue) | **DELETE** /repos/{owner}/{repo}/issues/{index}/pin | Unpin an Issue |


<a name="issueAddLabel"></a>
# **issueAddLabel**
> List issueAddLabel(owner, repo, index, body)

Add a label to an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **body** | [**IssueLabelsOption**](../models/IssueLabelsOption.md)|  | [optional] |

### Return type

[**List**](../models/Label.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueAddSubscription"></a>
# **issueAddSubscription**
> issueAddSubscription(owner, repo, index, user)

Subscribe user to issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **user** | **String**| user to subscribe | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueAddTime"></a>
# **issueAddTime**
> TrackedTime issueAddTime(owner, repo, index, body)

Add tracked time to a issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **body** | [**AddTimeOption**](../models/AddTimeOption.md)|  | [optional] |

### Return type

[**TrackedTime**](../models/TrackedTime.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueCheckSubscription"></a>
# **issueCheckSubscription**
> WatchInfo issueCheckSubscription(owner, repo, index)

Check if user is subscribed to an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |

### Return type

[**WatchInfo**](../models/WatchInfo.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueClearLabels"></a>
# **issueClearLabels**
> issueClearLabels(owner, repo, index)

Remove all labels from an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueCreateComment"></a>
# **issueCreateComment**
> Comment issueCreateComment(owner, repo, index, body)

Add a comment to an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **body** | [**CreateIssueCommentOption**](../models/CreateIssueCommentOption.md)|  | [optional] |

### Return type

[**Comment**](../models/Comment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueCreateIssue"></a>
# **issueCreateIssue**
> Issue issueCreateIssue(owner, repo, body)

Create an issue. If using deadline only the date will be taken into account, and time of day ignored.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreateIssueOption**](../models/CreateIssueOption.md)|  | [optional] |

### Return type

[**Issue**](../models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueCreateIssueAttachment"></a>
# **issueCreateIssueAttachment**
> Attachment issueCreateIssueAttachment(owner, repo, index, attachment, name)

Create an issue attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **attachment** | **File**| attachment to upload | [default to null] |
| **name** | **String**| name of the attachment | [optional] [default to null] |

### Return type

[**Attachment**](../models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

<a name="issueCreateIssueBlocking"></a>
# **issueCreateIssueBlocking**
> Issue issueCreateIssueBlocking(owner, repo, index, body)

Block the issue given in the body by the issue in path

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **String**| index of the issue | [default to null] |
| **body** | [**IssueMeta**](../models/IssueMeta.md)|  | [optional] |

### Return type

[**Issue**](../models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="issueCreateIssueCommentAttachment"></a>
# **issueCreateIssueCommentAttachment**
> Attachment issueCreateIssueCommentAttachment(owner, repo, id, attachment, name)

Create a comment attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the comment | [default to null] |
| **attachment** | **File**| attachment to upload | [default to null] |
| **name** | **String**| name of the attachment | [optional] [default to null] |

### Return type

[**Attachment**](../models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

<a name="issueCreateIssueDependencies"></a>
# **issueCreateIssueDependencies**
> Issue issueCreateIssueDependencies(owner, repo, index, body)

Make the issue in the url depend on the issue in the form.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **String**| index of the issue | [default to null] |
| **body** | [**IssueMeta**](../models/IssueMeta.md)|  | [optional] |

### Return type

[**Issue**](../models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="issueCreateLabel"></a>
# **issueCreateLabel**
> Label issueCreateLabel(owner, repo, body)

Create a label

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreateLabelOption**](../models/CreateLabelOption.md)|  | [optional] |

### Return type

[**Label**](../models/Label.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueCreateMilestone"></a>
# **issueCreateMilestone**
> Milestone issueCreateMilestone(owner, repo, body)

Create a milestone

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreateMilestoneOption**](../models/CreateMilestoneOption.md)|  | [optional] |

### Return type

[**Milestone**](../models/Milestone.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueDelete"></a>
# **issueDelete**
> issueDelete(owner, repo, index)

Delete an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of issue to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueDeleteComment"></a>
# **issueDeleteComment**
> issueDeleteComment(owner, repo, id)

Delete a comment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of comment to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueDeleteCommentDeprecated"></a>
# **issueDeleteCommentDeprecated**
> issueDeleteCommentDeprecated(owner, repo, index, id)

Delete a comment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Integer**| this parameter is ignored | [default to null] |
| **id** | **Long**| id of comment to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueDeleteCommentReaction"></a>
# **issueDeleteCommentReaction**
> issueDeleteCommentReaction(owner, repo, id, content)

Remove a reaction from a comment of an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the comment to edit | [default to null] |
| **content** | [**EditReactionOption**](../models/EditReactionOption.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="issueDeleteIssueAttachment"></a>
# **issueDeleteIssueAttachment**
> issueDeleteIssueAttachment(owner, repo, index, attachment\_id)

Delete an issue attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **attachment\_id** | **Long**| id of the attachment to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueDeleteIssueCommentAttachment"></a>
# **issueDeleteIssueCommentAttachment**
> issueDeleteIssueCommentAttachment(owner, repo, id, attachment\_id)

Delete a comment attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the comment | [default to null] |
| **attachment\_id** | **Long**| id of the attachment to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueDeleteIssueReaction"></a>
# **issueDeleteIssueReaction**
> issueDeleteIssueReaction(owner, repo, index, content)

Remove a reaction from an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **content** | [**EditReactionOption**](../models/EditReactionOption.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

<a name="issueDeleteLabel"></a>
# **issueDeleteLabel**
> issueDeleteLabel(owner, repo, id)

Delete a label

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the label to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueDeleteMilestone"></a>
# **issueDeleteMilestone**
> issueDeleteMilestone(owner, repo, id)

Delete a milestone

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **String**| the milestone to delete, identified by ID and if not available by name | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueDeleteStopWatch"></a>
# **issueDeleteStopWatch**
> issueDeleteStopWatch(owner, repo, index)

Delete an issue&#39;s existing stopwatch.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue to stop the stopwatch on | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueDeleteSubscription"></a>
# **issueDeleteSubscription**
> issueDeleteSubscription(owner, repo, index, user)

Unsubscribe user from issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **user** | **String**| user witch unsubscribe | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueDeleteTime"></a>
# **issueDeleteTime**
> issueDeleteTime(owner, repo, index, id)

Delete specific tracked time

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **id** | **Long**| id of time to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueEditComment"></a>
# **issueEditComment**
> Comment issueEditComment(owner, repo, id, body)

Edit a comment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the comment to edit | [default to null] |
| **body** | [**EditIssueCommentOption**](../models/EditIssueCommentOption.md)|  | [optional] |

### Return type

[**Comment**](../models/Comment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueEditCommentDeprecated"></a>
# **issueEditCommentDeprecated**
> Comment issueEditCommentDeprecated(owner, repo, index, id, body)

Edit a comment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Integer**| this parameter is ignored | [default to null] |
| **id** | **Long**| id of the comment to edit | [default to null] |
| **body** | [**EditIssueCommentOption**](../models/EditIssueCommentOption.md)|  | [optional] |

### Return type

[**Comment**](../models/Comment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueEditIssue"></a>
# **issueEditIssue**
> Issue issueEditIssue(owner, repo, index, body)

Edit an issue. If using deadline only the date will be taken into account, and time of day ignored.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue to edit | [default to null] |
| **body** | [**EditIssueOption**](../models/EditIssueOption.md)|  | [optional] |

### Return type

[**Issue**](../models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueEditIssueAttachment"></a>
# **issueEditIssueAttachment**
> Attachment issueEditIssueAttachment(owner, repo, index, attachment\_id, body)

Edit an issue attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **attachment\_id** | **Long**| id of the attachment to edit | [default to null] |
| **body** | [**EditAttachmentOptions**](../models/EditAttachmentOptions.md)|  | [optional] |

### Return type

[**Attachment**](../models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueEditIssueCommentAttachment"></a>
# **issueEditIssueCommentAttachment**
> Attachment issueEditIssueCommentAttachment(owner, repo, id, attachment\_id, body)

Edit a comment attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the comment | [default to null] |
| **attachment\_id** | **Long**| id of the attachment to edit | [default to null] |
| **body** | [**EditAttachmentOptions**](../models/EditAttachmentOptions.md)|  | [optional] |

### Return type

[**Attachment**](../models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueEditIssueDeadline"></a>
# **issueEditIssueDeadline**
> IssueDeadline issueEditIssueDeadline(owner, repo, index, body)

Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue to create or update a deadline on | [default to null] |
| **body** | [**EditDeadlineOption**](../models/EditDeadlineOption.md)|  | [optional] |

### Return type

[**IssueDeadline**](../models/IssueDeadline.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueEditLabel"></a>
# **issueEditLabel**
> Label issueEditLabel(owner, repo, id, body)

Update a label

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the label to edit | [default to null] |
| **body** | [**EditLabelOption**](../models/EditLabelOption.md)|  | [optional] |

### Return type

[**Label**](../models/Label.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueEditMilestone"></a>
# **issueEditMilestone**
> Milestone issueEditMilestone(owner, repo, id, body)

Update a milestone

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **String**| the milestone to edit, identified by ID and if not available by name | [default to null] |
| **body** | [**EditMilestoneOption**](../models/EditMilestoneOption.md)|  | [optional] |

### Return type

[**Milestone**](../models/Milestone.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueGetComment"></a>
# **issueGetComment**
> Comment issueGetComment(owner, repo, id)

Get a comment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the comment | [default to null] |

### Return type

[**Comment**](../models/Comment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetCommentReactions"></a>
# **issueGetCommentReactions**
> List issueGetCommentReactions(owner, repo, id)

Get a list of reactions from a comment of an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the comment to edit | [default to null] |

### Return type

[**List**](../models/Reaction.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetComments"></a>
# **issueGetComments**
> List issueGetComments(owner, repo, index, since, before)

List all comments on an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **since** | **Date**| if provided, only comments updated since the specified time are returned. | [optional] [default to null] |
| **before** | **Date**| if provided, only comments updated before the provided time are returned. | [optional] [default to null] |

### Return type

[**List**](../models/Comment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetCommentsAndTimeline"></a>
# **issueGetCommentsAndTimeline**
> List issueGetCommentsAndTimeline(owner, repo, index, since, page, limit, before)

List all comments and events on an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **since** | **Date**| if provided, only comments updated since the specified time are returned. | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |
| **before** | **Date**| if provided, only comments updated before the provided time are returned. | [optional] [default to null] |

### Return type

[**List**](../models/TimelineComment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetIssue"></a>
# **issueGetIssue**
> Issue issueGetIssue(owner, repo, index)

Get an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue to get | [default to null] |

### Return type

[**Issue**](../models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetIssueAttachment"></a>
# **issueGetIssueAttachment**
> Attachment issueGetIssueAttachment(owner, repo, index, attachment\_id)

Get an issue attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **attachment\_id** | **Long**| id of the attachment to get | [default to null] |

### Return type

[**Attachment**](../models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetIssueCommentAttachment"></a>
# **issueGetIssueCommentAttachment**
> Attachment issueGetIssueCommentAttachment(owner, repo, id, attachment\_id)

Get a comment attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the comment | [default to null] |
| **attachment\_id** | **Long**| id of the attachment to get | [default to null] |

### Return type

[**Attachment**](../models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetIssueReactions"></a>
# **issueGetIssueReactions**
> List issueGetIssueReactions(owner, repo, index, page, limit)

Get a list reactions of an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/Reaction.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetLabel"></a>
# **issueGetLabel**
> Label issueGetLabel(owner, repo, id)

Get a single label

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the label to get | [default to null] |

### Return type

[**Label**](../models/Label.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetLabels"></a>
# **issueGetLabels**
> List issueGetLabels(owner, repo, index)

Get an issue&#39;s labels

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |

### Return type

[**List**](../models/Label.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetMilestone"></a>
# **issueGetMilestone**
> Milestone issueGetMilestone(owner, repo, id)

Get a milestone

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **String**| the milestone to get, identified by ID and if not available by name | [default to null] |

### Return type

[**Milestone**](../models/Milestone.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetMilestonesList"></a>
# **issueGetMilestonesList**
> List issueGetMilestonesList(owner, repo, state, name, page, limit)

Get all of a repository&#39;s opened milestones

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **state** | **String**| Milestone state, Recognized values are open, closed and all. Defaults to \&quot;open\&quot; | [optional] [default to null] |
| **name** | **String**| filter by milestone name | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/Milestone.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueGetRepoComments"></a>
# **issueGetRepoComments**
> List issueGetRepoComments(owner, repo, since, before, page, limit)

List all comments in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **since** | **Date**| if provided, only comments updated since the provided time are returned. | [optional] [default to null] |
| **before** | **Date**| if provided, only comments updated before the provided time are returned. | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/Comment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueListBlocks"></a>
# **issueListBlocks**
> List issueListBlocks(owner, repo, index, page, limit)

List issues that are blocked by this issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **String**| index of the issue | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueListIssueAttachments"></a>
# **issueListIssueAttachments**
> List issueListIssueAttachments(owner, repo, index)

List issue&#39;s attachments

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |

### Return type

[**List**](../models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueListIssueCommentAttachments"></a>
# **issueListIssueCommentAttachments**
> List issueListIssueCommentAttachments(owner, repo, id)

List comment&#39;s attachments

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the comment | [default to null] |

### Return type

[**List**](../models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueListIssueDependencies"></a>
# **issueListIssueDependencies**
> List issueListIssueDependencies(owner, repo, index, page, limit)

List an issue&#39;s dependencies, i.e all issues that block this issue.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **String**| index of the issue | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueListIssues"></a>
# **issueListIssues**
> List issueListIssues(owner, repo, state, labels, q, type, milestones, since, before, created\_by, assigned\_by, mentioned\_by, page, limit)

List a repository&#39;s issues

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **state** | **String**| whether issue is open or closed | [optional] [default to null] [enum: closed, open, all] |
| **labels** | **String**| comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded | [optional] [default to null] |
| **q** | **String**| search string | [optional] [default to null] |
| **type** | **String**| filter by type (issues / pulls) if set | [optional] [default to null] [enum: issues, pulls] |
| **milestones** | **String**| comma separated list of milestone names or ids. It uses names and fall back to ids. Fetch only issues that have any of this milestones. Non existent milestones are discarded | [optional] [default to null] |
| **since** | **Date**| Only show items updated after the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **before** | **Date**| Only show items updated before the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **created\_by** | **String**| Only show items which were created by the the given user | [optional] [default to null] |
| **assigned\_by** | **String**| Only show items for which the given user is assigned | [optional] [default to null] |
| **mentioned\_by** | **String**| Only show items in which the given user was mentioned | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueListLabels"></a>
# **issueListLabels**
> List issueListLabels(owner, repo, page, limit)

Get all of a repository&#39;s labels

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/Label.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issuePostCommentReaction"></a>
# **issuePostCommentReaction**
> Reaction issuePostCommentReaction(owner, repo, id, content)

Add a reaction to a comment of an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the comment to edit | [default to null] |
| **content** | [**EditReactionOption**](../models/EditReactionOption.md)|  | [optional] |

### Return type

[**Reaction**](../models/Reaction.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issuePostIssueReaction"></a>
# **issuePostIssueReaction**
> Reaction issuePostIssueReaction(owner, repo, index, content)

Add a reaction to an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **content** | [**EditReactionOption**](../models/EditReactionOption.md)|  | [optional] |

### Return type

[**Reaction**](../models/Reaction.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueRemoveIssueBlocking"></a>
# **issueRemoveIssueBlocking**
> Issue issueRemoveIssueBlocking(owner, repo, index, body)

Unblock the issue given in the body by the issue in path

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **String**| index of the issue | [default to null] |
| **body** | [**IssueMeta**](../models/IssueMeta.md)|  | [optional] |

### Return type

[**Issue**](../models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="issueRemoveIssueDependencies"></a>
# **issueRemoveIssueDependencies**
> Issue issueRemoveIssueDependencies(owner, repo, index, body)

Remove an issue dependency

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **String**| index of the issue | [default to null] |
| **body** | [**IssueMeta**](../models/IssueMeta.md)|  | [optional] |

### Return type

[**Issue**](../models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="issueRemoveLabel"></a>
# **issueRemoveLabel**
> issueRemoveLabel(owner, repo, index, id)

Remove a label from an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **id** | **Long**| id of the label to remove | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueReplaceLabels"></a>
# **issueReplaceLabels**
> List issueReplaceLabels(owner, repo, index, body)

Replace an issue&#39;s labels

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **body** | [**IssueLabelsOption**](../models/IssueLabelsOption.md)|  | [optional] |

### Return type

[**List**](../models/Label.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="issueResetTime"></a>
# **issueResetTime**
> issueResetTime(owner, repo, index)

Reset a tracked time of an issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue to add tracked time to | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueSearchIssues"></a>
# **issueSearchIssues**
> List issueSearchIssues(state, labels, milestones, q, priority\_repo\_id, type, since, before, assigned, created, mentioned, review\_requested, reviewed, owner, team, page, limit)

Search for issues across the repositories that the user has access to

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **state** | **String**| whether issue is open or closed | [optional] [default to null] |
| **labels** | **String**| comma separated list of labels. Fetch only issues that have any of this labels. Non existent labels are discarded | [optional] [default to null] |
| **milestones** | **String**| comma separated list of milestone names. Fetch only issues that have any of this milestones. Non existent are discarded | [optional] [default to null] |
| **q** | **String**| search string | [optional] [default to null] |
| **priority\_repo\_id** | **Long**| repository to prioritize in the results | [optional] [default to null] |
| **type** | **String**| filter by type (issues / pulls) if set | [optional] [default to null] |
| **since** | **Date**| Only show notifications updated after the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **before** | **Date**| Only show notifications updated before the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **assigned** | **Boolean**| filter (issues / pulls) assigned to you, default is false | [optional] [default to null] |
| **created** | **Boolean**| filter (issues / pulls) created by you, default is false | [optional] [default to null] |
| **mentioned** | **Boolean**| filter (issues / pulls) mentioning you, default is false | [optional] [default to null] |
| **review\_requested** | **Boolean**| filter pulls requesting your review, default is false | [optional] [default to null] |
| **reviewed** | **Boolean**| filter pulls reviewed by you, default is false | [optional] [default to null] |
| **owner** | **String**| filter by owner | [optional] [default to null] |
| **team** | **String**| filter by team (requires organization owner parameter to be provided) | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueStartStopWatch"></a>
# **issueStartStopWatch**
> issueStartStopWatch(owner, repo, index)

Start stopwatch on an issue.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue to create the stopwatch on | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueStopStopWatch"></a>
# **issueStopStopWatch**
> issueStopStopWatch(owner, repo, index)

Stop an issue&#39;s existing stopwatch.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue to stop the stopwatch on | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="issueSubscriptions"></a>
# **issueSubscriptions**
> List issueSubscriptions(owner, repo, index, page, limit)

Get users who subscribed on an issue.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="issueTrackedTimes"></a>
# **issueTrackedTimes**
> List issueTrackedTimes(owner, repo, index, user, since, before, page, limit)

List an issue&#39;s tracked times

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the issue | [default to null] |
| **user** | **String**| optional filter by user (available for issue managers) | [optional] [default to null] |
| **since** | **Date**| Only show times updated after the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **before** | **Date**| Only show times updated before the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/TrackedTime.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="moveIssuePin"></a>
# **moveIssuePin**
> moveIssuePin(owner, repo, index, position)

Moves the Pin to the given Position

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of issue | [default to null] |
| **position** | **Long**| the new position | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="pinIssue"></a>
# **pinIssue**
> pinIssue(owner, repo, index)

Pin an Issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of issue to pin | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="unpinIssue"></a>
# **unpinIssue**
> unpinIssue(owner, repo, index)

Unpin an Issue

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of issue to unpin | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

