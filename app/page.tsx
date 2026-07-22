import { LeftSide } from "@/components/pages/home/LeftSide/LeftSide";
import { RightSide } from "@/components/pages/home/RightSide/RightSide";

export default function Home() {
  return (
    <div className="flex h-full ">
      <LeftSide className="w-[50%]" />
      <RightSide className="w-[50%]" />
    </div>
  );
}
