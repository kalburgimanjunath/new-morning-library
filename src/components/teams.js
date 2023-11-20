export default function Teams({
  title = "main title",
  subtitle,
  image = "https://picsum.photos/seed/picsum/200/300",
}) {
  return (
    <div className="teams grid grid-cols-3 text-center m-2 p-2 justify-center">
      <div>
        <div>
          <img width="100%" height="30%" src={image} />
        </div>
        <h3>{title}</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          molestiae nihil ab nulla eaque repellat doloremque doloribus fugiat
          vitae voluptas, culpa consequuntur, aliquam earum repellendus fuga et
          facilis qui quis?
        </div>
      </div>
      <div>
        <div>
          <img width="100%" height="30%" src={image} />
        </div>
        <h3>{title}</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          molestiae nihil ab nulla eaque repellat doloremque doloribus fugiat
          vitae voluptas, culpa consequuntur, aliquam earum repellendus fuga et
          facilis qui quis?
        </div>
      </div>
      <div>
        <div>
          <img width="100%" height="30%" src={image} />
        </div>
        <h3>{title}</h3>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          molestiae nihil ab nulla eaque repellat doloremque doloribus fugiat
          vitae voluptas, culpa consequuntur, aliquam earum repellendus fuga et
          facilis qui quis?
        </div>
      </div>
    </div>
  );
}
