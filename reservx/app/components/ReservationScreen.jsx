"use client"
import { useEffect, useState } from 'react'
import { ID, db } from '../appwrite';
import { Query } from 'appwrite';



const ReservationScreen = ({ list }) => {
    // console.log(list);
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [dobDate, setDobDate] = useState("");
    // const [dobMonth, setDobMonth] = useState("");
    // const [dobYear, setDobYear] = useState("");
    // const [entDate, setEntDate] = useState("");
    // const [entMonth, setEntMonth] = useState("");
    // const [entYear, setEntYear] = useState("");
    // const [pax, setPax] = useState(0);
    // const [area, setArea] = useState("");
    // const [tableNumber, setTableNumber] = useState(0);
    // const [contactNumber, setContactNumber] = useState("");
    // const [referer, setReferer] = useState("");
    // const [specialNote, setSpecialNote] = useState("");
    // const [deskCharges, setDeskCharges] = useState(0);
    // const addBooking = async () => {
    //     // console.log(payload);

    //     const promise = db.createDocument(
    //         '65b0da7f5cc58e0cff7e',
    //         '65b0f5e876d1ef0f96b0',
    //         ID.unique(),
    //         {
    //             'firstname': firstName,
    //             'lastname': lastName,
    //             'noofguests': pax,
    //             'dateofbirth': `${dobDate} ${dobMonth} ${dobYear}`,
    //             'eventDate': `${entDate} ${entMonth} ${entYear}`,
    //             'area': area,
    //             'tableNumber': tableNumber,
    //             'contactNumber': contactNumber,
    //             'referrer': referer,
    //             'note': specialNote,
    //             'deskCharges': deskCharges
    //         }
    //     );

    //     promise.then(function (response) {
    //         alert('Your booking has been added!');
    //         window.location.reload();  // This will refresh the page.
    //         console.log(response);
    //     }, function (error) {
    //         console.log(error);
    //     }).catch((err) => { console.log(err) })
    // };

    // const handleDate = (flag) => {
    //     if (flag === "today") {
    //         let today = new Date();
    //         // let day = today.getDate();
    //         // let month = today.getMonth();
    //         // let year = today.getFullYear();
    //         setEntDate(today.getDate());
    //         setEntMonth(today.getMonth() + 1);
    //         setEntYear(today.getFullYear());
    //         console.log(`${entDate} ${entMonth} ${entYear}`);
    //     } else {
    //         let tommorow = new Date();
    //         let day = tommorow.getDate();
    //         let month = tommorow.getMonth();
    //         let year = tommorow.getFullYear();
    //         setEntDate(day + 1);
    //         setEntMonth(month + 1);
    //         setEntYear(year);
    //         console.log(`${entDate} ${entMonth} ${entYear}`);
    //     }
    // }

    const [tab, setTab] = useState('walkin');

    // const [selectedOption, setSelectedOption] = useState('');

    const [selectedOptions, setSelectedOptions] = useState({});

    const [idd, setIdd] = useState("");

    // Handler function to update selected option for a specific item
    const handleSelectChange2 = (itemId, value) => {
        setSelectedOptions((prevSelectedOptions) => ({
            ...prevSelectedOptions,
            [itemId]: value,
        }));
    };

    // Handler function to update selected option
    // const handleSelectChange = (event) => {
    //     setSelectedOption(event.target.value);
    // };

    // let doc = {};
    // const handleViewClick = async (id) => {
    //     setTab("reservation")
    //     //get the doucument

    //     let promise = db.listDocuments(
    //         "65b0da7f5cc58e0cff7e",
    //         "65b0f5e876d1ef0f96b0",
    //         [
    //             Query.equal('$id', id)
    //         ]
    //     );
    //     const data = await promise;
    //     // console.log(data.documents[0]);
    //     doc = data.documents[0];
    //     doc.flag = ["online", "view"]
    //     // console.log(document);
    // }

    const handleViewClick = (id) => {
        setIdd(id);
    }

    return (
        <main className="flex min-h-screen flex-col items-center py-12 px-20">
            <header className="bg-white container rounded-lg h-32 px-8 flex items-center justify-between">
                <p className="text-3xl font-bold">Reservations</p>
            </header>
            <div className="flex-1 container mt-6 flex gap-6">
                <div className="bg-white flex-1 rounded-lg p-5">
                    <p className="font-bold text-lg">Today's Reservations</p>
                    <div className="px-3 overflow-y-auto">
                        <table className="container table-fixed border-separate border-spacing-y-6 rounded-lg">
                            <thead>
                                <tr className="">
                                    <th className=" text-xs text-start">Name</th>
                                    {/* <th className=" text-xs text-start">DOB</th> */}
                                    <th className=" text-xs text-start">Table</th>
                                    <th className=" text-xs text-start">Guests</th>
                                    <th className='text-xs text-start'>Time</th>
                                    <th className=" text-xs text-start">Event Date</th>
                                    <th className=" text-xs text-start">Status</th>
                                    <th className=" text-xs text-start">Mode</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list.map((item) =>
                                        <tr key={item.$id}>
                                            <td className="text-xs">{item.firstname} {item.lastname}</td>
                                            {/* <td className="text-xs">{item.dateofbirth}</td> */}
                                            <td className="text-xs">{item.area} {item.tableNumber}</td>
                                            <td className="text-xs">{item.noofguests}</td>
                                            <td className='text-xs'>{item.time}</td>
                                            <td className='text-xs'>{item.eventDate}</td>
                                            <td className='text-xs'>
                                                <select id="dropdown" value={selectedOptions[item.$id] || ''} onChange={(e) => handleSelectChange2(item.$id, e.target.value)}>
                                                    <option value="">Select</option>
                                                    <option value="Confirmed">Confirmed</option>
                                                    <option value="Cancled">Cancled</option>
                                                    <option value="Waiting">Waiting</option>
                                                    <option value="CheckedIn">Checked In</option>
                                                    <option value="CheckedOut">Checked Out</option>
                                                </select>
                                                {/* {item.status} */}
                                            </td>
                                            <td className='text-xs'>{item.mode}</td>
                                            <td>
                                                <button onClick={() => handleViewClick(item.$id)} className='text-xs font-semibold bg-gray-200 px-2 py-1 rounded'>VIEW</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <div id='tabs' className='flex gap-2 mb-6'>
                        <button onClick={() => setTab('walkin')} className={tab === "walkin" ? "flex-1 text-sm font-bold bg-emerald-800 text-white py-5 rounded-md" : "flex-1 text-sm font-bold hover:bg-emerald-800 bg-emerald-600 text-white py-5 rounded-md"} >WALK INS</button>
                        <button onClick={() => setTab('reservation')} className={tab === "reservation" ? "flex-1 text-sm font-bold bg-emerald-800 text-white py-5 rounded-md" : "flex-1 text-sm font-bold hover:bg-emerald-800 bg-emerald-600 text-white py-5 rounded-md"}>RESERVATIONS</button>
                    </div>
                    {
                        tab === 'walkin' ? <WalkInForm id={idd} /> : <ReservationForm />
                    }
                </div>
            </div>
        </main>
    )
}

export default ReservationScreen

const WalkInForm = ({ id }) => {
    // console.log(id);
    const [formdata, setFormData] = useState({});
    const getDataById = async (idd) => {
        //get the document by id

        let promise = db.listDocuments(
            "65b0da7f5cc58e0cff7e",
            "65b0f5e876d1ef0f96b0",
            [
                Query.equal('$id', idd)
            ]
        );
        const data = await promise;
        // console.log(data);
        // console.log(data.documents[0]);
        let doc = data.documents[0];
        doc.flag = ["online", "view"]
        // console.log(doc,"dox");
        setFormData(doc);
    }

    useEffect(
        () => {
            if (id) {
                getDataById(id);
            }
        }, [id]
    );

    // console.log(formdata,"dox");
    // // getDataById(id)

    // console.log(formdata.firstname);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [dobDate, setDobDate] = useState("");
    // const [dobMonth, setDobMonth] = useState("");
    // const [dobYear, setDobYear] = useState("");
    const [entDate, setEntDate] = useState("");
    const [entMonth, setEntMonth] = useState("");
    const [entYear, setEntYear] = useState("");
    const [pax, setPax] = useState(0);
    const [area, setArea] = useState("");
    const [tableNumber, setTableNumber] = useState(0);
    const [contactNumber, setContactNumber] = useState("");
    const [referer, setReferer] = useState("");
    const [specialNote, setSpecialNote] = useState("");
    // const [deskCharges, setDeskCharges] = useState(0);
    const [time, setTime] = useState("");
    const [meridian, setMeridian] = useState("")

    const addBooking = async () => {
        if(id){
            const ack = await db.deleteDocument('65b0da7f5cc58e0cff7e', '65b0f5e876d1ef0f96b0', id);
            console.log(ack);
        }
        // console.log(payload);
        const promise = db.createDocument(
            '65b0da7f5cc58e0cff7e',
            '65b0f5e876d1ef0f96b0',
            ID.unique(),
            {
                'firstname': formdata.firstname ? formdata.firstname : firstName,
                'lastname': formdata.lastname ? formdata.lastname : lastName,
                'noofguests': pax,
                // 'dateofbirth': `${dobDate} ${dobMonth} ${dobYear}`,
                'eventDate': `${formdata.eventDate ? (formdata.eventDate)?.split(" ")[0] : entDate} ${formdata.eventDate ? (formdata.eventDate)?.split(" ")[1] : entMonth} ${formdata.eventDate ? (formdata.eventDate)?.split(" ")[2] : entYear}`,
                'area': area,
                'tableNumber': tableNumber,
                'contactNumber': formdata.contactNumber ? formdata.contactNumber : contactNumber,
                'referrer': formdata.referrer ? formdata.referrer : referer ,
                'note': formdata.note ? formdata.note : specialNote,
                // 'deskCharges': deskCharges,
                'status': 'Confirmed',
                'mode': 'WalkIn',
                'time': `${formdata.time ? (formdata.time).split(" ")[0] : time} ${formdata.time ? (formdata.time).split(" ")[1] : meridian}`
            }
        );

        promise.then(function (response) {
            alert('Your booking has been added!');
            window.location.reload();  // This will refresh the page.
            console.log(response);
        }, function (error) {
            console.log(error);
        }).catch((err) => { console.log(err) })
    };

    const handleDate = (flag) => {
        if (flag === "today") {
            let today = new Date();
            // let day = today.getDate();
            // let month = today.getMonth();
            // let year = today.getFullYear();
            setEntDate(today.getDate());
            setEntMonth(today.getMonth() + 1);
            setEntYear(today.getFullYear());
            console.log(`${formdata.eventDate ? (formdata.eventDate)?.split(" ")[0] : entDate} ${formdata.eventDate ? (formdata.eventDate)?.split(" ")[1]: entMonth} ${formdata.eventDate ? (formdata.eventDate)?.split(" ")[2] : entYear}`);
        } else {
            let tommorow = new Date();
            let day = tommorow.getDate();
            let month = tommorow.getMonth();
            let year = tommorow.getFullYear();
            setEntDate(day + 1);
            setEntMonth(month + 1);
            setEntYear(year);
            console.log(`${formdata.eventDate ? (formdata.eventDate)?.split(" ")[0] : entDate} ${formdata.eventDate ? (formdata.eventDate)?.split(" ")[1]: entMonth} ${formdata.eventDate ? (formdata.eventDate)?.split(" ")[2] : entYear}`);
        }
    }

    const handleTime = (time) => {
        setTime(time)
    }

    const handleMeridian = (m) => {
        setMeridian(m)
    }

    return (

        <div className="bg-white rounded-lg w-[500px] p-5 flex flex-col gap-2 overflow-y-auto">
            {/* <p>{formdata.firstname}</p> */}
            <p>Name</p>
            <div className="flex gap-2">
                <input value={formdata.firstname ? formdata.firstname : firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                <input value={formdata.lastname ? formdata.lastname : lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
            </div>
            {/* <p>Date Of Birth</p>
            <div className="flex gap-2">
                <input value={formdata ? formdata.dateofbirth : dobDate} onChange={(e) => setDobDate(e.target.value)} type="text" placeholder="Date" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                <input value={dobMonth} onChange={(e) => setDobMonth(e.target.value)} type="text" placeholder="Month" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                <input value={dobYear} onChange={(e) => setDobYear(e.target.value)} type="text" placeholder="Year" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
            </div> */}
            <p>Contact Number</p>
            <input type="text" value={formdata ? formdata.contactNumber : contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
            <p>Reservation Details</p>
            <div className="flex gap-2">
                <div className="container flex flex-col gap-2">
                    <p>Event Date</p>
                    <div className="flex gap-2">
                        <button onClick={() => handleDate('today')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>Today</button>
                        <button onClick={() => handleDate('tommorow')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>Tommorow</button>
                        <input value={formdata.eventDate ? (formdata.eventDate)?.split(" ")[0] : entDate} onChange={(e) => setEntDate(e.target.value)} type="text" placeholder="Date" className="w-16 bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        <input value={formdata.eventDate ? (formdata.eventDate)?.split(" ")[1] : entMonth} onChange={(e) => setEntMonth(e.target.value)} type="text" placeholder="Month" className="w-16 bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        <input value={formdata.eventDate ? (formdata.eventDate)?.split(" ")[2] : entYear} onChange={(e) => setEntYear(e.target.value)} type="text" placeholder="Year" className="w-16 bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                    </div>
                    <p>Time</p>
                    <div className="flex gap-2">
                        <button onClick={() => handleTime("7")} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>7</button>
                        <button onClick={() => handleTime("7:30")} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>7:30</button>
                        <button onClick={() => handleTime("8")} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>8</button>
                        <button onClick={() => handleTime("8:30")} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>8:30</button>
                        <button onClick={() => handleTime('9')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>9</button>
                        <button onClick={() => handleTime('9:30')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>9:30</button>
                        <input value={formdata.time ? formdata.time : time} onChange={(e) => setTime(e.target.value)} type="text" placeholder='Time' className='w-16 h-16 bg-gray-200 px-3 outline-none rounded placeholder:text-sm placeholder:text-black' />
                        <div className='flex flex-col gap-1'>
                            <button onClick={() => handleMeridian('AM')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>AM</button>
                            <button onClick={() => handleMeridian('PM')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>PM</button>
                        </div>
                    </div>
                    <div className="container flex gap-2">
                        <div className='flex flex-col gap-2'>
                            <p>PAX</p>
                            <input value={formdata.noofguests ? formdata.noofguests : pax} onChange={(e) => setPax(e.target.value)} type="number" placeholder="People" className="w-16 bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        </div>
                        <div className="container flex flex-col gap-2">
                            <p>Area</p>
                            <input value={area} onChange={(e) => setArea(e.target.value)} type="text" placeholder="Area" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        </div>
                        <div className="container flex flex-col gap-2">
                            <p>Table</p>
                            <input value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} type="number" placeholder="Table" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        </div>
                        {/* <div className="container flex flex-col gap-2">
                            <p>Desk Charges</p>
                            <input value={formdata ? formdata.deskCharges : deskCharges} onChange={(e) => setDeskCharges(e.target.value)} type="text" placeholder="Desk Charges" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <p>Reference</p>
                <input value={formdata.referrer ? formdata?.referrer : referer} onChange={(e) => setReferer(e.target.value)} type="text" placeholder="Reference" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
            </div>
            <div className='flex flex-col gap-2'>
                <p>Note</p>
                <input value={formdata.note ? formdata?.note : specialNote} onChange={(e) => setSpecialNote(e.target.value)} type="text" placeholder="Special Note" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
            </div>
            <button onClick={addBooking} className=" mt-2 hover:bg-emerald-800 text-sm font-bold bg-emerald-700 text-white px-12 py-3 rounded-md">ADD BOOKING</button>
        </div>
    )
}

const ReservationForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [dobDate, setDobDate] = useState("");
    // const [dobMonth, setDobMonth] = useState("");
    // const [dobYear, setDobYear] = useState("");
    const [entDate, setEntDate] = useState("");
    const [entMonth, setEntMonth] = useState("");
    const [entYear, setEntYear] = useState("");
    const [pax, setPax] = useState(0);
    const [area, setArea] = useState("");
    const [tableNumber, setTableNumber] = useState(0);
    const [contactNumber, setContactNumber] = useState("");
    const [referer, setReferer] = useState("");
    const [specialNote, setSpecialNote] = useState("");
    const [deskCharges, setDeskCharges] = useState(0);
    const [time, setTime] = useState("");
    const [meridian, setMeridian] = useState("")

    const addBooking = async () => {
        // console.log(payload);

        const promise = db.createDocument(
            '65b0da7f5cc58e0cff7e',
            '65b0f5e876d1ef0f96b0',
            ID.unique(),
            {
                'firstname': firstName,
                'lastname': lastName,
                'noofguests': pax,
                // 'dateofbirth': `${dobDate} ${dobMonth} ${dobYear}`,
                'eventDate': `${entDate} ${entMonth} ${entYear}`,
                'area': area,
                'tableNumber': tableNumber,
                'contactNumber': contactNumber,
                'referrer': referer,
                'note': specialNote,
                'deskCharges': deskCharges,
                'status': 'Confirmed',
                'mode': 'Online',
                'time': `${time} ${meridian}`
            }
        );

        promise.then(function (response) {
            alert('Your booking has been added!');
            window.location.reload();  // This will refresh the page.
            console.log(response);
        }, function (error) {
            console.log(error);
        }).catch((err) => { console.log(err) })
    };

    const handleDate = (flag) => {
        if (flag === "today") {
            let today = new Date();
            // let day = today.getDate();
            // let month = today.getMonth();
            // let year = today.getFullYear();
            setEntDate(today.getDate());
            setEntMonth(today.getMonth() + 1);
            setEntYear(today.getFullYear());
            console.log(`${entDate} ${entMonth} ${entYear}`);
        } else {
            let tommorow = new Date();
            let day = tommorow.getDate();
            let month = tommorow.getMonth();
            let year = tommorow.getFullYear();
            setEntDate(day + 1);
            setEntMonth(month + 1);
            setEntYear(year);
            console.log(`${entDate} ${entMonth} ${entYear}`);
        }
    }

    const handleTime = (time) => {
        setTime(time);
    }

    const handleMeridian = (m) => {
        setMeridian(m)
    }

    return (
        <div className="bg-white rounded-lg w-[500px] p-5 flex flex-col gap-2 overflow-y-auto">
            <p>Name</p>
            <div className="flex gap-2">
                <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="First Name" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Last Name" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
            </div>
            {/* <p>Date Of Birth</p>
            <div className="flex gap-2">
                <input value={dobDate} onChange={(e) => setDobDate(e.target.value)} type="text" placeholder="Date" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                <input value={dobMonth} onChange={(e) => setDobMonth(e.target.value)} type="text" placeholder="Month" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                <input value={dobYear} onChange={(e) => setDobYear(e.target.value)} type="text" placeholder="Year" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
            </div> */}
            <p>Contact Number</p>
            <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="Contact Number" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
            <p>Reservation Details</p>
            <div className="flex gap-2">
                <div className="container flex flex-col gap-2">
                    <p>Event Date</p>
                    <div className="flex gap-2">
                        <button onClick={() => handleDate('today')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>Today</button>
                        <button onClick={() => handleDate('tommorow')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>Tommorow</button>
                        <input value={entDate} onChange={(e) => setEntDate(e.target.value)} type="text" placeholder="Date" className="w-16 bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        <input value={entMonth} onChange={(e) => setEntMonth(e.target.value)} type="text" placeholder="Month" className="w-16 bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        <input value={entYear} onChange={(e) => setEntYear(e.target.value)} type="text" placeholder="Year" className="w-16 bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                    </div>
                    <p>Time</p>
                    <div className="flex gap-2">
                        <button onClick={() => handleTime("7")} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>7</button>
                        <button onClick={() => handleTime("7:30")} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>7:30</button>
                        <button onClick={() => handleTime("8")} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>8</button>
                        <button onClick={() => handleTime("8:30")} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>8:30</button>
                        <button onClick={() => handleTime('9')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>9</button>
                        <button onClick={() => handleTime('9:30')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>9:30</button>
                        <input value={time} onChange={(e) => setTime(e.target.value)} type="text" placeholder='Time' className='w-16 h-16 bg-gray-200 px-3 outline-none rounded placeholder:text-sm placeholder:text-black' />
                        <div className='flex flex-col gap-1'>
                            <button onClick={() => handleMeridian('AM')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>AM</button>
                            <button onClick={() => handleMeridian('PM')} className='h-16 flex-1 bg-emerald-100 hover:bg-emerald-300 text-sm rounded px-2 font-bold'>PM</button>
                        </div>
                    </div>
                    <div className="container flex gap-2">
                        <div className='flex flex-col gap-2'>
                            <p>PAX</p>
                            <input value={pax} onChange={(e) => setPax(e.target.value)} type="number" placeholder="People" className="w-16 bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        </div>
                        <div className="container flex flex-col gap-2">
                            <p>Area</p>
                            <input value={area} onChange={(e) => setArea(e.target.value)} type="text" placeholder="Area" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        </div>
                        <div className="container flex flex-col gap-2">
                            <p>Table</p>
                            <input value={tableNumber} onChange={(e) => setTableNumber(e.target.value)} type="number" placeholder="Table" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        </div>
                        {/* <div className="container flex flex-col gap-2">
                            <p>Desk Charges</p>
                            <input value={deskCharges} onChange={(e) => setDeskCharges(e.target.value)} type="text" placeholder="Table" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <p>Reference</p>
                <input value={referer} onChange={(e) => setReferer(e.target.value)} type="text" placeholder="Reference" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
            </div>
            <div className='flex flex-col gap-2'>
                <p>Note</p>
                <input value={specialNote} onChange={(e) => setSpecialNote(e.target.value)} type="text" placeholder="Special Note" className="w-full bg-gray-200 px-3 rounded outline-none h-16 placeholder:text-sm placeholder:text-black" />
            </div>
            <button onClick={addBooking} className=" mt-2 hover:bg-emerald-800 text-sm font-bold bg-emerald-700 text-white px-12 py-3 rounded-md">ADD BOOKING</button>
        </div>
    )
}