import { Icon } from "common/ui-kit/Icon/Icon";
import plus from "../../../../public/assets/icons/plus.svg";
import cn from "classnames";

type Props = {
  className?: string;
};

export const UploadBtn = ({ className }: Props) => {
  return (
    <button
      className={cn(
        "bg-[#1C1C1C] text-white rounded-lg flex items-center gap-x-1 cursor-pointer",
        className
      )}
    >
      <Icon src={plus} />
      Upload
    </button>
  );
};
