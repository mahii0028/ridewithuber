import { Fragment } from "react";
import PropTypes from "prop-types";

const propTypes = {
  setConfirmRide: PropTypes.bool.isRequired,
  setOpenVehiclePanel: PropTypes.bool.isRequired,
};

const VehiclePanel = ({ setConfirmRide, setOpenVehiclePanel }) => {
  const VEHICLE_DETAILS = [
    {
      id: "1",
      title: "UberGo",
      capacity: 4,
      price: "196.37",
      time: "2 mins away",
      para: "Affordable, compact rides",
      vehicleType:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png",
    },
    {
      id: "2",
      title: "Moto",
      capacity: 1,
      price: "96.17",
      time: "1 mins away",
      para: "Affordable, compact rides",
      vehicleType:
        "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
    },
    {
      id: "3",
      title: "UberAuto",
      capacity: 3,
      price: "136.17",
      time: "3 mins away",
      para: "Affordable, compact rides",
      vehicleType:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s",
    },
  ];
  return (
    <Fragment>
      {VEHICLE_DETAILS.map((details) => (
        <div
          onClick={() => {
            setConfirmRide(true);
            setOpenVehiclePanel(false);
          }}
          key={details.id}
          className="flex items-center justify-between px-2 py-2 h-24  border-2 rounded-md mb-2"
        >
          <div>
            <img className="w-28" src={details.vehicleType} alt="car image" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="leading-1 flex items-center">
              <span className="text-lg leading-1">{details.title}</span>
              <span>
                <i className="ri-user-fill"></i>
              </span>
              <span>{details.capacity}</span>
            </span>
            <span>{details.time}</span>
            <p className="text-sm">{details.para}</p>
          </div>
          <div>
            <span className="font-medium">&#8377;{details.price}</span>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

VehiclePanel.propTypes = propTypes;
export default VehiclePanel;
