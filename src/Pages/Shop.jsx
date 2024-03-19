import React from 'react'
import Hero from '../Components/Hero/Hero';
import Item from '../Components/Item/Item';
import allProducts from '../assets/Dummy/allProduct';
import Latest from '../Components/Latest';
function Shop() {
  return (
    <div>
        <Hero/>
        <Latest/>
    </div>
  )
}

export default Shop