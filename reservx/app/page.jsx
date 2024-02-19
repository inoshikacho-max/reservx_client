"use client"
// import { ID } from "appwrite";
import { useEffect, useState } from "react";
import { db } from "./appwrite";
import ReservationScreen from "./components/ReservationScreen";
// import Grid from "./components/Grid";
// import { useState } from "react";


async function getData() {
  // 'use server'
  // const res = await fetch()
  // // The return value is *not* serialized
  // // You can return Date, Map, Set, etc.

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error('Failed to fetch data')
  // }
  let promise = db.listDocuments(
    "65b0da7f5cc58e0cff7e",
    "65b0f5e876d1ef0f96b0",
  );

  // promise.then(function (response) {
  //   // console.log(response);
  // }, function (error) {
  //   console.log(error);
  // });
  const data = await promise;
  console.log(data);
  return data;
}

export default function Home() {
  const [list,setList] = useState([])
  
  useEffect(() => {
    const data = getData();
    data.then ((r)=> setList(r.documents))
      .catch((err)=>{console.log("Error: ", err)})
    // console.log(list);
  })
    // setList(data.documents)
  // const list = data.documents;
  // console.log(list);

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [dobDate,setDobDate] = useState("");
  // const [dobMonth,setDobMonth] = useState("");
  // const [dobYear,setDobYear] = useState("");
  // const [entDate,setEntDate] = useState("");
  // const [entMonth,setEntMonth] = useState("");
  // const [entYear,setEntYear] = useState("");
  // const [pax,setPax] = useState(0);
  // const [area,setArea] = useState("");
  // const [tableNumber,setTableNunber] = useState(0);

  // const addBooking = async () => {
  //   try {
  //     const promise = db.createDocument(
  //       '65b0da7f5cc58e0cff7e',
  //       '65b0f5e876d1ef0f96b0',
  //       ID.unique(),
  //       {}
  //     );

  //     promise.then(function (response) {
  //       console.log(response);
  //     }, function (error) {
  //       console.log(error);
  //     }).catch((err) => { console.log(err) });
  //     alert(`New Booking added with ID ${booking.id}`);
  //   } 
  //   catch (err) {
  //     alert('Error adding a new Booking');
  //   }
  // };

  return (
    <ReservationScreen list={list} />
    // <main className="flex min-h-screen flex-col items-center p-12 px-36">
    //   <header className="bg-white container rounded-lg h-32 px-8 flex items-center justify-between">
    //     <p className="text-3xl font-bold">Reservations</p>
    //   </header>
    //   <div className="flex-1 container mt-6 flex gap-6">
    //     <div className="bg-white flex-1 rounded-lg p-5">
    //       <p className="font-bold text-lg">Today's Reservations</p>
    //       <div className="px-3 overflow-y-auto max-h-96">
    //         <table className="container table-fixed border-separate border-spacing-y-6 rounded-lg">
    //           <thead>
    //             <tr className="">
    //               <th className=" text-xs text-start">Name</th>
    //               <th className=" text-xs text-start">DOB</th>
    //               <th className=" text-xs text-start">Table</th>
    //               <th className=" text-xs text-start">Guests</th>

    //             </tr>
    //           </thead>
    //           <tbody>
    //             {
    //               list.map((item) =>
    //                 <tr key={item.$id}>
    //                   <td className="text-xs">{item.firstname} {item.lastname}</td>
    //                   <td className="text-xs">{item.dateofbirth}</td>
    //                   <td className="text-xs">{item.area} {item.tableNumber}</td>
    //                   <td className="text-xs">{item.noofguests}</td>
    //                 </tr>
    //               )
    //             }
    //           </tbody>
    //         </table>
    //       </div>
    //     </div>
    //     <div className="bg-white rounded-lg w-[500px] p-5 flex flex-col gap-2">
    //       <p>Name</p>
    //       <div className="flex gap-2">
    //         <input type="text" placeholder="First Name" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
    //         <input type="text" placeholder="Last Name" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
    //       </div>
    //       <p>Date Of Birth</p>
    //       <div className="flex gap-2">
    //         <input type="text" placeholder="Date" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
    //         <input type="text" placeholder="Month" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
    //         <input type="text" placeholder="Year" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
    //       </div>
    //       <p>Reservation Details</p>
    //       <div className="flex gap-2">
    //         <div className="container flex flex-col gap-2">
    //           <p>Event Date</p>
    //           <div className="flex gap-2">
    //             <input type="text" placeholder="Date" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
    //             <input type="text" placeholder="Month" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
    //             <input type="text" placeholder="Year" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
    //           </div>
    //         </div>
    //         <div className="container flex flex-col gap-2">
    //           <p>PAX</p>
    //           <input type="text" placeholder="People" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
    //         </div>
    //       </div>
    //       <div className="flex gap-2">
    //         <div className="container flex flex-col gap-2">
    //           <p>Area</p>
    //           <input type="text" placeholder="Area" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
    //         </div>
    //         <div className="container flex flex-col gap-2">
    //           <p>Table</p>
    //           <input type="text" placeholder="Table" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
    //         </div>
    //       </div>
    //       <button className=" mt-2 hover:bg-emerald-800 text-sm font-bold bg-emerald-700 text-white px-12 py-3 rounded-md">ADD BOOKING</button>
    //     </div>
    //   </div>
    // </main>
  );
}
