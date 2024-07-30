function ImageGallery() {
  return (
    <div>
      <h2 className="py-4 mb-5 font-sans text-2xl font-bold text-center lg:text-5xl">
        Image Gallery
      </h2>
      <p className="w-full mx-auto mb-4 text-center lg:w-1/2">
        Welcome to our university campus! Our entrance gate is a symbol of the
        knowledge and opportunities that await you.
      </p>
      <div>
        <div className="grid items-center justify-center lg:flex">
          <div className="m-4 duration-500 w-96 hover:scale-105">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="m-4 duration-500 rounded w-96 hover:scale-105">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://www.southernliving.com/thmb/osQ0-qCdyJmTELa8n7OnCE1cwz4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/graduates-throwing-caps-1066324992-2000-c66181da679b46dab1f62f4b2fbe3e84.jpg"
            />
          </div>
          <div className="m-4 duration-500 rounded w-96 hover:scale-105">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://cloudfront-us-east-1.images.arcpublishing.com/opb/53TGF5JA2VCGZJKFHTQNE2VOFM.jpg"
            />
          </div>
        </div>
        <div className="grid items-center justify-center avatar lg:flex">
          <div className="m-4 duration-500 rounded w-96 hover:scale-105">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://www.brenau.edu/wp-content/uploads/2022/11/BU39237_DNP02-web.jpg"
            />
          </div>
          <div className="m-4 duration-500 rounded w-96 hover:scale-105">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://tavistockandportman.ac.uk/wp-content/uploads/2023/07/IMG_9036.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
