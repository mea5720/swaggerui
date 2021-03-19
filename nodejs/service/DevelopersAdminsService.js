'use strict';


/**
 * returns training info
 * get table of contents
 *
 * section String  (optional)
 * returns List
 **/
exports.toc = function(section) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Widget Adapter",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "manufacturer" : {
    "phone" : "408-867-5309",
    "name" : "ACME Corporation",
    "homePage" : "https://www.acme-corp.com"
  }
}, {
  "releaseDate" : "2016-08-29T09:12:33.001Z",
  "name" : "Widget Adapter",
  "id" : "d290f1ee-6c54-4b01-90e6-d701748f0851",
  "manufacturer" : {
    "phone" : "408-867-5309",
    "name" : "ACME Corporation",
    "homePage" : "https://www.acme-corp.com"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

