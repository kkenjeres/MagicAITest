import Link from "next/link";
import Image from "next/image";
import { Icon } from "common/ui-kit/Icon";
import { FooterNavData } from "data/navigation/footerNavData";
import avatar from "../../../../public/assets/icons/avatar.svg";

export const SidebarFooter = () => {
  return (
    <div className="mt-auto flex flex-col text-[#333333]">
      <nav className="flex flex-col">
        {FooterNavData.map((item) => (
          <Link
            key={item.id}
            href={""}
            className="flex items-center gap-x-2 p-2 hover:bg-[#E1E1E1] rounded-xl"
          >
            <Icon src={item.icon} alt={item.text} className="w-5 h-5" />
            {item.text}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-x-2 p-2">
        <Image
          src={avatar}
          alt="User avatar"
          width={20}
          height={20}
          className="rounded-full"
        />
        <span className="text-sm">Marcielle Enrique</span>
      </div>
    </div>
  );
};
