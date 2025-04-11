import React from "react";
import { categories } from "../IMG/assets"; // Importing categories
import { useAppContext } from "../context/AppContext"; // Custom hook to access shared context

// Functional component for displaying categories
function Categories() {
  const { navigate } = useAppContext(); // Destructuring navigate function from context
  return (
    <div className="m-12">
      {/* Section heading */}

      <p className="text-2xl md:text-3xl text-center mb-10 font-semibold">Categories</p>

      {/* Responsive grid to display category cards */}

      <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 mt-6 gap-6">
        {/* Loop through each category and render its card */}

        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLocaleLowerCase()}`); // Navigate to category-specific product page
              scrollTo(0, 0); // Scroll to top of the page
            }}
          >
            {/* Category image with hover effect */}

            <img
              src={category.image}
              alt={category.text}
              className="group-hover:scale-108 transition max-w-28"
            />

            {/* Category name */}

            <p className="text-sm font-medium">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

// import React from "react";
// import { categories } from "../IMG/assets";
// import { useAppContext } from "../context/AppContext";

// function Categories() {
//   const { navigate } = useAppContext();

//   return (
//     <div className="mt-16 px-4 md:px-8 lg:px-20">
//       <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
//         Categories
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
//         {categories.map((category, index) => (
//           <div
//             key={index}
//             className="group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center"
//             style={{ backgroundColor: category.bgColor }}
//             onClick={() => {
//               navigate(`/products/${category.path.toLowerCase()}`);
//               scrollTo(0, 0);
//             }}
//           >
//             <img
//               src={category.image}
//               alt={category.text}
//               className="group-hover:scale-105 transition-transform duration-300 ease-in-out max-w-28"
//             />
//             <p className="text-sm font-medium mt-2">{category.text}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Categories;
