import React from "react";
import styles from "../styles/sidebarmenu.module.scss"

import { AiOutlineUser, AiFillWechat } from "react-icons/Ai";
import {FaRegUserCircle} from "react-icons/Fa";
import {RxDotFilled} from "react-icons/Rx"
import {AiFillDashboard} from "react-icons/Ai"

const sidebarmenu = () => {
  return (
    <>
    <div className={styles.sidebar}>
         <div className={styles.sidebarheader} class="sidebar-header">
        <div className={styles.userpic} class="userpic">
            <FaRegUserCircle/>
          <i className={styles.sidebar} class="fa fa-user-circle fa-4x" aria-hidden="true"></i>
        </div>
        <div className={styles.userinfo} class="userinfo">
          <span className={styles.username} class="user-name"> <strong>Joe Chien</strong></span>
          <span className={styles.userrole} class="user-role">Administrator</span>
          <span className={styles.userstatus} class="user-status"><div className={styles.icon}><RxDotFilled className={styles.icon1}/></div><span>Online</span></span>
        </div>
      </div>
      <div className={styles.sidebarmenu}>
        <ul>
          {/* <li className={styles.headermenu} class="header-menu"><span>General</span></li> */}
          <li class="sidebar-dropdown" className={styles.sidebardropdown}>
            <a href="#"><AiFillDashboard className={styles.a1}/> Dashboard</a>
            {/* <div class="sidebar-submenu" className={styles.sidebarsubmenu}>
              <ul>
                <li><a href="#">Dashboard 1 <span class="badge badge-pill badge-success" className={styles.sidebarmenu}>Pro</span></a></li>
                <li><a href="#">Dashboard 2</a></li>
                <li><a href="#">Dashboard 3</a></li>
              </ul>
            </div> */}
          </li>
          </ul>
          {/* <!-- Dashboard --> */}
          {/* <li class="sidebar-dropdown">
            <a href="#"><i class="fa fa-shopping-cart"></i><span>E-commerce</span><span class="badge badge-pill badge-danger">3</span></a>
            <div class="sidebar-submenu">
              <ul>
                <li><a href="#">Products <span>Pro</span></a></li>
                <li><a href="#">Orders</a></li>
                <li><a href="#">Credit cart</a></li>
              </ul>
            </div>
          </li>
          <!-- E-commerce -->
          <li class="sidebar-dropdown">
            <a href="#"><i class="far fa-gem"></i><span>Components</span></a>
            <div class="sidebar-submenu">
              <ul>
                <li><a href="#">General</a></li>
                <li><a href="#">Panels</a></li>
                <li><a href="#">Tables</a></li>
                <li><a href="#">Icons</a></li>
                <li><a href="#">Forms</a></li>
              </ul>
            </div>
          </li>
          <!-- Components -->
          <li class="sidebar-dropdown">
            <a href="#"><i class="fa fa-chart-line"></i><span>Charts</span></a>
            <div class="sidebar-submenu">
              <ul>
                <li><a href="#">Pie chart</a></li>
                <li><a href="#">Line chart</a></li>
                <li><a href="#">Bar chart</a></li>
                <li><a href="#">Histogram</a></li>
              </ul>
            </div>
          </li>
          <!-- Charts -->
          <li class="sidebar-dropdown">
            <a href="#"><i class="fa fa-globe"></i><span>Maps</span></a>
            <div class="sidebar-submenu">
              <ul>
                <li><a href="#">Google maps</a></li>
                <li><a href="#">Open street map</a></li>
              </ul>
            </div>
          </li>
          <!-- Maps --> */}
          
          {/* <li class="header-menu"><span>Extra</span></li>
          <li><a href="#"><i class="fa fa-book"></i><span>Documentation</span><span class="badge badge-pill badge-primary">Beta</span></a></li>
          <li><a href="#"><i class="fa fa-calendar"></i><span>Calendar</span></a></li>
          <li><a href="#"><i class="fa fa-folder"></i><span>Examples</span></a></li>
        </ul> */}
      </div>
      <h1 className={styles.h1}>Brand</h1>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Portfolio</a>
      <a href="">Gallery</a>
      <a href="">Service</a>
      <a href="">Join</a>
      <a href="">Contact</a>
    </div>
  </>
  );
};

export default sidebarmenu;
