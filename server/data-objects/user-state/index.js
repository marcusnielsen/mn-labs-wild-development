export default function userStateFactory() {
  return {
    prerequisites: {
      github: false,
      heroku: false,
      node: false,
    },
    labs: {
      projectSetup: false,
      staticServer: false,
      clientSetup: false,
      reactComponent: false,
      reactRouter: false,
      restApi: false,
      webSockets: false,
      jwt: false,
    },
  };
}
