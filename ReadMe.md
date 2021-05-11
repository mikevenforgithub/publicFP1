
 To launch the app, simply run it in your terminal:

    cd FP1 
then 
       
    python manage.py runserver

## - THE PROJECT -

This project titled "Planet Crypton", inspired by the word cryptocurrency and Superman's Home Planet Krypton, is a website designed to keep its users updated regarding the latest fluctuations, news and data of their favorite cryptocurrencies. 
A user can register and browse through the features of the project or access some of the features without registration.


**The Complexity**

The project is complex in the following ways:

* Uses Django
* 3 models in the models.py are created in the back end to store data
* Uses Python in the back-end for:
   *   Rendering Templates
   *   Calling request methods
   *   Http Responses
   *   Validation of Inputs
   *   Passing data in slugs
   *   Passing Context to templates
   *   Creating API
   *   Manipulation of various forms of data
* It uses Javascript on the frontend for:
   * Responsive Buttons  
   * API techniques, for both sourcing from own API routes and use of Json Data and also sourcing Json data from 4 different external APIs.
   * Pagination
   * Search Bar Implementation
 * It uses Chart.js library to implement Two different graph styles
 * It uses unit tests to test various aspects of the App.
 * It uses CSS for:
     * Timed fading and entering/exiting of elements into DOM
     * Responsive Animation 
     * Onscroll features
     * Fixed Background Image on scroll
 * Mobile Responsiveness implemented with CSS for each template


## - THE FRONT END -

The front-end consists in the following sections: 

* Home Page
* Articles
* Cryptoperformances
* BTC Blockchain
* Single Currency Page
* Profile Page
* Login and Register

### *Home Page*

The home page is divided into four  different sections where the user can have a general overview of different cryptocurrencies and news. 
In sections 1 and 3 we find two different carousels, displaying 3 different news each, comprised of their title, a picture, a small summary, and a link where to find the source of the article, where the user can go to if interested to read more about the argument. The articles have been sourced using fetch API requests. In the second section, we can see a Table called Top Cryptocurrencies, that fades in through a CSS feature. The Table shows the current price of the top cryptocurrencies. In the last section we find instead 4 graphs, that slide in from the left side, the ones located on the left and from the right side the ones located to the right, feature implemented once again with CSS. 

For the home page the files that run it are:

* index.html (where all the HTML mark up is located)
* index.js (where the fetch functions for carousels and diagrams are)
* style.css (where css script is located)


### *Articles*

The Articles page is a page where inside a window the user can scroll through 50 different articles, regarding cryptocurrencies, dividend in pages of up to 11 articles and managed by two buttons below the window, respectively Previous and Next. For this page, I have used a fetch API javascript function and also a pagination written in Javascript. 

For the Articles page the files that run it are:

* articles.html (where all the HTML mark up is located for the page)
* articles.js (where the fetch functions for the articles and the functions for the pagination connected to the next and previous buttons  are located)
* style.css (where css script is located)

### *Cryptoperformance*

The cryptoperformances page initially is simply the displaying of a search bar, designed in Javascript to be responsive to typing, and searching through a pre arrange list of cryptocurrencies, connected to a fetch API function. When typing is detected in the search bar, a fetch call is made, with the content of a list object containing the names of the cryptocurrencies. 
The process then displays the Names of the cryptocurrencies, that feature links to a single page with more details, and with a graph of the current daily oscillation of the currency. 

For the Cryptoperformance page the files that run it are:

* crptoperf.html (where all the HTML mark up is located)
* crptoperf.js (where the fetch functions for the graphs and the function for the search input are located)
* style.css (where css script is located)

### *BTC Blockchain*

This page is dedicated to simply displaying useful data regarding the condition of the Blockchain connected to Bitcoin. 
This page uses a Fetch API to keep the information updated and has different CSS features for a clearer visualization of this data. 

For the BCT Blockchain page the files that run it are:

* blockchain.html (where all the HTML mark up is located)
* blockchain.js (where the fetch functions for the data regarding blockchain are located)
* style.css (where css script is located)

### *Single Crypto Page*

This page is a page dedicated to every single cryptocurrency registered on the website. Here the user can visualize a series of key information regarding the cryptocurrencies, sourced with different APIs all in Javascript. An additional feature of this page, if the user is logged into the website, is that you can add the cryptocurrency you are observing to your own cryptocurrency watchlist, through a plus button located on this page. 

For the Single Crypto page the files that run it are:

* singlecrypto.html (where all the HTML mark up is located)
* singlecrypto.js (where the fetch functions for the details of the single crypto, the functions to fetch the data for the two graphs, the functions to fetch for the data for the tables and the function to save into the users profile the single crypto of the page are located)
* style.css (where css script is located)

### *Profile Page*

This page is the page where the user can visualize his selected cryptocurrencies to follow. They are displayed through both the use of the fetching from the website own API and the details within the crypto elements through the fetching from the external API. 
From Each cryptocurrency displayed the user can not only view some of its details but can also decide to remove the crypto from the list or to be redirected to the single crypto page to learn more about the cryptocurrency. 
The page also presents a form where the user can update his own profile picture.

* profile.html (where all the HTML mark up is located)
* prof.js (where the fetch functions for the details of the single crypto and the functions to fetch the list of cryptos are located)
* style.css (where css script is located)


### *Log in and Register*

These pages are used for the Log in of an already registered user and for the Registering of a new user. 

* login.html (where all the HTML mark up is located)
* register.html (where all the HTML mark up is located)
* style.css (where css script is located)

## - THE BACK END -

The back end that I have organized for this project on top of the already set Django framework base, has been incorporated in the following files. 

