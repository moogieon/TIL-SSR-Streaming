import { FC, useEffect, useRef, useState } from "react";

export interface Props {}

const GraphTest: FC<Props> = () => {
  const container = document.querySelector(".container");
  const wrappers = document.querySelectorAll(".wrapper");
  const imgs = document.querySelectorAll("img");
  const animClasses = ["fadeInLeft", "fadeInRight", "fadeInBtm", "zoomIn"];
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        const currentIndex = Array.from(wrappers).indexOf(entry.target);
        if (entry.isIntersecting) {
          imgs[currentIndex].classList.add(animClasses[currentIndex]);
        } else {
          if (entry.boundingClientRect.y > 0) {
            imgs[currentIndex].classList.remove(animClasses[currentIndex]);
          }
        }
      });
    },
    {
      root: container,
      threshold: 0.1,
    }
  );

  wrappers.forEach((wrapper) => {
    observer.observe(wrapper);
  });

  const myData = [
    { id: "0", name: "일번" },
    { id: "1", name: "이번" },
    { id: "2", name: "삼번" },
  ];

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
              <li className="mb-10"></li>
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
