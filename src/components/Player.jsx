import {useState} from "react";

export default function Player({player, symbol, isActive, onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(player);
  function handleClick() {
    setIsEditing((editng) => !editng);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }
  function handleOnchange(e) {
    setPlayerName(e.target.value);
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleOnchange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}

        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
