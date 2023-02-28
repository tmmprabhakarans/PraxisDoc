---
title: "Part Library"
date: 2023-02-28T15:24:00+05:30
draft: true
---

New parts can be imported and viewed using Part Library page.

* The parts are added to the list and are submitted to the Praxis Engine for further processing.

* While dropping part in Part Library, it goes throught the following three stages
  i) Part Import ii) Bend/Fold tooling iii) Cut tooling. 
  First two steps are carried out using Flux core whereas MetaCAM engine (Trek.exe) is used for the third.

* In the first stage:
    *  Depending on the CAD geometry type, a part is folded or sheet-metalized 
(equivalent to 3D cleanup + unfold in MetaCAM world).
    * Material + Thickness is assigned to the part.
    * Thumbnail is extracted along with other properties like size, weight etc., and Part is saved to the database for the second stage.
* In the second ingestion stage:
    * Part is tooled for all available press-brake and panel bending machines
    * A flat part is generated from the part’s 3D model and part is sent for third stage 
               processing
* In the third stage:
   * The flat geometry is imported to MetaCAM part format and the part is tooled for all available profile cutting machines like laser, punch, plasma, waterjet etc.

At the end of each stage, the part status is determined and assigned to the part. The changes are saved immediately to the database and the part library view reflects the changes instantaneously by updating the view live.