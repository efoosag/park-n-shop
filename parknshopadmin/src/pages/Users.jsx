import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { DeleteOutline } from '@mui/icons-material';
import { userRows } from '../data';

const User = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`
const Button = styled.button`
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: #78f378;
  color: #fff;
`

const Users = () => {
  const [data, setRowsData] = useState(userRows)

  const handleDelete = (id) => {
    setRowsData(data.filter((item) => item.id !== id))
  }

  const columns =  [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 150,
      editable: true,
      renderCell: (params) => {
        return (
          <User>
            <Image src={params.row.profile_pic} />
            {params.row.username}
          </User>
        )
      }
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',    
      width: 110,
      editable: true,
    },
    {
      field: 'transaction',
      headerName: 'transaction',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,    
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <ButtonContainer>
            <Link to={"/user/"+params.row.id}>
             <Button>Edit</Button>
            </Link>          
            <DeleteOutline style={{color: 'red', cursor: 'pointer'}} onClick={()=>handleDelete(params.row.id) }/>          
          </ButtonContainer>
        )
      }
    },
  ];

  return (
    <div>
       <Box sx={{ height: 550, width: '100%' }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 8,
              },
            },
          }}
          pageSizeOptions={[8]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  )
}

export default Users