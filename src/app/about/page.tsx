import styles from "@/styles";
import Image from "next/image";
import innovateIcon from "@/assets/calculator.svg";
import executeIcon from "@/assets/execute.svg";
import growIcon from "@/assets/grow.svg";

export default function About() {
  return (
    <div>
      <div className={``}>
        <div className="bg-[#EBF5FF]">
          <div className={`${styles.boxWidth} mx-auto`}>
            <div className="flex flex-1 h-[20vh] md:h-[40vh] items-center justify-center">
              <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
            </div>
          </div>
        </div>

        <div
          className={`${styles.boxWidth} ${styles.paddingX} ${styles.paddingY} mx-auto`}
        >
          <section id="about">
            <div className="flex flex-col items-center justify-center">
              <p className={`${styles.paragraph} text-center px-4 mt-8 mb-4`}>
                Strat Digital is a tech-forward digital agency and product
                company offering tailored digital services for startups, SMEs
                and enterprises across Africa. We blend strategy, technology,
                and creativity to build solutions that power growth
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-8 px-4">
              <div className="border border-gray-200 p-5 rounded-md shadow-xs">
                <Image
                  src={innovateIcon}
                  alt="innovate"
                  className="w-[40px] h-[40px]"
                />
                <h3 className="my-6 font-semibold text-2xl text-[#213053]">
                  Innovate
                </h3>
                <p className="leading-7">
                  We craft forward-thinking digital solutions that combine
                  creativity and technology—helping businesses stay ahead in
                  fintech, branding, and beyond.
                </p>
              </div>
              <div className="border border-gray-200 p-5 rounded-md shadow-xs">
                <Image
                  src={executeIcon}
                  alt="execute"
                  className="w-[40px] h-[40px]"
                />
                <h3 className="my-6 font-semibold text-2xl text-[#213053]">
                  Execute
                </h3>
                <p className="leading-7">
                  From strategy to launch, we deliver seamless digital products
                  that are fast, reliable, and built for real-world performance.
                </p>
              </div>
              <div className="border border-gray-200 p-5 rounded-md shadow-xs">
                <Image
                  src={growIcon}
                  alt="grow"
                  className="w-[40px] h-[40px]"
                />
                <h3 className="my-6 font-semibold text-2xl text-[#213053]">
                  Grow
                </h3>
                <p className="leading-7">
                  We equip businesses to scale through smart tools, strong
                  branding, and ongoing digital support—so growth isn’t just
                  possible, it’s predictable.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
