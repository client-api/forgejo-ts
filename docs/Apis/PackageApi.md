# PackageApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**deletePackage**](PackageApi.md#deletePackage) | **DELETE** /packages/{owner}/{type}/{name}/{version} | Delete a package |
| [**getPackage**](PackageApi.md#getPackage) | **GET** /packages/{owner}/{type}/{name}/{version} | Gets a package |
| [**listPackageFiles**](PackageApi.md#listPackageFiles) | **GET** /packages/{owner}/{type}/{name}/{version}/files | Gets all files of a package |
| [**listPackages**](PackageApi.md#listPackages) | **GET** /packages/{owner} | Gets all packages of an owner |


<a name="deletePackage"></a>
# **deletePackage**
> deletePackage(owner, type, name, version)

Delete a package

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the package | [default to null] |
| **type** | **String**| type of the package | [default to null] |
| **name** | **String**| name of the package | [default to null] |
| **version** | **String**| version of the package | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="getPackage"></a>
# **getPackage**
> Package getPackage(owner, type, name, version)

Gets a package

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the package | [default to null] |
| **type** | **String**| type of the package | [default to null] |
| **name** | **String**| name of the package | [default to null] |
| **version** | **String**| version of the package | [default to null] |

### Return type

[**Package**](../Models/Package.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listPackageFiles"></a>
# **listPackageFiles**
> List listPackageFiles(owner, type, name, version)

Gets all files of a package

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the package | [default to null] |
| **type** | **String**| type of the package | [default to null] |
| **name** | **String**| name of the package | [default to null] |
| **version** | **String**| version of the package | [default to null] |

### Return type

[**List**](../Models/PackageFile.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listPackages"></a>
# **listPackages**
> List listPackages(owner, page, limit, type, q)

Gets all packages of an owner

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the packages | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |
| **type** | **String**| package type filter | [optional] [default to null] [enum: alpine, cargo, chef, composer, conan, conda, container, cran, debian, generic, go, helm, maven, npm, nuget, pub, pypi, rpm, rubygems, swift, vagrant] |
| **q** | **String**| name filter | [optional] [default to null] |

### Return type

[**List**](../Models/Package.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

