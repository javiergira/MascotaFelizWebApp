import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MascotaFelizDbDataSource} from '../datasources';
import {ClienteProspecto, ClienteProspectoRelations} from '../models';

export class ClienteProspectoRepository extends DefaultCrudRepository<
  ClienteProspecto,
  typeof ClienteProspecto.prototype.Id,
  ClienteProspectoRelations
> {
  constructor(
    @inject('datasources.MascotaFelizDB') dataSource: MascotaFelizDbDataSource,
  ) {
    super(ClienteProspecto, dataSource);
  }
}
