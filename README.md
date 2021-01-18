# Personal Website Demo

This website is part of my Second Year Btech mini project.
It was intended to document some of my other projects and to test a few web development concepts practically.

(The Website was under version control but does not have any previous commits as those included personal api keys.)

---

## Installation and setup

1. The Website requires nodeJS and npm
   * install git bash: <https://git-scm.com/downloads>
   * install nodejs (npm included): <https://nodejs.org/en/>
2. Open gitbash in your working directory and install dependencies
    * ``` console
        $ npm install
      ```` 
3. Run app
   *  ``` console
       $ node demoApp.js
      ```` 
4. View the website @ 
 <localhost:3000> 

![WebsiteDemo](https://github.com/sameerad2001/PersonalWebsiteDemo/blob/master/ReadmeImages/image1.PNG)

---

## Setup MailChimp api

1. Read More @ <https://mailchimp.com/developer/transactional/api/>
2. Make the following changes in demoApp.js
   * auth: "api-key"

   * url: "https://us___Server.api.mailchimp.com/3.0/lists/___Listid"

   * ````js
      const url = "https://us5.api.mailchimp.com/3.0/lists/XYZ";

      const option = {
      method: "POST",
      auth: "ABC-us5"
      };
     ````
---    
## Website navigation
1. Home
2. Project
3. Snippets : Blogs (can add more content)
   * To add go to <localhost:3000/compose>
     ![WebsiteDemo](https://github.com/sameerad2001/PersonalWebsiteDemo/blob/master/ReadmeImages/image3.PNG)
   * dynamic urls using express routing
      ![WebsiteDemo](https://github.com/sameerad2001/PersonalWebsiteDemo/blob/master/ReadmeImages/image5.PNG)
4. Contact: Collected Emails can be viewed Under the Audience Section @ mailchimp <https://mailchimp.com/> 
   ![WebsiteDemo](https://github.com/sameerad2001/PersonalWebsiteDemo/blob/master/ReadmeImages/image2.PNG)
---
Sameer Ahmed <sameerad2001@gmail.com>

