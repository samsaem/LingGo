const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middleware/checkAuth');
const dashboardController = require('../controllers/dashboardController');

/*  *** DASHBOAD ROUTES ***
    ***    LOGGED IN    ***
*/
router.get('/dashboard', isLoggedIn, dashboardController.dashboard);
router.get('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardViewNote);
router.put('/dashboard/item/:id', isLoggedIn, dashboardController.dashboardUpdateNote);
router.delete('/dashboard/item-delete/:id', isLoggedIn, dashboardController.dashboardDeleteNote);
router.get('/dashboard/add', isLoggedIn, dashboardController.dashboardAddNote);
router.post('/dashboard/add', isLoggedIn, dashboardController.dashboardAddNoteSubmit);
router.get('/dashboard/search', isLoggedIn, dashboardController.dashboardSearch);
router.post('/dashboard/search', isLoggedIn, dashboardController.dashboardSearchSubmit);

router.get('/dashboard/quiz', isLoggedIn, dashboardController.dashboardQuiz);
router.get('/dashboard/quizvowels', isLoggedIn, dashboardController.dashboardQuizVowels);
router.get('/dashboard/quizconsonants', isLoggedIn, dashboardController.dashboardQuizConsonants);



router.get('/dashboard/ipachart', isLoggedIn, dashboardController.dashboardIPAChart);
router.get('/dashboard/ipakeyboard', isLoggedIn, dashboardController.dashboardIPAkeyboard);





module.exports = router;

