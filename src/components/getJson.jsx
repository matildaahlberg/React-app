import React, { useState, useEffect } from "react";

const GetJson = () => {
  const [users, setUsers] = useState([]); // State för att lagra data
  const [loading, setLoading] = useState(true); // State för laddningsstatus
  const [error, setError] = useState(null); // State för felhantering

  useEffect(() => {
    // Hämta data från JSON-filen
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://webbkurs.ei.hv.se/~maah0060/JavaScript/Checkpoint%202/Checkpoint%202/data.json"
        );
        if (!response.ok) {
          throw new Error("Nätverksfel: " + response.statusText);
        }
        const data = await response.json();
        setUsers(data); // Uppdatera state med datan
      } catch (error) {
        setError(error.message); // Hantera fel
      } finally {
        setLoading(false); // Stäng av laddningsindikator
      }
    };

    fetchData();
  }, []); // Kör bara en gång vid komponentens render

  // Rendera UI baserat på data, laddning och felstatus
  if (loading) return <p>Laddar data...</p>;
  if (error) return <p>Fel: {error}</p>;

  return (
    <div>
      <h1>Användare</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.userName}</strong> - {user.ePost}
            <br />
            Student: {user.student ? "Ja" : "Nej"}
            <br />
            Favoriträtt: {user.faktaOm.favoritRatt}
            <br />
            Intresse: {user.faktaOm.intresse}
            <br />
            Barn: {user.faktaOm.barn ?? "Inga"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetJson;
