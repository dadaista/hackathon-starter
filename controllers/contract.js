

/**
 * GET /contact
 * Contact form page.
 */
exports.getContract = (req, res) => {
  res.render('contract', {
    title: 'Contract'
  });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.postContract = (req, res) => {
  req.assert('premium', 'cannot be blank').notEmpty();
  req.assert('compensation', 'cannot be blank').notEmpty();
  req.assert('message', 'Message cannot be blank').notEmpty();

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/contract');
  }

  const contract = new Contract({
    type: req.body.type,
    premium: req.body.premium,
    compensation: req.body.compensation
  });

};
