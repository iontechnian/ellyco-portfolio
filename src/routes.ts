import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("skill/:skill", "./routes/skill-info.tsx"),
  // * matches all URLs, the ? makes it optional so it will match / as well
] satisfies RouteConfig;
