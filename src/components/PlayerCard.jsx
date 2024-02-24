import { baseImgUrl } from "../constant";

const PlayerCard = ({ player }) => {
  return (
    <div className="w-[140px] rounded-md overflow-hidden">
      {player.profile_path ? (
        <img
          className="h-[175px]"
          src={baseImgUrl + player?.profile_path}
          alt=""
        />
      ) : (
        <img
          className="h-[175px] w-[116px]"
          src="data:image/png;base64,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"
        />
      )}

      <h2 className="text-lg font-semibold">{player?.original_name}</h2>
      <h3 className="line-clamp-2">{player?.character}</h3>
    </div>
  );
};

export default PlayerCard;
