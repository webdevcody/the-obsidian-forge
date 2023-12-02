import classNames from "classnames";
import { ReactNode, useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

type Variant = "success" | "error";

export function Alert({
  children,
  onClose,
  variant,
}: {
  children: ReactNode;
  onClose: () => void;
  variant: Variant;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const color: Record<Variant, string> = {
    success: "bg-green-300 text-green-900",
    error: "bg-red-300 text-red-900",
  };

  return (
    <div
      className={classNames(
        "flex justify-between items-center p-4 mb-4 text-sm rounded-lg bg-green-300 text-green-900",
        color[variant]
      )}
      role="alert"
    >
      {children}
      <AiFillCloseCircle
        className="cursor-pointer hover:text-gray-800 text-2xl"
        onClick={onClose}
      />
    </div>
  );
}
