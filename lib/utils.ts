import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a date string in "DD/MM/YYYY" format to "DD Mon YYYY" and returns
 * a human-readable time ago string (e.g., "2 years ago").
 *
 * Note: For more robust date formatting and "time ago" calculations,
 * consider using libraries like date-fns or dayjs.
 *
 * Example:
 *   const { formattedDate, timeAgo } = formatDateAndTimeAgo("17/06/2001");
 *   // formattedDate: "17 Jun 2001"
 *   // timeAgo: "22 years ago"
 */
export function formatDateAndTimeAgo(dateStr: string): {
  formattedDate: string;
  timeAgo: string;
} {
  // Parse "DD/MM/YYYY"
  const [day, month, year] = dateStr.split("/").map(Number);
  const date = new Date(year, month - 1, day);

  // Format date as "DD Mon YYYY"
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const formattedDate = `${day.toString().padStart(2, "0")} ${
    months[month - 1]
  } ${year}`;

  // Calculate time ago
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();

  const seconds = Math.floor(diffMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const monthsAgo = Math.floor(days / 30.44);
  const years = Math.floor(days / 365.25);

  let timeAgo = "";
  if (years > 0) {
    timeAgo = years === 1 ? "1 year ago" : `${years} years ago`;
  } else if (monthsAgo > 0) {
    timeAgo = monthsAgo === 1 ? "1 month ago" : `${monthsAgo} months ago`;
  } else if (days > 0) {
    timeAgo = days === 1 ? "1 day ago" : `${days} days ago`;
  } else if (hours > 0) {
    timeAgo = hours === 1 ? "1 hour ago" : `${hours} hours ago`;
  } else if (minutes > 0) {
    timeAgo = minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
  } else {
    timeAgo = "just now";
  }

  return { formattedDate, timeAgo };
}
