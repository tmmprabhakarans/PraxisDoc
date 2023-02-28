---
title: "Server/Full Installation"
date: 2023-02-28T15:00:21+05:30
draft: true
weight: 3
---

Praxis is a distributed, Server/Client application. Select *Full installation* option on the components selection page to perform the first install.

![Server Installation](/images/ServerInstallation.png)

Check ON *Install SQL Express 2019* while installing Praxis on a new machine. This is necessary only for the first time and can be ignored thereafter.

![Install SQL](/images/InstallSQL.png)

{{% notice style="note" %}}
SQL Express 2019 installation is needed only for the Server. 
This option is not available for Client and Sync Installations.
{{% /notice %}}

Click *Install* to begin the Installation.

![BeginSQLInstall](/images/BeginSQLInstall.png)

## SQL Server Installation

Once Praxis components are installed, the installer proceeds with the SQL server installation. 
Accept the License Agreement to proceed and install SQL express with the default options.

![SQLServer2019](/images/SQLServer2019.png)

Once the installation is completed Click Close and complete the installation.

![SQL Server Complete](/images/SQLServerComplete.png)

Depending on the Windows version, closing the SQL installation may prompt a restart. After the Restart, launch Praxis to register the license and complete the installation.

![Launch Praxis](/images/LaunchPraxis.png)

Provide the appropriate Serial key and credentials to Register Praxis.

![PraxisRegister](/images/PraxisRegister.png)

Check ON Use SQL Server and select the SQL server name to connect to the Database.

![Use Database](/images/UseDatabase.png)

Once connected, Welcome screen is seen with login credentials. Confirm the  credentials and Click *OK*.
Check-ON _*Remember me*_ to save the credentials for future reference.

![Welcome Praxis](/images/WelcomePraxis.png)

Upload(Open --> Import) a new Part from the C:\Program Files\Metamation\Praxis\Samples\Parts and verify if the Part is imported successfully.

![Praxis Welcome screen](/images/PraxisWelcomeScreen.png)