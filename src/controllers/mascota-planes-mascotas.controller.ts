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
  Mascota,
  PlanesMascotas,
} from '../models';
import {MascotaRepository} from '../repositories';

export class MascotaPlanesMascotasController {
  constructor(
    @repository(MascotaRepository) protected mascotaRepository: MascotaRepository,
  ) { }

  @get('/mascotas/{id}/planes-mascotas', {
    responses: {
      '200': {
        description: 'Mascota has one PlanesMascotas',
        content: {
          'application/json': {
            schema: getModelSchemaRef(PlanesMascotas),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<PlanesMascotas>,
  ): Promise<PlanesMascotas> {
    return this.mascotaRepository.planesMascotas(id).get(filter);
  }

  @post('/mascotas/{id}/planes-mascotas', {
    responses: {
      '200': {
        description: 'Mascota model instance',
        content: {'application/json': {schema: getModelSchemaRef(PlanesMascotas)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Mascota.prototype.Id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanesMascotas, {
            title: 'NewPlanesMascotasInMascota',
            exclude: ['Id'],
            optional: ['mascotaId']
          }),
        },
      },
    }) planesMascotas: Omit<PlanesMascotas, 'Id'>,
  ): Promise<PlanesMascotas> {
    return this.mascotaRepository.planesMascotas(id).create(planesMascotas);
  }

  @patch('/mascotas/{id}/planes-mascotas', {
    responses: {
      '200': {
        description: 'Mascota.PlanesMascotas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanesMascotas, {partial: true}),
        },
      },
    })
    planesMascotas: Partial<PlanesMascotas>,
    @param.query.object('where', getWhereSchemaFor(PlanesMascotas)) where?: Where<PlanesMascotas>,
  ): Promise<Count> {
    return this.mascotaRepository.planesMascotas(id).patch(planesMascotas, where);
  }

  @del('/mascotas/{id}/planes-mascotas', {
    responses: {
      '200': {
        description: 'Mascota.PlanesMascotas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(PlanesMascotas)) where?: Where<PlanesMascotas>,
  ): Promise<Count> {
    return this.mascotaRepository.planesMascotas(id).delete(where);
  }
}
