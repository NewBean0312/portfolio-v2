import React from "react";

const SubHeader = ({headerText}) => {
    return (
        <header className="w-full pt-32">
            <h1 className="my-6 text-mainColor text-5xl font-bold italic text-center">{headerText}</h1>
        </header>
    )
}

export default SubHeader;