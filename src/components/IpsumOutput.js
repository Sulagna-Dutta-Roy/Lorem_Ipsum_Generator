import React from "react";

export const Output = ({ paragraphs, tags, includeHTML }) => {
  return (
    <div className="output">
      {includeHTML === "yes" ? (
        <div className="with-tag">
          {paragraphs.map((sentence, index) => {
            return (
              <p className="sentence" key={index}>
                {`<${tags}>${sentence}<${tags}/>`}
              </p>
            );
          })}
        </div>
      ) : (
        <div className="without-tag">
          {paragraphs.map((sentence, index) => {
            return <p key={index}>{sentence}</p>;
          })}
        </div>
      )}
    </div>
  );
};