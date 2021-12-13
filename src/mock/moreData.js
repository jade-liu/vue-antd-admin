export const pageList = {
  status: 200,
  data: [...Array(1000)].map((_, index) => {
    return {
      name: `用户${index + 1}`,
      username: `user${index + 1}`,
      sexual: "male",
      groupName: "basicUser",
      depart: "patd",
      position: "BA",
    };
  }),
};
