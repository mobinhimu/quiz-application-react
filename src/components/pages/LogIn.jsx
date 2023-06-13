import React from "react";

import Illustration from "../Illustration";
import IllustrationImage from "../../assets/images/login.svg";
import Form from "../Form";
import styles from "../styles/Login.module.css";
import TextInput from "../TextInput";
import Button from "../Button";
import Info from "../Info";

const LogIn = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration
          IllustrationImage={IllustrationImage}
          altText="Log In Page"
        />
        <Form className={styles.login}>
          <TextInput
            type="email"
            placeholder="Enter Email"
            icon="alternate_email"
          />
          <TextInput type="password" placeholder="Enter Password" icon="lock" />

          <Button>Login</Button>
        </Form>
      </div>
      <Info text="Don't have an account?" status="Signup" />
    </>
  );
};

export default LogIn;
