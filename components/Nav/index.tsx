import * as React from "react";
import Link from "../Link";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";

import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuIcon from "@mui/icons-material/Menu";
import TextsmsIcon from "@mui/icons-material/Textsms";
const drawerWidth = 240;

export default function Nav() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "left" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} href={`/`}>
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText primary={"Collars Lab."} />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component={Link} href={`/feed`}>
            <ListItemIcon>
              <TextsmsIcon />
            </ListItemIcon>
            <ListItemText primary={"Контакты"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, color: "#FFFFFF", display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component={Link}
            href="/"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "#FFFFFF",
              fontSize: 16,
            }}
          >
            Collars Lab.
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link href="/feed">
              <Button sx={{ color: "#fff" }}>
                <TextsmsIcon sx={{ color: "#fff", mr: 1 }} />
                Обратная связь
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </Box>
  );
}
