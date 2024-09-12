import { FC } from 'react';

interface PropertyPageProps {
  params: {
    id: string;
  };
}

const PropertyPage: FC<PropertyPageProps> = ({ params }) => {
  return (
    <div>
      <h1 className="size-3xl">Property Page {params.id}</h1>
    </div>
  );
};

export default PropertyPage;
