import { FC, ReactNode } from 'react';

interface InfoBoxProps {
  heading: string;
  backgroundColor?: string;
  textColor?: string;
  children: ReactNode;
  buttonInfo: {
    text: string;
    link: string;
    backgroundColor: string;
  };
}

const InfoBox: FC<InfoBoxProps> = ({
  heading,
  backgroundColor = 'bg-gray-100',
  textColor = 'text-gray-800',
  children,
  buttonInfo,
}) => {
  return (
    <div className={`rounded-lg ${backgroundColor} p-6 shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mb-4 mt-2`}>{children}</p>
      <a
        href={buttonInfo.link}
        className={`inline-block rounded-lg ${buttonInfo.backgroundColor} px-4 py-2 text-white hover:bg-gray-700`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
