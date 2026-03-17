import { useState } from "react";

function Filter() {
   
   const numbers = [10, 20, 30, 40, 50, 60];
  const filter = numbers.filter((num) => num % 2 == 0);
  const items = ["Guava", "Kiwi", "Pineapple", "Mango"];
  return (
    <div>
      <h2> Filter</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
        <p>Even number : {filter.join(" ; ")} </p>
    </div>
  );
  

}

export default Filter;