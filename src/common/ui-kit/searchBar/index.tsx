import React from "react";
import search from "../../../../public/assets/icons/search.svg";
import { Icon } from "../Icon/Icon";
import cn from "classnames";

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  return (
    <div
      className={cn(
        "flex items-center bg-[#F1F1F1] rounded-lg px-3 py-1",
        className
      )}
    >
      <Icon src={search} className="mr-2" />
      <input
        type="text"
        placeholder="Search in Reshare..."
        className="outline-none text-black"
      />
    </div>
  );
};
