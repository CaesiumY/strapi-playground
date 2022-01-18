module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '26afc2bbbd05faaab24d27caa3aa5dd1'),
  },
});
