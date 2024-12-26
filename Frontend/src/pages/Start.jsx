import { NavLink } from "react-router-dom";
const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://img.pikbest.com/png-images/20240518/traffic-lights-post-redyellow-and-green-signal-_10570032.png!sw800)] h-screen pt-8 flex flex-col justify-between w-full bg-red-300">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white pb-7 px-4 py-4">
          <h2 className="text-3xl font-bold">Get started with Uber</h2>
          <NavLink
            to="/login"
            className="flex items-center justify-center text-white bg-black w-full py-3 rounded mt-5 cursor-pointer"
          >
            Continue
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Start;
