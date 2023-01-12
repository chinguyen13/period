import "antd/dist/reset.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import ListComponent from "./pages/list/list";
import LayoutComponent from "./pages/main/layout";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComponent/>} >
          <Route path="" index element={<ListComponent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
