import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("./routes/home.tsx"),
  route("projects", "./routes/projects.tsx"),
  route("skill/:skill", "./routes/skill-info.tsx"),
  route("test", "./App.tsx"),
  // * matches all URLs, the ? makes it optional so it will match / as well
] satisfies RouteConfig;
