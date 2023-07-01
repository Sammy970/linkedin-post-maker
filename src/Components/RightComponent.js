import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

// Importing CSS
import "./RightComponent.css";
import AlertCopy from "./AlertCopy";

const RightComponent = ({ output, loadingState }) => {
  const [alertShow, setAlertShow] = useState(false);
  const markdown = `${output}`;

  useEffect(() => {
    if (alertShow) {
      const timeoutId = setTimeout(() => {
        setAlertShow(!alertShow);
      }, 3000);

      return () => clearTimeout(timeoutId);
    }
  }, [alertShow]);

  return (
    <div className="flex items-center justify-center h-full">
      <div className="rightContainer p-4">
        <div className="pb-6">
          <h1 className="text-lg text-center">Output</h1>
          <div className="mb-4">
            <CopyToClipboard text={output}>
              <button className="copy-button" onClick={() => setAlertShow(true)}>
                <FontAwesomeIcon color="beige" icon={faCopy} size="lg" />
                <p>Copy</p>
              </button>
            </CopyToClipboard>
          </div>
          <div>
            {alertShow && (
              <>
                <AlertCopy setAlertShow={setAlertShow} />
              </>
            )}
          </div>
        </div>

        <div className="pb-10">
          {loadingState === true ? (
            <div className="loading-spinner"></div>
          ) : (
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
