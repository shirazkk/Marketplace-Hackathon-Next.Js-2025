"use client";
import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import client from "@/sanity/lib/client";
import { ProductsType } from "../../../types";
import Skeleton from "../skeltonloader";

const AllProducts = () => {
  const [fetchAllProducts, setFetchAllProducts] = useState<ProductsType[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductsType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceSort, setPriceSort] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // Error state

  // Pagination State
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsPerPage] = useState<number>(8); // Set products per page

  // Fetch products and categories
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching data
      setError(null); // Reset error message

      const query = `*[_type == "products"] {
        _id,
        title,
        slug,
        price,
        priceWithoutDiscount,
        badge,
        "imageUrl": image.asset->url,
        category->{
          _id,
          title
        },
        description,
        inventory,
        tags
      }`;

      try {
        const products: ProductsType[] = await client.fetch(query); // Explicitly type the fetched products
        if (!products.length) {
          setError("No products available at the moment."); // Set error if no products are found
        } else {
          setFetchAllProducts(products);
          setFilteredProducts(products);

          // Get unique categories from fetched products
          const fetchedCategories = [
            ...new Set(
              products
                .map((product: ProductsType) => product.category?.title)
                .filter(Boolean)
            ),
          ];
          setCategories(fetchedCategories);
        }
      } catch (err) {
        setError("Failed to load products. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false when data is loaded
      }
    };

    fetchData();
  }, []);

  // Filter and sort products based on selected categories and price
  useEffect(() => {
    let updatedProducts = [...fetchAllProducts];

    // Filter by categories
    if (selectedCategories.length > 0) {
      updatedProducts = updatedProducts.filter((product: ProductsType) =>
        selectedCategories.includes(product.category?.title)
      );
    }

    // Sort by price
    if (priceSort === "lowToHigh") {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (priceSort === "highToLow") {
      updatedProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updatedProducts);
  }, [selectedCategories, priceSort, fetchAllProducts]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handlePriceSortChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPriceSort(event.target.value);
  };

  // Pagination Logic
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="lg:pl-24 xl:pl-36 md:pl-10 pl-5 py-14 max-w-[1500px] mx-auto px-5">
      <div className="relative flex justify-between items-end gap-28">
        <h1 className="text-3xl text-center md:text-left font-semibold w-full">
          All Products
        </h1>
      </div>
      {/* Error Handling UI */}
      {error && (
        <div className="text-center text-red-600 mb-4">
          <p>{error}</p>
        </div>
      )}
      {/* Filter Section */}
      <div className="flex flex-col sm:flex-row w-full gap-6 mt-5">
        {/* Category Filter Section */}
        <div className="flex flex-col w-full md:w-1/3  p-4 border border-gray-300 rounded-lg bg-white">
          <h3 className="font-semibold text-lg text-gray-800">Category</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`category-${category}`}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="h-4 w-4 text-second border-gray-300 rounded focus:ring-2 focus:ring-second"
                />
                <label
                  htmlFor={`category-${category}`}
                  className="text-sm text-gray-700 hover:text-second cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Sort Section */}
        <div className="flex flex-col w-full md:w-1/3 space-y-4 p-4 border border-gray-300 rounded-lg bg-white">
          <h3 className="font-semibold text-lg text-gray-800">Sort by Price</h3>
          <select
            id="price-sort"
            value={priceSort}
            onChange={handlePriceSortChange}
            className="w-[50%] sm:w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-second text-sm text-gray-700"
          >
            <option value="">Select</option>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>

        {/* Clear All Filters Button (Optional) */}
        <div className="flex items-center justify-center w-full md:w-1/3">
          <Button
            onClick={() => {
              setSelectedCategories([]);
              setPriceSort("");
            }}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 text-sm"
          >
            Clear Filters
          </Button>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <Skeleton />
      ) : (
        /* Product List */
        <div className="w-full justify-center items-center grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-7 h-auto justify-items-center md:justify-items-stretch overflow-hidden">
          {currentProducts.length === 0 && selectedCategories.length > 0 ? (
            <p>No products found matching your filters.</p>
          ) : (
            currentProducts.map((product: ProductsType) => (
              <Link
                key={product.slug.current}
                href={`/products/${product.slug.current}`}
              >
                <div className="flex flex-col  justify-center items-center text-center max-w-[250px]">
                  <div className="hover:scale-105 duration-300 ease-in-out cursor-pointer relative flex justify-center items-center w-64 h-64 object-center rounded-lg">
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      width="160"
                      height="160"
                      quality={100}
                      loading="lazy"
                      className="w-full h-full object-center rounded-lg"
                    />
                    {product.badge && (
                      <div className="py-2 px-3 absolute top-2 left-0">
                        <p
                          className={`${
                            product.badge === "New"
                              ? "bg-new"
                              : product.badge === "Sales"
                                ? "bg-orange-500"
                                : ""
                          } rounded-md px-3 py-1 text-center text-white`}
                        >
                          {product.badge}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div>
                      <h2 className="text-left hover:text-second text-black text-base font-medium mt-4">
                        {product.title}
                      </h2>
                      <div className="flex gap-1 items-center">
                        <p className="text-lg text-button2 font-medium mt-2">
                          ${product.price}
                        </p>
                        <p className="text-fourth line-through mt-2">
                          {product.priceWithoutDiscount ? (
                            <span>${product.priceWithoutDiscount}</span>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="ml-auto">
                      <Button className="w-full text-black hover:text-white hover:bg-second bg-third font-medium">
                        <ShoppingCart
                          className="scale-125"
                          strokeWidth={1.25}
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 gap-4">
        <Button
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          Previous
        </Button>
        <p className="text-gray-800 text-lg font-semibold mx-4">
          Page {currentPage}
        </p>
        <Button
          disabled={currentPage * productsPerPage >= filteredProducts.length}
          onClick={() => paginate(currentPage + 1)}
          className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AllProducts;
