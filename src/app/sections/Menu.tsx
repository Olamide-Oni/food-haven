'use client'
import React, {useState, useEffect} from 'react';
import './menu.css';

export default function Menu() {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  const getMenuData = () => {
    fetch('http://localhost:3001/api/menu')
      .then(res => res.json())
      .then(menu => setData(menu))
      .catch(e => console.log(e.message))
  };

  return <div>Menu</div>
}
