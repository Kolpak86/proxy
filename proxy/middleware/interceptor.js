const interceptor = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', req.header('access-control-request-headers'));
  next();
};

module.exports = interceptor;