"use client";

import GlobalNavbar from "@/components/GlobalNavbar";
import Button from "@/components/ui/Button";
import { useEffect } from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  useEffect(() => {
    console.error("Error page:", error);
  }, [error]);

  return (
    <>
      <GlobalNavbar />

      <main className="min-h-screen-nav grid place-items-center">
        <div className="ui-container text-center">
          <h1 className="text-3xl font-bold">Something went wrong!</h1>

          <p className="mt-2 sm:text-lg text-uiBlack-light">
            An unexpected error occurred. Please try again.
          </p>

          <Button onClick={reset} className="mt-6 w-44 mx-auto">
            Try again
          </Button>
        </div>
      </main>
    </>
  );
};

export default ErrorPage;
