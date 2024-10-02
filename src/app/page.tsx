import Akreditasi from "@/components/Akreditasi";
import Berita from "@/components/Berita";
import Bidang from "@/components/Bidang";
import Header from "@/components/Header";
import Lembaga from "@/components/Lembaga";
import Pengaduan from "@/components/Pengaduan";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Akreditasi />
      <Bidang />
      <Lembaga />
      <Berita />
      <Pengaduan />
    </main>
  );
}
