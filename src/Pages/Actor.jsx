import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import Api_Service from "../Service/Api.Service";
import Slider from "../Components/Main/Slider";

function ActorDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();

  const [actor, setActor] = useState(state?.actor || null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActorData = async () => {
      try {
        const actorRes = await Api_Service.getData(`person/${id}`);
        if (actorRes?.data) setActor(actorRes.data);

        const moviesRes = await Api_Service.getData(`person/${id}/movie_credits`);
        if (moviesRes?.data?.cast) {
          const sortedMovies = moviesRes.data.cast.sort(
            (a, b) => new Date(b.release_date) - new Date(a.release_date)
          );
          setMovies(sortedMovies);
        }

        setLoading(false);
      } catch (err) {
        console.error("Actor yoki filmlar yuklashda xato:", err);
        setLoading(false);
      }
    };

    fetchActorData();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Yuklanmoqda...</p>
      </div>
    );
  }

  if (!actor) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Actor ma’lumotlari mavjud emas</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-20 py-20">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-10 text-gray-400 hover:text-white transition"
      >
        <ArrowLeft size={20} /> Orqaga
      </button>

      <div className="flex justify-between gap-10">
        <div className=" w-100 h-200 rounded-3xl overflow-hidden border border-[#262626]">
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/h632${actor.profile_path}`
                : "https://via.placeholder.com/300x450?text=No+Image"
            }
            alt={actor.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl  font-extrabold mb-4">{actor.name}</h1>

          <p className="text-gray-400 max-w-xl leading-relaxed">
            {actor.biography && actor.biography.trim() !== ""
              ? actor.biography
              : "Bu aktyor haqida batafsil ma’lumot mavjud emas."}
          </p>

          {actor.known_for_department && (
            <p className="mt-4 text-gray-500 text-sm">
              Asosan: {actor.known_for_department}
            </p>
          )}
          {actor.place_of_birth && (
            <p className="mt-1 text-gray-500 text-sm">
              Tug‘ilgan joyi: {actor.place_of_birth}
            </p>
          )}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Mashhur filmlari</h2>

        {movies.length > 0 ? (
          <Slider
            items={movies}
            actorView={true}
          />
        ) : (
          <p className="text-gray-400">Film ma’lumotlari mavjud emas.</p>
        )}
      </div>
    </div>
  );
}

export default ActorDetail;
