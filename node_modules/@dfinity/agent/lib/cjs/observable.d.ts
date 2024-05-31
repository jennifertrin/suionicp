import { AgentError } from './errors';
export declare type ObserveFunction<T> = (data: T, ...rest: unknown[]) => void;
export declare class Observable<T> extends Function {
    #private;
    observers: ObserveFunction<T>[];
    constructor();
    subscribe(func: ObserveFunction<T>): void;
    unsubscribe(func: ObserveFunction<T>): void;
    notify(data: T, ...rest: unknown[]): void;
}
export declare type AgentLog = {
    message: string;
    level: 'warn' | 'info';
} | {
    message: string;
    level: 'error';
    error: AgentError;
};
export declare class ObservableLog extends Observable<AgentLog> {
    #private;
    constructor();
    log(message: string, ...rest: unknown[]): void;
    warn(message: string, ...rest: unknown[]): void;
    error(message: string, error: AgentError, ...rest: unknown[]): void;
}
