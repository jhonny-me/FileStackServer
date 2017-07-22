'use strict';

module.exports = function(Container) {
  Container.getFilesByPage = function (container, limit, pageNumber, cb) {
    Container.getFiles(container, function (err, result) {
      if (err != null) { return cb(err) }
      const array = result.slice(limit*pageNumber, limit*(pageNumber+1));
      cb(null, {'data': array, 'count': result.length});
    })
  };

  Container.remoteMethod('getFilesByPage', {
    http: {path: '/getFilesByPage', verb: 'post'},
    accepts: [
      {arg: 'container', type: "string"},
      {arg: 'limit', type: "number"},
      {arg: 'pageNumber', type: "number"}
    ],
    returns: [
      {arg: 'data', type: "array"},
      {arg: 'count', type: "number"}
    ]
  })
};
