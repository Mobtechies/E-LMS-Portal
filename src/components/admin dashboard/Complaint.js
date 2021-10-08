import React, { useEffect, useState } from 'react';
import {db} from "../../firebase"


const Abc = () => {
    const [complaint , setComplaint]  = useState([]);


    //   const fetchBlogs=async()=>{
    //     const response=db.collection('complaints');
    //     const data=await response.get();
    //     data.docs.forEach(item=>{
    //     //  setBlogs([...blogs,item.data()])
    //     setComplaint([...complaint , item.data()])
    //     })
    //   }
    //   useEffect(() => {
    //     fetchBlogs();
    //   }, [])

    //   const [complaint , setComplaint]  = useState([
    //   ]);
    
      useEffect(() => {
        // fetchBlogs()
        let arr = [];
        // let id = [];

         db.collection("complaints").get()
          .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
              // doc.data() is never undefined for query doc snapshots
              console.log( doc.data());
            //   setComplaint([...complaint , doc.data()])
              arr.push(doc.data());
            //   id.push(doc.id);
            });
        })
        // .catch((error) => {
        //     console.log("Error getting documents: ", error);
        // });
        
        setComplaint([...complaint,...arr ])
        console.log(arr)
        } , [])
        console.log(complaint)
    
      const accept = (id) => {
        db.collection("complaints").doc(id).update({status : "approved"})
      }
    
      const decline = (id) => {
        db.collection("complaints").doc(id).update({status : "decline"})
      }

    return (
        <div>
          {complaint && complaint.map((data, index) => {
            console.log(data);
            return (
            <div key={index}>
              <p>{data.title}</p>
              <p>{data.category}</p>
              <p>{data.description}</p>
              <p>{data.status}</p>
              {/* <button onClick={() => accept(data.id)}>Accept</button>
              <button onClick={() => decline(data.id)}>Decline</button> */}
            </div>
            )
})}
        </div>
    )
}

export default Abc