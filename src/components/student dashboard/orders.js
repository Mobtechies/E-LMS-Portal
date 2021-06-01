import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
    createData(2, '16 Mar, 2021', 'Faiza Iram', 'Bahawalpoor, MA', 'abc@gmail.com', "SRE"),
  createData(0, '16 Mar, 2021', 'Usama Javaid', 'Chaklala, Pakistan', 'cde@comsats.com', "ITM"),
  createData(4, '15 Mar, 2021', 'Mia Melano', 'Tench, NJ', 'efg@hotmail.com', "ICT"),
  createData(1, '16 Mar, 2021', 'Faiz Siddique', 'Gulistan Colony, UK', 'ghi@yahoo.com', "DLD"),
  createData(3, '16 Mar, 2021', 'Michael Jackson', 'Dhok Khabba, IN', 'xyz@.com', "SPM"),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Recent Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Teacher Name</TableCell>
            <TableCell>From</TableCell>
            <TableCell>Contact Mail</TableCell>
            <TableCell align="right">Course</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more Data
        </Link>
      </div>
    </React.Fragment>
  );
}