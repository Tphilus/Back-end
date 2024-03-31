import { getJob } from "./db/jobs.js";

export const resolvers = {
  Query: {
    jobs: () => getJob(),
  },

  Job: {
    date: (job) => {
      return job.createdAt;
    },
  },
};
