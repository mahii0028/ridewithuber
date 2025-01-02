import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCaptainProfile } from "../redux/slices/captain-slice";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

const CaptainWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.captain.isLoading);
  const isError = useSelector((state) => state.captain.isError);

  useEffect(() => {
    if (!token) {
      navigate("/captain-login");
    }
    dispatch(fetchCaptainProfile());

    if (isError) {
      localStorage.removeItem("token");
      navigate("/captain-login");
    }
  }, [token]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
};
CaptainWrapper.propTypes = propTypes;
export default CaptainWrapper;
