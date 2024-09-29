import Akreditasi from "@/components/Akreditasi";
import Bidang from "@/components/Bidang";
import Header from "@/components/Header";
import Lembaga from "@/components/Lembaga";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Akreditasi />
      <Bidang />
      <Lembaga />
    </main>
  );
}
