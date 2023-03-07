---
title: "Job Page Filter"
date: 2023-03-02T16:32:23+05:30
weight: 4
---

The Jobs search functionality has significantly improved in this build. This makes it easier to locate Jobs, Active Parts and Nests based of various:

* Order criteria like the **priority, due date, customer, ordered part** and **quantity** etc.

* Planning/Scheduling status like the scheduled **machines**, sheets **to-do**, sheets **completed**, **nested parts, nested layouts** etc.

* Nest attributes like **nest efficiency, raw-material, unique** and **total parts, job IDs** and counts.

![Job](/images/JobModuleFilter.png) 


## Sample Filters

### Part/Layout Name


The **Part name** field appears in the Jobs and the Nests page. Keying-in the search text, lists all sheets/jobs containing the parts matching the search term.

![Part Name filter](/images/PartNameFilter.png)

Selecting the items from the suggestion narrows down the search to the selected part(s).

![Part Name 2](/images/PartNameFilter2.png)

This behavior extends to the jobs page as well. Job page can be searched using the Part name and the Layout name. Like the Part name field, a suggestion list is displayed for the layouts as well.


### Priority and Due date

Priorities and due dates are assigned to a part in a job. The Priority field, like the “Part name”, lets users find nests/jobs with higher priority parts. The high priority parts can be located on a nest by highlighting  them using mouse over the suggestion menu. Similarly, parts with specified due date can be searched and located on a nest using the highlight feature.

![Due Date](/images/DueDate.png)

Apart from pre-defined due date filters like _Today, Yesterday, tomorrow_ etc., you can also key-in the custom date values/ranges in **yymmdd** format into the search textbox. The acceptable date expressions are: 

* Expressions with (in)equality operators ![sc](/images/specialCharacters.png?classes=inline) followed by the date value. E.g., >=**220121** would search all items which are due on or after 21st Jan 2022. 

* Date range expressions like one in the image below. It searches for all nests due on or after 28th Jan 2022 and before 30th Jan 2022. 
 
![Due date](/images/DueDate2.png)

### Used Tools

Like the Part Library, nests can also be searched by the used punch tools. To search by used tools: 

* Select the Used tools field from the available filter columns. Praxis presents list of all available used tools. 

* Generally, this is a long list, use search term like the tool name, shape, size etc. to narrow down this list to the tool you are looking for. 

* Select one or more item from the list to filter parts where these tools are used. Switching to the details view, highlights the used tools and switching to simulation view reflects it back in the tooling preview.

![Used Tools](/images/UsedToolsJob.png)

**Aside:** Often the filter list hides the search content behind itself. Use **Toggle opacity** command to toggle the transparency. The transparency can also be toggled using the **Right Mouse Click** anywhere on the filter list.

![Toggle Opacity](/images/ToggleOpacity.png)