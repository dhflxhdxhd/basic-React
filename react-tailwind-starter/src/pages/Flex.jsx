import Box from "../components/Box";
import Header from "../components/Header";
const Flex = () => {
  return (
    <div>
      <Header title={"FLEX"} />
      <div>
        {/* flex-basis: 항목이 차지할 기본 크기를 설정 */}
        <div className="flex justify-start items-center">
          <p className="p-4 w-32 text-center text-xl">flex-basis</p>
          <div className="flex-1 flex p-2 gap-2 items-center justify-center">
            {/* basis-2/4, basis-1/4 등으로 박스들이 차지하는 비율 설정 */}
            <Box className="basis-2/4 md:basis-1/3">01</Box>
            <Box className="basis-1/4 md:basis-1/3">02</Box>
            <Box className="basis-1/4 md:basis-1/3">03</Box>
          </div>
        </div>

        {/* flex-grow와 flex-shrink 적용 */}
        <div className="flex justify-start items-center">
          <p className="p-4 w-32 text-center text-xl">flex - grow and shrink</p>
          <div className="flex-1 flex p-2 gap-2 items-center justify-center">
            {/* flex-1을 사용하여 박스가 가능한 공간을 확장 */}
            <Box className="flex-1">01</Box>
            {/* 고정 크기 w-14 */}
            <Box className="w-14">02</Box>
          </div>
        </div>

        {/* flex-none, flex-initial로 박스의 크기를 고정하거나 초기값을 설정 */}
        <div className="flex justify-start items-center">
          <p className="p-4 w-32 text-center text-xl">
            flex - fixed and initial
          </p>
          <div className="flex-1 flex p-2 gap-2 items-center justify-start">
            <Box className="flex-none w-12">01</Box>
            <Box className="flex-initial grow w-64">02</Box>
            <Box className="flex-initial w-32">03</Box>
          </div>
        </div>

        {/* flex-grow: 주 축을 따라 자유롭게 확장하는 예시 */}
        <div className="flex justify-start items-center">
          <p className="p-4 w-32 text-center text-xl">flex - grow</p>
          <div className="flex-1 flex p-2 gap-2 items-center justify-center">
            {/* grow로 중간 박스가 나머지 영역을 차지하도록 설정 */}
            <Box className="flex-none w-14 h-14">01</Box>
            <Box className="grow h-14">02</Box>
            <Box className="flex-none w-14 h-14">03</Box>
          </div>
        </div>

        {/* grow-0: 확장하지 않도록 설정 */}
        <div className="flex justify-start items-center">
          <p className="p-4 w-32 text-center text-xl">grow | grow-0</p>
          <div className="flex-1 flex p-2 gap-2 items-center justify-center">
            {/* grow-0: 확장하지 않도록 설정한 예시 */}
            <Box className="grow-0 h-14">01</Box>
            <Box className="grow h-14">02</Box>
            <Box className="grow-0 h-14">03</Box>
          </div>
        </div>

        {/* 1:2 비율로 grow를 설정 */}
        <div className="flex justify-start items-center">
          <p className="p-4 w-32 text-center text-xl">1:2</p>
          <div className="flex-1 flex p-2 gap-2 items-center justify-center">
            {/* grow-[1]과 grow-[2]를 이용해 비율을 설정 */}
            <Box className="grow-[1] h-14">02</Box>
            <Box className="grow-[2] h-14">03</Box>
          </div>
        </div>

        {/* flex-shrink: 공간이 부족할 때 축소 */}
        <div className="flex justify-start items-center">
          <p className="p-4 w-32 text-center text-xl">flex-shrink</p>
          <div className="flex w-[300px] p-2 gap-2 items-center justify-start">
            {/* shrink: 공간이 부족하면 축소되는 예시 */}
            <Box className="flex-none w-14 h-14">01</Box>
            <Box className="flex-1 shrink h-14">02</Box>
            {/* flex-1로 크기 조정 가능하게 변경 */}
            <Box className="flex-none w-14 h-14">03</Box>
          </div>
        </div>

        {/* order-N: flex 항목의 순서 변경 */}
        <div className="flex justify-start items-center">
          <p className="p-4 w-32 text-center text-xl">order-N</p>
          <div className="flex-1 flex p-2 gap-2 items-center justify-start">
            {/* order-last: 맨 뒤로 배치 */}
            <Box className="flex-1 order-last">01</Box>
            {/* order-2, order-3: 순서대로 변경 */}
            <Box className="flex-1 order-2">02</Box>
            <Box className="flex-1 order-3">03</Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flex;
