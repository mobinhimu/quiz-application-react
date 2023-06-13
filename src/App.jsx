import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/Layout";
import Result from "./components/pages/Result";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import LogIn from "./components/pages/LogIn";
import Quiz from "./components/pages/Quiz";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
