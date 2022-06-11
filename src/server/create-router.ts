import { router } from "@trpc/server";
import { ChampionsEndPointDataType } from "../zod/models/championModel";
import { Context } from "./context";

export const createRouter = () => router<Context>();
