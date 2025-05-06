import cn from "classnames";
import { Icon } from "../Icon";
import { navData } from "../../../data/navigation/navData";
import Link from "next/link";

export interface NavProps {
  className?: string;
}

export const Nav = ({ className }: NavProps) => {
  return (
    <nav className={cn("flex flex-col", className)}>
      <ul className="flex flex-col gap-y-1">
        {navData.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className="flex items-center gap-x-2 p-2 hover:bg-[#E1E1E1] rounded-xl"
            >
              <Icon src={item.icon} alt={item.text} className="w-5 h-5" />
              <span>{item.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
