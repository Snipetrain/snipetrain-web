import * as fromServers from './servers.actions';

describe('loadServerss', () => {
  it('should return an action', () => {
    expect(fromServers.loadServerss().type).toBe('[Servers] Load Serverss');
  });
});
