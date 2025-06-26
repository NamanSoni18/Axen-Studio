const pricingItems = [
  { id: "01", name: "Video Shoot", price: "4,999/-" },
  { id: "02", name: "Pre Wedding Shoot", price: "14,999/-" },
  { id: "03", name: "Audio Recording", price: "999/hr" },
  { id: "04", name: "Video Edit", price: "4,999/-" },
  { id: "05", name: "Reel Edit", price: "499/-" },
  { id: "06", name: "Graphic Designing", price: "999/-" },
  { id: "07", name: "Music Video Shoot", price: "19,999/-" },
  { id: "08", name: "Music Production", price: "9,999/-" },
  { id: "09", name: "Mixing & Mastering", price: "4,999/-" },
  { id: "10", name: "Advt. Shoot Package", price: "4,999/-" },
];

const BookingSession = () => {
  return (
    <div className="bg-black text-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 min-h-screen flex flex-col items-center justify-center">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 md:mb-12 text-center">
          <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
            Booking Session
          </span>
        </h1>

        <div className="bg-[#1C1C1E] p-1 rounded-xl bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600">
          <div className="bg-[#121212] rounded-lg p-4 sm:p-6 md:p-8">
            {pricingItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 items-center py-4 sm:py-5 md:py-6 border-b border-gray-800 last:border-b-0"
                >
                  {/* Service ID & Name - Left Side */}
                  <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full text-center sm:text-left order-1">
                    <span className="text-base sm:text-lg font-semibold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text shrink-0">
                      {item.id}
                    </span>
                    <span className="text-base sm:text-lg text-white font-medium">{item.name}</span>
                  </div>

                  {/* Price - Center on Desktop, Second on Mobile */}
                  <div className="flex justify-center w-full order-2 sm:order-2 lg:order-2">
                    <span className="text-lg sm:text-xl font-semibold text-white">₹{item.price}</span>
                  </div>

                  {/* Book Now Button - Right Side on Desktop, Last on Mobile */}
                  <div className="flex justify-center sm:justify-center lg:justify-end w-full order-3 sm:col-span-2 lg:col-span-1 lg:order-3">
                    <button className="group relative px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white bg-[#121212] hover:bg-white focus:outline-none transition-all duration-300 w-full sm:w-auto max-w-xs">
                      <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text group-hover:font-bold">
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
