<h1 align="center">Tansi Kitchen</h1>

<a href="https://guss2708.github.io/Tansi-kitchen/" target="_blank" rel="noopener" alt="Tansi Kitchen logo, click here to open the website"><img src="assests/images/Screenshot2022-03-31at04.25.42.png" alt="logo">
<hr>
View the repository in GitHub
<a href="https://github.com/Guss2708/Tansi-kitchen" target="_blank" rel="noopener">here</a>

View the live project
<a href="https://8000-guss2708-tansikitchen-3gnlalldfxi.ws-eu38.gitpod.io/index.html" target="_blank" rel="noopener">here</a>



# Table of Contents

* [UX](#ux)
    * [User Stories](#user-stories)
    * [Using the five planes of UX design](#using-the-five-planes-of-ux-design)
* [Features](#features)
    * [Existing Features](#existing-features)
    * [Features left to implement](#features-left-to-implement)
* [Testing](#testing)
    * [Navigation Links](#navigation-links)
    * [Responsive Design](#responsive-design)
    * [Validator Testing](#validator-testing)
        * [HTML5](#html5)
        * [CSS3](#css3)
        * [Lighthouse](#lighthouse)
        * [WebAIM](#webaim)
    * [Browser Testing](#browser-testing)
* [Bugs](#bugs)
    * [Fixed Bugs](#fixed-bugs)
    * [Unfixed Bugs](#unfixed-bugs)
* [Deployment](#deployment)
    * [Version Control](#version-control)
    * [GitHub Pages](#github-pages)
    * [How to Clone this repository](#how-to-clone-this-repository)
* [Technologies used](#technologies-used)
* [Credits](#credits)
* [Contact](#contact)
* [Acknowledgments](#acknowledgments)

<hr>

# Tansi kitchen

The Tansi Kitchen is a local family business established in 2020. They started out modestly supplying their handmade ravioli and artisan breads, including sourdough loaves, to people putting together produce boxes for online stores, and quickly evolved into a thriving business from our farm outside Lusaka.  They supply small shops and delicatessens in Lusaka, with all kinds of pasta and sauces, including ravioli, tagliatelle, spaghetti, ready to cook lasagne, as well as bread and sourdough.

<hr>

# UX



## User Stories

- As a user I would like to browse the website.
- As a user I need to easily find a contact number.
- As a user it is important I can find an email address.
- As a user I would like to be able to view the products available.
- As a user I need to be able to find various social media sites.
- As a user I need to be able to find price for the products
- As a user I would like different forms of contacting Tansi kitchen.
- As a user I need to be able to access the website from different devices.

[Back to top](#table-of-contents)
<hr>

## Using the five planes of UX design
<hr>
<details>
<summary>Strategy</summary>

## Strategy
Having a online store is must these days. Especially, given the current circumstances, people are searching for products that are made in smal scale.
Considering that most business is performed online these days, it's more than a must to have an online presence.


Main directions of our development are:
- Having our potential clients to build their holiday package
- Addressing client's needs or queries by linking to our office

<br>
</details>

<details>
<summary>Scope</summary>
<br>


<br>
</details>

<details>
<summary>Structure</summary>
<br>

### Structure
These are the structure targets of the website.

Targets: 

- Navigation for the website
    - Menu bar.
    - Ease of access.
    - Digestible content.
- Different web pages for content
    - Home page.
    - Products page.
    - Contact Us page.
        - Contact details.
        - Contact Form.
    - Countries section.
    - Footer with links to external social platform pages.


<br>
</details>

<details>
<summary>Skeleton</summary>

<br>
</details>

<details>
<summary>Surface</summary>
<br>

### Surface
<hr>




#### Fonts

@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

<br>
</details>

[Back to top](#table-of-contents)
<hr>

# Features

## Existing Features
<details>
<summary>Landing page</summary>
<br>
This page welcomes and presents to the user Tansi Kitchen website.
Logo is positioned top left on all pages including home page and has a link to the home page.
On small tablets and smartphones, logo and Nav menu are stacked on top of each other.
The menu bar features in the top right corner, this is a modern and intuitive design.
The user can see a contact number and address. This section is always in the middle on all devices.
The background is a video that is responsive to different screen sizes. 

* Desktop


 
* Tablet



* Mobile


<br>
</details>

<details>
<summary>Navigational Menu</summary>
<br>
Navigational Menu is very intuitive to the user.
Included on all internal pages at the top right of the page. Allows access to internal links.
On desktop on hover above Destinations in Nav menu: a drop-down menu with countries links appears.
On mobile the user has to touch Destinations in order for drop-down menu to appear.
Since there are 6 countries with individual pages, putting all links in the Nav menu without the Destinations drop-down would have cluttered the Nav menu, hence the decision for drop-down menu.

* Desktop



* Mobile



<br>
</details>

<details>


</details>

<details>
<summary>Countries Section</summary>
<br>
Provides to the user link to individual countries pages from homepage in addition to Nav menu. It is available only on the homepage.

* Desktop

![Countries Section](documentation/features/countries.jpg)

* Tablet

![Countries Section](documentation/features/responsive/homepage_down.png)

* Mobile

![Countries Section](documentation/features/responsive/home.jpg)

<br>
</details>


<details>
<summary>Fixed footer</summary>
<br>

Footer is available on Homepage, Products pages and Sign up page.
Allows the user to see available links to other Travel Destinations social media sites and copyright info.

* Desktop



* Tablet



* Mobile



Includes:

- Links to external websites, which have aria labels and open in a new tab.
    - Facebook.
    - Twitter.
    - YouTube.
    - Instagram.
    
    
</details>


<details>
<summary></summary>
<br>


<br>



* Tablet



* Mobile



<br>
</details>

<details>
<summary>Video controls and subtitles</summary>
<br>
Video controls and subtitles are turned on by default, to provide the user with the best experience.

* Desktop

![Subtitles](documentation/features/subtitles.jpg)

* Tablet

![Subtitles](documentation/features/responsive/greece.png)

<br>
</details>

<details>
<summary>Contact us page</summary>
<br>
This page provides all the relevant information to the user in order to get in contact with Tanmsi Kitchen.  

* Desktop



* Tablet


* Mobile



Includes:

   **1.Map:**
   
 
   

![Contact details](documentation/features/address.jpg)

* Mobile

![Contact](documentation/features/responsive/mail.jpg)
![Contact](documentation/features/responsive/phone.jpg)

**3.Contact form**

Contact form offers the user one more form of contact with the travel agency.
The Fields: First Name, Last Name and Email are required and the form cannot be submitted without completing the fields - it prompts the  user to enter correct type of format for email.  

 


<br>
</details>

<details>
<summary>Thank you page</summary>
<br>




<br>

<hr>

    

    
<br>




# Testing

<hr>


## Navigation Links

Testing was performed to ensure all navigation links on the respective pages, navigated to the correct pages as intended. This was done by clicking on the navigation links on each page.

## Responsive Design

I was able to make the website responsive by using a combitation of CSS display:
  - Flexbox
  - Inline

 The screen sizes, which I implemented, allow the site to adapt to various user screens, starting from 320px and up to 1080p (1920x1080px). 

[Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) was the tool I used to make the site responsive.


<hr>

## Validator Testing
### HTML5

All internal pages passed official [W3C Validator testing](https://validator.w3.org/#validate_by_uri).

I corrected all problems the html checker indicated. The html checker pointed out embedded video deprecated features and semantic issues. All were corrected thanks to this useful tool.

<details>

<br>
</details>



### CSS3

Css passed official [W3C Validator testing](https://jigsaw.w3.org/css-validator/). There were no warnings or mistakes in my CSS.

<details>
<summary>Screenshots</summary>
<br>

![css](documentation/testing/w3c/css.jpg)

<br>
</details>

### Lighthouse

All the pages were tested with [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) using the [Lighthouse](https://developers.google.com/web/tools/lighthouse) resource.

- Performance:

    - To improve performance I limited the number of images on all pages.

    - Most images were resized and reformatted to reduce data consumption.

    - Went as feasibly low in quality for the images without damaging the cosmetic appeal of the website.

    - High scores throughout the website.

- Accessibility: 
    

    - Missing fieldset and legend for checkboxes added.

- Best Practices:

    - Displayed images either are or are near the correct aspect ratio.

    - HTML doc type included in the html for all pages.

- Search Engine Optimization:

    - Semantic HTML included in all internal pages created.

    - All links have descriptive text added.

    - Alt attributes added to all images.

    - Meta-data descriptions added to each internal page created.
    
<details>

### WebAIM 
  
   - All pages were tested with Wave Chrome extension to check web accessibility.   
   Wave does not show any error. It shows only 3 advisory warnings.  
   
  
  <details>
<summary>Alert Screenshot</summary>
<br>

  ![Youtube](documentation/testing/wave/youtube.jpg)  
  </details>
  
<details>
<summary>Screenshots</summary>
<br>

![homepage](documentation/testing/wave/homepage.jpg)
![italy](documentation/testing/wave/italy.jpg)
![contact](documentation/testing/wave/contact.jpg)

</details>


## Browser Testing 
- Page behaves as expected in all browsers tested. The website was tested in [Chrome](https://www.google.com/intl/en_ie/chrome/), [Firefox](https://www.mozilla.org/en-US/firefox/new/),
[Brave Browser](https://brave.com/),
[Edge](https://www.microsoft.com/en-us/edge) and [Opera](https://www.opera.com).


<hr>

# Bugs



[Back to top](#table-of-contents)

<hr>

# Deployment

## Version Control

I used [GitPod](https://www.gitpod.io/) as a local repository and IDE & [GitHub](https://github.com) as a remote repository.

1. To begin with I used Code Institute [template on GitHub](https://github.com/Code-Institute-Org/gitpod-full-template)
  
2. Then I used that template to create  [tansi Kitchen](https://8000-guss2708-tansikitchen-3gnlalldfxi.ws-eu38.gitpod.io/index.html) repository.
3. Once repository was created I pressed green Gitpod button at the top of the page to create a Gitpod workspace.
4. I created some files and folders.
5. To push my newly created files to GitHub I used a Bash terminal:

    *   **git add (name of file)** *This selects the file for the commit*
    *   **git commit -m "Commit message: (i.e. Initial commit)"** *Allows the developer to assign a specific concise statement to the commit*
    *   **git push** *The final command sends the code to GitHub*

## GitHub Pages

Close to the end stage of the development I looked for a way to deploy the website. As a deployment solution, I chose the version control system [GitHub](https://github.com). They have an excellent resource called [GitHub pages](https://pages.github.com/) that allows developers to visually inspect how their website would look on a cloud platform.

1. To begin, I went to the repository and selected 'settings.'
2. I went to the 'pages' section.
3. I chose the master branch as the 'main' branch under 'source.'
4. I ensured that it was deployed from the 'root' directory.
5. Once completed, I got the website's URL.

## How to clone this Repository

Here's six steps to clone the repository: 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully. 

[Back to top](#table-of-contents)
<hr>

# Technologies used

- [HTML5](https://en.wikipedia.org/wiki/HTML5) for the contents and structure of the website.
- [CSS3](https://en.wikipedia.org/wiki/CSS) for the styling and animations.
- [GitPod](https://gitpod.io/) as a local IDE & repository.
- [GitHub](https://github.com/) as a remote repository.
- [GitHub Pages](https://pages.github.com/) to deploy the website.
- [Chrome](https://www.google.com/intl/en_ie/chrome/),   for browser testing the responsiveness.
- [Chrome Developer Tools](https://developer.chrome.com/docs/devtools/) for testing screen sizes and using
- [Lighthouse](https://developers.google.com/web/tools/lighthouse).

<hr>

# Credits

### Fonts
[Google fonts](https://fonts.google.com/).

## Code

### Nav menu
[Moderncss.dev](https://moderncss.dev/css-only-accessible-dropdown-navigation-menu)

<hr>

## Media

### Logo

### Icons
All the icons were sourced from [Fontawsome](https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free).

### Images and video
All images and videos were suplied by he the business owner and others taken from social media accounts.


# Contact

My name is [Gustavo Almeida ](https://github.com/Guss2708) I am a full-stack software developer student at [Code Institute](https://codeinstitute.net/ie/), where I am pursuing Diploma in Full Stack Software Development.


- [GitHub](https://github.com/Guss2708)

<hr>

# Acknowledgments

Thanks to Code institute for provide a amazing material that help me complete my project. I looking forward for some javascript.
