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
      const response = await fetch('https://formspree.io/f/mkgbegav', {
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
    <section className="bg-black text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Section - Hidden on mobile */}
        <div className="relative w-full group hidden md:block">
          <img
            src={connect_assets.section3_img1}
            alt="Contact"
            loading="lazy"
            className="w-full h-auto object-cover rounded-xl aspect-[4/5]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
          <div className="absolute bottom-8 left-8 z-10">
            <div className="absolute -top-16 -left-4 rounded-full bg-white p-2 transition-transform duration-300 group-hover:rotate-[30deg]">
              <img
                src={home_assets.vector}
                alt="Arrow Icon"
                loading="lazy"
                className="h-8 w-8"
              />
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact us</h2>
            <p className="text-white/80 text-base lg:text-lg max-w-md">
              Ask about pricing, platform, implementation or anything else. Our
              highly trained reps are standing by, ready to help.
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="space-y-6 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-center md:text-left">
            <span className="bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] bg-clip-text text-transparent">Contact Form</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="flex font-semibold text-lg sm:text-xl items-center gap-2">
                <img src={connect_assets.user_icon} alt="User Icon" loading="lazy" className="w-7 h-7" />
                Full name
              </label>
              <div className="relative rounded-lg bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] p-0.5">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-md bg-black border-none focus:outline-none"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex font-semibold text-lg sm:text-xl items-center gap-2">
                <img src={connect_assets.email_icon} alt="Email Icon" loading="lazy" className="w-7 h-7" />
                Email
              </label>
              <div className="relative rounded-lg bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] p-0.5">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-md bg-black border-none focus:outline-none"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex font-semibold text-lg sm:text-xl items-center gap-2">
                <img src={connect_assets.phone_icon} alt="Phone Icon" loading="lazy" className="w-7 h-7" />
                Phone Number
              </label>
              <div className="relative rounded-lg bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] p-0.5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-md bg-black border-none focus:outline-none"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="flex font-semibold text-lg sm:text-xl items-center gap-2">
                <img src={connect_assets.message_icon} alt="Message Icon" loading="lazy" className="w-7 h-7" />
                Message
              </label>
              <div className="relative rounded-lg bg-gradient-to-r from-[#ff8a00] to-[#ff2e7a] p-0.5">
                <textarea
                  placeholder="Enter your message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-md bg-black border-none focus:outline-none resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-lg w-full font-semibold text-black transition-all hover:bg-opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-gradient">
                {isSubmitting ? "Sending..." : "Send Message"}
              </span>
            </button>

            {submitStatus && (
              <p className={`text-center ${submitStatus.includes("success") ? "text-green-500" : "text-red-500"}`}>
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;