// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { assets } from "../assets/assets";

// const ExploreDeals = () => {
//   const navigate = useNavigate();

//   const allDeals = [
//     {
//       id: 1,
//       title: "30% Off on Fresh Fruits",
//       description:
//         "Juicy and sweet fruits straight from the farm. Limited time only!",
//       longDescription:
//         "Enjoy 30% discount on all fresh fruits including apples, oranges, bananas, and more. These fruits are sourced directly from organic farms and delivered fresh to your doorstep. Offer valid until stock lasts.",
//       image: assets.fresh_fruits1_image,
//       category: "Fruits",
//       discount: "30% OFF",
//       validUntil: "2025-12-31",
//       terms:
//         "Minimum order of $200 applies. Cannot be combined with other offers.",
//     },
//     {
//       id: 2,
//       title: "Buy 1 Get 1 Free - Cold Drinks",
//       description: "Refresh yourself with our premium beverage selection.",
//       longDescription:
//         "Buy any 1 cold drink bottle (1L or above) and get another one absolutely free! Choose from Coca-Cola, Pepsi, Sprite, Fanta and more. Perfect for parties and gatherings.",
//       image: assets.bottles1_image,
//       category: "Drinks",
//       discount: "BOGO",
//       validUntil: "2025-11-30",
//       terms:
//         "Applicable on 1L and 1.5L bottles only. Limited to 2 free bottles per order.",
//     },
//     {
//       id: 3,
//       title: "25% Off on Dairy Products",
//       description: "Fresh milk, cheese and more at discounted prices.",
//       longDescription:
//         "Get 25% off on all dairy products including milk, cheese, butter, yogurt and paneer. Our dairy products come from trusted farms with highest quality standards.",
//       image: assets.dairy_product_image,
//       category: "Dairy",
//       discount: "25% OFF",
//       validUntil: "2025-12-15",
//       terms:
//         "Valid on all dairy products except Amul brand. No minimum order value.",
//     },
//     {
//       id: 4,
//       title: "40% Off Organic Vegetables",
//       description: "Farm fresh organic veggies for healthy cooking.",
//       longDescription:
//         "Enjoy 40% discount on our range of organic vegetables including potatoes, tomatoes, onions, spinach and more. Grown without pesticides and chemical fertilizers.",
//       image: assets.organic_vegitable_image,
//       category: "Vegetables",
//       discount: "40% OFF",
//       validUntil: "2025-12-10",
//       terms:
//         "Applicable only on organic vegetables section. Minimum order of $300.",
//     },
//     {
//       id: 5,
//       title: "Special Combo on Bakery Items",
//       description: "Bread, cakes and pastries at unbeatable prices!",
//       longDescription:
//         "Special combo offers on bakery items - buy any 3 bakery products and get 15% off, buy any 5 and get 25% off. Includes bread, cakes, cookies, muffins and more.",
//       image: assets.bakery_image1,
//       category: "Bakery",
//       discount: "COMBO",
//       validUntil: "2025-12-20",
//       terms:
//         "Discount applies on total bakery items in cart. Cannot be combined with other bakery offers.",
//     },
//     {
//       id: 6,
//       title: "20% Off Instant Food Packs",
//       description: "Quick meals for your busy schedule.",
//       longDescription:
//         "Get 20% off on all instant food packs including noodles, soups, pasta and ready-to-eat meals. Perfect solution for quick meals when you're short on time.",
//       image: assets.maggi_image1,
//       category: "Instant",
//       discount: "20% OFF",
//       validUntil: "2025-12-05",
//       terms: "Applicable on all brands. No coupon code required.",
//     },
//     {
//       id: 7,
//       title: "15% Off Grains & Cereals",
//       description: "Premium quality grains for your kitchen.",
//       longDescription:
//         "Enjoy 15% discount on all grains and cereals including rice, wheat, quinoa, barley and more. Stock up your pantry with these healthy staples.",
//       image: assets.grain_image1,
//       category: "Grains",
//       discount: "15% OFF",
//       validUntil: "2025-12-25",
//       terms: "Minimum order of 2kg per grain type. Valid on all brands.",
//     },
//     {
//       id: 8,
//       title: "Buy 2 Get 1 Free - Chocolates",
//       description: "Sweet deals on your favorite chocolates.",
//       longDescription:
//         "Buy any 2 chocolate bars and get 1 free! Choose from dairy milk, dark chocolate, nut-filled varieties and more. Perfect for gifting or personal indulgence.",
//       image: assets.chocolate_cake_image1,
//       category: "Bakery",
//       discount: "B2G1",
//       validUntil: "2025-12-18",
//       terms:
//         "Free chocolate of equal or lesser value. Limited to 3 free chocolates per order.",
//     },
//   ];

