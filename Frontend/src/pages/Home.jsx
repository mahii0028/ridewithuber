import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYGncr2cyHHnaWqwJAmRpql2afdMC4OSYX48XU4SP7GIjLToDxJ-9ZishBCMotE3Q4nKE&usqp=CAU)] h-screen pt-8 flex flex-col justify-between w-full bg-red-400">
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

export default Home;
