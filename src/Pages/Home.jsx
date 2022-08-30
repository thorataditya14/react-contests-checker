import React from 'react'
import './Home.css';
import Contest from '../Components/Contest.jsx';
import Axios from "axios";
import { useState, useEffect } from "react";


function Home() {
    const [searchTerm, setSearchTerm] = useState("");
    const [contests, setContests] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [contestAPI, setContestAPI] = useState("https://kontests.net/api/v1/all");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        setIsLoading(true);
        Axios.get(
            contestAPI
        ).then((response) => {
            console.log(response.data);
            setIsLoading(false);
            setContests(response.data);
        });
    }, [contestAPI]);

    const filterContests = contests.filter((contest) =>
        contest.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleRadio = (event) => {
        setContestAPI(`https://kontests.net/api/v1/${event.target.value}`);
    };


    return (
        <div className="home">
            <div className="headerContainer">
                <h1>Contests</h1>

                <div className='radioContainer' onChange={handleRadio}>
                    <div>
                        <input type="radio" value="all" name="contest" defaultChecked /> All
                    </div>
                    <div>
                        <input type="radio" value="codeforces" name="contest" /> codeforces
                    </div>
                    <div>
                        <input type="radio" value="codeforces_gym" name="contest" /> codeforces_gym
                    </div>
                    <div>
                        <input type="radio" value="top_coder" name="contest" /> top_coder
                    </div>
                    <div>
                        <input type="radio" value="at_coder" name="contest" /> at_coder
                    </div>
                    <div>
                        <input type="radio" value="code_chef" name="contest" /> code_chef
                    </div>
                    <div>
                        <input type="radio" value="hacker_rank" name="contest" /> hacker_rank
                    </div>
                    <div>
                        <input type="radio" value="hacker_earth" name="contest" /> hacker_earth
                    </div>
                    <div>
                        <input type="radio" value="kick_start" name="contest" /> kick_start
                    </div>
                    <div>
                        <input type="radio" value="leet_code" name="contest" /> leet_code
                    </div>
                </div>

                <div className="buttonContainer">
                    <input
                        placeholder="Type a keyword"
                        type="text"
                        onChange={handleSearch}
                    />
                </div>
            </div>

            <div className="contestContainer">
                {isLoading
                    ? <h1 className="loadingMssg">Data Loading...</h1>
                    : filterContests.reverse().map((contests) => {
                        return (
                            <Contest
                                key={contests.name}
                                name={contests.name}
                                url={contests.url}
                                start_time={contests.start_time}
                                end_time={contests.end_time}
                                duration={contests.duration}
                                in_24_hours={contests.in_24_hours}
                                status={contests.status}
                            />
                        )
                    })}
            </div>
        </div>
    )
}


export default Home;