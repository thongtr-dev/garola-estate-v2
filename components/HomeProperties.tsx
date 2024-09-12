import { FC } from 'react';

import properties from '@/properties.json';
import Link from 'next/link';
import PropertyCard from './PropertyCard';

const HomeProperties: FC = () => {
  const recentProperties = properties.slice(0, 3);
  return (
    <>
      <section className="px-4 py-6">
        <div className="container-xl m-auto px-4 py-6 lg:container">
          <h2 className="mb-6 text-center text-3xl font-bold text-blue-500">
            Recent properties
          </h2>
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {recentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section className="m-auto my-6 max-w-lg px-6">
        <Link
          href="/properties"
          className="hove:bg-gray-700 block rounded-xl bg-black px-6 py-4 text-center text-white"
        >
          View All Properties
        </Link>
      </section>
    </>
  );
};

export default HomeProperties;
