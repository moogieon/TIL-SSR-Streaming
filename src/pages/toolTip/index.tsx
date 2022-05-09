import type React from "react";

interface Props {
  clickTagBtn: (idx: number) => void;
}

const ToolTip: React.FC<Props> = ({ clickTagBtn }) => {
  return (
    <div
      w-flex="~ col"
      w-justify="center"
      w-w="263px"
      w-h="20"
      w-pos="absolute -top-19 left-8"
      w-bg="white"
      w-border="rounded-b-lg "
      w-p="x-2 b-2"
      onClick={() => clickTagBtn}
    >
      <div
        w-h="4/10"
        w-flex="~"
        w-justify="around"
        w-items="center"
        w-gradient="to-r from-[#339833]"
        w-bg="[#9FE99F]"
        w-border="rounded-t-lg "
        w-p="x-2 y-1"
      >
        <span>건강 범위</span>
        <span>일상적 범위</span>
      </div>
      <div w-w="full" w-flex="~" w-justify="around">
        <span w-container="~" w-bg="[#F6F6F6]">
          5.000~ 5.600
        </span>
        <span w-container="~" w-bg="white">
          4.000~ 6.000
        </span>
      </div>
      <div
        w-pos="absolute -bottom-[18px]"
        w-border="[10px] transparent t-white "
      ></div>
    </div>
  );
};
export default ToolTip;
