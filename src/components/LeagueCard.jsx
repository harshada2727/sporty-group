import React, { useState, useEffect } from "react";
import { fetchSeasonBadge } from "../utils/api";
import FootballLoader from "./FootballLoader";

const seasonCache = new Map();

export default function LeagueCard({
  league,
  selectedLeagueId,
  setSelectedLeagueId,
}) {
  const [badgeUrl, setBadgeUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setSelectedLeagueId(league.idLeague);

    const cached = seasonCache.get(league.idLeague);
    if (cached) {
      console.log("Using cached badge for league ID:", league.idLeague);
      setBadgeUrl(cached);
      return;
    }

    setLoading(true);
    const badge = await fetchSeasonBadge(league.idLeague);
    setLoading(false);

    if (badge) {
      seasonCache.set(league.idLeague, badge);
      console.log("Cached badge for league ID:", league.idLeague);
      setBadgeUrl(badge);
    } else {
      console.log("No badge found for league ID:", league.idLeague);
      setBadgeUrl(null);
    }
  };

  // Hide badge if another league is selected
  useEffect(() => {
    if (selectedLeagueId !== league.idLeague) {
      setBadgeUrl(null);
      setLoading(false);
    }
  }, [selectedLeagueId, league.idLeague]);

  return (
    <div className="league-card" onClick={handleClick}>
      <div className="league-title">{league.strLeague}</div>
      <div className="league-sport">{league.strSport}</div>
      <div className="league-alt">{league.strLeagueAlternate}</div>

      {loading && <FootballLoader />}

      {badgeUrl && selectedLeagueId === league.idLeague && (
        <img
          className="badge-img"
          src={badgeUrl}
          alt="Season badge"
          loading="lazy"
        />
      )}
    </div>
  );
}
