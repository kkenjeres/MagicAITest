import { Icon } from "common/ui-kit/Icon/Icon";
import chevronRight from "../../../public/assets/icons/chevronDown.svg";
import { LibraryItem } from "../../types/libraryTypes";

type Props = {
  item: LibraryItem;
};

export const LibraryListItem = ({ item }: Props) => {
  return (
    <li className="flex border-b border-[#E1E1E1] items-center justify-between p-3 group hover:bg-[#F1F1F1] cursor-pointer">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-150 md:w-4 md:h-4 text-blue-600"
        />
        <Icon src={item.image} alt="" className="w-5 h-5" />
        <span className="text-sm font-medium text-gray-800 group-hover:underline">
          {item.name}
        </span>
      </div>
      <div className="text-xs text-[#777777] flex items-center gap-x-3">
        {item.date}
        <Icon src={item.publisher} />
        <Icon src={chevronRight} />
      </div>
    </li>
  );
};
