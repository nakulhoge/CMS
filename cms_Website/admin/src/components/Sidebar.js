/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import "../components/Sidebar.css";
import { MdDashboardCustomize } from "react-icons/md";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const Togglesidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <li className="list">
        <p onClick={Togglesidebar}>
          <TfiAlignJustify />Open Sidebar
        </p>
      </li>

      {isSidebarOpen && (
        <div className="maindiv">
          <li className="list">
            <p onClick={Togglesidebar}>
              <IoClose /> Close Sidebar
            </p>
          </li>
          <li className="list">
            <MdDashboardCustomize />
            <Link to ='/' >Dashboard</Link>
          </li>
          <li className="list">
            <IoIosContact />
            <Link to ='/Addnewpage' >Addnewpage</Link>
          </li>
          <li className="list">
            <IoIosContact />
            <Link to ='/Edityourpages' >Edit your pages</Link>
          </li>
          <li className="list">
            <IoIosContact />
            <Link to ='/Addblogs' >Add Blogs</Link>
          </li>
        </div>
      )}
    </>
  );
};

export default Sidebar;
