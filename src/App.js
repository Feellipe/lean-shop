import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component.js";
import Header from "./components/header/header.component.js";
import { auth, createUserProfileDoc } from "./firebase/firebase.utils";
import {connect} from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDoc(userAuth);
        //the userRef is the return of the user we just created in the firestore

        // a documentSnapshot is the return of a documentRef
        //this is setting the user after it got the Doc of the user in the firestore 
        userRef.onSnapshot(snapShot => {
          setCurrentUser({ 
            id: snapShot.id,
            ...snapShot.data()
         }); 
        });
      }

      //esse está setando o user que foi autenticado no firebase
      setCurrentUser( userAuth)      
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signIn" component={SignInSignUpPage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
// passamos a função quq seta o state no reducer com o valor do objeto que queremos alterar, nesse caso user é o objeto no rootReducer que é setado no componentDid Mount
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
