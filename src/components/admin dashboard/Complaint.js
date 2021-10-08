import React, { useEffect, useState } from 'react';
import {db} from "../../firebase"


const Abc = () => {
    const [complaint , setComplaint]  = useState([{}]);
    let map = new Object();
    

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
              console.log("1111"+ doc.data());
            //   setComplaint([...complaint , doc.data()])
              arr.push(doc.data());
            //   id.push(doc.id);
            });
            setComplaint([complaint,arr ])
            console.log('compaint = '+complaint);
      
        })
        // .catch((error) => {
        //     console.log("Error getting documents: ", error);
        // });
        // complaint = arr;

     
        } , []);
      
    
      const accept = (id) => {
        db.collection("complaints").doc(id).update({status : "approved"})
      }
    
      const decline = (id) => {
        db.collection("complaints").doc(id).update({status : "decline"})
      }

    return (
        <div>
          {complaint && complaint.map((data, index) => {
            console.log('CURRENT INDEX = '+index);
         map = data[index];
            console.log("TITLE FOR "+index);
          
            return(
            <div key={index}>
              <p>{map.title}</p>
              <p>{map.category}</p>
              <p>{map.description}</p>
              <p>{map.status}</p>
              {/* <button onClick={() => accept(data.id)}>Accept</button>
              <button onClick={() => decline(data.id)}>Decline</button> */}
            </div>
            )
        
})}
        </div>
    )
}

export default Abc