export interface Property {
  property: {
    _id: string;
    owner?: string;
    name: string;
    type: string;
    description?: string;
    location: {
      street?: string;
      city: string;
      state: string;
      zipcode?: string;
    };
    beds: number;
    baths: number;
    square_feet: number;
    amenities?: string[];
    rates: {
      weekly?: number;
      monthly?: number;
      nightly?: number;
    };
    seller_info?: {
      name: string;
      email: string;
      phone: string;
    };
    images: string[];
    is_featured?: boolean;
    createdAt?: string;
    updatedAt?: string;
  };
}

export interface PropertyCardProps {
  property: Partial<
    Pick<
      Property['property'],
      | '_id'
      | 'baths'
      | 'beds'
      | 'location'
      | 'images'
      | 'name'
      | 'rates'
      | 'square_feet'
      | 'type'
    >
  >;
}
