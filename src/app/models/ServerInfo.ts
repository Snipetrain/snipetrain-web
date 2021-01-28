  export interface Steam {
      version: string;
      account: string;
      officialversion: string;
  }

  export interface Teams {
      team: {
        name: string;
        count: string;
      }[];
  }

  export interface Players {
      player: {
        id: string;
        name: string;
        uniqueid: string;
        avatar: string;
        team: string;
        squad: string;
        kills: string;
        deaths: string;
        suicides: string;
        hs: string;
        shots: string;
        hits: string;
        isdead: string;
        hasbomb: string;
        ping: string;
        connected: string;
        skillchange: string;
        skill: string;
        rank: string;
        assists: string;
        assisted: string;
        killstreak: string;
        deathstreak: string;
        rounds: string;
        survived: string;
        wins: string;
        losses: string;
        teamkills: string;
        teamkilled: string;
        healedpoints: string;
        flagscaptured: string;
        cc: string;
        cn: string;
      }[];
  }

  export interface Server {
      id: string;
      addr: string;
      port: string;
      game: string;
      steam: Steam;
      uptime: string;
      name: string;
      map: string;
      time: string;
      act: string;
      bots: string;
      max: string;
      kills: string;
      hs: string;
      suicides: string;
      shots: string;
      hits: string;
      cc: string;
      cn: string;
      teams: Teams;
      players: Players;
  }

  export interface ServerInfo {
      server: Server;
      flipped: boolean;
  }


