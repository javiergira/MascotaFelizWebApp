import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MascotaFelizDB',
  connector: 'mongodb',
  url: 'mongodb+srv://javiergiraldo:NicoDianaLu05@cluster0.epouq2p.mongodb.net/MascotaDB?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MascotaFelizDbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'MascotaFelizDB';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MascotaFelizDB', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
