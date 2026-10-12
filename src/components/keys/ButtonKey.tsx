import clsx from "clsx";
import { BaseKey } from "./BaseKey";

type ButtonKeyProps = {
  note: string;
  pressedColor?: "green" | "red";
};

export function ButtonKey({ note, pressedColor = "green" }: ButtonKeyProps) {
  return (
    <BaseKey
      note={note}
      className={clsx(
        "border border-black rounded-full size-20 text-2xl flex items-center justify-center cursor-pointer hover:bg-gray-100 select-none",
        pressedColor === "green"
          ? "data-[pressed=true]:bg-green-200 data-[pressed=true]:hover:bg-green-200"
          : "data-[pressed=true]:bg-red-200 data-[pressed=true]:hover:bg-red-200",
      )}
    >
      {note.slice(0, -1)}
    </BaseKey>
  );
}