//   const [showAllDeals, setShowAllDeals] = useState(false);
//   const [selectedDeal, setSelectedDeal] = useState(null);
//   const displayedDeals = showAllDeals ? allDeals : allDeals.slice(0, 6);

//   const openDealDetails = (deal) => {
//     setSelectedDeal(deal);
//   };

//   const closeDealDetails = () => {
//     setSelectedDeal(null);
//   };

//   const handleShopNow = (category) => {
//     navigate(`/products?category=${category}`);
//     closeDealDetails();
//   };

//   return (
//     <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-10">
//           <div className="flex items-center justify-center mb-4 mt-2">
//             <img
//               src={assets.leaf_icon}
//               alt="Leaf Icon"
//               className="h-8 w-8 mr-2"
//             />
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//               {showAllDeals
//                 ? "All Exclusive Deals"
//                 : "Exclusive Deals & Offers"}
//             </h1>
//           </div>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
//             {showAllDeals
//               ? "Browse through all our current offers"
//               : "Discover amazing discounts on your favorite grocery items"}
//           </p>
//         </div>

//         {/* Deals Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
//           {displayedDeals.map((deal) => (
//             <div
//               key={deal.id}
//               className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
//               onClick={() => openDealDetails(deal)}
//             >
//               <div className="relative h-72 overflow-hidden">
//                 <img
//                   src={deal.image}
//                   alt={deal.title}
//                   className="w-full h-full object-fit transition-transform duration-500 hover:scale-110"
//                 />
//                 <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
//                   {deal.discount}
//                 </div>
//               </div>
//               <div className="p-5">
//                 <div className="flex items-center mb-2">
//                   <img
//                     src={assets.star_icon}
//                     alt="Star"
//                     className="h-4 w-4 mr-1"
//                   />
//                   <span className="text-sm font-medium text-gray-700">
//                     {deal.category}
//                   </span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
//                   {deal.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-2">
//                   {deal.description}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <button className="flex items-center px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer">
//                     View Details
//                     <img
//                       src={assets.arrow_right_icon_colored}
//                       alt="Arrow"
//                       className="h-4 w-4 ml-2 filter brightness-0 invert"
//                     />
//                   </button>
//                   <div className="flex items-center">
//                     <img
//                       src={assets.clock_icon}
//                       alt="Clock"
//                       className="h-3 w-3 mr-1"
//                     />
//                     <span className="text-xs text-gray-500">
//                       Until {deal.validUntil}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* View More/Less Button */}
//         <div className="mt-16 text-center">
//           <button
//             onClick={() => setShowAllDeals(!showAllDeals)}
//             className="flex items-center mx-auto px-6 py-3 border-2 border-primary text-primary text-base font-medium rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
//           >
//             {showAllDeals ? "Show Less Deals" : "View All Deals"}
//           </button>
//         </div>

//         {/* Deal Details Modal */}
//         {selectedDeal && (
//           <div className="fixed inset-0 bg-indigo-50 bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="relative">
//                 <img
//                   src={selectedDeal.image}
//                   alt={selectedDeal.title}
//                   className="w-full h-76 object-fill"
//                 />
//                 <button
//                   onClick={closeDealDetails}
//                   className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
//                 >
//                   <img
//                     src={assets.remove_icon}
//                     alt="Close"
//                     className="h-5 w-5 cursor-pointer"
//                   />
//                 </button>
//                 <div className="absolute bottom-4 left-4 bg-primary text-white text-sm font-bold px-3 py-1 rounded-lg">
//                   {selectedDeal.discount}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex items-center mb-3">
//                   <img
//                     src={assets.star_icon}
//                     alt="Star"
//                     className="h-5 w-5 mr-2"
//                   />
//                   <span className="text-md font-medium text-gray-700">
//                     {selectedDeal.category}
//                   </span>
//                 </div>

