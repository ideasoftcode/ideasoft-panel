import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export const cls = (...classes: any) => twMerge(clsx(...classes));
