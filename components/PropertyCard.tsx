import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from 'react-icons/fa';

interface PropertyCardProps {
  property: {
    _id: string;
    name: string;
    type: string;
    beds: number;
    baths: number;
    square_feet: number;
    location: {
      city: string;
      state: string;
    };
    rates: {
      weekly: number;
      monthly: number;
      nightly?: number;
    };
    images: [string];
  };
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property;
    if (rates.monthly) {
      return `$${rates.monthly.toLocaleString()}/mo`;
    } else if (rates.weekly) {
      return `$${rates.weekly.toLocaleString()}/wk`;
    } else if (rates.nightly) {
      return `$${rates.nightly.toLocaleString()}/night`;
    }
  };

  return (
    <div className="relative rounded-xl shadow-md">
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt=""
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-full rounded-t-xl"
      />
      <div className="p-4">
        <div className="mb-6 text-left md:text-center lg:text-left">
          <div className="text-gray-600">{property.type}</div>
          <h3 className="text-xl font-bold">{property.name}</h3>
        </div>
        <h3 className="absolute right-[10px] top-[10px] rounded-lg bg-white px-4 py-2 text-right font-bold text-blue-500 md:text-center lg:text-right">
          {getRateDisplay()}
        </h3>

        <div className="mb-4 flex justify-center gap-4 text-gray-500">
          <p>
            <FaBed className="md:hidden lg:inline" /> {property.beds}{' '}
            <span className="md:hidden lg:inline">Beds</span>
          </p>
          <p>
            <FaBath className="md:hidden lg:inline" /> {property.baths}{' '}
            <span className="md:hidden lg:inline">Baths</span>
          </p>
          <p>
            <FaRulerCombined className="md:hidden lg:inline" />
            {property.square_feet}{' '}
            <span className="md:hidden lg:inline">sqft</span>
          </p>
        </div>

        <div className="mb-4 flex justify-center gap-4 text-sm text-green-900">
          <p>
            <FaMoneyBill className="md:hidden lg:inline" /> Weekly
          </p>
          <p>
            <FaMoneyBill className="md:hidden lg:inline" /> Monthly
          </p>
        </div>

        <div className="mb-5 border border-gray-100"></div>

        <div className="mb-4 flex flex-col justify-between lg:flex-row">
          <div className="mb-4 flex gap-2 align-middle lg:mb-0">
            <FaMapMarker className="mt-1 text-orange-700" />
            <span className="text-orange-700">
              {' '}
              {property.location.city} {property.location.state}{' '}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className="h-[36px] rounded-lg bg-blue-500 px-4 py-2 text-center text-sm text-white hover:bg-blue-600"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
