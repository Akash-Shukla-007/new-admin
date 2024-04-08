import RoutePageHeader from "../Components/RoutePageHeader/RoutePageHeader";
import MeaningfulConversation from "../../public/jpg/Meaningful-convo.jpeg";
import JourneyUnvield from "../../public/jpg/Journey-Unveiled.jpg";
import PersonalBranding from "../../public/jpg/PeronsalBranding.jpg";
import StayConnected from "../../public/jpg/StayingConnected.jpg";
import SocialNaviagtion from "../../public/jpg/SocialMediaNavigation.jpg";
import FututreSocial from "../../public/jpg/FututreSocail.jpg";

interface Blog {
  title: string;
  description: string;
  image: string;
}

const blogs: Blog[] = [
  {
    title: "Unlocking the Power of Random Connections: Viby's Unique Approach",
    description:
      "Explore how Viby leverages the power of random connections to foster serendipitous interactions among its users. Delve into the fascinating world of spontaneous connections and discover how they can lead to unexpected friendships, collaborations, and opportunities. Whether you're seeking inspiration, knowledge, or simply a new perspective, embracing randomness on Viby can open doors to endless possibilities.",
    image: MeaningfulConversation.src,
  },
  {
    title: "Building Viby: A Startup Journey Unveiled",
    description:
      "Follow the exciting journey of building Viby from a small startup to a thriving social platform. Join us as we recount the challenges, triumphs, and pivotal moments that defined Viby's evolution. From humble beginnings to groundbreaking innovations, this behind-the-scenes look offers insights into the entrepreneurial spirit, resilience, and vision that propelled Viby to success.",
    image: JourneyUnvield.src,
  },
  {
    title: "The Role of Personal Branding in the Social Media Landscape",
    description:
      "Discover the importance of personal branding in today's social media-dominated world and how it can impact your online presence. Explore strategies for building a strong personal brand that resonates with your audience, establishes credibility, and sets you apart in a crowded digital space. Whether you're an aspiring influencer, entrepreneur, or professional, mastering the art of personal branding is essential for making your mark in the digital age.",
    image: PersonalBranding.src,
  },
  {
    title: "Navigating the Social Media Jungle: Viby Safety Tips",
    description:
      "Learn essential safety tips and best practices for navigating the social media landscape safely on Viby. From safeguarding your privacy to spotting and avoiding online scams, this comprehensive guide equips you with the knowledge and tools to protect yourself while enjoying all that Viby has to offer. Stay informed, stay vigilant, and stay safe on Viby.",
    image: SocialNaviagtion.src,
  },
  {
    title: "The Future of Social Interaction: Viby's Vision",
    description:
      "Explore Viby's vision for the future of social interaction and how it aims to revolutionize the way people connect online. From cutting-edge technologies to innovative community-building initiatives, discover the exciting possibilities that lie ahead. Join us as we embark on a journey to redefine social networking and create meaningful connections in a rapidly evolving digital landscape.",
    image: FututreSocial.src,
  },
  {
    title: "Staying Connected: Viby's Guide to Meaningful Conversations",
    description:
      "Discover practical tips and strategies for fostering meaningful conversations and connections on Viby. From active listening techniques to empathy-building exercises, this guide empowers you to cultivate deeper connections with others and create enriching experiences. Whether you're seeking to expand your social circle, nurture existing relationships, or simply engage in more meaningful interactions, Viby's guide to meaningful conversations has you covered.",
    image: StayConnected.src,
  },
];

const BlogsPage: React.FC = () => {
  return (
    <section className="main-gradient flex flex-col items-center gap-10">
      <RoutePageHeader link="blogs" title="Blogs" />
      <div className="container mx-auto px-4 py-8 max-sm:px-0 max-width">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg mb-8"
            >
              <img
                className="w-full h-48 object-cover"
                src={blog.image}
                alt={blog.title}
              />
              <div className="p-6">
                <h2 className="font-bold text-xl mb-2 text-gray-800">
                  {blog.title}
                </h2>
                <p className="text-gray-700 text-base">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsPage;
