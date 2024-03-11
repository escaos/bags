export type Level = "failure" | "warning" | "info" | "success";
export type RangeType = "days" | "months" | "years";

export type ValueLevel = {
  value: number;
  level: Level;
};
