// helper functions for shadcn components
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// utility for merging Tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
