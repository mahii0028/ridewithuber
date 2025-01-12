import { Link } from "react-router-dom";
import { Fragment, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CaptainDetails from "../components/CaptainDetails";
import RidingPopUp from "../components/RidingPopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";

const CaptainHome = () => {
  const [ridingPopUpPanel, setRidingPopUpPanel] = useState(true);
  const [confirmRidingPopUpPanel, setConfirmRidingPopUpPanel] = useState(false);
  const ridingPopUpPanelRef = useRef(null);
  const confirmRidingPopUpPanelRef = useRef(null);

  useGSAP(() => {
    if (ridingPopUpPanel) {
      gsap.to(ridingPopUpPanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(ridingPopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [ridingPopUpPanel]);

  useGSAP(() => {
    if (confirmRidingPopUpPanel) {
      gsap.to(confirmRidingPopUpPanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(confirmRidingPopUpPanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidingPopUpPanel]);

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div>
        <Link
          to="/captain-home"
          className="fixed h-10 w-10 bg-white top-4 right-4 rounded-full flex items-center justify-center"
        >
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-1/2 mb-2">
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <Fragment>
        <CaptainDetails />
      </Fragment>
      <div
        ref={ridingPopUpPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <RidingPopUp
          setRidingPopUpPanel={setRidingPopUpPanel}
          setConfirmRidingPopUpPanel={setConfirmRidingPopUpPanel}
        />
      </div>
      <div
        ref={confirmRidingPopUpPanelRef}
        className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12"
      >
        <ConfirmRidePopUp
          setRidingPopUpPanel={setRidingPopUpPanel}
          setConfirmRidingPopUpPanel={setConfirmRidingPopUpPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
