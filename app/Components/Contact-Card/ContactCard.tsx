import React from "react";
import "./ContactCard.css";

const ContactCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="contact-us-card">
      <div className="contact-us-card-text-conetent">{children}</div>
    </div>
  );
};

export default ContactCard;
