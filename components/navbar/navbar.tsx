import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-md z-20">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image
            src={"/logo.png"}
            alt="Logo"
            width={128}
            height={49}
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
