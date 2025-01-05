import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Link
        to="/home"
        className="fixed h-10 w-10 bg-white top-4 right-4 rounded-full flex items-center justify-center"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2 mb-2">
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=" h-1/2 flex gap-2 justify-between flex-col items-center px-4 py-4 pt-8">
        <div className="w-full mt-5">
          <div className="flex justify-between items-center">
            <img
              className="h-16"
              src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1646663215/assets/6e/e50c1b-2174-4c97-83a1-bfd4544689d0/original/uberX.png"
              alt="car img"
            />
            <div className="leading-[12px]">
              <h4 className="font-medium">Driver Name</h4>
              <h1 className="font-semibold text-xl">KA 31 W1451</h1>
              <h5>benz car</h5>
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
          <button className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
            Make payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Riding;
