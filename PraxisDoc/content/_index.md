---
title: "Home Page"
date: 2023-02-28T12:31:49+05:30
draft: false
---

# Praxis Manual User Guide

Table of Contents
-----------------

|Introduction | Description |
|:---------------|:-----------|
◉ [Introduction to Praxis Application](/introduction/) | Understanding and deploying the Praxis application
◉ [Installation](/introduction/installation/) | Step by step process of launching the Praxis application
      ➤ [Pre-Requisites](/introduction/installation/pre-requisites/) | Initial configuration and set up files required for the application
      ➤ [Praxis Installation](/introduction/installation/praxis-setup-installation/praxis-setup-installation/) | Praxis Installation Steps
      ➤ [Server Installation](/introduction/installation/serverfull-installation/) | Steps to Install and Configure Praxis as a Server
      ➤ [Client Installation](/introduction/installation/client-installation/) | Steps to Install and Configure Praxis as a Client
◉ [Basic Workflow of Praxis](/introduction/basic-workflow/) | Step by step process of launching the Praxis application


|Part Library| Description|
|:-----------|:-----------|
◉ [Part Library](/part-library/)   | Introduction to Part Library
◉ [CAD File Types](/part-library/cad-file-types/) | Supported Files types
◉ [Part Library Tour](/part-library/part-library-tour/) | Walkthrough of Various options in Part Library
◉ [Import Parts](/part-library/import-parts/) | Import parts into Part Library
◉ [Tooling Status](/part-library/tooling-status/) | Tooling indication icons for various Machines
◉ [Validation Error](/part-library/validate-cad-error/) | Tooling Errors after Part Import
      ➤ [Material Missing](/part-library/validate-cad-error/material-missing/) | Material Unavailable in Praxis Database
      ➤ [Material Not Assigned](/part-library/validate-cad-error/material-not-assigned/) | Material is available but not yet Assigned to the part
      ➤ [Bend and Cut Infeasible](/part-library/validate-cad-error/bendcut-infeasible/) | No valid Cut/Bend solution available
◉ [Update Tooling Instance](/part-library/editupdate-tooling/) | Edit/Update Cutting and Bend Tooling Instances
◉ [Save Outputs](/part-library/output-settings/) | Save Output NC and Reports


| Assembly | Description |
|:-----------|:-----------|
◉ [Assembly](/assembly/) | Introduction to Assembly
      ➤ [Producing Assembly](/assembly/producing-assembly/) | Steps to Produce Assembly
      ➤ [Non-Sheet Metal Parts](/assembly/import-non-sheet-metal-parts/) | Adding Non-Sheet Metal parts to Assembly
      ➤ [Create Nests from Assembly](/assembly/create-nests-from-assembly/) | Creating Nests from Assembly


|Job| Description|
|:-----------|:-----------|
◉ [Job](/job/) | Introduction to Jobs Section
◉ [Job Workflow](/job/job-workflow/job-workflow/) | Introduction to Creating and Planning Jobs
◉ [Auto Release Job](/job/auto-release-job/auto-release-job/) | Settings to control the auto nest behavior of Praxis
◉ [Job Planning](/job/planning-jobs/) | Following are the ways to Plan Job
      ➤ [Mixed Nesting](/job/planning-jobs/mixed-nesting-workflow/) | Plan Job using Mixed Nesting Workflow
      ➤ [Interactive Nesting](/job/planning-jobs/interactive-nesting/) | Introduction and Planning Job using Interactive Nesting Workflow
      ➤ [Pull Workflow](/job/planning-jobs/pull-workflow/) | Introduction and Planning Job using Pull Workflow
◉ [Layout Commands](/job/layout-commands/) | Ways to handle Layouts
◉ [Save Outputs](/job/nest-output-settings/) | Save Layout, Output NC and Reports
◉ [Layout Report](/job/layout-report/) | Interpreting a Layout Report file
◉ [Out Of Date Layout](/job/out-of-date-layout/) | Out of Date Layout checking

|Job Spreadsheet| Description|
|:-----------|:-----------|
◉ [Job Spreadsheet](/job-spread-sheet/) | Job Spreadsheet mapping techniques
      ➤ [Map/Un-map](/job-spread-sheet/map-un-map/) | Creating mapping between Praxis fields and Spreadsheet
      ➤ [Mapping Error](/job-spread-sheet/spreadsheet-mapping-error/) | Possible validation errors during Mapping
      ➤ [CAD Lookup](/job-spread-sheet/cad-lookup/) | Set the CAD Lookup directory Path
      ➤ [Missing Part](/job-spread-sheet/missing-part/) | Handling missing part during Spreadsheet import
      ➤ [Recursive CAD search](/job-spread-sheet/recursive-cad-search/) | Enabling Recursive CAD Search
      ➤ [Watch- Spreadsheet Live FOlder](/job-spread-sheet/spreadsheet-live-folder/) | Watch- Spreadsheet Live FOlder

