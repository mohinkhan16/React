import React, { useEffect, useState } from "react";

function conuter() {
  const [conuter, setCount] = useState(0);

  // Mounting + Unmounting
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log("Count Updated", conuter);
  }, [conuter]);

  return (
    <>
      <h1>Count: {conuter}</h1>

      <button onClick={() => setCount(conuter + 1)}>
        Increase
      </button>
    </>
  );
}

export default conuter;