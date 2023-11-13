module.exports = {
  apps : [{
    name: 'NuxtApp',
    script: 'node_modules/.bin/nuxt',
    args: 'start',
    interpreter: '/root/.nvm/versions/node/v18.18.2/bin/pnpm', // Replace with the path to the pnpm binary
    env: {
      "HOST": "0.0.0.0",
      "PORT": 3000,
      "NODE_ENV": "production",
    }
  }]
};
