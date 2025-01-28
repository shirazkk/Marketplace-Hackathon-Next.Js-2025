"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { fetchBlogs } from "@/sanity/lib/quries";
import { IBlog } from "../../../types";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [error, setError] = useState<string | null>(null); // Error state to track any errors
  const [loading, setLoading] = useState<boolean>(true); // Loading state to handle loading status

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const fetchedBlogs = await fetchBlogs(); // Fetch blogs
        setBlogs(fetchedBlogs); // Set blogs to state
        setLoading(false); // Set loading to false after fetching
      } catch (err) {
        console.error(err);
        setError("Failed to load blogs. Please try again later."); // Set error message if fetching fails
        setLoading(false); // Stop loading
      }
    };

    getBlogs(); // Call the function to fetch blogs
  }, []);

  if (loading) {
    // Skeleton Loading UI
    return (
      <section className="container mx-auto px-4 md:px-2 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
          <div className="border rounded-lg overflow-hidden animate-pulse">
            {/* Skeleton Image */}
            <div className="w-full h-60 bg-gray-300 dark:bg-gray-700"></div>

            {/* Skeleton Content */}
            <div className="p-4">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-24 h-4 bg-gray-300 dark:bg-gray-700"></div>
                <div className="w-16 h-4 bg-gray-300 dark:bg-gray-700"></div>
              </div>
              <div className="w-3/4 h-6 bg-gray-300 dark:bg-gray-700 mb-4"></div>
              <div className="w-full h-4 bg-gray-300 dark:bg-gray-700"></div>
              <div className="mt-4 w-24 h-8 bg-blue-300 dark:bg-blue-600"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 font-bold">
        <p>{error}</p> {/* Display error message if there is an error */}
      </div>
    );
  }

  return (
    <section className="container mx-auto px-4 md:px-2  py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {blogs.length === 0 ? (
          <div className="text-center text-gray-500 font-semibold">
            No blogs available at the moment.
          </div>
        ) : (
          blogs.map((blog: IBlog) => (
            <div
              key={blog.slug.current}
              className="border rounded-lg overflow-hidden"
            >
              {/* Check if image URL is available, otherwise show a placeholder */}
              <Image
                src={blog.imageUrl || "/placeholder.jpg"}
                alt={blog.tittle}
                loading="lazy"
                width={1920}
                height={1080}
                quality={100}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 h-full">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-sm font-semibold text-blue-600">
                    {blog.Category}
                  </span>
                  <span className="text-sm dark:text-gray-200 text-gray-500">
                    {blog.date}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4">{blog.tittle}</h4>
                {/* Check if description is available, otherwise show a fallback */}
                <p className="text-sm dark:text-gray-300 text-gray-500">
                  {blog.description || "No description available."}
                </p>
                <Link href={`/blogs/${blog.slug.current}`}>
                  <Button className="mt-4 px-4 py-2 border bg-transparent border-blue-600 text-blue-600 rounded hover:bg-blue-50">
                    Read More
                  </Button>
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default AllBlogs;
