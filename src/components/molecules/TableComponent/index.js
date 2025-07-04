import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



export default function TableComponent({columns = [], rows=[], rowId}) {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
                initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
                   },
        }}
        pageSizeOptions={[5, 10]}
        rowsPerPageOptions={[10, 50]}
        checkboxSelection
      />
    </div>
  );
}
