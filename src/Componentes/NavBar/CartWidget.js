import React from "react";

import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

const CardWidget = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", width: "40px" }}>
      <LocalGroceryStoreIcon sx={{ color: "black" }} />
      <p style={{ color: "black" }}>5</p>
    </div>
  );
};

export default CardWidget;
