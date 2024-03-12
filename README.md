# CS 35L Web App: LingGo

an interactive study tool to learn the International Phonetic Alphabet (IPA) chart specifically about General American English

Tech Stack:
* HTML/CSS
* Express.js
* Node.js
* Mongo DB

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

## Running

    npm start

The backend will be available on http://localhost:3035 and terminal will returns a "App running on port 3035" message.

## LingGo App:
**Log-in Page:**
Users can create an account with LingGo through their gmail account to access additional features including adding, searching, editing, deleting notes and taking IPA quiz.

**IPA Chart:**
The interactive IPA chart includes two tables (consonants and vowels). Both tables are interactive. Users may hover and click on a symbol. Once a symbol is clicked, a corresponding sound will automatically play.

**Features when Users create an account with LingGo:**
1. _Audio:_ User is able to hear audio sample of the IPA symbol

2. _Navigation Bar:_ At the bottom right of the page there is a navigation bar that can take users to other features including note, quiz, IPA chart, IPA keyboard.

3. _Notes:_ Users are able to write, edit, save, and delete notes from their account

4. _Search:_ Users can use the `search` feature at top of the web page to look for previous notes they have saved

5. _IPA Keyboard:_ Since IPA symbols are special characters that aren't easily accessible through computer's keyboard, users can use this feature to get the `symbol` by click on the symbol and paste it.

6. _Quiz:_ LingGo is launching a quiz feature that is currently in a beta phase and users can test their knowledge with our multiple choice quiz features on a certain topics of the IPA chart.

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