* views.py
* models.py
* ProjectCapstone/urls.py
* PlanetCrypton/urls.py
* forms.py
* tests.py

### *Views.py*

In the views.py file, I have created 13 functions. 

   **Index Function - Articles Function - Cryptoperf Function - Blockchain Function**

The *index* function, the *articles* function, the *cryptoperf* function, the *blockchain* function, are simple functions with an if statement, to either render the html template as it is or by passing to it the profile picture if the user is authenticated. 

   **Single Crypto Function**

The *singlecrypto* function is similar to the first four functions I have listed with the exception that along with the request it passes a slug, that allows through the template and through the javascript file, to render the components of the page and that happens thanks to an if statement whether the user is logged in or not. 

**Login View Function**

The *login_view* function works with a POST request, getting the username and password inputs and authenticating whether the user is registered. If so an If statement is used either to render the index page or to render the same login page, with a message. If the request is not equal to a POST request, then the same login page is simply rendered. 

**Register Function**

The *register* function works with a POST request as the login_view function but after taking the inputs of username, email, and password, and with another if statements making sure that the password is correct by inputting in twice also passes on to try to create a user, to check against an integrity error, in case the user is using an already used email address. If the procedure is cleared then the index page is rendered. 

**Logout View Function**

The *logout_view* function is a straightforward request for an Http Response to redirect to the index page. 

**Profile Function**

The *profile* function sends a request and also uses a slug, to be able to source different data from the models. An empty list and a for loop to place elements in it are used to source the cryptocurrencies that a user has saved. At the end of the function all the data is passed through the context of the rendering to the profile.html. This function has also two decorators: a login_required decorator, to make sure only a logged user can access his own profile page and a csrf_exempt decorator to facilitate the form that is present in it to facilitate operations with forms to pass information. 

**Add Crypto Function**

The *addcrypto* function is based on a POST request, and passes a crypto slug. Initially it sources information from the models, and then gathers a list of crypto with a for statements and uses an if statements to make sure that the specific crypto has not already been registered with the user, and if it has not and therefore is not present in the list, the if statements then follow through the creation of a FollowedCrypto object. 
It then returns the data sourced at the beginning of the function as context while rendering to the profile.html. 
If the cryptocurrency is found to be in the list through the if statement at therefore already between the ones saved by the user then the user is simply rendered the profile page, as it is already set.

**Delete Crypto Function**

The *deletecrypto* function follows the same setup as the addcrypto function with the exception of the if statement to check within the list. In this function instead of checking wheter the cryptocurrency is not in the list with the if statement it is checked if it is in the list, so that if that's the case, the object model FollowedCryptos that contains the name of the cryptocurrency in combination with the username, will be deleted. This function too presents a csrf_exempt decorator 

**Followed Cryptos Function**

The *followedcryptos* function is the function that allows the creation of an API route, by returning a JsonResponse, containing all the FollowedCrypto objects of the specific user. Making sure that the user is therefore present for the JasonResponse to be produced is also the decorator @login_required.

**Add Image Function**

The *add_image* function is the function that allows the user from the profile page, to update his profile picture. The function redirects to the Profile template, whether the user decides to update the profile picture, deleting his own already existing, or if the user decides to update the profile picture in the event that it previously didn't have any.


### *Models.py*

The models.py file contains 3 models:

1. User
  
The User Model is an AbstractUser model, that consists in a pre-set Django model with object characteristics such as "username", "email", "password", "fist_name", "last_name" and so on. This model is used in this website to register data for the Users

2. ProfilePic

This ProfilePic model is a simple model with only two set parameters. A user parameter, that consists of a Foreign key, that calls for a User object, and a profile_pic parameter that consists in an ImageField to store a Profile Picture for the user. 
This model is also serialised, simply with the user, since every user can have only one profile pic associated with it. 

3. FollowedCrypto
   
The Followedcrypto model is the model used to record cryptocurrencies for each user. It is composed of a user parameter to reference the User through a Foreignkey, and a cryptocurrency parameter to specify the followed currency. This model is constantly changing according to the cryptocurrencies that the user decides to add or delete from his list of followed cryptos. This model is serialized with the two parameters and also its id integer since a single user can follow more cryptocurrencies.

### *ProjectCapstone/urls.py*
   
   In this file are included two main urls, one that connects to all of the PlanetCrypton App urls and the other that allows for the Django admin/ interface. To these urls, it's added a static parameter to source Media resources ( as pictures ).

### *PlanetCrypton/urls.py*

   In this file all the urls for the Planet crypto app are registered and separated by a comment there is also the single url route used for the API.  

### *Forms.py*

   In this file is located the Model Form that allows the update of the ProfilePic model. It is a Form of class Meta that uses only the profile_pic field to update the model, since the user field is set directly into the function in the view.py file. 


### *Tests.py*

   In the test.py file is located unit testing to test the basic functionalities of all of the urls, the models and two tests respectively for the User creation and the password.
   For the urls the TestUrls class was created and includes a simple test to assert that each url is resolved and SimpleTestCase is used. For the Models a TestModels Class is created and TestCase is used. Sample users , sample FollowedCrypto objects and ProfilePic objects are created and passed to test that the creation would happen successfully and so the tests all pass, for both the test_followed_crypto and test_profile_pic. 
   For the User and Password a single class called TestUserAndPassword with TestCase, that contains one test for the User where a user is created and with a counter tested his presence, and the other test for the password, where a user is created and the password is checked to be the same as set during its creation. 



## **NOTE**:

When visualising the website, there could be some times during the day in which the APIs are not running. This is **NOT** because of the website but because the API source is not running 24h a day. Make sure you are running the website when is all functioning. 















