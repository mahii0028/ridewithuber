import { Link } from "react-router-dom";

const CaptainHome = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
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
      <div className="h-1/2 mb-2">
        <img src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=" h-1/2 flex gap-2 justify-between flex-col items-center px-4 py-4 pt-8 mt-4 relative">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2 w-full">
            <img
              className="w-14 rounded-full h-14"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyF0IX8zMeGbaDB9ei7_qF0QAFSO1v0PSKlZa7VA9kaQoD-XO0zTTX4NA43czqKgUOUTM&usqp=CAU"
              alt=""
            />
            <h2>Driver</h2>
          </div>
          <div className="leading-[14px]">
            <h2 className="font-semibold">&#8377;295.34</h2>
            <h4 className="text-sm">Earned</h4>
          </div>
        </div>
        <div className="flex justify-around items-center py-5  w-[90%] bg-gray-200 absolute top-1/2 rounded-md">
          <span className="flex flex-col items-center">
            <i className=" text-3xl ri-speed-up-line"></i>
            <p className="font-semibold">10.2</p>
            <p>Hours online</p>
          </span>
          <span className="flex flex-col items-center">
            <i className=" text-3xl ri-speed-up-line"></i>
            <p className="font-semibold">10.2</p>
            <p>Hours online</p>
          </span>
          <span className="flex flex-col items-center">
            <i className=" text-3xl ri-booklet-line"></i>
            <p className="font-semibold">10.2</p>
            <p>Hours online</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CaptainHome;
