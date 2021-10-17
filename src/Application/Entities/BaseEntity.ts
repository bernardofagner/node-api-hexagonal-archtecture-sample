const ENTITY_NOT_VALIDATE_YET: string = 'Entity not validated yet';
abstract class BaseEntity {
    
    protected EntityID: string | undefined;
    
    public ErrorMessages: Array<string>;
    public IsValid: boolean;

    constructor() {
        this.GenerateEntityId();
        this.IsValid = false;
        this.ErrorMessages = new Array<string>();
        this.ErrorMessages.push(ENTITY_NOT_VALIDATE_YET);
    }

    public GetEntityId(): string | undefined {
        return this.EntityID;
    }

    private GenerateEntityId(): void {
        if (!this.EntityID) {
            //TODO: Usar md5 ou crypto aqui
            this.EntityID = 'new unique id';
        }
    }
}

export { BaseEntity };