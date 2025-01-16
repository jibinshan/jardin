import MenuItemDrawer from "@/components/drawer/MenuItemDrawer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { useRestaurant } from "@/context/RestaurantContext";
import { BetaMenuActive } from "@/lib/constants";
import { formattedItemPrice } from "@/lib/formatted-item-price";
import { getCurrencySymbol } from "@/lib/get-currency-symbol";
import { getMenuItemById } from "@/lib/get-menu-item-by-id";
import { GetModifiersFromItemId } from "@/lib/get-modifiers-from-item-id";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import type { FC } from "react";

interface MenuItemProps {
  id: string;
}

const MenuItemMobile: FC<MenuItemProps> = ({ id }) => {
  const { items } = useRestaurant();
  const { removeItem, updateItem, cartItems } = useCart();
  const item = getMenuItemById(id, items);
  const cartitem = cartItems.find((cart) => cart._idMenuItem === item?._id);
  return (
    item && (
      <MenuItemDrawer item={item}>
        <div className="z-10 flex h-fit w-full flex-row items-center overflow-hidden bg-mobilebg px-0 py-4">
          <div
            className={cn(
              "flex w-[60%] flex-col items-start justify-between gap-4 py-[1rem] md:flex-row",
              !item.images[0] && "w-full",
            )}
          >
            <div className="flex w-full flex-col gap-2">
              <h2 className="w-full font-inter text-xl font-[600] capitalize leading-[150%] tracking-[1px] text-menusecondary">
                {item.name}
              </h2>
              <p
                className="line-clamp-3 w-[95%] text-sm font-medium lowercase text-itemdescription"
                style={{ wordSpacing: "0.10rem" }}
              >
                {item.description}
              </p>
              <div
                className={cn(
                  "justify-start",
                  !item.images[0] && "flex w-full items-center justify-between pr-8",
                )}
              >
                <p className="mt-3 w-fit rounded-3xl bg-menusecondary-foreground p-2 px-3 py-3 text-base font-medium leading-[80%] tracking-[1px] text-menuprimary-foreground">
                  {item.takeawayPrice.value > 0 ? (
                    <>
                      {getCurrencySymbol(item.takeawayPrice.currency)}{" "}
                      {formattedItemPrice(item.takeawayPrice.value)}
                    </>
                  ) : (
                    <>
                      {item.price.value > 0 ? (
                        <>
                          {getCurrencySymbol(item.price.currency)}{" "}
                          {formattedItemPrice(item.price.value)}
                        </>
                      ) : (
                        <>
                          {item.modifiers.length === 0 ? (
                            <>Free</>
                          ) : (
                            GetModifiersFromItemId(item, items, 0).map(
                              (modifier) => {
                                if (
                                  modifier._id ===
                                  item.modifiers.find(
                                    (modifier) => modifier.defaultSelection,
                                  )?.defaultSelection
                                ) {
                                  return `${getCurrencySymbol(modifier.price.currency)} ${modifier.price.value}`;
                                }
                              },
                            )
                          )}
                        </>
                      )}
                    </>
                  )}
                </p>
                <div
                  className={cn(
                    "hidden",
                    !item.images[0] && "flex items-center justify-center",
                  )}
                >
                  {cartItems.find(
                    (cartItem) => cartItem._idMenuItem === item._id,
                  ) === undefined ? (
                    <Button
                      className={cn(
                        "bottom-2 w-fit rounded-none bg-menuprimary py-5 text-[1.25rem] font-medium leading-[80%] text-menusecondary",
                        !BetaMenuActive && "hidden",
                      )}
                    >
                      Add
                    </Button>
                  ) : (
                    <div className="flex h-fit w-fit items-center gap-3 bg-menuprimary p-2 text-menusecondary">
                      <Button
                        className={cn(
                          "h-fit w-fit rounded-full bg-transparent p-0 hover:bg-transparent",
                          !BetaMenuActive && "hidden",
                        )}
                        onClick={() => {
                          if (
                            cartItems.find(
                              (cartItem) => cartItem._idMenuItem === item._id,
                            )!.quantity <= 1
                          ) {
                            return removeItem(item._id);
                          }
                          if (cartitem?.quantity) {
                            updateItem(
                              {
                                ...cartitem,
                                quantity: cartitem?.quantity - 1,
                              },
                              0,
                            );
                          }
                        }}
                      >
                        <Minus className="text-menusecondary" />
                      </Button>
                      {
                        cartItems.find(
                          (cartItem) => cartItem._idMenuItem === item._id,
                        )!.quantity
                      }
                      <Button
                        className="h-fit w-fit rounded-full bg-transparent p-0 hover:bg-transparent"
                        onClick={() => {
                          if (cartitem?.quantity) {
                            updateItem(
                              {
                                ...cartitem,
                                quantity: cartitem?.quantity + 1,
                              },
                              0,
                            );
                          }
                        }}
                      >
                        <Plus className="text-menusecondary" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "relative z-10 flex h-full w-[40%] py-4",
              !item.images[0] && "hidden",
            )}
          >
            {item.images[0] && (
              <Image
                src={item.images[0]}
                width={1980}
                height={1080}
                alt={item.name}
                className="z-10 aspect-square h-auto w-full rounded-xl object-cover"
              />
            )}
            <div
              className={cn(
                "absolute -bottom-2 z-50 flex w-full items-center justify-center",
                !item.images[0] && "hidden",
              )}
            >
              {cartItems.find(
                (cartItem) => cartItem._idMenuItem === item._id,
              ) === undefined ? (
                <Button
                  className={cn(
                    "bottom-2 w-fit rounded-none bg-menuprimary text-[1.25rem] font-medium leading-[80%] text-menusecondary hover:bg-menuprimary",
                    !BetaMenuActive && "hidden",
                  )}
                >
                  Add
                </Button>
              ) : (
                <div className="flex h-fit w-fit items-center gap-3 bg-menuprimary p-2 text-menusecondary">
                  <Button
                    className={cn(
                      "h-fit w-fit rounded-full bg-transparent p-0 hover:bg-transparent",
                      !BetaMenuActive && "hidden",
                    )}
                    onClick={() => {
                      if (
                        cartItems.find(
                          (cartItem) => cartItem._idMenuItem === item._id,
                        )!.quantity <= 1
                      ) {
                        return removeItem(item._id);
                      }
                      if (cartitem?.quantity) {
                        updateItem(
                          {
                            ...cartitem,
                            quantity: cartitem?.quantity - 1,
                          },
                          0,
                        );
                      }
                    }}
                  >
                    <Minus className="text-menusecondary" />
                  </Button>
                  {
                    cartItems.find(
                      (cartItem) => cartItem._idMenuItem === item._id,
                    )!.quantity
                  }
                  <Button
                    className="h-fit w-fit rounded-full bg-transparent p-0 hover:bg-transparent"
                    onClick={() => {
                      if (cartitem?.quantity) {
                        updateItem(
                          {
                            ...cartitem,
                            quantity: cartitem?.quantity + 1,
                          },
                          0,
                        );
                      }
                    }}
                  >
                    <Plus className="text-menusecondary" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </MenuItemDrawer>
    )
  );
};

export default MenuItemMobile;
