import React, { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("component mounted");
    return () => {
      console.log("component desmounted");
    };
  }, []);
  return (
    <div>
      <h3>Amazing!</h3>
    </div>
  );
};
