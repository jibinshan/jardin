import Hero from "@/app/table-booking/(section)/Hero";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import TableBookingI from "./(section)/TableBookingI";

export default function HomePage() {
  return (
    <main className="relative flex h-full w-full">
      <div className="flex h-full w-full flex-col items-center justify-center bg-transparent">
        <Navbar position="absolute" />
        <Hero />
        <TableBookingI />
        <Footer />
      </div>
    </main>
  );
}
