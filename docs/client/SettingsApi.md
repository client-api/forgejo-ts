# SettingsApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getGeneralAPISettings**](SettingsApi.md#getGeneralAPISettings) | **GET** /settings/api | Get instance&#39;s global settings for api |
| [**getGeneralAttachmentSettings**](SettingsApi.md#getGeneralAttachmentSettings) | **GET** /settings/attachment | Get instance&#39;s global settings for Attachment |
| [**getGeneralRepositorySettings**](SettingsApi.md#getGeneralRepositorySettings) | **GET** /settings/repository | Get instance&#39;s global settings for repositories |
| [**getGeneralUISettings**](SettingsApi.md#getGeneralUISettings) | **GET** /settings/ui | Get instance&#39;s global settings for ui |


<a name="getGeneralAPISettings"></a>
# **getGeneralAPISettings**
> GeneralAPISettings getGeneralAPISettings()

Get instance&#39;s global settings for api

### Parameters
This endpoint does not need any parameter.

### Return type

[**GeneralAPISettings**](../models/GeneralAPISettings.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getGeneralAttachmentSettings"></a>
# **getGeneralAttachmentSettings**
> GeneralAttachmentSettings getGeneralAttachmentSettings()

Get instance&#39;s global settings for Attachment

### Parameters
This endpoint does not need any parameter.

### Return type

[**GeneralAttachmentSettings**](../models/GeneralAttachmentSettings.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getGeneralRepositorySettings"></a>
# **getGeneralRepositorySettings**
> GeneralRepoSettings getGeneralRepositorySettings()

Get instance&#39;s global settings for repositories

### Parameters
This endpoint does not need any parameter.

### Return type

[**GeneralRepoSettings**](../models/GeneralRepoSettings.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getGeneralUISettings"></a>
# **getGeneralUISettings**
> GeneralUISettings getGeneralUISettings()

Get instance&#39;s global settings for ui

### Parameters
This endpoint does not need any parameter.

### Return type

[**GeneralUISettings**](../models/GeneralUISettings.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

