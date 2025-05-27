"use client";

import Button from "@/components/ui/Button";

const ContactUsButton = () => {
  const scrollToContactUsForm = () => {
    const element = document.getElementById("contact-us");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <Button onClick={scrollToContactUsForm} className="mt-6 mx-auto md:mx-0">
      Contact Us
    </Button>
  );
};

export default ContactUsButton;
