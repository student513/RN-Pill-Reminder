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
}
