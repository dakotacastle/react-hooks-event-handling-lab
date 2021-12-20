import React from "react";

function Keypad() {
    function handleChange(event) {
      console.log(`${event.target.name}`);
    }
  
    return (
      <div>
        <input
          type="password"
          name="Entering password..."
          onChange={handleChange}
          placeholder="Password"
        />
      </div>
    );
  }
  export default Keypad;


