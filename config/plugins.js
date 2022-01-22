module.exports = ({ env }) => ({
  upload: {
    provider: "firebase-storage",
    providerOptions: {
      serviceAccount: JSON.parse(env("STORAGE_BUCKET_KEY")),
      bucketUrl: env("STORAGE_BUCKET_URL"),
      uploadOptions: {
        public: true,
      },
      deleteOptions: {},
    },
  },
});
