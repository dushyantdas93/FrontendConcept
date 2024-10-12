import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <button>
        <Link to={"/"}> home</Link>
      </button>
      <button>
        <Link to={"/crud"}> crud</Link>
      </button>
      <button>
        <Link to={"/crousel"}> crousel</Link>
      </button>

      <button>
        <Link to={"/acordian"}> acordian</Link>
      </button>
      <button>
        <Link to={"/adminDashboard"}> adminDashboard</Link>
      </button>
      <button>
        <Link to={"/dashboard"}> dashboard</Link>
      </button>
      <button>
        <Link to={"/infiniteScrolling"}> infiniteScrolling</Link>
      </button>
      <button>
        <Link to={"/pagination"}> pagination</Link>
      </button>
      <button>
        <Link to={"/selectCountry"}> selectCountry</Link>
      </button>
      <button>
        <Link to={"/sidebarNavigation"}> sidebarNavigation</Link>
      </button>
      <button>
        <Link to={"/tabSwitching"}> tabSwitching</Link>
      </button>
    </div>
  );
};

export default Sidebar;
