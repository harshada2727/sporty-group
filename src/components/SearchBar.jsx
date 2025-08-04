import React from "react";

export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="🔍 Search leagues by name..."
    />
  );
}
