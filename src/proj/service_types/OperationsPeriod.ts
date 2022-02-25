import { IPeriod } from './period';

export class OperationsPeriod {
  private static *range(x, y) {
    while (true) {
      if (x <= y) yield x++;
      else return null;
    }
  }
  private static rangeArray(x, y) {
    return Array.from(OperationsPeriod.range(x, y));
  }
  private static TERM_BEG_FINISHED: number = 32;

  private static TERM_END_FINISHED: number = 0;

  private static WEEKSUN_SUNDAY: number = 0;

  private static WEEKMON_SUNDAY: number = 7;

  private static TIME_MULTIPLY_SIXTY: number = 60;

  private static WEEKDAYS_COUNT: number = 7;

  public static zip(a: number[], b: number[]) {
    return Array.from(Array(Math.max(b.length, a.length)), (_, i) => [a[i], b[i]]);
  }

  public static emptyMonthSchedule(): number[] {
    return Array<number>(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }

  public static totalWeeksHours(template: number[]): number {
    const result = template.slice(0, 6).reduce((agr, x) => agr + x, 0);

    return result;
  }
  public static totalMonthHours(template: number[]): number {
    const result = template.slice(0, 30).reduce((agr, x) => agr + x, 0);

    return result;
  }
  public static daysInMonth(period: IPeriod): number {
    const date = new Date(period.year(), period.month(), 0);
    return date.getDate();
  }
  public static dateOfMonth(period: IPeriod, dayOrdinal: number): Date {
    const periodDay: number = Math.min(Math.max(1, dayOrdinal), OperationsPeriod.daysInMonth(period));

    return new Date(period.year(), Math.max(0, period.month() - 1), periodDay);
  }
  public static dayOfWeekMonToSun(periodDateCwd: number): number {
    // DayOfWeek Sunday = 0,
    // Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6,
    if (periodDateCwd === OperationsPeriod.WEEKSUN_SUNDAY) {
      return OperationsPeriod.WEEKMON_SUNDAY;
    }
    return periodDateCwd;
  }
  public static dayOfWeekFromOrdinal(dayOrdinal: number, periodBeginCwd: number): number {
    // dayOrdinal 1..31
    // periodBeginCwd 1..7
    // dayOfWeek 1..7

    const dayOfWeek = ((dayOrdinal - 1 + (periodBeginCwd - 1)) % 7) + 1;

    return dayOfWeek;
  }

  public static weekDayOfMonth(period: IPeriod, dayOrdinal: number): number {
    const periodDate = OperationsPeriod.dateOfMonth(period, dayOrdinal);

    const periodDateCwd = periodDate.getDay();

    return OperationsPeriod.dayOfWeekMonToSun(periodDateCwd);
  }
  public static dateFromInPeriod(period: IPeriod, dateFrom: Date): number {
    let dayTermFrom = OperationsPeriod.TERM_BEG_FINISHED;

    const periodDateBeg = new Date(period.year(), Math.max(0, period.month() - 1), 1);

    if (dateFrom !== undefined) {
      dayTermFrom = dateFrom.getDate();
    }

    if (dateFrom === undefined || dateFrom < periodDateBeg) {
      dayTermFrom = 1;
    }
    return dayTermFrom;
  }

  public static dateStopInPeriod(period: IPeriod, dateEnds: Date): number {
    let dayTermEnd = OperationsPeriod.TERM_END_FINISHED;

    const daysPeriod = OperationsPeriod.daysInMonth(period);

    const periodDateEnd = new Date(period.year(), Math.max(0, period.month() - 1), daysPeriod);

    if (dateEnds !== undefined) {
      dayTermEnd = dateEnds.getDate();
    }

    if (dateEnds === undefined || dateEnds > periodDateEnd) {
      dayTermEnd = daysPeriod;
    }
    return dayTermEnd;
  }
  public static timesheetWeekSchedule(period: IPeriod, secondsWeekly: number, workdaysWeekly: number): number[] {
    const secondsDaily = secondsWeekly / Math.min(workdaysWeekly, OperationsPeriod.WEEKDAYS_COUNT);

    const secRemainder = secondsWeekly - secondsDaily * workdaysWeekly;

    const weekSchedule = OperationsPeriod.rangeArray(1, 7).map((x) =>
      OperationsPeriod.weekDaySeconds(x, workdaysWeekly, secondsDaily, secRemainder),
    );

    return weekSchedule;
  }
  public static weekDaySeconds(
    dayOrdinal: number,
    daysOfWork: number,
    secondsDaily: number,
    secRemainder: number,
  ): number {
    if (dayOrdinal < daysOfWork) {
      return secondsDaily;
    } else if (dayOrdinal === daysOfWork) {
      return secondsDaily + secRemainder;
    }
    return 0;
  }
  public static timesheetFullSchedule(period: IPeriod, weekSchedule: number[]): number[] {
    const periodDaysCount = OperationsPeriod.daysInMonth(period);

    const periodBeginCwd = OperationsPeriod.weekDayOfMonth(period, 1);

    const monthSchedule = OperationsPeriod.rangeArray(1, periodDaysCount).map((x) =>
      OperationsPeriod.secondsFromWeekSchedule(weekSchedule, x, periodBeginCwd),
    );

    return monthSchedule;
  }
  public static timesheetWorkSchedule(monthSchedule: number[], dayTermFrom: number, dayTermStop: number): number[] {
    const timeSheet = monthSchedule.map((x, i) => OperationsPeriod.hoursFromCalendar(dayTermFrom, dayTermStop, i, x));

    return timeSheet;
  }
  public static timesheetWorkContract(
    monthContract: number[],
    monthPosition: number[],
    dayTermFrom: number,
    dayTermStop: number,
  ): number[] {
    const idxFrom = dayTermFrom - 1;
    const idxStop = dayTermStop - 1;
    const zipedMonth = OperationsPeriod.zip(monthContract, monthPosition);
    const result = zipedMonth.map((x, i) => {
      let res: number = 0;
      if (i >= idxFrom && i <= idxStop) {
        res = x[0] + x[1];
      }
      return res;
    });
    return result;
  }
  public static secondsFromPeriodWeekSchedule(period: IPeriod, weekSchedule: number[], dayOrdinal: number): number {
    const periodBeginCwd = OperationsPeriod.weekDayOfMonth(period, 1);

    return OperationsPeriod.secondsFromWeekSchedule(weekSchedule, dayOrdinal, periodBeginCwd);
  }
  public static secondsFromWeekSchedule(weekSchedule: number[], dayOrdinal: number, periodBeginCwd: number): number {
    const dayOfWeek = OperationsPeriod.dayOfWeekFromOrdinal(dayOrdinal, periodBeginCwd);

    const indexWeek = dayOfWeek - 1;

    if (indexWeek < 0 || indexWeek >= weekSchedule.length) {
      return 0;
    }
    return weekSchedule[indexWeek];
  }

  public static secondsFromScheduleSeq(
    timeTable: number[],
    dayOrdinal: number,
    dayFromOrd: number,
    dayEndsOrd: number,
  ): number {
    if (dayOrdinal < dayFromOrd || dayOrdinal > dayEndsOrd) {
      return 0;
    }

    const indexTable = dayOrdinal - dayFromOrd;

    if (indexTable < 0 || indexTable >= timeTable.length) {
      return 0;
    }
    return timeTable[indexTable];
  }
  public static scheduleBaseSubtract(
    template: number[],
    subtract: number[],
    dayFrom: number,
    dayStop: number,
  ): number[] {
    const idxFrom = dayFrom - 1;
    const idxStop = dayStop - 1;
    const zipedWorkAbsc = OperationsPeriod.zip(template, subtract);
    const result = zipedWorkAbsc.map((x, i) => {
      let res = 0;
      if (i >= idxFrom && i <= idxStop) {
        res = Math.max(0, x[0] - x[1]);
      }
      return res;
    });
    return result;
  }
  public static plusHoursFromCalendar(
    dayTermFrom: number,
    dayTermStop: number,
    dayIndex: number,
    partSeconds: number,
    workSeconds: number,
  ): number {
    const dayOrdinal = dayIndex + 1;

    let plusSeconds = workSeconds;

    if (dayTermFrom > dayOrdinal) {
      plusSeconds = 0;
    }
    if (dayTermStop < dayOrdinal) {
      plusSeconds = 0;
    }
    return plusSeconds + partSeconds;
  }
  public static hoursFromCalendar(
    dayTermFrom: number,
    dayTermStop: number,
    dayIndex: number,
    workSeconds: number,
  ): number {
    const dayOrdinal = dayIndex + 1;

    let workingDay = workSeconds;

    if (dayTermFrom > dayOrdinal) {
      workingDay = 0;
    }
    if (dayTermStop < dayOrdinal) {
      workingDay = 0;
    }
    return workingDay;
  }
}
