import React from "react";
import { useState } from "react";
import { TabContext } from "@material-ui/lab";
import { TabList } from "@material-ui/lab";
import { TabPanel } from "@material-ui/lab";
import { Button, Link, Tab, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import Jenna from "./images/Jenna.jpeg";
import homePage from "./images/homepage.jpeg";
import { aboutText, servicesText, contactMeText } from "./pagesText";
import "./pages.css";
import { Stack } from "@mui/system";
import theme from "../Theme/Theme";

const Pages = () => {
  const [value, setValue] = useState("1");
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    newValue: string
  ) => {
    return setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            TabIndicatorProps={{ style: { backgroundColor: "black" } }}
          >
            <Tab
              label={<span style={{ color: "white" }}>Home</span>}
              value="1"
            />
            <Tab
              label={<span style={{ color: "white" }}>About</span>}
              value="2"
            />
            <Tab
              label={<span style={{ color: "white" }}>Services</span>}
              value="3"
            />

            <Tab
              label={<span style={{ color: "white" }}>Contact me</span>}
              value="4"
            />
          </TabList>
        </Box>

        <TabPanel value="1" className="text">
          {!matches && (
            <Stack spacing={2} alignItems="flex-end">
              <img
                src={homePage}
                alt="Jenna"
                width="100%"
                height="auto"
                className="Jenna-image"
              />
              <Link
                href="https://www.xplace.com/u/jennaczech27155"
                target="_blank"
                color="inherit"
                fontSize="x-large"
              >
                Check out my xplace page
              </Link>
            </Stack>
          )}
          {matches && (
            <Stack spacing={2} alignItems="center">
              <img
                src={homePage}
                alt="Jenna"
                width="100%"
                height="auto"
                className="Jenna-image"
              />
              <Link
                href="https://www.xplace.com/u/jennaczech27155"
                target="_blank"
                color="inherit"
                fontSize="x-large"
              >
                Check out my xplace page
              </Link>
            </Stack>
          )}

          <Box
            sx={{
              display: "flex",
              marginTop: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => setValue("2")}
              variant="outlined"
              color="inherit"
            >
              Learn more about me!
            </Button>
          </Box>
        </TabPanel>
        <TabPanel value="2" className="otherText">
          <h1 className="text">About me</h1>
          <img
            src={Jenna}
            alt="Jenna"
            width="400"
            height="400"
            className="Jenna-image"
          />

          <p className="text">{aboutText}</p>
        </TabPanel>
        <TabPanel value="3" className="otherText">
          <h1>How I work</h1>
          <p>{servicesText}</p>
          <h3>Examples: </h3>

          <Stack spacing={2}>
            <Link
              href="https://drive.google.com/file/d/1dKKkew5CY3_zmBICSH5muJha6Tgao9PD/view?usp=sharing"
              color="inherit"
              target="_blank"
            >
              Example 1
            </Link>
            <Link
              href="https://drive.google.com/file/d/1sh7oQuAw5FlkGUKiJH-nqNJIBRoJYejL/view?usp=sharing"
              color="inherit"
              target="_blank"
            >
              Example 2
            </Link>
          </Stack>
        </TabPanel>

        <TabPanel value="4" className="otherText">
          <h1>Contact me</h1>
          <p>Email: jennaczech27155@gmail.com</p>
          <p>Phone: (951)-447-2124</p>
          <p>{contactMeText}</p>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default Pages;
