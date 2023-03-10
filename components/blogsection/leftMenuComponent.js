import React from 'react';
import SidebarMenu from 'react-bootstrap-sidebar-menu';
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";


const leftmenu = () => {
  return (
    <div>
      <SidebarMenu>
        <SidebarMenu.Header>
          <SidebarMenu.Brand>
            {/* Your brand icon */}
            <img width="168" height="40" src="https://www.vaimanagement.co/images/logo/vai-h-b.svg" alt="Tech News" decoding="async"/>
          </SidebarMenu.Brand>
          <SidebarMenu.Toggle />
        </SidebarMenu.Header>
        <SidebarMenu.Body>
          <SidebarMenu.Nav>
            <SidebarMenu.Nav.Link>
              <SidebarMenu.Nav.Icon>
              <AiOutlineUser/>
                {/* Menu item icon */}
              </SidebarMenu.Nav.Icon>
              <SidebarMenu.Nav.Title>
                {/* Menu item title */}
              </SidebarMenu.Nav.Title>
            </SidebarMenu.Nav.Link>
          </SidebarMenu.Nav>
          <SidebarMenu.Sub>
            <SidebarMenu.Sub.Toggle>
              <SidebarMenu.Nav.Icon />
              <SidebarMenu.Nav.Title>
                {/* Submenu title */}
              </SidebarMenu.Nav.Title>
            </SidebarMenu.Sub.Toggle>
            <SidebarMenu.Sub.Collapse>
              <SidebarMenu.Nav>
                <SidebarMenu.Nav.Link>
                  <SidebarMenu.Nav.Icon>
                    {/* Submenu item icon */}
                  </SidebarMenu.Nav.Icon>
                  <SidebarMenu.Nav.Title>
                    {/* Submenu item title */}
                  </SidebarMenu.Nav.Title>
                </SidebarMenu.Nav.Link>
              </SidebarMenu.Nav>
            </SidebarMenu.Sub.Collapse>
          </SidebarMenu.Sub>
        </SidebarMenu.Body>
      </SidebarMenu>
    </div>
  );
};

export default leftmenu;
