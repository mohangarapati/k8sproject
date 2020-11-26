import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component';

export default ({data, handleSelectRow}) => {
    createTheme('solarized', {
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#cccccc',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      });

      const columns = [
        {
            name: '',
            cell: row => <p className="fsize-3">{row.type}</p>
        },
        
      ];
    return(
        
            <DataTable
                noHeader="true"
                columns={columns}
                theme="solarized"
                data={data}
                pagination="true"
                paginationPerPage="10"
                paginationRowsPerPageOptions={[10, 20, 30]}
                paginationComponentOptions={{rowsPerPageText: 'rows'}}
                highlightOnHover="true"
                pointerOnHover="true"
                onRowClicked={handleSelectRow}
            />
           
    )
}