import React from 'react';
import Link from 'next/link';
import CardLayout from './CardLayout';

import { Eye } from 'lucide-react';
import { CardProps } from '../../types/card';

const CardWithContent: React.FC<CardProps> = ({
  slug,
  date,
  like,
  title,
  description,
  readMore,
}) => {
  const cardContent = (
    <div>
      <div className="flex justify-between gap-2 items-center">
        <span className="text-xs font-extraLight duration-1000 text-biege group-hover:text-pink group-hover:border-zinc-200 drop-shadow-orange">
          {date ? date : <span>SOON</span>}
        </span>
        <span className="text-grayDark font-extraLight group-hover:text-orange text-xs  flex items-center gap-1">
          <Eye className="w-4 h-4" /> {like}
        </span>
      </div>
      <h2 className="z-20 text-xl font-semiBold duration-1000 lg:text-3xl text-biege group-hover:text-yellow font-display">
        {title}
      </h2>
      <p className="z-20 mt-4 text-sm font-light duration-1000 text-grayDark group-hover:text-grayLight">
        {description}
      </p>
    </div>
  );

  const cardReadMore = (
    <div className="flex flex-col justify-between gap-14">
      {cardContent}
      <div className="bottom-8 md:bottom-8">
        <p className="text-grayDark group-hover:text-grayLight hidden lg:block">
          {readMore} <span aria-hidden="true">&rarr;</span>
        </p>
      </div>
    </div>
  );

  const cardwithReadMore = (
    <CardLayout>
      <Link href={`/project/${slug}`}>
        <article className="p-4 md:p-8">{cardReadMore}</article>
      </Link>
    </CardLayout>
  );

  const cardWithOutReadMore = (
    <div className="grid grid-cols-1 gap-4">
      <CardLayout>
        <Link href={`/project/${slug}`}>
          <article className="p-4 md:p-8">{cardContent}</article>
        </Link>
      </CardLayout>
    </div>
  );

  return readMore ? cardwithReadMore : cardWithOutReadMore;
};

export default CardWithContent;
