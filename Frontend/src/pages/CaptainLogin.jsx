import { Link } from "react-router-dom";
import { useState } from "react";

const CaptainLogin = () => {
  const [captainFormData, setCaptainFormData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (identifier, event) => {
    setCaptainFormData((prev) => {
      return { ...prev, [identifier]: event.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(captainFormData);
    setCaptainFormData({ email: "", password: "" });
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
          <h3 className="text-lg font-medium mb-2">
            {`${"What's"}`} your email
          </h3>
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
          <button
            onClick={submitHandler}
            className="bg-[#111] text-[#fff] font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base"
          >
            Login
          </button>
        </form>
        <p className="text-center">
          Join a fleet{" "}
          <Link to="/captain-signup" className=" text-blue-600">
            Register as a Captain
          </Link>
        </p>
      </div>
      <div>
        <Link
          to="/login"
          className="bg-[#a6501e] flex items-center justify-center text-[#fff] font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
