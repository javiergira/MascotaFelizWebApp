import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MascotaFelizDbDataSource} from '../datasources';
import {PlanesMascotas, PlanesMascotasRelations, Mascota} from '../models';
import {MascotaRepository} from './mascota.repository';

export class PlanesMascotasRepository extends DefaultCrudRepository<
  PlanesMascotas,
  typeof PlanesMascotas.prototype.Id,
  PlanesMascotasRelations
> {

  public readonly mascotas: HasManyRepositoryFactory<Mascota, typeof PlanesMascotas.prototype.Id>;

  constructor(
    @inject('datasources.MascotaFelizDB') dataSource: MascotaFelizDbDataSource, @repository.getter('MascotaRepository') protected mascotaRepositoryGetter: Getter<MascotaRepository>,
  ) {
    super(PlanesMascotas, dataSource);
    this.mascotas = this.createHasManyRepositoryFactoryFor('mascotas', mascotaRepositoryGetter,);
    this.registerInclusionResolver('mascotas', this.mascotas.inclusionResolver);
  }
}
