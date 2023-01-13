import {container}        from "./container.js";
import {MigrationService} from "./MigrationService.js";

container.resolve(MigrationService).migrate();

export {};
