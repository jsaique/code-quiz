import { useState } from "react";
export default function Boxes() {
  const [boxes, setBoxes] = useState(["a", " b", "c"]);

  const handleChange = (e, index) => {
    const newBoxes = [...boxes];
    newBoxes[index] = e.target.value;
    setBoxes(newBoxes);
  };

  const handlePlusClick = (i) => {};

  return (
    <div className="App">
      <div className="boxes">
        {boxes.map((box, i) => (
          <div key={i} className="box">
            <input
              onChange={(e) => handleChange(e, boxes.indexOf(box))}
              value={box}
              className="input-box"
            ></input>
            {i < box.length - 1 && (
              <span onClick={() => handlePlusClick(i)}>+</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
