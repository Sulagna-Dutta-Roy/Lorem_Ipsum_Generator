import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Options = ({
  paragraphs,
  includeHTML,
  setIncludeHTML,
  inputValue,
  setInputValue,
  tags,
  settags,
}) => {
  return (
    <div className="options">
      <div className="wrapper">
        <div className="option-container">
          <div className="paragraphs">
            <p>Paragraph</p>
            <input
              type="number"
              min="1"
              max="30"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="tags">
            <p>Tags:</p>
            <select
              defaultValue={tags}
              onChange={(e) => settags(e.target.value)}
            >
              <option value="p">&lt;p&gt;</option>
              <option value="h1">&lt;h1&gt;</option>
              <option value="h2">&lt;h2&gt;</option>
              <option value="h3">&lt;h3&gt;</option>
              <option value="h4">&lt;h4&gt;</option>
              <option value="h5">&lt;h5&gt;</option>
              <option value="h6">&lt;h6&gt;</option>
              <option value="span">&lt;span&gt;</option>
            </select>
          </div>
          <div className="include">
            <p>Include HTML</p>
            <select
              defaultValue={includeHTML}
              onChange={(e) => setIncludeHTML(e.target.value)}
            >
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="copy">
            <CopyToClipboard
              text={paragraphs.map((sentence) =>
                includeHTML === "yes"
                  ? `<${tags}>${sentence}<${tags}/>`
                  : sentence
              )}
            >
              <button>Copy to clipboard</button>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};