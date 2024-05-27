import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "http://api.thepropshopworldwide.com/heroSectionImages"
        );
        setImages(response.data); // Assuming the API response is an array of image URLs
        setLoading(false);
        console.log(response.data,'hero')
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading images.</div>;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div
          className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-4 md:gap-8 lg:gap-12 h-5/6 w-auto gap-16"
          style={{ gap: "30px", padding: "30px" }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg md:w-auto h-96 md:h-96 xl:h-5/6"
              style={{ width: "360px", height: "400px" }} // Adjusted image size
            >
              <img
                src={image.url}
                alt={`Exhibit ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
