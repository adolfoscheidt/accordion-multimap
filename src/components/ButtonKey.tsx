// TODO implement DiatonicButtonKey component?

export function ButtonKey({
  note = "",
  pressed = false,
  pressedColor = "blue",
}: {
  note?: string;
  pressed?: boolean;
  pressedColor?: "blue" | "yellow";
}) {

  // TODO add clsx for the conditional classes

  return (
    <div
      className={`border border-black rounded-full size-28 text-2xl flex items-center justify-center ${pressedColor === "blue" ? "data-[pressed=true]:bg-blue-300" : "data-[pressed=true]:bg-yellow-200"}`}
      data-pressed={pressed}
    >
      {note}
    </div>
  );
}
