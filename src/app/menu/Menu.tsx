"use client";

import MenuItem from "@/app/menu/MenuItem";
import CartDeletePopup from "@/components/popups/CartDeletePopup";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";
import { formattedItemPrice } from "@/lib/formatted-item-price";
import { getCurrencySymbol } from "@/lib/get-currency-symbol";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  CircleMinus,
  CirclePlus,
  ShoppingBag,
  Trash2,
  Triangle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Menu() {
  const { organizedMenu, restaurant } = useRestaurant();
  const [activeCategory, setActiveCategory] = useState<string>("");
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

  const { cartItems, updateItem, removeItem } = useCart();
  const [totalAmount, setTotalAmount] = useState(0);
  const { items } = useRestaurant();
  useEffect(() => {
    console.log(cartItems, "==cart");

    const totalCart = cartItems.reduce(
      (acc, i) => acc + i.price.value,
      0,
    );
    console.log(totalCart, "==totalCart");

    setTotalAmount(totalCart);
  }, [cartItems]);
  const reversedCartItems = [...cartItems].reverse();

  //category filter
  const [existCategory, setExistCategory] = useState<string[]>([]);

  useEffect(() => {
    const updatedCategories: string[] = [];
    organizedMenu?.forEach((data) => {
      if (
        data?.items?.find((item) => item.extras)?.extras?.availability?.days &&
        data?.items?.find((item) => item.extras)?.extras?.menuItemOrderType
      ) {
        const categoryexist = data.items.find(
          (Item) =>
            Item?.extras?.availability?.days.includes(
              format(Date.now(), "EEEE").toLowerCase(),
            ) &&
            (Item?.extras?.menuItemOrderType === "both" ||
              Item?.extras?.menuItemOrderType === "takeaway"),
        )?._idCategory;

        if (categoryexist && !updatedCategories.includes(categoryexist)) {
          updatedCategories.push(categoryexist);
        }
      } else if (
        data?.items?.find((item) => item.extras)?.extras?.availability?.days
      ) {
        const categoryexist = data.items.find((Item) =>
          Item?.extras?.availability?.days.includes(
            format(Date.now(), "EEEE").toLowerCase(),
          ),
        )?._idCategory;
        if (categoryexist && !updatedCategories.includes(categoryexist)) {
          updatedCategories.push(categoryexist);
        }
      } else if (
        data?.items?.find((item) => item.extras)?.extras?.menuItemOrderType
      ) {
        const categoryexist = data.items.find(
          (Item) =>
            Item?.extras?.menuItemOrderType === "both" ||
            Item?.extras?.menuItemOrderType === "takeaway",
        )?._idCategory;

        if (categoryexist && !updatedCategories.includes(categoryexist)) {
          updatedCategories.push(categoryexist);
        }
      } else {
        const categoryexist = data.items.find((Item) => Item)?._idCategory;

        if (categoryexist && !updatedCategories.includes(categoryexist)) {
          updatedCategories.push(categoryexist);
        }
      }
    });

    setExistCategory(updatedCategories);
  }, [organizedMenu]);


  return (
    <section className="flex w-full max-w-[1300px] flex-row bg-menubg">
      <div className="flex w-full flex-col gap-4 md:w-4/6">
        <div
          className="relative hidden h-[30vh] w-full bg-white md:flex"
          style={{
            background:
              "linear-gradient(170deg, rgba(0, 0, 0, 0.00) 7.51%, rgba(0, 0, 0, 0.80) 92.93%), url('/images/menuhero.png') lightgray 50% / cover no-repeat",
          }}
        >
          <div className="absolute left-0 top-0 flex h-full w-full items-end justify-end px-12 py-12">
            <Link href='/pdf/dine-in-menu.pdf' target="_blank">
              <Button className="flex items-center justify-center gap-2 bg-menuprimary rounded-none px-5 py-6 text-lg font-[600] text-menuforeground hover:bg-buttonhover">
                <Image src="/images/pdf.svg" width={23} height={29} alt="pdf" />
                <span className="leading-none">Download Menu</span>
              </Button>
            </Link>
          </div>
        </div>
        {/* Categories */}
        <div className="sticky top-0 z-10 flex items-center bg-menuforeground px-4 py-2">
          <div
            ref={categoryNavRef}
            className="hidden-scrollbar flex overflow-x-auto py-2"
          >
            <div className="flex gap-4">
              {organizedMenu.map((category) => (
                <Button
                  key={category._id}
                  ref={(el) => {
                    categoryButtonRefs.current[category._id] = el;
                  }}
                  onClick={() => scrollToCategory(category._id)}
                  className={cn(
                    "shrink-0 rounded-none font-extrabold transition-colors",
                    activeCategory === category._id
                      ? "bg-menuprimary text-menuforeground"
                      : "bg-menusecondary text-menuforeground hover:bg-buttonhover",
                    existCategory.find(
                      (categoryid) => categoryid === category._id,
                    ) !== category._id && "hidden w-0 border-0 px-0 py-0",
                  )}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
        {/* Items */}
        <div className="px-4">
          <div className="flex flex-col gap-8">
            {organizedMenu.map((category) => (
              <div
                key={category._id}
                id={category._id}
                ref={(el) => {
                  categoryRefs.current[category._id] = el;
                }}
                className="scroll-mt-20"
              >
                <h2 className={cn(
                  "text-2xl font-bold text-menusecondary",
                  category._id !==
                  existCategory.find(
                    (categoryid) => categoryid === category._id,
                  ) && "mt-0 hidden w-0 gap-0",)}>{category.name}</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {category.items.map((item) => (
                    <MenuItem key={item._id} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden w-2/6 flex-col md:flex">
        <div className="sticky top-0 z-10 h-fit overflow-y-visible bg-itembackground px-4 py-2">
          <div className="scrollbar-none flex flex-col gap-6 overflow-x-auto pb-2">
            <p className="flex items-center justify-center gap-1 pt-6 text-base font-normal tracking-[1.8px] text-menusecondary">
              <ShoppingBag fill="#fbead2" className="text-itembackground" />{" "}
              <span>
                Collection from{" "}
                {restaurant?.name}
              </span>
            </p>
            {/* <div className="flex w-full gap-4">
              <Button
                className={cn(
                  "w-full rounded-none bg-menuprimary text-menuforeground font-bold uppercase",
                  orderType === 3
                    ? "border border-menuprimary bg-menubackground text-menuprimary hover:bg-menuprimary hover:text-menuforeground"
                    : "",
                )}
                onClick={() => setOrderType(3)}
              >
                I&apos;ll Collect
              </Button>
              <Button
                className={cn(
                  "w-full rounded-none bg-menuprimary text-menuforeground font-bold uppercase",
                  orderType === 2
                    ? "border border-menuprimary bg-menubackground text-menuprimary hover:bg-menuprimary hover:text-menuforeground"
                    : "",
                )}
                onClick={() => setOrderType(2)}
              >
                Delivery
              </Button>
            </div> */}
            <Button
              className="relative flex w-full items-center justify-between rounded-none bg-menuprimary py-6 font-manrope text-lg font-bold uppercase text-menubackground disabled:bg-buttondisabled disabled:text-background"
              onClick={() => router.push("/checkout")}
              disabled={cartItems.length === 0}
            >
              <Link href="/checkout">
                <span className="absolute -top-2 left-4">
                  <Triangle
                    fill="#c0b5a5"
                    className="rotate-180 text-menuprimary-foreground"
                  />
                </span>
                <span className="font-bold">CHECKOUT</span>{" "}
                <span>
                  {"£"} {formattedItemPrice(totalAmount)}
                </span>
              </Link>
            </Button>
            {/* Separator */}
            <div className="h-[1px] w-full rounded-full bg-menuprimary"></div>

            <div className="hidden-scrollbar flex max-h-[360px] w-full flex-col gap-4 overflow-y-scroll">
              {cartItems.length !== 0 ? (
                <div className="flex w-full flex-col">
                  {reversedCartItems.map((item, index) => {
                    const menuitem = items.find((i) => i._id === item._idMenuItem);
                    return (
                      <div
                        className="flex w-full flex-col items-start justify-start gap-3 border-b-[0.3px] border-b-menuprimary px-3 py-5"
                        key={index}
                      >
                        <div className="flex w-full items-center justify-between">
                          <div className="flex w-3/4 flex-col items-start justify-start gap-1">
                            <p className="text-lg font-[700] tracking-[1.8px] text-menusecondary">
                              {item?.quantity}&nbsp;&nbsp;{item.name}
                            </p>
                          </div>
                          <p className="font-[700] text-menuprimary">
                            {menuitem && getCurrencySymbol(menuitem.price.currency)}{" "}
                            {menuitem && formattedItemPrice(menuitem.price.value)}
                          </p>
                        </div>
                        <div className="flex w-full flex-col items-center justify-between gap-2 pl-3">
                          {item.modifiers.map((modifiers, index) => {
                            const modifier = items.find(
                              (item) => item._id === modifiers._idMenuItem,
                            )?.name;
                            return (
                              <div
                                className="flex w-full items-center justify-between"
                                key={index}
                              >
                                <p className="w-[80%] text-sm font-[300] tracking-[1.4px] text-menusecondary">
                                  {item?.quantity}&nbsp;&nbsp;{modifier}
                                </p>
                                <p className="text-sm font-[700] text-menuprimary">
                                  {getCurrencySymbol(modifiers.price.currency)}{" "}
                                  {formattedItemPrice(modifiers.price.value)}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex w-full items-center justify-between pt-6">
                          <Link
                            href={`/cart/${index}`}
                            className="font-[400] capitalize text-menuprimary"
                          >
                            Edit Item
                          </Link>
                          <div className="flex items-center justify-center gap-2">
                            <CartDeletePopup item={item}>
                              <button className="transition-all duration-150 ease-out hover:scale-[1.2]">
                                <Trash2 className="text-menusecondary" />
                              </button>
                            </CartDeletePopup>
                            <button
                              className="transition-all duration-150 ease-out hover:scale-[1.2]"
                              onClick={() => {
                                if (item.quantity <= 1) {
                                  return removeItem(
                                    item._idMenuItem,
                                    item.modifiers,
                                  );
                                }
                                updateItem(
                                  {
                                    ...item,
                                    price: {
                                      currency: item.price.currency,
                                      value: item.price.value - item.price.value / item.quantity,
                                    },
                                    quantity: item.quantity - 1,
                                  },
                                  index,
                                );
                              }}
                            >
                              <CircleMinus className="text-menusecondary" />
                            </button>
                            <p className="text-2xl font-[500] text-menuprimary">
                              {item.quantity}
                            </p>
                            <button
                              className="transition-all duration-150 ease-out hover:scale-[1.2]"
                              onClick={() => {
                                updateItem(
                                  {
                                    ...item,
                                    price: {
                                      currency: item.price.currency,
                                      value: item.price.value + item.price.value / item.quantity,
                                    },
                                    quantity: item.quantity + 1,
                                  },
                                  index,
                                );
                              }}
                            >
                              <CirclePlus className="text-menusecondary" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                <p className="w-full text-center text-menusecondary">
                  Your cart is empty! Add items to proceed
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <p className="font-bold text-menuprimary-foreground">Subtotal</p>
              <p className="text-lg font-bold text-menuprimary">
                {"£"} {formattedItemPrice(totalAmount)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
