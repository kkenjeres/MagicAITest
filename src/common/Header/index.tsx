import cn from "classnames";
import React, { memo } from "react";
import { Nav } from "../ui-kit/Nav";
import Image from "next/image";
import logo from "../../../public/assets/icons/logo.svg";
import { UploadBtn } from "common/ui-kit/UploadBtn";
import { SidebarFooter } from "common/ui-kit/NavFooter";
interface HeaderProps {
  className?: string;
}

export const Header = memo(function Header({ className }: HeaderProps) {
  return (
    <header
      className={cn(
        "w-full bg-[#F5F5F5] h-full flex flex-col p-3 text-[#333333]",
        className
      )}
    >
      <Image
        src={logo}
        width={73}
        height={34}
        alt="Reshare logo"
        className="mb-6"
      />
      <UploadBtn className="self-start px-2 py-2 mb-3" />
      <Nav />
      <SidebarFooter />
    </header>
  );
});
