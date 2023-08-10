import { useState, useEffect } from "react";
import { fetchAllPlayers } from "../AjaxHelper";

export default function AllPlayers() {
  const [allPlayers, setAllPlayers] = useState([]);
  let count = 0;

  useEffect(() => {
    async function fetchData() {
      const data = await fetchAllPlayers();
      if (data) {
        setAllPlayers(data);
      }
    }
    fetchData();
  }, []);
  return (
    <div>
      {allPlayers.map((player) => {
        count += 1;
        return (
          <div>
            <h4>{player.name}</h4>
            Test Player {count}
          </div>
        );
      })}
    </div>
  );
}
