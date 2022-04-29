import React from "react";

const Header = (props) => {
    const date = new Date()
    return (
        <header className="header">
            <img src="" alt='logo' />
            <h2>TrackThings</h2>
            <div className="timeDiv">
                <h4>
                    <span>{date.getDate()} </span>
                    <span>{date.getMonth()}, </span>
                    <span>{date.getFullYear()}</span>
                </h4>
                <h4>{date.getTime()}</h4>
            </div>
        </header>
    )
}

export default Header