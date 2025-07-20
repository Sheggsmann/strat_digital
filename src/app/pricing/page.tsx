import styles from "@/styles";
import Image from "next/image";
import arrowRight from "@/assets/arrow-right.svg";
import Link from "next/link";

export default function Pricing() {
  const pricingPlans = [
    {
      id: 1,
      title: "FinTech Compliance",
      price: "225,000",
      price_usd: "150",
      duration: "2 weeks",
      description:
        "Learn regulatory compliance, risk management, and legal frameworks essential for FinTech operations.",
      features: [
        "Regulatory Framework",
        "KYC/AML Compliance",
        "Risk Assessment",
        "Data Protection Laws",
        "Payment Regulations",
        "Audit & Reporting",
        "Case Study Analysis",
        "Certificate of Completion",
      ],
      popular: false,
    },
    {
      id: 2,
      title: "Digital Marketing Bootcamp",
      price: "300,000",
      price_usd: "200",
      duration: "4 weeks",
      description:
        "Master digital marketing strategies, social media management, SEO, and analytics to grow your business online.",
      features: [
        "Social Media Marketing",
        "Search Engine Optimization",
        "Content Marketing Strategy",
        "Google Analytics & Ads",
        "Email Marketing Campaigns",
        "Digital Marketing Tools",
        "Live Projects & Case Studies",
        "Certificate of Completion",
      ],
      popular: true,
    },
    {
      id: 3,
      title: "UI/UX Crash Course",
      price: "375,000",
      price_usd: "250",
      duration: "2 weeks",
      description:
        "Design user-friendly interfaces and create exceptional user experiences with modern design principles.",
      features: [
        "Design Thinking Process",
        "User Research Methods",
        "Wireframing & Prototyping",
        "Figma & Design Tools",
        "Usability Testing",
        "Mobile-First Design",
        "Portfolio Development",
        "Certificate of Completion",
      ],
      popular: false,
    },
  ];
  return (
    <div>
      <div className={``}>
        <div className="bg-[#EBF5FF]">
          <div className={`${styles.boxWidth} mx-auto`}>
            <div className="flex flex-1 h-[20vh] md:h-[40vh] items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold">
                StratAcademy Pricing
              </h1>
            </div>
          </div>
        </div>

        <div
          className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} mx-auto`}
        >
          {/* PRICING CODE GOES HERE */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`relative border rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                  plan.popular
                    ? "border-[#F4B400] bg-gradient-to-b from-[#F4B400]/5 to-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#F4B400] text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-[#213053] mb-4">
                    {plan.title}
                  </h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#213053]">
                      ${plan.price_usd}
                    </span>
                  </div>
                  <div className="inline-flex items-center bg-[#EBF5FF] px-3 py-1 rounded-full">
                    <span className="text-sm font-medium text-[#2E91FF]">
                      {plan.duration}
                    </span>
                  </div>
                </div>

                <p className={`${styles.paragraph} text-center mb-8`}>
                  {plan.description}
                </p>

                <div className="mb-8">
                  <h4 className="font-semibold text-[#213053] mb-4">
                    What you&apos;ll learn:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-[#F4B400] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <Link href={`/checkout/${plan.id}`}>
                    <button
                      className={`w-full flex items-center justify-center py-4 px-6 rounded-md font-semibold transition duration-300 ease-in-out cursor-pointer ${
                        plan.popular
                          ? "bg-[#F4B400] text-white hover:bg-[#F4B400]/90"
                          : "bg-white border-2 border-[#F4B400] text-[#F4B400] hover:bg-[#F4B400] hover:text-white"
                      }`}
                    >
                      <span className="mr-3">Enroll Now</span>
                      <Image
                        src={arrowRight}
                        alt="arrow-right"
                        className="w-[15px] h-[15px]"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
