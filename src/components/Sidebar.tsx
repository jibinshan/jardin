import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[540px]">
                <SheetHeader>
                    <SheetTitle>
                        <Image src="/images/home/logo.png" width={55} height={69} alt="Foodo" />
                    </SheetTitle>
                    <SheetDescription className="flex w-full flex-col items-start justify-start gap-7 pt-14">
                        <Link
                            href="/"
                            className="font-playfair flex w-full justify-start p-0 text-2xl font-normal text-accent text-white"
                        >
                            Home
                        </Link>
                        <Link
                            href="/menu"
                            className="font-playfair flex w-full justify-start p-0 text-2xl font-normal text-accent text-white"
                        >
                            Menu
                        </Link>
                        {/* <Link
                            href="/about-us"
                            className="font-playfair flex w-full justify-start p-0 text-4xl font-normal text-accent text-white"
                        >
                            About
                        </Link> */}
                        <Link
                            href="/table-booking"
                            className="font-playfair flex w-full justify-start p-0 text-2xl font-normal text-accent text-white"
                        >
                            Table Booking
                        </Link>
                        <Link
                            href="/contact"
                            className="font-playfair flex w-full justify-start p-0 text-2xl font-normal text-accent text-white"
                        >
                            Contact
                        </Link>
                        {/* <Button
                              variant="link"
                              className={cn("w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800")}
                              asChild
                          >
                              <Link href="/menu" className="flex gap-2 py-6"><Dock /> <span>Menu</span></Link>
                          </Button>
                          <Button
                              asChild
                              variant="link"
                              className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                          >
                              <Link href="/about-us" className="flex gap-2 py-6"><ShieldQuestion /> <span>About</span> </Link>
                          </Button>
                          <Button
                              variant="link"
                              className="w-full flex justify-start p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                              asChild
                          >
                              <Link href="/contact" className="flex gap-2 py-6"><Phone /> <span>Contact</span></Link>
                          </Button>
                          <Button
                              asChild
                              variant="link"
                              className="w-full flex justify-start px-1 p-0 uppercase text-accent text-white border-b-[1px] border-b-gray-800"
                          >
                              <Link href="/table-booking" className="flex gap-2 py-6"><BookCheck /> <span>Booking</span> </Link>
                          </Button>
                          <Button
                              asChild
                              variant="link"
                              className="w-full flex justify-start p-0 uppercase text-accent text-white"
                          >
                              <Link href="/gift-voucher" className="flex gap-2 py-6" ><Gift /> <span>Gift Voucher</span></Link>
                          </Button> */}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet >
    );
};

export default Sidebar;
