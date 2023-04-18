import React from 'react';
import { NavLink } from 'react-router-dom';



const links = [
  { url: '/search', text: '🔎 Páginas' },
  { url: '/news', text: '📰 Noticias' },
  { url: '/images', text: '📸 Imágenes' },
  { url: '/videos', text: '📺 Videos' },
];

export const Links = () => (
  <div className="flex sm:justify-around justify-between items-center sm:ml-50 md:ml-56 mt-0 mb-2.5 space-x-3">
    {links.map(({ url, text }) => (
      <NavLink to={url} className={({ isActive }) =>
      isActive ? 'text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2' : ''}>{text}</NavLink>
    ))}
  </div>
);
