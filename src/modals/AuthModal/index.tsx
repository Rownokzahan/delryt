"use client";

import Modal from "../Modal";
import LoginForm from "@/forms/auth/LoginForm";
import SignupForm from "@/forms/auth/SignupForm";
import ForgotPasswordForm from "@/forms/auth/ForgotPasswordForm";
import { useState } from "react";
import ModalHeader from "./ModalHeader";
import SocialLogin from "./SocialLogin";

export type ViewState = "login" | "signup" | "forgotPassword";

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
  forgotPassword: {
    Form: ForgotPasswordForm,
    title: "Forgot Password?",
    subtitle: "Enter your email to reset your password.",
    viewSwitcher: {
      message: "Remember your password?",
      linkText: "Log In",
      targetView: "login",
    },
  },
};

const AuthModal = () => {
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
    <Modal
      modalId="authModal"
      fullHeightOnSmall={true}
      containerClasses="rounded-xl p-1 z-50"
    >
      <ModalHeader title={title} subtitle={subtitle} />

      <div className="mt-6 px-6">
        <Form handleViewSwitch={handleViewSwitch} />
      </div>

      {currentView !== "forgotPassword" && <SocialLogin />}

      <p className="my-8 mx-6 text-center text-sm">
        {message}{" "}
        <button
          onClick={() => setCurrentView(targetView)}
          className="text-primary underline underline-offset-2"
        >
          {linkText}
        </button>
      </p>
    </Modal>
  );
};

export default AuthModal;
