import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MascotaFelizDbDataSource} from '../datasources';
import {ProductosServicios, ProductosServiciosRelations} from '../models';

export class ProductosServiciosRepository extends DefaultCrudRepository<
  ProductosServicios,
  typeof ProductosServicios.prototype.Id,
  ProductosServiciosRelations
> {
  constructor(
    @inject('datasources.MascotaFelizDB') dataSource: MascotaFelizDbDataSource,
  ) {
    super(ProductosServicios, dataSource);
  }
}
