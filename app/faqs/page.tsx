import RoutePageHeader from "../Components/RoutePageHeader/RoutePageHeader";
import "../main.css";

const data = [
  {
    ques: "Is Viby free to use?",
    answer:
      "Yes, Viby is free to download and use. We believe in providing a seamless and accessible social experience to all users. While the basic features are free, we may offer premium features or services in the future for enhanced user experiences.",
  },
  {
    ques: "How can I ensure my privacy and data security on Viby?",
    answer:
      "At Viby, your privacy is our priority. We employ robust security measures to protect your personal information. We prioritise the privacy and security of our users. Viby adheres to strict data protection measures and follows industry-standard protocols to safeguard user information. Refer to our Privacy Policy for detailed insights.",
  },
  {
    ques: "What makes Viby different from other social platforms?",
    answer:
      "Viby stands out for its emphasis on genuine connections. With features like random video calls and interactive content, Viby aims to create meaningful interactions in the digital space. Explore our unique offerings that set us apart in the social media landscape.    ",
  },
  {
    ques: "How can I report inappropriate content or users on Viby?",
    answer:
      "Your safety is important to us. If you come across any inappropriate content or users on Viby, use our reporting feature. Simply click on the reporting option within the app, and our team will review and take appropriate action.",
  },
  {
    ques: "Are there age restrictions for using Viby?",
    answer: " Yes, Users must be at least 16 years old to use Viby.",
  },
  {
    ques: "How can I connect with Viby Support for assistance",
    answer:
      "If you have any questions, concerns, or issues, our dedicated support team is here to help. Visit the Contact Us page to reach out, and we'll get back to you promptly.    ",
  },
];
const page = () => {
  return (
    <div className="main-gradient p-3 flex flex-col items-center gap-10 ">
      <RoutePageHeader link="/faqs" title="FAQS" />
      <div className="flex flex-col flex-1 items-center gap-5 ">
        {data.map((question, index: number) => {
          return (
            <div
              key={index}
              style={{ width: "100%" }}
              className=" flex flex-col gap-2 max-width custom-card "
            >
              <h1 className="text-2xl font-semibold">{question.ques}</h1>
              <h4 className="text-m ">{question.answer}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
