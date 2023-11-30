export default function Hero({ title, subtitle, image, link }) {
  return (
    <div className="hero">
      <div className="grid grid-cols-2 justify-end w-full p-2">
        <div>
          <h1>{title ? title : ""}</h1>
          <h3>{subtitle ? subtitle : ""}</h3>
        </div>
        <div>
          <img
            src={image ? "https://picsum.photos/seed/picsum/200/300" : image}
            width="100%"
          />
        </div>
      </div>
      <a href={link} className="secondary-button">
        Readmore
      </a>
    </div>
  );
}
