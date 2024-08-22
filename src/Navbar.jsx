import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 20px",
      }}
    >
      {/* Logo */}
      <div>
        <img
          src="https://th.bing.com/th/id/OIP.z23xAa_bEV2zWLuC8ybWkwHaEK?pid=ImgDet&w=206&h=116&c=7&dpr=1.1"
          alt="Sugar Cosmetics Logo"
          style={{ height: "70px" }}
        />
      </div>

      {/* User Profile Picture */}
      <div>
        <img
          src="https://th.bing.com/th?id=OIP.ZZf5ANaOGgdbBM-ot_12FgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
          alt="User"
          style={{ borderRadius: "50%", height: "40px", width: "40px" }}
        />
      </div>
    </div>
  );
};

export default Navbar;
