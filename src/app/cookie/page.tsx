"use client"
import axios from "axios";
import { useState } from "react";
export default function Cookie() {
    const [Name, setName] = useState("");

    const handleCookie = async() => {

        const res = await axios.post('/api/genCookie', { name: Name });

        console.log(res)
     
    }
    const handlegetCookie = async() => {

        const res = await axios.get('/api/accessCookie');

        console.log(res)
     
    }



    return (
        <div className="flex flex-col min-h-screen  justify-center items-center  p-24 bg-slate-600">
            <label htmlFor="name" className="p-2 m-2">Name</label>
            <input type="text" className="p-2 px-2 m-2 rounded-2xl" placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} id="name" />
            <h1 onClick={handleCookie} className="text-3xl cursor-pointer text-white bg-slate-800 p-4 rounded-2xl">Cookie</h1>
            <h2 className="text-3xl cursor-pointer text-white bg-slate-800 p-4 rounded-2xl m-2"onClick={handlegetCookie}>Get your cookie</h2>
        </div>
    );
}


