# NotificationApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**notifyGetList**](NotificationApi.md#notifyGetList) | **GET** /notifications | List users&#39;s notification threads |
| [**notifyGetRepoList**](NotificationApi.md#notifyGetRepoList) | **GET** /repos/{owner}/{repo}/notifications | List users&#39;s notification threads on a specific repo |
| [**notifyGetThread**](NotificationApi.md#notifyGetThread) | **GET** /notifications/threads/{id} | Get notification thread by ID |
| [**notifyNewAvailable**](NotificationApi.md#notifyNewAvailable) | **GET** /notifications/new | Check if unread notifications exist |
| [**notifyReadList**](NotificationApi.md#notifyReadList) | **PUT** /notifications | Mark notification threads as read, pinned or unread |
| [**notifyReadRepoList**](NotificationApi.md#notifyReadRepoList) | **PUT** /repos/{owner}/{repo}/notifications | Mark notification threads as read, pinned or unread on a specific repo |
| [**notifyReadThread**](NotificationApi.md#notifyReadThread) | **PATCH** /notifications/threads/{id} | Mark notification thread as read by ID |


<a name="notifyGetList"></a>
# **notifyGetList**
> List notifyGetList(all, status-types, subject-type, since, before, page, limit)

List users&#39;s notification threads

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **all** | **Boolean**| If true, show notifications marked as read. Default value is false | [optional] [default to null] |
| **status-types** | [**List**](../models/String.md)| Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread &amp; pinned. | [optional] [default to null] |
| **subject-type** | [**List**](../models/String.md)| filter notifications by subject type | [optional] [default to null] [enum: issue, pull, commit, repository] |
| **since** | **Date**| Only show notifications updated after the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **before** | **Date**| Only show notifications updated before the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/NotificationThread.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="notifyGetRepoList"></a>
# **notifyGetRepoList**
> List notifyGetRepoList(owner, repo, all, status-types, subject-type, since, before, page, limit)

List users&#39;s notification threads on a specific repo

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **all** | **Boolean**| If true, show notifications marked as read. Default value is false | [optional] [default to null] |
| **status-types** | [**List**](../models/String.md)| Show notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread &amp; pinned | [optional] [default to null] |
| **subject-type** | [**List**](../models/String.md)| filter notifications by subject type | [optional] [default to null] [enum: issue, pull, commit, repository] |
| **since** | **Date**| Only show notifications updated after the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **before** | **Date**| Only show notifications updated before the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../models/NotificationThread.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="notifyGetThread"></a>
# **notifyGetThread**
> NotificationThread notifyGetThread(id)

Get notification thread by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| id of notification thread | [default to null] |

### Return type

[**NotificationThread**](../models/NotificationThread.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="notifyNewAvailable"></a>
# **notifyNewAvailable**
> NotificationCount notifyNewAvailable()

Check if unread notifications exist

### Parameters
This endpoint does not need any parameter.

### Return type

[**NotificationCount**](../models/NotificationCount.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

<a name="notifyReadList"></a>
# **notifyReadList**
> List notifyReadList(last\_read\_at, all, status-types, to-status)

Mark notification threads as read, pinned or unread

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **last\_read\_at** | **Date**| Describes the last point that notifications were checked. Anything updated since this time will not be updated. | [optional] [default to null] |
| **all** | **String**| If true, mark all notifications on this repo. Default value is false | [optional] [default to null] |
| **status-types** | [**List**](../models/String.md)| Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread. | [optional] [default to null] |
| **to-status** | **String**| Status to mark notifications as, Defaults to read. | [optional] [default to null] |

### Return type

[**List**](../models/NotificationThread.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="notifyReadRepoList"></a>
# **notifyReadRepoList**
> List notifyReadRepoList(owner, repo, all, status-types, to-status, last\_read\_at)

Mark notification threads as read, pinned or unread on a specific repo

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **all** | **String**| If true, mark all notifications on this repo. Default value is false | [optional] [default to null] |
| **status-types** | [**List**](../models/String.md)| Mark notifications with the provided status types. Options are: unread, read and/or pinned. Defaults to unread. | [optional] [default to null] |
| **to-status** | **String**| Status to mark notifications as. Defaults to read. | [optional] [default to null] |
| **last\_read\_at** | **Date**| Describes the last point that notifications were checked. Anything updated since this time will not be updated. | [optional] [default to null] |

### Return type

[**List**](../models/NotificationThread.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="notifyReadThread"></a>
# **notifyReadThread**
> NotificationThread notifyReadThread(id, to-status)

Mark notification thread as read by ID

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **String**| id of notification thread | [default to null] |
| **to-status** | **String**| Status to mark notifications as | [optional] [default to read] |

### Return type

[**NotificationThread**](../models/NotificationThread.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

