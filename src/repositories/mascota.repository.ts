import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepositoryFactory} from '@loopback/repository';
import {MascotaFelizDbDataSource} from '../datasources';
import {Mascota, MascotaRelations, Usuario, PlanesMascotas} from '../models';
import {UsuarioRepository} from './usuario.repository';
import {PlanesMascotasRepository} from './planes-mascotas.repository';

export class MascotaRepository extends DefaultCrudRepository<
  Mascota,
  typeof Mascota.prototype.Id,
  MascotaRelations
> {

  public readonly usuario: BelongsToAccessor<Usuario, typeof Mascota.prototype.Id>;

  public readonly planesMascotas: HasOneRepositoryFactory<PlanesMascotas, typeof Mascota.prototype.Id>;

  constructor(
    @inject('datasources.MascotaFelizDB') dataSource: MascotaFelizDbDataSource, @repository.getter('UsuarioRepository') protected usuarioRepositoryGetter: Getter<UsuarioRepository>, @repository.getter('PlanesMascotasRepository') protected planesMascotasRepositoryGetter: Getter<PlanesMascotasRepository>,
  ) {
    super(Mascota, dataSource);
    this.planesMascotas = this.createHasOneRepositoryFactoryFor('planesMascotas', planesMascotasRepositoryGetter);
    this.registerInclusionResolver('planesMascotas', this.planesMascotas.inclusionResolver);
    this.usuario = this.createBelongsToAccessorFor('usuario', usuarioRepositoryGetter,);
    this.registerInclusionResolver('usuario', this.usuario.inclusionResolver);
  }
}
