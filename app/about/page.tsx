import HeaderSection from "@/components/header-section";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="About Us" subTitle="Learn more about our company" />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/about-image.jpg"
            width={650}
            height={400}
            alt="About Image"
          />
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h1>
            <p className="text-gray-700 py-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium quidem labore quia earum porro soluta cupiditate libero
              incidunt doloremque nisi.
            </p>
            <ul className="list-item space-y-6 pt-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Vission :</h4>
                  <p className="text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odio voluptas, id facilis quisquam quia adipisci.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1">Mission :</h4>
                  <p className="text-gray-600">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Corporis ipsum voluptate fugit temporibus provident? Dolore
                    neque unde et doloribus cupiditate!
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
