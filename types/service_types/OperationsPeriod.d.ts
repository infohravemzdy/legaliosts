import { IPeriod } from './period';
export declare class OperationsPeriod {
    private static range;
    private static rangeArray;
    private static TERM_BEG_FINISHED;
    private static TERM_END_FINISHED;
    private static WEEKSUN_SUNDAY;
    private static WEEKMON_SUNDAY;
    private static TIME_MULTIPLY_SIXTY;
    private static WEEKDAYS_COUNT;
    static zip(a: number[], b: number[]): number[][];
    static emptyMonthSchedule(): number[];
    static totalWeeksHours(template: number[]): number;
    static totalMonthHours(template: number[]): number;
    static daysInMonth(period: IPeriod): number;
    static dateOfMonth(period: IPeriod, dayOrdinal: number): Date;
    static dayOfWeekMonToSun(periodDateCwd: number): number;
    static dayOfWeekFromOrdinal(dayOrdinal: number, periodBeginCwd: number): number;
    static weekDayOfMonth(period: IPeriod, dayOrdinal: number): number;
    static dateFromInPeriod(period: IPeriod, dateFrom: Date): number;
    static dateStopInPeriod(period: IPeriod, dateEnds: Date): number;
    static timesheetWeekSchedule(period: IPeriod, secondsWeekly: number, workdaysWeekly: number): number[];
    static weekDaySeconds(dayOrdinal: number, daysOfWork: number, secondsDaily: number, secRemainder: number): number;
    static timesheetFullSchedule(period: IPeriod, weekSchedule: number[]): number[];
    static timesheetWorkSchedule(monthSchedule: number[], dayTermFrom: number, dayTermStop: number): number[];
    static timesheetWorkContract(monthContract: number[], monthPosition: number[], dayTermFrom: number, dayTermStop: number): number[];
    static secondsFromPeriodWeekSchedule(period: IPeriod, weekSchedule: number[], dayOrdinal: number): number;
    static secondsFromWeekSchedule(weekSchedule: number[], dayOrdinal: number, periodBeginCwd: number): number;
    static secondsFromScheduleSeq(timeTable: number[], dayOrdinal: number, dayFromOrd: number, dayEndsOrd: number): number;
    static scheduleBaseSubtract(template: number[], subtract: number[], dayFrom: number, dayStop: number): number[];
    static plusHoursFromCalendar(dayTermFrom: number, dayTermStop: number, dayIndex: number, partSeconds: number, workSeconds: number): number;
    static hoursFromCalendar(dayTermFrom: number, dayTermStop: number, dayIndex: number, workSeconds: number): number;
}