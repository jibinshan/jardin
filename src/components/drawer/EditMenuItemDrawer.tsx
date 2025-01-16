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
import type { CartItem, CartItemModifier } from "@/types/cart-item.type";
import type { MenuItem } from "@/types/menu";
import { type FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Drawer, DrawerContent, DrawerFooter, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { useRestaurant } from "@/context/RestaurantContext";
import { cn } from "@/lib/utils";
import { Minus } from "lucide-react";

interface MenuItemPopupProps {
    children: React.ReactNode;
    item: CartItem;
    index: number;
}

const EditMenuItemDrawer: FC<MenuItemPopupProps> = ({ children, item, index }) => {
    const [open, setOpen] = useState(false);
    const [price, setPrice] = useState(item.price.value);
    const [selectedModifiers, setSelectedModifiers] = useState<MenuItem[]>([]);
    const { items } = useRestaurant();
    const { cartItems, updateItem } = useCart();

    // Find the cart item using the index
    const cartItem = cartItems[index];
    const [quantity, setQuantity] = useState(1);
    const [note, setNote] = useState("");

    const handleModifierChange = (modifier: MenuItem, isChecked: boolean) => {
        setSelectedModifiers((prev) => (isChecked ? [...prev, modifier] : prev.filter((m) => m._id !== modifier._id)));
    };
    const menuitem = items.find((i) => i._id === item._idMenuItem)


    useEffect(() => {
        if (item) {
            setQuantity(item.quantity ?? 1);
            setNote(item.notes ?? "");

            // Clear existing selections
            setSelectedModifiers([]);

            // Add current modifiers
            if (item.modifiers) {
                const modifiers = item.modifiers
                    .map((mod) => {
                        const modifier = items.find((item) => item._id === mod._idMenuItem);
                        return modifier;
                    })
                    .filter((mod): mod is MenuItem => mod !== undefined);

                setSelectedModifiers(modifiers);
            }
        }
    }, [item, items])

    useEffect(() => {
        if (!item || !selectedModifiers || quantity === 0) return;

        const basePrice = menuitem?.price.value;

        // Calculate the total price of selected modifiers

        // Calculate the total price as: (basePrice + modifiersTotal) * quantity
        const modifiersTotal = selectedModifiers.reduce((sum, mod) => sum + mod.price.value, 0);
        if (basePrice) {
            const totalPrice = parseFloat(((basePrice + modifiersTotal) * quantity).toFixed(2));
            setPrice(totalPrice);
        }


    }, [menuitem?.price.value, selectedModifiers, quantity, item]);

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent className="flex h-[90%] w-full flex-col justify-end border-[1px] border-menubackground bg-menubackground lg:hidden lg:w-0">
                <DrawerTitle></DrawerTitle>
                <div
                    style={{
                        backgroundImage: item.images[0] ? `url(${item.images[0]})` : "/images/menu/items/item-placeholder.svg",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className={cn(
                        "fixed top-0 h-[230px] w-full rounded-t-xl",
                        !item.images[0] && "h-0",
                    )}
                ></div>
                <Button className="bg-black/50 absolute right-2 top-2 z-50 rounded-full px-3" variant="ghost" onClick={() => setOpen(false)}>
                    <Icons.close className="h-4 w-4" />
                </Button>
                <div className={cn(
                    "z-40 flex h-[90%] flex-col gap-5 overflow-y-scroll px-4",
                    !item.images[0] && "h-[90%]",
                )}>
                    <div className={cn("pt-48", !item.images[0] && "pt-0")}>
                        <div className="rounded-md bg-menuforeground px-5 py-6">
                            {menuitem && (
                                <div className="flex flex-col gap-2">
                                    <div className="z-40 flex w-full justify-between gap-2">
                                        <p className="text-lg font-semibold text-menusecondary">{menuitem?.name}</p>
                                        <p className="text-lg font-semibold text-menusecondary">
                                            {getCurrencySymbol(menuitem?.price?.currency)} {formattedItemPrice(menuitem.price.value)}
                                        </p>
                                    </div>
                                    <p className="text-itemdescription text-sm font-[400]">{item.description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    {menuitem?.modifiers.map((mod, index) => (
                        <div className="bg-menuforeground rounded-xl px-5 py-6" key={index}>
                            <div className="flex flex-col gap-4 space-y-2">
                                <p className="w-full pb-1 text-lg font-semibold text-itemdescription">{mod.header}</p>
                                <div className="z-40 flex h-full w-full flex-col gap-6">
                                    {GetModifiersFromItemId(menuitem, items, index).map((modifier) => (
                                        <div
                                            key={modifier._id}
                                            className="flex w-full cursor-pointer items-center justify-between gap-4"
                                        >
                                            <Label htmlFor={modifier._id} className="flex items-center gap-2 text-menusecondary">
                                                {modifier.name}
                                            </Label>
                                            <div className="flex gap-1">
                                                <Label htmlFor={modifier._id} className="flex items-center gap-2 text-menusecondary">
                                                    {getCurrencySymbol(modifier?.price?.currency)} {formattedItemPrice(modifier.price.value)}
                                                </Label>
                                                <Checkbox
                                                    id={modifier._id}
                                                    checked={selectedModifiers.some((m) => m._id === modifier._id)}
                                                    onCheckedChange={(checked) => handleModifierChange(modifier, checked as boolean)}
                                                    className="border-menusecondary data-[state=checked]:bg-menuprimary"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {BetaMenuActive && (
                    <DrawerFooter className="flex w-full flex-row justify-start gap-5">
                        <div className="flex h-12 w-1/2 items-center justify-center gap-3 rounded-none bg-menuprimary text-menuforeground p-2 text-menu">
                            <Button
                                className="h-full w-1/3 rounded-full bg-transparent p-0 hover:bg-transparent"
                                onClick={() => {
                                    setQuantity((prev) => Math.max(prev - 1, 1));
                                }}
                            >
                                <Minus className="text-menuforeground" />
                            </Button>
                            {quantity}
                            <Button
                                className="h-full w-1/3 rounded-full bg-transparent p-0 hover:bg-transparent"
                                onClick={() => {
                                    setQuantity((prev) => prev + 1);
                                }}
                            >
                                <Minus className="text-menuforeground" />
                            </Button>
                        </div>
                        <Button
                            type="submit"
                            className="w-1/2 h-12 text-base text-menuforeground bg-menuprimary font-medium rounded-none"
                            onClick={() => {
                                if (!cartItem || !item) {
                                    toast.error("Cart item not found");
                                    return;
                                }

                                // Convert selected modifiers to CartItemModifier format
                                const modifiers: CartItemModifier[] = selectedModifiers.map((mod) => ({
                                    _idModifiers: menuitem?.modifiers[0]?._id ?? "",
                                    _idMenuItem: mod._id,
                                    price: mod.price,
                                }));

                                // Create updated item while preserving the original item's properties
                                const updatedItem: CartItem = {
                                    ...cartItem,
                                    quantity,
                                    price: {
                                        value: price ?? 0,
                                        currency: item.price.currency,
                                    },
                                    notes: note,
                                    modifiers,
                                };

                                updateItem(updatedItem, index);
                                toast.success("Item updated");
                                setOpen(false);
                                setQuantity(1);
                                setSelectedModifiers([]);

                            }}
                        >
                            Update . &nbsp;{getCurrencySymbol(item.price.currency)}
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

export default EditMenuItemDrawer;
