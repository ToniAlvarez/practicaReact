import { Link } from "react-router";

function FilmPoster({ id, title, posterUrl }) {


    return (
        <Link to={`/filmDetails/${id}`} className="">
            <div className="">
                <h2 className="text-gray-300 text-xl">{title}</h2>
                <img alt={title} title={title} src={posterUrl} className="" />
            </div>
        </Link>
    )
}

export default FilmPoster
