import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [openFinishPanel, setOpenFinishPanel] = useState(false);
  const openFinishPanelRef = useRef(null);

  useGSAP(() => {
    if (openFinishPanel) {
      gsap.to(openFinishPanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(openFinishPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [openFinishPanel]);
  return (
    <div className="h-screen overflow-hidden">
      <div>
        <img
          className="w-16 absolute left-5 top-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className="fixed h-10 w-10 bg-white top-4 right-4 rounded-full flex items-center justify-center"
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div
        onClick={() => {
          setOpenFinishPanel(true);
        }}
        className="h-1/5 bg-yellow-300 relative flex flex-col px-2 w-full"
      >
        <h5 className="p-1 text-center w-full absolute top-0">
          <i className="text-3xl text-gray-100 ri-arrow-up-wide-line"></i>
        </h5>
        <div className="w-[95%] flex items-center justify-between absolute top-16">
          <h2 className="font-semibold text-xl">4 KM away</h2>
          <button className="bg-green-600 font-semibold px-4 py-2 rounded-md text-white">
            Complete Ride
          </button>
        </div>
      </div>
      <div
        ref={openFinishPanelRef}
        className="fixed w-full h-[80%] z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <FinishRide setOpenFinishPanel={setOpenFinishPanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;
