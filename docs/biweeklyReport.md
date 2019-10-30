# Biweekly reports <!-- omit in toc -->

## First biweekly report

- [First biweekly report](#first-biweekly-report)
  - [Current Project Status](#current-project-status)
  - [Biggest challenges and risks](#biggest-challenges-and-risks)
  - [Learning outcomes](#learning-outcomes)
- [Second biweekly report](#second-biweekly-report)
  - [Current Project Status](#current-project-status-1)
    - [General](#general)
    - [Frontend](#frontend)
    - [Backend](#backend)
  - [Biggest challenges and risks](#biggest-challenges-and-risks-1)
  - [Learning outcomes](#learning-outcomes-1)
    - [Gerneral learning outcomes](#gerneral-learning-outcomes)
    - [Frontend learning outcomes](#frontend-learning-outcomes)
    - [Backend learning outcomes](#backend-learning-outcomes)

### Current Project Status

[GitHub Repo][github-link]

- First implementation of the login and register form in the front end.
- Two new pages (/login, /register) consisting of the required inputs
- Auth service, which will be responsible for all the authentication functions/ communicating with the backend /users/login or /users/register api.
- Started a Trello and a Slack Team for communication purposes

### Biggest challenges and risks

- Team communication was/is the biggest challenge. Tried to overcome it by using Trello, Slack and Whatsapp.
- Learning all the framework basics we need to know as we will split up the work later so everyone learns the basics. But that means everyone has to know the basics of the used technologies.
- Making a good plan. Even if we'd like to commit to specific features as late as possible and make the decision when we really need them (making it like agile methodology wants us to do it), we need to have the basic project requirements and featureset all the same.
- Risk: Splitting up the work too late would probably result in a heavy workload for few people and not be evenly distributed

### Learning outcomes

- Learned technologies
  - Learned Angular and Ionic and with it how the frontend could work
  - Learned nodejs and express to see the backend function
  - Saw the communication between the backend and front end with a REST api

- Learned that the team communication is a skill that we have to train a lot if we want the project to be successful

---

## Second biweekly report

October 30, 2019

### Current Project Status

[GitHub Repo][github-link]

#### General

- Split up frontend/backend tasks

#### Frontend

- Implemented hard-coded categories list on `home` page
  - lazy loaded images (currently random placeholder images)
- New page `profile`
  - Redirect to `login` page if not logged in
  - Make a backend request and display the response key-value pairs on this page as a list
- New page `admin`
  - Only visible in navigation menu if logged in and user role is admin (checked frontend-side)
  - Only activatable (navigatable to) if logged in and user role is admin (checked frontend-side)
- New page `categories`
  - Gets the category as a parameter in the url
  - Currently displays hardcoded placeholders for future subcategories, loaded from the backend.
  - Navigation between subcategories is possible, back-button to the parent-category from sub-category yet to be implemented

#### Backend

- Added database for services
- Added model for services
- Added get-function for categories
- Added get-function for details
- Added post-function for services

### Biggest challenges and risks

- Declaring deadlines somehow doesn't work in our group yet. This makes working on parts that depend on the other side (frontend-backend) unnerving. So this is a challenge that needs to be tackled.
- Need make tests and refactor code. Current approach is not the best, as we prioritze new features over maintaining the code.
  - To tackle this we need to make sure the work is evenly split up, so new features can be implemented, as well as code can be maintained.

### To be discussed

- Should we merge databases to work with relations?
- MongoDB Atlas as host for database? 
 
### Learning outcomes

#### Gerneral learning outcomes

None.

#### Frontend learning outcomes

- Learned authguards/roleguards to not let users activate pages they should not.
- Learned to handle navigation with parameters in the url and navigation with subcategories, which are loaded in run-time

#### Backend learning outcomes

- Learned how to implement images in database (in progress)

[github-link]:https://github.com/scg-unibe-ch/ese2019-team2
