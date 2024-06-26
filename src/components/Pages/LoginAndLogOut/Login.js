import React from "react";
import * as Components from "./Components";
import "./login.css";
import { GobalStorage } from "../../../Context/GobalStorage";

function LoginLogout() {
  const { state, dispatch } = GobalStorage();

  const UserCreatNewAcct = (e, v) => {
    e.preventDefault();
    const UserSignup = document.getElementById("UserSignUp").value;
    const EmailSignup = document.getElementById("EmailSignUp").value;
    const PasswordSignup = document.getElementById("PasswordSignUp").value;

    console.log(
      "user :",
      UserSignup,
      " Email : ",
      EmailSignup,
      " Password: ",
      PasswordSignup
    );

    fetch("http://localhost:3000/vendorusers/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: EmailSignup,
        name: UserSignup,
        password: PasswordSignup,
        firebaseToken: localStorage.getItem("firebaseToken"),
      }),
    })
      .catch((err) => console.log("Error", err))
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "login",
          id: json.user._id,
          token: json.token,
        });
      });
  };
  console.log(state);

  const UserSignIn = (e, v) => {
    e.preventDefault();
    const EmailSignin = document.getElementById("EmailSignin").value;
    const PasswordSignin = document.getElementById("PasswordSignin").value;
    fetch("http://localhost:3000/vendorusers/login", {
      timeout: 5,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: EmailSignin,
        password: PasswordSignin,
        firebaseToken: localStorage.getItem("firebaseToken"),
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({ type: "login", id: json.user._id, token: json.token });
      });
  };

  const [signIn, toggle] = React.useState(true);

  return (
    <div className="signinupWrapper">
      <Components.Container
        className="SigninupContainer"
        style={{ width: "100%" }}
      >
        <Components.SignUpContainer signinIn={signIn}>
          <Components.Form onSubmit={UserCreatNewAcct}>
            <Components.Title>Create Account</Components.Title>
            <Components.Input
              style={{ width: "10rem" }}
              type="text"
              placeholder="Name"
              id="UserSignUp"
            />
            <Components.Input
              style={{ width: "10rem" }}
              type="email"
              placeholder="Email"
              id="EmailSignUp"
            />
            <Components.Input
              style={{ width: "10rem" }}
              type="password"
              placeholder="Password"
              id="PasswordSignUp"
            />
            <Components.Button>Sign Up</Components.Button>
          </Components.Form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <Components.Form onSubmit={UserSignIn}>
            <Components.Title>Sign in</Components.Title>
            <Components.Input
              style={{ width: "10rem" }}
              type="email"
              placeholder="Email"
              id="EmailSignin"
            />
            <Components.Input
              style={{ width: "10rem" }}
              type="password"
              placeholder="Password"
              id="PasswordSignin"
            />
            <Components.Anchor href="#">
              Forgot your password?
            </Components.Anchor>
            <Components.Button>Sigin In</Components.Button>
          </Components.Form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome</Components.Title>
              <Components.Paragraph>
                To keep connected with us please Signup with your personal info
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Hello, Friend!</Components.Title>
              <Components.Paragraph>
                Enter Your personal details and start journey with us
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sigin Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  );
}

export default LoginLogout;
