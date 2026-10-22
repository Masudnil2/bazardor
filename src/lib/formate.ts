import { Product } from "./types";

const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

// 148 -> "১৪৮"
export function toBn(value: number | string): string {
  return String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}


export function formatPrice(n: number): string {
  return `${toBn(n.toLocaleString("en-US"))} টাকা`;
}


const UNIT_MAP: Record<string, string> = {
  kg: "প্রতি কেজি",
  liter: "প্রতি লিটার",
  litre: "প্রতি লিটার",
  l: "প্রতি লিটার",
  dozen: "প্রতি ডজন",
  piece: "প্রতি পিস",
  pcs: "প্রতি পিস",
  pc: "প্রতি পিস",
};

export function formatUnit(unit: string): string {
  return UNIT_MAP[unit.toLowerCase()] ?? `প্রতি ${unit}`;
}

export function formatShortUnit(unit: string): string {
  const full = formatUnit(unit); 
  return `টাকা/${full.replace("প্রতি ", "")}`;
}

export type ChangeDir = "up" | "down" | "flat";

export function getDir(p: Product): ChangeDir {
  if (p.change.pct === 0) return "flat";
  if (p.change.dir === "up") return "up";
  if (p.change.dir === "down") return "down";
  return "flat";
}


export function formatPct(pct: number): string {
  return `${toBn(pct)}%`;
}