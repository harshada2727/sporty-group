const BASE_URL = "https://www.thesportsdb.com/api/v1/json/3";

export async function fetchLeagues() {
  const res = await fetch(`${BASE_URL}/all_leagues.php`);
  const json = await res.json();
  return json.leagues;
}

export async function fetchSeasonBadge(leagueId) {
  const url = `https://www.thesportsdb.com/api/v1/json/3/search_all_seasons.php?badge=1&id=${leagueId}`;

  try {
    const res = await fetch(url);
    const json = await res.json();

    // Find first season with non-null strBadge
    const validSeason = json?.seasons?.find((season) => season.strBadge);

    return validSeason?.strBadge || null;
  } catch (err) {
    console.error("Failed to fetch season badge:", err);
    return null;
  }
}
