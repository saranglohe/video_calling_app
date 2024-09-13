import React from "react";
import Hero from "./Hero";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Room from "./Room";

const Home = () => {

    const [value, setValue] = useState("");
    const navigateTo = useNavigate();

    const handlejionMeeting = () => {
        navigateTo(`/room/${value}`)
    }
    return (
        <>
            <Hero />
            <div>
                <h1>Join Meeting</h1>
                <div>
                    <input type="text" placeholder="Generating meeting id" value={value} onChange={(e) => setValue(e.target.value)}></input>
                </div>
                <button disabled={!value} onClick={handlejionMeeting}>Join Meeting</button>
            </div>
        </>
    )


}

export default Home
