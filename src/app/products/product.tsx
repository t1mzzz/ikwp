import { ComponentType, SVGProps } from "react";
import { PaintCoating, Printing, Plastic, Construction } from "../../constants/icons";

export enum Category {
  Paint_Coating,
  Printing,
  Plastic,
  Construction,
}

interface Product {
    name: string;
    image_url: string;
}

interface ProductGroup {
    name: string;
    products: Product[];
}

export interface ProductCategory {
    name: string;
    key: string;
    category: Category;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    color: string;
    productGroups: ProductGroup[];
}

export const productCategories: ProductCategory[] = [
    {
        name: "Paint & Coating",
        key: "paint_coating",
        category: Category.Paint_Coating,
        icon: PaintCoating,
        color: "ikwp-orange-2",
        productGroups: [
            {
                name: "Water-Based Coating",
                products: [
                    {
                        name: "Anti-Corrosion Agent",
                        image_url: "/products/paint_coating/water_based_coating/anti_corrosion_agent.png"
                    },
                    {
                        name: "Biocides",
                        image_url: "/products/paint_coating/water_based_coating/biocides.png"
                    },
                    {
                        name: "Coalescing and Anti Skinning",
                        image_url: "/products/paint_coating/water_based_coating/coalescing_and_anti_skinning.png"
                    },
                    {
                        name: "Color Preparation",
                        image_url: "/products/paint_coating/water_based_coating/color_preparation.png"
                    },
                    {
                        name: "Emulsion Polymerization Additives",
                        image_url: "/products/paint_coating/water_based_coating/emulsion_polymerization_additives.png"
                    },
                    {
                        name: "Organic and Inorganic Pigments",
                        image_url: "/products/paint_coating/water_based_coating/organic_and_inorganic_pigments.png"
                    },
                    {
                        name: "pH Adjuster",
                        image_url: "/products/paint_coating/water_based_coating/ph_adjuster.png"
                    },
                    {
                        name: "Thickener (acrylic, bentonite, and fumed silica)",
                        image_url: "/products/paint_coating/water_based_coating/thickener.png"
                    },
                    {
                        name: "Water-Based Resin Emulsion",
                        image_url: "/products/paint_coating/water_based_coating/water_based_resin_emulsion.png"
                    },
                    {
                        name: "Wetting / Dispersing Additives",
                        image_url: "/products/paint_coating/water_based_coating/wetting_dispersing_additives.png"
                    }
                ]
            },
            {
                name: "Solvent-Based Coating",
                products: [
                    {
                        name: "Pearlescent",
                        image_url: "/products/paint_coating/solvent_based_coating/pearlescent.png"
                    },
                    {
                        name: "Pigment Powder",
                        image_url: "/products/paint_coating/solvent_based_coating/pigment_powder.png"
                    }
                ]
            }
        ]
    },
    {
        name: "Printing",
        key: "printing",
        category: Category.Printing,
        icon: Printing,
        color: "ikwp-blue",
        productGroups: [
            {
                name: "Printing",
                products: [
                    {
                        name: "Pigment Powder",
                        image_url: "/products/printing/printing/pigment_powder.png"
                    }
                ]
            },
        ]
    },
    {
        name: "Plastic",
        key: "plastic",
        category: Category.Plastic,
        icon: Plastic,
        color: "ikwp-green",
        productGroups: [
            {
                name: "Plastic",
                products: [
                    {
                        name: "Calpet",
                        image_url: "/products/plastic/plastic/calpet.png"
                    },
                    {
                        name: "Foaming Agent",
                        image_url: "/products/plastic/plastic/foaming_agent.png"
                    },
                    {
                        name: "Pigment Powder",
                        image_url: "/products/plastic/plastic/pigment_powder.png"
                    },
                    {
                        name: "Masterbatch",
                        image_url: "/products/plastic/plastic/masterbatch.png"
                    }
                ]
            },
        ]
    },
    {
        name: "Building Construction",
        key: "construction",
        category: Category.Construction,
        color: "ikwp-maroon",
        icon: Construction,
        productGroups: [
            {
                name: "Building Construction",
                products: [
                    {
                        name: "Water-Based Resin Emulsion",
                        image_url: "/products/construction/construction/water_based_resin_emulsion.png"
                    }
                ]
            },
        ]
    },
];