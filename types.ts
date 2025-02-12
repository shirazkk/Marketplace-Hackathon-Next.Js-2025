
// hero Section types
export interface HeroData {
  Smallheading: string;
  title: string;
  image: string;
}

// categories type
export interface CategoryType {
  _id: string;
  title: string;
  imageUrl: string;
  products: number;
}



// companies logos
export interface LogoType {
  title: string;
  logos: string;
  slug: {
    current: string;
  };
}


export interface ProductsType {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  price: number;
  price_id?: string;
  priceWithoutDiscount: number;
  badge: string;
  imageUrl: string;
  category: {
    _id: string;
    title: string;
  };
  description: string;
  inventory: number;
  tags: string[];
}



export interface IBlog {
  imageUrl: string;
  Category: string;
  date: string;
  tittle: string;
  slug: {
    current: string;
  };
  description: string;
}



// Define types for the API response
export type Address = {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  cityLocality: string;
  stateProvince: string;
  postalCode: string;
  countryCode: string;
  addressResidentialIndicator: "yes" | "no";
};
export type unit = "ounce" | "gram" | "kilogram" | "pound";
export type dimensionUnit = "inch" | "centimeter";

export type Package = {
  weight: {
    value: number;
    unit: unit;
  };
  dimensions: {
    height: number;
    width: number;
    length: number;
    unit: dimensionUnit;
  };
};

export type Rate = {
  rateId: string;
  rateType: string;
  carrierId: string;
  shippingAmount: {
    currency: string;
    amount: number;
  };
  serviceType: string;
  serviceCode: string;
  trackable: boolean;
  carrierFriendlyName: string;
  validationStatus: string;
  warningMessages?: string[];
};


export interface trackingObjType {
  trackingNumber: string;
  labelId: string;
  carrierCode: string;
}

export interface TrackingData {
  trackingNumber?: string;
  statusDescription?: string;
  carrierStatusDescription?: string;
  estimatedDeliveryDate?: string;
  actualDeliveryDate?: string;
}