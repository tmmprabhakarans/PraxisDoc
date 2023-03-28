---
title: "Thickness Fudge or Tolerance"
date: 2023-03-02T17:55:13+05:30
weight: 5
---

<!--<div style="text-align: center">{{< video src="/videos/8. CAD Extensions/8.2 SolidWorks Addin/8.2.5 Thickness Fudge_Tolerance/fudgeFactor.mp4" type="video/mp4" >}}</div>-->

&nbsp;
&nbsp;

{{< youtube id=VUtaf01RdW8?rel=0 >}}

*<div style="text-align: center">Thickness Fudge</div>*

The mapping defined here is used to lookup the Praxis material from the SolidWorks material assigned to the
Part. **Thickness Fudge** is another setting which affects the material lookup. This is the tolerance used to 
match the model thickness with the raw-material thickness.

For instance, load a part with thickness 1.45mm in solidworks and set tolerance to 0.05 

![Solidworks sheetmetal](/images/sw_sheetmetal_thickness.png)

    

![Thickness Fudge](/images/ThicknessFudge.png)


Upon saving the part to praxis, the thickness + fudge is matched with the material in praxis.

![Save fudge](/images/savefudge.png)


