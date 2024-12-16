import { Link } from "react-router-dom";
import { useState } from "react";
const UserSignup = () => {
  const [userFormData, setUserFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (identifier, event) => {
    setUserFormData((prev) => {
      return { ...prev, [identifier]: event.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userFormData);
    setUserFormData({ firstName: "", lastName: "", email: "", password: "" });
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form>
          <h3 className="text-lg font-medium mb-2">
            {`${"What's"}`} your name
          </h3>
          <div className="flex gap-4 mb-7">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              required
              type="text"
              placeholder="First name"
              value={userFormData.firstName}
              onChange={(event) => {
                onChangeHandler("firstName", event);
              }}
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
              type="text"
              placeholder="Last name"
              value={userFormData.lastName}
              onChange={(event) => {
                onChangeHandler("lastName", event);
              }}
            />
          </div>
          <h3 className="text-lg font-medium mb-2">
            {`${"What's"}`} your email
          </h3>
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
          <button
            onClick={submitHandler}
            className="bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Login
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
          By proceeding, you consent to get calls, Whatsapp or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
