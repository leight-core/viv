import {type IPrismaSource, type IRepository} from '@leight/prisma';
import {AbstractSource} from '@leight/source-server';

export abstract class AbstractPrismaSource<TRepository extends IRepository> extends AbstractSource<any, any> implements IPrismaSource<TRepository> {
}
