const { expect } = require("chai");
const { makeRefObj } = require("../db/utils/utils");

describe("makeRefObj", () => {
  it("returns an empty object when an empty array is passed", () => {
    const input = [];
    const actual = makeRefObj(input);
    const expected = {};
    expect(actual).to.be.eql(expected);
  });
});
it("function makeRefObj does not mutate the original data when it is invoked", () => {
  const input = [
    {
      channel_name: "all",
      channel_id: 1
    },
    {
      channel_name: "football",
      channel_id: 2
    },
    {
      channel_name: "user1_user2_dm",
      channel_id: 3
    }
  ];
  const checkedInput = [
    {
      channel_name: "all",
      channel_id: 1
    },
    {
      channel_name: "football",
      channel_id: 2
    },
    {
      channel_name: "user1_user2_dm",
      channel_id: 3
    }
  ];
  makeRefObj(input);
  expect(input).to.be.eql(checkedInput);
});
it("return an object with the data formated when and array with one object is passed ", () => {
  const input = [
    {
      channel_name: "all",
      channel_id: 1
    }
  ];
  const actual = makeRefObj(input);
  const expected = { all: 1 };
  expect(actual).to.be.eql(expected);
});
it("return an object with the data formated when and array with with multiple objects is passed", () => {
  const input = [
    {
      channel_name: "all",
      channel_id: 1
    },
    {
      channel_name: "football",
      channel_id: 2
    },
    {
      channel_name: "user1_user2_dm",
      channel_id: 3
    }
  ];
  const actual = makeRefObj(input);
  const expected = { all: 1, football: 2, user1_user2_dm: 3 };
  expect(actual).to.be.eql(expected);
});
