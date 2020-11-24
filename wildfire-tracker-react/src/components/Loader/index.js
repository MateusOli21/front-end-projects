import React from "react";

import spinner from "../../assets/spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="loader" />
      <h2>Buscando dados</h2>
    </div>
  );
};

export default Loader;
