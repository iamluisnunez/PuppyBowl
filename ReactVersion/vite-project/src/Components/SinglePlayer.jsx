import { useNavigate } from "react-router-dom";

export default function SinglePlayer() {
  const navigate = useNavigate();
  const fetchSinglePlayer = async (playerId) => {
    try {
      const response = await fetch(`${APIURL}/players/${playerId}`);
      let playerData = await response.json();
      //await fetchSinglePlayer(7039)
      return playerData;
    } catch (err) {
      console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
  };

  return <>{playerData}</>;
}
