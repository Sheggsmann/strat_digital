import styles from "@/styles";

export default function PrivacyPolicy() {
  return (
    <div>
      <div className={``}>
        <div className="bg-[#EBF5FF]">
          <div className={`${styles.boxWidth} mx-auto`}>
            <div className="flex flex-1 h-[20vh] md:h-[40vh] items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
          </div>
        </div>

        <div
          className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} mx-auto`}
        >
          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            1. Information We Collect
          </h2>
          <p className="mb-2">We collect information in two main ways:</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Voluntarily:</strong> Name, email, phone, business info,
              and messages you send us.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>To provide and improve our services</li>
            <li>Respond to inquiries and offer support</li>
            <li>Process payments securely</li>
            <li>Personalize your experience</li>
            <li>Send promotional updates (you can opt out)</li>
            <li>Analyze usage data</li>
          </ul>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            3. Legal Basis for Processing
          </h2>
          <p className="mb-4">
            We process your data based on your consent, our contract, legal
            obligations, and our legitimate interest.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            6. Data Retention
          </h2>
          <p className="mb-4">
            We keep your data only as long as necessary and delete or anonymize
            it afterward.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            7. Data Security
          </h2>
          <p className="mb-4">
            We use encryption, tokenization, role-based access, and audits to
            protect your data, though no method is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">8. Your Rights</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Access or request copies of your data</li>
            <li>Correct inaccurate info</li>
            <li>Request deletion</li>
            <li>Withdraw consent</li>
            <li>Object to processing</li>
          </ul>
          <p className="mb-4">
            Contact us at{" "}
            <a
              href="mailto:hello@stratdigital.com"
              className="text-blue-700 underline"
            >
              hello@stratdigital.com
            </a>{" "}
            to exercise these rights.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            9. External Links
          </h2>
          <p className="mb-4">
            We may link to third-party websites. We are not responsible for
            their privacy practices.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            10. Children’s Privacy
          </h2>
          <p className="mb-4">
            Our services are not directed to children under 13. If you believe a
            child has submitted information, please contact us.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            11. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this policy and post a new effective date. Please
            review this page periodically.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">12. Contact Us</h2>
          <p className="mb-2">Strat Digital Limited</p>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:hello@stratdigital.com"
              className="text-blue-700 underline"
            >
              hello@stratdigital.com
            </a>
          </p>
          <p className="mb-2">Phone: +234 812 966 4233</p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </div>
  );
}
