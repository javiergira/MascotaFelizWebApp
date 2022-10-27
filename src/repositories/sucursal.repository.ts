import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MascotaFelizDbDataSource} from '../datasources';
import {Sucursal, SucursalRelations} from '../models';

export class SucursalRepository extends DefaultCrudRepository<
  Sucursal,
  typeof Sucursal.prototype.Id,
  SucursalRelations
> {
  constructor(
    @inject('datasources.MascotaFelizDB') dataSource: MascotaFelizDbDataSource,
  ) {
    super(Sucursal, dataSource);
  }
}
