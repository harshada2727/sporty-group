import React from "react";

export default function SportFilter({ options, selected, onChange }) {
  return (
    <select value={selected} onChange={(e) => onChange(e.target.value)}>
      <option value="">All Sports</option>
      {options.map((sport) => (
        <option key={sport} value={sport}>
          {sport}
        </option>
      ))}
    </select>
  );
}
