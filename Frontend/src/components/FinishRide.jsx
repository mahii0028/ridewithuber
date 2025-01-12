import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const propTypes = {
  setOpenFinishPanel: PropTypes.func.isRequired,
};

const FinishRide = ({ setOpenFinishPanel }) => {
  return (
    <div>
      <h5
        onClick={() => {
          setOpenFinishPanel(false);
        }}
        className="p-1 text-center w-[93%] absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-xl font-semibold mb-5">Finish this Ride</h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="flex items-center justify-between w-full bg-yellow-300 py-3 rounded-md px-3">
          <div className="flex items-center gap-2">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3fcYmldjdkFWNlzjumuYVTGIzOirjZM4LrbJYludYggIfCChRavgWwFIA_XVTeQiqZ0&usqp=CAU"
              alt=""
            />
            <h3 className="font-semibold text-xl">User Name</h3>
          </div>
          <div className="text-xl font-semibold">2.2KM</div>
        </div>
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">562/11-A</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">562/11-A</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.33</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>

        <Link
          to="/captain-home"
          className="flex w-full justify-center mt-5 bg-green-600 text-white font-semibold p-2 rounded-sm"
        >
          Finish Ride
        </Link>
      </div>
    </div>
  );
};

FinishRide.propTypes = propTypes;
export default FinishRide;
