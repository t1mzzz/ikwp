import { useState } from "react";
import { Category, productCategories } from "./product";
import Image from "next/image";

export default function ProductCatalog() {
  const [productCategory, setProductCategory] = useState<Category>(Category.Paint_Coating);

  return (
    <div className="bg-ikwp-gray-1 py-12.5 px-12.5 gap-9 flex flex-col place-items-center">
        <div className="text-[54px] font-semibold text-center">
          Our Products
        </div>
        <div className="flex gap-12 justify-center">
          {productCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.category}
                className={`w-[420px] px-8 py-2 gap-4 text-[32px] rounded-full flex place-items-center items-center justify-center font-semibold border-3 border-${category.color} ${
                  productCategory === category.category
                    ? `bg-${category.color} text-white`
                    : `bg-transparent text-${category.color}`
                }`}
                onClick={() => setProductCategory(category.category)}
              >
              <div className="">
                <Icon className="w-16 h-16" style={{ color: category.color }}/>
              </div>
              <div className="text-left">
                {category.name}
              </div>
            </button>
          )})}
        </div>
        <div className="py-12 w-max flex flex-col gap-25 place-items-center">
          {productCategories
            .filter((category) => category.category === productCategory)
            .map((category) =>
              category.productGroups.map((group) => (
                <div key={group.name} className={`text-${category.color} gap-12.5 flex flex-col`}>
                  <div className="text-[40px] font-semibold">{group.name}:</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {group.products.map((product) => (
                      <div
                        key={product.name}
                        className="w-[430px] h-[490px] border rounded-4xl flex flex-col items-center"
                      >
                        <div className="h-2/3 flex place-items-center">
                          <Image
                            src={product.image_url}
                            alt={product.name}
                            width={430}
                            height={330}
                            className="rounded-t-4xl object-cover"
                          />
                        </div>
                        <div className='h-1/3 text-[32px] font-semibold flex place-items-center text-center px-15 py-7.5 leading-10'>
                          {product.name}
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
