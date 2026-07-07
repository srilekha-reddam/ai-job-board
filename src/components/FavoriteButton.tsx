"use client";

import { useState } from "react";

type Props = {
  id: number;
};

export default function FavoriteButton({ id }: Props) {
  const [saved, setSaved] = useState(() => {
    if (typeof window === "undefined") return false;

    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    return favorites.includes(id);
  });

  function toggleFavorite() {
    let favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (favorites.includes(id)) {
      favorites = favorites.filter((item) => item !== id);
      setSaved(false);
    } else {
      favorites.push(id);
      setSaved(true);
    }

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }

  return (
    <button
      onClick={toggleFavorite}
      className="text-3xl"
    >
      {saved ? "❤️" : "🤍"}
    </button>
  );
}