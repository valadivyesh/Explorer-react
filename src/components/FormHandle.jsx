import { useState } from "react";

function FormHandle() {
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Form & Event Handling</h2>

      <input 
        value={name}
        placeholder="Enter Your Name: "
        onChange={(e) => setName(e.target.value)}
      />

      <p>Name: {name}</p>
    </div>
  );
}

export default FormHandle;