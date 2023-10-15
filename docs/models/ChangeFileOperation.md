# ChangeFileOperation
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **operation** | **String** | indicates what to do with the file | [default to null] |
| **path** | **String** | path to the existing or new file | [default to null] |
| **content** | **String** | new or updated file content, must be base64 encoded | [optional] [default to null] |
| **from\_path** | **String** | old path of the file to move | [optional] [default to null] |
| **sha** | **String** | sha is the SHA for the file that already exists, required for update or delete | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

