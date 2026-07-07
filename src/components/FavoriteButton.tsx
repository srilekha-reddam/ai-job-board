"use client";

import { useEffect, useState } from "react";

type Props = {
  id: number;
};

export default function FavoriteButton({ id }: Props) {
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    setSaved(favorites.includes(id));
  }, [id]);

  function toggleFavorite() {
    let favorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );

    if (favorites.includes(id)) {
      favorites = favorites.filter((item: number) => item !== id);
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