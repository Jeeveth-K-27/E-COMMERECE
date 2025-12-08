import React from 'react'

const CartContext = () => {

    const CartProducts = [
        {
            productId: 1,
            name: "T-Shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 15,
            image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            quantity: 1,
            price: 25,
            image: "https://picsum.photos/200?random=2",
        },
        {
            productId: 1,
            name: "Shorts",
            size: "S",
            color: "Black",
            quantity: 2,
            price: 75,
            image: "https://picsum.photos/200?random=3",
        },
    ]

  return (
    <div>

        {CartProducts.map((product, index) => (
            <div key={index} className='flex items-start justify-between py-4 border-b'>

                <div className='flex items-start'>
                    <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4 rounded-lg'/>

                <div>
                    <h3>{product.name}</h3>
                    <p className='text-sm text-gray-500'>size: {product.size} | color: {product.color}</p>
                    <div className='flex items-center mt-2'>
                        <button className='border rounded px-2 py-1 text-xl font-medium'>-</button>
                        <span className='mx-4'>{product.quantity}</span>
                        <button className='border rounded px-2 py-1 text-xl font-medium'>+</button>
                    </div>
                </div>
                
                </div>

                <div className=''>
                    <p>${product.price.toLocaleString()}</p>
                    <button>
                         
                    </button>
                </div>

            </div>
        ))}

    </div>
  )
}

export default CartContext