# UserApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createCurrentUserRepo**](UserApi.md#createCurrentUserRepo) | **POST** /user/repos | Create a repository |
| [**getUserSettings**](UserApi.md#getUserSettings) | **GET** /user/settings | Get user settings |
| [**getVerificationToken**](UserApi.md#getVerificationToken) | **GET** /user/gpg_key_token | Get a Token to verify |
| [**updateUserSettings**](UserApi.md#updateUserSettings) | **PATCH** /user/settings | Update user settings |
| [**userAddEmail**](UserApi.md#userAddEmail) | **POST** /user/emails | Add email addresses |
| [**userBlockUser**](UserApi.md#userBlockUser) | **PUT** /user/block/{username} | Blocks a user from the doer. |
| [**userCheckFollowing**](UserApi.md#userCheckFollowing) | **GET** /users/{username}/following/{target} | Check if one user is following another user |
| [**userCreateHook**](UserApi.md#userCreateHook) | **POST** /user/hooks | Create a hook |
| [**userCreateOAuth2Application**](UserApi.md#userCreateOAuth2Application) | **POST** /user/applications/oauth2 | creates a new OAuth2 application |
| [**userCreateToken**](UserApi.md#userCreateToken) | **POST** /users/{username}/tokens | Create an access token |
| [**userCurrentCheckFollowing**](UserApi.md#userCurrentCheckFollowing) | **GET** /user/following/{username} | Check whether a user is followed by the authenticated user |
| [**userCurrentCheckStarring**](UserApi.md#userCurrentCheckStarring) | **GET** /user/starred/{owner}/{repo} | Whether the authenticated is starring the repo |
| [**userCurrentDeleteFollow**](UserApi.md#userCurrentDeleteFollow) | **DELETE** /user/following/{username} | Unfollow a user |
| [**userCurrentDeleteGPGKey**](UserApi.md#userCurrentDeleteGPGKey) | **DELETE** /user/gpg_keys/{id} | Remove a GPG key |
| [**userCurrentDeleteKey**](UserApi.md#userCurrentDeleteKey) | **DELETE** /user/keys/{id} | Delete a public key |
| [**userCurrentDeleteStar**](UserApi.md#userCurrentDeleteStar) | **DELETE** /user/starred/{owner}/{repo} | Unstar the given repo |
| [**userCurrentGetGPGKey**](UserApi.md#userCurrentGetGPGKey) | **GET** /user/gpg_keys/{id} | Get a GPG key |
| [**userCurrentGetKey**](UserApi.md#userCurrentGetKey) | **GET** /user/keys/{id} | Get a public key |
| [**userCurrentListFollowers**](UserApi.md#userCurrentListFollowers) | **GET** /user/followers | List the authenticated user&#39;s followers |
| [**userCurrentListFollowing**](UserApi.md#userCurrentListFollowing) | **GET** /user/following | List the users that the authenticated user is following |
| [**userCurrentListGPGKeys**](UserApi.md#userCurrentListGPGKeys) | **GET** /user/gpg_keys | List the authenticated user&#39;s GPG keys |
| [**userCurrentListKeys**](UserApi.md#userCurrentListKeys) | **GET** /user/keys | List the authenticated user&#39;s public keys |
| [**userCurrentListRepos**](UserApi.md#userCurrentListRepos) | **GET** /user/repos | List the repos that the authenticated user owns |
| [**userCurrentListStarred**](UserApi.md#userCurrentListStarred) | **GET** /user/starred | The repos that the authenticated user has starred |
| [**userCurrentListSubscriptions**](UserApi.md#userCurrentListSubscriptions) | **GET** /user/subscriptions | List repositories watched by the authenticated user |
| [**userCurrentPostGPGKey**](UserApi.md#userCurrentPostGPGKey) | **POST** /user/gpg_keys | Create a GPG key |
| [**userCurrentPostKey**](UserApi.md#userCurrentPostKey) | **POST** /user/keys | Create a public key |
| [**userCurrentPutFollow**](UserApi.md#userCurrentPutFollow) | **PUT** /user/following/{username} | Follow a user |
| [**userCurrentPutStar**](UserApi.md#userCurrentPutStar) | **PUT** /user/starred/{owner}/{repo} | Star the given repo |
| [**userCurrentTrackedTimes**](UserApi.md#userCurrentTrackedTimes) | **GET** /user/times | List the current user&#39;s tracked times |
| [**userDeleteAccessToken**](UserApi.md#userDeleteAccessToken) | **DELETE** /users/{username}/tokens/{token} | delete an access token |
| [**userDeleteEmail**](UserApi.md#userDeleteEmail) | **DELETE** /user/emails | Delete email addresses |
| [**userDeleteHook**](UserApi.md#userDeleteHook) | **DELETE** /user/hooks/{id} | Delete a hook |
| [**userDeleteOAuth2Application**](UserApi.md#userDeleteOAuth2Application) | **DELETE** /user/applications/oauth2/{id} | delete an OAuth2 Application |
| [**userEditHook**](UserApi.md#userEditHook) | **PATCH** /user/hooks/{id} | Update a hook |
| [**userGet**](UserApi.md#userGet) | **GET** /users/{username} | Get a user |
| [**userGetCurrent**](UserApi.md#userGetCurrent) | **GET** /user | Get the authenticated user |
| [**userGetHeatmapData**](UserApi.md#userGetHeatmapData) | **GET** /users/{username}/heatmap | Get a user&#39;s heatmap |
| [**userGetHook**](UserApi.md#userGetHook) | **GET** /user/hooks/{id} | Get a hook |
| [**userGetOAuth2Application**](UserApi.md#userGetOAuth2Application) | **GET** /user/applications/oauth2/{id} | get an OAuth2 Application |
| [**userGetOauth2Application**](UserApi.md#userGetOauth2Application) | **GET** /user/applications/oauth2 | List the authenticated user&#39;s oauth2 applications |
| [**userGetStopWatches**](UserApi.md#userGetStopWatches) | **GET** /user/stopwatches | Get list of all existing stopwatches |
| [**userGetTokens**](UserApi.md#userGetTokens) | **GET** /users/{username}/tokens | List the authenticated user&#39;s access tokens |
| [**userListActivityFeeds**](UserApi.md#userListActivityFeeds) | **GET** /users/{username}/activities/feeds | List a user&#39;s activity feeds |
| [**userListBlockedUsers**](UserApi.md#userListBlockedUsers) | **GET** /user/list_blocked | List the authenticated user&#39;s blocked users |
| [**userListEmails**](UserApi.md#userListEmails) | **GET** /user/emails | List the authenticated user&#39;s email addresses |
| [**userListFollowers**](UserApi.md#userListFollowers) | **GET** /users/{username}/followers | List the given user&#39;s followers |
| [**userListFollowing**](UserApi.md#userListFollowing) | **GET** /users/{username}/following | List the users that the given user is following |
| [**userListGPGKeys**](UserApi.md#userListGPGKeys) | **GET** /users/{username}/gpg_keys | List the given user&#39;s GPG keys |
| [**userListHooks**](UserApi.md#userListHooks) | **GET** /user/hooks | List the authenticated user&#39;s webhooks |
| [**userListKeys**](UserApi.md#userListKeys) | **GET** /users/{username}/keys | List the given user&#39;s public keys |
| [**userListRepos**](UserApi.md#userListRepos) | **GET** /users/{username}/repos | List the repos owned by the given user |
| [**userListStarred**](UserApi.md#userListStarred) | **GET** /users/{username}/starred | The repos that the given user has starred |
| [**userListSubscriptions**](UserApi.md#userListSubscriptions) | **GET** /users/{username}/subscriptions | List the repositories watched by a user |
| [**userListTeams**](UserApi.md#userListTeams) | **GET** /user/teams | List all the teams a user belongs to |
| [**userSearch**](UserApi.md#userSearch) | **GET** /users/search | Search for users |
| [**userUnblockUser**](UserApi.md#userUnblockUser) | **PUT** /user/unblock/{username} | Unblocks a user from the doer. |
| [**userUpdateOAuth2Application**](UserApi.md#userUpdateOAuth2Application) | **PATCH** /user/applications/oauth2/{id} | update an OAuth2 Application, this includes regenerating the client secret |
| [**userVerifyGPGKey**](UserApi.md#userVerifyGPGKey) | **POST** /user/gpg_key_verify | Verify a GPG key |


<a name="createCurrentUserRepo"></a>
# **createCurrentUserRepo**
> Repository createCurrentUserRepo(body)

Create a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**CreateRepoOption**](../Models/CreateRepoOption.md)|  | [optional] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getUserSettings"></a>
# **getUserSettings**
> List getUserSettings()

Get user settings

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/UserSettings.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getVerificationToken"></a>
# **getVerificationToken**
> String getVerificationToken()

Get a Token to verify

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

<a name="updateUserSettings"></a>
# **updateUserSettings**
> List updateUserSettings(body)

Update user settings

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**UserSettingsOptions**](../Models/UserSettingsOptions.md)|  | [optional] |

### Return type

[**List**](../Models/UserSettings.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="userAddEmail"></a>
# **userAddEmail**
> List userAddEmail(body)

Add email addresses

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**CreateEmailOption**](../Models/CreateEmailOption.md)|  | [optional] |

### Return type

[**List**](../Models/Email.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="userBlockUser"></a>
# **userBlockUser**
> userBlockUser(username)

Blocks a user from the doer.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of the user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userCheckFollowing"></a>
# **userCheckFollowing**
> userCheckFollowing(username, target)

Check if one user is following another user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of following user | [default to null] |
| **target** | **String**| username of followed user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userCreateHook"></a>
# **userCreateHook**
> Hook userCreateHook(body)

Create a hook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**CreateHookOption**](../Models/CreateHookOption.md)|  | |

### Return type

[**Hook**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userCreateOAuth2Application"></a>
# **userCreateOAuth2Application**
> OAuth2Application userCreateOAuth2Application(body)

creates a new OAuth2 application

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**CreateOAuth2ApplicationOptions**](../Models/CreateOAuth2ApplicationOptions.md)|  | |

### Return type

[**OAuth2Application**](../Models/OAuth2Application.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="userCreateToken"></a>
# **userCreateToken**
> AccessToken userCreateToken(username, body)

Create an access token

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **body** | [**CreateAccessTokenOption**](../Models/CreateAccessTokenOption.md)|  | [optional] |

### Return type

[**AccessToken**](../Models/AccessToken.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userCurrentCheckFollowing"></a>
# **userCurrentCheckFollowing**
> userCurrentCheckFollowing(username)

Check whether a user is followed by the authenticated user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of followed user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userCurrentCheckStarring"></a>
# **userCurrentCheckStarring**
> userCurrentCheckStarring(owner, repo)

Whether the authenticated is starring the repo

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userCurrentDeleteFollow"></a>
# **userCurrentDeleteFollow**
> userCurrentDeleteFollow(username)

Unfollow a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user to unfollow | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userCurrentDeleteGPGKey"></a>
# **userCurrentDeleteGPGKey**
> userCurrentDeleteGPGKey(id)

Remove a GPG key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of key to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userCurrentDeleteKey"></a>
# **userCurrentDeleteKey**
> userCurrentDeleteKey(id)

Delete a public key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of key to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userCurrentDeleteStar"></a>
# **userCurrentDeleteStar**
> userCurrentDeleteStar(owner, repo)

Unstar the given repo

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo to unstar | [default to null] |
| **repo** | **String**| name of the repo to unstar | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userCurrentGetGPGKey"></a>
# **userCurrentGetGPGKey**
> GPGKey userCurrentGetGPGKey(id)

Get a GPG key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of key to get | [default to null] |

### Return type

[**GPGKey**](../Models/GPGKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userCurrentGetKey"></a>
# **userCurrentGetKey**
> PublicKey userCurrentGetKey(id)

Get a public key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of key to get | [default to null] |

### Return type

[**PublicKey**](../Models/PublicKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userCurrentListFollowers"></a>
# **userCurrentListFollowers**
> List userCurrentListFollowers(page, limit)

List the authenticated user&#39;s followers

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userCurrentListFollowing"></a>
# **userCurrentListFollowing**
> List userCurrentListFollowing(page, limit)

List the users that the authenticated user is following

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userCurrentListGPGKeys"></a>
# **userCurrentListGPGKeys**
> List userCurrentListGPGKeys(page, limit)

List the authenticated user&#39;s GPG keys

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/GPGKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userCurrentListKeys"></a>
# **userCurrentListKeys**
> List userCurrentListKeys(fingerprint, page, limit)

List the authenticated user&#39;s public keys

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **fingerprint** | **String**| fingerprint of the key | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/PublicKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userCurrentListRepos"></a>
# **userCurrentListRepos**
> List userCurrentListRepos(page, limit)

List the repos that the authenticated user owns

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userCurrentListStarred"></a>
# **userCurrentListStarred**
> List userCurrentListStarred(page, limit)

The repos that the authenticated user has starred

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userCurrentListSubscriptions"></a>
# **userCurrentListSubscriptions**
> List userCurrentListSubscriptions(page, limit)

List repositories watched by the authenticated user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userCurrentPostGPGKey"></a>
# **userCurrentPostGPGKey**
> GPGKey userCurrentPostGPGKey(Form)

Create a GPG key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **Form** | [**CreateGPGKeyOption**](../Models/CreateGPGKeyOption.md)|  | [optional] |

### Return type

[**GPGKey**](../Models/GPGKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userCurrentPostKey"></a>
# **userCurrentPostKey**
> PublicKey userCurrentPostKey(body)

Create a public key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**CreateKeyOption**](../Models/CreateKeyOption.md)|  | [optional] |

### Return type

[**PublicKey**](../Models/PublicKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userCurrentPutFollow"></a>
# **userCurrentPutFollow**
> userCurrentPutFollow(username)

Follow a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user to follow | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userCurrentPutStar"></a>
# **userCurrentPutStar**
> userCurrentPutStar(owner, repo)

Star the given repo

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo to star | [default to null] |
| **repo** | **String**| name of the repo to star | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userCurrentTrackedTimes"></a>
# **userCurrentTrackedTimes**
> List userCurrentTrackedTimes(page, limit, since, before)

List the current user&#39;s tracked times

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |
| **since** | **Date**| Only show times updated after the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **before** | **Date**| Only show times updated before the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |

### Return type

[**List**](../Models/TrackedTime.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userDeleteAccessToken"></a>
# **userDeleteAccessToken**
> userDeleteAccessToken(username, token)

delete an access token

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **token** | **String**| token to be deleted, identified by ID and if not available by name | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userDeleteEmail"></a>
# **userDeleteEmail**
> userDeleteEmail(body)

Delete email addresses

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**DeleteEmailOption**](../Models/DeleteEmailOption.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: Not defined

<a name="userDeleteHook"></a>
# **userDeleteHook**
> userDeleteHook(id)

Delete a hook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the hook to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userDeleteOAuth2Application"></a>
# **userDeleteOAuth2Application**
> userDeleteOAuth2Application(id)

delete an OAuth2 Application

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| token to be deleted | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userEditHook"></a>
# **userEditHook**
> Hook userEditHook(id, body)

Update a hook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the hook to update | [default to null] |
| **body** | [**EditHookOption**](../Models/EditHookOption.md)|  | [optional] |

### Return type

[**Hook**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="userGet"></a>
# **userGet**
> User userGet(username)

Get a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user to get | [default to null] |

### Return type

[**User**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userGetCurrent"></a>
# **userGetCurrent**
> User userGetCurrent()

Get the authenticated user

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userGetHeatmapData"></a>
# **userGetHeatmapData**
> List userGetHeatmapData(username)

Get a user&#39;s heatmap

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user to get | [default to null] |

### Return type

[**List**](../Models/UserHeatmapData.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userGetHook"></a>
# **userGetHook**
> Hook userGetHook(id)

Get a hook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the hook to get | [default to null] |

### Return type

[**Hook**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userGetOAuth2Application"></a>
# **userGetOAuth2Application**
> OAuth2Application userGetOAuth2Application(id)

get an OAuth2 Application

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| Application ID to be found | [default to null] |

### Return type

[**OAuth2Application**](../Models/OAuth2Application.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userGetOauth2Application"></a>
# **userGetOauth2Application**
> List userGetOauth2Application(page, limit)

List the authenticated user&#39;s oauth2 applications

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/OAuth2Application.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userGetStopWatches"></a>
# **userGetStopWatches**
> List userGetStopWatches(page, limit)

Get list of all existing stopwatches

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/StopWatch.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userGetTokens"></a>
# **userGetTokens**
> List userGetTokens(username, page, limit)

List the authenticated user&#39;s access tokens

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/AccessToken.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListActivityFeeds"></a>
# **userListActivityFeeds**
> List userListActivityFeeds(username, only-performed-by, date, page, limit)

List a user&#39;s activity feeds

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **only-performed-by** | **Boolean**| if true, only show actions performed by the requested user | [optional] [default to null] |
| **date** | **date**| the date of the activities to be found | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Activity.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListBlockedUsers"></a>
# **userListBlockedUsers**
> List userListBlockedUsers(page, limit)

List the authenticated user&#39;s blocked users

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/BlockedUser.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListEmails"></a>
# **userListEmails**
> List userListEmails()

List the authenticated user&#39;s email addresses

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/Email.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListFollowers"></a>
# **userListFollowers**
> List userListFollowers(username, page, limit)

List the given user&#39;s followers

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListFollowing"></a>
# **userListFollowing**
> List userListFollowing(username, page, limit)

List the users that the given user is following

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListGPGKeys"></a>
# **userListGPGKeys**
> List userListGPGKeys(username, page, limit)

List the given user&#39;s GPG keys

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/GPGKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListHooks"></a>
# **userListHooks**
> List userListHooks(page, limit)

List the authenticated user&#39;s webhooks

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListKeys"></a>
# **userListKeys**
> List userListKeys(username, fingerprint, page, limit)

List the given user&#39;s public keys

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **fingerprint** | **String**| fingerprint of the key | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/PublicKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListRepos"></a>
# **userListRepos**
> List userListRepos(username, page, limit)

List the repos owned by the given user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListStarred"></a>
# **userListStarred**
> List userListStarred(username, page, limit)

The repos that the given user has starred

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListSubscriptions"></a>
# **userListSubscriptions**
> List userListSubscriptions(username, page, limit)

List the repositories watched by a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of the user | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userListTeams"></a>
# **userListTeams**
> List userListTeams(page, limit)

List all the teams a user belongs to

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Team.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userSearch"></a>
# **userSearch**
> userSearch_200_response userSearch(q, uid, page, limit)

Search for users

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **q** | **String**| keyword | [optional] [default to null] |
| **uid** | **Long**| ID of the user to search for | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**userSearch_200_response**](../Models/userSearch_200_response.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userUnblockUser"></a>
# **userUnblockUser**
> userUnblockUser(username)

Unblocks a user from the doer.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of the user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="userUpdateOAuth2Application"></a>
# **userUpdateOAuth2Application**
> OAuth2Application userUpdateOAuth2Application(id, body)

update an OAuth2 Application, this includes regenerating the client secret

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| application to be updated | [default to null] |
| **body** | [**CreateOAuth2ApplicationOptions**](../Models/CreateOAuth2ApplicationOptions.md)|  | |

### Return type

[**OAuth2Application**](../Models/OAuth2Application.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="userVerifyGPGKey"></a>
# **userVerifyGPGKey**
> GPGKey userVerifyGPGKey()

Verify a GPG key

### Parameters
This endpoint does not need any parameter.

### Return type

[**GPGKey**](../Models/GPGKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

