import React from "react";
//import { data } from '../../../data';
//import data from "../../9-custom-hooks/components/data";
//import { data } from "../../../data";
//import { data } from "../../9-custom-hooks/components/data";
import { StyleHTMLAttributes } from "react";
import { data } from "../../../data";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                setPeople(people.filter((person) => person.id !== id));
              }}
            >
              ⌦
            </button>
          </div>
        );
      })}
      <button className="clearAll" onClick={() => setPeople([])}>
        Clear All
      </button>
    </>
  );
};

export default UseStateArray;
