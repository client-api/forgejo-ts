# AdminApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**adminAdoptRepository**](AdminApi.md#adminAdoptRepository) | **POST** /admin/unadopted/{owner}/{repo} | Adopt unadopted files as a repository |
| [**adminCreateHook**](AdminApi.md#adminCreateHook) | **POST** /admin/hooks | Create a hook |
| [**adminCreateOrg**](AdminApi.md#adminCreateOrg) | **POST** /admin/users/{username}/orgs | Create an organization |
| [**adminCreatePublicKey**](AdminApi.md#adminCreatePublicKey) | **POST** /admin/users/{username}/keys | Add a public key on behalf of a user |
| [**adminCreateRepo**](AdminApi.md#adminCreateRepo) | **POST** /admin/users/{username}/repos | Create a repository on behalf of a user |
| [**adminCreateUser**](AdminApi.md#adminCreateUser) | **POST** /admin/users | Create a user |
| [**adminCronList**](AdminApi.md#adminCronList) | **GET** /admin/cron | List cron tasks |
| [**adminCronRun**](AdminApi.md#adminCronRun) | **POST** /admin/cron/{task} | Run cron task |
| [**adminDeleteHook**](AdminApi.md#adminDeleteHook) | **DELETE** /admin/hooks/{id} | Delete a hook |
| [**adminDeleteUnadoptedRepository**](AdminApi.md#adminDeleteUnadoptedRepository) | **DELETE** /admin/unadopted/{owner}/{repo} | Delete unadopted files |
| [**adminDeleteUser**](AdminApi.md#adminDeleteUser) | **DELETE** /admin/users/{username} | Delete a user |
| [**adminDeleteUserPublicKey**](AdminApi.md#adminDeleteUserPublicKey) | **DELETE** /admin/users/{username}/keys/{id} | Delete a user&#39;s public key |
| [**adminEditHook**](AdminApi.md#adminEditHook) | **PATCH** /admin/hooks/{id} | Update a hook |
| [**adminEditUser**](AdminApi.md#adminEditUser) | **PATCH** /admin/users/{username} | Edit an existing user |
| [**adminGetAllEmails**](AdminApi.md#adminGetAllEmails) | **GET** /admin/emails | List all emails |
| [**adminGetAllOrgs**](AdminApi.md#adminGetAllOrgs) | **GET** /admin/orgs | List all organizations |
| [**adminGetHook**](AdminApi.md#adminGetHook) | **GET** /admin/hooks/{id} | Get a hook |
| [**adminListHooks**](AdminApi.md#adminListHooks) | **GET** /admin/hooks | List system&#39;s webhooks |
| [**adminRenameUser**](AdminApi.md#adminRenameUser) | **POST** /admin/users/{username}/rename | Rename a user |
| [**adminSearchEmails**](AdminApi.md#adminSearchEmails) | **GET** /admin/emails/search | Search all emails |
| [**adminSearchUsers**](AdminApi.md#adminSearchUsers) | **GET** /admin/users | Search users according filter conditions |
| [**adminUnadoptedList**](AdminApi.md#adminUnadoptedList) | **GET** /admin/unadopted | List unadopted repositories |


<a name="adminAdoptRepository"></a>
# **adminAdoptRepository**
> adminAdoptRepository(owner, repo)

Adopt unadopted files as a repository

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

<a name="adminCreateHook"></a>
# **adminCreateHook**
> Hook adminCreateHook(body)

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

<a name="adminCreateOrg"></a>
# **adminCreateOrg**
> Organization adminCreateOrg(username, organization)

Create an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of the user that will own the created organization | [default to null] |
| **organization** | [**CreateOrgOption**](../Models/CreateOrgOption.md)|  | |

### Return type

[**Organization**](../Models/Organization.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="adminCreatePublicKey"></a>
# **adminCreatePublicKey**
> PublicKey adminCreatePublicKey(username, key)

Add a public key on behalf of a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of the user | [default to null] |
| **key** | [**CreateKeyOption**](../Models/CreateKeyOption.md)|  | [optional] |

### Return type

[**PublicKey**](../Models/PublicKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="adminCreateRepo"></a>
# **adminCreateRepo**
> Repository adminCreateRepo(username, repository)

Create a repository on behalf of a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of the user. This user will own the created repository | [default to null] |
| **repository** | [**CreateRepoOption**](../Models/CreateRepoOption.md)|  | |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="adminCreateUser"></a>
# **adminCreateUser**
> User adminCreateUser(body)

Create a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**CreateUserOption**](../Models/CreateUserOption.md)|  | [optional] |

### Return type

[**User**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="adminCronList"></a>
# **adminCronList**
> List adminCronList(page, limit)

List cron tasks

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Cron.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="adminCronRun"></a>
# **adminCronRun**
> adminCronRun(task)

Run cron task

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **task** | **String**| task to run | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="adminDeleteHook"></a>
# **adminDeleteHook**
> adminDeleteHook(id)

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

<a name="adminDeleteUnadoptedRepository"></a>
# **adminDeleteUnadoptedRepository**
> adminDeleteUnadoptedRepository(owner, repo)

Delete unadopted files

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

<a name="adminDeleteUser"></a>
# **adminDeleteUser**
> adminDeleteUser(username, purge)

Delete a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user to delete | [default to null] |
| **purge** | **Boolean**| purge the user from the system completely | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="adminDeleteUserPublicKey"></a>
# **adminDeleteUserPublicKey**
> adminDeleteUserPublicKey(username, id)

Delete a user&#39;s public key

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **id** | **Long**| id of the key to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="adminEditHook"></a>
# **adminEditHook**
> Hook adminEditHook(id, body)

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

<a name="adminEditUser"></a>
# **adminEditUser**
> User adminEditUser(username, body)

Edit an existing user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user to edit | [default to null] |
| **body** | [**EditUserOption**](../Models/EditUserOption.md)|  | [optional] |

### Return type

[**User**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="adminGetAllEmails"></a>
# **adminGetAllEmails**
> List adminGetAllEmails(page, limit)

List all emails

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Email.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="adminGetAllOrgs"></a>
# **adminGetAllOrgs**
> List adminGetAllOrgs(page, limit)

List all organizations

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Organization.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="adminGetHook"></a>
# **adminGetHook**
> Hook adminGetHook(id)

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

<a name="adminListHooks"></a>
# **adminListHooks**
> List adminListHooks(page, limit)

List system&#39;s webhooks

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

<a name="adminRenameUser"></a>
# **adminRenameUser**
> adminRenameUser(username, body)

Rename a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| existing username of user | [default to null] |
| **body** | [**RenameUserOption**](../Models/RenameUserOption.md)|  | |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: Not defined

<a name="adminSearchEmails"></a>
# **adminSearchEmails**
> List adminSearchEmails(q, page, limit)

Search all emails

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **q** | **String**| keyword | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Email.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="adminSearchUsers"></a>
# **adminSearchUsers**
> List adminSearchUsers(source\_id, login\_name, page, limit)

Search users according filter conditions

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **source\_id** | **Long**| ID of the user&#39;s login source to search for | [optional] [default to null] |
| **login\_name** | **String**| user&#39;s login name to search for | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="adminUnadoptedList"></a>
# **adminUnadoptedList**
> List adminUnadoptedList(page, limit, pattern)

List unadopted repositories

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |
| **pattern** | **String**| pattern of repositories to search for | [optional] [default to null] |

### Return type

**List**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

