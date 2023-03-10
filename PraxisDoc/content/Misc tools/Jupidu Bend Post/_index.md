---
title: "Jupidu Bend Post"
date: 2023-02-28T15:36:11+05:30
weight: 1
---

The jupidu attachment has been implemented as a bend code finisher.

1. Select **Bend Code Finishers** in the component installation options to install this code-fnisher alongwith the others.
2. Open Flux settings for the target machine and enable **Attach reports to NC code if possible** option. (You can also enable this option at the application level).
3. Assign **JupiduCF** code-fnisher to the target machine in Praxis machine settings.

![Jupidu](/images/Jupidu.png)

The code-finisher expects the *Jupidu Attachment* folder as parameter. Praxis passes this as an argument when calling up this tool to finish the jupidu code. The tool looks-up the folder for an attachment with same name as the part. And attaches to the Jupidu code if found one. The supported attachments types are: ***pdf, stl, png, jpg, bmp, gif, tiff** and **txt**. Other file types are ignored.


Check the **Attached NC Report** code-finisher option to attach the setup sheet report inside the jupidu file.

![AttachedNC](/images/AttachedNC.png)
