import jwt from 'jsonwebtoken';


export const generateToken = ({ name, email }) => {
  const token = {};

  token.accessToken = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    username,
    email,
  }, process.env.TOKEN_SECRET);

  return token;
};

export const verifyUserWithJWT = (req, res, next) => {
  try {
    jwt.verify(req.headers.authorization.slice(7), process.env.TOKEN_SECRET);
    console.log('token verified');
    next();
  } catch (e) {
    console.log('token not verified', e);
    next(e);
  }
};
