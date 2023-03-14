---
title: "Interactive Nesting"
date: 2023-03-01T16:27:00+05:30
weight: 2
---

<div style="text-align: center">{{< video src="/videos/4. Job/4.3 Job Planning ways/InteractiveNesting.mp4" type="video/mp4" >}}</div>

*<div style="text-align: center">Interactive Nesting</div>*

![Interactive Nesting](/images/InteractiveNesting.png)

![Run Interactive Nesting](/images/RunInteractive.png)

Select one or more parts/jobs to be nested and right click. And select _**Run Interactive Nesting…**_      


The interactive nesting wizard is loaded in the main work area.

![Interactive Wizard](/images/InteractiveWizard.png)

Clicking next moves to the quantities page where the part quantities can be modified. 

![Quantity](/images/quantity.png)

Moving next begins the nesting and displays the nest progress and results as they are received. The nested quantity and estimated workload are reflected in the _*Selected Parts, All Machines*_ tabs (in blue color). The nested layouts are drawn to the scale and are displayed in the Nest Results tab.

![Nest Progress](/images/NestProgress.png) 

The nest completes finally, completing the nesting steps. All the nest results can still be cancelled without saving them to the repository. 

![Interactive Nest](/images/InteractiveNest.png)

When all the required parts are not nested, the final step displays a restart symbol, indicating that the nesting process would restart for the remaining parts which were not nested. This may happen for variety of reasons like setting the nest quantity to a lower than required value, infeasible parts on selected machine, discarding some of the nest results etc. 

![Save Result](/images/SaveResult.png)

The tick mark (✔) is displayed after the nest completion. Pressing next then, closes and unloads the nest wizard. 

![Nest Complete](/images/NestComplete.png)