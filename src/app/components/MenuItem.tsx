import React from 'react'
import './menuItem.css';
import Link from 'next/link';

export const Menuitem = ({item}: {
    item: {
        id: number;
        name: string;
        preview: string;
        price: number;
        ingredients: string;
    };
}) => {
  return (
    <div className="col-lg-6 menu-item">
        <img src={item.preview} className='menu-img' alt="" />
        <div className='menu-content'>
            <Link href={`/menu/${item.id}`}>{item.name}</Link>
            <span>${item.price}</span>
        </div>
        <div className="menu-ingredients">{item.ingredients}</div>
    </div>
  );
}
