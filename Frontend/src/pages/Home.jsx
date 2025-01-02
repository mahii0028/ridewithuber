import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationsSearchPanel from "../components/LocationsSearchPanel";
import VehiclePanel from "../components/VehiclePanel";

const Home = () => {
  const [pickUp, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [openPanel, setOpenPanel] = useState(false);
  const [openVehiclePanel, setOpenVehiclePanel] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (openPanel) {
      gsap.to(panelRef.current, {
        height: "70%",
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        padding: "0",
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [openPanel]);

  useGSAP(() => {
    if (openVehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [openVehiclePanel]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* image for temporary use  */}
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute bottom-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setOpenPanel(false);
            }}
            className="absolute opacity-0 right-6 top-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form
            className="relative py-3"
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[50%] -translate-y-1/2 left-5 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => {
                setOpenPanel(true);
              }}
              value={pickUp}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setOpenPanel(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full  mt-3 "
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-[0%]">
          <button className="bg-black text-white px-4 py-2 rounded-lg mt-3 w-full">
            Find Trip
          </button>
          <LocationsSearchPanel
            setOpenVehiclePanel={setOpenVehiclePanel}
            setOpenPanel={setOpenPanel}
          />
        </div>
      </div>
      <div
        className="flex flex-col justify-end absolute bottom-0 w-full bg-white px-2 translate-y-[100%]"
        ref={vehiclePanelRef}
      >
        <div className="mb-2">
          <span
            onClick={() => {
              setOpenVehiclePanel(false);
            }}
            className="text-center flex justify-center"
          >
            <i className="ri-arrow-down-wide-line text-3xl opacity-15"></i>
          </span>
          <h3 className="text-lg font-medium">Choose a Vehicle</h3>
        </div>
        <VehiclePanel />
      </div>
    </div>
  );
};

export default Home;
