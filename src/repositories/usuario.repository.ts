import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MascotaFelizDbDataSource} from '../datasources';
import {Usuario, UsuarioRelations, Mascota} from '../models';
import {MascotaRepository} from './mascota.repository';

export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.Id,
  UsuarioRelations
> {

  public readonly mascotas: HasManyRepositoryFactory<Mascota, typeof Usuario.prototype.Id>;

  constructor(
    @inject('datasources.MascotaFelizDB') dataSource: MascotaFelizDbDataSource, @repository.getter('MascotaRepository') protected mascotaRepositoryGetter: Getter<MascotaRepository>,
  ) {
    super(Usuario, dataSource);
    this.mascotas = this.createHasManyRepositoryFactoryFor('mascotas', mascotaRepositoryGetter,);
    this.registerInclusionResolver('mascotas', this.mascotas.inclusionResolver);
  }
}
