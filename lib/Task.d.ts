declare class Task {

    static Delay(ms: number): Promise<any>;

    static Run(callback: () => void): Promise<any>;
}
export default Task;