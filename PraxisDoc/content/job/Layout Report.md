---
title: "Layout Report"
date: 2023-03-01T17:37:05+05:30
draft: true
weight: 6
---

Praxis saves a html report along with the other outputs. This is a fixed template report, and it contains various estimation and composition details. The reports have multiple sections:

The header section contains the key layout information like the machine, material, runtime, sheet count etc.

![Layout Header](/images/LayoutHeader.png)

This is followed by a **layout picture.** The layout picture displays parts colored by the nest instance (the job-item). Placing the mouse over the part instance displays basic part details like the Name, Job ID and the Instance#.

 ![Layout Picture](/images/LayoutPicture.png)

A simulation preview is generated, and the play button is placed on the right-top corner, if the **Output simulation preview…** option is enabled in **factory • settings • job** page.

![Simulation Preview](/images/SimulationPreview.png)

Clicking on the **play** button runs the simulation preview for ~10s. It indefinitely loops over with a stop of 3s at the last frame. Use **pause** button to stop the simulation and switch back to the layout picture.

![Pause](/images/Pause.png)

Layout picture is followed by the jobs table. This displays list of all the jobs listed on the layout.

![Jobs Table](/images/JobsTable.png)

The Parts list display the nested parts in the same color as they appear in the layout. Please note that this list displays the parts by part-order (than just the part drawing). Therefore, separate entries are displayed for the same part from multiple jobs (orders) placed on this layout. The part details show the respective job IDs. These details also display the partwise resource usage which can be used in the quote preparation for individual parts.

![All Parts](/images/AllParts.png)

Used tools section follow the punch parts. It displays list of tools used sorted by station ID with the tool icons drawn proportional to the scale.

![Used Tools](/images/UsedTools.png)