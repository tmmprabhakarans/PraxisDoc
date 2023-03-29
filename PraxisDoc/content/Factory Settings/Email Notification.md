---
title: "Email Notification"
date: 2023-03-02T12:32:42+05:30
weight: 9
---

<div style="text-align: center">{{< video src="/videos/6. Factory Settings/6.9 Email Notification/e-notification.mp4" type="video/mp4" >}}</div>

*<div style="text-align: center">Email Notification</div>*

Use **Factory • Settings • Notifications** to enable and configure the email notification. Praxis needs access to a SMTP service and account to send email. The second section of the settings page provides options to set-it-up.

![Notification](/images/Notification.png)

Enter recipient details and use *Test…* button to check if email is delivered successfully. It should show an error message like shown in the image below on failure. You can enter more than one recipient by separating them using a comma or space.

![Mail Failed](/images/MailFail.png)

Praxis Engine starts sending notification mails once notification setting is enabled successfully and internet connection is up. Emails are sent on import, tooling and nesting errors.

![Mail Notification](/images/MailNotification.png)

![Import Failed](/images/ImportFailed.png)

Send mail in Batch
=================

By default, the email is sent immediately. Use Send messages in batch option to combine multiple messages and send them in batch. To avoid large messages, messages sent within a finite duration are combined. 

![Batch Message](/images/BatchMessage.png)

![Bend Failed](/images/BendFailed.png)

Informative Notifications
=========================

For the tooling errors, now Praxis sends multiple tooling images instead of the single CAD thumbnail (old behavior) in the notification emails. To help visualize the coverage, the tooling items are exploded for the punch tooling. And a yellow/red marker is placed at the last punch hit.
Preview of email message sent by Praxis.

![Multiple Tooling Images](/images/MultipleTooling.png)

Here you can also opt for the tooling simulation preview instead of the static images. Praxis sends a smaller simulation animation of about 10 frames (< 3s) when this option is selected.

![AttachGIF](/images/AttachGif.png)

![Gif attached with Mail](/images/GifMail.png)

{{% notice style="info" %}}

- The email is sent by the Praxis from the Engine computer. The internet connection must be up at this computer for this feature to work properly.
- Email notification does not work in interactive mode. So, if you edit a tooling or part, apply a change and save. No notification would be sent even if there is a tooling/design error in the part being saved. This is by design. When the bad data is saved in interactive mode, we already prompt the user and update the item status graphically.
- Due to the nature of the email communication, the mail delivery can be much slower and therefore it is done in the background. So, you may lose notification if the engine is stopped/killed before all messages are delivered.

{{% /notice %}}