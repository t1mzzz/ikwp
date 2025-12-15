"use client";

import ProductLanding from "./ProductLanding";
import ProductCatalog from "./ProductCatalog";
import Suppliers from "../../components/Suppliers";
import { Suspense } from "react";

export default function Products() {
  return (
    <Suspense fallback={null}>
      <div className="flex flex-col">
        <ProductLanding />
        <ProductCatalog />
        <Suppliers />
      </div>
    </Suspense>
  );
}
