export const environment = {
  production: false,
  version: '1.1.2',
  endpoints: {
    api: {
      rank: 'https://api.snipetrain.tf/api/ranks',
      serverInfo: 'https://api.snipetrain.tf/api/serverinfo',
      news: 'https://api.snipetrain.tf/api/news'
    },
    socket: {
      serverInfo: 'https://api.snipetrain.tf/serverinfohub'
    }
  },
  serverQueryInterval: 10000
};
