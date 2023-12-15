import WritingModal from "@/components/WritingModal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div>
        <WritingModal />
      </div>
    </main>
  );
}
