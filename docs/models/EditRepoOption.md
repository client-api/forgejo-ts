# EditRepoOption
## Properties

| Name | Type | Description | Notes |
|------------ | ------------- | ------------- | -------------|
| **allow\_manual\_merge** | **Boolean** | either &#x60;true&#x60; to allow mark pr as merged manually, or &#x60;false&#x60; to prevent it. | [optional] [default to null] |
| **allow\_merge\_commits** | **Boolean** | either &#x60;true&#x60; to allow merging pull requests with a merge commit, or &#x60;false&#x60; to prevent merging pull requests with merge commits. | [optional] [default to null] |
| **allow\_rebase** | **Boolean** | either &#x60;true&#x60; to allow rebase-merging pull requests, or &#x60;false&#x60; to prevent rebase-merging. | [optional] [default to null] |
| **allow\_rebase\_explicit** | **Boolean** | either &#x60;true&#x60; to allow rebase with explicit merge commits (--no-ff), or &#x60;false&#x60; to prevent rebase with explicit merge commits. | [optional] [default to null] |
| **allow\_rebase\_update** | **Boolean** | either &#x60;true&#x60; to allow updating pull request branch by rebase, or &#x60;false&#x60; to prevent it. | [optional] [default to null] |
| **allow\_squash\_merge** | **Boolean** | either &#x60;true&#x60; to allow squash-merging pull requests, or &#x60;false&#x60; to prevent squash-merging. | [optional] [default to null] |
| **archived** | **Boolean** | set to &#x60;true&#x60; to archive this repository. | [optional] [default to null] |
| **autodetect\_manual\_merge** | **Boolean** | either &#x60;true&#x60; to enable AutodetectManualMerge, or &#x60;false&#x60; to prevent it. Note: In some special cases, misjudgments can occur. | [optional] [default to null] |
| **default\_allow\_maintainer\_edit** | **Boolean** | set to &#x60;true&#x60; to allow edits from maintainers by default | [optional] [default to null] |
| **default\_branch** | **String** | sets the default branch for this repository. | [optional] [default to null] |
| **default\_delete\_branch\_after\_merge** | **Boolean** | set to &#x60;true&#x60; to delete pr branch after merge by default | [optional] [default to null] |
| **default\_merge\_style** | **String** | set to a merge style to be used by this repository: \&quot;merge\&quot;, \&quot;rebase\&quot;, \&quot;rebase-merge\&quot;, or \&quot;squash\&quot;. | [optional] [default to null] |
| **description** | **String** | a short description of the repository. | [optional] [default to null] |
| **enable\_prune** | **Boolean** | enable prune - remove obsolete remote-tracking references | [optional] [default to null] |
| **external\_tracker** | [**ExternalTracker**](ExternalTracker.md) |  | [optional] [default to null] |
| **external\_wiki** | [**ExternalWiki**](ExternalWiki.md) |  | [optional] [default to null] |
| **has\_actions** | **Boolean** | either &#x60;true&#x60; to enable actions unit, or &#x60;false&#x60; to disable them. | [optional] [default to null] |
| **has\_issues** | **Boolean** | either &#x60;true&#x60; to enable issues for this repository or &#x60;false&#x60; to disable them. | [optional] [default to null] |
| **has\_packages** | **Boolean** | either &#x60;true&#x60; to enable packages unit, or &#x60;false&#x60; to disable them. | [optional] [default to null] |
| **has\_projects** | **Boolean** | either &#x60;true&#x60; to enable project unit, or &#x60;false&#x60; to disable them. | [optional] [default to null] |
| **has\_pull\_requests** | **Boolean** | either &#x60;true&#x60; to allow pull requests, or &#x60;false&#x60; to prevent pull request. | [optional] [default to null] |
| **has\_releases** | **Boolean** | either &#x60;true&#x60; to enable releases unit, or &#x60;false&#x60; to disable them. | [optional] [default to null] |
| **has\_wiki** | **Boolean** | either &#x60;true&#x60; to enable the wiki for this repository or &#x60;false&#x60; to disable it. | [optional] [default to null] |
| **ignore\_whitespace\_conflicts** | **Boolean** | either &#x60;true&#x60; to ignore whitespace for conflicts, or &#x60;false&#x60; to not ignore whitespace. | [optional] [default to null] |
| **internal\_tracker** | [**InternalTracker**](InternalTracker.md) |  | [optional] [default to null] |
| **mirror\_interval** | **String** | set to a string like &#x60;8h30m0s&#x60; to set the mirror interval time | [optional] [default to null] |
| **name** | **String** | name of the repository | [optional] [default to null] |
| **private** | **Boolean** | either &#x60;true&#x60; to make the repository private or &#x60;false&#x60; to make it public. Note: you will get a 422 error if the organization restricts changing repository visibility to organization owners and a non-owner tries to change the value of private. | [optional] [default to null] |
| **template** | **Boolean** | either &#x60;true&#x60; to make this repository a template or &#x60;false&#x60; to make it a normal repository | [optional] [default to null] |
| **website** | **String** | a URL with more information about the repository. | [optional] [default to null] |

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

