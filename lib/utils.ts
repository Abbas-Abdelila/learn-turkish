import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toTitle(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function calculateProgress(current: number, total: number) {
  return Math.floor((current / total) * 100)
}