export interface Time {
  hour: number;
  minute: number;
  isAM: boolean;
}

export interface ymdDate {
  year: number;
  month: string;
  day: number;
}

export interface RePeat {
  Frequency: string;
  Every: number;
}

export interface Week {
  Monday: boolean;
  Tuesday: boolean;
  Wednesday: boolean;
  Thusday: boolean;
  Friday: boolean;
  Saturday: boolean;
  Sunday: boolean;
}
