---
title: "Spreadsheet Live Folder"
date: 2023-03-02T11:57:34+05:30
weight: 6
---

<div style="text-align: center">{{< video src="/videos/5. Job Spreadsheet/5.6 Spreadsheet_LiveFolder/watch.mp4" type="video/mp4" >}}</div>

*<div style="text-align: center">Spreadsheet Liver Folder - Watch</div>*


Live Folder (or Active Folder) feature has been added to Praxis. Enter a valid watch location and check Enable *'Live Folder'* option on factory settings watch page[^1] to enable folder syncing.

![SpreadsheetLive](/images/SpreadsheetLive.png)
The active folder watcher starts at the Engine computer and the Praxis Monitor flashes Folder Watcher Started message. It immediately scans the watch location for CAD files and imports them if found.

![Active Folder Watcher](/images/ActiveFolderWatcher.png)

Sync, like other automated Engine tasks, is a background service which is triggered when CAD files are dropped at the watch location. Only one Sync can be active at a given time for the whole site (this is also the reason why the sync service is hosted on same computer where Engines are running). This can be a client computer as well if that client is also running the Engine services. The Sync service restarts when the Watch settings are updated via Factory dialog.
When a file is dropped, the watcher waits  for 5 seconds for more files and if no new files are dropped it starts uploading them to Praxis repository for further processing. The uploaded files are removed from the watch location and 
- are moved to the ‘move target’ if one is specified in settings.
- are deleted permanently if move target is not set.

{{% notice style="note" %}}
Do not set the move target as a watch folder sub-directory
{{% /notice %}}

[^1]: Watch settings are admin only settings. So, programmers cannot view or change it.  