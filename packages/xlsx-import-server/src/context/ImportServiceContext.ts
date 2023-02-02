import {$ImportService, type IImportService} from "@leight/xlsx-import";
import {type IContainer, ServiceContext} from "@leight/container";

/**
 * Wrapper for accessing typed ImportService from any container.
 */
export const ImportServiceContext = (container: IContainer) => new ServiceContext<IImportService>(container, $ImportService);
