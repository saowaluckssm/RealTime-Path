import React, { useState } from "react";
import Select from "react-select";

const Form = (props) => {
  const stations = [
    {
      value: "newark",
      label: "Newark Penn"
    },
    {
      value: "harrison",
      label: "Harrison"
    },
    {
      value: "journal_square",
      label: "Journal Square"
    },
    {
      value: "grove_street",
      label: "Grove Street"
    },
    {
      value: "exchange_place",
      label: "Exchange Place"
    },
    {
      value: "world_trade_center",
      label: "World Trade Center"
    },
    {
      value: "newport",
      label: "Newport"
    },
    {
      value: "hoboken",
      label: "Hoboken"
    },
    {
      value: "christopher_street",
      label: "Christopher Street"
    },
    {
      value: "ninth_street",
      label: "9th Street"
    },
    {
      value: "fourteenth_street",
      label: "14th Street"
    },
    {
      value: "twenty_third_street",
      label: "23rd Street"
    },
    {
      value: "thirty_third_street",
      label: "33rd Street"
    }
  ];

  // set value for default selection
  const [selectedValue, setSelectedValue] = useState("");

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.label);
    props.onAdd(e);
  };

  return (
    <div>
      <div className="select-option">
        <Select
          placeholder="Selected Station"
          value={stations.find((station) => station.value === selectedValue)} // set selected value
          options={stations} // set list of the data
          onChange={handleChange} // assign onChange function
        />

        {/* {selectedValue && (
        <div style={{ marginTop: 20, lineHeight: "25px" }}>
          <div>
            <b>Station: </b> {selectedValue}
          </div>
        </div>
      )} */}
      </div>
    </div>
  );
};

export default Form;
