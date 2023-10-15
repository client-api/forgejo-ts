# OrganizationApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createOrgRepo**](OrganizationApi.md#createOrgRepo) | **POST** /orgs/{org}/repos | Create a repository in an organization |
| [**createOrgRepoDeprecated**](OrganizationApi.md#createOrgRepoDeprecated) | **POST** /org/{org}/repos | Create a repository in an organization |
| [**orgAddTeamMember**](OrganizationApi.md#orgAddTeamMember) | **PUT** /teams/{id}/members/{username} | Add a team member |
| [**orgAddTeamRepository**](OrganizationApi.md#orgAddTeamRepository) | **PUT** /teams/{id}/repos/{org}/{repo} | Add a repository to a team |
| [**orgBlockUser**](OrganizationApi.md#orgBlockUser) | **PUT** /orgs/{org}/block/{username} | Blocks a user from the organization |
| [**orgConcealMember**](OrganizationApi.md#orgConcealMember) | **DELETE** /orgs/{org}/public_members/{username} | Conceal a user&#39;s membership |
| [**orgCreate**](OrganizationApi.md#orgCreate) | **POST** /orgs | Create an organization |
| [**orgCreateHook**](OrganizationApi.md#orgCreateHook) | **POST** /orgs/{org}/hooks | Create a hook |
| [**orgCreateLabel**](OrganizationApi.md#orgCreateLabel) | **POST** /orgs/{org}/labels | Create a label for an organization |
| [**orgCreateTeam**](OrganizationApi.md#orgCreateTeam) | **POST** /orgs/{org}/teams | Create a team |
| [**orgDelete**](OrganizationApi.md#orgDelete) | **DELETE** /orgs/{org} | Delete an organization |
| [**orgDeleteHook**](OrganizationApi.md#orgDeleteHook) | **DELETE** /orgs/{org}/hooks/{id} | Delete a hook |
| [**orgDeleteLabel**](OrganizationApi.md#orgDeleteLabel) | **DELETE** /orgs/{org}/labels/{id} | Delete a label |
| [**orgDeleteMember**](OrganizationApi.md#orgDeleteMember) | **DELETE** /orgs/{org}/members/{username} | Remove a member from an organization |
| [**orgDeleteTeam**](OrganizationApi.md#orgDeleteTeam) | **DELETE** /teams/{id} | Delete a team |
| [**orgEdit**](OrganizationApi.md#orgEdit) | **PATCH** /orgs/{org} | Edit an organization |
| [**orgEditHook**](OrganizationApi.md#orgEditHook) | **PATCH** /orgs/{org}/hooks/{id} | Update a hook |
| [**orgEditLabel**](OrganizationApi.md#orgEditLabel) | **PATCH** /orgs/{org}/labels/{id} | Update a label |
| [**orgEditTeam**](OrganizationApi.md#orgEditTeam) | **PATCH** /teams/{id} | Edit a team |
| [**orgGet**](OrganizationApi.md#orgGet) | **GET** /orgs/{org} | Get an organization |
| [**orgGetAll**](OrganizationApi.md#orgGetAll) | **GET** /orgs | Get list of organizations |
| [**orgGetHook**](OrganizationApi.md#orgGetHook) | **GET** /orgs/{org}/hooks/{id} | Get a hook |
| [**orgGetLabel**](OrganizationApi.md#orgGetLabel) | **GET** /orgs/{org}/labels/{id} | Get a single label |
| [**orgGetTeam**](OrganizationApi.md#orgGetTeam) | **GET** /teams/{id} | Get a team |
| [**orgGetUserPermissions**](OrganizationApi.md#orgGetUserPermissions) | **GET** /users/{username}/orgs/{org}/permissions | Get user permissions in organization |
| [**orgIsMember**](OrganizationApi.md#orgIsMember) | **GET** /orgs/{org}/members/{username} | Check if a user is a member of an organization |
| [**orgIsPublicMember**](OrganizationApi.md#orgIsPublicMember) | **GET** /orgs/{org}/public_members/{username} | Check if a user is a public member of an organization |
| [**orgListActivityFeeds**](OrganizationApi.md#orgListActivityFeeds) | **GET** /orgs/{org}/activities/feeds | List an organization&#39;s activity feeds |
| [**orgListBlockedUsers**](OrganizationApi.md#orgListBlockedUsers) | **GET** /orgs/{org}/list_blocked | List the organization&#39;s blocked users |
| [**orgListCurrentUserOrgs**](OrganizationApi.md#orgListCurrentUserOrgs) | **GET** /user/orgs | List the current user&#39;s organizations |
| [**orgListHooks**](OrganizationApi.md#orgListHooks) | **GET** /orgs/{org}/hooks | List an organization&#39;s webhooks |
| [**orgListLabels**](OrganizationApi.md#orgListLabels) | **GET** /orgs/{org}/labels | List an organization&#39;s labels |
| [**orgListMembers**](OrganizationApi.md#orgListMembers) | **GET** /orgs/{org}/members | List an organization&#39;s members |
| [**orgListPublicMembers**](OrganizationApi.md#orgListPublicMembers) | **GET** /orgs/{org}/public_members | List an organization&#39;s public members |
| [**orgListRepos**](OrganizationApi.md#orgListRepos) | **GET** /orgs/{org}/repos | List an organization&#39;s repos |
| [**orgListTeamActivityFeeds**](OrganizationApi.md#orgListTeamActivityFeeds) | **GET** /teams/{id}/activities/feeds | List a team&#39;s activity feeds |
| [**orgListTeamMember**](OrganizationApi.md#orgListTeamMember) | **GET** /teams/{id}/members/{username} | List a particular member of team |
| [**orgListTeamMembers**](OrganizationApi.md#orgListTeamMembers) | **GET** /teams/{id}/members | List a team&#39;s members |
| [**orgListTeamRepo**](OrganizationApi.md#orgListTeamRepo) | **GET** /teams/{id}/repos/{org}/{repo} | List a particular repo of team |
| [**orgListTeamRepos**](OrganizationApi.md#orgListTeamRepos) | **GET** /teams/{id}/repos | List a team&#39;s repos |
| [**orgListTeams**](OrganizationApi.md#orgListTeams) | **GET** /orgs/{org}/teams | List an organization&#39;s teams |
| [**orgListUserOrgs**](OrganizationApi.md#orgListUserOrgs) | **GET** /users/{username}/orgs | List a user&#39;s organizations |
| [**orgPublicizeMember**](OrganizationApi.md#orgPublicizeMember) | **PUT** /orgs/{org}/public_members/{username} | Publicize a user&#39;s membership |
| [**orgRemoveTeamMember**](OrganizationApi.md#orgRemoveTeamMember) | **DELETE** /teams/{id}/members/{username} | Remove a team member |
| [**orgRemoveTeamRepository**](OrganizationApi.md#orgRemoveTeamRepository) | **DELETE** /teams/{id}/repos/{org}/{repo} | Remove a repository from a team |
| [**orgUnblockUser**](OrganizationApi.md#orgUnblockUser) | **PUT** /orgs/{org}/unblock/{username} | Unblock a user from the organization |
| [**teamSearch**](OrganizationApi.md#teamSearch) | **GET** /orgs/{org}/teams/search | Search for teams within an organization |


<a name="createOrgRepo"></a>
# **createOrgRepo**
> Repository createOrgRepo(org, body)

Create a repository in an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of organization | [default to null] |
| **body** | [**CreateRepoOption**](../Models/CreateRepoOption.md)|  | [optional] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="createOrgRepoDeprecated"></a>
# **createOrgRepoDeprecated**
> Repository createOrgRepoDeprecated(org, body)

Create a repository in an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of organization | [default to null] |
| **body** | [**CreateRepoOption**](../Models/CreateRepoOption.md)|  | [optional] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="orgAddTeamMember"></a>
# **orgAddTeamMember**
> orgAddTeamMember(id, username)

Add a team member

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the team | [default to null] |
| **username** | **String**| username of the user to add | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgAddTeamRepository"></a>
# **orgAddTeamRepository**
> orgAddTeamRepository(id, org, repo)

Add a repository to a team

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the team | [default to null] |
| **org** | **String**| organization that owns the repo to add | [default to null] |
| **repo** | **String**| name of the repo to add | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgBlockUser"></a>
# **orgBlockUser**
> orgBlockUser(org, username)

Blocks a user from the organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the org | [default to null] |
| **username** | **String**| username of the user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgConcealMember"></a>
# **orgConcealMember**
> orgConcealMember(org, username)

Conceal a user&#39;s membership

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **username** | **String**| username of the user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgCreate"></a>
# **orgCreate**
> Organization orgCreate(organization)

Create an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **organization** | [**CreateOrgOption**](../Models/CreateOrgOption.md)|  | |

### Return type

[**Organization**](../Models/Organization.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="orgCreateHook"></a>
# **orgCreateHook**
> Hook orgCreateHook(org, body)

Create a hook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **body** | [**CreateHookOption**](../Models/CreateHookOption.md)|  | |

### Return type

[**Hook**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="orgCreateLabel"></a>
# **orgCreateLabel**
> Label orgCreateLabel(org, body)

Create a label for an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **body** | [**CreateLabelOption**](../Models/CreateLabelOption.md)|  | [optional] |

### Return type

[**Label**](../Models/Label.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="orgCreateTeam"></a>
# **orgCreateTeam**
> Team orgCreateTeam(org, body)

Create a team

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **body** | [**CreateTeamOption**](../Models/CreateTeamOption.md)|  | [optional] |

### Return type

[**Team**](../Models/Team.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="orgDelete"></a>
# **orgDelete**
> orgDelete(org)

Delete an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| organization that is to be deleted | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgDeleteHook"></a>
# **orgDeleteHook**
> orgDeleteHook(org, id)

Delete a hook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **id** | **Long**| id of the hook to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgDeleteLabel"></a>
# **orgDeleteLabel**
> orgDeleteLabel(org, id)

Delete a label

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **id** | **Long**| id of the label to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgDeleteMember"></a>
# **orgDeleteMember**
> orgDeleteMember(org, username)

Remove a member from an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **username** | **String**| username of the user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgDeleteTeam"></a>
# **orgDeleteTeam**
> orgDeleteTeam(id)

Delete a team

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the team to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgEdit"></a>
# **orgEdit**
> Organization orgEdit(org, body)

Edit an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization to edit | [default to null] |
| **body** | [**EditOrgOption**](../Models/EditOrgOption.md)|  | |

### Return type

[**Organization**](../Models/Organization.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="orgEditHook"></a>
# **orgEditHook**
> Hook orgEditHook(org, id, body)

Update a hook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **id** | **Long**| id of the hook to update | [default to null] |
| **body** | [**EditHookOption**](../Models/EditHookOption.md)|  | [optional] |

### Return type

[**Hook**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="orgEditLabel"></a>
# **orgEditLabel**
> Label orgEditLabel(org, id, body)

Update a label

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **id** | **Long**| id of the label to edit | [default to null] |
| **body** | [**EditLabelOption**](../Models/EditLabelOption.md)|  | [optional] |

### Return type

[**Label**](../Models/Label.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="orgEditTeam"></a>
# **orgEditTeam**
> Team orgEditTeam(id, body)

Edit a team

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Integer**| id of the team to edit | [default to null] |
| **body** | [**EditTeamOption**](../Models/EditTeamOption.md)|  | [optional] |

### Return type

[**Team**](../Models/Team.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="orgGet"></a>
# **orgGet**
> Organization orgGet(org)

Get an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization to get | [default to null] |

### Return type

[**Organization**](../Models/Organization.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgGetAll"></a>
# **orgGetAll**
> List orgGetAll(page, limit)

Get list of organizations

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

<a name="orgGetHook"></a>
# **orgGetHook**
> Hook orgGetHook(org, id)

Get a hook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **id** | **Long**| id of the hook to get | [default to null] |

### Return type

[**Hook**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgGetLabel"></a>
# **orgGetLabel**
> Label orgGetLabel(org, id)

Get a single label

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **id** | **Long**| id of the label to get | [default to null] |

### Return type

[**Label**](../Models/Label.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgGetTeam"></a>
# **orgGetTeam**
> Team orgGetTeam(id)

Get a team

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the team to get | [default to null] |

### Return type

[**Team**](../Models/Team.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgGetUserPermissions"></a>
# **orgGetUserPermissions**
> OrganizationPermissions orgGetUserPermissions(username, org)

Get user permissions in organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **org** | **String**| name of the organization | [default to null] |

### Return type

[**OrganizationPermissions**](../Models/OrganizationPermissions.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgIsMember"></a>
# **orgIsMember**
> orgIsMember(org, username)

Check if a user is a member of an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **username** | **String**| username of the user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgIsPublicMember"></a>
# **orgIsPublicMember**
> orgIsPublicMember(org, username)

Check if a user is a public member of an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **username** | **String**| username of the user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgListActivityFeeds"></a>
# **orgListActivityFeeds**
> List orgListActivityFeeds(org, date, page, limit)

List an organization&#39;s activity feeds

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the org | [default to null] |
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

<a name="orgListBlockedUsers"></a>
# **orgListBlockedUsers**
> List orgListBlockedUsers(org, page, limit)

List the organization&#39;s blocked users

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the org | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/BlockedUser.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgListCurrentUserOrgs"></a>
# **orgListCurrentUserOrgs**
> List orgListCurrentUserOrgs(page, limit)

List the current user&#39;s organizations

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

<a name="orgListHooks"></a>
# **orgListHooks**
> List orgListHooks(org, page, limit)

List an organization&#39;s webhooks

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgListLabels"></a>
# **orgListLabels**
> List orgListLabels(org, page, limit)

List an organization&#39;s labels

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Label.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgListMembers"></a>
# **orgListMembers**
> List orgListMembers(org, page, limit)

List an organization&#39;s members

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgListPublicMembers"></a>
# **orgListPublicMembers**
> List orgListPublicMembers(org, page, limit)

List an organization&#39;s public members

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgListRepos"></a>
# **orgListRepos**
> List orgListRepos(org, page, limit)

List an organization&#39;s repos

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgListTeamActivityFeeds"></a>
# **orgListTeamActivityFeeds**
> List orgListTeamActivityFeeds(id, date, page, limit)

List a team&#39;s activity feeds

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the team | [default to null] |
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

<a name="orgListTeamMember"></a>
# **orgListTeamMember**
> User orgListTeamMember(id, username)

List a particular member of team

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the team | [default to null] |
| **username** | **String**| username of the member to list | [default to null] |

### Return type

[**User**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgListTeamMembers"></a>
# **orgListTeamMembers**
> List orgListTeamMembers(id, page, limit)

List a team&#39;s members

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the team | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgListTeamRepo"></a>
# **orgListTeamRepo**
> Repository orgListTeamRepo(id, org, repo)

List a particular repo of team

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the team | [default to null] |
| **org** | **String**| organization that owns the repo to list | [default to null] |
| **repo** | **String**| name of the repo to list | [default to null] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgListTeamRepos"></a>
# **orgListTeamRepos**
> List orgListTeamRepos(id, page, limit)

List a team&#39;s repos

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the team | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgListTeams"></a>
# **orgListTeams**
> List orgListTeams(org, page, limit)

List an organization&#39;s teams

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Team.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgListUserOrgs"></a>
# **orgListUserOrgs**
> List orgListUserOrgs(username, page, limit)

List a user&#39;s organizations

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **username** | **String**| username of user | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Organization.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="orgPublicizeMember"></a>
# **orgPublicizeMember**
> orgPublicizeMember(org, username)

Publicize a user&#39;s membership

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **username** | **String**| username of the user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgRemoveTeamMember"></a>
# **orgRemoveTeamMember**
> orgRemoveTeamMember(id, username)

Remove a team member

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the team | [default to null] |
| **username** | **String**| username of the user to remove | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgRemoveTeamRepository"></a>
# **orgRemoveTeamRepository**
> orgRemoveTeamRepository(id, org, repo)

Remove a repository from a team

    This does not delete the repository, it only removes the repository from the team.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the team | [default to null] |
| **org** | **String**| organization that owns the repo to remove | [default to null] |
| **repo** | **String**| name of the repo to remove | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="orgUnblockUser"></a>
# **orgUnblockUser**
> orgUnblockUser(org, username)

Unblock a user from the organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the org | [default to null] |
| **username** | **String**| username of the user | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="teamSearch"></a>
# **teamSearch**
> teamSearch_200_response teamSearch(org, q, include\_desc, page, limit)

Search for teams within an organization

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **org** | **String**| name of the organization | [default to null] |
| **q** | **String**| keywords to search | [optional] [default to null] |
| **include\_desc** | **Boolean**| include search within team description (defaults to true) | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**teamSearch_200_response**](../Models/teamSearch_200_response.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

