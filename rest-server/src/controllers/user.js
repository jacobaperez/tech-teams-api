import { generateToken } from '../middleware/authentication';
import firebase, {auth} from ''


const authUser = (req, res) => {
  let name = req.body.name;
  let email = req.body.email;
  let password = req.body.password;
  firebase.auth.signInWithEmailAndPassword(email, password)
    .then( user => {
      console.log('User is signed in', user);
      // do something with email;

    })
    // firebase authenticate
      // if authenticated generate jwt,
    // else send back error bish...
  // catch (err) {
  //   console.log('Error', err);
  //   res.status(400).send(err);
  // }
}

exports.authUser = authUser;
