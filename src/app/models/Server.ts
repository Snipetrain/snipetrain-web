export interface ServerQuery {
  id: number;
  vac: number;
  protocol: number;
  name: string;
  map: string;
  folder: string;
  game: string;
  players: number;
  maxPlayers: number;
  bots: number;
  serverType: string;
  environment: string;
  visibility: number;
  version: string;
  port: number;
}

export interface SrcdServer {
  srcdId: number;
  name: string;
  port: number;
  status: string;
  mod: number;
  user: string;
}

export interface Server {
  id: string;
  serverId: number;
  name: string;
  ipAddress: string;
  hostname: string;
  srcdServers: SrcdServer[];
}
