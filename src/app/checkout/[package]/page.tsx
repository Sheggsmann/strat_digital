"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "@/styles";
// import { PaystackButton } from "react-paystack";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);

interface Course {
  id: number;
  title: string;
  price: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  city: string;
  state: string;
  country: string;
}

interface PaystackConfig {
  reference: string;
  email: string;
  amount: number;
  publicKey: string;
  text: string;
  onSuccess: (reference: unknown) => void;
  onClose: () => void;
}

const courses: Course[] = [
  {
    id: 1,
    title: "FinTech Compliance",
    price: "40,000",
  },
  {
    id: 2,
    title: "Digital Marketing Bootcamp",
    price: "50,000",
  },
  {
    id: 3,
    title: "UI/UX Crash Course",
    price: "35,000",
  },
];

export default function Checkout() {
  const params = useParams();
  const packageId = params.package as string;
  const router = useRouter();

  const [course, setCourse] = useState<Course | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    city: "",
    state: "",
    country: "Nigeria",
  });

  useEffect(() => {
    const selectedCourse = courses.find((c) => c.id === parseInt(packageId));
    setCourse(selectedCourse || null);
  }, [packageId]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const paystackConfig: PaystackConfig = {
    reference: new Date().getTime().toString(),
    email: formData.email,
    amount: course ? parseInt(course.price.replace(",", "")) * 100 : 0,
    publicKey: "pk_test_6226f9d7ae81ef1308cfdfbf4ac3b118eb34f644",
    text: "Complete Payment",
    onSuccess: (reference) => {
      console.log("Payment Successful: ", reference);
      setShowSuccessModal(true);
    },
    onClose: () => {
      console.log("Payment closed");
    },
  };

  const SuccessModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-green-600 text-2xl">✓</span>
          </div>
          <h2 className="text-2xl font-bold text-[#213053] mb-4">
            Payment Successful!
          </h2>
          <p className={`${styles.paragraph} mb-6`}>
            Check your email for the next steps and course access details.
          </p>
          <button
            onClick={() => {
              setShowSuccessModal(false);
              router.push("/");
            }}
            className="bg-[#F4B400] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#F4B400]/90 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#213053] mb-4">
            Course Not Found
          </h1>
          <p className={styles.paragraph}>
            The course you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-[#EBF5FF]">
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="flex flex-1 h-[20vh] md:h-[30vh] items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-[#213053] mb-4">
                Complete Your Enrollment
              </h1>
              <p
                className={`${styles.paragraph} text-[#213053] max-w-[600px] mx-auto`}
              >
                You&apos;re one step away from starting your learning journey
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Content */}
      <div
        className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} mx-auto`}
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#F9FAFB] rounded-lg p-8 sticky top-8">
              <h2 className="text-2xl font-semibold text-[#213053] mb-6">
                Order Summary
              </h2>

              <div className="border-b border-gray-200 pb-6 mb-6">
                <h3 className="text-xl font-semibold text-[#213053] mb-2">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#213053]">
                    ₦{course.price}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Course Fee</span>
                  <span className="font-semibold">₦{course.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-semibold">₦0</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-[#213053]">
                      Total
                    </span>
                    <span className="text-lg font-bold text-[#213053]">
                      ₦{course.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-[#EBF5FF] rounded-lg">
                <h4 className="font-semibold text-[#213053] mb-2">
                  What&apos;s Included:
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#F4B400] rounded-full mr-3"></div>
                    Lifetime course access
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#F4B400] rounded-full mr-3"></div>
                    Certificate of completion
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#F4B400] rounded-full mr-3"></div>
                    Expert instructor support
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[#F4B400] rounded-full mr-3"></div>
                    Practical projects & assignments
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-white rounded-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-[#213053] mb-8">
                Student Information
              </h2>

              <div className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#F4B400] transition duration-300"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#F4B400] transition duration-300"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#213053] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#F4B400] transition duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#213053] mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#F4B400] transition duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                {/* Address Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="city"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      City *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#F4B400] transition duration-300"
                      placeholder="Enter your city"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="state"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      State *
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#F4B400] transition duration-300"
                      placeholder="Enter your state"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="zipCode"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      Zip Code *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#F4B400] transition duration-300"
                      placeholder="Enter your zip code"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-semibold text-[#213053] mb-2"
                    >
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-md outline-none focus:border-[#F4B400] transition duration-300"
                    >
                      <option value="Nigeria">Nigeria</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Kenya">Kenya</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Payment Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-[#213053] mb-2">
                      Payment Method
                    </h3>
                    <p className={`${styles.paragraph} text-sm`}>
                      Secure payment powered by Paystack. Your card details are
                      encrypted and secure.
                    </p>
                  </div>

                  {isFormValid() ? (
                    <PaystackButton
                      {...paystackConfig}
                      className="w-full bg-[#F4B400] text-white py-4 px-6 rounded-md font-semibold hover:bg-[#F4B400]/90 transition duration-300 ease-in-out cursor-pointer"
                    />
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-full bg-gray-300 text-gray-500 py-4 px-6 rounded-md font-semibold cursor-not-allowed"
                    >
                      Complete all fields to proceed
                    </button>
                  )}

                  <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                      By completing your purchase, you agree to our{" "}
                      <span className="text-[#F4B400] cursor-pointer hover:underline">
                        Terms of Service
                      </span>{" "}
                      and{" "}
                      <span className="text-[#F4B400] cursor-pointer hover:underline">
                        Privacy Policy
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-green-600 text-lg">🔒</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-green-800">
                    Secure Payment
                  </h4>
                  <p className="text-sm text-green-700 mt-1">
                    Your payment information is encrypted and processed securely
                    through Paystack. We never store your card details.
                  </p>
                </div>
              </div>
            </div>

            {/* Money Back Guarantee */}
            {/* <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <span className="text-blue-600 text-lg">💯</span>
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-blue-800">
                    30-Day Money Back Guarantee
                  </h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Not satisfied with the course? Get a full refund within 30
                    days of purchase.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="mt-16 bg-[#F9FAFB] rounded-lg p-8">
          <h2 className={`${styles.heading2} text-center mb-8`}>
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[#213053] mb-2">
                When does the course start?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                Courses start immediately after payment confirmation.
                You&apos;ll receive access details via email.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#213053] mb-2">
                What if I need help during the course?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                Our expert instructors provide support throughout the course via
                our learning platform.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#213053] mb-2">
                Is there a certificate?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                Yes! You&apos;ll receive a certificate of completion after
                successfully finishing the course.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[#213053] mb-2">
                Can I access the course on mobile?
              </h3>
              <p className={`${styles.paragraph} text-sm`}>
                Absolutely! Our learning platform is fully responsive and works
                on all devices.
              </p>
            </div>
          </div>
        </div> */}
      </div>

      {/* Success Modal */}
      {showSuccessModal && <SuccessModal />}
    </div>
  );
}
