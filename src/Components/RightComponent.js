import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Importing CSS
import "./RightComponent.css";

const RightComponent = ({ output }) => {
  // const markdown = `Contrary to *popular* **belief**, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`;

  const markdown = `${output}`;
  return (
    <div className="flex items-center justify-center h-full">
      <div className="rightContainer p-4">
        <div className="pb-10">
          <h1 className="text-lg text-center">Output</h1>
        </div>
        <div className="pb-10">
          <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
        </div>
      </div>
    </div>
  );
};

export default RightComponent;
