import RoutePageHeader from "../Components/RoutePageHeader/RoutePageHeader";

const data = [
  {
    title: "Protect Your Personal Information",
    description:
      "Avoid sharing sensitive information such as your address, phone number, or financial details with strangers. Be cautious and selective about the information you disclose.",
  },
  {
    title: "Be Mindful of Online Conduct",
    description:
      "Foster a positive atmosphere by treating others with respect and kindness. Report any instances of harassment, bullying, or inappropriate behaviour to our support team.",
  },
  {
    title: "Exercise Caution with Strangers",
    description:
      "Take time to know someone before sharing personal details. Be wary of individuals who ask for money, gifts, or any form of financial assistance.",
  },
  {
    title: "Use Secure Communication",
    description:
      "Utilise our secure chat and video call features to keep your interactions within the Viby platform. Avoid sharing personal contact details too soon.",
  },
  {
    title: "Report Suspicious Activity",
    description:
      "If you come across any suspicious profiles or encounter behaviour that raises concerns, report it to Viby immediately. Your vigilance helps us maintain a safe community.",
  },
  {
    title: "Educate Yourself",
    description:
      "Stay updated on best practices for online safety. Awareness is key to ensuring a secure and enjoyable experience on social platforms.",
  },
];

const page = () => {
  return (
    <div className="main-gradient p-3 flex flex-col items-center gap-10">
      <RoutePageHeader link="/safety-tips" title="Safety Tips" />
      <div className="flex flex-col flex-1 items-center gap-8 custom-card max-width">
        <h1 style={{ width: "100%" }} className="text-2xl font-semibold ">
          Your Safety is Our Priority
        </h1>
        <h4 className="text-m ">
          At Viby, we are committed to providing a safe and secure environment
          for all our users. Here are some essential safety tips to enhance your
          experience on our platform:
        </h4>

        {data.map((item, index) => {
          return (
            <div className="flex flex-col gap-2 max-width" key={index}>
              <h1 className="text-2xl font-semibold">{item.title}</h1>
              <h4 className="text-m ">{item.description}</h4>
            </div>
          );
        })}
        <h4 style={{ width: "100%" }} className="text-m text-left">
          We're Here for You
        </h4>
        <h4 className="text-m ">
          Your safety is paramount to us. If you ever feel uncomfortable or
          encounter any issues, please reach out to our support team. Together,
          we can create a vibrant and secure community at Viby.
        </h4>
      </div>
    </div>
  );
};

export default page;
