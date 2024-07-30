"use client"
import axios from "axios";
export default function Cookie() {

    const handleCookie = async() => {

        const res = await axios.get('/api/genCookie');

        console.log(res)
     
    }



    return (
        <div className="flex min-h-screen  justify-center items-center  p-24 bg-slate-600">
            <h1 onClick={handleCookie} className="text-3xl cursor-pointer text-white bg-slate-800 p-6 rounded-2xl">Cookie</h1>
        </div>
    );
}


