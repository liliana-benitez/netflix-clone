type ListItemProps = {
  path: string
  titleType: string
}

const IMG_BASE_URL = "https://image.tmdb.org/t/p/original"

export default function ListItem({ path, titleType }: ListItemProps) {
  return (
    <div>
      <div className="w-[200px]">
        <img src={`${IMG_BASE_URL}/${path}`} />
        <p>{titleType}</p>
      </div>
    </div>
  )
}
