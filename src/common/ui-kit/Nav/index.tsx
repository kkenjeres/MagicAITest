"use client";
import cn from "classnames";
import { Icon } from "../Icon";
import { navData } from "../../../data/navigation/navData";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavProps {
  className?: string;
}

export const Nav = ({ className }: NavProps) => {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col", className)}>
      <ul className="flex flex-col gap-y-1">
        {navData.map((item) => {
          const isActive = pathname === item.path;
          return (
            <li key={item.id}>
              <Link
                href={item.path}
                className={cn(
                  "flex items-center gap-x-2 p-2 rounded-xl hover:bg-hover transition duration-150",
                  {
                    "bg-active": isActive,
                  }
                )}
              >
                <Icon src={item.icon} alt={item.text} className="w-5 h-5" />
                <span>{item.text}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
