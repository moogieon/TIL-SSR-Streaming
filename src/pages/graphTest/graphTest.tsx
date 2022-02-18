import { FC, useEffect, useRef, useState } from "react";
import useScrollFadeIn from "../../components/useScrollFadeIn";

export interface Props {}

const GraphTest: FC<Props> = () => {
  const animatedItem = useScrollFadeIn();
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
      <div className="h-[1200px] w-30 border-2 p-10 flex justify-center items-center">
        <div className="">
          <h1 className="text-2xl">건강건강</h1>
          <span className="text-2xl">웰코치가 책임</span>
          <h1 className="text-2xl">건강건강</h1>
        </div>
        <div className="">
          <img
            className="mx-auto h-[50%] w-[80%]"
            src="/01_메인_핸드폰목업1.png"
          />
        </div>
      </div>
      <div className="h-[1200px] w-30 border-2 p-10 flex justify-center items-center">
        <div className="">
          <h1 className="text-2xl">건강건강</h1>
          <span className="text-2xl">웰코치가 책임</span>
          <h1 className="text-2xl">건강건강</h1>
        </div>
        <div className="">
          <img
            className="mx-auto h-[50%] w-[80%]"
            src="/01_메인_핸드폰목업1.png"
          />
        </div>
      </div>
      <div className="h-[1200px] w-30 border-2 p-10 flex justify-center items-center">
        <div className="">
          <h1 className="text-2xl">건강건강</h1>
          <span className="text-2xl">웰코치가 책임</span>
          <h1 className="text-2xl">건강건강</h1>
        </div>
        <div className="">
          <img
            className="mx-auto h-[50%] w-[80%]"
            src="/01_메인_핸드폰목업1.png"
          />
        </div>
      </div>
      <div className="h-[1200px] w-30 border-2 p-10 flex justify-center items-center">
        <div className="">
          <h1 className="text-2xl">건강건강</h1>
          <span className="text-2xl">웰코치가 책임</span>
          <h1 className="text-2xl">건강건강</h1>
        </div>
        <div className="">
          <img
            className="mx-auto h-[50%] w-[80%]"
            src="/01_메인_핸드폰목업1.png"
          />
        </div>
      </div>
    </>
  );
};

export default GraphTest;
