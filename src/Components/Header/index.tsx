import { AppBar, Toolbar, Typography } from "@mui/material";
import PlatformIcon from "./../../assets/platform-icon.png";

const Header = () => {
  return (
    <AppBar position={"static"} sx={{ backgroundColor: "#2dedd4" }}>
      <Toolbar>
        <img
          src={PlatformIcon}
          alt={"Plan Master"}
          style={{ width: "32px", height: "32px", marginRight: 8 }}
        />

        <Typography variant={"h6"} component={"div"} color={"textPrimary"}>
          Plan Master
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
