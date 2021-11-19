import React, { useState } from "react";
import {db} from "../../firebase"
import { useAuth } from '../../context/AuthContext'

const ComplaintMenu = () => {
	const [complaint, setComplaint] = useState({
		complaintTitle: "",
		category: "",
		description: "",
	});
	const { complaintTitle, category, description } = complaint;
	const [titleLength, setTitleLength] = useState(0);
    const [show , setShow] = useState("")
    const [msg , setMsg] = useState("")
    // const {  currentUser } = useAuth()
    // console.log(currentUser)

	const categories = [
		"Water",
		"Electricity",
		"Gas",
		"Sewage",
		"Road",
		"Main-holes",
		"Street-Light",
	];

	const inputChangeHandler = (e) => {
		setComplaint({ ...complaint, [e.target.name]: e.target.value });
	};

	const getCategory = (value) => {
		console.log(value);
		setShow(false);
		setComplaint({ ...complaint, category: value });
	};
	console.log(category);

	const submit = (e) => {
		console.log(complaintTitle,  category, description);
		e.preventDefault();
		if (!complaintTitle || !category || !description) {
			console.log("Fill all fields");
			setMsg("Fill all fields")
		} else {
			db.collection("complaints").doc((Math.random().toString(32))).set({
        title: complaintTitle,
        category: category,
        description: description,
        status: "pending",
        // email: currentUser.email,
      });
	  setMsg("");
	  setComplaint({...complaint , complaintTitle: "", category: "" , description: ""})
	};
		}
    

	return (
		<div
			className="w-full flex"
			style={{
				// backgroundColor: "#F5F7FB",
				backgroundColor: "#fafafa",
			}}
		>

			<div className="w-full">
				<div className="p-10">
					<div className="mb-8">
						<h1 className="font-bold text-2xl  text-gray-700 ">Add Complaint</h1>
					</div>
					{msg ? <p style={{color: "red", width: "100%", textAlign: "center"}}>{msg}</p> : null}
					<form className="w-1/2 mx-auto relative" onSubmit={submit}>
						<div className="mb-6">
							<label className="font-semibold text-md mb-1 block">Complaint Title:</label>
							<textarea
								className="w-full ring-1 ring-gray-300 rounded px-2 text-lg focus:outline-none focus:ring-2 resize-none focus:ring-blue-400"
								type="text"
								rows="3"
								name="complaintTitle"
								value={complaintTitle}
								onChange={(e) => {
									// console.log(e.target.value.length);
									setTitleLength(e.target.value.length);
									if (e.target.value.length <= 80) {
										setComplaint({ ...complaint, complaintTitle: e.target.value });
									}
								}}
							></textarea>
							<small className="text-gray-400">{titleLength}/80</small>
						</div>
						<div className="mb-6">
							<label className="font-semibold text-md mb-1 block">Select Category:</label>
							<div
								className={
									"flex items-center w-full ring-1 ring-gray-300 h-12 px-4 text-lg focus:outline-none cursor-pointer bg-white " +
									(show ? "rounded-t" : "rounded")
								}
								onClick={() => setShow(!show)}
							>
								<input
									className="w-full px-4 text-lg focus:outline-none cursor-pointer"
							
									name="category"
									value={category}
									onChange={inputChangeHandler}
									readOnly
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="1"
									strokeLinecap="round"
									strokeLinejoin="round"
									className={
										"feather feather-chevron-down transform text-gray-600 " +
										(show ? "rotate-180" : "rotate-0")
									}
								>
									<polyline points="6 9 12 15 18 9"></polyline>
								</svg>
							</div>
							<ul
								className={
									"bg-white ring-1 ring-gray-300 rounded-b h-48 overflow-y-scroll scrollbar scrollbar-hidden hover:scrollbar-auto scrollbar-track-gray-300 scrollbar-thumb-gray-500 border-r " +
									(show ? "block " : "hidden")
								}
							>
								{categories.map((val) => (
									<li
										key={val}
										className="w-full border-t h-12 px-4 text-base hover:bg-gray-200 flex items-center"
										onClick={() => getCategory(val)}
									>
										{val}
									</li>
								))}
							</ul>
						</div>
						<div className="mb-6">
							<label className="font-semibold text-md mb-1 block">
								The Complaint is Regarding:
							</label>
							<textarea
								className="w-full ring-1 ring-gray-300 rounded px-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 py-2"
								name="description"
								rows="8"
								value={description}
								onChange={inputChangeHandler}
							></textarea>
						</div>
						<button
							type="submit"
							className="bg-blue-400 hover:bg-blue-500 mb-6 h-16 rounded text-white w-full font-semibold flex items-center justify-center"
						>
							<span className="mr-5">SUBMIT</span>
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ComplaintMenu;