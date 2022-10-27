import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {PlanesMascotas} from '../models';
import {PlanesMascotasRepository} from '../repositories';

export class PlanesController {
  constructor(
    @repository(PlanesMascotasRepository)
    public planesMascotasRepository : PlanesMascotasRepository,
  ) {}

  @post('/planes-mascotas')
  @response(200, {
    description: 'PlanesMascotas model instance',
    content: {'application/json': {schema: getModelSchemaRef(PlanesMascotas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanesMascotas, {
            title: 'NewPlanesMascotas',
            exclude: ['Id'],
          }),
        },
      },
    })
    planesMascotas: Omit<PlanesMascotas, 'id'>,
  ): Promise<PlanesMascotas> {
    return this.planesMascotasRepository.create(planesMascotas);
  }

  @get('/planes-mascotas/count')
  @response(200, {
    description: 'PlanesMascotas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PlanesMascotas) where?: Where<PlanesMascotas>,
  ): Promise<Count> {
    return this.planesMascotasRepository.count(where);
  }

  @get('/planes-mascotas')
  @response(200, {
    description: 'Array of PlanesMascotas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PlanesMascotas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PlanesMascotas) filter?: Filter<PlanesMascotas>,
  ): Promise<PlanesMascotas[]> {
    return this.planesMascotasRepository.find(filter);
  }

  @patch('/planes-mascotas')
  @response(200, {
    description: 'PlanesMascotas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanesMascotas, {partial: true}),
        },
      },
    })
    planesMascotas: PlanesMascotas,
    @param.where(PlanesMascotas) where?: Where<PlanesMascotas>,
  ): Promise<Count> {
    return this.planesMascotasRepository.updateAll(planesMascotas, where);
  }

  @get('/planes-mascotas/{id}')
  @response(200, {
    description: 'PlanesMascotas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PlanesMascotas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PlanesMascotas, {exclude: 'where'}) filter?: FilterExcludingWhere<PlanesMascotas>
  ): Promise<PlanesMascotas> {
    return this.planesMascotasRepository.findById(id, filter);
  }

  @patch('/planes-mascotas/{id}')
  @response(204, {
    description: 'PlanesMascotas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanesMascotas, {partial: true}),
        },
      },
    })
    planesMascotas: PlanesMascotas,
  ): Promise<void> {
    await this.planesMascotasRepository.updateById(id, planesMascotas);
  }

  @put('/planes-mascotas/{id}')
  @response(204, {
    description: 'PlanesMascotas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() planesMascotas: PlanesMascotas,
  ): Promise<void> {
    await this.planesMascotasRepository.replaceById(id, planesMascotas);
  }

  @del('/planes-mascotas/{id}')
  @response(204, {
    description: 'PlanesMascotas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.planesMascotasRepository.deleteById(id);
  }
}
