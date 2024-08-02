import BodyLayout from "@/components/layout/body";
import Header from "@/components/layout/header";

export default function Home() {
  return (
    <div className="bg-green-500 w-[376px] h-[811px] m-auto overflow-y-auto">
      <Header />
      <BodyLayout />
    </div>
  );
}
