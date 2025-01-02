import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from "prop-types";

const propTypes = {
  children: PropTypes.node,
};

const UserWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return <>{children}</>;
};

UserWrapper.propTypes = propTypes;
export default UserWrapper;
