import { Link } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

const currentTrack = {
    songTitle: "The Actor", 
    artistName: "Willow Avalon",          
    albumArtUrl: "https://i.ytimg.com/vi/AK4ScSQcRAs/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgTyhHMA8=&rs=AOn4CLC2bsMorQN0WHvuwjRVUUQ3h9XAVg", 
    songLink: "https://open.spotify.com/track/2Njx2qH5mUaKXHNvMeQeue?si=34b1ec1ca10d49e1", 
  };

const Extras: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });



  return (
    <div className="min-h-screen bg-wow-stone-texture bg-wow-stone-dark font-lora text-wow-parchment selection:bg-wow-gold selection:text-wow-stone-darker">
      <nav className="p-4 fixed top-0 left-0 z-50 w-full bg-wow-stone-dark/80 backdrop-blur-sm shadow-lg border-b border-wow-gold-dark/30">
        <Link
          to="/"
          className="text-wow-gold hover:text-wow-gold-light font-semibold transition-colors duration-200 flex items-center group text-sm md:text-base"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
          Back to Home Page
        </Link>
      </nav>

      <section
        ref={ref}
        className={`min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 md:px-8 transition-all duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >

        {/* Important Links */}
        <div className="max-w-md w-full bg-wow-stone-darker rounded-lg shadow-xl p-6 md:p-8 border-2 border-wow-gold-dark/70 text-center transform transition-all duration-300 hover:shadow-wow-gold/20 hover:border-wow-gold/70 mb-8">
          <h1 className="text-3xl md:text-4xl font-medieval text-wow-gold-light mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.7)]">
            Important Links
          </h1>
          

           <ul className="space-y-4 mt-6">
            <li>
              <a 
                href='https://bleacherreport.com/articles/2943390-the-surprisingly-compelling-goat-case-for-tim-duncan'
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-wow-stone-dark text-wow-gold rounded-md shadow-lg border-2 border-wow-gold-dark hover:border-wow-gold hover:bg-wow-stone transition-all duration-200 transform hover:scale-105 font-lora font-semibold tracking-wide text-base"
              >
                Tim Duncan's Goat Case
              </a>
            </li>
          </ul>
        </div>
        
        {/* On Repeat */}
        <div className="bg-wow-stone-darker rounded-lg shadow-xl p-6 md:p-8 border-2 border-wow-gold-dark/70 transform transition-all duration-300 hover:shadow-wow-gold/20 hover:border-wow-gold/70">
            <h3 className="text-2xl md:text-3xl font-medieval text-wow-gold-light mb-6 text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">
              Currently On Repeat
            </h3>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6">
              <div className="flex-shrink-0">
                <img 
                  src={currentTrack.albumArtUrl} 
                  alt={`Album art for ${currentTrack.songTitle} by ${currentTrack.artistName}`}
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-md border-2 border-wow-gold-dark object-cover shadow-lg transition-transform duration-300 ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h4 className="text-xl lg:text-2xl font-semibold text-wow-gold tracking-wide">
                  {currentTrack.songTitle}
                </h4>
                <p className="text-lg text-wow-parchment/90">
                  {currentTrack.artistName}
                </p>
                {currentTrack.albumName && (
                  <p className="text-sm text-wow-parchment/70 italic mt-1">
                    From the album: {currentTrack.albumName}
                  </p>
                )}
                <a 
                  href={currentTrack.songLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-5 py-2.5 bg-wow-stone text-wow-gold rounded-md shadow-md border-2 border-wow-gold-dark hover:border-wow-gold hover:bg-wow-gold hover:text-wow-stone-dark transition-all duration-200 transform hover:scale-105 font-lora font-semibold tracking-wide text-sm group"
                >
                  Spotify 
                  <span className="ml-2 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </div>

      </section>
    </div>
  );
};

export default Extras;