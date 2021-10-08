import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

const Abc = () => {
	const [complaint, setComplaint] = useState([]);

	useEffect(async () => {
		let arr = [];
		await db
			.collection("complaints")
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					arr.push({ id: doc.id, data: doc.data() });
				});
			});
		console.log(arr);
		console.log(complaint);
		setComplaint(arr);
	}, []);

	return (
		<div className="my-16">
			{complaint &&
				complaint.map((data, index) => {
					// console.log(data);
					return (
						<div key={index} className="flex items-center justify-center">
							<div className="w-full md:w-1/2 lg:w-2/3 border shadow-mainShadow border-gray-200 p-4 mb-4 rounded-lg hover:shadow-lg">
								<div className="mt-2">
									{/* Title */}
									<p className="text-base font-medium pb-2 text-gray-800">
										<span className="font-semibold">Title : </span>
										{data.data.title}
									</p>
									{/* Category */}
									<p className="text-base font-medium pb-2 text-gray-800">
										<span className="font-semibold">Category : </span>
										{data.data.category}
									</p>
									{/* Area */}
									<p className="text-base font-medium pb-2 text-gray-800">
										<span className="font-semibold">Description : </span>
										{data.data.description}
									</p>
									<p className="break-all text-base font-medium pb-0 text-gray-800">
										<span className="font-semibold">status : </span>
										{data.data.status}
									</p>
								</div>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default Abc;
