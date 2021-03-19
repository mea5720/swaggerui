'use strict';

var utils = require('../utils/writer.js');
var DevelopersAdmins = require('../service/DevelopersAdminsService');

module.exports.toc = function toc (req, res, next, section) {
  DevelopersAdmins.toc(section)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
