module.exports = {
  apps : [
    {
      name: "sports-club",
      script: "./build/index.js",
      watch: true,
      instances : "max",
      env: {
        "ENVIRONMENT": "development",
      }
    }
  ],
};
