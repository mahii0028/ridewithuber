const CaptainDetails = () => {
  return (
    <div className=" h-1/2 flex gap-2 justify-between flex-col items-center px-4 py-4 pt-8 mt-4 relative">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 w-full">
          <img
            className="w-12 h-12 rounded-full object-cover"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9HaaTJSDJsT4iNusqiWXnEUelnan5lADZQ&s"
            alt=""
          />
          <h2 className="font-semibold">Driver</h2>
        </div>
        <div className="leading-[14px]">
          <h2 className="font-semibold">&#8377;295.34</h2>
          <h4 className="text-sm">Earned</h4>
        </div>
      </div>
      <div className="flex justify-around items-center py-5  w-[90%] bg-gray-200 absolute top-32 rounded-md">
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
  );
};

export default CaptainDetails;
