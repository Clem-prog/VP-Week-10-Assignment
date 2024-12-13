import { PrismaClient } from "@prisma/client";
import { emit } from "process";
import { logger } from "./logging"

export const prismaClient = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query"
        },
        {
            emit: "event",
            level: "warn"
        },
        {
            emit: "event",
            level: "info"
        },
        {
            emit: "event",
            level: "error"
        },
    ]
})

prismaClient.$on("info", (e) => {
    logger.info(e)
})

prismaClient.$on("error", (e) => {
    logger.error(e)
})

prismaClient.$on("warn", (e) => {
    logger.warn(e)
})

prismaClient.$on("query", (e) => {
    logger.info(e)
})