|Factory Settings| Description|
|:-----------|:-----------|
◉ [Factory Settings](/factory-settings/) | Factory view and Machine Routes
◉ [Add or Remove Machine](/factory-settings/add-remove-machine/) | Add/Remove a Machine from the Workflow
◉ [Add Material](/factory-settings/add-new-material/) | Adding Material and corresponding sheet to Sheet Database
◉ [Delete Material](/factory-settings/delete-material/) | Deleting Material and the corresponding sheet
◉ [Material mapping](/factory-settings/material-mapping/) | Mapping Material to CAM Pages
◉ [Edit Factory Material](/factory-settings/edit-factory-material/) | Editing Bend Material and Alias
◉ [Update MetaCAM Laser Db](/factory-settings/update-metacam-laser-database/) | Update existing MetaCAM Laser Database
◉ [Normalize Flat part](/factory-settings/normalize-flat-along-the-part-width/) |Normalize Flat along the part-width to enhance tooling feasibility
◉ [Fudge Shape Identification](/factory-settings/fudge-shape-identification/) | Setting the Shape identification fudge 
◉ [Email Notification](/factory-settings/email-notification/) | Enable and configure the email notification
◉ [Nest Settings](/factory-settings/nest-settings/) | Nest settings to control the Auto-Nest behaviour of Praxis
 

|Filters| Description|
|:-----------|:-----------|
◉ [Filters](/filters/) | Introduction to Various Filters in Part Library and Jobs Page
◉ [Dropdown Command Bar](/filters/dropdown-command-bar/) | Using Dropdown commands to refine search
◉ [Part Library Filter](/filters/part-library-filter/) | Various ways to filter parts in Part Library
◉ [Save Filter](/filters/save-filter/) | Save the Chosen/Modified Filters
◉ [Job Page Filter](/filters/job-page-filter/) | Various ways to filter parts in Job/Nests


|CAD Extensions| Description|
|:-----------|:-----------|
◉ [Creo Add-In](/cad-extensions/creo-family-parts/) | Introduction to Creo Family parts
      ➤ [Commands Supported](/cad-extensions/creo-family-parts/commands-supported/) | Supported Creo commands
      ➤ [Emulation Mode](/cad-extensions/creo-family-parts/emulation-mode/) | Enabling Emulation mode   
◉ [SolidWorks Addin](/cad-extensions/solid-works-addin/) | Installation of Praxis with Solidworks Addin 
      ➤ [Saving Part to Praxis](/cad-extensions/solid-works-addin/saving-sw-part-to-praxis/) | Saving Solidwork parts to Praxis
      ➤ [Saving Assembly Parts](/cad-extensions/solid-works-addin/saving-assembly-parts/) | Saving Assembly Parts to Praxis
      ➤ [Save Configuration](/cad-extensions/solid-works-addin/save-configuration/) | Saving Part Configuration to Praxis
      ➤ [Part Feasibility check](/cad-extensions/solid-works-addin/part-feasibility-check/) | Check a sheetmetal part for the production feasibility
      ➤ [Thickness Fudge](/cad-extensions/solid-works-addin/thickness-fudge-or-tolerance/) | Setting tolerance to match the model thickness
      ➤ [Factory Settings](/cad-extensions/solid-works-addin/factory-settings/) | Siew and update Praxis factory settings as well as the Flux settings


|HMI Controls| Description|
|:-----------|:-----------|
◉ [RightAngle Link](/hmi-controls/right-angle-link/) | Setting up Right Angle Link to Praxis
      ➤ [Loading Programs](/hmi-controls/right-angle-link/loading-programs-into-right-angle/) | Loading Programs into Right angle
      ➤ [Searching Programs](/hmi-controls/right-angle-link/searching-programs/) | Search Programs in Right angle
      ➤ [Running Programs](/hmi-controls/right-angle-link/running-programs/) | Running Programs in Right angle
      ➤ [Editing Programs](/hmi-controls/right-angle-link/editing-programs/) | Editing Programs in Right angle
      ➤ [Multiple RA Stations](/hmi-controls/right-angle-link/adding-multiple-ra-stations/) | Linking multiple RA Station to Praxis
      ➤ [Tools and Settings](/hmi-controls/right-angle-link/tools-and-settings-synchronization/) | Synchronized tools across all Praxis linked applications
◉ [Vulcan Link](/hmi-controls/vulcan-link/) | Setting up Praxis-Vulcan Link
      ➤ [Loading Programs](/hmi-controls/vulcan-link/loading-programs-into-vulcan/) | Loading Programs into Right angle
      ➤ [Running Programs](/hmi-controls/vulcan-link/running-programs/) | Running Programs in Vulcan
      ➤ [Editing Programs](/hmi-controls/vulcan-link/editing-programs/) | Editing Programs in Vulcan
      ➤ [LTT Synchronization](/hmi-controls/vulcan-link/ltt-synchronization/) | Synchronize Technology tables


|Misc Tools| Description|
|:-----------|:-----------|
◉ [Jupidu Bend Post](/misc-tools/jupidu-bend-post/) | Attach Jupidu Bend Post
◉ [Forms](/misc-tools/forms/) | Introduction to Importing formed parts
      ➤ [Indexing](/misc-tools/forms/indexing/) | Adding Part-Form pair to the index
      ➤ [Forming Preview](/misc-tools/forms/forming-preview/) | Preview of the Forms available
      ➤ [Forming Approval](/misc-tools/forms/forming-preview/) | Approve the Identified Formed parts
◉ [Bus Bar machine support](/misc-tools/bus-bar-machine-support/) | Introduction of EHRT Machines
      ➤ [Cut Finisher for EHRT](/misc-tools/bus-bar-machine-support/cut-finisher-for-ehrt-machines/) | Enabling EHRT Cut Finisher

