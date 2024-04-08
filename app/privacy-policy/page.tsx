import React from "react";
import RoutePageHeader from "../Components/RoutePageHeader/RoutePageHeader";

const data = [
  {
    title: "How We Use Your Information",
    items: [
      {
        name: "Personalization",
        description:
          "To personalise your Viby experience and provide content and features that align with your interests.",
      },
      {
        name: "Communication",
        description:
          "To send you updates, newsletters, and important announcements related to Viby.",
      },
      {
        name: "Improvement of Services",
        description:
          "Analysing user behaviour helps us enhance and optimise our services continually.",
      },
    ],
  },
  {
    title: "Information Sharing",
    items: [
      {
        name: "With Your Consent",
        description:
          "We share information when you give us consent or direct us to do so.",
      },
      {
        name: "Legal Requirements",
        description:
          "We may disclose information in response to a legal request if we believe it is necessary to comply with applicable laws.",
      },
    ],
  },
  {
    title: "Security Measures",
    items: [
      {
        name: "Data Security",
        description:
          "We employ robust security measures to protect your data from unauthorised access, disclosure, alteration, and destruction.",
      },
    ],
  },
  {
    title: "Your Choices",
    items: [
      {
        name: "Account Settings",
        description:
          "You can manage your privacy preferences and account settings within the Viby app.",
      },
      {
        name: "Deactivation",
        description:
          "If you no longer wish to use Viby, you can deactivate your account at any time.",
      },
    ],
  },
];

const page = () => {
  return (
    <section className="main-gradient flex flex-col items-center gap-10 ">
      <RoutePageHeader title="Privacy Policy" link="/privacy-policy" />

      <div className="flex flex-col flex-1 items-center gap-8  route-page-width">
        <h4 className="text-xl  ">
          At Viby, we prioritise the privacy and security of our users. This
          Privacy Policy outlines the types of personal information we collect,
          how we use it, and the choices you have concerning your data. By using
          Viby, you consent to the practices described in this policy.
        </h4>
        {data.map((e, index: number) => {
          return (
            <div
              style={{ width: "100%" }}
              className=" flex flex-col gap-5 max-width custom-card "
              key={index}
            >
              <h1 className="text-2xl font-semibold mb-4 text-center">
                {e.title}
              </h1>
              {e.items?.map((item, number: number) => (
                <div key={number} className="flex flex-col gap-1">
                  <h4 className="text-xl font-medium ">{item.name}</h4>
                  <h4 className="text-md ">{item.description}</h4>
                </div>
              ))}
            </div>
          );
        })}
        <h4 className="text-xl  ">
          This Privacy Policy is effective as of [Date], and any updates will be
          posted on this page.
        </h4>
      </div>
    </section>
  );
};

export default page;
