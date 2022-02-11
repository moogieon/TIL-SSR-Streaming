import { FC, useEffect, useRef, useState } from "react";

export interface Props {}

const GraphTest: FC<Props> = () => {
  return (
    <>
      <div className="flex flex-col  items-center">
        <div className="border h-120 w-80 flex justify-between">
          <div>
            <ul>
              <li className="mb-10">123</li>
              <li className="mb-10">asd</li>
              <li className="mb-10">!@#</li>
            </ul>
          </div>
          <div></div>
          <div>
            <ul>
              <li className="mb-10">Num</li>
              <li className="mb-10">etc</li>
              <li className="mb-10">Str</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphTest;
