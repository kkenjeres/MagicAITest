import { Icon } from "common/ui-kit/Icon";
import { LibraryItem } from "../../types/libraryTypes";

type Props = {
  item: LibraryItem;
};

export const LibraryListItem = ({ item }: Props) => {
  return (
    <li className="flex border-b border-border last:border-none items-center justify-between p-3 group hover:bg-[#F1F1F1] cursor-pointer">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-150 md:w-4 md:h-4 text-blue-600"
        />
        <Icon src={item.image} alt="" className="w-6 h-6" />
        <span className="text-[13px] font-medium text-gray-800 group-hover:underline">
          {item.name}
        </span>
      </div>

      <div className="text-[13px] text-[#777777] flex items-center gap-x-3">
        {item.date}
        <Icon src={item.publisher} />
        <Icon
          src="/assets/icons/chevronDown.svg"
          className="w-6 h-6 md:opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        />
      </div>
    </li>
  );
};
