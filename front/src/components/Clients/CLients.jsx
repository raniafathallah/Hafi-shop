import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getUsers } from '../../services/Users/GetUsers';
import  { useState, useEffect } from 'react';





const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: ' Name', width: 130 },
  { field: 'email ', headerName: 'Email', width: 130 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 90,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.Name || ''} ${params.row.lastName || ''}`,
//   },
];

const rows = [
  { id: 1, lastName: 'Snow', Name: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', Name: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', Name: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', Name: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', Name: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', Name: null, age: 150 },
  { id: 7, lastName: 'Clifford', Name: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', Name: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', Name: 'Harvey', age: 65 },
];

export default function Clients() {
     const [users,setUsers]=useState([]);

     const fetchLocalUsers = async () => { 
          await getUsers();
           const local_Users= await JSON.parse(localStorage.getItem('users'));
           setUsers(local_Users.data.data);
            console.log(local_Users);
       } 
       useEffect(() => {
            fetchLocalUsers();
            return () => {
                 localStorage.removeItem('users'); 
            }
       }, [users])


  return (
    <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      /> */}

{users.map((user) => {
                    return (
                        <div key={user._id} className="flex align-items-center">
                            <label htmlFor={user._id} className="ml-2">
                            {user._id}  !!  {user.name}  !! {user.email}
                            </label>
                        </div>
                    );
                })}

    </div>
  );
}