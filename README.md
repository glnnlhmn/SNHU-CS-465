# CS-465 (SNHU) #

## CS-465-10989-M01 Full Stack Development I 2024 C-4 ##

This project was completed to meet the requirements of one of my final course at Southern New Hampshire University.  For more information on the project I would suggest serching the github for the Travlr tutorial.

## Architecture ##

### Website ###

The Travlr Tutorial provided a variety of methods to develop the site. Initially HTML was used to structure each separate page with the express site.  Next JavaScript was introduced to allow for dynamic content. This included using handles to allow dynamic routing to serve static pages.  This was relatively simple to set up and did not require any special tools.   One of the design features of this approach directly integrated the backend logic.
The direct integration with the backend is what contributes to the largest problem with this approach to website development. Those issues are slow page loading times and unscalable applications.
Because of this a single-page application (SPA) was developed using Angular.  First this involved creating an API for the backend. API functions were created to control the front end and backend interactions. This development was a natural progression in the creation of the initial website.  I would admit the conversion from statis HTML to an API was made easier by using some standard file structures.
Finally, the Angular front end was developed. It features reusable components. Also, the application utilized Blueprints to handle some of the style sheet work. The application kept routing, components, services, models and utilities in separate areas of development.  This allowed for specific functionality to be performed well by the correct components.

### Database ###

MongoDB was utilized for the project.  Personally, I believe the database was chosen to just give people a taste of a NoSQL database. It did provide a neat benefit. Simply put the database did not to be set up first.  The concepts utilized in the design and development would have work just as well with anything from SQLite to CockroachDB.

## Functionality ##

### JSON ###

The interchange of data between the front end and back end was necessary. JSON provides a good (self-documented) format for exchange.  While the J in JSON does stand for JavaScript it is very different. JavaScript is a programming language while JSON is a lightweight data exchange format.
Refactored to Improve
One of the key areas where refactoring improved the SPA was in module 7.  This module focused on an application with no security and implemented a security model.  Interestingly the process of changing the backend server could be completed without changing the front end at all. This allowed for the back end to be tested and released.  After that the front end could be developed, tested and released using a proven backend.

## Testing ##

Although this project did not require any automated testing it did provide a few good things to consider.  First the use of Postman to test the API was a new experience.  This allows for the interface to be verified.
Second debugging in the browser was also great for testing the front end.
As an example of process security was verified first through the API.  After that the front end was utilized to make the same sort of test.  When an update failed because the token was not with the update, a backend error could immediately be ruled out.

## Reflection ##

This was an outstanding course to see what full stack development really means. Sure, there is the basics of writing the code involved, but the course provided more.
First, of all the course I have taken in the CS program at SNHU this is the first on that to utilize GitHub for anything that looked like real work. I am much more confident in my git skills now.
Secondly, the refactoring process in the project made sense and provided a great opportunity top see how software is really developed.  This was completed by an instructor who insisted issues be talked about in class discussions rather than through private email.   More than once when I was having an issue, I found that someone else had already been there.
Finally, the material was not written with the latest versions of libraries. This meant some methods had been depreciated. It provided a good challenge to research and update those portions of the tutorial.
