"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

type CartContextValue = {
  cartCount: number;
  lastAdded: string | null;
  addToCart: (title: string) => void;
  clearNotice: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cartCount, setCartCount] = useState(0);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  const addToCart = useCallback((title: string) => {
    setCartCount((count) => count + 1);
    setLastAdded(title);
  }, []);

  const clearNotice = useCallback(() => setLastAdded(null), []);
  const value = useMemo(
    () => ({ cartCount, lastAdded, addToCart, clearNotice }),
    [cartCount, lastAdded, addToCart, clearNotice],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useShop() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useShop must be used inside ShopProvider");
  return context;
}
