const path = require('path');
const fs = require('fs');

/**
 * Render Config
 * @param req
 * @param res
 */
exports.config = (req, res) => {
  const domain = req.headers.host || req.headers.origin;
  const file = path.join(__dirname, '..', 'public', 'config-template.json');

  const configTemplate = fs.readFileSync(file, 'utf-8');
  const config = JSON.parse(configTemplate.replace(/\$DOMAIN/g, domain));
  res.json(config);
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
        name: 'Entered Journey',
        value: 'journeyEntered',
      },
      {
        name: 'Through Journey',
        value: 'journeyThrough',
      },
      {
        name: 'Exited Journey Exit',
        value: 'journeyExited',
      },
    ],
  });
};
