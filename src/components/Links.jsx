import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search', text: '🔎 Todos' },
  { url: '/images', text: '📸 Imágenes' },
  { url: '/videos', text: '📺 Videos' },
  { url: '/news', text: '📰 Noticias' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center sm:ml-50 md:ml-32 mt-0 mb-2.5 space-x-4">
    {links.map(({ url, text }) => (
      <NavLink to={url} className={({ isActive }) =>
      isActive ? 'text-blue-700 border-blue-700 font-semibold border-b-2 dark:text-blue-300 dark:border-blue-300 pb-2' : ''}>{text}</NavLink>
    ))}
  </div>
);
