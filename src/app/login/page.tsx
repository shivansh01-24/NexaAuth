"use client";

import {useState} from "react";

export default function LoginPage(){
    const[email, setEmail]= useState("");
    return(
        <main>
            <h1>login</h1>

            <input type="email" placeholder="enter your email" value={email} onChange={(event)=>setEmail(event.target.value)} 
            />

            <p>Current email: {email}</p>
            
        </main>

    );
}