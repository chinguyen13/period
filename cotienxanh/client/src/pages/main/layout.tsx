import React from "react";
import { Outlet } from "react-router-dom";

const LayoutComponent: React.FC = () => {
  return (
    <div>Layout
      <Outlet/>
    </div>
  )
}

export default LayoutComponent;