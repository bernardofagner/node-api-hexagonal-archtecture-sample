export class UsecaseRequest {
    public Data: any;

    constructor(init?: Partial<UsecaseRequest>) {
        Object.assign(this, init);
    }
}

export class UsecaseResponse {
    public Data: any;

    constructor(init?: Partial<UsecaseResponse>) {
        Object.assign(this, init);
    }
}

export default interface IUseCaseBase {
    ExecuteAsync(request: UsecaseRequest): Promise<UsecaseResponse>;
}

export interface IUseCaseBaseWithoutRequest {
    ExecuteAsync(): Promise<UsecaseResponse>;
}

export default interface IUseCaseBaseWithoutResponse {
    ExecuteAsync(request: UsecaseRequest): Promise<void>;
}
