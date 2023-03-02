---
title: "Commands Supported"
date: 2023-03-02T17:35:43+05:30
draft: true
weight: 1
---

Following Creo commands are currently supported.

_**Version**_ - Returns this tool version and supported file extensions (.prt). This is used by Praxis in picking the appropriate pre-import tool for a file extension

_**Ping**_ – Connects with Creo Parametric and returns Creo Parametric version and the SessionID of the connection. In the emulation mode (used during testing), it simply writes out <Emulation> as session id.

_**PreImport**_ – Extracts and outputs family instances from a given family part, optionally, to a given output directory.

_**Reset**_ – Closes all Creo Parametric applications.

These commands are used by Praxis in same sequence as above to extract instances from the family – table PRT files. You can use it in interactive mode to troubleshoot if it does not work as expected from Praxis.

![Creo Command](/images/CreoCommands.png)