# Name of Project: Ops 101 Hacker Challenge

Vision: Build 3 hacking scenerios to provide teaching material for the ops 101 class. 1) will provide the user with a mock windows login page and the user will be able to guess passwords and if they guess correctly they will be taken to a mock windows desktop. 2) user will see a login page for a user and will able to click on a forgot password page the user will be able to guess the security questions based on publically available information. If the user guesses correctly they will be taken to a page of photos 3) user will see a product page with the sku number in the url. If the user adjusts the url they will be able to navigate to an unannounced product page.

The purpose of these sites to present students with examples of common ways pages can be hacked.

## In Scope:

### Intro Page:

Problem to solve: User will need to be able to choose which hacker challenge they would like to try at the beginning.
User Stories:

1.	As a user I will be able to navigate to 1 of 3 hacker challenges.

### Windows Login:

Problem to solve: create an environment to host intro level hacker challenges. The site would simulate a Windows login page and accept users to guess passwords. If the user guesses incorrectly the site will show the same error windows does. If entered correctly the user will be directed to a page that looks like a windows desktop.

User Stories:
P0
1.	As a user I will see an actual Windows RDP login screen – xs - CSS
2.	As a user I will be able to input a password – xs- form input
3.	As an application I will be able to evaluate the password against a correct response – 
a.	Feature 1 input – event listener - xs
b.	Feature 2 evaluate – if then statement- xs
4.	As an application I will be able to show an error message if the entered password doesn’t match the correct response - xs else statement
5.	As an application I will be able to move the user to a second screen that looks like a windows desktop.  s - link to new page
 
P1
6.	As a user I can click on the files on the desk top to open some fun things like a bio page for us.
a.	F1 – make files - xs - css
b.	F2 – open files - xs – link with a picture
7.	Limit number of input attempts xs – m -counter loop the if then statement
8.	As a user I will see an example of what a brute force attack will look like on the page - m 
 

### Celebrity Hack: 
Problem to solve: create an environment where a user can simulate hacking a celebrities private account. The user can select a forgot my password link and will be shown a window that allows them to answer security questions to bypasss the need to enter a password. The answers to the questions will be easily found online. The use will be prompted to create a new password. If the user guesses correctly, they will be taken to the celebrity’s private account.


User Stories:
1.	As a user I will see a login to a google photos website for Steve Buscemi – xs css
2.	As a user I will be able to click on a forgot password link and be directed to a security questions page – xs link
3.	As a user I will be able to guess security questions based on Steve Buscemi’s life – 
a.	F1 - xs form
b.	F2 – evaluate against a list of correct answers –x3  xs - an if then statement.
4.	As a user if I guess correctly, I will be able to reset the password – s – local storage
5.	As an application I will show the user the Steve Buscemi’s private google photo account page – css 

### Corporate Espionage:
Problem to solve: create a website where there is a secret new product that a company is releasing and the product’s sku number is only slightly different than the currently available product. If the user changes the sku number in the url they will be taken to the hidden page.  

User Stories:
1.	As a user I will be able to edit the url – xs create a second page
2.	As a user I will see a page with a product that will include the sku number in the product details – css - xs
3.	As a user if I edit the url with the a new sku number I will be taken to a secret page for an unreleased product - xs
