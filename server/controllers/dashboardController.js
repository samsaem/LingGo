// Dashboard
exports.dashboard = async (req, res) => {
    const locals = {
        title: "Dashboard",
        description: "Interactive IPA web app!",
    }

    res.render('dashboard/index', {
      locals, 
      layout: '../views/layouts/dashboard'
    });
}