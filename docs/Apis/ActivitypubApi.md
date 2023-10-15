# ActivitypubApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**activitypubPerson**](ActivitypubApi.md#activitypubPerson) | **GET** /activitypub/user-id/{user-id} | Returns the Person actor for a user |
| [**activitypubPersonInbox**](ActivitypubApi.md#activitypubPersonInbox) | **POST** /activitypub/user-id/{user-id}/inbox | Send to the inbox |


<a name="activitypubPerson"></a>
# **activitypubPerson**
> ActivityPub activitypubPerson(user-id)

Returns the Person actor for a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **user-id** | **Integer**| user ID of the user | [default to null] |

### Return type

[**ActivityPub**](../Models/ActivityPub.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="activitypubPersonInbox"></a>
# **activitypubPersonInbox**
> activitypubPersonInbox(user-id)

Send to the inbox

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **user-id** | **Integer**| user ID of the user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

