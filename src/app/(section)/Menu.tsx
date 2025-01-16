"use client";
import { useEffect, useState } from "react";
import gsap, { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const Menu = ({}) => {
  const [select, setSelect] = useState(0);

  return (
    <section
      id="menu"
      className="flex min-h-screen w-full flex-col items-center justify-center"
    >
      <div
        className={cn(
          "sticky top-0 flex w-full flex-col bg-[#034426] px-4 md:px-0",
          select !== 0 && "static z-40 bg-[#034426]",
        )}
      >
        <div className="flex w-full items-center justify-center bg-[#034426] pb-12 pt-12">
          <div className="flex w-full max-w-[1300px] items-center justify-between">
            <p className="rounded-full border-[1px] border-[#2c6146] px-6 py-4 font-cormorant text-lg font-[400] uppercase text-[#ECE6D6] md:text-2xl">
              Make Your Menu Selection
            </p>
          </div>
        </div>
        <div
          className={cn(
            "menu-section z-10 flex h-[30vh] w-full flex-col items-center justify-start gap-5 bg-[#034426] pb-12 transition-all duration-500 ease-in",
            select === 1 && "h-fit md:h-fit",
            select !== 0 && "static",
          )}
        >
          <div className="flex w-full max-w-[1300px] items-start justify-between">
            <div className="flex items-center justify-center gap-4">
              <p className="font-cormorant text-2xl font-[400] uppercase">01</p>
              <p className="font-cormorant text-3xl uppercase md:text-7xl">
                Lunch
              </p>
            </div>
            <div
              className="rounded-full bg-[#0e603a] p-3"
              onClick={() => setSelect((prev) => (prev === 1 ? 0 : 1))}
            >
              <ChevronUp
                className={cn(
                  "text-white transition-all duration-500 ease-in",
                  select === 1 && "rotate-180",
                )}
              />
            </div>
          </div>
          {select === 1 && (
            <div className="flex w-full max-w-[1300px] flex-col items-start justify-start gap-4">
              <p className="font-playfair text-xl text-primary">
                Botana (appetizers)
              </p>
              <div className="flex w-full flex-col gap-2 md:flex-row">
                <div className="flex w-full flex-col gap-2 md:w-1/2">
                  <div className="flex w-full justify-between md:pr-14">
                    <div>
                      <p className="font-playfair text-lg text-white">
                        Jardín Guacamole UECANi
                      </p>
                      <p className="max-w-[250px] text-sm font-[400] text-white">
                        Mexican avocado dip seasoned with colima salt, olive
                        oil, and fresh lime juice, served with fresh, handmade
                        maiz tostadas
                      </p>
                    </div>
                    <p className="font-playfair text-lg font-[400]">6.99</p>
                  </div>
                  <div className="flex w-full justify-between md:pr-14">
                    <div>
                      <p className="font-playfair text-lg text-white">
                        Jardín Habanero Chicken Wings (8 pcs)
                      </p>
                      <p className="max-w-[250px] text-sm font-[400] text-white">
                        Served with 3-Cheese Mexican Dip{" "}
                      </p>
                    </div>
                    <p className="font-playfair text-lg font-[400]">12.95</p>
                  </div>
                  <div className="flex w-full justify-between md:pr-14">
                    <div>
                      <p className="font-playfair text-lg text-white">
                        Sonora Chiltepin & Prawn Aguachile Tostada (3 pcs)
                      </p>
                      <p className="max-w-[250px] text-sm font-[400] text-white">
                        Lime cured prawns mixed with fresh vegetables, served
                        with corn tostadas
                      </p>
                    </div>
                    <p className="font-playfair text-lg font-[400]">15.99</p>
                  </div>
                  <div className="flex w-full justify-between md:pr-14">
                    <div>
                      <p className="font-playfair text-lg text-white">
                        Elote a la Jardín (5 pcs)
                      </p>
                      <p className="max-w-[250px] text-sm font-[400] text-white">
                        Grilled baby corn with dried chili mayonnaise and
                        freshly grated cheese{" "}
                      </p>
                    </div>
                    <p className="font-playfair text-lg font-[400]">10.95</p>
                  </div>
                  <div className="flex w-full justify-between md:pr-14">
                    <div>
                      <p className="font-playfair text-lg text-white">
                        Ceviche Baja Style Tostada (3 pcs)
                      </p>
                      <p className="max-w-[250px] text-sm font-[400] text-white">
                        Raw catch of the day mixed with fresh vegetables and
                        guacamole, served atop crispy corn tostadas{" "}
                      </p>
                    </div>
                    <p className="font-playfair text-lg font-[400]">14.95</p>
                  </div>
                </div>

                <div className="flex w-full flex-col gap-2 md:w-1/2">
                  <div className="flex w-full justify-between md:pr-14">
                    <div>
                      <p className="font-playfair text-lg text-white">
                        Nopales Mexican Salad
                      </p>
                      <p className="max-w-[250px] text-sm font-[400] text-white">
                        Cactus pad salad with heirloom tomatoes and dried chili
                        dressing
                      </p>
                    </div>
                    <p className="font-playfair text-lg font-[400]">10.95</p>
                  </div>
                  <div className="flex w-full justify-between md:pr-14">
                    <div>
                      <p className="font-playfair text-lg text-white">
                        Birria (3 pcs)
                      </p>
                      <p className="max-w-[250px] text-sm font-[400] text-white">
                        Tender, slow cooked beefwith dried chili adobo stew
                      </p>
                    </div>
                    <p className="font-playfair text-lg font-[400]">8.99</p>
                  </div>
                  <div className="flex w-full justify-between md:pr-14">
                    <div>
                      <p className="font-playfair text-lg text-white">
                        Lamb Barbacoa (3 pcs)
                      </p>
                      <p className="max-w-[250px] text-sm font-[400] text-white">
                        Slow cooked lamb with Mexican spices in a crispy taco
                        with sour cream and coleslaw
                      </p>
                    </div>
                    <p className="font-playfair text-lg font-[400]">10.95</p>
                  </div>
                  <div className="flex w-full justify-between md:pr-14">
                    <div>
                      <p className="font-playfair text-lg text-white">
                        Mexican Rice
                      </p>
                      <p className="max-w-[250px] text-sm font-[400] text-white">
                        Rice ofthe day, cooked Mexican style
                      </p>
                    </div>
                    <p className="font-playfair text-lg font-[400]">4.99</p>
                  </div>
                  <div className="flex w-full justify-between md:pr-14">
                    <div>
                      <p className="font-playfair text-lg text-white">
                        Frijoles de la Olla Y
                      </p>
                      <p className="max-w-[250px] text-sm font-[400] text-white">
                        Black beans gently boiled with dry herbs, topped with
                        fresh cheese
                      </p>
                    </div>
                    <p className="font-playfair text-lg font-[400]">3.99</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={cn(
          "menu-section sticky top-[280px] z-20 flex h-[50vh] w-full flex-col items-center justify-start gap-5 bg-[#035731] px-4 py-12 transition-all duration-500 ease-in md:px-0",
          select === 2 && "h-fit md:h-fit",
          select !== 0 && "static",
        )}
      >
        <div className="flex w-full max-w-[1300px] items-start justify-between">
          <div className="flex items-center justify-center gap-4">
            <p className="font-cormorant text-2xl font-[400] uppercase">02</p>
            <p className="font-cormorant text-3xl uppercase md:text-7xl">
              Dinner
            </p>
          </div>
          <div
            className="rounded-full bg-[#0e603a] p-3"
            onClick={() => setSelect((prev) => (prev === 2 ? 0 : 2))}
          >
            <ChevronUp
              className={cn(
                "text-white transition-all duration-500 ease-in",
                select === 2 && "rotate-180",
              )}
            />
          </div>
        </div>
        {select === 2 && (
          <div className="flex w-full max-w-[1300px] flex-col items-start justify-start gap-4">
            <p className="font-playfair text-xl text-primary">
              Botana (appetizers)
            </p>
            <div className="flex w-full flex-col gap-2 md:flex-row">
              <div className="flex w-full flex-col gap-2 md:w-1/2">
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Jardin Guacamole VEGAN
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      Mexican avocado dip seasoned with colima salt, olive oil,
                      and fresh lime juice, served with fresh, handmade maiz
                      tostadas{" "}
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">6.99</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Jardin Habanero Chicken Wings (8 pcs)
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      Served with 3-Cheese Mexican Dip{" "}
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">12.95</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Sonora Chiltepin & Prawn Aguachile Tostada (3 pcs)
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      Lime cured prawns mixed with fresh vegetables, served with
                      corn tostadas
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">15.99</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Elote a la Jardin (5 pcs)
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      Grilled baby corn with dried chili mayonnaise and freshly
                      grated cheese{" "}
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">10.95</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Nopales Mexican Salad Y
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      Cactus pad salad with heirloom tomatoes and dried chili
                      dressing{" "}
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">10.95</p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-2 md:w-1/2">
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Jardin Salad
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      Mixed lettuce salad with fresh vegetables and house
                      dressing
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">6.99</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Poblano Short Rib Enchiladas
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      Tender, slow-cooked short rib wrapped in soft corn
                      tortillas and smothered in a rich, smoky poblano chili
                      sauce
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">23.99</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Jalisco Style Rcd Pozolc with Bccf
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      Flavorful Mexican curry made with beef, cacahuatzintle
                      corn, and a rich dried chili broth. Served with crisp
                      iceberg lettuce, tostadas, chicharr6n, and creamy avocado
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">24.99</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Jardin Taco Tour (6 pcs)
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      A delicious platter featuring one of each of our signature
                      tacos
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">18.99</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Birria (5 pcs)
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      Tender, slow cooked beef with dried chili adobo stew
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">14.99</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={cn(
          "menu-section sticky top-[450px] z-30 flex h-[50vh] w-full flex-col items-center justify-start gap-5 bg-[#2d7323] px-4 py-12 transition-all duration-500 ease-in md:px-0",
          select === 3 && "h-fit md:h-fit",
          select !== 0 && select !== 3 && "static",
        )}
      >
        <div className="flex w-full max-w-[1300px] items-start justify-between">
          <div className="flex items-center justify-center gap-4">
            <p className="font-cormorant text-2xl font-[400] uppercase">03</p>
            <p className="font-cormorant text-3xl uppercase md:text-7xl">
              Drinks
            </p>
          </div>
          <div
            className="rounded-full bg-[#367d2b] p-3"
            onClick={() => setSelect((prev) => (prev === 3 ? 0 : 3))}
          >
            <ChevronUp
              className={cn(
                "text-white transition-all duration-500 ease-in",
                select === 3 && "rotate-180",
              )}
            />
          </div>
        </div>
        {select === 3 && (
          <div className="flex w-full max-w-[1300px] flex-col items-start justify-start gap-4">
            <p className="font-playfair text-xl text-primary">
              Botana (appetizers)
            </p>
            <div className="flex w-full flex-col gap-2 md:flex-row">
              <div className="flex w-full flex-col gap-2 md:w-1/2">
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Beef Slider
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      three sliders , melted cheese and truffle mayonnaise
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">18</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Beef Slider
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      three sliders , melted cheese and truffle mayonnaise
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">18</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Beef Slider
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      three sliders , melted cheese and truffle mayonnaise
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">18</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Beef Slider
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      three sliders , melted cheese and truffle mayonnaise
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">18</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Beef Slider
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      three sliders , melted cheese and truffle mayonnaise
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">18</p>
                </div>
              </div>

              <div className="flex w-full flex-col gap-2 md:w-1/2">
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Beef Slider
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      three sliders , melted cheese and truffle mayonnaise
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">18</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Beef Slider
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      three sliders , melted cheese and truffle mayonnaise
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">18</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Beef Slider
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      three sliders , melted cheese and truffle mayonnaise
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">18</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Beef Slider
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      three sliders , melted cheese and truffle mayonnaise
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">18</p>
                </div>
                <div className="flex w-full justify-between md:pr-14">
                  <div>
                    <p className="font-playfair text-lg text-white">
                      Beef Slider
                    </p>
                    <p className="max-w-[250px] text-sm font-[400] text-white">
                      three sliders , melted cheese and truffle mayonnaise
                    </p>
                  </div>
                  <p className="font-playfair text-lg font-[400]">18</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={cn(
          "menu-section sticky top-0 z-40 flex h-[50vh] w-full flex-col items-center justify-start gap-5 bg-background py-12 outline transition-all duration-500 ease-in",
          select === 3 && "h-fit md:h-fit",
          select !== 0 && select !== 3 && "static",
        )}
      ></div>
    </section>
  );
};

export default Menu;
