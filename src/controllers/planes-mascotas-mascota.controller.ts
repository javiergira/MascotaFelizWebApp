import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  PlanesMascotas,
  Mascota,
} from '../models';
import {PlanesMascotasRepository} from '../repositories';

export class PlanesMascotasMascotaController {
  constructor(
    @repository(PlanesMascotasRepository) protected planesMascotasRepository: PlanesMascotasRepository,
  ) { }

  @get('/planes-mascotas/{id}/mascotas', {
    responses: {
      '200': {
        description: 'Array of PlanesMascotas has many Mascota',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Mascota)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Mascota>,
  ): Promise<Mascota[]> {
    return this.planesMascotasRepository.mascotas(id).find(filter);
  }

  @post('/planes-mascotas/{id}/mascotas', {
    responses: {
      '200': {
        description: 'PlanesMascotas model instance',
        content: {'application/json': {schema: getModelSchemaRef(Mascota)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof PlanesMascotas.prototype.Id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mascota, {
            title: 'NewMascotaInPlanesMascotas',
            exclude: ['Id'],
            optional: ['planesMascotasId']
          }),
        },
      },
    }) mascota: Omit<Mascota, 'Id'>,
  ): Promise<Mascota> {
    return this.planesMascotasRepository.mascotas(id).create(mascota);
  }

  @patch('/planes-mascotas/{id}/mascotas', {
    responses: {
      '200': {
        description: 'PlanesMascotas.Mascota PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Mascota, {partial: true}),
        },
      },
    })
    mascota: Partial<Mascota>,
    @param.query.object('where', getWhereSchemaFor(Mascota)) where?: Where<Mascota>,
  ): Promise<Count> {
    return this.planesMascotasRepository.mascotas(id).patch(mascota, where);
  }

  @del('/planes-mascotas/{id}/mascotas', {
    responses: {
      '200': {
        description: 'PlanesMascotas.Mascota DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Mascota)) where?: Where<Mascota>,
  ): Promise<Count> {
    return this.planesMascotasRepository.mascotas(id).delete(where);
  }
}
