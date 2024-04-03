import { FakerHelper } from "../main.js";

const Users = {};

const Events = {
  id: 1,
  thumbnail: "thumbnail",
  title: "product",
  summary: "sentence",
  date: "dateShort",
  time: "timeShort",
  venue: "address",
  user: {
    id: "uuid",
    avatar: "avatar",
    surname: "surname",
    other_names: "otherNames",
  },
  attendance: {
    total: "reviews",
    male: 0,
    female: 0,
  },
  created_at: "date",
};

const Attendance = {
  id: 1,
  avatar: "avatar",
  name: "otherNames",
  sex: "sex",
  email: "email",
  status: "booleanInt",
  created_at: "date",
};

const Brand = {
  id: 1,
  brand: () =>
    FakerHelper.in([
      "lexus",
      "mercedes",
      "hyundai",
      "toyota",
      "range rover",
      "volkswagen",
      "kia",
      "honda",
    ]),
  created_at: "date",
};

const Model = {
  id: 1,
  created_at: "date",
};

export default Model;
export const customSchemaSize = 9;
