module.exports = ({ env }) => ({
    "vercel-deploy": {
      enabled: true,
      config: {
        deployHook:
          "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
        apiToken: "e3BxhWmcCtAvZSJhLzqNmldi",
        appFilter: "Sanoja-website",
        teamFilter: "Admin",
        roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
      },
    },
  });