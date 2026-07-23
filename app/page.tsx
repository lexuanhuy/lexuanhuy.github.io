import { LeftSide } from "@/components/pages/home/LeftSide/LeftSide";
import { RightSide } from "@/components/pages/home/RightSide/RightSide";

export default function Home() {
  return (
    <div className="flex h-full flex-col lg:flex-row overflow-auto lg:overflow-hidden">
      <LeftSide className="lg:w-[50%] mb-8" />
      <RightSide className="lg:w-[50%]" />
    </div>
  );
}
