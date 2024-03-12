# CS 35L Web App: LingLogic

an interactive web application for International Phonetic Alphabet (IPA) chart specifically about General American English

Tech Stack:
* Frontend: ReactJS
* Server Tier: Express.js and Node.js
* Database Tier: Mongo DB

## Environment Set Up:
**For Frontend:**
Follow this [guide](https://kinsta.com/knowledgebase/install-react/) to install ReactJS

**For Backend:**
Install [MongoDB](https://www.mongodb.com/basics/get-started)

Create ```.env``` backend file with the following contents: 

```
MONGODB_URI=mongodb+srv://cs35lproject:cs35lpr0ject@cluster0.smeevtg.mongodb.net/
GOOGLE_CLIENT_ID=144103853857-u33n8nhgbc2mkahiu0gjll76luks4ii7.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_CALLBACK_URL=http://localhost:3035/google/callback
```

## LingGo App:
**Sign-In Page:**
This is the first page users will see. Users have the option to sign-in to an existing account or create a new account. 

Alternatively, users may choose to not create account and utilized the app without saving any data for their current session.

**Bio Page:**
Once users create an account they will be asked to complete their profile on the Bio Page.

**Authentication Page:**
If users are logging into an existing account this page will sent an authentication code to verify their email.

**IPA Chart:**
The interactive IPA chart includes two tables. Both tables are interactive. Users may hover and click on a symbol. Once a symbol is clicked, a corresponding sound will automatically play.

**Features:**
1. _Audio:_ User is able to hear audio sample of the IPA symbol

2. _Notes:_ Users are able to write and save notes to their account

3. _Search:_ Users can use the search feature to look for text in the notes they have saved

4. 

5. _Navigation Bar:_ At the top of the page there is a navigation bar that can take you back to the sign up, login, about us, or contact page.


## BackEnd Endpoints

### Get* /dashboard

Function:
- Renders the dashboard page with user-specific notes.
- Retrieves notes sorted by the most recent update.

Response:
- Renders the dashboard/index view with paginated notes.


### Get* /dashboard/item/:id

Function:
- Renders a specific note for viewing.

Response:
- Renders the dashboard/view-note view with the requested note.


### Put* /dashboard/item/:id

Function:
- Updates a specific note.

Response:
- Redirects to the dashboard page after updating the note.


### Delete* /dashboard/item-delete/:id

Function:
- Deletes a specific note.

Response:
- Redirects to the dashboard page after deleting the note.


### Get* /dashboard/add

Function:
- Renders the page to add a new note.

Response:
- Renders the dashboard/add view.


### Post* /dashboard/add

Function:
- Submits a new note.

Response:
- Redirects to the dashboard page after adding the note.


### Get* /dashboard/search

Function:
- Renders the search page to search for notes.

Response:
- Renders the dashboard/search view.



### Post* /dashboard/search

Function:
- Submits a search query for notes based on title or body.

Response:
- Renders the dashboard/search view with search results.


## Authentiction Routes

## App Routes


