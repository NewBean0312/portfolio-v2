import React from "react";
import ContactHeader from "./ContactHeader";
import ContactArticle from "./ContactArticle";

const ContactSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center" id="container">
      <ContactHeader />
      <ContactArticle />
    </section>
  );
};

export default ContactSection;
