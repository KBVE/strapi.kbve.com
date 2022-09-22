module.exports = {
  apps: [
    {
      name: "yarn",
      script: "yarn",
      args: "develop",
      interpreter: "/bin/bash",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
