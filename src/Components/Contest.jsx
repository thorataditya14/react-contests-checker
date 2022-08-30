import React from "react";
import "./Contest.css";


const Contest = ({
    id,
    name,
    url,
    start_time,
    end_time,
    duration,
    in_24_hours
}) => {
    return (
        <div className="contestContainer">
            <div className="contestRow">
                <div className="contestData">
                    <div className="contest">
                        <h1 className="contestName">{name}</h1>
                        <p className="contestDetails">{start_time}</p>
                        <p className="contestDetails">{end_time}</p>
                        <a href={url}>
                            <button>
                                Go to Contest Page
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contest;