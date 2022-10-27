import {Entity, model, property, hasMany} from '@loopback/repository';
import {Mascota} from './mascota.model';

@model()
export class PlanesMascotas extends Entity {
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
  PlanBronce: string;

  @property({
    type: 'string',
    required: true,
  })
  PlanPlata: string;

  @property({
    type: 'string',
    required: true,
  })
  PlanOro: string;

  @property({
    type: 'string',
    required: true,
  })
  PlanDiamante: string;

  @property({
    type: 'string',
  })
  mascotaId?: string;

  @hasMany(() => Mascota)
  mascotas: Mascota[];

  constructor(data?: Partial<PlanesMascotas>) {
    super(data);
  }
}

export interface PlanesMascotasRelations {
  // describe navigational properties here
}

export type PlanesMascotasWithRelations = PlanesMascotas & PlanesMascotasRelations;
