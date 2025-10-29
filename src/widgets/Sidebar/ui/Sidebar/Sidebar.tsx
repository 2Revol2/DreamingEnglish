import Image from "next/image";
import Logo from "@/shared/assets/logo.png";

export const Sidebar = () => {
  return (
    <aside
      className={"w-full h-16 lg:w-70 lg:h-[100vh] bg-secondary-background fixed bottom-0 lg:static flex lg:flex-col"}
    >
      <div className={"h-40 border-b hidden border-borderColor lg:flex items-center justify-center"}>
        <Image src={Logo} alt="Logo" className={"w-30 h-30"} />
        <div className={"font-medium text-lg"}>
          <h1>
            Dreaming
            <br />
            English
          </h1>
        </div>
      </div>
    </aside>
  );
};
