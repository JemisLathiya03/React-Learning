import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

const BasicGrid = ({ rows, columns, loading }) => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      checkboxSelection
      loading={loading}
      pageSizeOptions={[5, 10, 25]}
      initialState={{
        pagination: {
          paginationModel: { pageSize: 5, page: 0 },
        },
      }}
    />
  );
};

export default BasicGrid;
