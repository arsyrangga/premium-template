import React from "react";

function Sidebar() {
  return (
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link" href="/">
            <i class="mdi mdi-view-dashboard-outline menu-icon"></i>
            <span class="menu-title">Artikel</span>
          </a>
        </li>

        {/* <li class="nav-item">
          <a
            class="nav-link"
            data-toggle="collapse"
            href="#charts"
            aria-expanded="false"
            aria-controls="charts"
          >
            <i class="mdi mdi-finance menu-icon"></i>
            <span class="menu-title">Charts</span>
            <i class="menu-arrow"></i>
          </a>
          <div class="collapse" id="charts">
            <ul class="nav flex-column sub-menu">
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="pages/charts/chartjs.html">
                  ChartJs
                </a>
              </li>
              <li class="nav-item">
                {" "}
                <a class="nav-link" href="pages/charts/morris.html">
                  Morris
                </a>
              </li>
            </ul>
          </div>
        </li> */}
      </ul>
    </nav>
  );
}

export default Sidebar;
