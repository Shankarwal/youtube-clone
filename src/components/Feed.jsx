import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";

const Feed = () => (
  <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
    <Box
      sx={{
        height: { sx: "auto", md: "92vh" },
        borderRight: "1px solid #3d3d3d",
        px: { sx: 0, md: 2 },
      }}
    >
      <Typography>Copyright &copy; 2023</Typography>
    </Box>
  </Stack>
);

export default Feed;
