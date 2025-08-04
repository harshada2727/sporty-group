import React from "react";

import "./styles.css";
import { useEffect, useState } from "react";
import { fetchLeagues } from "./utils/api";
import LeagueList from "./components/LeagueList";
import SearchBar from "./components/SearchBar";
import SportFilter from "./components/SportFilter";

export default function App() {
  const [leagues, setLeagues] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [sport, setSport] = useState("");

  useEffect(() => {
    fetchLeagues().then(setLeagues);
  }, []);

  useEffect(() => {
    const filteredList = leagues.filter((league) => {
      const matchesSearch = league.strLeague
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesSport = sport ? league.strSport === sport : true;
      return matchesSearch && matchesSport;
    });
    setFiltered(filteredList);
  }, [search, sport, leagues]);

  const uniqueSports = [...new Set(leagues.map((l) => l.strSport))].sort();

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1>⚽ Sports Leagues Explorer</h1>

      <div className="controls">
        <SearchBar value={search} onChange={setSearch} />
        <SportFilter
          options={uniqueSports}
          selected={sport}
          onChange={setSport}
        />
      </div>

      <LeagueList leagues={filtered} />
    </main>
  );
}
