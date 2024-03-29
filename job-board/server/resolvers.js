export const resolvers = {
  Query: {
    job: () => {
      return {
        title: "The Title",
        description: "The description",
      };
    },
  },
};
