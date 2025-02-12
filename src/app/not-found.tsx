"use client";
import React from 'react';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Home, RefreshCw } from 'lucide-react';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="relative">
          <h1 className="text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-pulse">
            404
          </h1>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-full">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 blur-xl opacity-20 animate-bounce" />
          </div>
        </div>

        <div className="space-y-3 relative">
          <h2 className="text-3xl font-bold text-gray-800">
            Page Not Found
          </h2>
          <p className="text-gray-600">
            The page you&apos;re looking for seems to have vanished into the digital void.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <button
            onClick={() => router.refresh()}
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-gray-800 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 gap-2 group"
          >
            <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
            <span>Retry</span>
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 gap-2 group"
          >
            <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
            <span>Back Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}