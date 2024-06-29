import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import '../../../styles/Dashboard/Table.css'
import UsersReview from '../Rightside/UsersReview';

function createData(name, requestId, date, status) {
  return { name, requestId, date, status };
}

const rows = [
  createData("Vaishnavi", 18908424, "2 March 2022", "1,00,000"),
  createData("Mohitha", 18908424, "13 May 2022", "90,000"),
  createData("Siddhartha", 18908424, "29 March 2022", "70,500"),
  createData("Udhay", 18908421, "17 December 2022", "5,000"),
];

const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}


const RequestTable = () => {
  return (
    <div className='Table-wrapper'>
      <div className='Table'>
          <h3>Recent Donations</h3>
      <TableContainer
            component={Paper}
            style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Payment ID</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Amount</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody style={{ color: "white" }}>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.requestId}</TableCell>
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">
                      <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                    </TableCell>
                    <TableCell align="left" className="Details">Details</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>    
      </div>
      <div className='UserReviews'>
        <h3>User Reviews</h3>
        <UsersReview />
      </div>
    </div>
  )
}

export default RequestTable