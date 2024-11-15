import { About } from "@/components/About";
import { Giro } from "@/components/Giro";
import { Product } from "@/components/Product";

export default function ChatPage() {
  return (
    <div className="mt-20 px-10 lg:px-48 flex items-center justify-center flex-col">
      <About/>
      <Giro/>
      <Product/>
    </div>
  );
}