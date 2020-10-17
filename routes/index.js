require('dotenv').config();
const path = require('path');
const fs = require('fs');

/**
 * Render Config
 * @param req
 * @param res
 */
exports.config = (req, res) => {
  const domain = process.env.DOMAIN || 'localhost:3000';
  const file = path.join(__dirname, '..', 'public', 'config-template.json');

  const content = fs.readFileSync(file, 'utf-8');
  res.send(content.replace(/\$DOMAIN/g, domain));
};

/**
 * Render UI
 * @param req
 * @param res
 */
exports.ui = (req, res) => {
  res.render('index', {
    title: 'Custom Activity',
    dropdownOptions: [
      {
        name: 'Journey Entry',
        value: 'journeyEntry',
      },
      {
        name: 'Journey Exit',
        value: 'journeyExit',
      },
    ],
  });
};
