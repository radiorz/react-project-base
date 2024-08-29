import React from "react";
import Sash from "../lib/layout/Sash";

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <Sash
        orientation="vertical"
        defaultSize={300}
        minSize={200}
        maxSize={500}
      >
        <div className="p-4 bg-blue-100">
          <h2 className="mb-4 text-xl font-bold">Left Panel</h2>
          <p>
            This is the content of the left panel. You can resize it by dragging
            the sash.
          </p>
        </div>
        <div className="p-4 bg-green-100">
          <h2 className="mb-4 text-xl font-bold">Right Panel</h2>
          <p>
            This is the content of the right panel. It will adjust its size as
            you resize the left panel.
          </p>
        </div>
      </Sash>
    </div>
  );
};

export default App;
