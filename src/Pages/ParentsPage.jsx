import React from "react";
import Page1 from "./Page1";

function ParentsPage() {
  const data = {
    title: "My Resume Site",
    text: "I have built my resume from Overleaf, it is an awesome platform that provides you with templates. We can use them accordingly.",
    socialButtons: [
      {
        icon: "facebook",
        className: "social-button1",
      },
      {
        icon: "twitter",
        className: "social-button2",
      },
      {
        icon: "linkedin",
        className: "social-button3",
      },
    ],
  };

  return (
    <div>
      <Page1 data={data} />
    </div>
  );
}

export default ParentsPage;
