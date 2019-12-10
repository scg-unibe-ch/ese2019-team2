# Documentation

This platform `Event4you` is for event organisers on one end and event service providers on the other. It is a web-based app designed to run on any device.

Our goal is to provide our registered users an interactive interface where they can either login as an event organiser(USER) or as a service provider.

Event organisers will be able to look for the required services for their upcoming events. You can compare prices in the nearby and book the correct service for their events.

## Compatibility

This web-application is built with Ionic and Angular. It is working on most new web-browser and also on mobile-devices with iOS and Android.

## Installation

Before you can start the web-based app you have to install `node.js`.

### `node.js`

The newest Version is ready to be downloaded at: https://nodejs.org/en/download/

For the installation follow the instructions on the site or from the installer.

After installing node.js  and before running the script to this application you have to install the different modules used. Open your desired Terminal and go to the directory, where you have saved the application. Now you will have to enter the frontend and backend folder, each individually and enter:

### `npm -g install`

Wait for the terminal to load the different modules.

### Backend

#### The Database

This server uses a MongoDB database. 

to run the Database: Open a Terminal in the backend folder and run `npm run tsc -- --watch`.

#### npm run tsc -- -- watch

This will automatically recompile the TypeScript code to Javascript

Open an another Terminal also in the backend folder and install nodemon.

#### npm install -g nodemon

if nodemon is installed run the express application.

#### nodemon build/server.js

This will automatically restart the Node application everytime the JavaSCript have changed on the disk.

## Running the application

### Frontend

After the modules have loaded you can start the application in the frontend by opening a terminal in the frontend folder and running:

#### `ionic serve` or `ionic serve --lab`

This Runs the app in the development mode.<br>

The code will be compiled. After it is compiled the standard browser opens a new page on http://localhost:8100. If this does not happen automatically you can enter the adress in to the browser manually and you can view the application in the browser.

With the `--lab` extension you get to a mobile platform view like iOS and Android.

The page will reload if you make edits.

You can exit the application on Windows by pressing Ctrl + C in the Terminal, where the `ionic serve` or `ionic serve --lab` is running.

Alternatively, you can run just

#### `ng serve`

for a dev server. Navigate to http://localhost:4200/.

### Backend



## Further available scripts

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `ionic build`

The build artefacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. This `dist` folder is used to put on production server. More information [here](https://ionicframework.com/docs/cli/commands/build).


## Usage

Once the different modules is installed and you have managed to start the application there are many different things you can do.

### Landing page/ Explore-page

The landing-page of the web application is also the Explore-page. Here you will find the search bar where you can look for services you need in your nearby by chosing location or look for by username, service names, categories, sub-categories or descriptions. Underneath there are service categories. Where you can explore sub-categories by clicking or opening the selected categories on the landing page. 

The login and registration panels can be found in the menu, which can be found in the upper left corner on the toolbar or on the right corner also on the toolbar, you will find `LOG IN`and `REGISTER`.

Once that has been done the profile page will pop off in the menu list and the avatar icon will show up on the upper right corner instead of `LOG IN`and `REGISTER`. The explore-page is the standard if yo want to find any services.

The services can be searched with our search bar which lets you enter different search terms.

Once you have found the service you are looking for, simply click on the card and get all the info you need.

### Service cards

On the landing page underneath the search bar there are categorozied service cards. These cards hold the information about the services, such as the title, a description, prices, etc..

You can click the cards and you will receive to the selected categorie page, where you find the services with price, descriptions, etc..

### Creating a service

You can go to the landing page and simply click on the `CREATE SERVICE`button at the end of the page.
You will be prompted to fill out the form, with a bit more information about your event.

The created events can be found in the menu under `My Services`.

### Menu

The Menu is a small button in the right upper corner, which when clicked shows you a list of the different pages(if not logged in):
- Home
- Log in
- Register

It shows different pages on the list(if logged in as user):
- Home
- Profile
- Log out

It shows different pages on the list(if logged in as service provider):
- Home
- Profile
- My Services
- Log out

Also if you want to log out the option can be found in the menu list.

### Profile

You can find the way to your profile in the menu, or by clicking on the small avatar right on the toolbar.

On your profile page you will find a quick overview about you and if service provider also your services. You can also edit your User Information like your first and last name and your email.

## Authors

Created by:

Joshua Felder
Aaron Saegesser
Dosif Mahilvathanan

