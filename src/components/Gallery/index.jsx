import "./Gallery.css";

function Gallery({ data }) {
  return (
    <div className="gallery">
      {data?.map((item, index) => {
        const { name, src } = item;
        return (
          <span
            key={index}
            style={{
              "--i": `${index + 1}`,
            }}
          >
            <img src={src} alt={name} />
          </span>
        );
      })}
    </div>
  );
}

export default Gallery;
