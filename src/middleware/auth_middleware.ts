var jwt = require("jsonwebtoken");

const auth = async (_req: any, _res: any, next: Function) => {
  if (_req.headers && _req.headers.get('authorization')) {
    try {
      const token = _req.headers.get('authorization');
      await jwt.verify(token, 'fake-jwt-secret');
      next();
    } catch (error) {
      _res.status(401).json({ error: 'Unauthorized' });
    }
  } else {
    _res.status(401).json({ error: 'headers error' });
  }
};

export = auth;
