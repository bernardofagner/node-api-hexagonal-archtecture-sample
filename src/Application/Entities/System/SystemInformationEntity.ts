import { BaseEntity } from "../BaseEntity";

/**
 * @Description This entity represents the System Information
 */
class SystemInformationEntity extends BaseEntity {

    public Description: string | undefined;
    public Version: string | undefined;    

    constructor(init?: Partial<SystemInformationEntity>) {
        super();
        Object.assign(this, init);
    }

    public Validate(): void {
        //TODO: implementar classe de validação depois
        this.IsValid = true;
        this.ErrorMessages = [];
        const errorMessages = new Array<string>();

        if (!this.EntityID) errorMessages.push('Invalid entityId');

        if (!this.Description) errorMessages.push('Description not provided');

        if (!this.Version) errorMessages.push('Version not provided');

        if (errorMessages.length) {
            this.IsValid = false;
            this.ErrorMessages = errorMessages;
        }
    }
}

export { SystemInformationEntity as SystemInformation };