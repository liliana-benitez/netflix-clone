import type { HeroProps } from "../utils/types"
import { IMG_BASE_URL } from "../utils/constants"

export default function Hero({ movie }: HeroProps) {
  return (
    <div className="max-h-[400px]">
      {movie && (
        <div>
          <p>{movie.title}</p>
          <img
            src={`${IMG_BASE_URL}/${movie.backdrop_path}`}
            className="h-[400px]"
          />
        </div>
      )}
    </div>
  )
}
