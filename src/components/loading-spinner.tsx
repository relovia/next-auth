import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function LoadingSpinner({
  size = "md",
  className,
}: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      className={cn(
        "animate-spin rounded-full border-4 border-gray-200",
        "border-t-blue-600 dark:border-gray-700 dark:border-t-blue-500",
        size === "sm" && "h-6 w-6",
        size === "md" && "h-8 w-8",
        size === "lg" && "h-12 w-12",
        className
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
