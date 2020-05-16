import React from "react";

import SignIn from "../../components/sign-in/sign-in.component.js";
import SignUp from "../../components/sign-up/sign-up.component";
import {SignInSingUpContainer} from './sign-in-sign-up.styles'
import { SignUpContanier } from "../../components/sign-up/sign-up.styles.js";

const SignInSignUpPage = () => (
  <SignUpContanier>
    <SignIn />
    <SignUp />
  </SignUpContanier>
);

export default SignInSignUpPage;
