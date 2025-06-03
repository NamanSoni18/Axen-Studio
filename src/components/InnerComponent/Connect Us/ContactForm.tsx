import { useState } from "react";
import { connect_assets } from "@/assets/ConnectUs/connect_assets";
import { home_assets } from "@/assets/home_assets";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");
    
    try {
      const response = await fetch('https://formspree.io/f/xkgbnavl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setSubmitStatus("Message sent successfully!");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        console.error("Form submission failed:", await response.text());
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto h-screen bg-black text-white">
      <div className="h-full grid md:grid-cols-2 p-4">
        {/* Left Section */}
        <div className="relative h-full flex justify-center">
          <div className="relative h-[80%] w-[80%] group">
            <img
              src={connect_assets.section3_img1}
              alt="Contact"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-16 left-8 z-10">
              {/* Arrow Icon */}
              <div className="absolute -top-16 rounded-full bg-white p-2 transition-transform duration-300 group-hover:rotate-[30deg]">
                <img
                  src={home_assets.vector}
                  alt="Arrow Icon"
                  className="h-8 w-8"
                />
              </div>
              <h2 className="text-5xl font-bold mb-4">Contact us</h2>
              <p className="text-white/80 text-lg max-w-md">
                Ask about pricing, platform, implementation or anything else. Our
                highly trained reps are standing by. Ready to help
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">Contact Form</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="flex font-semibold text-2xl items-center gap-2">
                <img src={connect_assets.user_icon} alt="User Icon" className="w-8 h-8" />
                Full name
              </label>
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a]"></div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="relative w-[99.6%] px-4 py-3 rounded-lg bg-black border border-transparent focus:outline-none m-[1px]"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex font-semibold text-2xl items-center gap-2">
                <img src={connect_assets.email_icon} alt="Email Icon" className="w-8 h-8" />
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a]"></div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="relative w-[99.6%] px-4 py-3 rounded-lg bg-black border border-transparent focus:outline-none m-[1px]"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex font-semibold text-2xl items-center gap-2">
                <img src={connect_assets.phone_icon} alt="Phone Icon" className="w-8 h-8" />
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a]"></div>
                <input
                  type="number"
                  placeholder="Phone Number"
                  className="relative w-[99.6%] px-4 py-3 rounded-lg bg-black border border-transparent focus:outline-none m-[1px]"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex font-semibold text-2xl items-center gap-2">
                <img src={connect_assets.message_icon} alt="Message Icon" className="w-8 h-8" />
                Message
              </label>
              <div className="relative">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a]"></div>
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="relative w-[99.6%] px-4 py-3 rounded-lg bg-black border border-transparent focus:outline-none resize-none m-[1px]"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Replace Link with button */}
            <button 
              type="submit"
              disabled={isSubmitting}
              className="mb-12 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg w-full font-semibold text-black transition-all hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-gradient">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>

            {/* Add status message */}
            {submitStatus && (
              <p className={`text-center ${submitStatus.includes("success") ? "text-green-500" : "text-red-500"}`}>
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
