const Note = require('../models/Notes');
const mongoose = require('mongoose');


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
      layout: "../views/layouts/dashboard",
      current: page,
      pages: Math.ceil(count / perPage)
    });

} catch (error) {
  console.log(error);
}


}




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


exports.dashboardUpdateNote = async (req, res) => {
}