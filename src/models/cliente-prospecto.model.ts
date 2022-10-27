import {Entity, model, property} from '@loopback/repository';

@model()
export class ClienteProspecto extends Entity {
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
  Nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  Apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  Correo: string;

  @property({
    type: 'string',
    required: true,
  })
  Telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  CiudadResidencia: string;


  constructor(data?: Partial<ClienteProspecto>) {
    super(data);
  }
}

export interface ClienteProspectoRelations {
  // describe navigational properties here
}

export type ClienteProspectoWithRelations = ClienteProspecto & ClienteProspectoRelations;
