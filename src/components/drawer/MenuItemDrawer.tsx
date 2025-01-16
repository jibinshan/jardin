"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useCart } from "@/context/CartContext";
import { BetaMenuActive } from "@/lib/constants";
import { formattedItemPrice } from "@/lib/formatted-item-price";
import { getCurrencySymbol } from "@/lib/get-currency-symbol";
import { GetModifiersFromItemId } from "@/lib/get-modifiers-from-item-id";
import type { CartItemModifier } from "@/types/cart-item.type";
import type { MenuItem } from "@/types/menu";
import { type FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { useRestaurant } from "@/context/RestaurantContext";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";

interface MenuItemPopupProps {
  children: React.ReactNode;
  item: MenuItem;
}

const MenuItemDrawer: FC<MenuItemPopupProps> = ({ children, item }) => {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(item.price.value);
  const [selectedModifiers, setSelectedModifiers] = useState<MenuItem[]>([]);
  const { addItem } = useCart();
  const { items } = useRestaurant();

  const handleModifierChange = (modifier: MenuItem, isChecked: boolean) => {
    setSelectedModifiers((prev) =>
      isChecked
        ? [...prev, modifier]
        : prev.filter((m) => m._id !== modifier._id),
    );
  };

  useEffect(() => {
    let price = item.price.value;

    for (const selectedModifier of selectedModifiers) {
      price += selectedModifier.price.value;
    }

    price = parseFloat((price * quantity).toFixed(2));
    setPrice(price);
  }, [item.price.value, quantity, selectedModifiers]);


  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="flex h-[90%] w-full flex-col justify-end border-[1px] border-menubackground bg-menubackground lg:hidden lg:w-0">
        <DrawerTitle></DrawerTitle>
        <div
          style={{
            backgroundImage: item.images[0]
              ? `url(${item.images[0]})`
              : "/images/menu/items/item-placeholder.svg",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className={cn(
            "fixed top-0 h-[230px] w-full rounded-t-xl",
            !item.images[0] && "h-0",
          )}
        ></div>
        <Button
          className="absolute right-2 top-2 z-50 rounded-full bg-black/50 px-3"
          variant="ghost"
          onClick={() => setOpen(false)}
        >
          <Icons.close className="h-4 w-4" />
        </Button>
        <div
          className={cn(
            "z-40 flex h-[90%] flex-col gap-5 overflow-y-scroll px-4",
            !item.images[0] && "h-[90%]",
          )}
        >
          <div className={cn("pt-48", !item.images[0] && "pt-0")}>
            <div className="rounded-xl bg-menuforeground px-5 py-6">
              {item && (
                <div className="flex flex-col gap-2">
                  <div className="z-40 flex w-full justify-between gap-2">
                    <p className="text-lg font-semibold text-menusecondary w-[70%]">{item.name}</p>
                    <p className="text-lg font-semibold text-menusecondary w-[30%] text-end">
                      {getCurrencySymbol(item?.price?.currency)}{" "}
                      {formattedItemPrice(item.price.value)}
                    </p>
                  </div>
                  <p className="text-sm font-[400] text-itemdescription">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          </div>
          {item.modifiers.map((mod, index) => (
            <div className="rounded-xl bg-black px-5 py-6" key={index}>
              <div className="flex flex-col gap-4 space-y-2">
                <p className="w-full pb-1 text-lg font-semibold text-itemdescription">
                  {mod.header}
                </p>
                <div className="z-40 flex h-full w-full flex-col gap-6">
                  {GetModifiersFromItemId(item, items, index).map(
                    (modifier) => (
                      <div
                        key={modifier._id}
                        className="flex w-full cursor-pointer items-center justify-between gap-4"
                      // onClick={() =>
                      //   handleModifierChange(
                      //     modifier,
                      //     !selectedModifiers.some(
                      //       (m) => m._id === modifier._id,
                      //     ),
                      //   )
                      // }
                      >
                        <Label
                          htmlFor={modifier._id}
                          className="flex items-center gap-2 text-menusecondary"
                        >
                          {modifier.name}
                        </Label>
                        <div className="flex gap-1">
                          <Label
                            htmlFor={modifier._id}
                            className="flex items-center gap-2 text-menusecondary"
                          >
                            {getCurrencySymbol(modifier?.price?.currency)}{" "}
                            {formattedItemPrice(modifier.price.value)}
                          </Label>
                          <Checkbox
                            id={modifier._id}
                            checked={selectedModifiers.some(
                              (m) => m._id === modifier._id,
                            )}
                            onCheckedChange={(checked) =>
                              handleModifierChange(modifier, checked as boolean)
                            }
                            className="border-menusecondary data-[state=checked]:bg-menuprimary"
                          />
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {BetaMenuActive && (
          <DrawerFooter className="flex w-full flex-row justify-start gap-5">
            <div className="flex h-12 w-1/2 items-center justify-center gap-3 rounded-none bg-menuprimary p-2 text-menuforeground">
              <Button
                className="h-full w-1/3 rounded-full bg-transparent p-0 text-menuforeground shadow-none hover:bg-menuprimary"
                onClick={() => {
                  setQuantity((prev) => Math.max(prev - 1, 1));
                }}
              >
                <Minus className="text-menuforeground" />
              </Button>
              <span className="text-lg font-medium text-menuforeground">{quantity}</span>
              <Button
                className="h-full w-1/3 rounded-full bg-primary p-0 shadow-none hover:bg-transparent"
                onClick={() => {
                  setQuantity((prev) => prev + 1);
                }}
              >
                <Plus className="text-menuforeground" />
              </Button>
            </div>
            <Button
              type="submit"
              className="h-12 w-1/2 rounded-none bg-menuprimary text-menuforeground text-lg font-medium"
              onClick={() => {
                const modifiers: CartItemModifier[] = [];
                for (const selectedModifier of selectedModifiers) {
                  // const modifier = item.modifiers.find(
                  //   (m) => m._id === selectedModifier._id,
                  // );
                  // if (modifier) {
                  modifiers.push({
                    _idModifiers: item?.modifiers[0]?._id
                      ? item?.modifiers[0]?._id
                      : "",
                    price: selectedModifier.price,
                    _idMenuItem: selectedModifier._id,
                  });
                  // }
                }
                addItem({
                  name: item.name,
                  _idMenuItem: item._id,
                  quantity,
                  price: {
                    value: price,
                    currency: item.price.currency,
                  },
                  modifiers: modifiers,
                  images: item.images,
                  description: item.description,
                });
                toast.success("Item added to cart");
                setOpen(false);
                setQuantity(1);
                setSelectedModifiers([]);
              }}
            >
              Add &nbsp;{getCurrencySymbol(item.price.currency)}
              <span className="tracking-[1px]">
                {formattedItemPrice(price)}
              </span>
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default MenuItemDrawer;
