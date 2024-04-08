import RoutePageHeader from "../Components/RoutePageHeader/RoutePageHeader";

const data = [
  {
    title: "User Responsibilities",
    items: [
      {
        name: "Account Usage",
        description:
          "You are responsible for maintaining the confidentiality of your account credentials and ensuring that unauthorized access does not occur.",
      },
      {
        name: "User Conduct",
        description:
          "Users must adhere to community guidelines and standards. Harmful behavior, harassment, or any violation of these guidelines is strictly prohibited.",
      },
      {
        name: "Age Requirement",
        description:
          "Users must be at least 16 years old to use Viby. By using the platform, you confirm that you meet this age requirement.",
      },
    ],
  },
  {
    title: "Content Guidelines",
    items: [
      {
        name: "User Generated Content",
        description:
          "Users are solely responsible for the content they create and share. Viby is not liable for any user-generated content.",
      },
      {
        name: "Intellectual Property",
        description:
          "Respect intellectual property rights. Do not share content that infringes on copyrights, trademarks, or other proprietary rights.",
      },
    ],
  },
  {
    title: "Platform Usage",
    items: [
      {
        name: "Service Availability",
        description:
          "Viby strives to provide uninterrupted services, but we do not guarantee that the platform will always be available without disruptions.",
      },
      {
        name: "Modifications ToService",
        description:
          "Viby reserves the right to modify or discontinue any part of the service, temporarily or permanently, with or without notice.",
      },
    ],
  },
  {
    title: "Data and Privacy",
    items: [
      {
        name: "Data Collection",
        description:
          "Viby collects and processes user data as outlined in the Privacy Policy. By using the platform, you consent to this data collection.",
      },
      {
        name: "Third Party Links",
        description:
          "Viby may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.",
      },
    ],
  },
  {
    title: "Termination",
    items: [
      {
        name: "Account Termination",
        description:
          "Viby reserves the right to terminate or suspend accounts that violate these Terms & Conditions or engage in harmful conduct.",
      },
    ],
  },
  {
    title: "Changes to Terms and Conditions",
    description:
      "Viby may revise and update these Terms & Conditions at any time. Users are encouraged to review this page periodically for any changes.",
  },
];

const page = () => {
  return (
    <section className="main-gradient flex flex-col items-center gap-10 ">
      <RoutePageHeader title="Terms & Conditions" link="/terms" />
      <div className="flex flex-col flex-1 items-center gap-8  route-page-width">
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
              {e?.description && <h4 className="text-lg ">{e.description}</h4>}
              {e.items?.map((item, number: number) => (
                <div key={number} className="flex flex-col gap-1">
                  <h4 className="text-xl font-medium ">{item.name}</h4>
                  <h4 className="text-md ">{item.description}</h4>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default page;
