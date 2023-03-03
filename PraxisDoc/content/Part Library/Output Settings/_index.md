---
title: "Output Settings"
date: 2023-02-28T17:12:50+05:30
draft: false
weight: 7
---

Output Destination
--------------------------

Set Output Destination field of a machine to assign a specific target output folder for that machine. If this field is not set, the output settings set via **factory • settings • cut/bend** is used as the target output location.

![Output Destination](/images/OutputDestination.png)

Export outputs
-----------------------

Tooling outputs and reports can be exported manually using the **Export outputs** panel command. This command can be used on a single part or multiple parts selected in a batch.

![Export Cut Output](/images/ExportCutOut.png)

![Export Bend Output](/images/ExportBendOut.png)

Save Output
------------------

The tooling results are saved only if the tooling is in OK state and the export settings are enabled and configured in factory dialog.

![Save Output](/images/SaveOutput.png)

The following output files are stored in the output location.

![Output Files](/images/OutputFiles.png)

Ignore Errors
---------------------

The Ignore Errors tooling panel command exports the outputs to the target output folder. The exported outputs are deleted from the target folders if the tooling is identified with errors.

For instance, in the below example the part is imported with an overload error. Upon clicking the Ignore error the part is tooled with warning.

![Overload Error](/images/OverloadError.png)

The output is automatically saved to the destination

![Output saved](/images/OutputSaved.png)