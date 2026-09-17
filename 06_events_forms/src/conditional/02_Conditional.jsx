import React from "react";

const Conditional_02 = () => {
    let color = "pink";
    let content;

    if (color === "red") {
        content = <h1 style={{ color: "red" }}>You have selected red color</h1>;
    } else if (color === "blue") {
        content = <h1 style={{ color: "blue" }}>You have selected blue color</h1>;
    } else if (color === "green") {
        content = <h1 style={{ color: "green" }}>You have selected green color</h1>;
    } else {
        content = <h1>You haven't selected proper color</h1>;
    }

    return (
        <>
            {content}
        </>
    );
};

export default Conditional_02;