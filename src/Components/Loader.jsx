import React from "react";
import { useSelector } from "react-redux";
import "../css/loader.css";

const Loader = () => {
  const loading = useSelector((state) => state.loader.loading);

  if (!loading) return null;

  return (
    <div className="loader-overlay">
      <div className="loader-spinner"></div>
    </div>
  );
};

export default Loader;