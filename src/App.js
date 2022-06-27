import React, { useState, useEffect } from "react";
import { Options } from "./components/Modes";
import { Output } from "./components/IpsumOutput";


function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [tags, settags] = useState("p");
  const [inputValue, setInputValue] = useState(1);
  const [includeHTML, setIncludeHTML] = useState("yes");
  useEffect(() => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1
    `;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setParagraphs(data));
  }, [inputValue]);

  return (
    <div className="App">
      <div className="container">
        <div className="title">
          <h1>Lorem Ipsum Generator</h1>
        </div>
        <Options
          paragraphs={paragraphs}
          includeHTML={includeHTML}
          setIncludeHTML={setIncludeHTML}
          inputValue={inputValue}
          setInputValue={setInputValue}
          tags={tags}
          settags={settags}
        />
        <Output paragraphs={paragraphs} tags={tags} includeHTML={includeHTML}/>
      </div>
    </div>
  );
}

export default App;
