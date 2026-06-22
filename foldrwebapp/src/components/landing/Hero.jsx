import dashboard from "../../assets/dashboard.jpg";

const Hero = ({ openSignIn, openSignUp }) => {
  return (
    <section className="min-h-[50vh] bg-[#FFF0E4] flex items-center justify-center">
      <div className="text-center px-4 py-20">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black">
          Store, Sync and Share with
        </h1>

        <h2 className="text-6xl md:text-8xl font-extrabold text-[#007979] mt-2">
          Foldr
        </h2>

        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Secure cloud storage for all your files. Upload, organize, and access
          your data from anywhere.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => openSignUp()}
            className="px-6 py-3 rounded-lg bg-[#007979] text-white font-semibold cursor-pointer hover:bg-[#24B1B1] transition">
            Get Started
          </button>

          <button
            onClick={() => openSignIn()}
            className="px-6 py-3 rounded-lg border-2 border-[#007979] text-[#007979] cursor-pointer hover:bg-[#FFE0C5] transition">
            Sign In
          </button>
        </div>

        <div className="hero-image relative mt-12">
          <div className="dashboard-container mx-auto max-w-2xl object-contain rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
            <img
              src={dashboard}
              alt="Foldr Hero"
              className=" w-full h-auto rounded-3xl"
            />
          </div>

          <div className="dashboard-text mt-7 text-center">
            <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
              Foldr gives you a secure and intuitive space to store, organize,
              and manage your files. Access your documents whenever you need
              them, from any device.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
