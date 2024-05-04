import React from "react";
import ContactHeader from "./ContactHeader";
import ContactArticle from "./ContactArticle";

const ContactSection = () => {
  return (
    <section
      className="section-container flex flex-col lg:flex-row justify-center items-center pb-24"
      id="ContactSection"
    >
      <ContactHeader />
      <ContactArticle />
    </section>
  );
};

export default ContactSection;
