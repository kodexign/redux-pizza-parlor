import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Paper, TableContainer } from '@mui/material';
import { styled } from '@mui/system';

const Admin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/order')
      .then(response => {
        setOrders(response.data);
      })
      .catch(error => {
        console.log('Error fetching orders', error);
        alert('Error fetching orders');
      });
  }, []);

  const StyledTableCell = styled(TableCell)({
    backgroundColor: '#FFA500',
    color: '#FFFFFF',
    fontWeight: 'bold',
  });
  
  const StyledTableRow = styled(TableRow)({
    '&:nth-of-type(odd)': {
      backgroundColor: '#F5F5F5',
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  });
  
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Admin - Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Time order placed</StyledTableCell>
              <StyledTableCell>Type</StyledTableCell>
              <StyledTableCell>Total</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <StyledTableRow key={order.id}>
                <TableCell>{order.customer_name}</TableCell>
                <TableCell>{new Date(order.time).toLocaleString()}</TableCell>
                <TableCell>{order.type}</TableCell>
                <TableCell>${parseFloat(order.total).toFixed(2)}</TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Admin;