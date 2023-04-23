import { rest } from "msw";

export const handlers = [
  rest.post(`${process.env.REACT_APP_BACKEND_URL}/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ data: "success" }));
  }),
];
