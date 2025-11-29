"use client";

import ProductLanding from "./ProductLanding";
import ProductCatalog from "./ProductCatalog";
import Suppliers from "../../components/Suppliers";

export default function Products() {  
  return (
    <div className="flex flex-col">
      <ProductLanding />
      <ProductCatalog />
      <Suppliers />
    </div>
  );
}
