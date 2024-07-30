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
              src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
            />
          </div>
          <div className="m-4 duration-500 rounded w-96 hover:scale-105">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://plus.unsplash.com/premium_photo-1681505720432-f7476737c644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            />
          </div>
          <div className="m-4 duration-500 rounded w-96 hover:scale-105">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
        </div>
        <div className="grid items-center justify-center avatar lg:flex">
          <div className="m-4 duration-500 rounded w-96 hover:scale-105">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://images.unsplash.com/photo-1619512673224-91cfb2688284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
          <div className="m-4 duration-500 rounded w-96 hover:scale-105">
            <img
              className="rounded-xl"
              alt="Not Found in the server"
              src="https://images.unsplash.com/photo-1613902059328-4a860a118dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
