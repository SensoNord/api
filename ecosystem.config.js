module.exports = {
    apps : [
      {
        name: "sensonord-directus-app",
        script: "npx",
        args: "directus start",
        restart_delay: 500
      }
    ]
  }