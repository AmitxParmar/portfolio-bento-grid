import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDateAndTimeAgo(dateString: string) {
  const [day, month, year] = dateString.split("/").map(Number);
  const date = new Date(year, month - 1, day);
  const now = new Date();
  const diffInMs = now.getTime() - date.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  let timeAgo = "";
  if (diffInDays < 0) timeAgo = "In the future";
  else if (diffInDays === 0) timeAgo = "Today";
  else if (diffInDays === 1) timeAgo = "Yesterday";
  else if (diffInDays < 30) timeAgo = `${diffInDays} days ago`;
  else if (diffInDays < 365) timeAgo = `${Math.floor(diffInDays / 30)} months ago`;
  else timeAgo = `${Math.floor(diffInDays / 365)} years ago`;

  return { formattedDate, timeAgo };
}
