import axios from "axios";
import React from "react";
import Loading from "../../../images/Rolling-1s-200px.gif";
import "./style.css";

export default function GalleryGrid({ textToSearch }) {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const textToSearchEmpty =
    textToSearch === "" || textToSearch == null || textToSearch === undefined;
  const api_key = "f6437baea00a6f11feec089d6c34679b";

  React.useEffect(() => {
    const baseUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${api_key}&tags=${textToSearch}&per_page=21&format=json&nojsoncallback=1`;
    async function loadSearchImages() {
      try {
        setLoading(true);
        var response = await axios.get(baseUrl);
        setImages(response.data.photos.photo);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    loadSearchImages();
  }, [textToSearch, images.length]);

  return (
    <>
      {!loading ? (
        <section className="frameLimits">
          {images.map((map) => {
            return (
              <div className="frame">
                <img
                  className="images"
                  alt={map.id}
                  src={`https://live.staticflickr.com/${map.server}/${map.id}_${map.secret}.jpg`}
                />
              </div>
            );
          })}
        </section>
      ) : (
        <>
          {textToSearchEmpty ? (
            <h1>Please search for something</h1>
          ) : (
            <img src={Loading} height="100px" alt="loading" />
          )}
        </>
      )}
    </>
  );
}
