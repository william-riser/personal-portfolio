import profile from "/public/images/profile.jpg";

const Landing: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-200 flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center">
        <img
          src={profile}
          alt="profile picture"
          className="w-2/5   rounded-full drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default Landing;
