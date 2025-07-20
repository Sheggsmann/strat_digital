import styles from "@/styles";

export default function TermsAndConditions() {
  return (
    <div>
      <div className={``}>
        <div className="bg-[#EBF5FF]">
          <div className={`${styles.boxWidth} mx-auto`}>
            <div className="flex flex-1 h-[20vh] md:h-[40vh] items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold">
                Terms and Conditions
              </h1>
            </div>
          </div>
        </div>

        <div
          className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} mx-auto`}
        >
          <h2 className="text-2xl font-semibold mt-6 mb-2">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By using this website or any of our services, you agree to these
            Terms and Conditions. If you do not agree, please refrain from using
            our site or services.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            2. Use of Services
          </h2>
          <p className="mb-4">
            You agree to use our services for lawful purposes only and in a
            manner that does not infringe the rights of others or restrict their
            use and enjoyment.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            3. Intellectual Property
          </h2>
          <p className="mb-4">
            All content, trademarks, logos, and other intellectual property on
            this site are the property of Strat Digital or our partners. You may
            not use, reproduce, or distribute without permission.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">4. User Content</h2>
          <p className="mb-4">
            Any information or content you submit to us must not violate any
            laws or third-party rights. You grant us a license to use such
            content for operational and promotional purposes.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            5. Third-Party Links
          </h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not
            responsible for their content or privacy practices.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">6. Disclaimers</h2>
          <p className="mb-4">
            Our services are provided &quot;as is&quot; and &quot;as
            available&quot; without warranties of any kind. We do not guarantee
            uninterrupted access or error-free functionality.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            7. Limitation of Liability
          </h2>
          <p className="mb-4">
            To the fullest extent permitted by law, Strat Digital shall not be
            liable for any direct, indirect, or consequential damages arising
            from your use of this site or services.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">8. Termination</h2>
          <p className="mb-4">
            We reserve the right to suspend or terminate access to our services
            at our discretion, especially in cases of suspected misuse or
            violations of these terms.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            9. Changes to Terms
          </h2>
          <p className="mb-4">
            We may update these Terms from time to time. Continued use of our
            services after changes constitutes your acceptance of the revised
            terms.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            10. Governing Law
          </h2>
          <p className="mb-4">
            These Terms are governed by the laws of Nigeria. Any disputes shall
            be subject to the exclusive jurisdiction of the courts located in
            Lagos, Nigeria.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">11. Contact</h2>
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
