import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    p={2}
    alignItems="center"
    sx={{
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
      // background: "#56ade7",
      width: "100vw",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="Youtube -clone" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
