import { FC, useRef } from "react";

const DndTest: FC = () => {
  function onDragOver(event) {
    event.preventDefault(); // drop이 가능하다는 표시를 해줌
  }
  return (
    <div className="container mx-auto flex">
      <div>
        <div
          className="w-[300px] h-[150px] border cursor-pointer"
          onDrag={onDragOver}
        >
          1
        </div>
        <div
          className="w-[300px] h-[150px] border cursor-pointer"
          onDrag={onDragOver}
        >
          2
        </div>

        <div
          className="w-[300px] h-[150px] border cursor-pointer"
          onDrag={onDragOver}
        >
          3
        </div>
        <div
          className="w-[300px] h-[150px] border cursor-pointer"
          onDrag={onDragOver}
        >
          4
        </div>
      </div>
    </div>
  );
};
export default DndTest;
