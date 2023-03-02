---
title: "Creo Family Parts"
date: 2023-03-02T17:30:06+05:30
draft: true
weight: 1
---

Select **Creo Reader** option from component selection setup page to install the Creo command line emulator. The Creo tool, Creo.Cmd.exe, is installed in Bin\Apps folder.

![Creo Reader](/images/CreoReader.png)

Check Enable pre-import external tools import option to enable Creo Reader. Now drop a family table PRT file on Praxis.

![Pre Import](/images/PreImport.png)

Praxis uploads the pre-extracted family instances of the dropped part. Please note that the instance extraction is performed during the part upload (as a pre-import operation), so the Creo software must be installed on computer from where the part is being uploaded.

![Creo Parts](/images/CreoParts.png)

Set Emulation=1 in User/System environment variables for praxis to use emulation mode of Creo.Cmd.