import React from 'react';

export const TypeEmojis = ({ type }) => {
  const TypeEmojis = {
    "normal": "🟠",
    "fire": "🔥",
    "water": "💧",
    "grass": "🌱",
    "electric": "⚡",
    "ice": "❄️",
    "fighting": "🥊",
    "poison": "☠️",
    "ground": "🏜️",
    "flying": "🕊️",
    "psychic": "🔮",
    "bug": "🐞",
    "rock": "🗿",
    "ghost": "👻",
    "dragon": "🐉",
    "dark": "🌑",
    "steel": "⚙️",
    "fairy": "🧚"
  };

  return (
    <>{TypeEmojis[type]}</>
    
  );
};