declare class TimerRick {
    public isRun: boolean;
    private action: () => void;
    private interval: number;
    private callback: any;

    constructor(action: () => void, interval: number)

    public start(): Promise<boolean>;;

    public stop(): Promise<boolean>;;
}

export default TimerRick;