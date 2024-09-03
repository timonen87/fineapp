// Convenient way to map environment variables to config values.
AFFiNE.ENV_MAP = {
  AFFINE_SERVER_EXTERNAL_URL: ['server.externalUrl'],
  AFFINE_SERVER_PORT: ['server.port', 'int'],
  AFFINE_SERVER_HOST: 'server.host',
  AFFINE_SERVER_SUB_PATH: 'server.path',
  AFFINE_SERVER_HTTPS: ['server.https', 'boolean'],
  ENABLE_TELEMETRY: ['metrics.telemetry.enabled', 'boolean'],
  MAILER_HOST: 'mailer.host',
  MAILER_PORT: ['mailer.port', 'int'],
  MAILER_USER: 'mailer.auth.user',
  MAILER_PASSWORD: 'mailer.auth.pass',
  MAILER_SENDER: 'mailer.from.address',
  MAILER_SECURE: ['mailer.secure', 'boolean'],
  DATABASE_URL: 'database.datasourceUrl',

  // R2_ACCESS_KEY_ID:'plugins.storage.accessKeyId',
  // R2_SECRET_ACCESS_KEY:'plugins.storage.secretAccessKey',
  // REGIONAL_VK_S3_ACCOUNT:'ru-msk',

  OAUTH_GOOGLE_CLIENT_ID: 'plugins.oauth.providers.google.clientId',
  OAUTH_GOOGLE_CLIENT_SECRET: 'plugins.oauth.providers.google.clientSecret',

  OAUTH_GITHUB_CLIENT_ID: 'plugins.oauth.providers.github.clientId',
  OAUTH_GITHUB_CLIENT_SECRET: 'plugins.oauth.providers.github.clientSecret',

  OAUTH_OIDC_ISSUER: 'plugins.oauth.providers.oidc.issuer',
  OAUTH_OIDC_CLIENT_ID: 'plugins.oauth.providers.oidc.clientId',
  OAUTH_OIDC_CLIENT_SECRET: 'plugins.oauth.providers.oidc.clientSecret',
  OAUTH_OIDC_SCOPE: 'plugins.oauth.providers.oidc.args.scope',
  OAUTH_OIDC_CLAIM_MAP_USERNAME: 'plugins.oauth.providers.oidc.args.claim_id',
  OAUTH_OIDC_CLAIM_MAP_EMAIL: 'plugins.oauth.providers.oidc.args.claim_email',
  OAUTH_OIDC_CLAIM_MAP_NAME: 'plugins.oauth.providers.oidc.args.claim_name',

  METRICS_CUSTOMER_IO_TOKEN: ['metrics.customerIo.token', 'string'],

  COPILOT_OPENAI_API_KEY: 'plugins.copilot.openai.apiKey',
  COPILOT_FAL_API_KEY: 'plugins.copilot.fal.apiKey',
  COPILOT_UNSPLASH_API_KEY: 'plugins.copilot.unsplashKey',

  REDIS_SERVER_HOST: 'plugins.redis.host',
  REDIS_SERVER_PORT: ['plugins.redis.port', 'int'],
  REDIS_SERVER_USER: 'plugins.redis.username',
  REDIS_SERVER_PASSWORD: 'plugins.redis.password',
  REDIS_SERVER_DATABASE: ['plugins.redis.db', 'int'],

  DOC_MERGE_INTERVAL: ['doc.manager.updatePollInterval', 'int'],
};
