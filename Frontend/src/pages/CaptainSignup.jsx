import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { captainActions } from "../redux/slices/captain-slice";
import { useDispatch } from "react-redux";
import axios from "axios";

const CaptainSignup = () => {
  const [captainFormData, setCaptainFormData] = useState({
    fullName: { firstName: "", lastName: "" },
    email: "",
    password: "",
  });
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (identifier, event) => {
    const { name, value } = event.target;

    if (identifier === "fullName") {
      setCaptainFormData((prev) => ({
        ...prev,
        fullName: { ...prev.fullName, [name]: value },
      }));
    } else if (identifier === "vehicle") {
      setCaptainFormData((prev) => ({
        ...prev,
        vehicle: { ...prev.vehicle, [name]: value },
      }));
    } else {
      setCaptainFormData((prev) => ({
        ...prev,
        [identifier]: value,
      }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newCaptain = {
      fullName: {
        firstName: captainFormData.fullName.firstName,
        lastName: captainFormData.fullName.lastName,
      },
      email: captainFormData.email,
      password: captainFormData.password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    console.log(newCaptain);

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      newCaptain
    );

    if (response.status === 201) {
      const data = response.data;
      dispatch(captainActions.captainSignup(data.captain));
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    setCaptainFormData({
      fullName: { firstName: "", lastName: "" },
      email: "",
      password: "",
    });
    setVehicleColor("");
    setVehicleCapacity("");
    setVehiclePlate("");
    setVehicleType("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-2"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form>
          <h3 className="text-lg font-medium mb-2">{`${"What's"}`} your name</h3>
          <div className="flex gap-4 mb-7">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              type="text"
              name="firstName"
              placeholder="First name"
              value={captainFormData.fullName.firstName}
              onChange={(event) => {
                onChangeHandler("fullName", event);
              }}
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              name="lastName"
              value={captainFormData.fullName.lastName}
              onChange={(event) => {
                onChangeHandler("fullName", event);
              }}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">{`${"What's"}`} your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="email"
            placeholder="email@example.com"
            value={captainFormData.email}
            onChange={(event) => {
              onChangeHandler("email", event);
            }}
          />
          <h3 className="text-lg font-medium mb-2">Enter your password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            required
            type="password"
            placeholder="password"
            value={captainFormData.password}
            onChange={(event) => {
              onChangeHandler("password", event);
            }}
          />

          <h3 className="text-lg font-medium mb-2">Vehicle information</h3>
          <div className="grid grid-cols-2 gap-4 mb-7">
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              type="text"
              placeholder="vehicle color"
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Vehicle plate"
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
            />
            <input
              className="bg-[#eeeeee]  rounded px-4 py-2 border text-lg placeholder:text-base"
              type="number"
              placeholder="Vehicle capacity"
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
            />
            <select
              className="bg-[#eeeeee]  rounded px-4 py-2 border text-lg placeholder:text-base"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <button
            onClick={submitHandler}
            className="bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Create captain account
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/captain-login" className=" text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated
          means, from Uber and its affiliates to the number provided.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
