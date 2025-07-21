"use client";

import { useState } from "react";
import styles from "@/styles";
import rocketSvg from "../../assets/rocket.svg";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success message
      setShowSuccessMessage(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#EBF5FF]">
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="flex flex-1 h-[20vh] md:h-[40vh] items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-[#213053] mb-4">
                Contact Us
              </h1>
              <p
                className={`${styles.paragraph} text-[#213053] max-w-[600px] mx-auto`}
              >
                Get in touch with our team. We&apos;re here to help you with
                your digital transformation journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className={`${styles.boxWidth} mx-auto bg-white py-4 md:py-12`}>
        <section className={`${styles.paddingY} ${styles.paddingX}`}>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4B400] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📧</span>
              </div>
              <h3 className="font-semibold text-[#213053] text-xl mb-2">
                Email Us
              </h3>
              <p className={`${styles.paragraph} mb-2`}>
                Send us an email and we&apos;ll get back to you within 24 hours.
              </p>
              <a
                href="mailto:hello@stratdigital.com"
                className="text-[#F4B400] font-semibold hover:underline"
              >
                hello@stratdigital.com
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4B400] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📞</span>
              </div>
              <h3 className="font-semibold text-[#213053] text-xl mb-2">
                Call Us
              </h3>
              <p className={`${styles.paragraph} mb-2`}>
                Speak directly with our team during business hours.
              </p>
              <a
                href="tel:+2348012345678"
                className="text-[#F4B400] font-semibold hover:underline"
              >
                +234 801 234 5678
              </a>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4B400] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">📍</span>
              </div>
              <h3 className="font-semibold text-[#213053] text-xl mb-2">
                Visit Us
              </h3>
              <p className={`${styles.paragraph} mb-2`}>
                Come visit our office for a face-to-face consultation.
              </p>
              <p className="text-[#F4B400] font-semibold">
                No 1B, Adeola Raji Avenue, Atunrase Estate, Gbagada, Lagos
                State, Nigeria.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Form Section */}
      <div
        className={`${styles.flexStart} bg-[#213053] py-4 md:py-12 relative`}
      >
        <Image
          src={rocketSvg}
          alt="rocket img"
          className="absolute hidden md:block md:bottom-12 right-2/12 animate-bounce"
        />
        <div className={`${styles.boxWidth} mx-auto`}>
          <section
            id="contact"
            className={`${styles.paddingY} ${styles.paddingX}`}
          >
            <div className="mb-12">
              <h2 className={`${styles.heading2} text-white text-center`}>
                Send Us a Message
              </h2>
              <p className="text-center text-gray-300 mt-4 max-w-2xl mx-auto">
                Have a project in mind? Want to learn more about our services?
                Fill out the form below and we&apos;ll get back to you as soon
                as possible.
              </p>
            </div>

            {/* Success Message */}
            {showSuccessMessage && (
              <div className="max-w-2xl mx-auto mb-8">
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md">
                  <div className="flex items-center">
                    <span className="text-green-600 mr-2">✓</span>
                    <span className="font-semibold">
                      Message sent successfully!
                    </span>
                  </div>
                  <p className="text-sm mt-1">
                    Thank you for contacting us. We&apos;ll get back to you
                    within 24 hours.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="text-white font-semibold block mb-2"
                >
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white p-4 rounded w-full mt-4 outline-none focus:ring-2 focus:ring-[#F4B400] transition duration-300"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="email"
                  className="text-white font-semibold block mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white p-4 rounded w-full mt-4 outline-none focus:ring-2 focus:ring-[#F4B400] transition duration-300"
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="mb-8">
                <label
                  htmlFor="message"
                  className="text-white font-semibold block mb-2"
                >
                  Your Message *
                </label>
                <textarea
                  rows={6}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="bg-white p-4 rounded w-full mt-4 outline-none focus:ring-2 focus:ring-[#F4B400] transition duration-300 resize-vertical"
                  placeholder="Tell us about your project or ask us a question..."
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid() || isSubmitting}
                className={`w-full p-4 mt-12 rounded-md text-white font-semibold transition duration-300 ease-in-out ${
                  isFormValid() && !isSubmitting
                    ? "bg-[#F4B400] hover:bg-[#F4B400]/90 cursor-pointer"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? "Sending Message..." : "Send Message"}
              </button>
            </form>
          </section>
        </div>
      </div>

      {/* FAQ Section */}
      {/* <div className={`${styles.boxWidth} mx-auto bg-white py-4 md:py-12`}>
        <section className={`${styles.paddingY} ${styles.paddingX}`}>
          <div className="text-center mb-12">
            <h2 className={styles.heading2}>Frequently Asked Questions</h2>
            <p className={`${styles.paragraph} mt-4 max-w-3xl mx-auto`}>
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#F9FAFB] rounded-lg p-6">
              <h3 className="font-semibold text-[#213053] text-lg mb-3">
                How long does a typical project take?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                Project timelines vary depending on complexity and scope. Simple
                websites take 2-4 weeks, while complex fintech solutions can
                take 3-6 months. We'll provide a detailed timeline during
                consultation.
              </p>
            </div>

            <div className="bg-[#F9FAFB] rounded-lg p-6">
              <h3 className="font-semibold text-[#213053] text-lg mb-3">
                Do you offer ongoing support?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                Yes! We provide ongoing maintenance, updates, and technical
                support for all our solutions. Our support packages are tailored
                to your specific needs.
              </p>
            </div>

            <div className="bg-[#F9FAFB] rounded-lg p-6">
              <h3 className="font-semibold text-[#213053] text-lg mb-3">
                What industries do you work with?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                We work with startups, SMEs, and enterprises across various
                industries including fintech, e-commerce, healthcare, education,
                and more. Our solutions are tailored to each industry's needs.
              </p>
            </div>

            <div className="bg-[#F9FAFB] rounded-lg p-6">
              <h3 className="font-semibold text-[#213053] text-lg mb-3">
                How do you ensure project quality?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                We follow industry best practices, conduct thorough testing, and
                maintain regular communication throughout the project. Quality
                assurance is built into every stage of our development process.
              </p>
            </div>
          </div>
        </section>
      </div> */}

      {/* CTA Section */}
      <div className="bg-[#F9FAFB]">
        <div className={`${styles.boxWidth} mx-auto`}>
          <section className={`${styles.paddingY} ${styles.paddingX}`}>
            <div className="text-center">
              <h2 className={`${styles.heading2} mb-4`}>
                Ready to Get Started?
              </h2>
              <p className={`${styles.paragraph} mb-8 max-w-2xl mx-auto`}>
                Let&apos;s discuss your project and see how we can help you
                achieve your digital goals. Book a free consultation with our
                team today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-[#F4B400] flex flex-row items-center justify-center py-4 px-8 rounded-md cursor-pointer hover:bg-[#F4B400]/90 transition duration-300 ease-in-out">
                  <span className="font-bold text-white mr-4">
                    Book a Free Consultation
                  </span>
                </button>
                {/* <button className="flex flex-row items-center justify-center cursor-pointer">
                  <span className="underline text-gray-600">
                    View Our Portfolio
                  </span>
                </button> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
