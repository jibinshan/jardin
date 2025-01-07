import { Button } from "@/components/ui/button";
import Link from "next/link";

const ViewMenu = ({ }) => {
  return (
    <Button
      asChild
      className="z-50 flex aspect-square leading-[10px] h-32 font-[500] flex-col items-center justify-center rounded-full bg-[#036538] px-0 py-0 text-center text-xl font-cormorant uppercase text-[#ECE6D6]"
    >
      <Link href="/table-booking">
        book<br />
        table
      </Link>
    </Button>
  );
};

export default ViewMenu;
