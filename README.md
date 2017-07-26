-FRONT-END FOR BUDGET CALCULATOR-

Version 1.0
07-19-2017
--------
DESCRIPTION
--------
  This application is for a budget calculator. With this, users will be able to
sign-up, in, out, and change passwords. Once signed-in, users will be able
to input cashflow items by entering the name and value of the cashflow.
The API will store inputs associated with the user, and give them the option to
change or delete inputs. The net result of all inputs will be calculated for
the user on the front-end of the application.
--------

USER STORIES
--------
1. As a user, I want to use a budget calculator, so that I have a better
   understanding of my finances.

2. As a user, I want to be able to save my work, so that I can reference it at
   a later date.

3. As a user, I want to be able to change my password and sign out so that I can
   keep my personal information secure.
--------

ERD DIAGRAM
--------
http://imgur.com/IvpntHC
--------

WIREFRAME
--------
http://imgur.com/fb0UYx8
--------

TIMETABLE
--------
7-20-2017
--------
-Add basic html and css
-Use curl to test CRUD actions on users table
-Use curl to test CRUD actions on cashflows table
-Add ajax requests for users and necessary inputs and buttons on html
--------
7-21-2017
--------
-Add ajax requests for cashflows and any necessary html to make it work
-create handlebars logic
-create calculation logic
-implement all functionality
  -handlebars must show name and value of cashflow
  -successful post to cashflow must call index cashflow to show all cashflows
   that the user created.
  -index function must call handlebars to make rows appear on html
  -value of cashflow must be in an input field that can be adjusted at will
    -a button may be required to trigger the update, preferably not though
  -delete button must be generated with each cashflow generated on the html
   through handlebars
  -this delete button will trigger the onDeleteCashflow function
  -create logic to calculate the logic
    -I will most likely put logic inside the indexCashflowSuccess function so
     that I can target the array created and use .reduce to add them together
     and return the result.
--------
7-22-2017--7-23-2017
--------
-complete anything yet to be completed
-make page look nice and make code neat and DRY.

--------
Updates
--------

7-20-2017
--------
-curl has already been checked on back-end so continuing to curl here is
 redundent.
-when making a POST request on cashflows, error comes back '/cashflows not found'.
-When manually going to localhost:port/cashflows message access denied comes up
 because I have set the api up to not allow a get request of the entire
 cashflows index. I should be able to post to cashflows when signed in though.
 I believe the problem is with how I set my api up. I will go investigate the
 problem.
-Found the bug in the API. I forgot to delete code that I was testing in the
 routing file of the API and it was breaking the route. I also found
 that I was innappropriatley using .find instead of .all
 in the index method, in the CashflowsController class. Index requests should
 now be possible.
------

LINKS

WEBSITE
https://fcarrion001.github.io/front-end-budget-calculator/
BACK-END REPO
https://github.com/Fcarrion001/fullstack-budget-calculator
