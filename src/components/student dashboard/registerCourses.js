// import React, { useState, useEffect } from "react";
// import Link from "@material-ui/core/Link";
// import { makeStyles } from "@material-ui/core/styles";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Title from "./title";
// import { db } from "../../firebase";

// // Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
// 	return { id, date, name, shipTo, paymentMethod, amount };
// }

// const rows = [
// 	createData(2, "16 Mar, 2021", "Faiza Iram", "Bahawalpoor, MA", "abc@gmail.com", "SRE"),
// 	createData(0, "16 Mar, 2021", "Usama Javaid", "Chaklala, Pakistan", "cde@comsats.com", "ITM"),
// 	createData(4, "15 Mar, 2021", "Mia Melano", "Tench, NJ", "efg@hotmail.com", "ICT"),
// 	createData(1, "16 Mar, 2021", "Faiz Siddique", "Gulistan Colony, UK", "ghi@yahoo.com", "DLD"),
// 	createData(3, "16 Mar, 2021", "Michael Jackson", "Dhok Khabba, IN", "xyz@.com", "SPM"),
// ];

// function preventDefault(event) {
// 	event.preventDefault();
// }

// // export function Abc(props) {
// // 	return (
// // 		<div>
// // 			{props.data.map((data) => {
// // 				console.log(data);
// // 				<div key={data.course_id}>
// // 					<p>{data.course_name}</p>
// // 					<p>{data.course_code}</p>
// // 				</div>;
// // 			})}
// // 		</div>
// // 	);
// // }

// const useStyles = makeStyles((theme) => ({
// 	seeMore: {
// 		marginTop: theme.spacing(3),
// 	},
// }));

// export default function Orders() {
// 	const classes = useStyles();
// 	let [courses, setCourses] = useState([]);

// 	useEffect(async () => {
// 		let arr = [];
// 		// .where("registerNumber", "==", `currentUser.uid`)
// 		await db
// 			.collection("studentRegisterCourses")
// 			.where("registerNumber", "==", "SP18-BSE-120")
// 			.get()
// 			.then((querySnapshot) => {
// 				querySnapshot.forEach((doc) => {
// 					console.log(doc.data());
// 					arr.push({ id: doc.id, data: doc.data() });
// 				});
// 			});
// 		console.log(arr);
// 		setCourses(arr);
// 	}, []);

// 	return (
// 		<div>
// 			{/* <Title>Courses</Title> */}
// 			<div className="">
// 				{courses.map((c) => {
// 					console.log(c.data);
// 					<div key={c.id}>
// 						<p>{c.data.student}</p>
// 						<p>{c.data.course_code}</p>
// 					</div>;
// 					// <Abc key={c.id} data={c.data.registerCourse} />;
// 				})}
// 				{/* <Link color="primary" href="#" onClick={preventDefault}>
//           See more Data
//         </Link> */}
// 			</div>
// 		</div>
// 	);
// }
import React, { useEffect, useState } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./title";
import { db } from "../../firebase";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
	return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
	createData(2, "16 Mar, 2021", "Faiza Iram", "Bahawalpoor, MA", "abc@gmail.com", "SRE"),
	createData(0, "16 Mar, 2021", "Usama Javaid", "Chaklala, Pakistan", "cde@comsats.com", "ITM"),
	createData(4, "15 Mar, 2021", "Mia Melano", "Tench, NJ", "efg@hotmail.com", "ICT"),
	createData(1, "16 Mar, 2021", "Faiz Siddique", "Gulistan Colony, UK", "ghi@yahoo.com", "DLD"),
	createData(3, "16 Mar, 2021", "Michael Jackson", "Dhok Khabba, IN", "xyz@.com", "SPM"),
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
	const [courses, setCourses] = useState([]);
	const [reload, setReload] = useState(true);
	const [register, isRegister] = useState(true);

	useEffect(async () => {
		let arr = [];
		await db
			.collection("courses")
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					console.log(doc.data());
					arr.push({ id: doc.id, data: doc.data() });
				});
			});
		console.log(arr);
		// console.log(complaint);
		setCourses(arr);
	}, [reload]);

	const user_id = "abc123456";

	const registerCourse = async (id, name, code) => {
		await db.collection("studentRegisterCourses").doc(user_id).set({
			student: "Usama",
			registerNumber: "SP18-BSE-120",
			course_id: id,
			course_name: name,
			course_code: code,
		});
	};

	return (
		<React.Fragment>
			<Title>Course Registration</Title>
			<Table size="small">
				<TableHead>
					<TableRow>
						<TableCell>Code</TableCell>
						<TableCell>Name</TableCell>
						<TableCell align="center">Regsiter Course</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{courses.map((course) => (
						<TableRow key={course.id}>
							{/* <TableCell>{row.date}</TableCell> */}
							<TableCell>{course.data.code}</TableCell>
							<TableCell>{course.data.title}</TableCell>
							<TableCell>
								{register ? (
									<button 
										className="registerbutton1"
										onClick={() => {
											// isRegister(false);
											registerCourse(course.id, course.data.title, course.data.code);
										}}
									>
										Register
									</button>
								) : (
									<button className="bg-red-600">Unregister</button>
								)}
							</TableCell>
							{/* <TableCell align="right">{row.amount}</TableCell> */}
						</TableRow>
					))}
				</TableBody>
			</Table>
			<div className={classes.seeMore}>
				{/* <Link color="primary" href="#" onClick={preventDefault}>
          See more Data
        </Link> */}
			</div>
		</React.Fragment>
	);
}

