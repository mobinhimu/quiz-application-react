import React from "react";
import Illustration from "../Illustration";
import Form from "../Form";

import styles from "../styles/Signup.module.css";
import TextInput from "../TextInput";
import CheckBox from "../CheckBox";
import Button from "../Button";
import Info from "../Info";
import IllustrationImage from "../../assets/images/signup.svg";

const SignUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration
          IllustrationImage={IllustrationImage}
          altText="Sign up illustration"
        />

        <Form className={`${styles.signup}`}>
          <TextInput type="text" placeholder="Enter Name" icon="person" />
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="password"
            placeholder="Confirm password"
            icon="lock_clock"
          />

          <CheckBox text="I agree to the Terms & Conditions" />

          <Button>
            <span>Submit now</span>
          </Button>
        </Form>
      </div>
      <Info text="Already have an account?" status="Login" />
    </>
  );
};

export default SignUp;
