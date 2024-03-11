/*  *** MAIN PAGE CONTROLLERS ***
    ***  NOT LOGGED IN  ***
*/

// Homepage -- insert IPA chart here
exports.homepage = async (req, res) => {
    const locals = {
        title: "LingGo",
        description: "Interactive IPA web app!",
    }

    res.render('index', {
      locals, 
      layout: '../views/layouts/front-page'
    });
}

// About page 
exports.about = async (req, res) => {
    const locals = {
      title: "About - LingGo",
      description: "CS35L project",
    }
    res.render('about', locals);
  }
