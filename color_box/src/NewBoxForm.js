import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewBoxForm = ({ createBox }) => {
  // setstate  for new form box height width and color
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });
  // set handlechange function for data change
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  // set functions to get data input
  const gatherInput = (evt) => {
    evt.preventDefault();
    createBox({ ...formData, id: uuidv4() });
    setFormData({ height: "", width: "", backgroundColor: "" });
  };
  return (
    <div>
      <form oneSubmit={gatherInput}>
        <div>
          <label htmlFor="height">Height</label>
          <input
            onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input
            onChange={handleChange}
            type="text"
            name="width"
            value={formData.width}
            id="width"
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <button id="newBoxButton">Add a new box</button>
      </form>
    </div>
  );
};

export default NewBoxForm;
