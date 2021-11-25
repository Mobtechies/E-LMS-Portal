import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./title";
import { db } from "../../utils/init-firebase";
import { AccessTimeSharp } from "@material-ui/icons";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    2,
    "16 Mar, 2021",
    "Faiza Iram",
    "Bahawalpoor, MA",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    0,
    "16 Mar, 2021",
    "Usama Javaid",
    "Chaklala, Pakistan",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    4,
    "15 Mar, 2021",
    "Mia Melano",
    "Tench, NJ",
    "VISA ⠀•••• 5919",
    212.79
  ),
  createData(
    1,
    "16 Mar, 2021",
    "Faiz Siddique",
    "Gulistan Colony, UK",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    3,
    "16 Mar, 2021",
    "Michael Jackson",
    "Dhok Khabba, IN",
    "AMEX ⠀•••• 2000",
    654.39
  ),
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
  const [complaint, setComplaint] = useState([
    {
      id: "",
      data: "",
    },
  ]);

  // useEffect(async () => {
  //   await db
  //     .collection("complaints")
  //     .get()
  //     .then((querySnapshot) => {
  //       querySnapshot.forEach((doc) => {
  //         // doc.data() is never undefined for query doc snapshots
  //         // console.log( doc.data());
  //         setComplaint([{ ...complaint, id: doc.id, data: doc.data() }]);
  //       });
  //     })
  //     .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //     });

  //   // console.log(complaint)
  // }, []);

  const accept = (id) => {
    db.collection("complaints").doc(id).update({ status: "approved" });
  };

  const decline = (id) => {
    db.collection("complaints").doc(id).update({ status: "decline" });
  };

  return (
    <React.Fragment>
      <Title>Recent Data</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>From</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Payed Amount</TableCell>
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

      <div>
        {complaint &&
          complaint.map((data) => {
            console.log(data);
            return (
              <div key={data.id}>
                <p>{data.data.title}</p>
                <p>{data.data.category}</p>
                <p>{data.data.description}</p>
                <p>{data.data.status}</p>
                <button onClick={() => accept(data.id)}>Accept</button>
                <button onClick={() => decline(data.id)}>Decline</button>
              </div>
            );
          })}
      </div>
      <div className={classes.seeMore}>
        {/* <Link color="primary" href="#" onClick={preventDefault}>
          See more Data
        </Link> */}
      </div>
    </React.Fragment>
  );
}
