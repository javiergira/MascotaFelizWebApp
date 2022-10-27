import {Entity, model, property} from '@loopback/repository';

@model()
export class ProductosServicios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Alimentos: string;

  @property({
    type: 'string',
    required: true,
  })
  Medicinas: string;

  @property({
    type: 'string',
    required: true,
  })
  ConsultaVeterinario: string;

  @property({
    type: 'string',
    required: true,
  })
  ServicioJardin: string;


  constructor(data?: Partial<ProductosServicios>) {
    super(data);
  }
}

export interface ProductosServiciosRelations {
  // describe navigational properties here
}

export type ProductosServiciosWithRelations = ProductosServicios & ProductosServiciosRelations;
