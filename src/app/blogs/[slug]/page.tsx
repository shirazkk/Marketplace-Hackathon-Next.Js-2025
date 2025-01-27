"use client";
import client from "@/sanity/lib/client";
import { PortableText, PortableTextBlock } from "next-sanity";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define the shape of the blog data
interface Blog {
  tittle: string;
  date: string;
  description: string;
  imageUrl: string;
  content: PortableTextBlock[]; // 'any' because PortableText might contain rich text or structured content
}

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [blog, setBlog] = useState<Blog | null>(null); // Store fetched blog data
  const [error, setError] = useState<string | null>(null); // Error state
  const [loading, setLoading] = useState<boolean>(true); // Loading state

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const fetchedBlog = await client.fetch(
          `
          *[_type == "popularblogs" && slug.current == $slug][0] {
            tittle,
            date,
            description,
            "imageUrl": image.asset->url,
            content
          }
        `,
          { slug: (await params).slug }
        );

        if (!fetchedBlog) {
          setError("No blog found with that slug");
        } else {
          setBlog(fetchedBlog); // Set fetched blog data
        }
      } catch (err) {
        setError("Failed to load blog. Please try again later.");
        console.log(err);
      } finally {
        setLoading(false); // Stop loading after fetching
      }
    };

    fetchBlog(); // Call the function to fetch the blog data
  }, [params]);

  // Display loading skeletons while the blog data is being fetched
  if (loading) {
    return (
      <div className="bg-background min-h-screen">
        <div className="max-w-5xl mx-auto p-6 sm:p-8">
          {/* Blog Header Skeleton */}
          <div className="animate-pulse">
            <div className="w-full h-10 bg-gray-300 dark:bg-gray-700 mb-4"></div>
            <div className="w-1/2 h-4 bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Blog Image Skeleton */}
          <div className="relative mb-10 rounded-lg overflow-hidden">
            <div className="w-full h-60 bg-gray-300 dark:bg-gray-700"></div>
          </div>

          {/* Blog Content Skeleton */}
          <div className="w-full h-40 bg-gray-300 dark:bg-gray-700 mb-6"></div>
          <div className="w-full h-20 bg-gray-300 dark:bg-gray-700"></div>
        </div>
      </div>
    );
  }

  // Display error message if the blog couldn't be fetched
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen text-2xl font-semibold text-red-600">
        {error}
      </div>
    );
  }

  // Display the actual blog content when blog is not null
  if (blog) {
    return (
      <div className="bg-background min-h-screen">
        <div className="max-w-5xl mx-auto p-6 sm:p-8">
          {/* Blog Header */}
          <header className="text-center mb-10">
            <h1 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white leading-tight">
              {blog.tittle}
            </h1>
            <p className="text-sm md:text-base text-black dark:text-white mt-4">
              Published on {new Date(blog.date).toLocaleDateString()}
            </p>
          </header>

          {/* Blog Image */}
          <div className="relative mb-10 rounded-lg overflow-hidden">
            <Image
              src={blog.imageUrl}
              alt={blog.tittle}
              width={1100}
              height={600}
              quality={100}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Blog Content */}
          <article className="max-w-5xl prose prose-lg sm:prose-xl dark:prose-invert prose-gray mx-auto leading-relaxed">
            <PortableText value={blog.content} />
          </article>

          {/* Footer */}
          <footer className="mt-12 text-center border-t pt-6">
            <p className="text-base md:text-lg text-black dark:text-white">
              Thank you for reading this blog post! Stay tuned for more.
            </p>
          </footer>
        </div>
      </div>
    );
  }

  return null;
}
