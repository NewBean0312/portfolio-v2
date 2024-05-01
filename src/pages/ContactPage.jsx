import React from "react";
import ContactSection from "../components/contact/ContactSection";
import ContactHeader from "../components/contact/ContactHeader";

const ContactPage = () => {
  return (
    <main className="flex flex-col lg:flex-row justify-center items-center" id="container">
      <ContactHeader />
      <ContactSection />
    </main>
  );
};

export default ContactPage;