//                 <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                   {selectedDeal.title}
//                 </h2>

//                 <div className="flex items-center mb-5">
//                   <img
//                     src={assets.clock_icon}
//                     alt="Clock"
//                     className="h-4 w-4 mr-2"
//                   />
//                   <span className="text-sm text-gray-600">
//                     Valid until: {selectedDeal.validUntil}
//                   </span>
//                 </div>

//                 <p className="text-gray-700 mb-6">
//                   {selectedDeal.longDescription}
//                 </p>

//                 <div className="bg-gray-50 p-4 rounded-lg mb-6">
//                   <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
//                     <img
//                       src={assets.trust_icon}
//                       alt="Terms"
//                       className="h-5 w-5 mr-2"
//                     />
//                     Terms & Conditions
//                   </h3>
//                   <p className="text-sm text-gray-600">{selectedDeal.terms}</p>
//                 </div>

//                 <div className="flex justify-center">
//                   <button 
//                     onClick={() => handleShopNow(selectedDeal.category)}
//                     className="flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors duration-200 cursor-pointer"
//                   >
//                     <img
//                       src={assets.product_list_icon}
//                       alt="Products"
//                       className="h-5 w-5 mr-2 filter brightness-0 invert"
//                     />
//                     Shop {selectedDeal.category}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ExploreDeals;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const ExploreDeals = () => {
  const navigate = useNavigate();

  const allDeals = [
    {
      id: 1,
      title: "30% Off on Fresh Fruits",
      description: "Juicy and sweet fruits straight from the farm. Limited time only!",
      longDescription: "Enjoy 30% discount on all fresh fruits including apples, oranges, bananas, and more. These fruits are sourced directly from organic farms and delivered fresh to your doorstep. Offer valid until stock lasts.",
      image: assets.fresh_fruits1_image,
      category: "Fruits",
      route: "fruits",
      discount: "30% OFF",
      validUntil: "2025-12-31",
      terms: "Minimum order of ₹200 applies. Cannot be combined with other offers.",
    },
    {
      id: 2,
      title: "Buy 1 Get 1 Free - Cold Drinks",
      description: "Refresh yourself with our premium beverage selection.",
      longDescription: "Buy any 1 cold drink bottle (1L or above) and get another one absolutely free! Choose from Coca-Cola, Pepsi, Sprite, Fanta and more. Perfect for parties and gatherings.",
      image: assets.bottles1_image,
      category: "Drinks",
      route: "drinks",
      discount: "BOGO",
      validUntil: "2025-11-30",
      terms: "Applicable on 1L and 1.5L bottles only. Limited to 2 free bottles per order.",
    },
    {
      id: 3,
      title: "25% Off on Dairy Products",
      description: "Fresh milk, cheese and more at discounted prices.",
      longDescription: "Get 25% off on all dairy products including milk, cheese, butter, yogurt and paneer. Our dairy products come from trusted farms with highest quality standards.",
      image: assets.dairy_product_image,
      category: "Dairy",
      route: "dairy",
      discount: "25% OFF",
      validUntil: "2025-12-15",
      terms: "Valid on all dairy products except Amul brand. No minimum order value.",
    },
    {
      id: 4,
      title: "40% Off Organic Vegetables",
      description: "Farm fresh organic veggies for healthy cooking.",
      longDescription: "Enjoy 40% discount on our range of organic vegetables including potatoes, tomatoes, onions, spinach and more. Grown without pesticides and chemical fertilizers.",
      image: assets.organic_vegitable_image,
      category: "Vegetables",
      route: "vegetables",
      discount: "40% OFF",
      validUntil: "2025-12-10",
      terms: "Applicable only on organic vegetables section. Minimum order of ₹300.",
    },
    {
      id: 5,
      title: "Special Combo on Bakery Items",
      description: "Bread, cakes and pastries at unbeatable prices!",
      longDescription: "Special combo offers on bakery items - buy any 3 bakery products and get 15% off, buy any 5 and get 25% off. Includes bread, cakes, cookies, muffins and more.",
      image: assets.bakery_image1,
      category: "Bakery",
      route: "bakery",
      discount: "COMBO",
      validUntil: "2025-12-20",
      terms: "Discount applies on total bakery items in cart. Cannot be combined with other bakery offers.",
    },
    {
      id: 6,
      title: "20% Off Instant Food Packs",
      description: "Quick meals for your busy schedule.",
      longDescription: "Get 20% off on all instant food packs including noodles, soups, pasta and ready-to-eat meals. Perfect solution for quick meals when you're short on time.",
      image: assets.maggi_image1,
      category: "Instant",
      route: "instant",
      discount: "20% OFF",
      validUntil: "2025-12-05",
      terms: "Applicable on all brands. No coupon code required.",
    },
    {
      id: 7,
      title: "15% Off Grains & Cereals",
      description: "Premium quality grains for your kitchen.",
      longDescription: "Enjoy 15% discount on all grains and cereals including rice, wheat, quinoa, barley and more. Stock up your pantry with these healthy staples.",
      image: assets.grain_image1,
      category: "Grains",
      route: "grains",
      discount: "15% OFF",
      validUntil: "2025-12-25",
      terms: "Minimum order of 2kg per grain type. Valid on all brands.",
    },
    {
      id: 8,
      title: "Buy 2 Get 1 Free - Chocolates",
      description: "Sweet deals on your favorite chocolates.",
      longDescription: "Buy any 2 chocolate bars and get 1 free! Choose from dairy milk, dark chocolate, nut-filled varieties and more. Perfect for gifting or personal indulgence.",
      image: assets.chocolate_cake_image1,
      category: "Bakery",
      route: "bakery",
      discount: "B2G1",
      validUntil: "2025-12-18",
      terms: "Free chocolate of equal or lesser value. Limited to 3 free chocolates per order.",
    },
  ];

  const [showAllDeals, setShowAllDeals] = useState(false);
  const displayedDeals = showAllDeals ? allDeals : allDeals.slice(0, 6);

  const handleDealClick = (route) => {
    navigate(`/products/${route}`);
  };

  return (
    <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-4 mt-2">
            <img
              src={assets.leaf_icon}
              alt="Leaf Icon"
              className="h-8 w-8 mr-2"
            />
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              {showAllDeals ? "All Exclusive Deals" : "Exclusive Deals & Offers"}
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-8">
            {showAllDeals
              ? "Browse through all our current offers"
              : "Discover amazing discounts on your favorite grocery items"}
          </p>
        </div>

        {/* Deals Grid - Now directly navigates to category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {displayedDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 cursor-pointer"
              onClick={() => handleDealClick(deal.route)}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-fit transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  {deal.discount}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center mb-2">
                  <img
                    src={assets.star_icon}
                    alt="Star"
                    className="h-4 w-4 mr-1"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {deal.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-1">
                  {deal.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {deal.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="flex items-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg">
                    Shop Now
                    <img
                      src={assets.arrow_right_icon_colored}
                      alt="Arrow"
                      className="h-4 w-4 ml-2 filter brightness-0 invert"
                    />
                  </span>
                  <div className="flex items-center">
                    <img
                      src={assets.clock_icon}
                      alt="Clock"
                      className="h-3 w-3 mr-1"
                    />
                    <span className="text-xs text-gray-500">
                      Until {deal.validUntil}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More/Less Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAllDeals(!showAllDeals)}
            className="flex items-center mx-auto px-6 py-3 border-2 border-primary text-primary text-base font-medium rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {showAllDeals ? "Show Less Deals" : "View All Deals"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreDeals;