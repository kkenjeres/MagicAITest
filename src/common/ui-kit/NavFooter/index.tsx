import Link from "next/link";
import Image from "next/image";
import { Icon } from "common/ui-kit/Icon";
import { FooterNavData } from "data/navigation/footerNavData";

export const SidebarFooter = () => {
  return (
    <div className="justify-end h-full flex flex-col">
      <nav className="flex flex-col">
        {FooterNavData.map((item) => (
          <Link
            key={item.id}
            href={""}
            className="flex items-center gap-x-2 p-2 rounded-xl hover:bg-hover transition duration-150"
          >
            <Icon src={item.icon} alt={item.text} className="w-5 h-5" />
            {item.text}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-x-2 p-2">
        <Image
          src="/assets/icons/avatar.svg"
          alt="User avatar"
          width={20}
          height={20}
          className="rounded-full"
        />
        <span>Marcielle Enrique</span>
      </div>
    </div>
  );
};
