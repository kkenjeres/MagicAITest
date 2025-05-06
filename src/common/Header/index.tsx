import cn from "classnames";
import { Nav } from "common/ui-kit/Nav";
import Image from "next/image";
import { UploadBtn } from "common/ui-kit/UploadBtn";
import { SidebarFooter } from "common/ui-kit/NavFooter";
interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        "hidden md:flex w-[260px] bg-[#F5F5F5] h-screen flex-col p-3 fixed top-0 left-0 z-40",
        className
      )}
    >
      <Image
        src="assets/icons/logo.svg"
        width={73}
        height={34}
        alt="Reshare logo"
        className="mb-6"
      />
      <UploadBtn className="self-start pl-1 pr-2 py-2 mb-3" />
      <Nav />
      <SidebarFooter />
    </header>
  );
};
