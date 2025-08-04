import LeagueCard from "./LeagueCard";
import React, { useState } from "react";

export default function LeagueList({ leagues }) {
  const [selectedLeagueId, setSelectedLeagueId] = useState(null);

  if (!leagues.length) {
    return <p className="empty-message">😕 No leagues match your filters.</p>;
  }

  return (
    <div className="league-grid">
      {leagues.map((league) => (
        <LeagueCard
          key={league.idLeague}
          league={league}
          selectedLeagueId={selectedLeagueId}
          setSelectedLeagueId={setSelectedLeagueId}
        />
      ))}
    </div>
  );
}
