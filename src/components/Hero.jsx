import { useSelector } from "react-redux";
import { baseImgUrl } from "../constant";

const Hero = () => {
  // store da tutulan verilere eriş
  const store = useSelector((store) => store.movieReducer);

  // 0-19 arasında rastgele sayı üret
  const i = Math.floor(Math.random() * 20);

  // rastgele üretilen sıradaki filme eriş
  const randomMovie = store.popularMovies[i];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {!randomMovie ? (
        <p>Yükleniyor</p>
      ) : (
        <>
          <div>
            <h1>{randomMovie.title}</h1>
            <p>{randomMovie.overview}</p>

            <p>
              <span>IMDB: </span>
              <span>{randomMovie.vote_average.toFixed(1)}</span>
            </p>
          </div>

          <div>
            <img
              src={baseImgUrl.concat(randomMovie.backdrop_path)}
              alt={randomMovie.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
