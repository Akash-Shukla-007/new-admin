import RoutePageHeader from "../Components/RoutePageHeader/RoutePageHeader";
import Akash from "../../public/jpg/akash.jpg";
import Het from "../../public/jpg/het-chag.png";
import Lovepreet from "../../public/jpg/lovepreet-singh.jpg";
import AyushPandey from "../../public/jpg/ayush-pandey.jpg";
import Ayush from "../../public/jpg/ayus-kumar.jpg";
import "../main.css";

const data = [
  {
    image: Het,
    name: "Het Chag",
    designation: "CEO",
  },
  {
    image: Lovepreet,
    name: "Lovepreet Singh",
    designation: "CTO",
  },
  {
    image: Akash,
    name: "Akash Shukla",
    designation: "Full Stack Developer",
  },
  {
    image: AyushPandey,
    name: "Ayush Pandey",
    designation: "Frontend Developer",
  },
  {
    image: Ayush,
    name: "Ayush Kumar",
    designation: "Business Analyst",
  },
];

const page = () => {
  return (
    <div className="main-gradient p-3 flex flex-col items-center gap-10">
      <RoutePageHeader link="/aboutus" title="About Us" />
      <div className="flex flex-col flex-1 items-center gap-8 custom-card ">
        <div className="flex flex-col gap-2 max-width ">
          <h1 className="text-2xl font-semibold">About Viby </h1>
          <h4 className="text-m ">
            Welcome to Viby, where connections go beyond the ordinary. We're not
            just a social platform; we're a vibrant community designed to
            reshape the way people connect and interact online.
          </h4>
        </div>
        <div className="flex flex-col gap-2 max-width ">
          <h1 className="text-2xl font-semibold">Our Mission </h1>
          <h4 className="text-m ">
            At Viby, we believe in fostering authentic connections in the
            digital realm. Our mission is to provide a space where users can
            engage in genuine conversations, make new friends, develop their
            personal brand and create meaningful bonds.
          </h4>
        </div>
        <div className="flex flex-col gap-2 max-width">
          <h1 className="text-2xl font-semibold">What Sets Us Apart</h1>
          <ul className="flex flex-col gap-3 list-disc list-inside">
            <li className="text-m">
              Innovative Social Experience: Viby goes beyond conventional social
              media, offering an opportunity to make bonds with strangers across
              the globe and develop human connection through a seamless blend of
              video calls, real-time chat, and user-friendly features.
            </li>
            <li className="text-m">
              Empowering Connections: Our platform is built on the foundation of
              meaningful connections. Whether it's sparking conversations with
              strangers or strengthening bonds with existing friends, Viby is
              the place to be.
            </li>
            <li className="text-m">
              User-Centric Design: We prioritise user experience, ensuring that
              Viby is intuitive, enjoyable, and safe for everyone.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 max-width">
          <h1 className="text-2xl font-semibold">Our Story </h1>
          <h4 className="text-m ">
            Viby was born from the vision of a dynamic team of college students
            who want to solve a problem of genuine human connections with the
            world through you. We saw a gap in the social media landscape and
            set out to fill it with a platform that values genuine interactions
            and human connections.
          </h4>
        </div>
        <div className="flex flex-col gap-2 max-width ">
          <h1 className="text-2xl font-semibold ">Join the Viby Community</h1>
          <h4 className="text-m ">
            Embark on a journey where every connection is an opportunity to
            create something new. Join Viby today and experience socialising
            redefined.
          </h4>
        </div>
      </div>

      {/* <div
        style={{ width: "100%" }}
        className="flex gap-5 flex-1 max-width  flex-wrap items-center justify-center"
      >
        {data.map((item, index: number) => {
          return (
            <div className="image-card-container key={index} ">
              <div className="flex flex-col items-center">
                <img
                  style={{ objectFit: "cover" }}
                  className="w-28 h-28 mb-3 rounded-full shadow-lg"
                  src={item.image}
                  alt={item.name}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.designation}
                </span>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default page;
