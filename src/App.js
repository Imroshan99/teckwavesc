import React, { useState } from "react";

const TextField = ({ value, onChange }) => {
  return <input type="text" value={value} onChange={onChange} />;
};

const NumberField = ({ value, onChange }) => {
  return <input type="number" value={value} onChange={onChange} />;
};

const NumericSlider = ({ value, onChange }) => {
  return <input type="range" value={value} min={0} max={100} onChange={onChange} />;
};

const Dropdown = ({ options, selectedOption, onChange }) => {
  return (
    <select value={selectedOption} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

const Label = ({ label }) => {
  return <div style={{ marginLeft: "80px" }}>{label}</div>;
};

const App = () => {
  const [field1, setField1] = useState(0);
  const [field2, setField2] = useState(0);
  const [field3, setField3] = useState(0);
  const [field4, setField4] = useState(0);
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState("");

  const resetFields = () => {
    setField1(Math.random() * 100);
    setField2(Math.random() * 100);
    setField3(Math.random() * 100);
    setField4(Math.random() * 100);
  };

  const handleFormulaChange = (e) => {
    setFormula(e.target.value);
  };

  const computeResult = () => {
    try {
      const scope = { field1, field2, field3, field4 };
      const calculatedResult = eval(formula);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
        <TextField value={field1} onChange={(e) => setField1(e.target.value)} />
        <NumberField value={field2} onChange={(e) => setField2(e.target.value)} />
        <NumericSlider value={field3} onChange={(e) => setField3(e.target.value)} />
        <Dropdown
          options={[
            { value: 1, label: "Option 1" },
            { value: 2, label: "Option 2" },
            { value: 3, label: "Option 3" },
          ]}
          selectedOption={field4}
          onChange={(e) => setField4(e.target.value)}
        />
        <button onClick={resetFields}>Reset</button>
        <input type="text" value={formula} onChange={handleFormulaChange} />
        <button onClick={computeResult}>Calculate</button>
      </div>
      <br />
      <hr />
      <Label label={`Result: ${result}`} />
    </>
  );
};

export default App;
