import RoutePageHeader from "../Components/RoutePageHeader/RoutePageHeader";
import Contactus from "../../public/svg/contact.svg";
import "./contactus.css";
import ContactCard from "../Components/Contact-Card/ContactCard";

const page = () => {
  return (
    <section className="main-gradient flex flex-col items-center gap-10">
      <RoutePageHeader link="contact-us" title="Contact Us" />
      <div className="route-page-width flex flex-col justify-between ">
        <div className=" contact-us-cont ">
          <div className="flex flex-col gap-10 max-width-900">
            <h2 className="text-3xl font-bold mb-6">
              Have questions, suggestions, or just want to say hello?
            </h2>

            <div className="flex flex-col gap-10 ">
              <div className="flex gap-10 justify-between media-set-700">
                <ContactCard>
                  <h3 className="text-xl font-semibold mb-4">
                    General Inquiries
                  </h3>
                  <p className="text-lg mb-2">
                    Email:{" "}
                    <a
                      href="mailto:talk@vibymedia.com"
                      className="text-blue-500"
                    >
                      talk@vibymedia.com
                    </a>
                  </p>
                </ContactCard>

                <ContactCard>
                  <h3 className="text-xl font-semibold mb-4">
                    Business Inquiries
                  </h3>
                  <p className="text-lg mb-2">
                    Email:{" "}
                    <a
                      href="mailto:partnerships@vibymedia.com"
                      className="text-blue-500"
                    >
                      partnerships@vibymedia.com
                    </a>
                  </p>
                </ContactCard>
              </div>

              <div className="flex gap-10 justify-between media-set-700">
                <ContactCard>
                  <h3 className="text-xl font-semibold mb-4">
                    Technical Support
                  </h3>
                  <p className="text-lg mb-2">
                    Email:{" "}
                    <a
                      href="mailto:support@vibymedia.com"
                      className="text-blue-500"
                    >
                      support@vibymedia.com
                    </a>
                  </p>
                </ContactCard>

                <ContactCard>
                  <h3 className="text-xl font-semibold mb-4">
                    Reach Out on Social Media
                  </h3>
                  <ul className="list-disc list-inside text-lg mb-2">
                    <li>
                      <a
                        href="https://twitter.com/viby_media"
                        className="text-blue-500"
                      >
                        X
                      </a>
                    </li>
                    {/* <li>
                      <a href="#" className="text-blue-500">
                        Instagram
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="https://www.linkedin.com/company/viby-social-media"
                        className="text-blue-500"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </ContactCard>
              </div>
            </div>

            <div
              style={{
                width: "100%",
                maxWidth: "900px",
                boxShadow: "1px 1px 5px rgb(122, 151, 255)",
              }}
              className="rounded-lg overflow-hidden-100 p-6 "
            >
              <h1 className="text-3xl font-bold">
                Our presence - Surat | Noida{" "}
              </h1>
              <div className="flex flex-col gap-4 ">
                <h3 className="text-xl font-semibold">Our Office</h3>
                <p className="text-lg ">Viby Info Media Pvt. Ltd.</p>
                <p className="text-lg ">[Office Address]</p>
              </div>
            </div>
          </div>
          <div className="contact-us-image">
            <img src={Contactus.src} alt="contact us image" className="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
