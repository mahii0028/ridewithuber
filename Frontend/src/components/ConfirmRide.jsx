import PropTypes from "prop-types";
import { Fragment } from "react";

const propTypes = {
  setConfirmRide: PropTypes.bool.isRequired,
};

const ConfirmRide = ({ setConfirmRide }) => {
  return (
    <Fragment>
      <div className="mb-2">
        <span
          onClick={() => {
            setConfirmRide(false);
          }}
          className="text-center flex justify-center"
        >
          <i className="ri-arrow-down-wide-line text-3xl opacity-15"></i>
        </span>
        <h3 className="text-xl font-semibold">Confirm yor Ride</h3>
      </div>
      <div className="flex justify-center">
        <img
          className="w-64"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png"
          alt="car img"
        />
      </div>
      <div>
        <div className="flex items-center justify-start gap-3 px-2 py-4 border-b-2">
          <span className="text-xl">
            <i className="ri-user-location-line"></i>
          </span>
          <div className="leading-[20px]">
            <h2 className="font-semibold">562/11-A</h2>
            <h4 className="text-sm ">Plains, Mexico</h4>
          </div>
        </div>
        <div className="flex items-center justify-start gap-3 px-2 py-4 border-b-2">
          <span className="text-xl">
            <i className="ri-map-pin-user-fill"></i>
          </span>
          <div className="leading-[20px]">
            <h2 className="font-semibold">562/11-A</h2>
            <h4 className="text-sm ">Plains, Mexico</h4>
          </div>
        </div>
        <div></div>
        <div className="flex items-center justify-start gap-3 px-2 py-4 border-b-2">
          <span className="text-xl">
            <i className="ri-currency-line"></i>
          </span>
          <div className="leading-[20px]">
            <h2 className="font-semibold">&#8377; 196.34</h2>
            <h4 className="text-sm ">Cash, Cash</h4>
          </div>
        </div>
      </div>
      <button className="confirm-ride-btn w-full bg-green-600 px-2 py-2 mt-4 rounded-md text-white font-semibold">
        Confirm Ride
      </button>
    </Fragment>
  );
};

ConfirmRide.propTypes = propTypes;
export default ConfirmRide;
