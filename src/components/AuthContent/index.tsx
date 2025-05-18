"use client";

import LoginForm from "@/forms/auth/LoginForm";
import SignupForm from "@/forms/auth/SignupForm";
import { useState } from "react";
import AuthViewHeader from "./AuthViewHeader";

export type ViewState = "login" | "signup";

interface ViewContent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Form: React.FC<any>;
  title: string;
  subtitle: string;
  viewSwitcher: {
    message: string;
    linkText: string;
    targetView: ViewState;
  };
}

const viewContents: Record<ViewState, ViewContent> = {
  login: {
    Form: LoginForm,
    title: "Welcome Back,",
    subtitle: "Please sign in to continue.",
    viewSwitcher: {
      message: "Don't have an account?",
      linkText: "Sign Up",
      targetView: "signup",
    },
  },
  signup: {
    Form: SignupForm,
    title: "Create an Account",
    subtitle: "Fill in the details to get started.",
    viewSwitcher: {
      message: "Already have an account?",
      linkText: "Log In",
      targetView: "login",
    },
  },
};

const AuthContent = () => {
  const [currentView, setCurrentView] = useState<ViewState>("login");

  const {
    Form,
    title,
    subtitle,
    viewSwitcher: { message, linkText, targetView },
  } = viewContents[currentView];

  const handleViewSwitch = (targetView: ViewState) => {
    setCurrentView(targetView);
  };

  return (
    <div>
      <AuthViewHeader title={title} subtitle={subtitle} />

      <div className="mt-6 px-6">
        <Form handleViewSwitch={handleViewSwitch} />
      </div>

      <p className="mb-8 mt-6 mx-6 text-center text-sm">
        {message}{" "}
        <button
          onClick={() => setCurrentView(targetView)}
          className="text-primary underline underline-offset-2"
        >
          {linkText}
        </button>
      </p>
    </div>
  );
};

export default AuthContent;
