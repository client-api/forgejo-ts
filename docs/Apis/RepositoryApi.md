# RepositoryApi

All URIs are relative to */api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**acceptRepoTransfer**](RepositoryApi.md#acceptRepoTransfer) | **POST** /repos/{owner}/{repo}/transfer/accept | Accept a repo transfer |
| [**createCurrentUserRepo**](RepositoryApi.md#createCurrentUserRepo) | **POST** /user/repos | Create a repository |
| [**createFork**](RepositoryApi.md#createFork) | **POST** /repos/{owner}/{repo}/forks | Fork a repository |
| [**generateRepo**](RepositoryApi.md#generateRepo) | **POST** /repos/{template_owner}/{template_repo}/generate | Create a repository using a template |
| [**getAnnotatedTag**](RepositoryApi.md#getAnnotatedTag) | **GET** /repos/{owner}/{repo}/git/tags/{sha} | Gets the tag object of an annotated tag (not lightweight tags) |
| [**getBlob**](RepositoryApi.md#getBlob) | **GET** /repos/{owner}/{repo}/git/blobs/{sha} | Gets the blob of a repository. |
| [**getTree**](RepositoryApi.md#getTree) | **GET** /repos/{owner}/{repo}/git/trees/{sha} | Gets the tree of a repository. |
| [**listForks**](RepositoryApi.md#listForks) | **GET** /repos/{owner}/{repo}/forks | List a repository&#39;s forks |
| [**rejectRepoTransfer**](RepositoryApi.md#rejectRepoTransfer) | **POST** /repos/{owner}/{repo}/transfer/reject | Reject a repo transfer |
| [**repoAddCollaborator**](RepositoryApi.md#repoAddCollaborator) | **PUT** /repos/{owner}/{repo}/collaborators/{collaborator} | Add a collaborator to a repository |
| [**repoAddPushMirror**](RepositoryApi.md#repoAddPushMirror) | **POST** /repos/{owner}/{repo}/push_mirrors | add a push mirror to the repository |
| [**repoAddTeam**](RepositoryApi.md#repoAddTeam) | **PUT** /repos/{owner}/{repo}/teams/{team} | Add a team to a repository |
| [**repoAddTopic**](RepositoryApi.md#repoAddTopic) | **PUT** /repos/{owner}/{repo}/topics/{topic} | Add a topic to a repository |
| [**repoApplyDiffPatch**](RepositoryApi.md#repoApplyDiffPatch) | **POST** /repos/{owner}/{repo}/diffpatch | Apply diff patch to repository |
| [**repoCancelScheduledAutoMerge**](RepositoryApi.md#repoCancelScheduledAutoMerge) | **DELETE** /repos/{owner}/{repo}/pulls/{index}/merge | Cancel the scheduled auto merge for the given pull request |
| [**repoChangeFiles**](RepositoryApi.md#repoChangeFiles) | **POST** /repos/{owner}/{repo}/contents | Modify multiple files in a repository |
| [**repoCheckCollaborator**](RepositoryApi.md#repoCheckCollaborator) | **GET** /repos/{owner}/{repo}/collaborators/{collaborator} | Check if a user is a collaborator of a repository |
| [**repoCheckTeam**](RepositoryApi.md#repoCheckTeam) | **GET** /repos/{owner}/{repo}/teams/{team} | Check if a team is assigned to a repository |
| [**repoCreateBranch**](RepositoryApi.md#repoCreateBranch) | **POST** /repos/{owner}/{repo}/branches | Create a branch |
| [**repoCreateBranchProtection**](RepositoryApi.md#repoCreateBranchProtection) | **POST** /repos/{owner}/{repo}/branch_protections | Create a branch protections for a repository |
| [**repoCreateFile**](RepositoryApi.md#repoCreateFile) | **POST** /repos/{owner}/{repo}/contents/{filepath} | Create a file in a repository |
| [**repoCreateHook**](RepositoryApi.md#repoCreateHook) | **POST** /repos/{owner}/{repo}/hooks | Create a hook |
| [**repoCreateKey**](RepositoryApi.md#repoCreateKey) | **POST** /repos/{owner}/{repo}/keys | Add a key to a repository |
| [**repoCreatePullRequest**](RepositoryApi.md#repoCreatePullRequest) | **POST** /repos/{owner}/{repo}/pulls | Create a pull request |
| [**repoCreatePullReview**](RepositoryApi.md#repoCreatePullReview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews | Create a review to an pull request |
| [**repoCreatePullReviewRequests**](RepositoryApi.md#repoCreatePullReviewRequests) | **POST** /repos/{owner}/{repo}/pulls/{index}/requested_reviewers | create review requests for a pull request |
| [**repoCreateRelease**](RepositoryApi.md#repoCreateRelease) | **POST** /repos/{owner}/{repo}/releases | Create a release |
| [**repoCreateReleaseAttachment**](RepositoryApi.md#repoCreateReleaseAttachment) | **POST** /repos/{owner}/{repo}/releases/{id}/assets | Create a release attachment |
| [**repoCreateStatus**](RepositoryApi.md#repoCreateStatus) | **POST** /repos/{owner}/{repo}/statuses/{sha} | Create a commit status |
| [**repoCreateTag**](RepositoryApi.md#repoCreateTag) | **POST** /repos/{owner}/{repo}/tags | Create a new git tag in a repository |
| [**repoCreateWikiPage**](RepositoryApi.md#repoCreateWikiPage) | **POST** /repos/{owner}/{repo}/wiki/new | Create a wiki page |
| [**repoDelete**](RepositoryApi.md#repoDelete) | **DELETE** /repos/{owner}/{repo} | Delete a repository |
| [**repoDeleteBranch**](RepositoryApi.md#repoDeleteBranch) | **DELETE** /repos/{owner}/{repo}/branches/{branch} | Delete a specific branch from a repository |
| [**repoDeleteBranchProtection**](RepositoryApi.md#repoDeleteBranchProtection) | **DELETE** /repos/{owner}/{repo}/branch_protections/{name} | Delete a specific branch protection for the repository |
| [**repoDeleteCollaborator**](RepositoryApi.md#repoDeleteCollaborator) | **DELETE** /repos/{owner}/{repo}/collaborators/{collaborator} | Delete a collaborator from a repository |
| [**repoDeleteFile**](RepositoryApi.md#repoDeleteFile) | **DELETE** /repos/{owner}/{repo}/contents/{filepath} | Delete a file in a repository |
| [**repoDeleteGitHook**](RepositoryApi.md#repoDeleteGitHook) | **DELETE** /repos/{owner}/{repo}/hooks/git/{id} | Delete a Git hook in a repository |
| [**repoDeleteHook**](RepositoryApi.md#repoDeleteHook) | **DELETE** /repos/{owner}/{repo}/hooks/{id} | Delete a hook in a repository |
| [**repoDeleteKey**](RepositoryApi.md#repoDeleteKey) | **DELETE** /repos/{owner}/{repo}/keys/{id} | Delete a key from a repository |
| [**repoDeletePullReview**](RepositoryApi.md#repoDeletePullReview) | **DELETE** /repos/{owner}/{repo}/pulls/{index}/reviews/{id} | Delete a specific review from a pull request |
| [**repoDeletePullReviewRequests**](RepositoryApi.md#repoDeletePullReviewRequests) | **DELETE** /repos/{owner}/{repo}/pulls/{index}/requested_reviewers | cancel review requests for a pull request |
| [**repoDeletePushMirror**](RepositoryApi.md#repoDeletePushMirror) | **DELETE** /repos/{owner}/{repo}/push_mirrors/{name} | deletes a push mirror from a repository by remoteName |
| [**repoDeleteRelease**](RepositoryApi.md#repoDeleteRelease) | **DELETE** /repos/{owner}/{repo}/releases/{id} | Delete a release |
| [**repoDeleteReleaseAttachment**](RepositoryApi.md#repoDeleteReleaseAttachment) | **DELETE** /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id} | Delete a release attachment |
| [**repoDeleteReleaseByTag**](RepositoryApi.md#repoDeleteReleaseByTag) | **DELETE** /repos/{owner}/{repo}/releases/tags/{tag} | Delete a release by tag name |
| [**repoDeleteTag**](RepositoryApi.md#repoDeleteTag) | **DELETE** /repos/{owner}/{repo}/tags/{tag} | Delete a repository&#39;s tag by name |
| [**repoDeleteTeam**](RepositoryApi.md#repoDeleteTeam) | **DELETE** /repos/{owner}/{repo}/teams/{team} | Delete a team from a repository |
| [**repoDeleteTopic**](RepositoryApi.md#repoDeleteTopic) | **DELETE** /repos/{owner}/{repo}/topics/{topic} | Delete a topic from a repository |
| [**repoDeleteWikiPage**](RepositoryApi.md#repoDeleteWikiPage) | **DELETE** /repos/{owner}/{repo}/wiki/page/{pageName} | Delete a wiki page |
| [**repoDismissPullReview**](RepositoryApi.md#repoDismissPullReview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals | Dismiss a review for a pull request |
| [**repoDownloadCommitDiffOrPatch**](RepositoryApi.md#repoDownloadCommitDiffOrPatch) | **GET** /repos/{owner}/{repo}/git/commits/{sha}.{diffType} | Get a commit&#39;s diff or patch |
| [**repoDownloadPullDiffOrPatch**](RepositoryApi.md#repoDownloadPullDiffOrPatch) | **GET** /repos/{owner}/{repo}/pulls/{index}.{diffType} | Get a pull request diff or patch |
| [**repoEdit**](RepositoryApi.md#repoEdit) | **PATCH** /repos/{owner}/{repo} | Edit a repository&#39;s properties. Only fields that are set will be changed. |
| [**repoEditBranchProtection**](RepositoryApi.md#repoEditBranchProtection) | **PATCH** /repos/{owner}/{repo}/branch_protections/{name} | Edit a branch protections for a repository. Only fields that are set will be changed |
| [**repoEditGitHook**](RepositoryApi.md#repoEditGitHook) | **PATCH** /repos/{owner}/{repo}/hooks/git/{id} | Edit a Git hook in a repository |
| [**repoEditHook**](RepositoryApi.md#repoEditHook) | **PATCH** /repos/{owner}/{repo}/hooks/{id} | Edit a hook in a repository |
| [**repoEditPullRequest**](RepositoryApi.md#repoEditPullRequest) | **PATCH** /repos/{owner}/{repo}/pulls/{index} | Update a pull request. If using deadline only the date will be taken into account, and time of day ignored. |
| [**repoEditRelease**](RepositoryApi.md#repoEditRelease) | **PATCH** /repos/{owner}/{repo}/releases/{id} | Update a release |
| [**repoEditReleaseAttachment**](RepositoryApi.md#repoEditReleaseAttachment) | **PATCH** /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id} | Edit a release attachment |
| [**repoEditWikiPage**](RepositoryApi.md#repoEditWikiPage) | **PATCH** /repos/{owner}/{repo}/wiki/page/{pageName} | Edit a wiki page |
| [**repoGet**](RepositoryApi.md#repoGet) | **GET** /repos/{owner}/{repo} | Get a repository |
| [**repoGetAllCommits**](RepositoryApi.md#repoGetAllCommits) | **GET** /repos/{owner}/{repo}/commits | Get a list of all commits from a repository |
| [**repoGetArchive**](RepositoryApi.md#repoGetArchive) | **GET** /repos/{owner}/{repo}/archive/{archive} | Get an archive of a repository |
| [**repoGetAssignees**](RepositoryApi.md#repoGetAssignees) | **GET** /repos/{owner}/{repo}/assignees | Return all users that have write access and can be assigned to issues |
| [**repoGetBranch**](RepositoryApi.md#repoGetBranch) | **GET** /repos/{owner}/{repo}/branches/{branch} | Retrieve a specific branch from a repository, including its effective branch protection |
| [**repoGetBranchProtection**](RepositoryApi.md#repoGetBranchProtection) | **GET** /repos/{owner}/{repo}/branch_protections/{name} | Get a specific branch protection for the repository |
| [**repoGetByID**](RepositoryApi.md#repoGetByID) | **GET** /repositories/{id} | Get a repository by id |
| [**repoGetCombinedStatusByRef**](RepositoryApi.md#repoGetCombinedStatusByRef) | **GET** /repos/{owner}/{repo}/commits/{ref}/status | Get a commit&#39;s combined status, by branch/tag/commit reference |
| [**repoGetContents**](RepositoryApi.md#repoGetContents) | **GET** /repos/{owner}/{repo}/contents/{filepath} | Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir |
| [**repoGetContentsList**](RepositoryApi.md#repoGetContentsList) | **GET** /repos/{owner}/{repo}/contents | Gets the metadata of all the entries of the root dir |
| [**repoGetEditorConfig**](RepositoryApi.md#repoGetEditorConfig) | **GET** /repos/{owner}/{repo}/editorconfig/{filepath} | Get the EditorConfig definitions of a file in a repository |
| [**repoGetGitHook**](RepositoryApi.md#repoGetGitHook) | **GET** /repos/{owner}/{repo}/hooks/git/{id} | Get a Git hook |
| [**repoGetHook**](RepositoryApi.md#repoGetHook) | **GET** /repos/{owner}/{repo}/hooks/{id} | Get a hook |
| [**repoGetIssueConfig**](RepositoryApi.md#repoGetIssueConfig) | **GET** /repos/{owner}/{repo}/issue_config | Returns the issue config for a repo |
| [**repoGetIssueTemplates**](RepositoryApi.md#repoGetIssueTemplates) | **GET** /repos/{owner}/{repo}/issue_templates | Get available issue templates for a repository |
| [**repoGetKey**](RepositoryApi.md#repoGetKey) | **GET** /repos/{owner}/{repo}/keys/{id} | Get a repository&#39;s key by id |
| [**repoGetLanguages**](RepositoryApi.md#repoGetLanguages) | **GET** /repos/{owner}/{repo}/languages | Get languages and number of bytes of code written |
| [**repoGetLatestRelease**](RepositoryApi.md#repoGetLatestRelease) | **GET** /repos/{owner}/{repo}/releases/latest | Gets the most recent non-prerelease, non-draft release of a repository, sorted by created_at |
| [**repoGetNote**](RepositoryApi.md#repoGetNote) | **GET** /repos/{owner}/{repo}/git/notes/{sha} | Get a note corresponding to a single commit from a repository |
| [**repoGetPullRequest**](RepositoryApi.md#repoGetPullRequest) | **GET** /repos/{owner}/{repo}/pulls/{index} | Get a pull request |
| [**repoGetPullRequestCommits**](RepositoryApi.md#repoGetPullRequestCommits) | **GET** /repos/{owner}/{repo}/pulls/{index}/commits | Get commits for a pull request |
| [**repoGetPullRequestFiles**](RepositoryApi.md#repoGetPullRequestFiles) | **GET** /repos/{owner}/{repo}/pulls/{index}/files | Get changed files for a pull request |
| [**repoGetPullReview**](RepositoryApi.md#repoGetPullReview) | **GET** /repos/{owner}/{repo}/pulls/{index}/reviews/{id} | Get a specific review for a pull request |
| [**repoGetPullReviewComments**](RepositoryApi.md#repoGetPullReviewComments) | **GET** /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments | Get a specific review for a pull request |
| [**repoGetPushMirrorByRemoteName**](RepositoryApi.md#repoGetPushMirrorByRemoteName) | **GET** /repos/{owner}/{repo}/push_mirrors/{name} | Get push mirror of the repository by remoteName |
| [**repoGetRawFile**](RepositoryApi.md#repoGetRawFile) | **GET** /repos/{owner}/{repo}/raw/{filepath} | Get a file from a repository |
| [**repoGetRawFileOrLFS**](RepositoryApi.md#repoGetRawFileOrLFS) | **GET** /repos/{owner}/{repo}/media/{filepath} | Get a file or it&#39;s LFS object from a repository |
| [**repoGetRelease**](RepositoryApi.md#repoGetRelease) | **GET** /repos/{owner}/{repo}/releases/{id} | Get a release |
| [**repoGetReleaseAttachment**](RepositoryApi.md#repoGetReleaseAttachment) | **GET** /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id} | Get a release attachment |
| [**repoGetReleaseByTag**](RepositoryApi.md#repoGetReleaseByTag) | **GET** /repos/{owner}/{repo}/releases/tags/{tag} | Get a release by tag name |
| [**repoGetRepoPermissions**](RepositoryApi.md#repoGetRepoPermissions) | **GET** /repos/{owner}/{repo}/collaborators/{collaborator}/permission | Get repository permissions for a user |
| [**repoGetReviewers**](RepositoryApi.md#repoGetReviewers) | **GET** /repos/{owner}/{repo}/reviewers | Return all users that can be requested to review in this repo |
| [**repoGetSingleCommit**](RepositoryApi.md#repoGetSingleCommit) | **GET** /repos/{owner}/{repo}/git/commits/{sha} | Get a single commit from a repository |
| [**repoGetTag**](RepositoryApi.md#repoGetTag) | **GET** /repos/{owner}/{repo}/tags/{tag} | Get the tag of a repository by tag name |
| [**repoGetWikiPage**](RepositoryApi.md#repoGetWikiPage) | **GET** /repos/{owner}/{repo}/wiki/page/{pageName} | Get a wiki page |
| [**repoGetWikiPageRevisions**](RepositoryApi.md#repoGetWikiPageRevisions) | **GET** /repos/{owner}/{repo}/wiki/revisions/{pageName} | Get revisions of a wiki page |
| [**repoGetWikiPages**](RepositoryApi.md#repoGetWikiPages) | **GET** /repos/{owner}/{repo}/wiki/pages | Get all wiki pages |
| [**repoListActivityFeeds**](RepositoryApi.md#repoListActivityFeeds) | **GET** /repos/{owner}/{repo}/activities/feeds | List a repository&#39;s activity feeds |
| [**repoListAllGitRefs**](RepositoryApi.md#repoListAllGitRefs) | **GET** /repos/{owner}/{repo}/git/refs | Get specified ref or filtered repository&#39;s refs |
| [**repoListBranchProtection**](RepositoryApi.md#repoListBranchProtection) | **GET** /repos/{owner}/{repo}/branch_protections | List branch protections for a repository |
| [**repoListBranches**](RepositoryApi.md#repoListBranches) | **GET** /repos/{owner}/{repo}/branches | List a repository&#39;s branches |
| [**repoListCollaborators**](RepositoryApi.md#repoListCollaborators) | **GET** /repos/{owner}/{repo}/collaborators | List a repository&#39;s collaborators |
| [**repoListGitHooks**](RepositoryApi.md#repoListGitHooks) | **GET** /repos/{owner}/{repo}/hooks/git | List the Git hooks in a repository |
| [**repoListGitRefs**](RepositoryApi.md#repoListGitRefs) | **GET** /repos/{owner}/{repo}/git/refs/{ref} | Get specified ref or filtered repository&#39;s refs |
| [**repoListHooks**](RepositoryApi.md#repoListHooks) | **GET** /repos/{owner}/{repo}/hooks | List the hooks in a repository |
| [**repoListKeys**](RepositoryApi.md#repoListKeys) | **GET** /repos/{owner}/{repo}/keys | List a repository&#39;s keys |
| [**repoListPinnedIssues**](RepositoryApi.md#repoListPinnedIssues) | **GET** /repos/{owner}/{repo}/issues/pinned | List a repo&#39;s pinned issues |
| [**repoListPinnedPullRequests**](RepositoryApi.md#repoListPinnedPullRequests) | **GET** /repos/{owner}/{repo}/pulls/pinned | List a repo&#39;s pinned pull requests |
| [**repoListPullRequests**](RepositoryApi.md#repoListPullRequests) | **GET** /repos/{owner}/{repo}/pulls | List a repo&#39;s pull requests |
| [**repoListPullReviews**](RepositoryApi.md#repoListPullReviews) | **GET** /repos/{owner}/{repo}/pulls/{index}/reviews | List all reviews for a pull request |
| [**repoListPushMirrors**](RepositoryApi.md#repoListPushMirrors) | **GET** /repos/{owner}/{repo}/push_mirrors | Get all push mirrors of the repository |
| [**repoListReleaseAttachments**](RepositoryApi.md#repoListReleaseAttachments) | **GET** /repos/{owner}/{repo}/releases/{id}/assets | List release&#39;s attachments |
| [**repoListReleases**](RepositoryApi.md#repoListReleases) | **GET** /repos/{owner}/{repo}/releases | List a repo&#39;s releases |
| [**repoListStargazers**](RepositoryApi.md#repoListStargazers) | **GET** /repos/{owner}/{repo}/stargazers | List a repo&#39;s stargazers |
| [**repoListStatuses**](RepositoryApi.md#repoListStatuses) | **GET** /repos/{owner}/{repo}/statuses/{sha} | Get a commit&#39;s statuses |
| [**repoListStatusesByRef**](RepositoryApi.md#repoListStatusesByRef) | **GET** /repos/{owner}/{repo}/commits/{ref}/statuses | Get a commit&#39;s statuses, by branch/tag/commit reference |
| [**repoListSubscribers**](RepositoryApi.md#repoListSubscribers) | **GET** /repos/{owner}/{repo}/subscribers | List a repo&#39;s watchers |
| [**repoListTags**](RepositoryApi.md#repoListTags) | **GET** /repos/{owner}/{repo}/tags | List a repository&#39;s tags |
| [**repoListTeams**](RepositoryApi.md#repoListTeams) | **GET** /repos/{owner}/{repo}/teams | List a repository&#39;s teams |
| [**repoListTopics**](RepositoryApi.md#repoListTopics) | **GET** /repos/{owner}/{repo}/topics | Get list of topics that a repository has |
| [**repoMergePullRequest**](RepositoryApi.md#repoMergePullRequest) | **POST** /repos/{owner}/{repo}/pulls/{index}/merge | Merge a pull request |
| [**repoMigrate**](RepositoryApi.md#repoMigrate) | **POST** /repos/migrate | Migrate a remote git repository |
| [**repoMirrorSync**](RepositoryApi.md#repoMirrorSync) | **POST** /repos/{owner}/{repo}/mirror-sync | Sync a mirrored repository |
| [**repoNewPinAllowed**](RepositoryApi.md#repoNewPinAllowed) | **GET** /repos/{owner}/{repo}/new_pin_allowed | Returns if new Issue Pins are allowed |
| [**repoPullRequestIsMerged**](RepositoryApi.md#repoPullRequestIsMerged) | **GET** /repos/{owner}/{repo}/pulls/{index}/merge | Check if a pull request has been merged |
| [**repoPushMirrorSync**](RepositoryApi.md#repoPushMirrorSync) | **POST** /repos/{owner}/{repo}/push_mirrors-sync | Sync all push mirrored repository |
| [**repoSearch**](RepositoryApi.md#repoSearch) | **GET** /repos/search | Search for repositories |
| [**repoSigningKey**](RepositoryApi.md#repoSigningKey) | **GET** /repos/{owner}/{repo}/signing-key.gpg | Get signing-key.gpg for given repository |
| [**repoSubmitPullReview**](RepositoryApi.md#repoSubmitPullReview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews/{id} | Submit a pending review to an pull request |
| [**repoTestHook**](RepositoryApi.md#repoTestHook) | **POST** /repos/{owner}/{repo}/hooks/{id}/tests | Test a push webhook |
| [**repoTrackedTimes**](RepositoryApi.md#repoTrackedTimes) | **GET** /repos/{owner}/{repo}/times | List a repo&#39;s tracked times |
| [**repoTransfer**](RepositoryApi.md#repoTransfer) | **POST** /repos/{owner}/{repo}/transfer | Transfer a repo ownership |
| [**repoUnDismissPullReview**](RepositoryApi.md#repoUnDismissPullReview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals | Cancel to dismiss a review for a pull request |
| [**repoUpdateFile**](RepositoryApi.md#repoUpdateFile) | **PUT** /repos/{owner}/{repo}/contents/{filepath} | Update a file in a repository |
| [**repoUpdatePullRequest**](RepositoryApi.md#repoUpdatePullRequest) | **POST** /repos/{owner}/{repo}/pulls/{index}/update | Merge PR&#39;s baseBranch into headBranch |
| [**repoUpdateTopics**](RepositoryApi.md#repoUpdateTopics) | **PUT** /repos/{owner}/{repo}/topics | Replace list of topics for a repository |
| [**repoValidateIssueConfig**](RepositoryApi.md#repoValidateIssueConfig) | **GET** /repos/{owner}/{repo}/issue_config/validate | Returns the validation information for a issue config |
| [**topicSearch**](RepositoryApi.md#topicSearch) | **GET** /topics/search | search topics via keyword |
| [**userCurrentCheckSubscription**](RepositoryApi.md#userCurrentCheckSubscription) | **GET** /repos/{owner}/{repo}/subscription | Check if the current user is watching a repo |
| [**userCurrentDeleteSubscription**](RepositoryApi.md#userCurrentDeleteSubscription) | **DELETE** /repos/{owner}/{repo}/subscription | Unwatch a repo |
| [**userCurrentPutSubscription**](RepositoryApi.md#userCurrentPutSubscription) | **PUT** /repos/{owner}/{repo}/subscription | Watch a repo |
| [**userTrackedTimes**](RepositoryApi.md#userTrackedTimes) | **GET** /repos/{owner}/{repo}/times/{user} | List a user&#39;s tracked times in a repo |


<a name="acceptRepoTransfer"></a>
# **acceptRepoTransfer**
> Repository acceptRepoTransfer(owner, repo)

Accept a repo transfer

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo to transfer | [default to null] |
| **repo** | **String**| name of the repo to transfer | [default to null] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

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

<a name="createFork"></a>
# **createFork**
> Repository createFork(owner, repo, body)

Fork a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo to fork | [default to null] |
| **repo** | **String**| name of the repo to fork | [default to null] |
| **body** | [**CreateForkOption**](../Models/CreateForkOption.md)|  | [optional] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="generateRepo"></a>
# **generateRepo**
> Repository generateRepo(template\_owner, template\_repo, body)

Create a repository using a template

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **template\_owner** | **String**| name of the template repository owner | [default to null] |
| **template\_repo** | **String**| name of the template repository | [default to null] |
| **body** | [**GenerateRepoOption**](../Models/GenerateRepoOption.md)|  | [optional] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="getAnnotatedTag"></a>
# **getAnnotatedTag**
> AnnotatedTag getAnnotatedTag(owner, repo, sha)

Gets the tag object of an annotated tag (not lightweight tags)

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **sha** | **String**| sha of the tag. The Git tags API only supports annotated tag objects, not lightweight tags. | [default to null] |

### Return type

[**AnnotatedTag**](../Models/AnnotatedTag.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getBlob"></a>
# **getBlob**
> GitBlobResponse getBlob(owner, repo, sha)

Gets the blob of a repository.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **sha** | **String**| sha of the commit | [default to null] |

### Return type

[**GitBlobResponse**](../Models/GitBlobResponse.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="getTree"></a>
# **getTree**
> GitTreeResponse getTree(owner, repo, sha, recursive, page, per\_page)

Gets the tree of a repository.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **sha** | **String**| sha of the commit | [default to null] |
| **recursive** | **Boolean**| show all directories and files | [optional] [default to null] |
| **page** | **Integer**| page number; the &#39;truncated&#39; field in the response will be true if there are still more items after this page, false if the last page | [optional] [default to null] |
| **per\_page** | **Integer**| number of items per page | [optional] [default to null] |

### Return type

[**GitTreeResponse**](../Models/GitTreeResponse.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="listForks"></a>
# **listForks**
> List listForks(owner, repo, page, limit)

List a repository&#39;s forks

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="rejectRepoTransfer"></a>
# **rejectRepoTransfer**
> Repository rejectRepoTransfer(owner, repo)

Reject a repo transfer

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo to transfer | [default to null] |
| **repo** | **String**| name of the repo to transfer | [default to null] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoAddCollaborator"></a>
# **repoAddCollaborator**
> repoAddCollaborator(owner, repo, collaborator, body)

Add a collaborator to a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **collaborator** | **String**| username of the collaborator to add | [default to null] |
| **body** | [**AddCollaboratorOption**](../Models/AddCollaboratorOption.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: Not defined

<a name="repoAddPushMirror"></a>
# **repoAddPushMirror**
> PushMirror repoAddPushMirror(owner, repo, body)

add a push mirror to the repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreatePushMirrorOption**](../Models/CreatePushMirrorOption.md)|  | [optional] |

### Return type

[**PushMirror**](../Models/PushMirror.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoAddTeam"></a>
# **repoAddTeam**
> repoAddTeam(owner, repo, team)

Add a team to a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **team** | **String**| team name | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoAddTopic"></a>
# **repoAddTopic**
> repoAddTopic(owner, repo, topic)

Add a topic to a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **topic** | **String**| name of the topic to add | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoApplyDiffPatch"></a>
# **repoApplyDiffPatch**
> FileResponse repoApplyDiffPatch(owner, repo, body)

Apply diff patch to repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**UpdateFileOptions**](../Models/UpdateFileOptions.md)|  | |

### Return type

[**FileResponse**](../Models/FileResponse.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoCancelScheduledAutoMerge"></a>
# **repoCancelScheduledAutoMerge**
> repoCancelScheduledAutoMerge(owner, repo, index)

Cancel the scheduled auto merge for the given pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request to merge | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoChangeFiles"></a>
# **repoChangeFiles**
> FilesResponse repoChangeFiles(owner, repo, body)

Modify multiple files in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**ChangeFilesOptions**](../Models/ChangeFilesOptions.md)|  | |

### Return type

[**FilesResponse**](../Models/FilesResponse.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoCheckCollaborator"></a>
# **repoCheckCollaborator**
> repoCheckCollaborator(owner, repo, collaborator)

Check if a user is a collaborator of a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **collaborator** | **String**| username of the collaborator | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoCheckTeam"></a>
# **repoCheckTeam**
> Team repoCheckTeam(owner, repo, team)

Check if a team is assigned to a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **team** | **String**| team name | [default to null] |

### Return type

[**Team**](../Models/Team.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoCreateBranch"></a>
# **repoCreateBranch**
> Branch repoCreateBranch(owner, repo, body)

Create a branch

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreateBranchRepoOption**](../Models/CreateBranchRepoOption.md)|  | [optional] |

### Return type

[**Branch**](../Models/Branch.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoCreateBranchProtection"></a>
# **repoCreateBranchProtection**
> BranchProtection repoCreateBranchProtection(owner, repo, body)

Create a branch protections for a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreateBranchProtectionOption**](../Models/CreateBranchProtectionOption.md)|  | [optional] |

### Return type

[**BranchProtection**](../Models/BranchProtection.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoCreateFile"></a>
# **repoCreateFile**
> FileResponse repoCreateFile(owner, repo, filepath, body)

Create a file in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **filepath** | **String**| path of the file to create | [default to null] |
| **body** | [**CreateFileOptions**](../Models/CreateFileOptions.md)|  | |

### Return type

[**FileResponse**](../Models/FileResponse.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoCreateHook"></a>
# **repoCreateHook**
> Hook repoCreateHook(owner, repo, body)

Create a hook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreateHookOption**](../Models/CreateHookOption.md)|  | [optional] |

### Return type

[**Hook**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoCreateKey"></a>
# **repoCreateKey**
> DeployKey repoCreateKey(owner, repo, body)

Add a key to a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreateKeyOption**](../Models/CreateKeyOption.md)|  | [optional] |

### Return type

[**DeployKey**](../Models/DeployKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoCreatePullRequest"></a>
# **repoCreatePullRequest**
> PullRequest repoCreatePullRequest(owner, repo, body)

Create a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreatePullRequestOption**](../Models/CreatePullRequestOption.md)|  | [optional] |

### Return type

[**PullRequest**](../Models/PullRequest.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoCreatePullReview"></a>
# **repoCreatePullReview**
> PullReview repoCreatePullReview(owner, repo, index, body)

Create a review to an pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request | [default to null] |
| **body** | [**CreatePullReviewOptions**](../Models/CreatePullReviewOptions.md)|  | |

### Return type

[**PullReview**](../Models/PullReview.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="repoCreatePullReviewRequests"></a>
# **repoCreatePullReviewRequests**
> List repoCreatePullReviewRequests(owner, repo, index, body)

create review requests for a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request | [default to null] |
| **body** | [**PullReviewRequestOptions**](../Models/PullReviewRequestOptions.md)|  | |

### Return type

[**List**](../Models/PullReview.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="repoCreateRelease"></a>
# **repoCreateRelease**
> Release repoCreateRelease(owner, repo, body)

Create a release

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreateReleaseOption**](../Models/CreateReleaseOption.md)|  | [optional] |

### Return type

[**Release**](../Models/Release.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoCreateReleaseAttachment"></a>
# **repoCreateReleaseAttachment**
> Attachment repoCreateReleaseAttachment(owner, repo, id, attachment, name)

Create a release attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the release | [default to null] |
| **attachment** | **File**| attachment to upload | [default to null] |
| **name** | **String**| name of the attachment | [optional] [default to null] |

### Return type

[**Attachment**](../Models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

<a name="repoCreateStatus"></a>
# **repoCreateStatus**
> CommitStatus repoCreateStatus(owner, repo, sha, body)

Create a commit status

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **sha** | **String**| sha of the commit | [default to null] |
| **body** | [**CreateStatusOption**](../Models/CreateStatusOption.md)|  | [optional] |

### Return type

[**CommitStatus**](../Models/CommitStatus.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="repoCreateTag"></a>
# **repoCreateTag**
> Tag repoCreateTag(owner, repo, body)

Create a new git tag in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreateTagOption**](../Models/CreateTagOption.md)|  | [optional] |

### Return type

[**Tag**](../Models/Tag.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="repoCreateWikiPage"></a>
# **repoCreateWikiPage**
> WikiPage repoCreateWikiPage(owner, repo, body)

Create a wiki page

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**CreateWikiPageOptions**](../Models/CreateWikiPageOptions.md)|  | [optional] |

### Return type

[**WikiPage**](../Models/WikiPage.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html

<a name="repoDelete"></a>
# **repoDelete**
> repoDelete(owner, repo)

Delete a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo to delete | [default to null] |
| **repo** | **String**| name of the repo to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteBranch"></a>
# **repoDeleteBranch**
> repoDeleteBranch(owner, repo, branch)

Delete a specific branch from a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **branch** | **String**| branch to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteBranchProtection"></a>
# **repoDeleteBranchProtection**
> repoDeleteBranchProtection(owner, repo, name)

Delete a specific branch protection for the repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **name** | **String**| name of protected branch | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteCollaborator"></a>
# **repoDeleteCollaborator**
> repoDeleteCollaborator(owner, repo, collaborator)

Delete a collaborator from a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **collaborator** | **String**| username of the collaborator to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteFile"></a>
# **repoDeleteFile**
> FileDeleteResponse repoDeleteFile(owner, repo, filepath, body)

Delete a file in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **filepath** | **String**| path of the file to delete | [default to null] |
| **body** | [**DeleteFileOptions**](../Models/DeleteFileOptions.md)|  | |

### Return type

[**FileDeleteResponse**](../Models/FileDeleteResponse.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoDeleteGitHook"></a>
# **repoDeleteGitHook**
> repoDeleteGitHook(owner, repo, id)

Delete a Git hook in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **String**| id of the hook to get | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteHook"></a>
# **repoDeleteHook**
> repoDeleteHook(owner, repo, id)

Delete a hook in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the hook to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteKey"></a>
# **repoDeleteKey**
> repoDeleteKey(owner, repo, id)

Delete a key from a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the key to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeletePullReview"></a>
# **repoDeletePullReview**
> repoDeletePullReview(owner, repo, index, id)

Delete a specific review from a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request | [default to null] |
| **id** | **Long**| id of the review | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeletePullReviewRequests"></a>
# **repoDeletePullReviewRequests**
> repoDeletePullReviewRequests(owner, repo, index, body)

cancel review requests for a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request | [default to null] |
| **body** | [**PullReviewRequestOptions**](../Models/PullReviewRequestOptions.md)|  | |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: Not defined

<a name="repoDeletePushMirror"></a>
# **repoDeletePushMirror**
> repoDeletePushMirror(owner, repo, name)

deletes a push mirror from a repository by remoteName

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **name** | **String**| remote name of the pushMirror | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteRelease"></a>
# **repoDeleteRelease**
> repoDeleteRelease(owner, repo, id)

Delete a release

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the release to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteReleaseAttachment"></a>
# **repoDeleteReleaseAttachment**
> repoDeleteReleaseAttachment(owner, repo, id, attachment\_id)

Delete a release attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the release | [default to null] |
| **attachment\_id** | **Long**| id of the attachment to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteReleaseByTag"></a>
# **repoDeleteReleaseByTag**
> repoDeleteReleaseByTag(owner, repo, tag)

Delete a release by tag name

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **tag** | **String**| tag name of the release to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteTag"></a>
# **repoDeleteTag**
> repoDeleteTag(owner, repo, tag)

Delete a repository&#39;s tag by name

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **tag** | **String**| name of tag to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteTeam"></a>
# **repoDeleteTeam**
> repoDeleteTeam(owner, repo, team)

Delete a team from a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **team** | **String**| team name | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteTopic"></a>
# **repoDeleteTopic**
> repoDeleteTopic(owner, repo, topic)

Delete a topic from a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **topic** | **String**| name of the topic to delete | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDeleteWikiPage"></a>
# **repoDeleteWikiPage**
> repoDeleteWikiPage(owner, repo, pageName)

Delete a wiki page

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **pageName** | **String**| name of the page | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoDismissPullReview"></a>
# **repoDismissPullReview**
> PullReview repoDismissPullReview(owner, repo, index, id, body)

Dismiss a review for a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request | [default to null] |
| **id** | **Long**| id of the review | [default to null] |
| **body** | [**DismissPullReviewOptions**](../Models/DismissPullReviewOptions.md)|  | |

### Return type

[**PullReview**](../Models/PullReview.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="repoDownloadCommitDiffOrPatch"></a>
# **repoDownloadCommitDiffOrPatch**
> String repoDownloadCommitDiffOrPatch(owner, repo, sha, diffType)

Get a commit&#39;s diff or patch

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **sha** | **String**| SHA of the commit to get | [default to null] |
| **diffType** | **String**| whether the output is diff or patch | [default to null] [enum: diff, patch] |

### Return type

**String**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

<a name="repoDownloadPullDiffOrPatch"></a>
# **repoDownloadPullDiffOrPatch**
> String repoDownloadPullDiffOrPatch(owner, repo, index, diffType, binary)

Get a pull request diff or patch

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request to get | [default to null] |
| **diffType** | **String**| whether the output is diff or patch | [default to null] [enum: diff, patch] |
| **binary** | **Boolean**| whether to include binary file changes. if true, the diff is applicable with &#x60;git apply&#x60; | [optional] [default to null] |

### Return type

**String**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

<a name="repoEdit"></a>
# **repoEdit**
> Repository repoEdit(owner, repo, body)

Edit a repository&#39;s properties. Only fields that are set will be changed.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo to edit | [default to null] |
| **repo** | **String**| name of the repo to edit | [default to null] |
| **body** | [**EditRepoOption**](../Models/EditRepoOption.md)| Properties of a repo that you can edit | [optional] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="repoEditBranchProtection"></a>
# **repoEditBranchProtection**
> BranchProtection repoEditBranchProtection(owner, repo, name, body)

Edit a branch protections for a repository. Only fields that are set will be changed

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **name** | **String**| name of protected branch | [default to null] |
| **body** | [**EditBranchProtectionOption**](../Models/EditBranchProtectionOption.md)|  | [optional] |

### Return type

[**BranchProtection**](../Models/BranchProtection.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoEditGitHook"></a>
# **repoEditGitHook**
> GitHook repoEditGitHook(owner, repo, id, body)

Edit a Git hook in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **String**| id of the hook to get | [default to null] |
| **body** | [**EditGitHookOption**](../Models/EditGitHookOption.md)|  | [optional] |

### Return type

[**GitHook**](../Models/GitHook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="repoEditHook"></a>
# **repoEditHook**
> Hook repoEditHook(owner, repo, id, body)

Edit a hook in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| index of the hook | [default to null] |
| **body** | [**EditHookOption**](../Models/EditHookOption.md)|  | [optional] |

### Return type

[**Hook**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="repoEditPullRequest"></a>
# **repoEditPullRequest**
> PullRequest repoEditPullRequest(owner, repo, index, body)

Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request to edit | [default to null] |
| **body** | [**EditPullRequestOption**](../Models/EditPullRequestOption.md)|  | [optional] |

### Return type

[**PullRequest**](../Models/PullRequest.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoEditRelease"></a>
# **repoEditRelease**
> Release repoEditRelease(owner, repo, id, body)

Update a release

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the release to edit | [default to null] |
| **body** | [**EditReleaseOption**](../Models/EditReleaseOption.md)|  | [optional] |

### Return type

[**Release**](../Models/Release.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoEditReleaseAttachment"></a>
# **repoEditReleaseAttachment**
> Attachment repoEditReleaseAttachment(owner, repo, id, attachment\_id, body)

Edit a release attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the release | [default to null] |
| **attachment\_id** | **Long**| id of the attachment to edit | [default to null] |
| **body** | [**EditAttachmentOptions**](../Models/EditAttachmentOptions.md)|  | [optional] |

### Return type

[**Attachment**](../Models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoEditWikiPage"></a>
# **repoEditWikiPage**
> WikiPage repoEditWikiPage(owner, repo, pageName, body)

Edit a wiki page

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **pageName** | **String**| name of the page | [default to null] |
| **body** | [**CreateWikiPageOptions**](../Models/CreateWikiPageOptions.md)|  | [optional] |

### Return type

[**WikiPage**](../Models/WikiPage.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/html

<a name="repoGet"></a>
# **repoGet**
> Repository repoGet(owner, repo)

Get a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetAllCommits"></a>
# **repoGetAllCommits**
> List repoGetAllCommits(owner, repo, sha, path, stat, verification, files, page, limit, not)

Get a list of all commits from a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **sha** | **String**| SHA or branch to start listing commits from (usually &#39;master&#39;) | [optional] [default to null] |
| **path** | **String**| filepath of a file/dir | [optional] [default to null] |
| **stat** | **Boolean**| include diff stats for every commit (disable for speedup, default &#39;true&#39;) | [optional] [default to null] |
| **verification** | **Boolean**| include verification for every commit (disable for speedup, default &#39;true&#39;) | [optional] [default to null] |
| **files** | **Boolean**| include a list of affected files for every commit (disable for speedup, default &#39;true&#39;) | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results (ignored if used with &#39;path&#39;) | [optional] [default to null] |
| **not** | **String**| commits that match the given specifier will not be listed. | [optional] [default to null] |

### Return type

[**List**](../Models/Commit.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetArchive"></a>
# **repoGetArchive**
> repoGetArchive(owner, repo, archive)

Get an archive of a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **archive** | **String**| the git reference for download with attached archive format (e.g. master.zip) | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoGetAssignees"></a>
# **repoGetAssignees**
> List repoGetAssignees(owner, repo)

Return all users that have write access and can be assigned to issues

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetBranch"></a>
# **repoGetBranch**
> Branch repoGetBranch(owner, repo, branch)

Retrieve a specific branch from a repository, including its effective branch protection

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **branch** | **String**| branch to get | [default to null] |

### Return type

[**Branch**](../Models/Branch.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetBranchProtection"></a>
# **repoGetBranchProtection**
> BranchProtection repoGetBranchProtection(owner, repo, name)

Get a specific branch protection for the repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **name** | **String**| name of protected branch | [default to null] |

### Return type

[**BranchProtection**](../Models/BranchProtection.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetByID"></a>
# **repoGetByID**
> Repository repoGetByID(id)

Get a repository by id

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | **Long**| id of the repo to get | [default to null] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetCombinedStatusByRef"></a>
# **repoGetCombinedStatusByRef**
> CombinedStatus repoGetCombinedStatusByRef(owner, repo, ref, page, limit)

Get a commit&#39;s combined status, by branch/tag/commit reference

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **ref** | **String**| name of branch/tag/commit | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**CombinedStatus**](../Models/CombinedStatus.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetContents"></a>
# **repoGetContents**
> ContentsResponse repoGetContents(owner, repo, filepath, ref)

Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **filepath** | **String**| path of the dir, file, symlink or submodule in the repo | [default to null] |
| **ref** | **String**| The name of the commit/branch/tag. Default the repository’s default branch (usually master) | [optional] [default to null] |

### Return type

[**ContentsResponse**](../Models/ContentsResponse.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetContentsList"></a>
# **repoGetContentsList**
> List repoGetContentsList(owner, repo, ref)

Gets the metadata of all the entries of the root dir

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **ref** | **String**| The name of the commit/branch/tag. Default the repository’s default branch (usually master) | [optional] [default to null] |

### Return type

[**List**](../Models/ContentsResponse.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetEditorConfig"></a>
# **repoGetEditorConfig**
> repoGetEditorConfig(owner, repo, filepath, ref)

Get the EditorConfig definitions of a file in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **filepath** | **String**| filepath of file to get | [default to null] |
| **ref** | **String**| The name of the commit/branch/tag. Default the repository’s default branch (usually master) | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoGetGitHook"></a>
# **repoGetGitHook**
> GitHook repoGetGitHook(owner, repo, id)

Get a Git hook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **String**| id of the hook to get | [default to null] |

### Return type

[**GitHook**](../Models/GitHook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetHook"></a>
# **repoGetHook**
> Hook repoGetHook(owner, repo, id)

Get a hook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the hook to get | [default to null] |

### Return type

[**Hook**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetIssueConfig"></a>
# **repoGetIssueConfig**
> IssueConfig repoGetIssueConfig(owner, repo)

Returns the issue config for a repo

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**IssueConfig**](../Models/IssueConfig.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetIssueTemplates"></a>
# **repoGetIssueTemplates**
> List repoGetIssueTemplates(owner, repo)

Get available issue templates for a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**List**](../Models/IssueTemplate.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetKey"></a>
# **repoGetKey**
> DeployKey repoGetKey(owner, repo, id)

Get a repository&#39;s key by id

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the key to get | [default to null] |

### Return type

[**DeployKey**](../Models/DeployKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetLanguages"></a>
# **repoGetLanguages**
> Map repoGetLanguages(owner, repo)

Get languages and number of bytes of code written

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

**Map**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetLatestRelease"></a>
# **repoGetLatestRelease**
> Release repoGetLatestRelease(owner, repo)

Gets the most recent non-prerelease, non-draft release of a repository, sorted by created_at

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**Release**](../Models/Release.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetNote"></a>
# **repoGetNote**
> Note repoGetNote(owner, repo, sha)

Get a note corresponding to a single commit from a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **sha** | **String**| a git ref or commit sha | [default to null] |

### Return type

[**Note**](../Models/Note.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetPullRequest"></a>
# **repoGetPullRequest**
> PullRequest repoGetPullRequest(owner, repo, index)

Get a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request to get | [default to null] |

### Return type

[**PullRequest**](../Models/PullRequest.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetPullRequestCommits"></a>
# **repoGetPullRequestCommits**
> List repoGetPullRequestCommits(owner, repo, index, page, limit)

Get commits for a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request to get | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Commit.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetPullRequestFiles"></a>
# **repoGetPullRequestFiles**
> List repoGetPullRequestFiles(owner, repo, index, skip-to, whitespace, page, limit)

Get changed files for a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request to get | [default to null] |
| **skip-to** | **String**| skip to given file | [optional] [default to null] |
| **whitespace** | **String**| whitespace behavior | [optional] [default to null] [enum: ignore-all, ignore-change, ignore-eol, show-all] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/ChangedFile.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetPullReview"></a>
# **repoGetPullReview**
> PullReview repoGetPullReview(owner, repo, index, id)

Get a specific review for a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request | [default to null] |
| **id** | **Long**| id of the review | [default to null] |

### Return type

[**PullReview**](../Models/PullReview.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetPullReviewComments"></a>
# **repoGetPullReviewComments**
> List repoGetPullReviewComments(owner, repo, index, id)

Get a specific review for a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request | [default to null] |
| **id** | **Long**| id of the review | [default to null] |

### Return type

[**List**](../Models/PullReviewComment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetPushMirrorByRemoteName"></a>
# **repoGetPushMirrorByRemoteName**
> PushMirror repoGetPushMirrorByRemoteName(owner, repo, name)

Get push mirror of the repository by remoteName

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **name** | **String**| remote name of push mirror | [default to null] |

### Return type

[**PushMirror**](../Models/PushMirror.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetRawFile"></a>
# **repoGetRawFile**
> repoGetRawFile(owner, repo, filepath, ref)

Get a file from a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **filepath** | **String**| filepath of the file to get | [default to null] |
| **ref** | **String**| The name of the commit/branch/tag. Default the repository’s default branch (usually master) | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoGetRawFileOrLFS"></a>
# **repoGetRawFileOrLFS**
> repoGetRawFileOrLFS(owner, repo, filepath, ref)

Get a file or it&#39;s LFS object from a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **filepath** | **String**| filepath of the file to get | [default to null] |
| **ref** | **String**| The name of the commit/branch/tag. Default the repository’s default branch (usually master) | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoGetRelease"></a>
# **repoGetRelease**
> Release repoGetRelease(owner, repo, id)

Get a release

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the release to get | [default to null] |

### Return type

[**Release**](../Models/Release.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetReleaseAttachment"></a>
# **repoGetReleaseAttachment**
> Attachment repoGetReleaseAttachment(owner, repo, id, attachment\_id)

Get a release attachment

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the release | [default to null] |
| **attachment\_id** | **Long**| id of the attachment to get | [default to null] |

### Return type

[**Attachment**](../Models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetReleaseByTag"></a>
# **repoGetReleaseByTag**
> Release repoGetReleaseByTag(owner, repo, tag)

Get a release by tag name

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **tag** | **String**| tag name of the release to get | [default to null] |

### Return type

[**Release**](../Models/Release.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetRepoPermissions"></a>
# **repoGetRepoPermissions**
> RepoCollaboratorPermission repoGetRepoPermissions(owner, repo, collaborator)

Get repository permissions for a user

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **collaborator** | **String**| username of the collaborator | [default to null] |

### Return type

[**RepoCollaboratorPermission**](../Models/RepoCollaboratorPermission.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetReviewers"></a>
# **repoGetReviewers**
> List repoGetReviewers(owner, repo)

Return all users that can be requested to review in this repo

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetSingleCommit"></a>
# **repoGetSingleCommit**
> Commit repoGetSingleCommit(owner, repo, sha, stat, verification, files)

Get a single commit from a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **sha** | **String**| a git ref or commit sha | [default to null] |
| **stat** | **Boolean**| include diff stats for every commit (disable for speedup, default &#39;true&#39;) | [optional] [default to null] |
| **verification** | **Boolean**| include verification for every commit (disable for speedup, default &#39;true&#39;) | [optional] [default to null] |
| **files** | **Boolean**| include a list of affected files for every commit (disable for speedup, default &#39;true&#39;) | [optional] [default to null] |

### Return type

[**Commit**](../Models/Commit.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetTag"></a>
# **repoGetTag**
> Tag repoGetTag(owner, repo, tag)

Get the tag of a repository by tag name

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **tag** | **String**| name of tag | [default to null] |

### Return type

[**Tag**](../Models/Tag.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetWikiPage"></a>
# **repoGetWikiPage**
> WikiPage repoGetWikiPage(owner, repo, pageName)

Get a wiki page

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **pageName** | **String**| name of the page | [default to null] |

### Return type

[**WikiPage**](../Models/WikiPage.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetWikiPageRevisions"></a>
# **repoGetWikiPageRevisions**
> WikiCommitList repoGetWikiPageRevisions(owner, repo, pageName, page)

Get revisions of a wiki page

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **pageName** | **String**| name of the page | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |

### Return type

[**WikiCommitList**](../Models/WikiCommitList.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoGetWikiPages"></a>
# **repoGetWikiPages**
> List repoGetWikiPages(owner, repo, page, limit)

Get all wiki pages

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/WikiPageMetaData.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListActivityFeeds"></a>
# **repoListActivityFeeds**
> List repoListActivityFeeds(owner, repo, date, page, limit)

List a repository&#39;s activity feeds

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
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

<a name="repoListAllGitRefs"></a>
# **repoListAllGitRefs**
> List repoListAllGitRefs(owner, repo)

Get specified ref or filtered repository&#39;s refs

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**List**](../Models/Reference.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListBranchProtection"></a>
# **repoListBranchProtection**
> List repoListBranchProtection(owner, repo)

List branch protections for a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**List**](../Models/BranchProtection.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListBranches"></a>
# **repoListBranches**
> List repoListBranches(owner, repo, page, limit)

List a repository&#39;s branches

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Branch.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListCollaborators"></a>
# **repoListCollaborators**
> List repoListCollaborators(owner, repo, page, limit)

List a repository&#39;s collaborators

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListGitHooks"></a>
# **repoListGitHooks**
> List repoListGitHooks(owner, repo)

List the Git hooks in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**List**](../Models/GitHook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListGitRefs"></a>
# **repoListGitRefs**
> List repoListGitRefs(owner, repo, ref)

Get specified ref or filtered repository&#39;s refs

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **ref** | **String**| part or full name of the ref | [default to null] |

### Return type

[**List**](../Models/Reference.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListHooks"></a>
# **repoListHooks**
> List repoListHooks(owner, repo, page, limit)

List the hooks in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Hook.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListKeys"></a>
# **repoListKeys**
> List repoListKeys(owner, repo, key\_id, fingerprint, page, limit)

List a repository&#39;s keys

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **key\_id** | **Integer**| the key_id to search for | [optional] [default to null] |
| **fingerprint** | **String**| fingerprint of the key | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/DeployKey.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListPinnedIssues"></a>
# **repoListPinnedIssues**
> List repoListPinnedIssues(owner, repo)

List a repo&#39;s pinned issues

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**List**](../Models/Issue.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListPinnedPullRequests"></a>
# **repoListPinnedPullRequests**
> List repoListPinnedPullRequests(owner, repo)

List a repo&#39;s pinned pull requests

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**List**](../Models/PullRequest.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListPullRequests"></a>
# **repoListPullRequests**
> List repoListPullRequests(owner, repo, state, sort, milestone, labels, page, limit)

List a repo&#39;s pull requests

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **state** | **String**| State of pull request: open or closed (optional) | [optional] [default to null] [enum: closed, open, all] |
| **sort** | **String**| Type of sort | [optional] [default to null] [enum: oldest, recentupdate, leastupdate, mostcomment, leastcomment, priority] |
| **milestone** | **Long**| ID of the milestone | [optional] [default to null] |
| **labels** | [**List**](../Models/Long.md)| Label IDs | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/PullRequest.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListPullReviews"></a>
# **repoListPullReviews**
> List repoListPullReviews(owner, repo, index, page, limit)

List all reviews for a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/PullReview.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListPushMirrors"></a>
# **repoListPushMirrors**
> List repoListPushMirrors(owner, repo, page, limit)

Get all push mirrors of the repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/PushMirror.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListReleaseAttachments"></a>
# **repoListReleaseAttachments**
> List repoListReleaseAttachments(owner, repo, id)

List release&#39;s attachments

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the release | [default to null] |

### Return type

[**List**](../Models/Attachment.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListReleases"></a>
# **repoListReleases**
> List repoListReleases(owner, repo, draft, pre-release, per\_page, page, limit)

List a repo&#39;s releases

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **draft** | **Boolean**| filter (exclude / include) drafts, if you dont have repo write access none will show | [optional] [default to null] |
| **pre-release** | **Boolean**| filter (exclude / include) pre-releases | [optional] [default to null] |
| **per\_page** | **Integer**| page size of results, deprecated - use limit | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/Release.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListStargazers"></a>
# **repoListStargazers**
> List repoListStargazers(owner, repo, page, limit)

List a repo&#39;s stargazers

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListStatuses"></a>
# **repoListStatuses**
> List repoListStatuses(owner, repo, sha, sort, state, page, limit)

Get a commit&#39;s statuses

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **sha** | **String**| sha of the commit | [default to null] |
| **sort** | **String**| type of sort | [optional] [default to null] [enum: oldest, recentupdate, leastupdate, leastindex, highestindex] |
| **state** | **String**| type of state | [optional] [default to null] [enum: pending, success, error, failure, warning] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/CommitStatus.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListStatusesByRef"></a>
# **repoListStatusesByRef**
> List repoListStatusesByRef(owner, repo, ref, sort, state, page, limit)

Get a commit&#39;s statuses, by branch/tag/commit reference

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **ref** | **String**| name of branch/tag/commit | [default to null] |
| **sort** | **String**| type of sort | [optional] [default to null] [enum: oldest, recentupdate, leastupdate, leastindex, highestindex] |
| **state** | **String**| type of state | [optional] [default to null] [enum: pending, success, error, failure, warning] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/CommitStatus.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListSubscribers"></a>
# **repoListSubscribers**
> List repoListSubscribers(owner, repo, page, limit)

List a repo&#39;s watchers

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/User.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListTags"></a>
# **repoListTags**
> List repoListTags(owner, repo, page, limit)

List a repository&#39;s tags

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results, default maximum page size is 50 | [optional] [default to null] |

### Return type

[**List**](../Models/Tag.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListTeams"></a>
# **repoListTeams**
> List repoListTeams(owner, repo)

List a repository&#39;s teams

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**List**](../Models/Team.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoListTopics"></a>
# **repoListTopics**
> TopicName repoListTopics(owner, repo, page, limit)

Get list of topics that a repository has

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**TopicName**](../Models/TopicName.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoMergePullRequest"></a>
# **repoMergePullRequest**
> repoMergePullRequest(owner, repo, index, body)

Merge a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request to merge | [default to null] |
| **body** | [**MergePullRequestOption**](../Models/MergePullRequestOption.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: Not defined

<a name="repoMigrate"></a>
# **repoMigrate**
> Repository repoMigrate(body)

Migrate a remote git repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **body** | [**MigrateRepoOptions**](../Models/MigrateRepoOptions.md)|  | [optional] |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoMirrorSync"></a>
# **repoMirrorSync**
> repoMirrorSync(owner, repo)

Sync a mirrored repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo to sync | [default to null] |
| **repo** | **String**| name of the repo to sync | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoNewPinAllowed"></a>
# **repoNewPinAllowed**
> NewIssuePinsAllowed repoNewPinAllowed(owner, repo)

Returns if new Issue Pins are allowed

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**NewIssuePinsAllowed**](../Models/NewIssuePinsAllowed.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoPullRequestIsMerged"></a>
# **repoPullRequestIsMerged**
> repoPullRequestIsMerged(owner, repo, index)

Check if a pull request has been merged

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoPushMirrorSync"></a>
# **repoPushMirrorSync**
> repoPushMirrorSync(owner, repo)

Sync all push mirrored repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo to sync | [default to null] |
| **repo** | **String**| name of the repo to sync | [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoSearch"></a>
# **repoSearch**
> SearchResults repoSearch(q, topic, includeDesc, uid, priority\_owner\_id, team\_id, starredBy, private, is\_private, template, archived, mode, exclusive, sort, order, page, limit)

Search for repositories

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **q** | **String**| keyword | [optional] [default to null] |
| **topic** | **Boolean**| Limit search to repositories with keyword as topic | [optional] [default to null] |
| **includeDesc** | **Boolean**| include search of keyword within repository description | [optional] [default to null] |
| **uid** | **Long**| search only for repos that the user with the given id owns or contributes to | [optional] [default to null] |
| **priority\_owner\_id** | **Long**| repo owner to prioritize in the results | [optional] [default to null] |
| **team\_id** | **Long**| search only for repos that belong to the given team id | [optional] [default to null] |
| **starredBy** | **Long**| search only for repos that the user with the given id has starred | [optional] [default to null] |
| **private** | **Boolean**| include private repositories this user has access to (defaults to true) | [optional] [default to null] |
| **is\_private** | **Boolean**| show only pubic, private or all repositories (defaults to all) | [optional] [default to null] |
| **template** | **Boolean**| include template repositories this user has access to (defaults to true) | [optional] [default to null] |
| **archived** | **Boolean**| show only archived, non-archived or all repositories (defaults to all) | [optional] [default to null] |
| **mode** | **String**| type of repository to search for. Supported values are \&quot;fork\&quot;, \&quot;source\&quot;, \&quot;mirror\&quot; and \&quot;collaborative\&quot; | [optional] [default to null] |
| **exclusive** | **Boolean**| if &#x60;uid&#x60; is given, search only for repos that the user owns | [optional] [default to null] |
| **sort** | **String**| sort repos by attribute. Supported values are \&quot;alpha\&quot;, \&quot;created\&quot;, \&quot;updated\&quot;, \&quot;size\&quot;, and \&quot;id\&quot;. Default is \&quot;alpha\&quot; | [optional] [default to null] |
| **order** | **String**| sort order, either \&quot;asc\&quot; (ascending) or \&quot;desc\&quot; (descending). Default is \&quot;asc\&quot;, ignored if \&quot;sort\&quot; is not specified. | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**SearchResults**](../Models/SearchResults.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoSigningKey"></a>
# **repoSigningKey**
> String repoSigningKey(owner, repo)

Get signing-key.gpg for given repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

**String**

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain

<a name="repoSubmitPullReview"></a>
# **repoSubmitPullReview**
> PullReview repoSubmitPullReview(owner, repo, index, id, body)

Submit a pending review to an pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request | [default to null] |
| **id** | **Long**| id of the review | [default to null] |
| **body** | [**SubmitPullReviewOptions**](../Models/SubmitPullReviewOptions.md)|  | |

### Return type

[**PullReview**](../Models/PullReview.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="repoTestHook"></a>
# **repoTestHook**
> repoTestHook(owner, repo, id, ref)

Test a push webhook

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **id** | **Long**| id of the hook to test | [default to null] |
| **ref** | **String**| The name of the commit/branch/tag, indicates which commit will be loaded to the webhook payload. | [optional] [default to null] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoTrackedTimes"></a>
# **repoTrackedTimes**
> List repoTrackedTimes(owner, repo, user, since, before, page, limit)

List a repo&#39;s tracked times

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **user** | **String**| optional filter by user (available for issue managers) | [optional] [default to null] |
| **since** | **Date**| Only show times updated after the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **before** | **Date**| Only show times updated before the given time. This is a timestamp in RFC 3339 format | [optional] [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/TrackedTime.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoTransfer"></a>
# **repoTransfer**
> Repository repoTransfer(owner, repo, body)

Transfer a repo ownership

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo to transfer | [default to null] |
| **repo** | **String**| name of the repo to transfer | [default to null] |
| **body** | [**TransferRepoOption**](../Models/TransferRepoOption.md)| Transfer Options | |

### Return type

[**Repository**](../Models/Repository.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json

<a name="repoUnDismissPullReview"></a>
# **repoUnDismissPullReview**
> PullReview repoUnDismissPullReview(owner, repo, index, id)

Cancel to dismiss a review for a pull request

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request | [default to null] |
| **id** | **Long**| id of the review | [default to null] |

### Return type

[**PullReview**](../Models/PullReview.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="repoUpdateFile"></a>
# **repoUpdateFile**
> FileResponse repoUpdateFile(owner, repo, filepath, body)

Update a file in a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **filepath** | **String**| path of the file to update | [default to null] |
| **body** | [**UpdateFileOptions**](../Models/UpdateFileOptions.md)|  | |

### Return type

[**FileResponse**](../Models/FileResponse.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

<a name="repoUpdatePullRequest"></a>
# **repoUpdatePullRequest**
> repoUpdatePullRequest(owner, repo, index, style)

Merge PR&#39;s baseBranch into headBranch

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **index** | **Long**| index of the pull request to get | [default to null] |
| **style** | **String**| how to update pull request | [optional] [default to null] [enum: merge, rebase] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

<a name="repoUpdateTopics"></a>
# **repoUpdateTopics**
> repoUpdateTopics(owner, repo, body)

Replace list of topics for a repository

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **body** | [**RepoTopicOptions**](../Models/RepoTopicOptions.md)|  | [optional] |

### Return type

null (empty response body)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: Not defined

<a name="repoValidateIssueConfig"></a>
# **repoValidateIssueConfig**
> IssueConfigValidation repoValidateIssueConfig(owner, repo)

Returns the validation information for a issue config

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**IssueConfigValidation**](../Models/IssueConfigValidation.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="topicSearch"></a>
# **topicSearch**
> List topicSearch(q, page, limit)

search topics via keyword

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **q** | **String**| keywords to search | [default to null] |
| **page** | **Integer**| page number of results to return (1-based) | [optional] [default to null] |
| **limit** | **Integer**| page size of results | [optional] [default to null] |

### Return type

[**List**](../Models/TopicResponse.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

<a name="userCurrentCheckSubscription"></a>
# **userCurrentCheckSubscription**
> WatchInfo userCurrentCheckSubscription(owner, repo)

Check if the current user is watching a repo

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**WatchInfo**](../Models/WatchInfo.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

<a name="userCurrentDeleteSubscription"></a>
# **userCurrentDeleteSubscription**
> userCurrentDeleteSubscription(owner, repo)

Unwatch a repo

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

<a name="userCurrentPutSubscription"></a>
# **userCurrentPutSubscription**
> WatchInfo userCurrentPutSubscription(owner, repo)

Watch a repo

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |

### Return type

[**WatchInfo**](../Models/WatchInfo.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/html

<a name="userTrackedTimes"></a>
# **userTrackedTimes**
> List userTrackedTimes(owner, repo, user)

List a user&#39;s tracked times in a repo

### Parameters

|Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **owner** | **String**| owner of the repo | [default to null] |
| **repo** | **String**| name of the repo | [default to null] |
| **user** | **String**| username of user | [default to null] |

### Return type

[**List**](../Models/TrackedTime.md)

### Authorization

[TOTPHeader](../README.md#TOTPHeader), [AuthorizationHeaderToken](../README.md#AuthorizationHeaderToken), [SudoHeader](../README.md#SudoHeader), [BasicAuth](../README.md#BasicAuth), [AccessToken](../README.md#AccessToken), [SudoParam](../README.md#SudoParam), [Token](../README.md#Token)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

