import styles from "@/styles";

export default function BillingPolicy() {
  return (
    <div>
      <div className={``}>
        <div className="bg-[#EBF5FF]">
          <div className={`${styles.boxWidth} mx-auto`}>
            <div className="flex flex-1 h-[20vh] md:h-[40vh] items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold">
                Billing and Refund Policy
              </h1>
            </div>
          </div>
        </div>

        <div
          className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} mx-auto`}
        >
          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            1. Billing Terms
          </h2>
          <p className="mb-4">
            Strat Digital offers subscription-based services for various
            products including StratPay, StratWallet, StratMedia, and
            StratAcademy. By subscribing to our services, you agree to be billed
            in accordance with the plan you select—either monthly, annually, or
            via custom enterprise arrangements.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            2. Payment Methods
          </h2>
          <p className="mb-4">
            We accept payments through secure online methods including
            debit/credit cards and local payment gateways. All transactions are
            processed via encrypted and PCI-compliant systems.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">3. Invoicing</h2>
          <p className="mb-4">
            Invoices are issued electronically and can be accessed through your
            user dashboard or sent via email. It is your responsibility to
            ensure billing details are accurate and up to date.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            4. Late or Failed Payments
          </h2>
          <p className="mb-4">
            If a payment fails or is not received by the due date, we may
            suspend or restrict access to your services until the issue is
            resolved. Repeated failures may lead to termination of your account.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            5. Refund Policy
          </h2>
          <p className="mb-4">
            We offer a 7-day money-back guarantee on all new subscriptions. To
            qualify, you must submit a written request within 7 days of your
            original payment. Refunds are processed to the original payment
            method within 10 business days.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            6. Non-Refundable Cases
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>Requests made after 7 days of purchase</li>
            <li>Services already consumed in full or used extensively</li>
            <li>Custom enterprise plans or development work</li>
          </ul>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">
            7. Modifications to Billing
          </h2>
          <p className="mb-4">
            Strat Digital reserves the right to change pricing, billing cycles,
            or terms. You will be notified in advance of any changes and given
            the opportunity to cancel your subscription before new terms apply.
          </p>

          <h2 className="text-2xl font-semibold  mt-6 mb-2">8. Contact</h2>
          <p className="mb-2">
            For billing inquiries or refund requests, contact us at:
          </p>
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
