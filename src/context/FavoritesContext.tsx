'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export interface FavoriteItem {
  id: string;
  type: 'component' | 'board' | 'reference' | 'project';
  title: string;
  slug: string;
  category?: string;
}

interface FavoritesContextType {
  favorites: FavoriteItem[];
  isFavorite: (id: string) => boolean;
  toggleFavorite: (item: FavoriteItem) => void;
  removeFavorite: (id: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('arduinouz-favorites');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setTimeout(() => setFavorites(parsed), 0);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const saveFavorites = (items: FavoriteItem[]) => {
    setFavorites(items);
    try {
      localStorage.setItem('arduinouz-favorites', JSON.stringify(items));
    } catch {
      // ignore
    }
  };

  const isFavorite = (id: string) => {
    return favorites.some((fav) => fav.id === id);
  };

  const toggleFavorite = (item: FavoriteItem) => {
    if (isFavorite(item.id)) {
      saveFavorites(favorites.filter((fav) => fav.id !== item.id));
    } else {
      saveFavorites([...favorites, item]);
    }
  };

  const removeFavorite = (id: string) => {
    saveFavorites(favorites.filter((fav) => fav.id !== id));
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    return {
      favorites: [],
      isFavorite: () => false,
      toggleFavorite: () => {},
      removeFavorite: () => {},
    };
  }
  return context;
}
