# UpdateFileOptions
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **author** | [**Identity**](Identity.md) |  | [optional] [default to null] |
| **branch** | **String** | branch (optional) to base this file from. if not given, the default branch is used | [optional] [default to null] |
| **committer** | [**Identity**](Identity.md) |  | [optional] [default to null] |
| **content** | **String** | content must be base64 encoded | [default to null] |
| **dates** | [**CommitDateOptions**](CommitDateOptions.md) |  | [optional] [default to null] |
| **from\_path** | **String** | from_path (optional) is the path of the original file which will be moved/renamed to the path in the URL | [optional] [default to null] |
| **message** | **String** | message (optional) for the commit of this file. if not supplied, a default message will be used | [optional] [default to null] |
| **new\_branch** | **String** | new_branch (optional) will make a new branch from &#x60;branch&#x60; before creating the file | [optional] [default to null] |
| **sha** | **String** | sha is the SHA for the file that already exists | [default to null] |
| **signoff** | **Boolean** | Add a Signed-off-by trailer by the committer at the end of the commit log message. | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

