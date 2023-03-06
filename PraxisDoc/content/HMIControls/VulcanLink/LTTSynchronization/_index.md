---
title: "LTT Synchronization"
date: 2023-03-06T16:49:51+05:30
weight: 4
---

When linked to Praxis, the same LTT is used in Vulcan, Praxis and Flux. Vulcan becomes the LTT master and owns the technology tables. All edits made at Vulcan are pushed to all Praxis + Flux stations on the network. 

## Walkthrough:

* Switch to the Configure page and click on the Laser Database button.

![Configure](/images/Configure.png)

* Open Praxis or Flux to confirm the existing laser data.

![Flux LTT](/images/FluxLTT.png)

* In Vulcan select a material + thickness and use clone page to clone the selected page. Here we are going to clone the MS_2mm generic page for Air. Follow the steps displayed in the image below and press OK.

![Clone Page](/images/ClonePage.png)

* Press done in laser database page and press OK to save the changes when prompted.

![Save Changes](/images/SaveChanges.png)

* Open the page lists again in Praxis/Flux. The cloned page should be listed.

![LTT Update](/images/LTTUpdate.png)

{{% notice style="note" %}}
* Flux/Praxis should refresh the pages without restart. You just need to restart the page list dialogs.
* A more realistic test scenario would be to install Vulcan, Praxis and Flux on different computers.
* The LTT synchronization doesn’t work from Flux → Vulcan. Work is needed in Vulcan to support this.
{{% /notice %}}

