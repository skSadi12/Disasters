import React, { useState } from "react";

import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import logo from "/LOGO.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const menuItems = [
    "Dashboard",
    "Incidents",
    "Locations",
    "Activities",
    "Documents",
    "Cypher AI",
  ];

  return (
    <div className="border-b-2 border-black">
      <AppBar
        className="r"
        position="static"
        sx={{
          backgroundColor: "#E4E4E7",
          color: "black",
          paddingY: "10px",
        }}
      >
        <Toolbar>
          {isMobile ? (
            <div className="flex justify-between w-full items-center">
              <div>
                <img src={logo} alt="Logo" className="w-full" />
              </div>

              <div>
                <IconButton color="inherit" onClick={() => setOpen(true)}>
                  <MenuIcon sx={{ minHeight: "50px", minWidth: "40px" }} />
                </IconButton>
              </div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                width: "100%",
                paddingRight: "40px",
                paddingLeft: "40px",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Typography sx={{ flexGrow: 1 }}>
                <img
                  src={logo}
                  alt="Logo"
                  className="text-[#0FF1F6] md:w-full lg:w-36 min-h-10"
                />
              </Typography>
              <div className="flex gap-2 lg:gap-20 items-center md:gap-1">
                <div className="flex flex-wrap gap-2 ">
                  <div className="active:font-bold active:text-black text-[#A1A1AA] font-semibold active:border-b-3 active:border-black">
                    <Button color="inherit" sx={{ fontWeight: "bold" }}>
                      <Link to="/">Dashboard</Link>
                    </Button>
                  </div>
                  <div
                    className="active:font-bold active:text-black
                   text-[#A1A1AA] font-semibold active:border-b-3 active:border-black"
                  >
                    <Button color="inherit" sx={{ fontWeight: "bold" }}>
                      <Link to="/incidents">Incidents</Link>
                    </Button>
                  </div>
                  <div className="active:font-bold active:text-black text-[#A1A1AA] font-semibold active:border-b-3 active:border-black">
                    <Button color="inherit" sx={{ fontWeight: "bold" }}>
                      <Link to="">Locations</Link>
                    </Button>
                  </div>
                  <div className="active:font-bold active:text-black text-[#A1A1AA] font-semibold active:border-b-3 active:border-black">
                    <Button color="inherit" sx={{ fontWeight: "bold" }}>
                      <Link to="">Activities</Link>
                    </Button>
                  </div>
                  <div className="active:font-bold active:text-black text-[#A1A1AA] font-semibold active:border-b-3 active:border-black">
                    <Button color="inherit" sx={{ fontWeight: "bold" }}>
                      <Link to="">Documents</Link>
                    </Button>
                  </div>
                  <div className="active:font-bold active:text-black text-[#A1A1AA] font-semibold active:border-b-3 active:border-black">
                    <Button color="inherit" sx={{ fontWeight: "bold" }}>
                      <Link to="">Cypher AI</Link>
                    </Button>
                  </div>
                </div>
                <Typography>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-2">
                      <button className=" cursor-pointer ">
                        <img
                          src="/navring.png"
                          alt=""
                          className="min-h-[50px] min-w-[50px]"
                        />
                      </button>
                      <button className=" cursor-pointer ">
                        <img
                          src="/navpic.png"
                          alt=""
                          className="min-h-[50px] min-w-[50px]"
                        />
                      </button>

                      <div className="text-[#A1A1AA] hover:text-black ">
                        <p className="font-semibold">Usman Zafar</p>

                        <p className="text-[14px]">usmanzafar@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </Typography>
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List
          sx={{
            backgroundColor: "#E4E4E7",
            color: "black",
            minHeight: "100vh",
          }}
        >
          <ListItem>
            <img src={logo} alt="Logo" className="min-h-10" />
          </ListItem>

          <hr />

          <ListItem>
            <div className="flex flex-col gap-2 ">
              <div className="active:font-bold active:text-black text-[#A1A1AA] font-semibold active:border-b-3 active:border-black">
                <Button color="inherit" sx={{ fontWeight: "bold" }}>
                  <Link to="/">Dashboard</Link>
                </Button>
              </div>
              <div
                className="active:font-bold active:text-black
                   text-[#A1A1AA] font-semibold active:border-b-3 active:border-black"
              >
                <Button color="inherit" sx={{ fontWeight: "bold" }}>
                  <Link to="/incidents">Incidents</Link>
                </Button>
              </div>
              <div className="active:font-bold active:text-black text-[#A1A1AA] font-semibold active:border-b-3 active:border-black">
                <Button color="inherit" sx={{ fontWeight: "bold" }}>
                  <Link to="">Locations</Link>
                </Button>
              </div>
              <div className="active:font-bold active:text-black text-[#A1A1AA] font-semibold active:border-b-3 active:border-black">
                <Button color="inherit" sx={{ fontWeight: "bold" }}>
                  <Link to="">Activities</Link>
                </Button>
              </div>
              <div className="active:font-bold active:text-black text-[#A1A1AA] font-semibold active:border-b-3 active:border-black">
                <Button color="inherit" sx={{ fontWeight: "bold" }}>
                  <Link to="">Documents</Link>
                </Button>
              </div>
              <div className="active:font-bold active:text-black text-[#A1A1AA] font-semibold active:border-b-3 active:border-black">
                <Button color="inherit" sx={{ fontWeight: "bold" }}>
                  <Link to="">Cypher AI</Link>
                </Button>
              </div>
            </div>
          </ListItem>
          <div className="flex-col">
            <ListItem>
              <div className="flex gap-2">
                <div className="flex flex-col-reverse items-center gap-2">
                  <div className="text-[#A1A1AA] hover:text-black ">
                    <p className="font-semibold">Usman Zafar</p>

                    <p className="text-[14px]">usmanzafar@gmail.com</p>
                  </div>
                </div>
              </div>
            </ListItem>
          </div>
          <ListItem onClick={() => setOpen(false)}></ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default Navbar;
