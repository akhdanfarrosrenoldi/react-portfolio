import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-2 pt-10">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-200 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
            <q>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
              veritatis.
            </q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I am Akhdan</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            suscipit dignissimos quo assumenda excepturi iusto ducimus sequi
            nesciunt placeat repudiandae, alias modi corporis mollitia dolore
            facilis enim! Recusandae praesentium rem quis tenetur, veniam est
            eos nihil, necessitatibus minus perspiciatis ratione. Aspernatur
            debitis odio illum iusto blanditiis aliquam id libero repudiandae.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="bg-gray-500 p-4 rounded-2xl hover:bg-gray-600 text-white font-semibold"
            >
              Download CV <i className="ri-download-line ri-md"></i>
            </a>
            <a
              href="#"
              className="bg-white-500 p-4 rounded-2xl hover:bg-zinc-100 text-black font-semibold border"
            >
              Look Project
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] ml-auto"
        />
      </div>
    </>
  );
}

export default App;
