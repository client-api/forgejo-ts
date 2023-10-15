# Documentation for Forgejo API.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to */api/v1*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *ActivitypubApi* | [**activitypubPerson**](Apis/ActivitypubApi.md#activitypubperson) | **GET** /activitypub/user-id/{user-id} | Returns the Person actor for a user |
*ActivitypubApi* | [**activitypubPersonInbox**](Apis/ActivitypubApi.md#activitypubpersoninbox) | **POST** /activitypub/user-id/{user-id}/inbox | Send to the inbox |
| *AdminApi* | [**adminAdoptRepository**](Apis/AdminApi.md#adminadoptrepository) | **POST** /admin/unadopted/{owner}/{repo} | Adopt unadopted files as a repository |
*AdminApi* | [**adminCreateHook**](Apis/AdminApi.md#admincreatehook) | **POST** /admin/hooks | Create a hook |
*AdminApi* | [**adminCreateOrg**](Apis/AdminApi.md#admincreateorg) | **POST** /admin/users/{username}/orgs | Create an organization |
*AdminApi* | [**adminCreatePublicKey**](Apis/AdminApi.md#admincreatepublickey) | **POST** /admin/users/{username}/keys | Add a public key on behalf of a user |
*AdminApi* | [**adminCreateRepo**](Apis/AdminApi.md#admincreaterepo) | **POST** /admin/users/{username}/repos | Create a repository on behalf of a user |
*AdminApi* | [**adminCreateUser**](Apis/AdminApi.md#admincreateuser) | **POST** /admin/users | Create a user |
*AdminApi* | [**adminCronList**](Apis/AdminApi.md#admincronlist) | **GET** /admin/cron | List cron tasks |
*AdminApi* | [**adminCronRun**](Apis/AdminApi.md#admincronrun) | **POST** /admin/cron/{task} | Run cron task |
*AdminApi* | [**adminDeleteHook**](Apis/AdminApi.md#admindeletehook) | **DELETE** /admin/hooks/{id} | Delete a hook |
*AdminApi* | [**adminDeleteUnadoptedRepository**](Apis/AdminApi.md#admindeleteunadoptedrepository) | **DELETE** /admin/unadopted/{owner}/{repo} | Delete unadopted files |
*AdminApi* | [**adminDeleteUser**](Apis/AdminApi.md#admindeleteuser) | **DELETE** /admin/users/{username} | Delete a user |
*AdminApi* | [**adminDeleteUserPublicKey**](Apis/AdminApi.md#admindeleteuserpublickey) | **DELETE** /admin/users/{username}/keys/{id} | Delete a user's public key |
*AdminApi* | [**adminEditHook**](Apis/AdminApi.md#adminedithook) | **PATCH** /admin/hooks/{id} | Update a hook |
*AdminApi* | [**adminEditUser**](Apis/AdminApi.md#adminedituser) | **PATCH** /admin/users/{username} | Edit an existing user |
*AdminApi* | [**adminGetAllEmails**](Apis/AdminApi.md#admingetallemails) | **GET** /admin/emails | List all emails |
*AdminApi* | [**adminGetAllOrgs**](Apis/AdminApi.md#admingetallorgs) | **GET** /admin/orgs | List all organizations |
*AdminApi* | [**adminGetHook**](Apis/AdminApi.md#admingethook) | **GET** /admin/hooks/{id} | Get a hook |
*AdminApi* | [**adminListHooks**](Apis/AdminApi.md#adminlisthooks) | **GET** /admin/hooks | List system's webhooks |
*AdminApi* | [**adminRenameUser**](Apis/AdminApi.md#adminrenameuser) | **POST** /admin/users/{username}/rename | Rename a user |
*AdminApi* | [**adminSearchEmails**](Apis/AdminApi.md#adminsearchemails) | **GET** /admin/emails/search | Search all emails |
*AdminApi* | [**adminSearchUsers**](Apis/AdminApi.md#adminsearchusers) | **GET** /admin/users | Search users according filter conditions |
*AdminApi* | [**adminUnadoptedList**](Apis/AdminApi.md#adminunadoptedlist) | **GET** /admin/unadopted | List unadopted repositories |
| *IssueApi* | [**issueAddLabel**](Apis/IssueApi.md#issueaddlabel) | **POST** /repos/{owner}/{repo}/issues/{index}/labels | Add a label to an issue |
*IssueApi* | [**issueAddSubscription**](Apis/IssueApi.md#issueaddsubscription) | **PUT** /repos/{owner}/{repo}/issues/{index}/subscriptions/{user} | Subscribe user to issue |
*IssueApi* | [**issueAddTime**](Apis/IssueApi.md#issueaddtime) | **POST** /repos/{owner}/{repo}/issues/{index}/times | Add tracked time to a issue |
*IssueApi* | [**issueCheckSubscription**](Apis/IssueApi.md#issuechecksubscription) | **GET** /repos/{owner}/{repo}/issues/{index}/subscriptions/check | Check if user is subscribed to an issue |
*IssueApi* | [**issueClearLabels**](Apis/IssueApi.md#issueclearlabels) | **DELETE** /repos/{owner}/{repo}/issues/{index}/labels | Remove all labels from an issue |
*IssueApi* | [**issueCreateComment**](Apis/IssueApi.md#issuecreatecomment) | **POST** /repos/{owner}/{repo}/issues/{index}/comments | Add a comment to an issue |
*IssueApi* | [**issueCreateIssue**](Apis/IssueApi.md#issuecreateissue) | **POST** /repos/{owner}/{repo}/issues | Create an issue. If using deadline only the date will be taken into account, and time of day ignored. |
*IssueApi* | [**issueCreateIssueAttachment**](Apis/IssueApi.md#issuecreateissueattachment) | **POST** /repos/{owner}/{repo}/issues/{index}/assets | Create an issue attachment |
*IssueApi* | [**issueCreateIssueBlocking**](Apis/IssueApi.md#issuecreateissueblocking) | **POST** /repos/{owner}/{repo}/issues/{index}/blocks | Block the issue given in the body by the issue in path |
*IssueApi* | [**issueCreateIssueCommentAttachment**](Apis/IssueApi.md#issuecreateissuecommentattachment) | **POST** /repos/{owner}/{repo}/issues/comments/{id}/assets | Create a comment attachment |
*IssueApi* | [**issueCreateIssueDependencies**](Apis/IssueApi.md#issuecreateissuedependencies) | **POST** /repos/{owner}/{repo}/issues/{index}/dependencies | Make the issue in the url depend on the issue in the form. |
*IssueApi* | [**issueCreateLabel**](Apis/IssueApi.md#issuecreatelabel) | **POST** /repos/{owner}/{repo}/labels | Create a label |
*IssueApi* | [**issueCreateMilestone**](Apis/IssueApi.md#issuecreatemilestone) | **POST** /repos/{owner}/{repo}/milestones | Create a milestone |
*IssueApi* | [**issueDelete**](Apis/IssueApi.md#issuedelete) | **DELETE** /repos/{owner}/{repo}/issues/{index} | Delete an issue |
*IssueApi* | [**issueDeleteComment**](Apis/IssueApi.md#issuedeletecomment) | **DELETE** /repos/{owner}/{repo}/issues/comments/{id} | Delete a comment |
*IssueApi* | [**issueDeleteCommentDeprecated**](Apis/IssueApi.md#issuedeletecommentdeprecated) | **DELETE** /repos/{owner}/{repo}/issues/{index}/comments/{id} | Delete a comment |
*IssueApi* | [**issueDeleteCommentReaction**](Apis/IssueApi.md#issuedeletecommentreaction) | **DELETE** /repos/{owner}/{repo}/issues/comments/{id}/reactions | Remove a reaction from a comment of an issue |
*IssueApi* | [**issueDeleteIssueAttachment**](Apis/IssueApi.md#issuedeleteissueattachment) | **DELETE** /repos/{owner}/{repo}/issues/{index}/assets/{attachment_id} | Delete an issue attachment |
*IssueApi* | [**issueDeleteIssueCommentAttachment**](Apis/IssueApi.md#issuedeleteissuecommentattachment) | **DELETE** /repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id} | Delete a comment attachment |
*IssueApi* | [**issueDeleteIssueReaction**](Apis/IssueApi.md#issuedeleteissuereaction) | **DELETE** /repos/{owner}/{repo}/issues/{index}/reactions | Remove a reaction from an issue |
*IssueApi* | [**issueDeleteLabel**](Apis/IssueApi.md#issuedeletelabel) | **DELETE** /repos/{owner}/{repo}/labels/{id} | Delete a label |
*IssueApi* | [**issueDeleteMilestone**](Apis/IssueApi.md#issuedeletemilestone) | **DELETE** /repos/{owner}/{repo}/milestones/{id} | Delete a milestone |
*IssueApi* | [**issueDeleteStopWatch**](Apis/IssueApi.md#issuedeletestopwatch) | **DELETE** /repos/{owner}/{repo}/issues/{index}/stopwatch/delete | Delete an issue's existing stopwatch. |
*IssueApi* | [**issueDeleteSubscription**](Apis/IssueApi.md#issuedeletesubscription) | **DELETE** /repos/{owner}/{repo}/issues/{index}/subscriptions/{user} | Unsubscribe user from issue |
*IssueApi* | [**issueDeleteTime**](Apis/IssueApi.md#issuedeletetime) | **DELETE** /repos/{owner}/{repo}/issues/{index}/times/{id} | Delete specific tracked time |
*IssueApi* | [**issueEditComment**](Apis/IssueApi.md#issueeditcomment) | **PATCH** /repos/{owner}/{repo}/issues/comments/{id} | Edit a comment |
*IssueApi* | [**issueEditCommentDeprecated**](Apis/IssueApi.md#issueeditcommentdeprecated) | **PATCH** /repos/{owner}/{repo}/issues/{index}/comments/{id} | Edit a comment |
*IssueApi* | [**issueEditIssue**](Apis/IssueApi.md#issueeditissue) | **PATCH** /repos/{owner}/{repo}/issues/{index} | Edit an issue. If using deadline only the date will be taken into account, and time of day ignored. |
*IssueApi* | [**issueEditIssueAttachment**](Apis/IssueApi.md#issueeditissueattachment) | **PATCH** /repos/{owner}/{repo}/issues/{index}/assets/{attachment_id} | Edit an issue attachment |
*IssueApi* | [**issueEditIssueCommentAttachment**](Apis/IssueApi.md#issueeditissuecommentattachment) | **PATCH** /repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id} | Edit a comment attachment |
*IssueApi* | [**issueEditIssueDeadline**](Apis/IssueApi.md#issueeditissuedeadline) | **POST** /repos/{owner}/{repo}/issues/{index}/deadline | Set an issue deadline. If set to null, the deadline is deleted. If using deadline only the date will be taken into account, and time of day ignored. |
*IssueApi* | [**issueEditLabel**](Apis/IssueApi.md#issueeditlabel) | **PATCH** /repos/{owner}/{repo}/labels/{id} | Update a label |
*IssueApi* | [**issueEditMilestone**](Apis/IssueApi.md#issueeditmilestone) | **PATCH** /repos/{owner}/{repo}/milestones/{id} | Update a milestone |
*IssueApi* | [**issueGetComment**](Apis/IssueApi.md#issuegetcomment) | **GET** /repos/{owner}/{repo}/issues/comments/{id} | Get a comment |
*IssueApi* | [**issueGetCommentReactions**](Apis/IssueApi.md#issuegetcommentreactions) | **GET** /repos/{owner}/{repo}/issues/comments/{id}/reactions | Get a list of reactions from a comment of an issue |
*IssueApi* | [**issueGetComments**](Apis/IssueApi.md#issuegetcomments) | **GET** /repos/{owner}/{repo}/issues/{index}/comments | List all comments on an issue |
*IssueApi* | [**issueGetCommentsAndTimeline**](Apis/IssueApi.md#issuegetcommentsandtimeline) | **GET** /repos/{owner}/{repo}/issues/{index}/timeline | List all comments and events on an issue |
*IssueApi* | [**issueGetIssue**](Apis/IssueApi.md#issuegetissue) | **GET** /repos/{owner}/{repo}/issues/{index} | Get an issue |
*IssueApi* | [**issueGetIssueAttachment**](Apis/IssueApi.md#issuegetissueattachment) | **GET** /repos/{owner}/{repo}/issues/{index}/assets/{attachment_id} | Get an issue attachment |
*IssueApi* | [**issueGetIssueCommentAttachment**](Apis/IssueApi.md#issuegetissuecommentattachment) | **GET** /repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id} | Get a comment attachment |
*IssueApi* | [**issueGetIssueReactions**](Apis/IssueApi.md#issuegetissuereactions) | **GET** /repos/{owner}/{repo}/issues/{index}/reactions | Get a list reactions of an issue |
*IssueApi* | [**issueGetLabel**](Apis/IssueApi.md#issuegetlabel) | **GET** /repos/{owner}/{repo}/labels/{id} | Get a single label |
*IssueApi* | [**issueGetLabels**](Apis/IssueApi.md#issuegetlabels) | **GET** /repos/{owner}/{repo}/issues/{index}/labels | Get an issue's labels |
*IssueApi* | [**issueGetMilestone**](Apis/IssueApi.md#issuegetmilestone) | **GET** /repos/{owner}/{repo}/milestones/{id} | Get a milestone |
*IssueApi* | [**issueGetMilestonesList**](Apis/IssueApi.md#issuegetmilestoneslist) | **GET** /repos/{owner}/{repo}/milestones | Get all of a repository's opened milestones |
*IssueApi* | [**issueGetRepoComments**](Apis/IssueApi.md#issuegetrepocomments) | **GET** /repos/{owner}/{repo}/issues/comments | List all comments in a repository |
*IssueApi* | [**issueListBlocks**](Apis/IssueApi.md#issuelistblocks) | **GET** /repos/{owner}/{repo}/issues/{index}/blocks | List issues that are blocked by this issue |
*IssueApi* | [**issueListIssueAttachments**](Apis/IssueApi.md#issuelistissueattachments) | **GET** /repos/{owner}/{repo}/issues/{index}/assets | List issue's attachments |
*IssueApi* | [**issueListIssueCommentAttachments**](Apis/IssueApi.md#issuelistissuecommentattachments) | **GET** /repos/{owner}/{repo}/issues/comments/{id}/assets | List comment's attachments |
*IssueApi* | [**issueListIssueDependencies**](Apis/IssueApi.md#issuelistissuedependencies) | **GET** /repos/{owner}/{repo}/issues/{index}/dependencies | List an issue's dependencies, i.e all issues that block this issue. |
*IssueApi* | [**issueListIssues**](Apis/IssueApi.md#issuelistissues) | **GET** /repos/{owner}/{repo}/issues | List a repository's issues |
*IssueApi* | [**issueListLabels**](Apis/IssueApi.md#issuelistlabels) | **GET** /repos/{owner}/{repo}/labels | Get all of a repository's labels |
*IssueApi* | [**issuePostCommentReaction**](Apis/IssueApi.md#issuepostcommentreaction) | **POST** /repos/{owner}/{repo}/issues/comments/{id}/reactions | Add a reaction to a comment of an issue |
*IssueApi* | [**issuePostIssueReaction**](Apis/IssueApi.md#issuepostissuereaction) | **POST** /repos/{owner}/{repo}/issues/{index}/reactions | Add a reaction to an issue |
*IssueApi* | [**issueRemoveIssueBlocking**](Apis/IssueApi.md#issueremoveissueblocking) | **DELETE** /repos/{owner}/{repo}/issues/{index}/blocks | Unblock the issue given in the body by the issue in path |
*IssueApi* | [**issueRemoveIssueDependencies**](Apis/IssueApi.md#issueremoveissuedependencies) | **DELETE** /repos/{owner}/{repo}/issues/{index}/dependencies | Remove an issue dependency |
*IssueApi* | [**issueRemoveLabel**](Apis/IssueApi.md#issueremovelabel) | **DELETE** /repos/{owner}/{repo}/issues/{index}/labels/{id} | Remove a label from an issue |
*IssueApi* | [**issueReplaceLabels**](Apis/IssueApi.md#issuereplacelabels) | **PUT** /repos/{owner}/{repo}/issues/{index}/labels | Replace an issue's labels |
*IssueApi* | [**issueResetTime**](Apis/IssueApi.md#issueresettime) | **DELETE** /repos/{owner}/{repo}/issues/{index}/times | Reset a tracked time of an issue |
*IssueApi* | [**issueSearchIssues**](Apis/IssueApi.md#issuesearchissues) | **GET** /repos/issues/search | Search for issues across the repositories that the user has access to |
*IssueApi* | [**issueStartStopWatch**](Apis/IssueApi.md#issuestartstopwatch) | **POST** /repos/{owner}/{repo}/issues/{index}/stopwatch/start | Start stopwatch on an issue. |
*IssueApi* | [**issueStopStopWatch**](Apis/IssueApi.md#issuestopstopwatch) | **POST** /repos/{owner}/{repo}/issues/{index}/stopwatch/stop | Stop an issue's existing stopwatch. |
*IssueApi* | [**issueSubscriptions**](Apis/IssueApi.md#issuesubscriptions) | **GET** /repos/{owner}/{repo}/issues/{index}/subscriptions | Get users who subscribed on an issue. |
*IssueApi* | [**issueTrackedTimes**](Apis/IssueApi.md#issuetrackedtimes) | **GET** /repos/{owner}/{repo}/issues/{index}/times | List an issue's tracked times |
*IssueApi* | [**moveIssuePin**](Apis/IssueApi.md#moveissuepin) | **PATCH** /repos/{owner}/{repo}/issues/{index}/pin/{position} | Moves the Pin to the given Position |
*IssueApi* | [**pinIssue**](Apis/IssueApi.md#pinissue) | **POST** /repos/{owner}/{repo}/issues/{index}/pin | Pin an Issue |
*IssueApi* | [**unpinIssue**](Apis/IssueApi.md#unpinissue) | **DELETE** /repos/{owner}/{repo}/issues/{index}/pin | Unpin an Issue |
| *MiscellaneousApi* | [**getGitignoreTemplateInfo**](Apis/MiscellaneousApi.md#getgitignoretemplateinfo) | **GET** /gitignore/templates/{name} | Returns information about a gitignore template |
*MiscellaneousApi* | [**getLabelTemplateInfo**](Apis/MiscellaneousApi.md#getlabeltemplateinfo) | **GET** /label/templates/{name} | Returns all labels in a template |
*MiscellaneousApi* | [**getLicenseTemplateInfo**](Apis/MiscellaneousApi.md#getlicensetemplateinfo) | **GET** /licenses/{name} | Returns information about a license template |
*MiscellaneousApi* | [**getNodeInfo**](Apis/MiscellaneousApi.md#getnodeinfo) | **GET** /nodeinfo | Returns the nodeinfo of the Gitea application |
*MiscellaneousApi* | [**getSigningKey**](Apis/MiscellaneousApi.md#getsigningkey) | **GET** /signing-key.gpg | Get default signing-key.gpg |
*MiscellaneousApi* | [**getVersion**](Apis/MiscellaneousApi.md#getversion) | **GET** /version | Returns the version of the Gitea application |
*MiscellaneousApi* | [**listGitignoresTemplates**](Apis/MiscellaneousApi.md#listgitignorestemplates) | **GET** /gitignore/templates | Returns a list of all gitignore templates |
*MiscellaneousApi* | [**listLabelTemplates**](Apis/MiscellaneousApi.md#listlabeltemplates) | **GET** /label/templates | Returns a list of all label templates |
*MiscellaneousApi* | [**listLicenseTemplates**](Apis/MiscellaneousApi.md#listlicensetemplates) | **GET** /licenses | Returns a list of all license templates |
*MiscellaneousApi* | [**renderMarkdown**](Apis/MiscellaneousApi.md#rendermarkdown) | **POST** /markdown | Render a markdown document as HTML |
*MiscellaneousApi* | [**renderMarkdownRaw**](Apis/MiscellaneousApi.md#rendermarkdownraw) | **POST** /markdown/raw | Render raw markdown as HTML |
*MiscellaneousApi* | [**renderMarkup**](Apis/MiscellaneousApi.md#rendermarkup) | **POST** /markup | Render a markup document as HTML |
| *NotificationApi* | [**notifyGetList**](Apis/NotificationApi.md#notifygetlist) | **GET** /notifications | List users's notification threads |
*NotificationApi* | [**notifyGetRepoList**](Apis/NotificationApi.md#notifygetrepolist) | **GET** /repos/{owner}/{repo}/notifications | List users's notification threads on a specific repo |
*NotificationApi* | [**notifyGetThread**](Apis/NotificationApi.md#notifygetthread) | **GET** /notifications/threads/{id} | Get notification thread by ID |
*NotificationApi* | [**notifyNewAvailable**](Apis/NotificationApi.md#notifynewavailable) | **GET** /notifications/new | Check if unread notifications exist |
*NotificationApi* | [**notifyReadList**](Apis/NotificationApi.md#notifyreadlist) | **PUT** /notifications | Mark notification threads as read, pinned or unread |
*NotificationApi* | [**notifyReadRepoList**](Apis/NotificationApi.md#notifyreadrepolist) | **PUT** /repos/{owner}/{repo}/notifications | Mark notification threads as read, pinned or unread on a specific repo |
*NotificationApi* | [**notifyReadThread**](Apis/NotificationApi.md#notifyreadthread) | **PATCH** /notifications/threads/{id} | Mark notification thread as read by ID |
| *OrganizationApi* | [**createOrgRepo**](Apis/OrganizationApi.md#createorgrepo) | **POST** /orgs/{org}/repos | Create a repository in an organization |
*OrganizationApi* | [**createOrgRepoDeprecated**](Apis/OrganizationApi.md#createorgrepodeprecated) | **POST** /org/{org}/repos | Create a repository in an organization |
*OrganizationApi* | [**orgAddTeamMember**](Apis/OrganizationApi.md#orgaddteammember) | **PUT** /teams/{id}/members/{username} | Add a team member |
*OrganizationApi* | [**orgAddTeamRepository**](Apis/OrganizationApi.md#orgaddteamrepository) | **PUT** /teams/{id}/repos/{org}/{repo} | Add a repository to a team |
*OrganizationApi* | [**orgBlockUser**](Apis/OrganizationApi.md#orgblockuser) | **PUT** /orgs/{org}/block/{username} | Blocks a user from the organization |
*OrganizationApi* | [**orgConcealMember**](Apis/OrganizationApi.md#orgconcealmember) | **DELETE** /orgs/{org}/public_members/{username} | Conceal a user's membership |
*OrganizationApi* | [**orgCreate**](Apis/OrganizationApi.md#orgcreate) | **POST** /orgs | Create an organization |
*OrganizationApi* | [**orgCreateHook**](Apis/OrganizationApi.md#orgcreatehook) | **POST** /orgs/{org}/hooks | Create a hook |
*OrganizationApi* | [**orgCreateLabel**](Apis/OrganizationApi.md#orgcreatelabel) | **POST** /orgs/{org}/labels | Create a label for an organization |
*OrganizationApi* | [**orgCreateTeam**](Apis/OrganizationApi.md#orgcreateteam) | **POST** /orgs/{org}/teams | Create a team |
*OrganizationApi* | [**orgDelete**](Apis/OrganizationApi.md#orgdelete) | **DELETE** /orgs/{org} | Delete an organization |
*OrganizationApi* | [**orgDeleteHook**](Apis/OrganizationApi.md#orgdeletehook) | **DELETE** /orgs/{org}/hooks/{id} | Delete a hook |
*OrganizationApi* | [**orgDeleteLabel**](Apis/OrganizationApi.md#orgdeletelabel) | **DELETE** /orgs/{org}/labels/{id} | Delete a label |
*OrganizationApi* | [**orgDeleteMember**](Apis/OrganizationApi.md#orgdeletemember) | **DELETE** /orgs/{org}/members/{username} | Remove a member from an organization |
*OrganizationApi* | [**orgDeleteTeam**](Apis/OrganizationApi.md#orgdeleteteam) | **DELETE** /teams/{id} | Delete a team |
*OrganizationApi* | [**orgEdit**](Apis/OrganizationApi.md#orgedit) | **PATCH** /orgs/{org} | Edit an organization |
*OrganizationApi* | [**orgEditHook**](Apis/OrganizationApi.md#orgedithook) | **PATCH** /orgs/{org}/hooks/{id} | Update a hook |
*OrganizationApi* | [**orgEditLabel**](Apis/OrganizationApi.md#orgeditlabel) | **PATCH** /orgs/{org}/labels/{id} | Update a label |
*OrganizationApi* | [**orgEditTeam**](Apis/OrganizationApi.md#orgeditteam) | **PATCH** /teams/{id} | Edit a team |
*OrganizationApi* | [**orgGet**](Apis/OrganizationApi.md#orgget) | **GET** /orgs/{org} | Get an organization |
*OrganizationApi* | [**orgGetAll**](Apis/OrganizationApi.md#orggetall) | **GET** /orgs | Get list of organizations |
*OrganizationApi* | [**orgGetHook**](Apis/OrganizationApi.md#orggethook) | **GET** /orgs/{org}/hooks/{id} | Get a hook |
*OrganizationApi* | [**orgGetLabel**](Apis/OrganizationApi.md#orggetlabel) | **GET** /orgs/{org}/labels/{id} | Get a single label |
*OrganizationApi* | [**orgGetTeam**](Apis/OrganizationApi.md#orggetteam) | **GET** /teams/{id} | Get a team |
*OrganizationApi* | [**orgGetUserPermissions**](Apis/OrganizationApi.md#orggetuserpermissions) | **GET** /users/{username}/orgs/{org}/permissions | Get user permissions in organization |
*OrganizationApi* | [**orgIsMember**](Apis/OrganizationApi.md#orgismember) | **GET** /orgs/{org}/members/{username} | Check if a user is a member of an organization |
*OrganizationApi* | [**orgIsPublicMember**](Apis/OrganizationApi.md#orgispublicmember) | **GET** /orgs/{org}/public_members/{username} | Check if a user is a public member of an organization |
*OrganizationApi* | [**orgListActivityFeeds**](Apis/OrganizationApi.md#orglistactivityfeeds) | **GET** /orgs/{org}/activities/feeds | List an organization's activity feeds |
*OrganizationApi* | [**orgListBlockedUsers**](Apis/OrganizationApi.md#orglistblockedusers) | **GET** /orgs/{org}/list_blocked | List the organization's blocked users |
*OrganizationApi* | [**orgListCurrentUserOrgs**](Apis/OrganizationApi.md#orglistcurrentuserorgs) | **GET** /user/orgs | List the current user's organizations |
*OrganizationApi* | [**orgListHooks**](Apis/OrganizationApi.md#orglisthooks) | **GET** /orgs/{org}/hooks | List an organization's webhooks |
*OrganizationApi* | [**orgListLabels**](Apis/OrganizationApi.md#orglistlabels) | **GET** /orgs/{org}/labels | List an organization's labels |
*OrganizationApi* | [**orgListMembers**](Apis/OrganizationApi.md#orglistmembers) | **GET** /orgs/{org}/members | List an organization's members |
*OrganizationApi* | [**orgListPublicMembers**](Apis/OrganizationApi.md#orglistpublicmembers) | **GET** /orgs/{org}/public_members | List an organization's public members |
*OrganizationApi* | [**orgListRepos**](Apis/OrganizationApi.md#orglistrepos) | **GET** /orgs/{org}/repos | List an organization's repos |
*OrganizationApi* | [**orgListTeamActivityFeeds**](Apis/OrganizationApi.md#orglistteamactivityfeeds) | **GET** /teams/{id}/activities/feeds | List a team's activity feeds |
*OrganizationApi* | [**orgListTeamMember**](Apis/OrganizationApi.md#orglistteammember) | **GET** /teams/{id}/members/{username} | List a particular member of team |
*OrganizationApi* | [**orgListTeamMembers**](Apis/OrganizationApi.md#orglistteammembers) | **GET** /teams/{id}/members | List a team's members |
*OrganizationApi* | [**orgListTeamRepo**](Apis/OrganizationApi.md#orglistteamrepo) | **GET** /teams/{id}/repos/{org}/{repo} | List a particular repo of team |
*OrganizationApi* | [**orgListTeamRepos**](Apis/OrganizationApi.md#orglistteamrepos) | **GET** /teams/{id}/repos | List a team's repos |
*OrganizationApi* | [**orgListTeams**](Apis/OrganizationApi.md#orglistteams) | **GET** /orgs/{org}/teams | List an organization's teams |
*OrganizationApi* | [**orgListUserOrgs**](Apis/OrganizationApi.md#orglistuserorgs) | **GET** /users/{username}/orgs | List a user's organizations |
*OrganizationApi* | [**orgPublicizeMember**](Apis/OrganizationApi.md#orgpublicizemember) | **PUT** /orgs/{org}/public_members/{username} | Publicize a user's membership |
*OrganizationApi* | [**orgRemoveTeamMember**](Apis/OrganizationApi.md#orgremoveteammember) | **DELETE** /teams/{id}/members/{username} | Remove a team member |
*OrganizationApi* | [**orgRemoveTeamRepository**](Apis/OrganizationApi.md#orgremoveteamrepository) | **DELETE** /teams/{id}/repos/{org}/{repo} | Remove a repository from a team |
*OrganizationApi* | [**orgUnblockUser**](Apis/OrganizationApi.md#orgunblockuser) | **PUT** /orgs/{org}/unblock/{username} | Unblock a user from the organization |
*OrganizationApi* | [**teamSearch**](Apis/OrganizationApi.md#teamsearch) | **GET** /orgs/{org}/teams/search | Search for teams within an organization |
| *PackageApi* | [**deletePackage**](Apis/PackageApi.md#deletepackage) | **DELETE** /packages/{owner}/{type}/{name}/{version} | Delete a package |
*PackageApi* | [**getPackage**](Apis/PackageApi.md#getpackage) | **GET** /packages/{owner}/{type}/{name}/{version} | Gets a package |
*PackageApi* | [**listPackageFiles**](Apis/PackageApi.md#listpackagefiles) | **GET** /packages/{owner}/{type}/{name}/{version}/files | Gets all files of a package |
*PackageApi* | [**listPackages**](Apis/PackageApi.md#listpackages) | **GET** /packages/{owner} | Gets all packages of an owner |
| *RepositoryApi* | [**acceptRepoTransfer**](Apis/RepositoryApi.md#acceptrepotransfer) | **POST** /repos/{owner}/{repo}/transfer/accept | Accept a repo transfer |
*RepositoryApi* | [**createCurrentUserRepo**](Apis/RepositoryApi.md#createcurrentuserrepo) | **POST** /user/repos | Create a repository |
*RepositoryApi* | [**createFork**](Apis/RepositoryApi.md#createfork) | **POST** /repos/{owner}/{repo}/forks | Fork a repository |
*RepositoryApi* | [**generateRepo**](Apis/RepositoryApi.md#generaterepo) | **POST** /repos/{template_owner}/{template_repo}/generate | Create a repository using a template |
*RepositoryApi* | [**getAnnotatedTag**](Apis/RepositoryApi.md#getannotatedtag) | **GET** /repos/{owner}/{repo}/git/tags/{sha} | Gets the tag object of an annotated tag (not lightweight tags) |
*RepositoryApi* | [**getBlob**](Apis/RepositoryApi.md#getblob) | **GET** /repos/{owner}/{repo}/git/blobs/{sha} | Gets the blob of a repository. |
*RepositoryApi* | [**getTree**](Apis/RepositoryApi.md#gettree) | **GET** /repos/{owner}/{repo}/git/trees/{sha} | Gets the tree of a repository. |
*RepositoryApi* | [**listForks**](Apis/RepositoryApi.md#listforks) | **GET** /repos/{owner}/{repo}/forks | List a repository's forks |
*RepositoryApi* | [**rejectRepoTransfer**](Apis/RepositoryApi.md#rejectrepotransfer) | **POST** /repos/{owner}/{repo}/transfer/reject | Reject a repo transfer |
*RepositoryApi* | [**repoAddCollaborator**](Apis/RepositoryApi.md#repoaddcollaborator) | **PUT** /repos/{owner}/{repo}/collaborators/{collaborator} | Add a collaborator to a repository |
*RepositoryApi* | [**repoAddPushMirror**](Apis/RepositoryApi.md#repoaddpushmirror) | **POST** /repos/{owner}/{repo}/push_mirrors | add a push mirror to the repository |
*RepositoryApi* | [**repoAddTeam**](Apis/RepositoryApi.md#repoaddteam) | **PUT** /repos/{owner}/{repo}/teams/{team} | Add a team to a repository |
*RepositoryApi* | [**repoAddTopic**](Apis/RepositoryApi.md#repoaddtopic) | **PUT** /repos/{owner}/{repo}/topics/{topic} | Add a topic to a repository |
*RepositoryApi* | [**repoApplyDiffPatch**](Apis/RepositoryApi.md#repoapplydiffpatch) | **POST** /repos/{owner}/{repo}/diffpatch | Apply diff patch to repository |
*RepositoryApi* | [**repoCancelScheduledAutoMerge**](Apis/RepositoryApi.md#repocancelscheduledautomerge) | **DELETE** /repos/{owner}/{repo}/pulls/{index}/merge | Cancel the scheduled auto merge for the given pull request |
*RepositoryApi* | [**repoChangeFiles**](Apis/RepositoryApi.md#repochangefiles) | **POST** /repos/{owner}/{repo}/contents | Modify multiple files in a repository |
*RepositoryApi* | [**repoCheckCollaborator**](Apis/RepositoryApi.md#repocheckcollaborator) | **GET** /repos/{owner}/{repo}/collaborators/{collaborator} | Check if a user is a collaborator of a repository |
*RepositoryApi* | [**repoCheckTeam**](Apis/RepositoryApi.md#repocheckteam) | **GET** /repos/{owner}/{repo}/teams/{team} | Check if a team is assigned to a repository |
*RepositoryApi* | [**repoCreateBranch**](Apis/RepositoryApi.md#repocreatebranch) | **POST** /repos/{owner}/{repo}/branches | Create a branch |
*RepositoryApi* | [**repoCreateBranchProtection**](Apis/RepositoryApi.md#repocreatebranchprotection) | **POST** /repos/{owner}/{repo}/branch_protections | Create a branch protections for a repository |
*RepositoryApi* | [**repoCreateFile**](Apis/RepositoryApi.md#repocreatefile) | **POST** /repos/{owner}/{repo}/contents/{filepath} | Create a file in a repository |
*RepositoryApi* | [**repoCreateHook**](Apis/RepositoryApi.md#repocreatehook) | **POST** /repos/{owner}/{repo}/hooks | Create a hook |
*RepositoryApi* | [**repoCreateKey**](Apis/RepositoryApi.md#repocreatekey) | **POST** /repos/{owner}/{repo}/keys | Add a key to a repository |
*RepositoryApi* | [**repoCreatePullRequest**](Apis/RepositoryApi.md#repocreatepullrequest) | **POST** /repos/{owner}/{repo}/pulls | Create a pull request |
*RepositoryApi* | [**repoCreatePullReview**](Apis/RepositoryApi.md#repocreatepullreview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews | Create a review to an pull request |
*RepositoryApi* | [**repoCreatePullReviewRequests**](Apis/RepositoryApi.md#repocreatepullreviewrequests) | **POST** /repos/{owner}/{repo}/pulls/{index}/requested_reviewers | create review requests for a pull request |
*RepositoryApi* | [**repoCreateRelease**](Apis/RepositoryApi.md#repocreaterelease) | **POST** /repos/{owner}/{repo}/releases | Create a release |
*RepositoryApi* | [**repoCreateReleaseAttachment**](Apis/RepositoryApi.md#repocreatereleaseattachment) | **POST** /repos/{owner}/{repo}/releases/{id}/assets | Create a release attachment |
*RepositoryApi* | [**repoCreateStatus**](Apis/RepositoryApi.md#repocreatestatus) | **POST** /repos/{owner}/{repo}/statuses/{sha} | Create a commit status |
*RepositoryApi* | [**repoCreateTag**](Apis/RepositoryApi.md#repocreatetag) | **POST** /repos/{owner}/{repo}/tags | Create a new git tag in a repository |
*RepositoryApi* | [**repoCreateWikiPage**](Apis/RepositoryApi.md#repocreatewikipage) | **POST** /repos/{owner}/{repo}/wiki/new | Create a wiki page |
*RepositoryApi* | [**repoDelete**](Apis/RepositoryApi.md#repodelete) | **DELETE** /repos/{owner}/{repo} | Delete a repository |
*RepositoryApi* | [**repoDeleteBranch**](Apis/RepositoryApi.md#repodeletebranch) | **DELETE** /repos/{owner}/{repo}/branches/{branch} | Delete a specific branch from a repository |
*RepositoryApi* | [**repoDeleteBranchProtection**](Apis/RepositoryApi.md#repodeletebranchprotection) | **DELETE** /repos/{owner}/{repo}/branch_protections/{name} | Delete a specific branch protection for the repository |
*RepositoryApi* | [**repoDeleteCollaborator**](Apis/RepositoryApi.md#repodeletecollaborator) | **DELETE** /repos/{owner}/{repo}/collaborators/{collaborator} | Delete a collaborator from a repository |
*RepositoryApi* | [**repoDeleteFile**](Apis/RepositoryApi.md#repodeletefile) | **DELETE** /repos/{owner}/{repo}/contents/{filepath} | Delete a file in a repository |
*RepositoryApi* | [**repoDeleteGitHook**](Apis/RepositoryApi.md#repodeletegithook) | **DELETE** /repos/{owner}/{repo}/hooks/git/{id} | Delete a Git hook in a repository |
*RepositoryApi* | [**repoDeleteHook**](Apis/RepositoryApi.md#repodeletehook) | **DELETE** /repos/{owner}/{repo}/hooks/{id} | Delete a hook in a repository |
*RepositoryApi* | [**repoDeleteKey**](Apis/RepositoryApi.md#repodeletekey) | **DELETE** /repos/{owner}/{repo}/keys/{id} | Delete a key from a repository |
*RepositoryApi* | [**repoDeletePullReview**](Apis/RepositoryApi.md#repodeletepullreview) | **DELETE** /repos/{owner}/{repo}/pulls/{index}/reviews/{id} | Delete a specific review from a pull request |
*RepositoryApi* | [**repoDeletePullReviewRequests**](Apis/RepositoryApi.md#repodeletepullreviewrequests) | **DELETE** /repos/{owner}/{repo}/pulls/{index}/requested_reviewers | cancel review requests for a pull request |
*RepositoryApi* | [**repoDeletePushMirror**](Apis/RepositoryApi.md#repodeletepushmirror) | **DELETE** /repos/{owner}/{repo}/push_mirrors/{name} | deletes a push mirror from a repository by remoteName |
*RepositoryApi* | [**repoDeleteRelease**](Apis/RepositoryApi.md#repodeleterelease) | **DELETE** /repos/{owner}/{repo}/releases/{id} | Delete a release |
*RepositoryApi* | [**repoDeleteReleaseAttachment**](Apis/RepositoryApi.md#repodeletereleaseattachment) | **DELETE** /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id} | Delete a release attachment |
*RepositoryApi* | [**repoDeleteReleaseByTag**](Apis/RepositoryApi.md#repodeletereleasebytag) | **DELETE** /repos/{owner}/{repo}/releases/tags/{tag} | Delete a release by tag name |
*RepositoryApi* | [**repoDeleteTag**](Apis/RepositoryApi.md#repodeletetag) | **DELETE** /repos/{owner}/{repo}/tags/{tag} | Delete a repository's tag by name |
*RepositoryApi* | [**repoDeleteTeam**](Apis/RepositoryApi.md#repodeleteteam) | **DELETE** /repos/{owner}/{repo}/teams/{team} | Delete a team from a repository |
*RepositoryApi* | [**repoDeleteTopic**](Apis/RepositoryApi.md#repodeletetopic) | **DELETE** /repos/{owner}/{repo}/topics/{topic} | Delete a topic from a repository |
*RepositoryApi* | [**repoDeleteWikiPage**](Apis/RepositoryApi.md#repodeletewikipage) | **DELETE** /repos/{owner}/{repo}/wiki/page/{pageName} | Delete a wiki page |
*RepositoryApi* | [**repoDismissPullReview**](Apis/RepositoryApi.md#repodismisspullreview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals | Dismiss a review for a pull request |
*RepositoryApi* | [**repoDownloadCommitDiffOrPatch**](Apis/RepositoryApi.md#repodownloadcommitdifforpatch) | **GET** /repos/{owner}/{repo}/git/commits/{sha}.{diffType} | Get a commit's diff or patch |
*RepositoryApi* | [**repoDownloadPullDiffOrPatch**](Apis/RepositoryApi.md#repodownloadpulldifforpatch) | **GET** /repos/{owner}/{repo}/pulls/{index}.{diffType} | Get a pull request diff or patch |
*RepositoryApi* | [**repoEdit**](Apis/RepositoryApi.md#repoedit) | **PATCH** /repos/{owner}/{repo} | Edit a repository's properties. Only fields that are set will be changed. |
*RepositoryApi* | [**repoEditBranchProtection**](Apis/RepositoryApi.md#repoeditbranchprotection) | **PATCH** /repos/{owner}/{repo}/branch_protections/{name} | Edit a branch protections for a repository. Only fields that are set will be changed |
*RepositoryApi* | [**repoEditGitHook**](Apis/RepositoryApi.md#repoeditgithook) | **PATCH** /repos/{owner}/{repo}/hooks/git/{id} | Edit a Git hook in a repository |
*RepositoryApi* | [**repoEditHook**](Apis/RepositoryApi.md#repoedithook) | **PATCH** /repos/{owner}/{repo}/hooks/{id} | Edit a hook in a repository |
*RepositoryApi* | [**repoEditPullRequest**](Apis/RepositoryApi.md#repoeditpullrequest) | **PATCH** /repos/{owner}/{repo}/pulls/{index} | Update a pull request. If using deadline only the date will be taken into account, and time of day ignored. |
*RepositoryApi* | [**repoEditRelease**](Apis/RepositoryApi.md#repoeditrelease) | **PATCH** /repos/{owner}/{repo}/releases/{id} | Update a release |
*RepositoryApi* | [**repoEditReleaseAttachment**](Apis/RepositoryApi.md#repoeditreleaseattachment) | **PATCH** /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id} | Edit a release attachment |
*RepositoryApi* | [**repoEditWikiPage**](Apis/RepositoryApi.md#repoeditwikipage) | **PATCH** /repos/{owner}/{repo}/wiki/page/{pageName} | Edit a wiki page |
*RepositoryApi* | [**repoGet**](Apis/RepositoryApi.md#repoget) | **GET** /repos/{owner}/{repo} | Get a repository |
*RepositoryApi* | [**repoGetAllCommits**](Apis/RepositoryApi.md#repogetallcommits) | **GET** /repos/{owner}/{repo}/commits | Get a list of all commits from a repository |
*RepositoryApi* | [**repoGetArchive**](Apis/RepositoryApi.md#repogetarchive) | **GET** /repos/{owner}/{repo}/archive/{archive} | Get an archive of a repository |
*RepositoryApi* | [**repoGetAssignees**](Apis/RepositoryApi.md#repogetassignees) | **GET** /repos/{owner}/{repo}/assignees | Return all users that have write access and can be assigned to issues |
*RepositoryApi* | [**repoGetBranch**](Apis/RepositoryApi.md#repogetbranch) | **GET** /repos/{owner}/{repo}/branches/{branch} | Retrieve a specific branch from a repository, including its effective branch protection |
*RepositoryApi* | [**repoGetBranchProtection**](Apis/RepositoryApi.md#repogetbranchprotection) | **GET** /repos/{owner}/{repo}/branch_protections/{name} | Get a specific branch protection for the repository |
*RepositoryApi* | [**repoGetByID**](Apis/RepositoryApi.md#repogetbyid) | **GET** /repositories/{id} | Get a repository by id |
*RepositoryApi* | [**repoGetCombinedStatusByRef**](Apis/RepositoryApi.md#repogetcombinedstatusbyref) | **GET** /repos/{owner}/{repo}/commits/{ref}/status | Get a commit's combined status, by branch/tag/commit reference |
*RepositoryApi* | [**repoGetContents**](Apis/RepositoryApi.md#repogetcontents) | **GET** /repos/{owner}/{repo}/contents/{filepath} | Gets the metadata and contents (if a file) of an entry in a repository, or a list of entries if a dir |
*RepositoryApi* | [**repoGetContentsList**](Apis/RepositoryApi.md#repogetcontentslist) | **GET** /repos/{owner}/{repo}/contents | Gets the metadata of all the entries of the root dir |
*RepositoryApi* | [**repoGetEditorConfig**](Apis/RepositoryApi.md#repogeteditorconfig) | **GET** /repos/{owner}/{repo}/editorconfig/{filepath} | Get the EditorConfig definitions of a file in a repository |
*RepositoryApi* | [**repoGetGitHook**](Apis/RepositoryApi.md#repogetgithook) | **GET** /repos/{owner}/{repo}/hooks/git/{id} | Get a Git hook |
*RepositoryApi* | [**repoGetHook**](Apis/RepositoryApi.md#repogethook) | **GET** /repos/{owner}/{repo}/hooks/{id} | Get a hook |
*RepositoryApi* | [**repoGetIssueConfig**](Apis/RepositoryApi.md#repogetissueconfig) | **GET** /repos/{owner}/{repo}/issue_config | Returns the issue config for a repo |
*RepositoryApi* | [**repoGetIssueTemplates**](Apis/RepositoryApi.md#repogetissuetemplates) | **GET** /repos/{owner}/{repo}/issue_templates | Get available issue templates for a repository |
*RepositoryApi* | [**repoGetKey**](Apis/RepositoryApi.md#repogetkey) | **GET** /repos/{owner}/{repo}/keys/{id} | Get a repository's key by id |
*RepositoryApi* | [**repoGetLanguages**](Apis/RepositoryApi.md#repogetlanguages) | **GET** /repos/{owner}/{repo}/languages | Get languages and number of bytes of code written |
*RepositoryApi* | [**repoGetLatestRelease**](Apis/RepositoryApi.md#repogetlatestrelease) | **GET** /repos/{owner}/{repo}/releases/latest | Gets the most recent non-prerelease, non-draft release of a repository, sorted by created_at |
*RepositoryApi* | [**repoGetNote**](Apis/RepositoryApi.md#repogetnote) | **GET** /repos/{owner}/{repo}/git/notes/{sha} | Get a note corresponding to a single commit from a repository |
*RepositoryApi* | [**repoGetPullRequest**](Apis/RepositoryApi.md#repogetpullrequest) | **GET** /repos/{owner}/{repo}/pulls/{index} | Get a pull request |
*RepositoryApi* | [**repoGetPullRequestCommits**](Apis/RepositoryApi.md#repogetpullrequestcommits) | **GET** /repos/{owner}/{repo}/pulls/{index}/commits | Get commits for a pull request |
*RepositoryApi* | [**repoGetPullRequestFiles**](Apis/RepositoryApi.md#repogetpullrequestfiles) | **GET** /repos/{owner}/{repo}/pulls/{index}/files | Get changed files for a pull request |
*RepositoryApi* | [**repoGetPullReview**](Apis/RepositoryApi.md#repogetpullreview) | **GET** /repos/{owner}/{repo}/pulls/{index}/reviews/{id} | Get a specific review for a pull request |
*RepositoryApi* | [**repoGetPullReviewComments**](Apis/RepositoryApi.md#repogetpullreviewcomments) | **GET** /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments | Get a specific review for a pull request |
*RepositoryApi* | [**repoGetPushMirrorByRemoteName**](Apis/RepositoryApi.md#repogetpushmirrorbyremotename) | **GET** /repos/{owner}/{repo}/push_mirrors/{name} | Get push mirror of the repository by remoteName |
*RepositoryApi* | [**repoGetRawFile**](Apis/RepositoryApi.md#repogetrawfile) | **GET** /repos/{owner}/{repo}/raw/{filepath} | Get a file from a repository |
*RepositoryApi* | [**repoGetRawFileOrLFS**](Apis/RepositoryApi.md#repogetrawfileorlfs) | **GET** /repos/{owner}/{repo}/media/{filepath} | Get a file or it's LFS object from a repository |
*RepositoryApi* | [**repoGetRelease**](Apis/RepositoryApi.md#repogetrelease) | **GET** /repos/{owner}/{repo}/releases/{id} | Get a release |
*RepositoryApi* | [**repoGetReleaseAttachment**](Apis/RepositoryApi.md#repogetreleaseattachment) | **GET** /repos/{owner}/{repo}/releases/{id}/assets/{attachment_id} | Get a release attachment |
*RepositoryApi* | [**repoGetReleaseByTag**](Apis/RepositoryApi.md#repogetreleasebytag) | **GET** /repos/{owner}/{repo}/releases/tags/{tag} | Get a release by tag name |
*RepositoryApi* | [**repoGetRepoPermissions**](Apis/RepositoryApi.md#repogetrepopermissions) | **GET** /repos/{owner}/{repo}/collaborators/{collaborator}/permission | Get repository permissions for a user |
*RepositoryApi* | [**repoGetReviewers**](Apis/RepositoryApi.md#repogetreviewers) | **GET** /repos/{owner}/{repo}/reviewers | Return all users that can be requested to review in this repo |
*RepositoryApi* | [**repoGetSingleCommit**](Apis/RepositoryApi.md#repogetsinglecommit) | **GET** /repos/{owner}/{repo}/git/commits/{sha} | Get a single commit from a repository |
*RepositoryApi* | [**repoGetTag**](Apis/RepositoryApi.md#repogettag) | **GET** /repos/{owner}/{repo}/tags/{tag} | Get the tag of a repository by tag name |
*RepositoryApi* | [**repoGetWikiPage**](Apis/RepositoryApi.md#repogetwikipage) | **GET** /repos/{owner}/{repo}/wiki/page/{pageName} | Get a wiki page |
*RepositoryApi* | [**repoGetWikiPageRevisions**](Apis/RepositoryApi.md#repogetwikipagerevisions) | **GET** /repos/{owner}/{repo}/wiki/revisions/{pageName} | Get revisions of a wiki page |
*RepositoryApi* | [**repoGetWikiPages**](Apis/RepositoryApi.md#repogetwikipages) | **GET** /repos/{owner}/{repo}/wiki/pages | Get all wiki pages |
*RepositoryApi* | [**repoListActivityFeeds**](Apis/RepositoryApi.md#repolistactivityfeeds) | **GET** /repos/{owner}/{repo}/activities/feeds | List a repository's activity feeds |
*RepositoryApi* | [**repoListAllGitRefs**](Apis/RepositoryApi.md#repolistallgitrefs) | **GET** /repos/{owner}/{repo}/git/refs | Get specified ref or filtered repository's refs |
*RepositoryApi* | [**repoListBranchProtection**](Apis/RepositoryApi.md#repolistbranchprotection) | **GET** /repos/{owner}/{repo}/branch_protections | List branch protections for a repository |
*RepositoryApi* | [**repoListBranches**](Apis/RepositoryApi.md#repolistbranches) | **GET** /repos/{owner}/{repo}/branches | List a repository's branches |
*RepositoryApi* | [**repoListCollaborators**](Apis/RepositoryApi.md#repolistcollaborators) | **GET** /repos/{owner}/{repo}/collaborators | List a repository's collaborators |
*RepositoryApi* | [**repoListGitHooks**](Apis/RepositoryApi.md#repolistgithooks) | **GET** /repos/{owner}/{repo}/hooks/git | List the Git hooks in a repository |
*RepositoryApi* | [**repoListGitRefs**](Apis/RepositoryApi.md#repolistgitrefs) | **GET** /repos/{owner}/{repo}/git/refs/{ref} | Get specified ref or filtered repository's refs |
*RepositoryApi* | [**repoListHooks**](Apis/RepositoryApi.md#repolisthooks) | **GET** /repos/{owner}/{repo}/hooks | List the hooks in a repository |
*RepositoryApi* | [**repoListKeys**](Apis/RepositoryApi.md#repolistkeys) | **GET** /repos/{owner}/{repo}/keys | List a repository's keys |
*RepositoryApi* | [**repoListPinnedIssues**](Apis/RepositoryApi.md#repolistpinnedissues) | **GET** /repos/{owner}/{repo}/issues/pinned | List a repo's pinned issues |
*RepositoryApi* | [**repoListPinnedPullRequests**](Apis/RepositoryApi.md#repolistpinnedpullrequests) | **GET** /repos/{owner}/{repo}/pulls/pinned | List a repo's pinned pull requests |
*RepositoryApi* | [**repoListPullRequests**](Apis/RepositoryApi.md#repolistpullrequests) | **GET** /repos/{owner}/{repo}/pulls | List a repo's pull requests |
*RepositoryApi* | [**repoListPullReviews**](Apis/RepositoryApi.md#repolistpullreviews) | **GET** /repos/{owner}/{repo}/pulls/{index}/reviews | List all reviews for a pull request |
*RepositoryApi* | [**repoListPushMirrors**](Apis/RepositoryApi.md#repolistpushmirrors) | **GET** /repos/{owner}/{repo}/push_mirrors | Get all push mirrors of the repository |
*RepositoryApi* | [**repoListReleaseAttachments**](Apis/RepositoryApi.md#repolistreleaseattachments) | **GET** /repos/{owner}/{repo}/releases/{id}/assets | List release's attachments |
*RepositoryApi* | [**repoListReleases**](Apis/RepositoryApi.md#repolistreleases) | **GET** /repos/{owner}/{repo}/releases | List a repo's releases |
*RepositoryApi* | [**repoListStargazers**](Apis/RepositoryApi.md#repoliststargazers) | **GET** /repos/{owner}/{repo}/stargazers | List a repo's stargazers |
*RepositoryApi* | [**repoListStatuses**](Apis/RepositoryApi.md#repoliststatuses) | **GET** /repos/{owner}/{repo}/statuses/{sha} | Get a commit's statuses |
*RepositoryApi* | [**repoListStatusesByRef**](Apis/RepositoryApi.md#repoliststatusesbyref) | **GET** /repos/{owner}/{repo}/commits/{ref}/statuses | Get a commit's statuses, by branch/tag/commit reference |
*RepositoryApi* | [**repoListSubscribers**](Apis/RepositoryApi.md#repolistsubscribers) | **GET** /repos/{owner}/{repo}/subscribers | List a repo's watchers |
*RepositoryApi* | [**repoListTags**](Apis/RepositoryApi.md#repolisttags) | **GET** /repos/{owner}/{repo}/tags | List a repository's tags |
*RepositoryApi* | [**repoListTeams**](Apis/RepositoryApi.md#repolistteams) | **GET** /repos/{owner}/{repo}/teams | List a repository's teams |
*RepositoryApi* | [**repoListTopics**](Apis/RepositoryApi.md#repolisttopics) | **GET** /repos/{owner}/{repo}/topics | Get list of topics that a repository has |
*RepositoryApi* | [**repoMergePullRequest**](Apis/RepositoryApi.md#repomergepullrequest) | **POST** /repos/{owner}/{repo}/pulls/{index}/merge | Merge a pull request |
*RepositoryApi* | [**repoMigrate**](Apis/RepositoryApi.md#repomigrate) | **POST** /repos/migrate | Migrate a remote git repository |
*RepositoryApi* | [**repoMirrorSync**](Apis/RepositoryApi.md#repomirrorsync) | **POST** /repos/{owner}/{repo}/mirror-sync | Sync a mirrored repository |
*RepositoryApi* | [**repoNewPinAllowed**](Apis/RepositoryApi.md#reponewpinallowed) | **GET** /repos/{owner}/{repo}/new_pin_allowed | Returns if new Issue Pins are allowed |
*RepositoryApi* | [**repoPullRequestIsMerged**](Apis/RepositoryApi.md#repopullrequestismerged) | **GET** /repos/{owner}/{repo}/pulls/{index}/merge | Check if a pull request has been merged |
*RepositoryApi* | [**repoPushMirrorSync**](Apis/RepositoryApi.md#repopushmirrorsync) | **POST** /repos/{owner}/{repo}/push_mirrors-sync | Sync all push mirrored repository |
*RepositoryApi* | [**repoSearch**](Apis/RepositoryApi.md#reposearch) | **GET** /repos/search | Search for repositories |
*RepositoryApi* | [**repoSigningKey**](Apis/RepositoryApi.md#reposigningkey) | **GET** /repos/{owner}/{repo}/signing-key.gpg | Get signing-key.gpg for given repository |
*RepositoryApi* | [**repoSubmitPullReview**](Apis/RepositoryApi.md#reposubmitpullreview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews/{id} | Submit a pending review to an pull request |
*RepositoryApi* | [**repoTestHook**](Apis/RepositoryApi.md#repotesthook) | **POST** /repos/{owner}/{repo}/hooks/{id}/tests | Test a push webhook |
*RepositoryApi* | [**repoTrackedTimes**](Apis/RepositoryApi.md#repotrackedtimes) | **GET** /repos/{owner}/{repo}/times | List a repo's tracked times |
*RepositoryApi* | [**repoTransfer**](Apis/RepositoryApi.md#repotransfer) | **POST** /repos/{owner}/{repo}/transfer | Transfer a repo ownership |
*RepositoryApi* | [**repoUnDismissPullReview**](Apis/RepositoryApi.md#repoundismisspullreview) | **POST** /repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals | Cancel to dismiss a review for a pull request |
*RepositoryApi* | [**repoUpdateFile**](Apis/RepositoryApi.md#repoupdatefile) | **PUT** /repos/{owner}/{repo}/contents/{filepath} | Update a file in a repository |
*RepositoryApi* | [**repoUpdatePullRequest**](Apis/RepositoryApi.md#repoupdatepullrequest) | **POST** /repos/{owner}/{repo}/pulls/{index}/update | Merge PR's baseBranch into headBranch |
*RepositoryApi* | [**repoUpdateTopics**](Apis/RepositoryApi.md#repoupdatetopics) | **PUT** /repos/{owner}/{repo}/topics | Replace list of topics for a repository |
*RepositoryApi* | [**repoValidateIssueConfig**](Apis/RepositoryApi.md#repovalidateissueconfig) | **GET** /repos/{owner}/{repo}/issue_config/validate | Returns the validation information for a issue config |
*RepositoryApi* | [**topicSearch**](Apis/RepositoryApi.md#topicsearch) | **GET** /topics/search | search topics via keyword |
*RepositoryApi* | [**userCurrentCheckSubscription**](Apis/RepositoryApi.md#usercurrentchecksubscription) | **GET** /repos/{owner}/{repo}/subscription | Check if the current user is watching a repo |
*RepositoryApi* | [**userCurrentDeleteSubscription**](Apis/RepositoryApi.md#usercurrentdeletesubscription) | **DELETE** /repos/{owner}/{repo}/subscription | Unwatch a repo |
*RepositoryApi* | [**userCurrentPutSubscription**](Apis/RepositoryApi.md#usercurrentputsubscription) | **PUT** /repos/{owner}/{repo}/subscription | Watch a repo |
*RepositoryApi* | [**userTrackedTimes**](Apis/RepositoryApi.md#usertrackedtimes) | **GET** /repos/{owner}/{repo}/times/{user} | List a user's tracked times in a repo |
| *SettingsApi* | [**getGeneralAPISettings**](Apis/SettingsApi.md#getgeneralapisettings) | **GET** /settings/api | Get instance's global settings for api |
*SettingsApi* | [**getGeneralAttachmentSettings**](Apis/SettingsApi.md#getgeneralattachmentsettings) | **GET** /settings/attachment | Get instance's global settings for Attachment |
*SettingsApi* | [**getGeneralRepositorySettings**](Apis/SettingsApi.md#getgeneralrepositorysettings) | **GET** /settings/repository | Get instance's global settings for repositories |
*SettingsApi* | [**getGeneralUISettings**](Apis/SettingsApi.md#getgeneraluisettings) | **GET** /settings/ui | Get instance's global settings for ui |
| *UserApi* | [**createCurrentUserRepo**](Apis/UserApi.md#createcurrentuserrepo) | **POST** /user/repos | Create a repository |
*UserApi* | [**getUserSettings**](Apis/UserApi.md#getusersettings) | **GET** /user/settings | Get user settings |
*UserApi* | [**getVerificationToken**](Apis/UserApi.md#getverificationtoken) | **GET** /user/gpg_key_token | Get a Token to verify |
*UserApi* | [**updateUserSettings**](Apis/UserApi.md#updateusersettings) | **PATCH** /user/settings | Update user settings |
*UserApi* | [**userAddEmail**](Apis/UserApi.md#useraddemail) | **POST** /user/emails | Add email addresses |
*UserApi* | [**userBlockUser**](Apis/UserApi.md#userblockuser) | **PUT** /user/block/{username} | Blocks a user from the doer. |
*UserApi* | [**userCheckFollowing**](Apis/UserApi.md#usercheckfollowing) | **GET** /users/{username}/following/{target} | Check if one user is following another user |
*UserApi* | [**userCreateHook**](Apis/UserApi.md#usercreatehook) | **POST** /user/hooks | Create a hook |
*UserApi* | [**userCreateOAuth2Application**](Apis/UserApi.md#usercreateoauth2application) | **POST** /user/applications/oauth2 | creates a new OAuth2 application |
*UserApi* | [**userCreateToken**](Apis/UserApi.md#usercreatetoken) | **POST** /users/{username}/tokens | Create an access token |
*UserApi* | [**userCurrentCheckFollowing**](Apis/UserApi.md#usercurrentcheckfollowing) | **GET** /user/following/{username} | Check whether a user is followed by the authenticated user |
*UserApi* | [**userCurrentCheckStarring**](Apis/UserApi.md#usercurrentcheckstarring) | **GET** /user/starred/{owner}/{repo} | Whether the authenticated is starring the repo |
*UserApi* | [**userCurrentDeleteFollow**](Apis/UserApi.md#usercurrentdeletefollow) | **DELETE** /user/following/{username} | Unfollow a user |
*UserApi* | [**userCurrentDeleteGPGKey**](Apis/UserApi.md#usercurrentdeletegpgkey) | **DELETE** /user/gpg_keys/{id} | Remove a GPG key |
*UserApi* | [**userCurrentDeleteKey**](Apis/UserApi.md#usercurrentdeletekey) | **DELETE** /user/keys/{id} | Delete a public key |
*UserApi* | [**userCurrentDeleteStar**](Apis/UserApi.md#usercurrentdeletestar) | **DELETE** /user/starred/{owner}/{repo} | Unstar the given repo |
*UserApi* | [**userCurrentGetGPGKey**](Apis/UserApi.md#usercurrentgetgpgkey) | **GET** /user/gpg_keys/{id} | Get a GPG key |
*UserApi* | [**userCurrentGetKey**](Apis/UserApi.md#usercurrentgetkey) | **GET** /user/keys/{id} | Get a public key |
*UserApi* | [**userCurrentListFollowers**](Apis/UserApi.md#usercurrentlistfollowers) | **GET** /user/followers | List the authenticated user's followers |
*UserApi* | [**userCurrentListFollowing**](Apis/UserApi.md#usercurrentlistfollowing) | **GET** /user/following | List the users that the authenticated user is following |
*UserApi* | [**userCurrentListGPGKeys**](Apis/UserApi.md#usercurrentlistgpgkeys) | **GET** /user/gpg_keys | List the authenticated user's GPG keys |
*UserApi* | [**userCurrentListKeys**](Apis/UserApi.md#usercurrentlistkeys) | **GET** /user/keys | List the authenticated user's public keys |
*UserApi* | [**userCurrentListRepos**](Apis/UserApi.md#usercurrentlistrepos) | **GET** /user/repos | List the repos that the authenticated user owns |
*UserApi* | [**userCurrentListStarred**](Apis/UserApi.md#usercurrentliststarred) | **GET** /user/starred | The repos that the authenticated user has starred |
*UserApi* | [**userCurrentListSubscriptions**](Apis/UserApi.md#usercurrentlistsubscriptions) | **GET** /user/subscriptions | List repositories watched by the authenticated user |
*UserApi* | [**userCurrentPostGPGKey**](Apis/UserApi.md#usercurrentpostgpgkey) | **POST** /user/gpg_keys | Create a GPG key |
*UserApi* | [**userCurrentPostKey**](Apis/UserApi.md#usercurrentpostkey) | **POST** /user/keys | Create a public key |
*UserApi* | [**userCurrentPutFollow**](Apis/UserApi.md#usercurrentputfollow) | **PUT** /user/following/{username} | Follow a user |
*UserApi* | [**userCurrentPutStar**](Apis/UserApi.md#usercurrentputstar) | **PUT** /user/starred/{owner}/{repo} | Star the given repo |
*UserApi* | [**userCurrentTrackedTimes**](Apis/UserApi.md#usercurrenttrackedtimes) | **GET** /user/times | List the current user's tracked times |
*UserApi* | [**userDeleteAccessToken**](Apis/UserApi.md#userdeleteaccesstoken) | **DELETE** /users/{username}/tokens/{token} | delete an access token |
*UserApi* | [**userDeleteEmail**](Apis/UserApi.md#userdeleteemail) | **DELETE** /user/emails | Delete email addresses |
*UserApi* | [**userDeleteHook**](Apis/UserApi.md#userdeletehook) | **DELETE** /user/hooks/{id} | Delete a hook |
*UserApi* | [**userDeleteOAuth2Application**](Apis/UserApi.md#userdeleteoauth2application) | **DELETE** /user/applications/oauth2/{id} | delete an OAuth2 Application |
*UserApi* | [**userEditHook**](Apis/UserApi.md#useredithook) | **PATCH** /user/hooks/{id} | Update a hook |
*UserApi* | [**userGet**](Apis/UserApi.md#userget) | **GET** /users/{username} | Get a user |
*UserApi* | [**userGetCurrent**](Apis/UserApi.md#usergetcurrent) | **GET** /user | Get the authenticated user |
*UserApi* | [**userGetHeatmapData**](Apis/UserApi.md#usergetheatmapdata) | **GET** /users/{username}/heatmap | Get a user's heatmap |
*UserApi* | [**userGetHook**](Apis/UserApi.md#usergethook) | **GET** /user/hooks/{id} | Get a hook |
*UserApi* | [**userGetOAuth2Application**](Apis/UserApi.md#usergetoauth2application) | **GET** /user/applications/oauth2/{id} | get an OAuth2 Application |
*UserApi* | [**userGetOauth2Application**](Apis/UserApi.md#usergetoauth2application) | **GET** /user/applications/oauth2 | List the authenticated user's oauth2 applications |
*UserApi* | [**userGetStopWatches**](Apis/UserApi.md#usergetstopwatches) | **GET** /user/stopwatches | Get list of all existing stopwatches |
*UserApi* | [**userGetTokens**](Apis/UserApi.md#usergettokens) | **GET** /users/{username}/tokens | List the authenticated user's access tokens |
*UserApi* | [**userListActivityFeeds**](Apis/UserApi.md#userlistactivityfeeds) | **GET** /users/{username}/activities/feeds | List a user's activity feeds |
*UserApi* | [**userListBlockedUsers**](Apis/UserApi.md#userlistblockedusers) | **GET** /user/list_blocked | List the authenticated user's blocked users |
*UserApi* | [**userListEmails**](Apis/UserApi.md#userlistemails) | **GET** /user/emails | List the authenticated user's email addresses |
*UserApi* | [**userListFollowers**](Apis/UserApi.md#userlistfollowers) | **GET** /users/{username}/followers | List the given user's followers |
*UserApi* | [**userListFollowing**](Apis/UserApi.md#userlistfollowing) | **GET** /users/{username}/following | List the users that the given user is following |
*UserApi* | [**userListGPGKeys**](Apis/UserApi.md#userlistgpgkeys) | **GET** /users/{username}/gpg_keys | List the given user's GPG keys |
*UserApi* | [**userListHooks**](Apis/UserApi.md#userlisthooks) | **GET** /user/hooks | List the authenticated user's webhooks |
*UserApi* | [**userListKeys**](Apis/UserApi.md#userlistkeys) | **GET** /users/{username}/keys | List the given user's public keys |
*UserApi* | [**userListRepos**](Apis/UserApi.md#userlistrepos) | **GET** /users/{username}/repos | List the repos owned by the given user |
*UserApi* | [**userListStarred**](Apis/UserApi.md#userliststarred) | **GET** /users/{username}/starred | The repos that the given user has starred |
*UserApi* | [**userListSubscriptions**](Apis/UserApi.md#userlistsubscriptions) | **GET** /users/{username}/subscriptions | List the repositories watched by a user |
*UserApi* | [**userListTeams**](Apis/UserApi.md#userlistteams) | **GET** /user/teams | List all the teams a user belongs to |
*UserApi* | [**userSearch**](Apis/UserApi.md#usersearch) | **GET** /users/search | Search for users |
*UserApi* | [**userUnblockUser**](Apis/UserApi.md#userunblockuser) | **PUT** /user/unblock/{username} | Unblocks a user from the doer. |
*UserApi* | [**userUpdateOAuth2Application**](Apis/UserApi.md#userupdateoauth2application) | **PATCH** /user/applications/oauth2/{id} | update an OAuth2 Application, this includes regenerating the client secret |
*UserApi* | [**userVerifyGPGKey**](Apis/UserApi.md#userverifygpgkey) | **POST** /user/gpg_key_verify | Verify a GPG key |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [APIError](./models/APIError.md)
 - [AccessToken](./models/AccessToken.md)
 - [Activity](./models/Activity.md)
 - [ActivityPub](./models/ActivityPub.md)
 - [AddCollaboratorOption](./models/AddCollaboratorOption.md)
 - [AddTimeOption](./models/AddTimeOption.md)
 - [AnnotatedTag](./models/AnnotatedTag.md)
 - [AnnotatedTagObject](./models/AnnotatedTagObject.md)
 - [Attachment](./models/Attachment.md)
 - [BlockedUser](./models/BlockedUser.md)
 - [Branch](./models/Branch.md)
 - [BranchProtection](./models/BranchProtection.md)
 - [ChangeFileOperation](./models/ChangeFileOperation.md)
 - [ChangeFilesOptions](./models/ChangeFilesOptions.md)
 - [ChangedFile](./models/ChangedFile.md)
 - [CombinedStatus](./models/CombinedStatus.md)
 - [Comment](./models/Comment.md)
 - [Commit](./models/Commit.md)
 - [CommitAffectedFiles](./models/CommitAffectedFiles.md)
 - [CommitDateOptions](./models/CommitDateOptions.md)
 - [CommitMeta](./models/CommitMeta.md)
 - [CommitStats](./models/CommitStats.md)
 - [CommitStatus](./models/CommitStatus.md)
 - [CommitUser](./models/CommitUser.md)
 - [ContentsResponse](./models/ContentsResponse.md)
 - [CreateAccessTokenOption](./models/CreateAccessTokenOption.md)
 - [CreateBranchProtectionOption](./models/CreateBranchProtectionOption.md)
 - [CreateBranchRepoOption](./models/CreateBranchRepoOption.md)
 - [CreateEmailOption](./models/CreateEmailOption.md)
 - [CreateFileOptions](./models/CreateFileOptions.md)
 - [CreateForkOption](./models/CreateForkOption.md)
 - [CreateGPGKeyOption](./models/CreateGPGKeyOption.md)
 - [CreateHookOption](./models/CreateHookOption.md)
 - [CreateIssueCommentOption](./models/CreateIssueCommentOption.md)
 - [CreateIssueOption](./models/CreateIssueOption.md)
 - [CreateKeyOption](./models/CreateKeyOption.md)
 - [CreateLabelOption](./models/CreateLabelOption.md)
 - [CreateMilestoneOption](./models/CreateMilestoneOption.md)
 - [CreateOAuth2ApplicationOptions](./models/CreateOAuth2ApplicationOptions.md)
 - [CreateOrgOption](./models/CreateOrgOption.md)
 - [CreatePullRequestOption](./models/CreatePullRequestOption.md)
 - [CreatePullReviewComment](./models/CreatePullReviewComment.md)
 - [CreatePullReviewOptions](./models/CreatePullReviewOptions.md)
 - [CreatePushMirrorOption](./models/CreatePushMirrorOption.md)
 - [CreateReleaseOption](./models/CreateReleaseOption.md)
 - [CreateRepoOption](./models/CreateRepoOption.md)
 - [CreateStatusOption](./models/CreateStatusOption.md)
 - [CreateTagOption](./models/CreateTagOption.md)
 - [CreateTeamOption](./models/CreateTeamOption.md)
 - [CreateUserOption](./models/CreateUserOption.md)
 - [CreateWikiPageOptions](./models/CreateWikiPageOptions.md)
 - [Cron](./models/Cron.md)
 - [DeleteEmailOption](./models/DeleteEmailOption.md)
 - [DeleteFileOptions](./models/DeleteFileOptions.md)
 - [DeployKey](./models/DeployKey.md)
 - [DismissPullReviewOptions](./models/DismissPullReviewOptions.md)
 - [EditAttachmentOptions](./models/EditAttachmentOptions.md)
 - [EditBranchProtectionOption](./models/EditBranchProtectionOption.md)
 - [EditDeadlineOption](./models/EditDeadlineOption.md)
 - [EditGitHookOption](./models/EditGitHookOption.md)
 - [EditHookOption](./models/EditHookOption.md)
 - [EditIssueCommentOption](./models/EditIssueCommentOption.md)
 - [EditIssueOption](./models/EditIssueOption.md)
 - [EditLabelOption](./models/EditLabelOption.md)
 - [EditMilestoneOption](./models/EditMilestoneOption.md)
 - [EditOrgOption](./models/EditOrgOption.md)
 - [EditPullRequestOption](./models/EditPullRequestOption.md)
 - [EditReactionOption](./models/EditReactionOption.md)
 - [EditReleaseOption](./models/EditReleaseOption.md)
 - [EditRepoOption](./models/EditRepoOption.md)
 - [EditTeamOption](./models/EditTeamOption.md)
 - [EditUserOption](./models/EditUserOption.md)
 - [Email](./models/Email.md)
 - [ExternalTracker](./models/ExternalTracker.md)
 - [ExternalWiki](./models/ExternalWiki.md)
 - [FileCommitResponse](./models/FileCommitResponse.md)
 - [FileDeleteResponse](./models/FileDeleteResponse.md)
 - [FileLinksResponse](./models/FileLinksResponse.md)
 - [FileResponse](./models/FileResponse.md)
 - [FilesResponse](./models/FilesResponse.md)
 - [GPGKey](./models/GPGKey.md)
 - [GPGKeyEmail](./models/GPGKeyEmail.md)
 - [GeneralAPISettings](./models/GeneralAPISettings.md)
 - [GeneralAttachmentSettings](./models/GeneralAttachmentSettings.md)
 - [GeneralRepoSettings](./models/GeneralRepoSettings.md)
 - [GeneralUISettings](./models/GeneralUISettings.md)
 - [GenerateRepoOption](./models/GenerateRepoOption.md)
 - [GitBlobResponse](./models/GitBlobResponse.md)
 - [GitEntry](./models/GitEntry.md)
 - [GitHook](./models/GitHook.md)
 - [GitObject](./models/GitObject.md)
 - [GitTreeResponse](./models/GitTreeResponse.md)
 - [GitignoreTemplateInfo](./models/GitignoreTemplateInfo.md)
 - [Hook](./models/Hook.md)
 - [Identity](./models/Identity.md)
 - [InternalTracker](./models/InternalTracker.md)
 - [Issue](./models/Issue.md)
 - [IssueConfig](./models/IssueConfig.md)
 - [IssueConfigContactLink](./models/IssueConfigContactLink.md)
 - [IssueConfigValidation](./models/IssueConfigValidation.md)
 - [IssueDeadline](./models/IssueDeadline.md)
 - [IssueFormField](./models/IssueFormField.md)
 - [IssueLabelsOption](./models/IssueLabelsOption.md)
 - [IssueMeta](./models/IssueMeta.md)
 - [IssueTemplate](./models/IssueTemplate.md)
 - [Label](./models/Label.md)
 - [LabelTemplate](./models/LabelTemplate.md)
 - [LicenseTemplateInfo](./models/LicenseTemplateInfo.md)
 - [LicensesTemplateListEntry](./models/LicensesTemplateListEntry.md)
 - [MarkdownOption](./models/MarkdownOption.md)
 - [MarkupOption](./models/MarkupOption.md)
 - [MergePullRequestOption](./models/MergePullRequestOption.md)
 - [MigrateRepoOptions](./models/MigrateRepoOptions.md)
 - [Milestone](./models/Milestone.md)
 - [NewIssuePinsAllowed](./models/NewIssuePinsAllowed.md)
 - [NodeInfo](./models/NodeInfo.md)
 - [NodeInfoServices](./models/NodeInfoServices.md)
 - [NodeInfoSoftware](./models/NodeInfoSoftware.md)
 - [NodeInfoUsage](./models/NodeInfoUsage.md)
 - [NodeInfoUsageUsers](./models/NodeInfoUsageUsers.md)
 - [Note](./models/Note.md)
 - [NotificationCount](./models/NotificationCount.md)
 - [NotificationSubject](./models/NotificationSubject.md)
 - [NotificationThread](./models/NotificationThread.md)
 - [OAuth2Application](./models/OAuth2Application.md)
 - [Organization](./models/Organization.md)
 - [OrganizationPermissions](./models/OrganizationPermissions.md)
 - [PRBranchInfo](./models/PRBranchInfo.md)
 - [Package](./models/Package.md)
 - [PackageFile](./models/PackageFile.md)
 - [PayloadCommit](./models/PayloadCommit.md)
 - [PayloadCommitVerification](./models/PayloadCommitVerification.md)
 - [PayloadUser](./models/PayloadUser.md)
 - [Permission](./models/Permission.md)
 - [PublicKey](./models/PublicKey.md)
 - [PullRequest](./models/PullRequest.md)
 - [PullRequestMeta](./models/PullRequestMeta.md)
 - [PullReview](./models/PullReview.md)
 - [PullReviewComment](./models/PullReviewComment.md)
 - [PullReviewRequestOptions](./models/PullReviewRequestOptions.md)
 - [PushMirror](./models/PushMirror.md)
 - [Reaction](./models/Reaction.md)
 - [Reference](./models/Reference.md)
 - [Release](./models/Release.md)
 - [RenameUserOption](./models/RenameUserOption.md)
 - [RepoCollaboratorPermission](./models/RepoCollaboratorPermission.md)
 - [RepoCommit](./models/RepoCommit.md)
 - [RepoTopicOptions](./models/RepoTopicOptions.md)
 - [RepoTransfer](./models/RepoTransfer.md)
 - [Repository](./models/Repository.md)
 - [RepositoryMeta](./models/RepositoryMeta.md)
 - [SearchResults](./models/SearchResults.md)
 - [ServerVersion](./models/ServerVersion.md)
 - [StopWatch](./models/StopWatch.md)
 - [SubmitPullReviewOptions](./models/SubmitPullReviewOptions.md)
 - [Tag](./models/Tag.md)
 - [Team](./models/Team.md)
 - [TimelineComment](./models/TimelineComment.md)
 - [TopicName](./models/TopicName.md)
 - [TopicResponse](./models/TopicResponse.md)
 - [TrackedTime](./models/TrackedTime.md)
 - [TransferRepoOption](./models/TransferRepoOption.md)
 - [UpdateFileOptions](./models/UpdateFileOptions.md)
 - [User](./models/User.md)
 - [UserHeatmapData](./models/UserHeatmapData.md)
 - [UserSettings](./models/UserSettings.md)
 - [UserSettingsOptions](./models/UserSettingsOptions.md)
 - [WatchInfo](./models/WatchInfo.md)
 - [WikiCommit](./models/WikiCommit.md)
 - [WikiCommitList](./models/WikiCommitList.md)
 - [WikiPage](./models/WikiPage.md)
 - [WikiPageMetaData](./models/WikiPageMetaData.md)
 - [teamSearch_200_response](./models/teamSearch_200_response.md)
 - [userSearch_200_response](./models/userSearch_200_response.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

<a name="AccessToken"></a>
### AccessToken

- **Type**: API key
- **API key parameter name**: access_token
- **Location**: URL query string

<a name="AuthorizationHeaderToken"></a>
### AuthorizationHeaderToken

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

<a name="BasicAuth"></a>
### BasicAuth

- **Type**: HTTP basic authentication

<a name="SudoHeader"></a>
### SudoHeader

- **Type**: API key
- **API key parameter name**: Sudo
- **Location**: HTTP header

<a name="SudoParam"></a>
### SudoParam

- **Type**: API key
- **API key parameter name**: sudo
- **Location**: URL query string

<a name="TOTPHeader"></a>
### TOTPHeader

- **Type**: API key
- **API key parameter name**: X-FORGEJO-OTP
- **Location**: HTTP header

<a name="Token"></a>
### Token

- **Type**: API key
- **API key parameter name**: token
- **Location**: URL query string

