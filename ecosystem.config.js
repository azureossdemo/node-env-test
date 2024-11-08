module.exports = {
    apps: [
      {
        name: "fullstack-development",
        script: "server.js",
        instances: "max",
        exec_mode: "cluster",
        env: {
          NODE_ENV: "development",
        },
        env_production: {
          NODE_ENV: "production",
        },
        env_staging: {
          NODE_ENV: "staging",
        },
      },
    ],
  };  