import React from "react";
import { categories } from "../assets/assets"; // Get categories data
import { useAppContext } from "../context/AppContext"; // Get context

const Categories = () => {
  const { navigate } = useAppContext(); // Use navigate from context

  return (
    <div className="mt-16">
      {/* Section title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Categories
      </h2>

      {/* Category items in a grid */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center 
        items-center"
            style={{ backgroundColor: category.bgColor }} // Set background color
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`); // Go to product page
              scrollTo(0, 0); // Scroll to top
            }}
          >
            {/* Category image */}

            <img
              src={category.image}
              alt="category"
              className="group-hover scale-110 transition max-w-28"
            />

            {/* Category name */}

            <p className="text-sm font-medium">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
