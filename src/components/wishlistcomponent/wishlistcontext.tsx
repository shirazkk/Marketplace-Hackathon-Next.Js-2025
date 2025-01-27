"use client";

import { createContext, useContext, useState, useEffect } from "react";

type WishlistItem = {
  id: string;
  name: string;
  image: string;
  price: number;
};

// Define the context type
type WishlistContextType = {
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export const WishlistProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Initialize wishlist from localStorage or default to an empty array
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Function to save wishlist to localStorage
  const saveToLocalStorage = (wishlist: WishlistItem[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };

  // Add an item to the wishlist
  const addToWishlist = (item: WishlistItem) => {
    setWishlist((prev) => {
      // Check if the item is already in the wishlist
      if (!prev.some((existingItem) => existingItem.id === item.id)) {
        const updatedWishlist = [...prev, item];
        saveToLocalStorage(updatedWishlist); // Save updated wishlist to localStorage
        return updatedWishlist;
      }
      return prev;
    });
  };

  // Remove an item from the wishlist
  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => {
      const updatedWishlist = prev.filter((item) => item.id !== id);
      saveToLocalStorage(updatedWishlist); // Save updated wishlist to localStorage
      return updatedWishlist;
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedWishlist = localStorage.getItem("wishlist");
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    }
  }, []);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
