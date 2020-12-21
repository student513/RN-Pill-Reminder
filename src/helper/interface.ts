export interface Week {
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thusday: boolean;
  Friday: boolean;
  Saturday: boolean;
  Sunday: boolean;
}

export interface CyclePillInfo {
  key: number;
  PillType: string;
  Name: string;
  Dosage: string;
  StartTime: Date;
  EndTime: Date;
  ParsedStartTime: string;
  isEndRepeat: boolean;
  EndRepeat: string;
  ParsedEndTime: string;
  isRepeat: boolean;
  frequency: string;
  every: number;
  Bedtime: boolean;
  Critical: boolean;
  NextTime: Date;
}

export interface DayTimePillInfo {
  key: number;
  Name: string;
  Dosage: string;
  Time: Date;
  EndTime: Date;
  ParsedTime: string;
  isEndRepeat: boolean;
  EndRepeat: string;
  ParsedEndTime: string;
  Critical: boolean;
}
