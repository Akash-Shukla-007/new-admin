import Navbar from "./Components/Navbar/Navbar";
import BrandImage from "../public/png/brandRight.png";
import androidApp from "../public/png/coming-soon-on-play-store.png";
import iosApp from "../public/png/coming-soon-on-app-store.png";
import Footer from "./Components/Footer/Footer";
import seamlessVideoCall from "../public/png/semaless-video-calling.png";
import meetRandomPeople from "../public/jpg/meet-random people.jpg";
import encrptedImg from "../public/jpg/endcrypted.jpg";

import "./main.css";

export default function Home() {
  return (
    <div className="main-gradient">
      <Navbar />
      <section className="flex flex-col flex-grow items-center lg:flex-row gap-20 ">
        <div className="flex flex-col  gap-20  lg:gap-5 flex-1 lg:w-1/2 ">
          <div className="flex flex-col flex-grow  items-center viby-main-header-text-container">
            <h1>Viby</h1>
            <h2>Connect, Interact, Earn</h2>
            <h2> Where Random Moments Pay Off</h2>
          </div>
          <div className="coming-soon-cont">
            <img
              src={androidApp.src}
              alt="Viby andoroid"
              className="coming-soon-image"
            />
            <img
              src={iosApp.src}
              alt="Viby ios"
              className="coming-soon-image"
            />
          </div>
        </div>
        <div className="flex justify-center items-center flex-1  lg:w-1/2">
          <img
            src={BrandImage.src}
            alt="Viby app"
            className="viby-brand-image w-4/5 lg:w-4/5 md:w-9/10 "
          />
        </div>
      </section>
      <section className="flex flex-grow items-center justify-center ">
        <div className="three-sections video-call max-width">
          <div
            style={{
              maxWidth: "700px ",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <h2>Seamless Video Call</h2>
            <p>
              Experience high-quality video calls with your friends, family, or
              colleagues seamlessly on our platform.
            </p>
          </div>
          <img
            src={seamlessVideoCall.src}
            alt="Video Call"
            className="three-sections-image"
          />
        </div>
      </section>
      <section className="flex flex-grow items-center justify-center ">
        <div className="three-sections meet-new-people max-width">
          <img
            src={meetRandomPeople.src}
            alt="Meet People"
            className="three-sections-image"
          />
          <div
            style={{
              maxWidth: "700px ",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              alignItems: "end",
              textAlign: "right",
            }}
          >
            <h2>Meet Random People</h2>
            <p>
              Connect with new people from around the world, make friends, and
              expand your social network.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-grow items-center justify-center ">
        <div className="three-sections encrypted-chat max-width">
          <div
            style={{
              maxWidth: "700px ",
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <h2>Encrypted 1-on-1 Chat</h2>
            <p>
              Chat securely with your connections using end-to-end encryption,
              ensuring your conversations remain private.
            </p>
          </div>
          <img
            src={encrptedImg.src}
            alt="Encrypted Chat"
            className="three-sections-image"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
