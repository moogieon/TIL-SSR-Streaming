import { FC, useEffect, useRef, useState } from "react";

export interface Props {}

const GraphTest: FC<Props> = () => {
  const [isNut, setIsNut] = useState([]);

  const myData = [
    {
      id: "0",
      name: "피부노화",
      contents: ["더글라스랩 갈릭", "더글라스랩 코엔자임"],
      className: "text-green-500",
    },
    {
      id: "1",
      name: "형당 관리",
      contents: ["더글라스랩 글루코셋"],
      className: "text-red-500",
    },
    {
      id: "2",
      name: "콜레스테롤",
      contents: ["메타제닉스", "더글라스랩 글루코셋"],
      className: "text-blue-500",
    },
  ];
  const nutData = [
    { id: 0, name: "메타제닉스" },
    { id: 0, name: "더글라스랩 글루코셋" },
    { id: 0, name: "더글라스랩 코엔자임" },
  ];
  const onClickNut = (e) => () => {
    !isNut.includes(e)
      ? setIsNut((isNut) => [...isNut, e])
      : setIsNut(isNut.filter((btn) => btn !== e));
  };
  console.log("ss", isNut);
  return (
    <>
      <div className="flex flex-col  items-center">
        <div className="border h-[400px]  flex justify-between">
          <div>
            <ul>
              {myData.map((data) => (
                <li
                  key={data.id}
                  onClick={onClickNut(data.name)}
                  className={`hover:${data.className} mb-10 cursor-pointer ${
                    isNut.includes(data.name)
                      ? data.className
                      : "rgba(44,63,88,0.5)"
                  }`}
                >
                  {data.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <svg version="1.1" width="500.274" height="587.383" data-value="0">
              <path
                d="M 0,10  H374.137,2  0,10"
                stroke-width="2"
                style={{
                  stroke: isNut ? " #9BE1D2" : "rgba(44,63,88,0.5)",
                }}
                fill="none"
              ></path>
            </svg>
          </div>
          <div>
            <ul>
              {nutData.map((data) => (
                <li key={data.id} className="mb-10">
                  {data.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default GraphTest;
