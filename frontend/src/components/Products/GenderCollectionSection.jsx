import React from 'react'
import { Link } from 'react-router-dom'

const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-8'>

        <div className='flex flex-col md:flex-row gap-8'>

            {/* Womens */}
            <div className='relative flex-1'>
                <img src="src/assets/womens-collection.webp" alt="womens-collection" className='w-full h-[450px] object-cover shadow-lg rounded-3xl'/>

                <div className='absolute bg-white bottom-8 left-8 bg-opacity-90 p-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-1'>Women's Collection</h2>
                <Link to="/collections/all?gender=Women" className='text-gray-900 underline'>Shop Now</Link>
                </div>
            </div>

            {/* Mens */}
            <div className='relative flex-1'>
                <img src="src/assets/mens-collection.webp" alt="Mens-collection" className='w-full h-[450px] object-cover shadow-lg rounded-3xl'/>

                <div className='absolute bg-white bottom-8 left-8 bg-opacity-90 p-4'>
                <h2 className='text-2xl font-bold text-gray-900 mb-1'>Men's Collection</h2>
                <Link to="/collections/all?gender=Men" className='text-gray-900 underline'>Shop Now</Link>
                </div>
            </div>

        </div>

    </section>
  )
}

export default GenderCollectionSection