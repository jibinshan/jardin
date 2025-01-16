"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";
import { cn } from "@/lib/utils";
import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MenuItemMobile from "./MenuItemMobile";
import SearchInput from "./SearchInput";
import Image from "next/image";
import type { OrganizedMenu } from "@/lib/organize-menu";

export default function MenuMobile() {
  const { organizedMenu } = useRestaurant();
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [query, setQuery] = useState("");
  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const categoryNavRef = useRef<HTMLDivElement>(null);
  const categoryButtonRefs = useRef<Record<string, HTMLButtonElement | null>>(
    {},
  );
  const isManualScroll = useRef(false);
  const lastActiveCategory = useRef<string>("");
  const [orderType, setOrderType] = useState<2 | 3>(2);
  const router = useRouter();

  useEffect(() => {
    const savedOrderType = localStorage.getItem("orderType");
    if (savedOrderType) {
      setOrderType(parseInt(savedOrderType) as 2 | 3);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("orderType", orderType.toString());
  }, [orderType]);

  const updateActiveCategory = () => {
    const categories = Object.entries(categoryRefs.current);
    let activeId = "";

    // Find the first category that's in view
    for (const [id, ref] of categories) {
      if (!ref) continue;
      const rect = ref.getBoundingClientRect();
      // Check if the top of the category is above the middle of the viewport
      if (rect.top <= 300) {
        activeId = id;
      }
    }

    // If we found an active category and it's different from the last one
    if (activeId && activeId !== lastActiveCategory.current) {
      lastActiveCategory.current = activeId;
      setActiveCategory(activeId);
      // Only scroll the category button if it's not a manual scroll
      if (!isManualScroll.current) {
        categoryButtonRefs.current[activeId]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  useEffect(() => {
    // Set initial active category
    if (organizedMenu.length > 0) {
      const initialCategory = organizedMenu[0]?._id ?? "";
      setActiveCategory(initialCategory);
      lastActiveCategory.current = initialCategory;
    }

    const handleScroll = () => {
      if (!isManualScroll.current) {
        requestAnimationFrame(updateActiveCategory);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    updateActiveCategory();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [organizedMenu]);

  const scrollToCategory = (categoryId: string) => {
    isManualScroll.current = true;
    lastActiveCategory.current = categoryId;
    setActiveCategory(categoryId);

    categoryRefs.current[categoryId]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    categoryButtonRefs.current[categoryId]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });

    // Reset manual scroll after animation
    setTimeout(() => {
      isManualScroll.current = false;
    }, 1000);
  };

  //cart
  const { cartItems } = useCart();
  const [sorted, setSorted] = useState<OrganizedMenu[]>([])
  useEffect(() => {
    if (query) {
      const filteredMenu = organizedMenu.map((item) => {
        const filtereditem = item.items.filter((i) => i.name.toLowerCase().includes(query.toLowerCase()));
        return {
          ...item,
          items: filtereditem
        }
      })
      setSorted(filteredMenu)
    } else {
      setSorted(organizedMenu)
    }
  }, [query, organizedMenu])


  return (
    <section className="flex w-full max-w-[1300px] flex-row bg-mobilebg">
      <div className="flex w-full flex-col gap-0 md:w-4/6">
        <div className="flex h-fit w-full flex-col gap-2 bg-mobilebg pb-2 pt-5 md:hidden">
          <div className="flex w-full items-center justify-between px-5 py-2">
            <div onClick={() => router.back()} className="p-0 text-menusecondary">
              <ArrowLeft />
            </div>
            <Image
              src="/images/logo.png"
              width={177}
              height={101}
              alt="logo"
              className="w-16"
            />
            <div onClick={() => setShowSearch((prev) => !prev)} className="text-menusecondary">
              <Search />
            </div>
          </div>
          {showSearch && (
            <div className="w-full px-4">
              <SearchInput query={query} setQuery={setQuery} />
            </div>
          )}
        </div>
        {/* Categories */}
        <div className="sticky top-0 z-40 flex items-center bg-mobilebg px-4 py-2 md:z-10">
          <div
            ref={categoryNavRef}
            className="hidden-scrollbar flex overflow-x-auto py-2"
          >
            <div className="flex gap-2">
              {organizedMenu.map((category) => (
                <Button
                  key={category._id}
                  ref={(el) => {
                    categoryButtonRefs.current[category._id] = el;
                  }}
                  onClick={() => scrollToCategory(category._id)}
                  className={cn(
                    "h-12 shrink-0 rounded-none text-base font-extrabold transition-colors",
                    activeCategory === category._id
                      ? "bg-menuprimary text-menusecondary"
                      : "bg-transparent text-menusecondary hover:bg-primary/80",
                  )}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        {/* Items */}
        <div className="px-4 pt-2">
          <div className="flex flex-col gap-2 md:hidden">
            {sorted.map((category) => (
              <div
                key={category._id}
                id={category._id}
                ref={(el) => {
                  categoryRefs.current[category._id] = el;
                }}
                className="scroll-mt-20"
              >
                <h2 className={cn("pb-3 text-2xl font-bold text-menusecondary",
                  category.items.length === 0 && "hidden pb-0"
                )}>
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {category.items.map((item) => (
                    <MenuItemMobile key={item._id} id={item._id} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {
        cartItems.length > 0 ? (
          <Link
            className={cn(
              "fixed bottom-0 left-0 z-30 flex w-full justify-between bg-menuprimary px-3 h-14 items-center md:hidden",
            )}
            href="/cart"
          >
            <p className="w-full text-center text-lg font-semibold uppercase text-menuforeground">
              View Basket ({cartItems.length})
            </p>
          </Link>
        ) : (
          <div
            className={cn(
              "fixed bottom-0 left-0 z-30 flex w-full justify-between bg-menuprimary px-3 h-14 items-center md:hidden",
            )}
          >
            <p className="w-full text-center text-lg font-bold uppercase text-menuforeground">
              Add Items To Order
            </p>
          </div>
        )
      }
    </section >
  );
}
