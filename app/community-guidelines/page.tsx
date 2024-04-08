import RoutePageHeader from "../Components/RoutePageHeader/RoutePageHeader";

const data = [
  {
    title: "Respect for Diversity",
    description:
      "Embrace diversity and treat everyone with respect. Discrimination, hate speech, or any form of harassment will not be tolerated.",
  },
  {
    title: "Authenticity Matters",
    description:
      "Create genuine connections by being authentic. Represent yourself truthfully and avoid impersonation or misleading behaviour.",
  },
  {
    title: "Positive Engagement",
    description:
      "Foster a positive atmosphere by encouraging and supporting fellow Viby users. Avoid negativity, bullying, or any harmful behaviour.",
  },
  {
    title: "Privacy and Consent",
    description:
      "Always seek consent before sharing personal information or media. Respect the privacy of others and refrain from any intrusive behaviour.",
  },
  {
    title: "User Safety",
    description:
      "Report any suspicious or concerning behaviour to Viby. Help us maintain a safe space for everyone.",
  },
  {
    title: "Compliance with Laws",
    description:
      "Adhere to local laws and regulations. Avoid engaging in any activities that are illegal or violate ethical standards.",
  },
  {
    title: "Responsible Content",
    description:
      "Ensure that the content you share is appropriate for a diverse audience. Refrain from posting offensive, explicit, or harmful material.",
  },
  {
    title: "Moderation Policies",
    description:
      "Our moderation team works to uphold these guidelines. Content that violates these guidelines may be removed, and accounts engaging in harmful behaviour may be subject to suspension.",
  },
  {
    title: "Child Safety",
    description:
      "Viby is intended for users aged 16 and above. Ensure compliance with child safety laws and report any inappropriate content involving minors.",
  },
  {
    title: "Feedback and Suggestions",
    description:
      "Share your feedback and suggestions with us. We value your input in shaping a positive and vibrant Viby community.",
  },
  {
    title: "Personal Safety",
    description:
      "Viby is not responsible for any mishap outside our application domain after sharing personal details with strangers. For the best and safe practice, we advise users not to share phone numbers, personal addresses, financial information, personal social media handles, or any other personal information with strangers on the platform.",
  },
];

const page = () => {
  return (
    <div className="main-gradient p-3 flex flex-col items-center gap-10">
      <RoutePageHeader
        link="/community-guidelines"
        title="Community Guidelines"
      />
      <div className="flex flex-col flex-1 items-center gap-8 custom-card max-width">
        <h1 className="text-2xl font-semibold">
          Building a Positive Viby Community
        </h1>
        <h4 className="text-m ">
          A community-driven platform that thrives on positive connections. To
          ensure a safe and enjoyable experience for all our users, we've
          established these Community Guidelines. Please read through them
          carefully and adhere to these principles while engaging with others on
          Viby.
        </h4>

        {data.map((item, index) => {
          return (
            <div className="flex flex-col gap-2 max-width " key={index}>
              <h1 className="text-2xl font-semibold">{item.title}</h1>
              <h4 className="text-m ">{item.description}</h4>
            </div>
          );
        })}
        <h4 style={{ width: "100%" }} className="text-m text-left">
          Together, Let’s Build Viby
        </h4>
        <h4 className="text-m ">
          By following these Community Guidelines, you contribute to the
          creation of a welcoming and respectful space for everyone on Viby.
          Let's build meaningful connections, celebrate diversity, and make Viby
          a platform that enhances the social experience for all.
        </h4>
      </div>
    </div>
  );
};

export default page;
