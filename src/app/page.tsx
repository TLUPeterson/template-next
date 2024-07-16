import Image from "next/image";
import Faq from "./components/faq";
import PrimaryContent1 from "./components/primaryContent1";
import { Button } from "@/components/shared/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-primary-1000">
      <div className='p-24'>
        <PrimaryContent1 />
      </div>
      <div className='w-full bg-white'>
        <Faq />
      </div>
    </main>
  );
}
