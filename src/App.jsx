import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-2">
        <div>
          <div>
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
            />
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-[500px]" />
      </div>
    </>
  );
}

export default App;
