const Note = require('../models/Notes');
const mongoose = require('mongoose');

/*  *** DASHBOAD CONTROLLERS ***
    ***    LOGGED IN    ***
*/

// Dashboard
exports.dashboard = async (req, res) => {

  const locals = {
      title: "Dashboard",
      description: "Interactive IPA web app!",
  }
  
  let perPage = 12;
  let page = req.query.page || 1;


  try {
 
    const notes = await Note.aggregate([
      { $sort: { updatedAt: -1 } },
      { $match: { user: new mongoose.Types.ObjectId(req.user.id) } },
      {
        $project: {
          title: { $substr: ["$title", 0, 30] },
          body: { $substr: ["$body", 0, 200] },
        },
      }
      ])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec(); 

    const count = await Note.countDocuments();

    res.render('dashboard/index', {
      userName: req.user.firstName,
      locals,
      notes,
      layout: "../views/layouts/dashboardNotes",
      current: page,
      pages: Math.ceil(count / perPage)
    });

} catch (error) {
  console.log(error);
}


};




/**
 * GET /
 * View Specific Note
 */

 exports.dashboardViewNote = async (req, res) => {
  const note = await Note.findById({ _id: req.params.id })
    .where({ user: req.user.id })
    .lean();

  if (note) {
    res.render("dashboard/view-note", {
      noteID: req.params.id,
      note,
      layout: "../views/layouts/dashboard",
    });
  } else {
    res.send("Something went wrong.");
  }
};

/**
 * PUT/
 * Update Specific Note
 */


exports.dashboardUpdateNote = async (req, res) => {
  try{
    await Note.findOneAndUpdate(
      { _id: req.params.id },
      { title: req.body.title, body: req.body.body,updatedAt: Date.now() }
    ).where({user: req.user.id } );
    res.redirect('/dashboard');


  }catch(error){
    console.log(error);
  }
};

/**
 * DELETE/
 * Delete Note
 */

exports.dashboardDeleteNote = async (req, res) =>{
  try{

    await Note.deleteOne({_id: req.params.id })
        .where({user: req.user.id});
    res.redirect('/dashboard');
    }catch(error){
    console.log(error);
  }
};

/**
 * GET/
 * Add Note
 */
exports.dashboardAddNote = async(req, res) =>{
  res.render('dashboard/add',{
    layout: "../views/layouts/dashboard",
  });
};

exports.dashboardAddNoteSubmit = async(req, res) =>{
  try{
    req.body.user =req.user.id;
    await Note.create(req.body);
    res.redirect('/dashboard');
  }catch(error){
    console.log(error);
  }
};

/**
 * GET/
 * Search
 */
exports.dashboardSearch = async (req, res)=>{
  try{
    res.render('dashboard/search',{
      searchResults: '',
      layout:'../views/layouts/dashboardNotes'

    })
  }catch (error){
  }
};
/**
 * POST/
 * Search for Notes
 */
exports.dashboardSearchSubmit = async (req, res) => {
  try{
    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChars = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "");

    const searchResults = await Note.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChars, ["i"]) }},
        { body: { $regex: new RegExp(searchNoSpecialChars, ["i"]) }},
    ],
  }).where({ user: req.user.id });

  res.render("dashboard/search",{
    searchResults,
    layout:"../views/layouts/dashboardNotes"
  });
  } catch(error){
    console.log(error);
  }
};


// AFTER logged in: Quiz
exports.dashboardQuiz = async (req, res) => {
  const locals = {
      title: "Quiz",
      description: "Let's test your knowledge!",
  }

  res.render('dashboard/quiz', {
    locals, 
    layout: '../views/layouts/dashboard'
  });
}

// AFTER logged in: Quiz/Vowels
exports.dashboardQuizVowels = async (req, res) => {
  const locals = {
      title: "Vowels Quiz",
      description: "Let's test your Vowels knowledge!",
  }

  res.render('dashboard/quizvowels', {
    locals, 
    layout: '../views/layouts/dashboard'
  });
}

// AFTER logged in: Quiz/Consonants
exports.dashboardQuizConsonants = async (req, res) => {
  const locals = {
      title: "Consonants Quiz",
      description: "Let's test your Consonants knowledge!",
  }

  res.render('dashboard/quizconsonants', {
    locals, 
    layout: '../views/layouts/dashboard'
  });
}

// AFTER logged in: IPA chart
exports.dashboardIPAChart = async (req, res) => {
  const locals = {
      title: "IPA",
      description: "IPA chart",
  }

  res.render('dashboard/ipachart', {
    locals, 
    layout: '../views/layouts/dashboard'
  });
}

// AFTER logged in: IPA keyboard
exports.dashboardIPAkeyboard = async (req, res) => {
  const locals = {
      title: "IPA keyboard",
      description: "IPA keyboard",
  }

  res.render('dashboard/ipakeyboard', {
    locals, 
    layout: '../views/layouts/dashboard'
  });
}