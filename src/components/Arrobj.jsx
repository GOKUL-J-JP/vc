// import React from 'react';
import { Objarr } from "./Objarr";

export const Arrobj = () => {
  let animals = [{ name: 'cat', size: 2 }, { name: 'lion', size: 5 }, { name: 'dog', size: 3 }];
  return (
    <div>
      <ul>
        {animals.map((ani, index) => (
          <Objarr key={index} name={ani.name} size={ani.size} />
        ))}
      </ul>
    </div>
  );
};
