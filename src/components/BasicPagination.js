import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./BasicPagination.css";

export default function BasicPagination({ getPaginationInput }) {
  // console.log("getPaginationInput :>> ", getPaginationInput);
  return (
    <Stack spacing={2} className="pagination">
      <Pagination
        count={42}
        onChange={(e) => {
          // console.log(e.target.innerText);
          getPaginationInput(e.target.innerText);
        }}
      />
    </Stack>
  );
}
