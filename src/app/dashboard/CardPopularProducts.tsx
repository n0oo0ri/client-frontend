import { useGetDashboardMetricsQuery } from "@/state/api";
import { ShoppingBag } from "lucide-react";
import React from "react";
import Rating from "../(components)/Rating";

const CardPopularProducts = () => {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();
  const products = dashboardMetrics?.popularProducts || [];

  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl dark:bg-gray-700 transition-all flex flex-col max-h-[550px]">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          <h3 className="text-lg font-semibold px-7 pt-5 pb-2">
            Popular Products
          </h3>
          <hr />
          <div className="overflow-y-auto max-h-[550px]">
            {products.slice(0, 15).map((product) => (
              <div
                key={product.productId}
                className="flex items-center justify-between gap-3 px-5 py-5 border-b border-gray-600/20 last:border-none"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-gray-200 dark:bg-gray-600 w-10 h-10 rounded-md flex items-center justify-center">
                    Img
                  </div>
                  <div className="flex flex-col justify-between gap-1">
                    <div className="font-bold text-gray-700 dark:text-gray-100">
                      {product.name}
                    </div>
                    <div className="flex text-sm items-center">
                      <span className="font-bold text-blue-500 text-xs">
                        ${product.price}
                      </span>
                      <span className="mx-2 text-gray-400">|</span>
                      <Rating rating={product.rating || 0} />
                    </div>
                  </div>
                </div>

                <div className="text-xs flex items-center text-gray-400">
                  <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                  {Math.round(product.stockQuantity / 1000)}k Sold
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardPopularProducts;
