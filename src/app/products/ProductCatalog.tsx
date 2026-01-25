"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { productCategories, ProductCategory } from "./product";

export default function ProductCatalog() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "paint_coating";
  const [productCategory, setProductCategory] = useState<ProductCategory>(
    productCategories.find((cat) => cat.key === category) ||
      productCategories[0]
  );

  const bgColorClasses: Record<string, string> = {
    "ikwp-white": "bg-ikwp-white",
    "ikwp-gray-1": "bg-ikwp-gray-1",
    "ikwp-gray-2": "bg-ikwp-gray-2",
    "ikwp-gray-3": "bg-ikwp-gray-3",
    "ikwp-orange-1": "bg-ikwp-orange-1",
    "ikwp-orange-2": "bg-ikwp-orange-2",
    "ikwp-purple": "bg-ikwp-purple",
    "ikwp-black": "bg-ikwp-black",
    "ikwp-green": "bg-ikwp-green",
    "ikwp-maroon": "bg-ikwp-maroon",
    "ikwp-blue": "bg-ikwp-blue",
  };

  const textColorClasses: Record<string, string> = {
    "ikwp-white": "text-ikwp-white",
    "ikwp-gray-1": "text-ikwp-gray-1",
    "ikwp-gray-2": "text-ikwp-gray-2",
    "ikwp-gray-3": "text-ikwp-gray-3",
    "ikwp-orange-1": "text-ikwp-orange-1",
    "ikwp-orange-2": "text-ikwp-orange-2",
    "ikwp-purple": "text-ikwp-purple",
    "ikwp-black": "text-ikwp-black",
    "ikwp-green": "text-ikwp-green",
    "ikwp-maroon": "text-ikwp-maroon",
    "ikwp-blue": "text-ikwp-blue",
  };

  const borderColorClasses: Record<string, string> = {
    "ikwp-white": "border-ikwp-white",
    "ikwp-gray-1": "border-ikwp-gray-1",
    "ikwp-gray-2": "border-ikwp-gray-2",
    "ikwp-gray-3": "border-ikwp-gray-3",
    "ikwp-orange-1": "border-ikwp-orange-1",
    "ikwp-orange-2": "border-ikwp-orange-2",
    "ikwp-purple": "border-ikwp-purple",
    "ikwp-black": "border-ikwp-black",
    "ikwp-green": "border-ikwp-green",
    "ikwp-maroon": "border-ikwp-maroon",
    "ikwp-blue": "border-ikwp-blue",
  };

  return (
    <div className="bg-ikwp-gray-1 p-4 md:p-8 2xl:p-12.5 gap-4 md:gap-6 2xl:gap-9 sm:flex flex-col place-items-center">
      <div
        id="products"
        className="text-[24px] lg:text-[36px] 2xl:text-[54px] font-semibold text-center"
      >
        Our Products
      </div>
      <div className="w-full flex p-2 md:p-0 gap-2 md:gap-9 2xl:gap-12 justify-left md:place-items-center md:justify-center overflow-x-scroll md:overflow-auto">
        {productCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.category}
              className={`w-full md:w-[280px] 2xl:w-[420px] px-4 md:px-5 2xl:px-8 py-4 2xl:py-2 gap-2 2xl:gap-4 text-[12px] md:text-[21px] 2xl:text-[32px] rounded-full whitespace-nowrap md:whitespace-normal flex place-items-center items-center justify-center font-semibold border-1 md:border-2 2xl:border-3 ${
                borderColorClasses[category.color]
              } hover:cursor-pointer ${
                productCategory === category
                  ? `${bgColorClasses[category.color]} text-white`
                  : `bg-transparent ${textColorClasses[category.color]}`
              }`}
              onClick={() => setProductCategory(category)}
            >
              <div className="hidden md:flex">
                <Icon
                  className="w-6 h-6 md:w-11 md:h-11 2xl:w-16 2xl:h-16"
                  style={{ color: `${category.color}` }}
                />
              </div>
              <div className="text-left leading-7">{category.name}</div>
            </button>
          );
        })}
      </div>
      <div className="py-8 2xl:py-12 w-max flex flex-col gap-17 2xl:gap-25 place-items-center">
        {productCategories
          .filter((category) => category === productCategory)
          .map((category) =>
            category.productGroups.map((group) => (
              <div
                key={group.name}
                className={`${
                  textColorClasses[category.color]
                } gap-8 2xl:gap-12.5 flex flex-col`}
              >
                <div className="text-[27px] 2xl:text-[40px] font-semibold">
                  {group.name}:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 2xl:gap-8">
                  {group.products.map((product) => (
                    <div
                      key={product.name}
                      className="w-[287px] 2xl:w-[430px] h-[326px] 2xl:h-[490px] rounded-4xl flex flex-col items-center overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
                      style={{ boxShadow: "10px 10px 30px rgba(0,0,0,0.16)" }}
                    >
                      <div className="h-2/3 w-full flex place-items-center">
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="padding-t-4xl object-cover w-full h-full"
                        />
                      </div>
                      <div className="bg-white z-50 h-1/3 w-full flex justify-center">
                        <div className="text-[21px] 2xl:text-[32px] font-semibold flex place-items-center text-center px-10 2xl:px-15 py-5 2xl:py-7.5 leading-6 2xl:leading-10">
                          {product.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
      </div>
    </div>
  );
}
