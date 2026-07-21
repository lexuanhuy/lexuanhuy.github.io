import { LeftSide } from "@/components/pages/home/LeftSide/LeftSide";

export default function Home() {
  return (
    <div className="d-flex h-full">
      <LeftSide className="w-[50%]" />
      <div className="w-[50%]"></div>
    </div>
  );
}
