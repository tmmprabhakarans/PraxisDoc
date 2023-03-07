var relearn_search_index = [
  {
    "content": " Launch Praxis and Vulcan. Switch to Praxis and import Job spreadsheets from the C:\\Program Files\\Metamation\\Praxis\\Samples\\Jobs folder. (Or load some parts and create new Job from the part library).\nSelect a job, right click, and use the Plan Job panel command. Select a bend machine.\nRepeat Plan Job (previous step) and select Proteck Dual Head machine from the menu.\nNests start appearing after a few seconds. Right click and use Send to Machine… command to send the layouts to Vulcan.\nLaunch Vulcan and switch to Programs page. It lists programs to run in Proteck Dual Head queue. The program tiles display job details like sheets to run, estimated machine-time-per-sheet, Praxis raw-materials etc.\nThe program list is updated as layouts are sent/recalled from Praxis. Programs are automatically refreshed when layouts are edited in Praxis.\nUse the search box to search the programs by name, raw-material or LTT table. The examples below show results of programs searched by\nRaw-material LTT. Removing programs from the queue Switch to Praxis Job page or go to the nests tab.\nSelect one or more layouts, right click, and use the Recall from Machine… panel command to remove the layouts from the production queue.\nThe Vulcan program list is automatically updated with the updated queue. ",
    "description": "",
    "tags": null,
    "title": "Loading Programs into Vulcan",
    "uri": "/hmicontrols/vulcanlink/loadingprogramsintovulcan/index.html"
  },
  {
    "content": "Launch Praxis and RightAngle. Switch to Praxis and import Job spreadsheets from the C:\\Program Files\\Metamation\\Praxis\\Samples\\Jobs folder. (Or load some parts and create new Job from the part library). Select a job, right click, and use the Plan Job panel command. Select 5130X 6A B23 to add the selected parts to the production queue.\nThe queued part’s status is updated back in Praxis.\nSwitch to RightAngle Run page. It displays the programs in 5130X 6A B23 queue. The program tiles display the job details like job name, quantity to run, customer name etc. The tile also displays the Praxis raw-material name instead of the material name.\nThe program list displays the programs sorted by the priority and the due-date and it automatically refreshes when:\nThe production queue is updated in Praxis by adding new programs or removing existing ones.\nJob details like the job-name, customer name etc. are updated.\nThe Part geometry is revised, and the part is reprogrammed.\nRemoving programs from the queue Switch to Praxis Job page and select one or more Jobs or Job-parts.\nRight click and use the Reset Job/Reset Part panel command to revoke the job parts from the production queue.\nThe RA program list is automatically updated with the updated queue.\n",
    "description": "",
    "tags": null,
    "title": "Loading Programs into RightAngle",
    "uri": "/hmicontrols/right-angle-link/loading-programs-into-right-angle/index.html"
  },
  {
    "content": "Setting up Praxis-RA link Download RA setup and install RightAngle standalone first.\nActivate RA (please contact Praxis/RA support team for a RA license) and make sure you can import a sample part (you can find RA samples in C:\\ProgramData\\Metamation\\RA\\Samples folder).\nInstall Praxis with RightAngle Link.\nLaunch Praxis to complete the setup.\nLaunch RA and click on the Metamation logo at the bottom-right. Notice the Praxis machine in the Version dialog. Also notice that there is no Create page in the Praxis mode.\n",
    "description": "",
    "tags": null,
    "title": "Right Angle Link",
    "uri": "/hmicontrols/right-angle-link/index.html"
  },
  {
    "content": " Open a sheetmetal part in SolidWorks. (Praxis already ships with a few. Locate them in C:\\Program Files\\Metamation\\Praxis\\Samples\\Parts folder).\nNow switch to the Praxis tab. It should show the Praxis toolbar in SolidWorks.\nPress Save to Praxis toolbar button to save the part to Praxis. This displays the save dialog where you can choose the part-configuration and the Praxis raw-material. Press OK to save.\nSetting up the auto-material resolution This setting can be used to help Praxis convert the SolidWorks material and the part thickness to a Praxis raw-material during the part upload. To set it up:\nClick on Options button to launch the Options dialog. Switch to the Material Mapping page and define material mapping between SolidWorks and Praxis materials by clicking first on a SolidWorks material from the left list followed by the Praxis material from the right list. Now use Map button to define the mapping. The mapping is added to the bottom list. Select the mapped item and use Un-map button to delete the mapping.\nThe mapping defined here is used to lookup the Praxis material from the SolidWorks material assigned to the Part. Thickness Fudge is another setting which affects the material lookup. This is the tolerance used when matching the model thickness to the raw-material thickness. Reading custom part properties This is another setting which can be used to read the material, revision etc. from a SolidWorks part. To set it up:\nSelect the Custom Fields settings page. Using Map/Un-map buttons, map the required Praxis fields with SolidWorks Custom and Configuration fields. (The field values displayed here are loaded from the active part).\nNote The settings defined here are saved into Praxis repository and are synchronized across all Praxis-SW stations.\n",
    "description": "",
    "tags": null,
    "title": "Saving SW Part to Praxis",
    "uri": "/cad-extensions/solid-works-addin/saving-sw-part-to-praxis/index.html"
  },
  {
    "content": "Following Creo commands are currently supported.\nVersion - Returns this tool version and supported file extensions (.prt). This is used by Praxis in picking the appropriate pre-import tool for a file extension\nPing – Connects with Creo Parametric and returns Creo Parametric version and the SessionID of the connection. In the emulation mode (used during testing), it simply writes out as session id.\nPreImport – Extracts and outputs family instances from a given family part, optionally, to a given output directory.\nReset – Closes all Creo Parametric applications.\nThese commands are used by Praxis in same sequence as above to extract instances from the family – table PRT files. You can use it in interactive mode to troubleshoot if it does not work as expected from Praxis.\n",
    "description": "",
    "tags": null,
    "title": "Commands Supported",
    "uri": "/cad-extensions/creo-family-parts/commands-supported/index.html"
  },
  {
    "content": "Select Creo Reader option from component selection setup page to install the Creo command line emulator. The Creo tool, Creo.Cmd.exe, is installed in Bin\\Apps folder.\nCheck Enable pre-import external tools import option to enable Creo Reader. Now drop a family table PRT file on Praxis.\nPraxis uploads the pre-extracted family instances of the dropped part. Please note that the instance extraction is performed during the part upload (as a pre-import operation), so the Creo software must be installed on computer from where the part is being uploaded.\nSet Emulation=1 in User/System environment variables for praxis to use emulation mode of Creo.Cmd.\n",
    "description": "",
    "tags": null,
    "title": "Creo Family Parts",
    "uri": "/cad-extensions/creo-family-parts/index.html"
  },
  {
    "content": " Command Shortcut Description Clear Selection Ctrl + X Unselects all selected choices and refreshes the filter items view. Select Highlighted Ctrl + A Selects all highlighted choices. This command stays disabled if item highlighting is not applicable for the selected field. Apply All \u0026 Applies ALL (vs ANY) selected choices to the filter match. Pin In/Out Menu Ctrl + Down/Up When pinned, the dropdown menu stays open even when the current focus moves to another window. Close Menu Escape Closes the dropdown menu. Typically, choice items are prepared based on the field semantics. For instance, for all fields representing a datetime (aka timestamp), the choices display a date or a date range value – Today, Yesterday, Last 3 days etc. Images below display such range filters for Thickness and Weight fields.\nRange filter values are unit aware and slightly different values are used for metric and inches units. This is done to show friendlier values which are easier to identify (so a length value 5” is used instead of 5.08”). Just like expression-based filters, these filters can be added to the filter list. The filter button label displays number of selected items, if multiple choices are selected. Placing the mouse over the filter button displays the selected choices. Click on the filter button again to edit in the search box.\n",
    "description": "",
    "tags": null,
    "title": "Drop down Command Bar",
    "uri": "/filters/dropdown-command-bar/index.html"
  },
  {
    "content": "Use Edit command to launch Machine picker dialog. It displays a hierarchical list of all Cutting, Bending machines along with the current selections. Panel bending machines are listed under Trumpf • TruBendCenter node.\nIn the hierarchical tree-view, simplified machine name is displayed as machine label and full name is displayed in the tooltip. The folder tooltip displays the node path (Ex: Trumpf • C Series • C60)\nBrand specific icon is displayed for non-Trumpf press-brakes. The machine tooltip also displays the machine brand (Ex – Brand: Bystronic).\nSearch box can be used to search machines by Name, Full-name, Brand etc. Machine selection is retained during the search so you can pick-and-search at the same time.\nSearch can also be used to search by machine technology, size. So, typing fold in the search box shows all folding (panel bender) machines. Similarly, typing 10ft displays all press brakes with 10ft table length (this is unit sensitive. Use m for meter in metric unit). Where available in the name, the axes count can also be used for searching (Ex: 2A, 5A etc.)\nReset All command resets the machine selection to the demo configuration.\n",
    "description": "",
    "tags": null,
    "title": "Add Remove Machine",
    "uri": "/factory-settings/add-remove-machine/index.html"
  },
  {
    "content": " To map spreadsheet, first click on one of the Praxis fields (say Part name) followed by a spreadsheet cell under the desired column in the right to create the mapping between the Praxis and Spreadsheet columns. The mapping preview is updated in the bottom to reflect the mapping result. The mapped field is grayed-out to reflect the mapping status. Double click the grayed-out, mapped field to un-map. Click on a mapped field and click another spreadsheet column to alter the mapping. Repeat this all-required Praxis fields to complete the mapping.\nType-in the mapping name and press Save button to save the mapping. The saved mapping settings are synchronized across all stations and are used by Praxis by-default when spreadsheet is imported the next time.\nNote: Sometimes the spreadsheet uses the raw material (material + thickness) to define the part material. Therefore, the Thickness field mapping is optional, and the mapping can be skipped in those cases. Following schemas are currently supported while importing spreadsheet.\nUpdate Existing mapping The mapping exercise explained above can used to create multiple such mappings for different spreadsheet formats. When a spreadsheet is dropped, Praxis compares the spreadsheet schema (the column definitions) with the saved mapping and uses the matching one to import the spreadsheet. Hold the Ctrl key when the spreadsheet is dropped to load and edit the existing mapping. Praxis launches the mapping dialog. Click on the Praxis field to highlight the column it is mapped to. Use the steps mentioned in the previous section to modify and save the mapping.\nSchema 1\nPartName, Quantity, DueDate, Priority, RawMaterial\n038521~5, 2, 8/21/2016, Normal, STEEL#10\nSchema 2\nPartName, Quantity, DueDate, Priority, Material, Thickness\n038521~5, 2, 8/21/2016, Normal, DC01, 2\n",
    "description": "",
    "tags": null,
    "title": "Map/Un-map",
    "uri": "/job-spread-sheet/map-un-map/index.html"
  },
  {
    "content": " Select a Job or a job-part and right click. Praxis shows the command panel for job/part.\nClick on the Plan Job…/Plan Part… panel command. Praxis displays the list of bend machines with unique and total quantities to be planned.\nSelect the bend machine. And repeat these steps to select the cutting machine. The parts are queue up for the nesting. Praxis engines complete the nest, generate layouts and move the parts to the cutting queue. Job and part status are updated at every step and the whole process is reflected in the jobs page. Once a Job is nested, layout starts to appear in the layout page Reset Part… command revokes all instances of a job-part from the existing nests. This command triggers a renest of the remaining parts and uses a smaller sheet if one is available to accommodate all the remaining parts. Overall, it tries to optimize the sheet usage even when a part is pulled back from existing nests. For the mixed mode layouts, parts from other jobs stay nested after the reset\nIn this image, when Reset Part is used for the Part 11-A-6149, the parts are withdrawn from Layout P145 and P146. As a result, all the remaining parts are nested in a single layout P146\nReset Job… command is less fancy and simply deletes all the nested layouts and resets all the parts back to the plannable state. If the layouts contain items from the other jobs – those parts are reset too.\n",
    "description": "",
    "tags": null,
    "title": "Mixed Nesting Workflow",
    "uri": "/job/planning-jobs/mixed-nesting-workflow/index.html"
  },
  {
    "content": "Create a job From part library Select a single part or in batches and right click to open the new Job command panel.\nChoose New Job. The new job dialog pops up with the selected parts.\nJob Ref is auto populated whereas Customer, Comments field can be filled in by the user if required.\nFrom the spreadsheet Spreadsheets can be imported by dropping it on the jobs page or using the open • import jobs command.\nBrowse and select one or more CSV, xls or xlsx files with the Job parts.\nThe spreadsheet can also be imported via the Live Folder.\nCheck the Import Spreadsheet from ‘Live Folder’ checkbox to enable the job import from spreadsheet dropped to the Live Folder.\nLike the part import, the job import via Live Folder is a background activity and Praxis doesn’t prompt user on errors/warnings (like the part is missing, material is unspecified etc.,). Check the Do not import spreadsheet with errors to ignore such spreadsheets1.\nPlan Job The Job is planned in one of the following ways to extract a higher throughput in lesser work steps.\nMixed mode nesting and automated nest repacking\nPart level planning with part pull-back\nInteractive Nesting\nPull scheduling (nest – on – demand)\nRefer Planning Jobs Section for more details\nNesting Once the Job is planned, parts are queued up for Nesting.\nPraxis engine complete the nest and layout starts to appear.\nNest Outputs The nest outputs are saved to the individual folders named after the nested layout.\nIf not in the standard format, the spreadsheets dropped to the Live Folder must have a pre-defined mapping. Otherwise, Praxis doesn’t know how to read it and ignores it. ↩︎\n",
    "description": "",
    "tags": null,
    "title": "Job Workflow",
    "uri": "/job/job-workflow/job-workflow/index.html"
  },
  {
    "content": "To produce an assembly :\nSelect the assembly from the assembly tree. Praxis displays the assembly parts with their repetition counts in the parts pane.\nUse new job command to bring the job dialog.\nAdjust the Assembly Count and press OK.\n",
    "description": "",
    "tags": null,
    "title": "Producing Assembly",
    "uri": "/assembly/producing-assembly/index.html"
  },
  {
    "content": "Material missing error is displayed when material is assigned but it is not found in the Praxis material database.\nMake sure that you have the required material/ raw material entries (BRONZE, COPPER etc) in the database. Add material lookup key (For instance, PTC_MATERIAL_NAME in the below image) to help Praxis resolve the part material.\nMaterial Lookup Open factory dialog and switch to Imports page.\nClick on the Material lookup keys Pick… hyperlink to select the custom field name from the part.\nBrowse and open the ProE part in the Field picker dialog to extract and list all custom fields with their values.\nSelect the custom field and press OK to add it to the look keys.\nMultiple lookup entries can be assigned using a comma separator between them. When a part is imported, Praxis uses these keys to search for material/revision values. The searched values and then to resolve the raw material. The original values are also stored in the part Misc . Properties\n",
    "description": "",
    "tags": null,
    "title": "Material Missing",
    "uri": "/part-library/validate-cad-error/material-missing/index.html"
  },
  {
    "content": "The following file formats are supported while importing a part into the Part Library.\nDXF\nDWG\n2D IGES\nSLDPRT\nSolidEdge\n3D IGES\nSAT files\nCreo Files\n",
    "description": "",
    "tags": null,
    "title": "CAD File Types",
    "uri": "/part-library/cad-file-types/index.html"
  },
  {
    "content": "Following sections explains the pre-requisites and steps required to install Praxis application and connect the same with Server/Client setup.\nPre-Requisites\nPraxis Setup Installation\nServer Installation\nClient Installation\n",
    "description": "",
    "tags": null,
    "title": "Installation",
    "uri": "/introduction/installation/index.html"
  },
  {
    "content": " sample video\nGeneral Overview Praxis is an MES based Application which handles the complete workflow of production in Shop Floor. It interfaces with all other Flux modules like FluxBend, FluxCut, RA(Bend Control) and Vulcan(LaserControl).\nThere should have been a video here but your browser does not seem\rto support it.\rsample video\nManages all parts from different customers.\nCreates Jobs for the machines according to Orders.\nInteracts with FluxBend and FluxCut for you to focus on the creative tasks.\nJob with orders is created against customer. Order status can be tracked easily using color code.\nSearch and Filters are used to get the user requirements which can be saved \u0026 used by other users.\nInteractive Nesting makes nesting more simpler with fewer operational steps.\nSwitching the Nest result from one machine to another machine and adding parts to the existing Nest can be done with few clicks.\nPraxis Components Fig 1: Praxis system\nPraxis Desktop This is the primary driver application which helps user interact with the praxis system. The application Prax.exe installs in Bin folder and uses other components like Praxis Engine, Flux, MetaCAM to drive the workflow.\nPraxis Engine A background application which performs all automation tasks assigned to the Praxis System. Powered by Flux Core, the application PEngine instances to perform the automation tasks. The tasks performed by PEngine include: Part Import, Bend tooling, Cut tooling, Nesting and so on. MetaCAM Engine, Trek.exe, is used for cutting and Flux core is used for bending tasks.\nFlux App Flux application is used for viewing, editing and simulating part’s bend tech tooling. Flux is also used to troubleshooting geometry errors. The application, Flux.exe is installed in the Bin folder.\nMetaCAM MetaCAM is used for viewing, editing and simulating cutting tech data. The application, MetaCAM.exe is installed in MetaCAM folder.\nTrek Built over MetaCAM core. Trek is used to perform all cutting automation tasks like cut-tooling, auto-nesting. Multiple instances of Trek enable PEngine to perform multiple tasks in one-go. The application Trek.exe is installed in Bin\\Trek folder.\n",
    "description": "",
    "tags": null,
    "title": "Introduction",
    "uri": "/introduction/index.html"
  },
  {
    "content": " Note Praxis setup displays the below mentioned warning message at the beginning of Installation if the Praxis setup is run without running the Pre-Requisites. Pre-Requisite installation is necessary only for the first time and can be ignored thereafter.\nPraxis setup displays the below mentioned warning message at the beginning of Installation if the Praxis setup is run without running the Pre-Requisites. Pre-Requisite installation is necessary only for the first time and can be ignored thereafter.\nExecute the PreSetup.Praxis to install all the Pre-Requisites required to run Praxis application.\nClick Install to begin the Installation.\nThis setup installs native redistributables, .Net Frameworks and other drivers used by Praxis.\nClick Finish to complete the setup and Restart the computer.\n",
    "description": "",
    "tags": null,
    "title": "Pre-Requisites",
    "uri": "/introduction/installation/pre-requisites/index.html"
  },
  {
    "content": "Select a program and use the run command to load the program for running.\nPraxis Job and Part statuses are updated to reflect the parts-in-progress. The Layout is checked-out to prevent updates while program is loaded on the machine.\nPress the stop1 button on the run page to mark the current sheet as complete. The job is updated with the completion status. Repeat this to mark all sheets as completed. Once completed program is unloaded, it is removed from the machine production queue and the job/part/layout statuses are updated in Praxis.\nThis is a demo mode workaround to complete layout sheets at Vulcan. In the live mode, this would happen automatically as layout is completed on a machine. ↩︎\n",
    "description": "",
    "tags": null,
    "title": "Running Programs",
    "uri": "/hmicontrols/vulcanlink/runningprograms/index.html"
  },
  {
    "content": "The Programs page in Vulcan displays layouts from Praxis’ production queue.\nOperators can edit these layouts and save them back to Praxis.\nOperators can run the programs. The run progress is reported back and is reflected in Praxis.\nOperators can Add/Remove/Update LTT pages in Vulcan and push the updates to Praxis enabled Flux stations.\nSetting up the Praxis-Vulcan link Download Vulcan setup and install Vulcan standalone first.\nActivate and switch to the Programs page. You should see the sample demo programs (please contact Praxis support team for a Vulcan license).\nInstall Praxis with Vulcan Link component.\nLaunch Praxis to complete the setup. Praxis installs Proteck Dual Head laser machine to test the Vulcan connection and updates the Vulcan machine automatically. There is no create page in Vulcan as it produces programs created from Praxis when connected.\nNote Install the dual head machine manually if the automatic machine installation fails. You will also need to set the Vulcan machine by editing C:\\ProgramData\\Metamation\\Vulcan\\Data\\Settings.curl file (set MachineId:2230001) after installing the machine in Praxis.\n",
    "description": "",
    "tags": null,
    "title": "Vulcan Link",
    "uri": "/hmicontrols/vulcanlink/index.html"
  },
  {
    "content": "Launch the search prompt using the search button from the right. Type-in the search text and press OK. The programs are searched by the part name, job name and the job customer. And the list is updated with the programs matching the search text.\n",
    "description": "",
    "tags": null,
    "title": "Searching Programs",
    "uri": "/hmicontrols/right-angle-link/searching-programs/index.html"
  },
  {
    "content": "Pre-requisite: The system must have SolidWorks Application installed to test this feature.\nInstallation Steps Launch Praxis setup and select SolidWorks Extension option on the components selection page to install the Praxis-SolidWorks add-in1. (Skip the Server option if add-in is being installed on a Praxis client). Finish Praxis installation and make sure Praxis monitor is running in the notification area.\nLaunch SolidWorks. It should prompt with the Praxis login dialog at the startup. Enter the password (if required) and press OK to continue to the SolidWorks home tab. Praxis remembers the credentials entered here and uses it from the next session onwards.\nFinish Praxis installation and make sure Praxis monitor is running in the notification area.\nLaunch SolidWorks. It should prompt with the Praxis login dialog at the startup. Enter the password (if required) and press OK to continue to the SolidWorks home tab. Praxis remembers the credentials entered here and uses it from the next session onwards.\nYou can use the tools • praxis • about praxis… SolidWorks command to check and verify the extension.\nAnd use tools • add-ins… dialog to enable/disable it at the SolidWorks startup. (The Praxis add-in is listed under Other Add-ins at the bottom.)\nTerms add-in and extension are used interchangeably in this document ↩︎\n",
    "description": "",
    "tags": null,
    "title": "Solid Works Addin",
    "uri": "/cad-extensions/solid-works-addin/index.html"
  },
  {
    "content": "Setting environment variable Emulation = 1 before running any of the above commands activates the emulation mode. This is to make the Praxis simulate the workflow on systems where Creo Parametric is not installed.\nFor the PreImport emulation, a pre-processed output folder with the same Creo part name containing the exploded part files, should be placed in the same folder as the part file. If placed, tool works as normal. If not, the following exception is shown.\nTo revert to the normal mode, set Emulation = 0 ",
    "description": "",
    "tags": null,
    "title": "Emulation Mode",
    "uri": "/cad-extensions/creo-family-parts/emulation-mode/index.html"
  },
  {
    "content": "Filtering parts by tooling status Select Tooling Status search field to filter parts by their tooling status. The dropdown displays states as colored checkboxes and machines where White is OK, Orange is Error and Yellow is a Warning state. The Apply All (\u0026) button is enabled in this case to apply the filter condition for all selected machines.\nFilter Description Displays parts which have at least one tooling error Displays parts which cannot be cut using TruLaser 3030 machine Cut Infeasible: These parts cannot be cut on any cutting machine. (Notice “\u0026” selection here) Bending Errors: Parts cannot be produced as there is no valid bend tooling Panel bend ONLY: These parts can be processed only because there is a valid panel bend tooling. These cannot be done on any of the press breaks. Filtering parts by Bend mount Select Bend Mounts field to search parts by bend mount.\nThe dropdown, for this field, displays list of bend tools. Select a tool to find list of parts using this tool\nThe tool list in the dropdown can be narrowed down by typing in the tool name, tool type (punch, gooseneck, radius etc.,) and tool description\nSelect multiple tools and apply ALL (\u0026) modifier to list all parts using both tools.\nSelect a part and double click to open part detail to highlight other tools used in the part for ALL bending machines. The tool description is updated with the mount details.\nDouble click the machine to highlight the bend tools used in the selected part for the selected machine.\nPlacing the mouse over the bend mount filter button displays tooltip with selected tool icons. A square bracket around the tool count means “ALL” match condition whereas the small bracket means ANY match.\nFiltering parts by used tools This is identical to filtering based on used mounts except:\nThe tool icons are drawn in a proportional size (not exactly proportion).\nWhen the tooling preview is open, moving the mouse over the highlighted tools highlights the corresponding tooling in the preview pane.\nFiltering parts by state Library Parts can be filtered by State now. The options display list of ALL applicable states and therefore it changes depending on list of library parts and their current states. Pick Material Missing to list parts in unresolved material state.\nFiltering parts by Error codes In combination with the status and Machines now specific tooling Error codes can be used in search by Tooling Status.\nThe image below shows the search scenario : Overload tooling errors for Machine 5170 6A\nThe error list displays the applicable errors for the machine and status selection. It refreshes on machine and status selection change to make the search more accurate. So, if you select warning status for a punch machine, only the available punch warnings are displayed in the error list.\nSuppressed State filter Often Part toolings are suppressed due to over – sized geometry or thickness. The tooling is also suppressed if it is specifically denied by a CAD route. Praxis displays the suppress reason in the tooling tooltip. Also, such parts can be searched using the newly added Suppressed state box in the Tooling Status search menu.\n",
    "description": "",
    "tags": null,
    "title": "Part Library Filter",
    "uri": "/filters/part-library-filter/index.html"
  },
  {
    "content": "Using Factory Settings Use factory . sheets . add… command and select New Material… menu option to add a new material or raw material.\nFill in the Material name, unique new Raw Material name and thickness(as per the working unit set in Praaxis settings)\nNote Pick View… Show All Materials option to see the newly added materials. Otherwise Praxis show only the inventory material in the materials/sheets list.\nUsing Spreadsheet The material/sheet list is exported to a text file in a hierarchical format, Material → Raw material → Sheets. This is terser and more expressive format than the regular CSV files. The exported data is structured as::\n\u003cFile – Version\u003e Material – Name = [Bend Material],[Density], [FName] RawMaterial – Thickness, Name=[FName] Sheet-Width, Height, Grain, Desc = Qty, [Factory], [Shelf], [Cost], [Comments] Each next level hierarchy is intended by a single space than its parent::\n1 Bronze = Aluminium 0.5, Bronze-05 1500, 1500, Vertical=112 The exported data can be edited and imported back to apply the changes. You can also add additional fields (not exported by default) to the exported content. These optional fields are marked under the square bracket in the schema.\n",
    "description": "",
    "tags": null,
    "title": "Add New Material",
    "uri": "/factory-settings/add-new-material/index.html"
  },
  {
    "content": "When a new spreadsheet is imported, Praxis validates and job item entries and highlights the error rows in the New Job dialog.\nTypes of possible validation errors:\nInvalid quantity: The job item has zero or negative quantity.\nInvalid or Missing Material: The CSV material entry is missing, or it cannot be resolved as one of Praxis materials.\nInvalid due date: Due date entry is missing or points to the past.\nBlank part: The CAD entry from CSV does not exist in the Praxis library or in the CAD lookup directories\nTypes of possible validation warnings:\nMaterial mismatch: The CAD material entry from CSV is different from its corresponding part’s material in the Praxis library.\nBlank part: The CAD entry from CSV does not exist in the Praxis library or in the CAD lookup directories.\n(If factory • settings • job • create a blank part … is enabled, the blank part is marked as warning, if not it is marked as an error)\nCheck Show Errors checkbox to toggle the error description column and Switch to the Jobs to switch to the Jobs page after a new Job is created.\n",
    "description": "",
    "tags": null,
    "title": "Spreadsheet Mapping Error",
    "uri": "/job-spread-sheet/spreadsheet-mapping-error/index.html"
  },
  {
    "content": " Select one or more parts/jobs to be nested and right click. And select Run Interactive Nesting…\nThe interactive nesting wizard is loaded in the main work area.\nClicking next moves to the quantities page where the part quantities can be modified.\nMoving next begins the nesting and displays the nest progress and results as they are received. The nested quantity and estimated workload are reflected in the Selected Parts, All Machines tabs (in blue color). The nested layouts are drawn to the scale and are displayed in the Nest Results tab.\nThe nest completes finally, completing the nesting steps. All the nest results can still be cancelled without saving them to the repository.\nWhen all the required parts are not nested, the final step displays a restart symbol, indicating that the nesting process would restart for the remaining parts which were not nested. This may happen for variety of reasons like setting the nest quantity to a lower than required value, infeasible parts on selected machine, discarding some of the nest results etc.\nThe tick mark (✔) is displayed after the nest completion. Pressing next then, closes and unloads the nest wizard.\n",
    "description": "",
    "tags": null,
    "title": "Interactive Nesting",
    "uri": "/job/planning-jobs/interactive-nesting/index.html"
  },
  {
    "content": "These nest settings can be used to control the auto-nest behavior in Praxis.\nAuto-release packing cut-off: This value is used to decide whether a nested layout is held in approval queue and is renested again when new parts are planned or they are released for production and related outputs are exported to the output folder.\nAuto-release due date cut-off: This is not used by auto-nester right now.\n",
    "description": "",
    "tags": null,
    "title": "Auto Release Job",
    "uri": "/job/auto-release-job/auto-release-job/index.html"
  },
  {
    "content": "When an assembly part is imported, Praxis :\nExtracts the sheet metal parts and adds them to the Part library.\nSeparates the non sheet metal components and adds them to the Component library.\nAdds the assembly to the assemble library.\nIf the part was imported earlier as a sheet metal part, it removes them from the part library\nThe imported assembly BOM contains both components and parts. Selecting an assembly from the assembly tree, shows both parts and components contained inside the assembly. Component count (in the second assembly) is displayed below the component image. For instance, in the above image under Components, respective selected assembly component count(43) and total component count(305) is shown.\nThe component tool – tip displays name, material and size. When the assembly is produced, the components are filtered out from the job.\nSamples Along with the binaries, the installer installs sample assemblies with components in C:\\ProgramFiles\\Metamation\\Praxis\\Samples\\Assys\\Components folder. These parts and assemblies can be imported to test the component import feature.\n",
    "description": "",
    "tags": null,
    "title": "Import Non-Sheet metal Parts",
    "uri": "/assembly/import-non-sheet-metal-parts/index.html"
  },
  {
    "content": "New parts can be imported and viewed using Part Library page.\nThe parts are added to the list and are submitted to the Praxis Engine for further processing.\nWhile dropping part in Part Library, it goes throught the following three stages i) Part Import ii) Bend/Fold tooling iii) Cut tooling. First two steps are carried out using Flux core whereas MetaCAM engine (Trek.exe) is used for the third.\nIn the first stage:\nDepending on the CAD geometry type, a part is folded or sheet-metalized (equivalent to 3D cleanup + unfold in MetaCAM world). Material + Thickness is assigned to the part. Thumbnail is extracted along with other properties like size, weight etc., and Part is saved to the database for the second stage. In the second ingestion stage:\nPart is tooled for all available press-brake and panel bending machines A flat part is generated from the part’s 3D model and part is sent for third stage processing In the third stage:\nThe flat geometry is imported to MetaCAM part format and the part is tooled for all available profile cutting machines like laser, punch, plasma, waterjet etc. At the end of each stage, the part status is determined and assigned to the part. The changes are saved immediately to the database and the part library view reflects the changes instantaneously by updating the view live.\n",
    "description": "",
    "tags": null,
    "title": "Part Library",
    "uri": "/part-library/index.html"
  },
  {
    "content": "Use the Assign Material… command to assign material to one or more parts. Praxis displays a dialog with the list of raw-materials when this command is used. The raw-materials are displayed as clickable buttons. Use the search box in top right to locate the raw-material and click on the corresponding button to assign it to the selected part(s).\nDepending on the selected part(s) and the user part library, the raw-material are displayed in Suggestions, Used and All sections.\n",
    "description": "",
    "tags": null,
    "title": "Material Not Assigned",
    "uri": "/part-library/validate-cad-error/material-not-assigned/index.html"
  },
  {
    "content": "Use Shortcut key P to navigate to the Part Library\nThis view displays parts as tiles with each tile displaying part-picture with a few basic part properties like name, size, material, thickness etc.\nThe tile also displays tooling status of the part for the available factory machines.\nThe view refreshes automatically with the live data, however you can also force a refresh by pressing F5.\nParts can be searched by Part-Name and Material via Search box. To search parts, click inside the search-box (or use shortcut key: Ctrl + F) and type-in the text. Praxis updates the list with parts with name of material matching the search-text. Pressing Escape key, while search-box has the keyboard focus, resets the search text.\nIf the list contains more item than what can fit on the page, use mouse-wheel to scroll down the content.\nDouble clicking a tile or pressing Enter key after selecting a tile changes the view into the details\n",
    "description": "",
    "tags": null,
    "title": "Part Library Tour",
    "uri": "/part-library/part-library-tour/index.html"
  },
  {
    "content": "Execute Praxis Setup to begin the installation\nChoose the installation directory or accept the installation default C:\\Program Files\\Metamation\\Praxis and click Next.\nInstallation Packages Full Installation – In this mode all components (Server, Desktop and Engine) are installed on the same computer.\nServer Installation – Only server and Desktop are installed.\nClient Installation – Only Desktop is installed on the target computer. You can also pick Engine in this mode.\nStations – To set up stations for Flux, MetaCAM, RightAngle, Vulcan.\nCustom Installation - Pick and choose the appropriate combination.\nPlease note that Praxis Desktop is included and installed with all packages. (Praxis Desktop consists of Praxis App + Monitor).\nIn a typical installation, you would choose Full installation on a server computer and Client installation on others.\nIn scenarios where the server computer doesn’t meet the graphics requirements, you can pick Server installation at the server, Client + Engine at the agent computer and just Client (Desktops only) at others.\n",
    "description": "",
    "tags": null,
    "title": "Praxis Setup Installation",
    "uri": "/introduction/installation/praxis-setup-installation/praxis-setup-installation/index.html"
  },
  {
    "content": "Select a Program in the programs list and use edit command to edit the program. The layout is checkout from the Praxis and is locked for editing. Update the program in Vulcan and press on done button to save the changes back to Praxis. Praxis checks the layout for validation errors and adds it back to the production queue if everything is OK.\nLinking Vulcan only station to Praxis The installation steps suggested in the start of this notes is more useful for testing and demo where both Vulcan, Praxis are needed on the same computer. A simpler Vulcan only option can be selected during the Praxis installation to skip a full Praxis install at the Controls. Select Stations • Vulcan on components page to pick this option. In this mode, existing only Praxis monitor with Vulcan addin is installed to link Vulcan to the Praxis.\n",
    "description": "",
    "tags": null,
    "title": "Editing Programs",
    "uri": "/hmicontrols/vulcanlink/editingprograms/index.html"
  },
  {
    "content": "Select a program and use the run command to load the program for running.\nPraxis Job and Part statuses are updated to reflect the parts-in-progress.\nPress the done button on the run page (depending on your screen height, you may have to press the more to bring this in). The job is updated with the completion status and the program is removed from the machine production queue.\n",
    "description": "",
    "tags": null,
    "title": "Running Programs",
    "uri": "/hmicontrols/right-angle-link/running-programs/index.html"
  },
  {
    "content": "Save Filter by Name Use menu command Save Filter… or shortcut Ctrl+S to Save the filter by name. The Save Filter dialog can also be used to delete pre-existing filters. Selecting from an existing item, overwrites the item with the new filter.\nSelect saved filters Click on the filter selection menu button from the right-hand-side or use V shortcut key to list and select a saved filter. Select All option to clear filters and list all items. You can also use the alpha-numeric hot key A-Z, to jump-select a filter from the list.\nSame sort/filter feature is also available in the jobs page.\n",
    "description": "",
    "tags": null,
    "title": "Save Filter",
    "uri": "/filters/save-filter/index.html"
  },
  {
    "content": "Use the Delete option to Delete Raw material and the respective sheets.\n",
    "description": "",
    "tags": null,
    "title": "Delete Material",
    "uri": "/factory-settings/delete-material/index.html"
  },
  {
    "content": "The spreadsheet file refers to a part by part-name. When a spreadsheet file is imported, Praxis first searches for the part in the Part Library and if not found, then it imports it from the CAD lookup directories.\nSetup the lookup directories and look-up order using this setting.\n",
    "description": "",
    "tags": null,
    "title": "CAD Lookup",
    "uri": "/job-spread-sheet/cad-lookup/index.html"
  },
  {
    "content": "Pull Workflow (or pull scheduling) is useful for users who need a highly autonomous planning and nesting system. When enabled, Praxis plans the nesting on-demand.\nIn the Pull workflow the Praxis Monitor watches over the machine output folders for NC reports. And if the NC count falls below the cut-off set via Nests per station, the monitor plans fresh nests. The nested outputs and NC are saved to the machine output locations:\nIf the layout packing efficiency is above the cut-off defined in Nest settings. (Sometimes there are multiple such acceptable layouts and all of them are retained and released, making the total layout count well above cut-off).\nIf the packing efficiency is below the cut-off and there are no more parts available for the nest. These layouts are again tried for repacking if more parts are queued up before the layout is removed from the output queue. If there are more plannable parts, the layouts below the packing cut-off are discarded and nest is retried with more parts in next nest session.\nRemoving the nested layout outputs from the machine output location updates the queue size and triggers auto-planning when queue size goes below the cut-off. Check the Mark the task completed… option to move all job parts on the removed layout to the completed state and reflect it in the Job progress.\nPraxis uses a pre-filter heuristic to feed a smaller set of parts to the nesting engine. First, it sorts the available parts by Feasibility, Priority, Due-date and the Job number. And then they are run through the rectangular nest. A couple of lot sizes are selected and thus queued for nesting. This pre-filter heuristics makes sure that:\nOverall nest time is not too much, and system is responsive to the nest triggers.\nA mix of different part sizes are nested together resulting in better efficiency.\nParts from the same job are kept together as much as possible.\nThe image below displays the sheets nested in Pull Workflow.\n",
    "description": "",
    "tags": null,
    "title": "Pull Workflow",
    "uri": "/job/planning-jobs/pull-workflow/index.html"
  },
  {
    "content": "The Job is planned in one of the following ways to extract a higher throughput in lesser work steps.\nMixed mode nesting\nInteractive Nesting\nPull Workflow\n",
    "description": "",
    "tags": null,
    "title": "Planning Jobs",
    "uri": "/job/planning-jobs/index.html"
  },
  {
    "content": "Praxis can import and explode assemblies into Parts and non-sheet metal components. To import assemblies : use open command, choose Import Parts… option and select assembly files in open – file dialog. All Assembly files filter can be used to filter assembly – only files in the file dialog.\nOnce imported, Praxis displays the assembly list under the assemblies tree in the Part Library. Click on the assemblies toolbar button on the right to switch to this view. In this mode, the library displays the filtered list of assemblies abd respective parts. Selecting one or more parts in parts pane, highlights the respective assemblies.\nSelecting an assembly from the tree in left, displays parts from the selected assembly with the total part quantity in the assembly. Apart from showing assembly part list, the rest of the UI is same as part library. (so, you can double click a part to switch to the details page.)\nPart Library search/filters and saved searches can be applied on assembly – only parts in the assemblies view to search specific parts.\n",
    "description": "",
    "tags": null,
    "title": "Assembly",
    "uri": "/assembly/index.html"
  },
  {
    "content": "Praxis assigns Bend Infeasible state to the part if no valid bend solution is found during the auto tooling. User can ignore/fix the tooling error to resolve the Bend infeasible error. A similar change has also been applied to the cutting workflow. The part is put in Cut infeasible state if no feasible cutting solution is found.\n",
    "description": "",
    "tags": null,
    "title": "Bend/Cut Infeasible",
    "uri": "/part-library/validate-cad-error/bendcut-infeasible/index.html"
  },
  {
    "content": "To begin with, load parts into the Part Library. This can be done by\n(i) Selecting Open -\u003e Import option from the Part Library. This option can be used to import Parts, Jobs and Assemblies from the local and remote directories/folders. This option allows importing parts individually or in batches.\n(ii) Drag and drop a part into Praxis Part Library directly.\nTooling After successful import, parts are auto-tooled and tooling status is updated.\nMaterial and Part details are updated.\n",
    "description": "",
    "tags": null,
    "title": "Import Parts",
    "uri": "/part-library/import-parts/index.html"
  },
  {
    "content": "Praxis is a distributed, Server/Client application. Select Full installation option on the components selection page to perform the first install.\nCheck ON Install SQL Express 2019 while installing Praxis on a new machine. This is necessary only for the first time and can be ignored thereafter.\nNote SQL Express 2019 installation is needed only for the Server. This option is not available for Client and Sync Installations.\nClick Install to begin the Installation.\nSQL Server Installation Once Praxis components are installed, the installer proceeds with the SQL server installation. Accept the License Agreement to proceed and install SQL express with the default options.\nOnce the installation is completed Click Close and complete the installation.\nDepending on the Windows version, closing the SQL installation may prompt a restart. After the Restart, launch Praxis to register the license and complete the installation.\nProvide the appropriate Serial key and credentials to Register Praxis.\nCheck ON Use SQL Server and select the SQL server name to connect to the Database.\nOnce connected, Welcome screen is seen with login credentials. Confirm the credentials and Click OK. Check-ON Remember me to save the credentials for future reference.\nUpload(Open –\u003e Import) a new Part from the C:\\Program Files\\Metamation\\Praxis\\Samples\\Parts and verify if the Part is imported successfully.\n",
    "description": "",
    "tags": null,
    "title": "Server/Full Installation",
    "uri": "/introduction/installation/serverfull-installation/index.html"
  },
  {
    "content": "When linked to Praxis, the same LTT is used in Vulcan, Praxis and Flux. Vulcan becomes the LTT master and owns the technology tables. All edits made at Vulcan are pushed to all Praxis + Flux stations on the network.\nWalkthrough: Switch to the Configure page and click on the Laser Database button. Open Praxis or Flux to confirm the existing laser data. In Vulcan select a material + thickness and use clone page to clone the selected page. Here we are going to clone the MS_2mm generic page for Air. Follow the steps displayed in the image below and press OK. Press done in laser database page and press OK to save the changes when prompted. Open the page lists again in Praxis/Flux. The cloned page should be listed. Note Flux/Praxis should refresh the pages without restart. You just need to restart the page list dialogs. A more realistic test scenario would be to install Vulcan, Praxis and Flux on different computers. The LTT synchronization doesn’t work from Flux → Vulcan. Work is needed in Vulcan to support this. ",
    "description": "",
    "tags": null,
    "title": "LTT Synchronization",
    "uri": "/hmicontrols/vulcanlink/lttsynchronization/index.html"
  },
  {
    "content": "Switch to the Edit page in RightAngle. Select the program you want to edit and press the edit toolbar command. RA check-out the program from the Praxis repository and opens it in the edit mode. The part tile and tooltip in Praxis reflects the check-out status and reason.\nApply a tooling change and press done to save the program back to Praxis. The program is saved and used from next time onwards.\n",
    "description": "",
    "tags": null,
    "title": "Editing Programs",
    "uri": "/hmicontrols/right-angle-link/editing-programs/index.html"
  },
  {
    "content": "The Jobs search functionality has significantly improved in this build. This makes it easier to locate Jobs, Active Parts and Nests based of various:\nOrder criteria like the priority, due date, customer, ordered part and quantity etc.\nPlanning/Scheduling status like the scheduled machines, sheets to-do, sheets completed, nested parts, nested layouts etc.\nNest attributes like nest efficiency, raw-material, unique and total parts, job IDs and counts.\nSample Filters Part/Layout Name The Part name field appears in the Jobs and the Nests page. Keying-in the search text, lists all sheets/jobs containing the parts matching the search term.\nSelecting the items from the suggestion narrows down the search to the selected part(s).\nThis behavior extends to the jobs page as well. Job page can be searched using the Part name and the Layout name. Like the Part name field, a suggestion list is displayed for the layouts as well.\nPriority and Due date Priorities and due dates are assigned to a part in a job. The Priority field, like the “Part name”, lets users find nests/jobs with higher priority parts. The high priority parts can be located on a nest by highlighting them using mouse over the suggestion menu. Similarly, parts with specified due date can be searched and located on a nest using the highlight feature.\nApart from pre-defined due date filters like Today, Yesterday, tomorrow etc., you can also key-in the custom date values/ranges in yymmdd format into the search textbox. The acceptable date expressions are:\nExpressions with (in)equality operators followed by the date value. E.g., \u003e=220121 would search all items which are due on or after 21st Jan 2022.\nDate range expressions like one in the image below. It searches for all nests due on or after 28th Jan 2022 and before 30th Jan 2022.\nUsed Tools Like the Part Library, nests can also be searched by the used punch tools. To search by used tools:\nSelect the Used tools field from the available filter columns. Praxis presents list of all available used tools.\nGenerally, this is a long list, use search term like the tool name, shape, size etc. to narrow down this list to the tool you are looking for.\nSelect one or more item from the list to filter parts where these tools are used. Switching to the details view, highlights the used tools and switching to simulation view reflects it back in the tooling preview.\nAside: Often the filter list hides the search content behind itself. Use Toggle opacity command to toggle the transparency. The transparency can also be toggled using the Right Mouse Click anywhere on the filter list.\n",
    "description": "",
    "tags": null,
    "title": "Job Page Filter",
    "uri": "/filters/job-page-filter/index.html"
  },
  {
    "content": "When a new laser/hybrid/waterjet machine is added to the factory route, Praxis checks if the target machine contains the technology table for all available factory raw materials (material + thickness). Praxis prompts user with the page mapping UI, if it does not find them. The page-mapping can then be used to map the factory material to the laser pages.\nThe page-mapping dialog can also be launched from the machine settings panel using the Map Pages… command and from the sheets factory settings page using MapàCAM Pages command. The later launches the mapping UI for all factory materials.\nThe mapping dialog displays factory raw-material in the left-side and the laser pages in the right. Mapping can be performed between the material and the pages of the same machine. An orange color means a missing entry implying that the raw material cannot be produced on the target machine.\nMapping Factory Materials The mapping can be performed at two levels\nFactory Material → Technology Material When a factory material is mapped to a technology material, Praxis then looks up for the raw-materials (thicknesses) from the factory set into the technology pages. If a match is found, it is displayed mapped (in green status color). Select the material node from left and a double click the material node in right or use Assign command to perform this mapping. As the image displays below, thicknesses 1, 1.5, 2 etc. are found in the technology entries in right. Selecting a mapped node in left highlights its map in right.\nFactory Raw-Material (material + thickness) → A Technology Page The raw material from left can be mapped to the technology pages in the right. To perform this mapping, select the node in left and double click (or select and assign) the page node in right. As displayed in the image below, such maps are displayed with an arrow (→ ) key.\nAuto-Assign Command When this command is used the page-lookup is done with a thickness scaled fudge. This is useful in mapping inch thicknesses to metric pages and vice-versa. The fudge value is ~.03mm for 1mm thickness. Hence, this allows a 1mm steel to be mapped to a page created for 0.04 inches (STEEL#18) steel. The command button is disabled if no such fudged mapping is possible. The Reset mapping… command erases the mapping table and resets back to the default. The mapping table is also used to select the appropriate raw-material sheet during the nesting. Page Edit Commands Page edit commands have been implemented in the material mapping dialog. These commands can be used to:\nEdit existing laser pages Copy an individual page or pages under a material node Remove pages These commands are helpful in setting up technology tables of a new laser machine from an existing, reference machine.\nEdit Page\nThis command can be used to edit an individual page or set of all pages under a material node. When the individual page is edited, you can change parameters like material, thickness etc. The material node can be edited to change machine or material of the whole batch under the node. The edit dialog displays the New and Old values of the selected page(s) and pressing OK applies the changes to the laser database.\nCopy Page\nThis command can be used to copy existing page(s) to new material or machine node. Same UI is presented with controls to changes page parameters.\nRemove Page\nThis command can be used to remove selected page(s).\nPress OK to apply the changes to the MetaCAM laser database. Cancel command cancels all edits leaving the config.dat unchanged.\n",
    "description": "",
    "tags": null,
    "title": "Material Mapping",
    "uri": "/factory-settings/material-mapping/index.html"
  },
  {
    "content": "If parts does not exist in Praxis library or lookup directories, Praxis will create a blank part for those unavailable parts.\nCheck ON the Create blank part for missing part in the spreadsheet import settings to enable this feature.\n",
    "description": "",
    "tags": null,
    "title": "Missing Part",
    "uri": "/job-spread-sheet/missing-part/index.html"
  },
  {
    "content": "Praxis uses Jobs to capture and track customer orders. Typically, a job contains a collection of parts with varying quantities, due dates, priority and part order.\nNew jobs can be xxxxx xxxxx\nImported from spreadsheets(csv, xlsx)\nCreated from existing parts from the part library\nDrop parts directly into jobs page and manually provide job parameters\nFrom Assemblies.\nJob View Jobs are displayed in tiles view where each job is displayed with a few basic properties like Job ID, Job reference, Customer name, Total parts etc.\nA job title also displays ordered parts and quantities as stacked cards. Parts within a job can be scrolled by rolling the mouse wheel over the cards.\nJobs can be searched by Job ID, Customer and Job Reference via Search box.\nDouble clicking a tile or pressing Enter key after selecting a tile changes the view into the detail mode.\nJob Details The details page displays the parts list along with the nested sheets (layouts) if any.\nUse Up/Down key to change the job being displayed in the details page.\nRolling the mouse-wheel over the part-stack highlights the part in part list as well as in the layouts.\nSelecting a layout highlights the layout as well as all parts nested on the layout in the part list. The highlights automatically go off after a minute.\n",
    "description": "",
    "tags": null,
    "title": "Job",
    "uri": "/job/index.html"
  },
  {
    "content": "Send to machine… The layouts are put in the release queue if they fall below the cut-off set via the nest settings. These layouts are retried for nesting when more parts are queued for nesting. The Send to Machine command moves such layouts from in-approval to the released state. Once released, they are no longer retried for repacking and the layout outputs are saved to the machine’s output location.\nAdd Parts… Use this command to add more parts to a relatively poorly packed layout. Like the Interactive Nesting, this is also a wizard driven command and can be used on a single or multiple layouts at the same time.\nPraxis mounts the Layout repack wizard in the main work area when this command is used. Hold Ctrl key and select one or more parts to packed on the layout(s) and press next.\nThe selected parts are displayed in the next step with editable quantity column. Update the part quantities if needed in Update Qty. step and press next to proceed to the nesting. Note that quantity can only be increased and not decreased.\nAll the layouts are nested separately, and the nested results are displayed with the newly packed parts placed onto them. Selecting the layout displays all the existing layout parts. The result is auto-discarded if no new part is placed during the repacking. A layout with multiple copies may result in different patterns after the repacking.\nAdapt/Compact This wizard-based command can be used to:\nAdapt the layout from one machine to another. This is useful when a machine for which originally a layout was planned goes down and system needs to quickly respond to this change. Or machine loads need to be redistributed.\nMerge layouts packed on smaller sheets on bigger ones. Or split layouts packed on larger sheets into smaller ones. These are useful if material stocks are running low and the layouts using them need to be adapted to this change.\nEnhance the packing efficiency of multiple layouts (potentially nested on different machines) by merging them together.\nSelect one or more layouts and issue Adapt/Compact to load the command wizard into the work area. The UI displays all selected layouts in the left pane and the layout parts in the Parts pane.\nSelect machine and material and proceed next to perform layout adapt. Renesting is performed and nest results are displayed in the results pane. Press next to save the results\nExport Outputs \u0026 Mark Complete… The Export Outputs layout command exports the NC, report and layout files to the respective machine output locations. This command regenerates the NC with current unit set to the layout. When used on a job, it exports outputs for all job layouts and parts.\nUse the Mark Complete command to mark a layout as completed. The layout is removed from the active layouts list and part \u0026 job status are updated with the quantities moving to completed state. The outputs of a completed layout are removed from the machine output location.\nCompleted Layouts Completed layouts are displayed as grayed-out. And a tick-mark placed in bottom-right further indicates its completion status. The interactive commands like Adapt/Compact…, Add Parts… etc., which are used to prepare/refine layouts for production, are no longer displayed in the right-click command panel. Nests with respect to the completed layouts are removed from the Nest Page.\nDelete… The delete command deletes the layout from the repository. If the layout is an active layout, the in-process quantities are returned to the available queue and can be planned again. The outputs of a deleted layout are removed from the machine output location.\n",
    "description": "",
    "tags": null,
    "title": "Layout Commands",
    "uri": "/job/layout-commands/index.html"
  },
  {
    "content": "Multiple RA stations can be linked to Praxis for the same or different bending machines. Use the installation steps listed in the [setup section](input/RightAngle Link). Select the Praxis desktop client with RightAngle Link when prompted by the Praxis setup.\nLaunch Praxis and connect it to the Praxis server. Now launch RightAngle. It should be linked to the Praxis for the same 5130X 6A B23 machine. And both stations display the same machine queue.\nLoading a program to run on one station, removes it from the queue such that the other stations can work on the remaining programs. This behavior would be useful in carrying out the load balanced, collaborative production.\nUse settings • other setting • machine settings RightAngle command in Service mode to change the machine. Now switch to Praxis and plan a few jobs/parts on 5170 6A demo machine. The second RA station displays 5170 production queue.\n",
    "description": "",
    "tags": null,
    "title": "Adding Multiple RA Stations",
    "uri": "/hmicontrols/right-angle-link/adding-multiple-ra-stations/index.html"
  },
  {
    "content": " Like the CAM page mapping, you can edit material aliases and bend material (material used in Flux Bend) using the Map –\u003e Materials command to map materials to the alternate names.\nThis command brings up the material editor dialog as shown in the image above. This can be used to\nAssign a bend-material to the selected material.\nEdit alternate name (aliases) of a material.\nEdit alternate names of a raw materials.\nBend-material The factory materials defined in Praxis may be different from the known materials defined in Flux. Praxis assigns the mapped bend material to the part before sending it to Flux Engine for bend CAM. The bend material combo displayed in this UI displays all materials defined in Flux. Select one appropriate for selected material from the left.\nMaterial Aliases Enter an alias name of the material, one-per-line, in the Aliases textbox. When importing new parts, these aliases are used to map the external material names like ERP, CAD systems etc. to the one defined in Praxis. This is a many-to-one map where multiple aliases can be assigned to a single Praxis material. While an alias name must be used just once. The UI enforces this rule if the alias is used again for some other material.\nRaw Material Aliases Like material-aliases, the raw-material aliases allow to provide alternate names for material + thicknesses. These short names later can be used in a spreadsheet to provide a single entry for both material + thickness. For instance, In the image above alias GALV#13 for the raw material QStE380TM-15 is used in spreadsheet below to assign the part-material::\nPartName, Quantity, DueDate, Priority, Material 00.13,6,08/21/2016,Normal,GALV#13 00.14,13,08/21/2016,Normal,GALV#13 00.16,3,08/21/2016,Normal,GALV#13\nThe imported part is assigned with the target raw material and the alias is displayed as the Drawing material part field. This part-field is used to capture the material/raw material alias which was used to resolve the actual material or raw material of the part. As displayed in the right below – the bend material is assigned to part bending solution.\nThe Export… and Import… commands can be used to assign mappings in batch. The exported file is a simple key-value CSV file. The section below describes the key-value schema with examples. (Note that there is not header row in the exported CSV).\nBend Material (Material, Bend-material)\nAluminium, AlMg3 QStE380TM, 1.8900 Stainless, 1.4301 Material alias (Alias, Material)\nAlMg3, Aluminium 3.3535, Aluminium Al, Aluminium Raw Material alias (Alias, Raw Material)\nALUM#10, Aluminium-05 AL07, Aluminium-07 Al07X, Aluminium-07 ",
    "description": "",
    "tags": null,
    "title": "Edit Factory Material",
    "uri": "/factory-settings/edit-factory-material/index.html"
  },
  {
    "content": "While importing job via spreadsheet for the first time, Praxis displays the Spreadsheet Mapping dialog. Use it to map the Praxis fields to the Spreadsheet columns. The mapping UI displays Praxis fields in the left and the Spreadsheet columns preview in the right top. The Mapping preview is displayed in the bottom.\n",
    "description": "",
    "tags": null,
    "title": "Job Spread Sheet",
    "uri": "/job-spread-sheet/index.html"
  },
  {
    "content": "Check ON Use recursive CAD available in factory • settings • jobs. option to make Praxis use recursive search for the CAD lookup when a spreadsheet file is imported.\n",
    "description": "",
    "tags": null,
    "title": "Recursive CAD search",
    "uri": "/job-spread-sheet/recursive-cad-search/index.html"
  },
  {
    "content": "Use Output settings from factory • settings • job to control the outputs generated by Praxis. The outputs generated are saved at Cut output destination set at factory • settings • cut page. The nest outputs are saved to the individual folders named after the nested layout.\nSave layout NC and reports: The NC file is saved to the output folder along with other outputs.\nSave layout file: The nested layout along with the layout parts are saved to the output folder.\nOutput simulation preview in reports: Praxis outputs simulation animation to the html report it generates for the layouts. See the reports for more on this.\nMultiple Workstations Often users have multiple machine instances of same make (aka workstations). Create a subfolder for each workstation with the name prefix Station inside the machine output folder. Now each subfolder is considered as an output queue for the workstation and nest outputs are routed to them.\nSo, for instance in the example below, folders Station1, Station2 and Station3 are treated as output locations for 3 individual instances of machine Mits ML3015. And instead of a minimum of 3 nested layouts, a total of 9 are queued to them.\nAnd the nesting triggers when the NC count in any of these folders fall below the cut-off. No additional configuration is needed apart from adding/removing the station folders. And this can be done without stopping and restarting the Praxis Monitor.\n",
    "description": "",
    "tags": null,
    "title": "Nest Output Settings",
    "uri": "/job/nest-output-settings/index.html"
  },
  {
    "content": "The part is put in the error state if the material cannot be resolved or appropriate cut/bend solution is not found during the Part import.\nFollowing sections describes the various error states and ways to resolve them.\nMaterial Missing\nMaterial Not Assigned\nBend and Cut Infeasible\n",
    "description": "",
    "tags": null,
    "title": "Validate CAD Error",
    "uri": "/part-library/validate-cad-error/index.html"
  },
  {
    "content": "During the installation, Praxis imports CAM machines from Flux and MetaCAM and builds a routing table with possible workflow routes between. A route is a connection between the two processing stations in the routing view.\nIn this view:\nMachines are displayed as processing stations. Each station is drawn with a picture and name.\nThe stations are connected to each other with routes indicating a feasible workflow path which a part can take from start-to-finish.\nStation properties can be checked-out by placing the mouse over it.\nThe station availability can be edited by clicking on it and toggling the enabled checkbox in the settings inspector dialog\nThe inspector can also be used to edit tooling/nesting constraints and settings.\nThe modified settings are automatically saved to data:/system/machine.curl file when the Factory dialog closes.\n",
    "description": "",
    "tags": null,
    "title": "Factory Settings",
    "uri": "/factory-settings/index.html"
  },
  {
    "content": "Praxis can rewrite MetaCAM laser database with Praxis material or raw-material entries. This is especially useful for users who integrate external production planning and nesting system like Aquila DMM with Praxis. To create laser pages by Praxis materials:\nOpen the Page Mapping Dialog in Praxis and assign condition pages to the Praxis raw – materials. Now select the parent level Material node from left – hand – side Raw Materials tree and hit Create pages button to create new pages from the mapped ones. Sometimes, DMM is configured with raw – material names instead of the material, thickness hierarchy. In this scheme:\nRaw material (material + thickness) itself is added to the material list in MetaCAM.\nAnd a single page is added for each material in the laser database\nSet Lookup MetaCAM material by raw – materials… option in factory • settings • cut enable this style of page generation. When this style is enabled, Praxis generates pages by raw – material names and assigns them to parts at the time of auto – tooling.\nBelow is the snapshot of pages generated in this style.\n",
    "description": "",
    "tags": null,
    "title": "Update MetaCAM Laser Database",
    "uri": "/factory-settings/update-metacam-laser-database/index.html"
  },
  {
    "content": "Praxis saves a html report along with the other outputs. This is a fixed template report, and it contains various estimation and composition details. The reports have multiple sections:\nThe header section contains the key layout information like the machine, material, runtime, sheet count etc.\nThis is followed by a layout picture. The layout picture displays parts colored by the nest instance (the job-item). Placing the mouse over the part instance displays basic part details like the Name, Job ID and the Instance#.\nA simulation preview is generated, and the play button is placed on the right-top corner, if the Output simulation preview… option is enabled in factory • settings • job page.\nClicking on the play button runs the simulation preview for ~10s. It indefinitely loops over with a stop of 3s at the last frame. Use pause button to stop the simulation and switch back to the layout picture.\nLayout picture is followed by the jobs table. This displays list of all the jobs listed on the layout.\nThe Parts list display the nested parts in the same color as they appear in the layout. Please note that this list displays the parts by part-order (than just the part drawing). Therefore, separate entries are displayed for the same part from multiple jobs (orders) placed on this layout. The part details show the respective job IDs. These details also display the partwise resource usage which can be used in the quote preparation for individual parts.\nUsed tools section follow the punch parts. It displays list of tools used sorted by station ID with the tool icons drawn proportional to the scale.\n",
    "description": "",
    "tags": null,
    "title": "Layout Report",
    "uri": "/job/layout-report/index.html"
  },
  {
    "content": "Cut Toolings Praxis has been integrated with MetaCAM. To check MetaCAM- Praxis connection in MetaCAM, Launch MetaCAM and use Tools –\u003e Configuration –\u003e Sheet Database command. This should bring up Praxis sheet dialog.\nCheck-out the part by choosing a laser/punch tooling solution to edit the part.\nWhen a cutting solution is edited in Praxis, Praxis forwards the edit request to MetaCAM with the requested tooled PDG file. MetaCAM prompts with appropriate messages when the Save or Close command is used after the editing.\nEdit and save the part using icon. This brings the Praxis Checkin dialog.\nBend Toolings Check-out the part by choosing a bend/fold tooling solution to edit the part.\nPraxis plugs into Flux to handle the praxis repository files. This enables Flux now to identify a Praxis file as Part/Tooling and prompt with appropriate messages when the Save or Close command is used after the editing. Apply a tooling change to introduce a solution error (e.g. delete a punch etc.) and Save/Close the part using the Flux menu command. The praxis Checkin dialog identifies the error and prompts with the Checkin options.\nSave to Praxis Check-In options Command Description Ignore and Save When this option is selected, the error is downgraded to a warning state and the part is saved to the repository. The edit session closes when this option is selected. Check-in the file The file is normally saved in the identified error state and the edit session closes. Discard Changes All changes are discarded, and the checkout is cancelled. The edit session closes. Continue Editing The check-in operation is cancelled and edit session continues. When the part is saved without any error, the Save to Praxis pop-up will be displayed as follows,\nMultiple Checkout To prevent multiple users from editing same document together, Praxis supports checking-out of a document for editing. The document (part, tooling, job etc.) can be checked-out by a user using the Check-out command. Once checked-out, the part displays the user icon with check-out details as tooltip.\nFor users other than SiteAdmin/Admin and Programmer, the Checkout and Delete buttons in the command panel is replaced by the View button so that the other users cannot edit or delete the document.\nTo unlock the document for others, the Site Admins can cancel the checkout using Cancel Checkout command.\nJust like part, part-tooling can also be edited using the checkout . update . check-in workflow. Part also gets checked-out along with the tooling such that the parent is not modified accidently by other users while the tooling is being edited. Checking-in the tooling unlocks the part. Bend toolings are edited in Flux and Cut toolings are edited using MetaCAM.\n",
    "description": "",
    "tags": null,
    "title": "Edit/Update Tooling",
    "uri": "/part-library/editupdate-tooling/index.html"
  },
  {
    "content": "It is possible to search parts, jobs and nest based on their tooling status, production feasibility, used punch and bend tools etc. Pre-defined filter choices enhance the filter usability further.\nBased on the selected column, the search icon changes to a drop-down button. Clicking this icon (or using Down Arrow keyboard shortcut, when the keyboard caret is on the search-box) brings up the choices dropdown. The dropdown contains list of items which can be selected to quickly apply a filter choice.\n",
    "description": "",
    "tags": null,
    "title": "Filters",
    "uri": "/filters/index.html"
  },
  {
    "content": "Generally cutting machine tables are rectangular and wider. To enhance the tooling feasibility, Praxis now rotates the part along the part width after the part is imported such that wider than taller.\nUse factory . settings . import settings to control the rotation parameters. Uncheck the Rotate flat horizontally switch to disable the rotation. Set the height cut-off to control the rotation.\n",
    "description": "",
    "tags": null,
    "title": "Normalize Flat along the part Width",
    "uri": "/factory-settings/normalize-flat-along-the-part-width/index.html"
  },
  {
    "content": "When a part is imported in Praxis, it checks if a part with same name and content already exists. The import is skipped, if the part already exists and the content (or revision where applicable) is same. The existing content is replaced with the new one if they are different. Praxis also checks if the part is already nested in the active layouts (yet to be produced) or static nests (layouts assigned to Praxis Assemblies).\nThe Layouts are marked out-of-date if such layouts are found. The out-of-date (dirty) layouts are rendered with the light-yellow background.\nPraxis also flags the part-in-a-layout entry as out-of-date. This is set for a particular part when a layout is marked dirty due to the part revision. The parts are in the layout are also drawn with light-yellow background to highlight their out-of-date status.\nThe Refresh Out-of-date… command can be used to refresh such out-of-date layouts with the revised parts. This command is available with waiting, out-of-date layouts, and kit nests. The refresh operation replaces the existing part instance in the layout with the new revision. This is an in-place replacement with no nest topology update. Use this command when the outer part contour stays same across the part revisions.\nA Out-of-date Layouts selection filter has been added to select all out-of-date layouts in a single click and work with them.\nCheck Auto-refresh Out-of-date layouts available in factory • settings • job • nest settings to automate layout refresh. When checked, Praxis refreshes all out-of-date layouts linked to a part after its cutting solutions are calculated.\nThe refresh, when the outer part contour is updated, may result in part overlap or overflow outside the machine stroke. Use Adapt/Compact to force the renest and fix overlap/overflow issues. Errors can also be fixed by editing the layouts.\n",
    "description": "",
    "tags": null,
    "title": "Out of Date Layout",
    "uri": "/job/out-of-date-layout/index.html"
  },
  {
    "content": "Output Destination Set Output Destination field of a machine to assign a specific target output folder for that machine. If this field is not set, the output settings set via factory • settings • cut/bend is used as the target output location.\nExport outputs Tooling outputs and reports can be exported manually using the Export outputs panel command. This command can be used on a single part or multiple parts selected in a batch.\nSave Output The tooling results are saved only if the tooling is in OK state and the export settings are enabled and configured in factory dialog.\nThe following output files are stored in the output location.\nIgnore Errors The Ignore Errors tooling panel command exports the outputs to the target output folder. The exported outputs are deleted from the target folders if the tooling is identified with errors.\nFor instance, in the below example the part is imported with an overload error. Upon clicking the Ignore error the part is tooled with warning.\nThe output is automatically saved to the destination\n",
    "description": "",
    "tags": null,
    "title": "Output Settings",
    "uri": "/part-library/output-settings/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "CAD Extensions",
    "uri": "/cad-extensions/index.html"
  },
  {
    "content": "The fudged shape identification is now supported. You can set the fudge value at:\nGlobal level by setting the Shape identification fudge on factory • settings • import page. This value is used as a default for all shapes. The default value set above can be overridden by setting the fudge value at individual shape level. Selecting the shape in the Shape Library dialog, displays the fudge value. By default this is set to 0, and default global value is used for such shapes. The application default: 0.001mm (1 micron) fudge is used if both the values are set to 0. (Please note that for the curved shapes the fudge values are used for radius comparison than the diameter comparison.) Image\n",
    "description": "",
    "tags": null,
    "title": "Fudge Shape Identification",
    "uri": "/factory-settings/fudge-shape-identification/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "HMIControls",
    "uri": "/hmicontrols/index.html"
  },
  {
    "content": "Use Factory • Settings • Notifications to enable and configure the email notification. Praxis needs access to a SMTP service and account to send email. The second section of the settings page provides options to set-it-up.\nEnter recipient details and use Test… button to check if email is delivered successfully. It should show an error message like shown in the image below on failure. You can enter more than one recipient by separating them using a comma or space.\nPraxis Engine starts sending notification mails once notification setting is enabled successfully and internet connection is up. Emails are sent on import, tooling and nesting errors.\nSend mail in Batch By default, the email is sent immediately. Use Send messages in batch option to combine multiple messages and send them in batch. To avoid large messages, messages sent within a finite duration are combined.\nInformative Notifications For the tooling errors, now Praxis sends multiple tooling images instead of the single CAD thumbnail (old behavior) in the notification emails. To help visualize the coverage, the tooling items are exploded for the punch tooling. And a yellow/red marker is placed at the last punch hit. Preview of email message sent by Praxis.\nHere you can also opt for the tooling simulation preview instead of the static images. Praxis sends a smaller simulation animation of about 10 frames (\u003c 3s) when this option is selected.\nInfo The email is sent by the Praxis from the Engine computer. The internet connection must be up at this computer for this feature to work properly. Email notification does not work in interactive mode. So, if you edit a tooling or part, apply a change and save. No notification would be sent even if there is a tooling/design error in the part being saved. This is by design. When the bad data is saved in interactive mode, we already prompt the user and update the item status graphically. Due to the nature of the email communication, the mail delivery can be much slower and therefore it is done in the background. So, you may lose notification if the engine is stopped/killed before all messages are delivered. ",
    "description": "",
    "tags": null,
    "title": "Email Notification",
    "uri": "/factory-settings/email-notification/index.html"
  },
  {
    "content": "These nest settings can be used to control the auto-nest behavior in Praxis.\nMix parts from multiple Jobs: When enabled, parts from multiple jobs are intermixed on a single layout. When unchecked, jobs are nested in a single-job-at-time standalone mode.\nInteractive sheet-name prefix: Praxis uses English letter P as a prefix in the layout names it generates. The name is in format: .. For example, a MetaCAM layout is named as P10.lyt, P11.lyt etc. If this value is not set, the default prefix P is used both for the interactive as well as the automatic nested layouts. When set, the prefix specified here is used for interactive nests whereas the default prefix is used for automatic nests.\nUpdate sheet inventory… on nest (un)release:\nEnable switch Update sheet inventory… on factory • settings • job page to update the sheet inventory when a nest is released to (or recalled from) a machine for production. Praxis displays Insufficient Sheets report when the available sheets fall short of the required to complete the production.\n(o) The required sheet count is pulled from the inventory when nests are released for production.\n(o) The sheets are added back to the inventory when the nest is recalled or deleted.\n",
    "description": "",
    "tags": null,
    "title": "Nest Settings",
    "uri": "/factory-settings/nest-settings/index.html"
  },
  {
    "content": "A new assembly can be imported from a CSV file.\nUse open • import assemblies… command and select a CSV file to import it as a new assembly. Update the assembly details, quantities or use the Add…/Remove… buttons to update the BOM before importing the assembly and the parts.\nSame CSV format used for creating new job can be used for importing new assemblies as well.\nOnce imported, you can prepare and assign Static Nests to these assemblies.\nSwitch to the assemblies’ tab, right click an assembly and use Create Nests… command to launch the assembly nesting wizard. This is an interactive wizard where you can select machine, sheets, update the quantities, nest and save the results. The generated nests are named after the parent assembly for an easier identification. Once saved, the nest results are assigned to the assembly as static nests. And the assembly part status is updated to reflect the nest status. (Notice part Roof~2 status as the nest Roof-L5 was discarded from the results above). User can edit a static nest to insert un-nested parts from the parent assembly. Right click on an assembly and use Drop Nests… command to delete all assigned nests. Note Unlike jobs, mixing parts from other assemblies is not allowed for static nests. If allowed, this would prevent an assembly from being released for production without releasing the other.\nProducing a kit Right click and use New Job… command to produce the assembly. Praxis displays the New Job dialog. Update the assembly count and press OK. Use the regular New Job dialog with the part details to update due date and priority etc. and press OK. Update the assembly count and press OK. Use the regular New Job dialog with the part details to update due date and priority etc. and press OK.\nPraxis creates a job from the assembly, copies the static nests as job nests with the updated sheet counts. The copied nests are named with Job ID prefix. You can edit/delete the job nests without affecting the original kit. Or repack the nests using Adapt/Compact… and Add Parts… commands. Right click the job and use Plan Job… command to select and assign the press brakes to parts with the bends. ",
    "description": "",
    "tags": null,
    "title": "Create Nests from Assembly",
    "uri": "/assembly/create-nests-from-assembly/index.html"
  },
  {
    "content": "Run Pre-Requisite Installation like Server before beginning the Client setup.\nIn the client machine, after executing the Installer, Select Client option on the component selection page.\nProceed with the standard installation steps and click Install to proceed with the Installation in Client Machine.\nOnce installation is completed, Praxis is automatically launched. Provide the Server name or IP address to connect with Praxis server.\nOnce connected, Praxis displays the Sign up prompt. Accept defaults and click OK to proceed. Praxis starts at the Library page and displays library parts.\n",
    "description": "",
    "tags": null,
    "title": "Client Installation",
    "uri": "/introduction/installation/client-installation/index.html"
  },
  {
    "content": "Praxis Manual 2.0 ",
    "description": "",
    "tags": null,
    "title": "Home Page",
    "uri": "/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
