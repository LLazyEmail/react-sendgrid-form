module.exports = {
    env: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
    }
  }

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer();
