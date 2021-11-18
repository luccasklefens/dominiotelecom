import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { DataGrid } from '@mui/x-data-grid';


const useStyles = makeStyles({
    
});

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'razaosocial', headerName: 'Razão Social', width: 160 },
    { field: 'cnpj', headerName: 'CNPJ', width: 160 },
    { field: 'email', headerName: 'E-mail', width: 170 },
  ];
  
  const rows = [
    { id: 1, razaosocial: 'Padaria', cnpj: '12345678915478', email: 'ex1@yahoo.com.br' },
    { id: 2, razaosocial: 'Farmácia', cnpj: '123456', email: 'ex2@yahoo.com.br' },
    { id: 3, razaosocial: 'Tecnologia', cnpj: '123456', email: 'ex3@yahoo.com.br' },
    { id: 4, razaosocial: 'Mercado', cnpj: '123456', email: 'ex4@yahoo.com.br' },
    { id: 5, razaosocial: 'Shopping', cnpj: '123456', email: null },
    { id: 6, razaosocial: 'Lanchonete', cnpj: '123456', email: 'ex5@yahoo.com.br' },
    { id: 7, razaosocial: 'Pizzaria', cnpj: '123456', email: 'ex6@yahoo.com.br' },
    { id: 8, razaosocial: 'Temakeria', cnpj: '123456', email: null },
    { id: 9, razaosocial: 'Churrascaria', cnpj: '123456', email: 'ex7@yahoo.com.br' },
  ];

function Tabelas(){
    return (
        <div style={{ height: 700, width: '100%', minWidth: 700 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    )
}

export default Tabelas;