import * as runtime from "@prisma/client/runtime/library";
import * as $Class from "./internal/class";
import * as Prisma from "./internal/prismaNamespace";
export * as $Enums from './enums';
export * from "./enums";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model Users
 *
 */
export type Users = Prisma.UsersModel;
/**
 * Model Products
 *
 */
export type Products = Prisma.ProductsModel;
/**
 * Model Rooms
 *
 */
export type Rooms = Prisma.RoomsModel;
/**
 * Model Comments
 *
 */
export type Comments = Prisma.CommentsModel;
/**
 * Model Room_Details
 *
 */
export type Room_Details = Prisma.Room_DetailsModel;
//# sourceMappingURL=client.d.ts.map