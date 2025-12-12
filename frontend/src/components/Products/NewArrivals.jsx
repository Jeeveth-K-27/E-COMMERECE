import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, SetIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(false);
  const [canScrollLeft, setcanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivals = [
    {
      _id: '1',
      name: 'Stylish jacket',
      price: '40',
      images: [
        {
          url: 'https://picsum.photos/500/500?fashion=1',
          altText: 'Stylish Jacket',
        },
      ],
    },
    {
      _id: '2',
      name: 'Stylish jacket',
      price: '40',
      images: [
        {
          url: 'https://picsum.photos/500/500?fashion=2',
          altText: 'Stylish Jacket',
        },
      ],
    },
    {
      _id: '3',
      name: 'Stylish jacket',
      price: '40',
      images: [
        {
          url: 'https://picsum.photos/500/500?fashion=3',
          altText: 'Stylish Jacket',
        },
      ],
    },
    {
      _id: '4',
      name: 'Stylish jacket',
      price: '40',
      images: [
        {
          url: 'https://picsum.photos/500/500?fashion=4',
          altText: 'Stylish Jacket',
        },
      ],
    },
    {
      _id: '5',
      name: 'Stylish jacket',
      price: '40',
      images: [
        {
          url: 'https://picsum.photos/500/500?fashion=5',
          altText: 'Stylish Jacket',
        },
      ],
    },
    {
      _id: '6',
      name: 'Stylish jacket',
      price: '40',
      images: [
        {
          url: 'https://picsum.photos/500/500?fashion=6',
          altText: 'Stylish Jacket',
        },
      ],
    },
    {
      _id: '7',
      name: 'Stylish jacket',
      price: '40',
      images: [
        {
          url: 'https://picsum.photos/500/500?fashion=7',
          altText: 'Stylish Jacket',
        },
      ],
    },
    {
      _id: '8',
      name: 'Stylish jacket',
      price: '40',
      images: [
        {
          url: 'https://picsum.photos/500/500?fashion=8',
          altText: 'Stylish Jacket',
        },
      ],
    },
  ];

  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behaviour: 'smooth' });
  };

  const handleMouseDown = (e) => {
    SetIsDragging(true);
    setStartX(e.PageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    SetIsDragging(false);
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;

    if (container) {
      const leftScroll = container.scrollLeft;
      const rightScrollable =
        container.scrollWidth > leftScroll + container.clientWidth;

      setcanScrollLeft(leftScroll > 0);
      setCanScrollRight(rightScrollable);
    }

    console.log({
      scrollLeft: container.scrollLeft,
      ckientWidth: container.clientWidth,
      scrollWidth: container.scrollWidth,
      offsetLeft: scrollRef.current.offsetLeft,
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
    }
  });

  return (
    <section className="px-8 pb-8">
      <div className="text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-800 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge fashion.
        </p>

        {/* Scroll buttons*/}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? 'bg-white text-black'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-2 rounded border ${
              canScrollRight
                ? 'bg-white text-black'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scroll Content */}
      <div
        ref={scrollRef}
        className={`overflow-x-scroll flex space-x-6 relative scrollbar-hide ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="shadow-lg rounded-3xl object-cover"
              draggable="false"
            />
            <div
              className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md
                    text-white p-4 rounded-b-lg "
            >
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
