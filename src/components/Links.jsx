import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 Páginas' },
  { url: '/news', text: '📰 Noticias' },
  { url: '/images', text: '📸 Imágenes' },
  { url: '/videos', text: '📺 Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center mt-4 mb-2.5 space-x-2">
    {links.map(({ url, text }) => (
      <NavLink to={url} activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700">{text}</NavLink>
    ))}
  </div>
);
