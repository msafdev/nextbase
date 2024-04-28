import { cn } from "@/lib/utils";

import { RxCross2 } from "react-icons/rx";

const StyledCard = ({
  className = "",
  header = "Card",
  subheader = "This is a card component",
}: {
  className?: string;
  header?: string;
  subheader?: string;
}) => {
  return (
    <div
      className={cn(
        "anim w-full rounded-lg border bg-popover p-3 shadow-sm",
        className,
      )}
    >
      <div className="flex w-full items-start justify-between">
        <div className="flex flex-col">
          <h3 className="anim text-lg font-medium text-popover-foreground">
            {header}
          </h3>
          <p className="anim text-sm text-muted-foreground">{subheader}</p>
        </div>
        <RxCross2 className="anim h-6 w-6 text-foreground" />
      </div>
    </div>
  );
};
export default StyledCard;
