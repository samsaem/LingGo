# LingGo <img src="/public/css/icons/wug.png" width=30px>

LingGo is an interactive study tool to learn the International Phonetic Alphabet (IPA) chart specifically about General American English.

### What is IPA?
> The International Phonetic Alphabet (IPA) serves as a standardized system for representing the sounds of spoken language in a consistent and universally understandable manner. It enables linguists, language learners, and educators to accurately transcribe and describe the pronunciation of words across different languages. IPA symbols represent specific speech sounds, allowing for precise communication about pronunciation details that may not be accurately conveyed by traditional spelling systems

To access the full features of LingGo, Users are welcome to create an account with LingGo!

# Features:

**IPA Chart:**
The interactive IPA chart includes two tables (consonants and vowels). Both tables are interactive. Users may hover and click on a symbol. Once a symbol is clicked, a corresponding sound will automatically play.

**Log-in Page:**
Users can create an account and login with LingGo through their gmail account to utilize all features from LingGo.

**+ Additional Features when Users logged in:**

* _Notes:_ Users will have the ability to *write, edit, save, and delete* notes from their account.

* _Search:_ Users can use the *search bar* at top of the web page to look for previous notes they have saved

* _IPA Keyboard:_ Since IPA symbols are special characters that aren't easily accessible through computer's keyboard, users can use this feature to get the symbol by simply clicking on the symbol and 

* _Quiz:_ LingGo is testing out a multiple choice quiz page and users can quiz their knowledge in consonants and vowels.

## Tech Stack:

* HTML/CSS <img src="https://logowik.com/content/uploads/images/css3-html51661.jpg" alt="javascript" width="90px">
* Javascript <img src="https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png" alt="javascript" width="30px">
* Node.js <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="node.js" width="30px">
* Express.js <img src="https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png" alt="Express.js" height="40px">
* MongoDB <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/MongoDB_Logo.png/1598px-MongoDB_Logo.png?20180423174357" alt="MongoDB" height="30px">



## Environment Set Up:

To launch LingGo on your local machine, please download or clone [this repository](git@github.com:samsaem/UCLA-CS-35L.git) and follow the instructions below.

**Set up dependencies**

To setup the dependencies for our application, run these commands within *UCLA-CS-35L*:

```
npm install
npm init -y
npm i connect-mongo dotenv ejs express express-ejs-layouts express-session method-override mongoose passport passport-google-oauth20
npm i nodemon --save-dev
```

**Secrets**


Create ```.env``` file within *UCLA-CS-35L* with the following contents: 

```
MONGODB_URI=mongodb+srv://cs35lproject:cs35lpr0ject@cluster0.smeevtg.mongodb.net/
GOOGLE_CLIENT_ID=144103853857-u33n8nhgbc2mkahiu0gjll76luks4ii7.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
GOOGLE_CALLBACK_URL=http://localhost:3035/google/callback
```

**Running**

    npm start

The web application will be available on http://localhost:3035 and terminal will return a "App running on port 3035" message.

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


### Get* /dashboard/quiz

Function:
- Renders the quiz page to get routes to take Vowels Quiz or Consonants Quiz.

Response:
- Renders the dashboard/quiz view.

### Get* /dashboard/quizvowels

Function:
- Renders the page to take vowels quiz.

Response:
- Renders the dashboard/quizvowels view.

### Get* /dashboard/quizconsonants

Function:
- Renders the page to take consonants quiz.

Response:
- Renders the dashboard/quizconsonants view.

### Get* /dashboard/ipachart

Function:
- Renders the page that displays IPA chart.

Response:
- Renders the dashboard/ipachart view.

### Get* /dashboard/ipakeyboard

Function:
- Renders the page to access IPA symbols keyboard.

Response:
- Renders the dashboard/ipakeyboard view.



## Resources

Note App Tutorial: https://www.youtube.com/watch?v=BDo1lgaZuII&t=9167s

Account authentication via PassportJS: https://www.passportjs.org/packages/passport-google-oauth20/

ChatGPT prompt: "Create a one page multiple choice quiz that displays result at the end with javascript"