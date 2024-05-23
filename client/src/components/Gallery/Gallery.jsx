import React from "react";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEQRe9jRY98hQkFdBmLrfAldsDbE7id3cV8amz9LBEw&s",
  "https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716249600&semt=ais_user",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEQRe9jRY98hQkFdBmLrfAldsDbE7id3cV8amz9LBEw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkEQRe9jRY98hQkFdBmLrfAldsDbE7id3cV8amz9LBEw&s",
];

const Gallery = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12 overflow-x-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg flex-shrink-0 w-full md:w-auto h-60 md:h-96"
            >
              <img
                src={image}
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
