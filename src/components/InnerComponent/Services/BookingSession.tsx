const services = [
  { id: 1, duration: "1hr Studio Time", name: "Music Production" },
  { id: 2, duration: "1hr Studio Time", name: "Video Production" },
  { id: 3, duration: "1hr Studio Time", name: "Wedding Shoots" },
  { id: 4, duration: "1hr Studio Time", name: "Graphic Design" },
  { id: 5, duration: "1hr Studio Time", name: "Digital Marketing" },
];

const BookingSession = () => {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-32 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Booking Session
          </span>
        </h1>

        <div className="bg-[#1C1C1E] p-1 rounded-xl bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600">
          <div className="bg-[#121212] rounded-lg p-6 md:p-8">
            {services.map((service) => {
              const [time, ...restOfDuration] = service.duration.split(' ');
              const studioTimeText = restOfDuration.join(' ');

              return (
                <div
                  key={service.id}
                  className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6"
                >
                  {/* Duration */}
                  <div className="flex items-center mb-4 md:mb-0 md:w-auto shrink-0">
                    <span className="text-lg font-semibold mr-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                      {time}
                    </span>
                    <span className="text-lg text-white font-semibold">{studioTimeText}</span>
                  </div>

                  {/* Service Name - Centered */}
                  <div className="flex-grow text-center mx-4 mb-4 md:mb-0">
                    <span className="text-lg text-white">{service.name}</span>
                  </div>

                  {/* Book Now Button */}
                  <div className="shrink-0">
                    <button className="group relative px-5 py-[5px] rounded-full border border-white bg-[#121212] hover:bg-white focus:outline-none transition-all duration-300">
                      <span className="text-sm font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text group-hover:font-bold">
                        Book Now
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSession;
