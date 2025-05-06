import { Icon } from "common/ui-kit/Icon";
import plus from "../../../../public/assets/icons/plus.svg";
import cn from "classnames";

type Props = {
  className?: string;
};

export const UploadBtn = ({ className }: Props) => {
  return (
    <button
      className={cn(
        "bg-[#1C1C1C] text-white rounded-xl flex items-center gap-x-1 cursor-pointer",
        className
      )}
    >
      <Icon src={plus} className="w-5 h-5" />
      Upload
    </button>
  );
};
