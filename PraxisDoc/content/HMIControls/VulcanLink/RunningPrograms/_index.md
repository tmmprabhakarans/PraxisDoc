---
title: "Running Programs"
date: 2023-03-06T16:45:00+05:30
weight: 2
---

Select a program and use the run command to load the program for running.

![Run Program](/images/RunProgramVulcan.png)

Praxis Job and Part statuses are updated to reflect the parts-in-progress. The Layout is checked-out to prevent updates while program is loaded on the machine.

![Processing Job](/images/ProcessingJob.png)

Press the *stop*[^1] button on the run page to mark the _current_ sheet as complete. The job is updated with the completion status. Repeat this to mark all sheets as completed. Once completed program is unloaded, it is removed from the machine production queue and the job/part/layout statuses are updated in Praxis.

[^1]: This is a demo mode workaround to complete layout sheets at Vulcan. In the live mode, this would happen automatically as layout is completed on a machine.

![Job Done](/images/JobDone.png)
