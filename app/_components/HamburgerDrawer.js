"use client";
import { Sling } from "hamburger-react";
import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function HamburgerDrawerCustom({ children }) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen((open) => !open);

  return (
    <span className="w-[50%] md:hidden z-50 absolute">
      <Sling
        label="appSidebar"
        rounded
        size={20}
        color="white"
        toggle={() => setOpen(!open)}
        toggled={open}
      />
      <Drawer
        className="bg-stone-500"
        lockBackgroundScroll
        open={open}
        onClose={toggleDrawer}
        direction="left"
        style={{
          backgroundColor: "#212B33",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          width: "15rem",
        }}
      >
        <span className="absolute top-0 right-0">
          <Sling
            label="appSidebar"
            rounded
            size={16}
            toggle={() => setOpen(!open)}
            toggled={open}
          />
        </span>
        {children}
      </Drawer>
    </span>
  );
}

export default HamburgerDrawerCustom;
