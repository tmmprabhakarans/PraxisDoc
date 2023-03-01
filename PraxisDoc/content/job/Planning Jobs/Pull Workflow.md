---
title: "Pull Workflow"
date: 2023-03-01T16:27:06+05:30
draft: true
weight: 3
---

Pull Workflow (or pull scheduling) is useful for users who need a highly autonomous planning and nesting system. When enabled, Praxis plans the nesting on-demand.

![Pull Workflow Settings](/images/PullWorkflowSettings.png)

In the Pull workflow the Praxis Monitor watches over the machine output folders for NC reports. And if the NC count falls below the cut-off set via Nests per station, the monitor plans fresh nests. The nested outputs and NC are saved to the machine output locations:

* If the layout packing efficiency is above the cut-off defined in Nest settings. (Sometimes there are multiple such acceptable layouts and all of them are retained and released, making the total layout count well above cut-off). 

* If the packing efficiency is below the cut-off and there are no more parts available for the nest. These layouts are again tried for repacking if more parts are queued up before the layout is removed from the output queue. If there are more plannable parts, the layouts below the packing cut-off are discarded and nest is retried with more parts in next nest session.

Removing the nested layout outputs from the machine output location updates the queue size and triggers auto-planning when queue size goes below the cut-off. Check the _**Mark the task completed…**_ option to move all job parts on the removed layout to the completed state and reflect it in the Job progress.

![Mark Complete](/images/MarkComplete.png)

Praxis uses a pre-filter heuristic to feed a smaller set of parts to the nesting engine. First, it sorts the available parts by Feasibility, Priority, Due-date and the Job number. And then they are run through the rectangular nest. A couple of lot sizes are selected and thus queued for nesting. This pre-filter heuristics makes sure that:

* Overall nest time is not too much, and system is responsive to the nest triggers. 

* A mix of different part sizes are nested together resulting in better efficiency. 

* Parts from the same job are kept together as much as possible. 

The image below displays the sheets nested in Pull Workflow.

![Pull Workflow Nest](/images/PullWorkflowNest.png)