import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../redux/slices/user-slice";
import axios from "axios";

const UserSignup = () => {
  const [userFormData, setUserFormData] = useState({
    fullName: { firstName: "", lastName: "" },
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (identifier, event) => {
    const { name, value } = event.target;
    if (identifier === "fullName") {
      setUserFormData((prev) => ({
        ...prev,
        fullName: { ...prev.fullName, [name]: value },
      }));
    } else {
      setUserFormData((prev) => ({
        ...prev,
        [identifier]: value,
      }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = userFormData;

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if (response.status === 201) {
      const data = response.data;
      dispatch(userActions.userSignup(data.user));
      localStorage.setItem("token", data.token);
      navigate("/home");
    }

    setUserFormData({
      fullName: { firstName: "", lastName: "" },
      email: "",
      password: "",
    });
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">{`${"What's"}`} your name</h3>
          <div className="flex gap-4 mb-7">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              type="text"
              name="firstName"
              placeholder="First name"
              value={userFormData.fullName.firstName}
              onChange={(event) => onChangeHandler("fullName", event)}
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              name="lastName"
              placeholder="Last name"
              value={userFormData.fullName.lastName}
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
            value={userFormData.email}
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
            value={userFormData.password}
            onChange={(event) => {
              onChangeHandler("password", event);
            }}
          />
          <button className="bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Create account
          </button>
        </form>
        <p className="text-center">
          Already have a account?{" "}
          <Link to="/login" className=" text-blue-600">
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

export default UserSignup;
