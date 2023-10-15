# MiscellaneousApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getGitignoreTemplateInfo**](MiscellaneousApi.md#getGitignoreTemplateInfo) | **GET** /gitignore/templates/{name} | Returns information about a gitignore template |
| [**getLabelTemplateInfo**](MiscellaneousApi.md#getLabelTemplateInfo) | **GET** /label/templates/{name} | Returns all labels in a template |
| [**getLicenseTemplateInfo**](MiscellaneousApi.md#getLicenseTemplateInfo) | **GET** /licenses/{name} | Returns information about a license template |
| [**getNodeInfo**](MiscellaneousApi.md#getNodeInfo) | **GET** /nodeinfo | Returns the nodeinfo of the Gitea application |
| [**getSigningKey**](MiscellaneousApi.md#getSigningKey) | **GET** /signing-key.gpg | Get default signing-key.gpg |
| [**getVersion**](MiscellaneousApi.md#getVersion) | **GET** /version | Returns the version of the Gitea application |
| [**listGitignoresTemplates**](MiscellaneousApi.md#listGitignoresTemplates) | **GET** /gitignore/templates | Returns a list of all gitignore templates |
| [**listLabelTemplates**](MiscellaneousApi.md#listLabelTemplates) | **GET** /label/templates | Returns a list of all label templates |
| [**listLicenseTemplates**](MiscellaneousApi.md#listLicenseTemplates) | **GET** /licenses | Returns a list of all license templates |
| [**renderMarkdown**](MiscellaneousApi.md#renderMarkdown) | **POST** /markdown | Render a markdown document as HTML |
| [**renderMarkdownRaw**](MiscellaneousApi.md#renderMarkdownRaw) | **POST** /markdown/raw | Render raw markdown as HTML |
| [**renderMarkup**](MiscellaneousApi.md#renderMarkup) | **POST** /markup | Render a markup document as HTML |


<a name="getGitignoreTemplateInfo"></a>
# **getGitignoreTemplateInfo**
> GitignoreTemplateInfo getGitignoreTemplateInfo(name)

Returns information about a gitignore template

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**| name of the template | [default to null] |

### Return type

[**GitignoreTemplateInfo**](../Models/GitignoreTemplateInfo.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLabelTemplateInfo"></a>
# **getLabelTemplateInfo**
> List getLabelTemplateInfo(name)

Returns all labels in a template

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**| name of the template | [default to null] |

### Return type

[**List**](../Models/LabelTemplate.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getLicenseTemplateInfo"></a>
# **getLicenseTemplateInfo**
> LicenseTemplateInfo getLicenseTemplateInfo(name)

Returns information about a license template

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **name** | **String**| name of the license | [default to null] |

### Return type

[**LicenseTemplateInfo**](../Models/LicenseTemplateInfo.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getNodeInfo"></a>
# **getNodeInfo**
> NodeInfo getNodeInfo()

Returns the nodeinfo of the Gitea application

### Parameters
This endpoint does not need any parameter.

### Return type

[**NodeInfo**](../Models/NodeInfo.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getSigningKey"></a>
# **getSigningKey**
> String getSigningKey()

Get default signing-key.gpg

### Parameters
This endpoint does not need any parameter.

### Return type

**String**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

<a name="getVersion"></a>
# **getVersion**
> ServerVersion getVersion()

Returns the version of the Gitea application

### Parameters
This endpoint does not need any parameter.

### Return type

[**ServerVersion**](../Models/ServerVersion.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listGitignoresTemplates"></a>
# **listGitignoresTemplates**
> List listGitignoresTemplates()

Returns a list of all gitignore templates

### Parameters
This endpoint does not need any parameter.

### Return type

**List**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listLabelTemplates"></a>
# **listLabelTemplates**
> List listLabelTemplates()

Returns a list of all label templates

### Parameters
This endpoint does not need any parameter.

### Return type

**List**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listLicenseTemplates"></a>
# **listLicenseTemplates**
> List listLicenseTemplates()

Returns a list of all license templates

### Parameters
This endpoint does not need any parameter.

### Return type

[**List**](../Models/LicensesTemplateListEntry.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="renderMarkdown"></a>
# **renderMarkdown**
> String renderMarkdown(body)

Render a markdown document as HTML

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**MarkdownOption**](../Models/MarkdownOption.md)|  | [optional] |

### Return type

**String**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/html

<a name="renderMarkdownRaw"></a>
# **renderMarkdownRaw**
> String renderMarkdownRaw(body)

Render raw markdown as HTML

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | **String**| Request body to render | |

### Return type

**String**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: text/plain
- **Accept**: text/html

<a name="renderMarkup"></a>
# **renderMarkup**
> String renderMarkup(body)

Render a markup document as HTML

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**MarkupOption**](../Models/MarkupOption.md)|  | [optional] |

### Return type

**String**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: text/html

