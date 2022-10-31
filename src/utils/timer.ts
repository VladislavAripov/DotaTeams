export const sleep = (timeoutInMs: number) => new Promise<number>((resolve) => setTimeout(resolve, timeoutInMs));
