
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model NewsletterBatch
 * 
 */
export type NewsletterBatch = $Result.DefaultSelection<Prisma.$NewsletterBatchPayload>
/**
 * Model NewsletterMessages
 * 
 */
export type NewsletterMessages = $Result.DefaultSelection<Prisma.$NewsletterMessagesPayload>
/**
 * Model NewsletterErrors
 * 
 */
export type NewsletterErrors = $Result.DefaultSelection<Prisma.$NewsletterErrorsPayload>
/**
 * Model NewsletterNotifications
 * 
 */
export type NewsletterNotifications = $Result.DefaultSelection<Prisma.$NewsletterNotificationsPayload>
/**
 * Model SystemMailNotifications
 * 
 */
export type SystemMailNotifications = $Result.DefaultSelection<Prisma.$SystemMailNotificationsPayload>
/**
 * Model SystemMails
 * 
 */
export type SystemMails = $Result.DefaultSelection<Prisma.$SystemMailsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SystemMailStatus: {
  pending: 'pending',
  sent: 'sent',
  error: 'error'
};

export type SystemMailStatus = (typeof SystemMailStatus)[keyof typeof SystemMailStatus]

}

export type SystemMailStatus = $Enums.SystemMailStatus

export const SystemMailStatus: typeof $Enums.SystemMailStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more NewsletterBatches
 * const newsletterBatches = await prisma.newsletterBatch.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more NewsletterBatches
   * const newsletterBatches = await prisma.newsletterBatch.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.newsletterBatch`: Exposes CRUD operations for the **NewsletterBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsletterBatches
    * const newsletterBatches = await prisma.newsletterBatch.findMany()
    * ```
    */
  get newsletterBatch(): Prisma.NewsletterBatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletterMessages`: Exposes CRUD operations for the **NewsletterMessages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsletterMessages
    * const newsletterMessages = await prisma.newsletterMessages.findMany()
    * ```
    */
  get newsletterMessages(): Prisma.NewsletterMessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletterErrors`: Exposes CRUD operations for the **NewsletterErrors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsletterErrors
    * const newsletterErrors = await prisma.newsletterErrors.findMany()
    * ```
    */
  get newsletterErrors(): Prisma.NewsletterErrorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletterNotifications`: Exposes CRUD operations for the **NewsletterNotifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsletterNotifications
    * const newsletterNotifications = await prisma.newsletterNotifications.findMany()
    * ```
    */
  get newsletterNotifications(): Prisma.NewsletterNotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemMailNotifications`: Exposes CRUD operations for the **SystemMailNotifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemMailNotifications
    * const systemMailNotifications = await prisma.systemMailNotifications.findMany()
    * ```
    */
  get systemMailNotifications(): Prisma.SystemMailNotificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.systemMails`: Exposes CRUD operations for the **SystemMails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemMails
    * const systemMails = await prisma.systemMails.findMany()
    * ```
    */
  get systemMails(): Prisma.SystemMailsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    NewsletterBatch: 'NewsletterBatch',
    NewsletterMessages: 'NewsletterMessages',
    NewsletterErrors: 'NewsletterErrors',
    NewsletterNotifications: 'NewsletterNotifications',
    SystemMailNotifications: 'SystemMailNotifications',
    SystemMails: 'SystemMails'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "newsletterBatch" | "newsletterMessages" | "newsletterErrors" | "newsletterNotifications" | "systemMailNotifications" | "systemMails"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      NewsletterBatch: {
        payload: Prisma.$NewsletterBatchPayload<ExtArgs>
        fields: Prisma.NewsletterBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterBatchPayload>
          }
          findFirst: {
            args: Prisma.NewsletterBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterBatchPayload>
          }
          findMany: {
            args: Prisma.NewsletterBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterBatchPayload>[]
          }
          create: {
            args: Prisma.NewsletterBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterBatchPayload>
          }
          createMany: {
            args: Prisma.NewsletterBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NewsletterBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterBatchPayload>
          }
          update: {
            args: Prisma.NewsletterBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterBatchPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsletterBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterBatchPayload>
          }
          aggregate: {
            args: Prisma.NewsletterBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletterBatch>
          }
          groupBy: {
            args: Prisma.NewsletterBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterBatchCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterBatchCountAggregateOutputType> | number
          }
        }
      }
      NewsletterMessages: {
        payload: Prisma.$NewsletterMessagesPayload<ExtArgs>
        fields: Prisma.NewsletterMessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterMessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterMessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterMessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterMessagesPayload>
          }
          findFirst: {
            args: Prisma.NewsletterMessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterMessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterMessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterMessagesPayload>
          }
          findMany: {
            args: Prisma.NewsletterMessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterMessagesPayload>[]
          }
          create: {
            args: Prisma.NewsletterMessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterMessagesPayload>
          }
          createMany: {
            args: Prisma.NewsletterMessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NewsletterMessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterMessagesPayload>
          }
          update: {
            args: Prisma.NewsletterMessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterMessagesPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterMessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterMessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsletterMessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterMessagesPayload>
          }
          aggregate: {
            args: Prisma.NewsletterMessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletterMessages>
          }
          groupBy: {
            args: Prisma.NewsletterMessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterMessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterMessagesCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterMessagesCountAggregateOutputType> | number
          }
        }
      }
      NewsletterErrors: {
        payload: Prisma.$NewsletterErrorsPayload<ExtArgs>
        fields: Prisma.NewsletterErrorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterErrorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterErrorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterErrorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterErrorsPayload>
          }
          findFirst: {
            args: Prisma.NewsletterErrorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterErrorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterErrorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterErrorsPayload>
          }
          findMany: {
            args: Prisma.NewsletterErrorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterErrorsPayload>[]
          }
          create: {
            args: Prisma.NewsletterErrorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterErrorsPayload>
          }
          createMany: {
            args: Prisma.NewsletterErrorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NewsletterErrorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterErrorsPayload>
          }
          update: {
            args: Prisma.NewsletterErrorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterErrorsPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterErrorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterErrorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsletterErrorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterErrorsPayload>
          }
          aggregate: {
            args: Prisma.NewsletterErrorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletterErrors>
          }
          groupBy: {
            args: Prisma.NewsletterErrorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterErrorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterErrorsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterErrorsCountAggregateOutputType> | number
          }
        }
      }
      NewsletterNotifications: {
        payload: Prisma.$NewsletterNotificationsPayload<ExtArgs>
        fields: Prisma.NewsletterNotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterNotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterNotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterNotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterNotificationsPayload>
          }
          findFirst: {
            args: Prisma.NewsletterNotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterNotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterNotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterNotificationsPayload>
          }
          findMany: {
            args: Prisma.NewsletterNotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterNotificationsPayload>[]
          }
          create: {
            args: Prisma.NewsletterNotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterNotificationsPayload>
          }
          createMany: {
            args: Prisma.NewsletterNotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NewsletterNotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterNotificationsPayload>
          }
          update: {
            args: Prisma.NewsletterNotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterNotificationsPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterNotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterNotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NewsletterNotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterNotificationsPayload>
          }
          aggregate: {
            args: Prisma.NewsletterNotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletterNotifications>
          }
          groupBy: {
            args: Prisma.NewsletterNotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterNotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterNotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterNotificationsCountAggregateOutputType> | number
          }
        }
      }
      SystemMailNotifications: {
        payload: Prisma.$SystemMailNotificationsPayload<ExtArgs>
        fields: Prisma.SystemMailNotificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemMailNotificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailNotificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemMailNotificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailNotificationsPayload>
          }
          findFirst: {
            args: Prisma.SystemMailNotificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailNotificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemMailNotificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailNotificationsPayload>
          }
          findMany: {
            args: Prisma.SystemMailNotificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailNotificationsPayload>[]
          }
          create: {
            args: Prisma.SystemMailNotificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailNotificationsPayload>
          }
          createMany: {
            args: Prisma.SystemMailNotificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SystemMailNotificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailNotificationsPayload>
          }
          update: {
            args: Prisma.SystemMailNotificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailNotificationsPayload>
          }
          deleteMany: {
            args: Prisma.SystemMailNotificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemMailNotificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemMailNotificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailNotificationsPayload>
          }
          aggregate: {
            args: Prisma.SystemMailNotificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemMailNotifications>
          }
          groupBy: {
            args: Prisma.SystemMailNotificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemMailNotificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemMailNotificationsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemMailNotificationsCountAggregateOutputType> | number
          }
        }
      }
      SystemMails: {
        payload: Prisma.$SystemMailsPayload<ExtArgs>
        fields: Prisma.SystemMailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemMailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemMailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailsPayload>
          }
          findFirst: {
            args: Prisma.SystemMailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemMailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailsPayload>
          }
          findMany: {
            args: Prisma.SystemMailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailsPayload>[]
          }
          create: {
            args: Prisma.SystemMailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailsPayload>
          }
          createMany: {
            args: Prisma.SystemMailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SystemMailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailsPayload>
          }
          update: {
            args: Prisma.SystemMailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailsPayload>
          }
          deleteMany: {
            args: Prisma.SystemMailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemMailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemMailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemMailsPayload>
          }
          aggregate: {
            args: Prisma.SystemMailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemMails>
          }
          groupBy: {
            args: Prisma.SystemMailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemMailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemMailsCountArgs<ExtArgs>
            result: $Utils.Optional<SystemMailsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    newsletterBatch?: NewsletterBatchOmit
    newsletterMessages?: NewsletterMessagesOmit
    newsletterErrors?: NewsletterErrorsOmit
    newsletterNotifications?: NewsletterNotificationsOmit
    systemMailNotifications?: SystemMailNotificationsOmit
    systemMails?: SystemMailsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type NewsletterBatchCountOutputType
   */

  export type NewsletterBatchCountOutputType = {
    NewslettersMessages: number
    NewslettersErrors: number
  }

  export type NewsletterBatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NewslettersMessages?: boolean | NewsletterBatchCountOutputTypeCountNewslettersMessagesArgs
    NewslettersErrors?: boolean | NewsletterBatchCountOutputTypeCountNewslettersErrorsArgs
  }

  // Custom InputTypes
  /**
   * NewsletterBatchCountOutputType without action
   */
  export type NewsletterBatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterBatchCountOutputType
     */
    select?: NewsletterBatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsletterBatchCountOutputType without action
   */
  export type NewsletterBatchCountOutputTypeCountNewslettersMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterMessagesWhereInput
  }

  /**
   * NewsletterBatchCountOutputType without action
   */
  export type NewsletterBatchCountOutputTypeCountNewslettersErrorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterErrorsWhereInput
  }


  /**
   * Count Type NewsletterMessagesCountOutputType
   */

  export type NewsletterMessagesCountOutputType = {
    notificationEvents: number
  }

  export type NewsletterMessagesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificationEvents?: boolean | NewsletterMessagesCountOutputTypeCountNotificationEventsArgs
  }

  // Custom InputTypes
  /**
   * NewsletterMessagesCountOutputType without action
   */
  export type NewsletterMessagesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessagesCountOutputType
     */
    select?: NewsletterMessagesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsletterMessagesCountOutputType without action
   */
  export type NewsletterMessagesCountOutputTypeCountNotificationEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterNotificationsWhereInput
  }


  /**
   * Count Type SystemMailsCountOutputType
   */

  export type SystemMailsCountOutputType = {
    SystemMailNotifications: number
  }

  export type SystemMailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SystemMailNotifications?: boolean | SystemMailsCountOutputTypeCountSystemMailNotificationsArgs
  }

  // Custom InputTypes
  /**
   * SystemMailsCountOutputType without action
   */
  export type SystemMailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailsCountOutputType
     */
    select?: SystemMailsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SystemMailsCountOutputType without action
   */
  export type SystemMailsCountOutputTypeCountSystemMailNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemMailNotificationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model NewsletterBatch
   */

  export type AggregateNewsletterBatch = {
    _count: NewsletterBatchCountAggregateOutputType | null
    _min: NewsletterBatchMinAggregateOutputType | null
    _max: NewsletterBatchMaxAggregateOutputType | null
  }

  export type NewsletterBatchMinAggregateOutputType = {
    id: string | null
    siteId: string | null
    fromEmail: string | null
    contents: string | null
    batchId: string | null
    created: Date | null
  }

  export type NewsletterBatchMaxAggregateOutputType = {
    id: string | null
    siteId: string | null
    fromEmail: string | null
    contents: string | null
    batchId: string | null
    created: Date | null
  }

  export type NewsletterBatchCountAggregateOutputType = {
    id: number
    siteId: number
    fromEmail: number
    contents: number
    batchId: number
    created: number
    _all: number
  }


  export type NewsletterBatchMinAggregateInputType = {
    id?: true
    siteId?: true
    fromEmail?: true
    contents?: true
    batchId?: true
    created?: true
  }

  export type NewsletterBatchMaxAggregateInputType = {
    id?: true
    siteId?: true
    fromEmail?: true
    contents?: true
    batchId?: true
    created?: true
  }

  export type NewsletterBatchCountAggregateInputType = {
    id?: true
    siteId?: true
    fromEmail?: true
    contents?: true
    batchId?: true
    created?: true
    _all?: true
  }

  export type NewsletterBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterBatch to aggregate.
     */
    where?: NewsletterBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterBatches to fetch.
     */
    orderBy?: NewsletterBatchOrderByWithRelationInput | NewsletterBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsletterBatches
    **/
    _count?: true | NewsletterBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterBatchMaxAggregateInputType
  }

  export type GetNewsletterBatchAggregateType<T extends NewsletterBatchAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletterBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletterBatch[P]>
      : GetScalarType<T[P], AggregateNewsletterBatch[P]>
  }




  export type NewsletterBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterBatchWhereInput
    orderBy?: NewsletterBatchOrderByWithAggregationInput | NewsletterBatchOrderByWithAggregationInput[]
    by: NewsletterBatchScalarFieldEnum[] | NewsletterBatchScalarFieldEnum
    having?: NewsletterBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterBatchCountAggregateInputType | true
    _min?: NewsletterBatchMinAggregateInputType
    _max?: NewsletterBatchMaxAggregateInputType
  }

  export type NewsletterBatchGroupByOutputType = {
    id: string
    siteId: string
    fromEmail: string
    contents: string
    batchId: string
    created: Date
    _count: NewsletterBatchCountAggregateOutputType | null
    _min: NewsletterBatchMinAggregateOutputType | null
    _max: NewsletterBatchMaxAggregateOutputType | null
  }

  type GetNewsletterBatchGroupByPayload<T extends NewsletterBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterBatchGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterBatchGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    fromEmail?: boolean
    contents?: boolean
    batchId?: boolean
    created?: boolean
    NewslettersMessages?: boolean | NewsletterBatch$NewslettersMessagesArgs<ExtArgs>
    NewslettersErrors?: boolean | NewsletterBatch$NewslettersErrorsArgs<ExtArgs>
    _count?: boolean | NewsletterBatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsletterBatch"]>



  export type NewsletterBatchSelectScalar = {
    id?: boolean
    siteId?: boolean
    fromEmail?: boolean
    contents?: boolean
    batchId?: boolean
    created?: boolean
  }

  export type NewsletterBatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "fromEmail" | "contents" | "batchId" | "created", ExtArgs["result"]["newsletterBatch"]>
  export type NewsletterBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    NewslettersMessages?: boolean | NewsletterBatch$NewslettersMessagesArgs<ExtArgs>
    NewslettersErrors?: boolean | NewsletterBatch$NewslettersErrorsArgs<ExtArgs>
    _count?: boolean | NewsletterBatchCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NewsletterBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsletterBatch"
    objects: {
      NewslettersMessages: Prisma.$NewsletterMessagesPayload<ExtArgs>[]
      NewslettersErrors: Prisma.$NewsletterErrorsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      siteId: string
      fromEmail: string
      contents: string
      batchId: string
      created: Date
    }, ExtArgs["result"]["newsletterBatch"]>
    composites: {}
  }

  type NewsletterBatchGetPayload<S extends boolean | null | undefined | NewsletterBatchDefaultArgs> = $Result.GetResult<Prisma.$NewsletterBatchPayload, S>

  type NewsletterBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsletterBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsletterBatchCountAggregateInputType | true
    }

  export interface NewsletterBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsletterBatch'], meta: { name: 'NewsletterBatch' } }
    /**
     * Find zero or one NewsletterBatch that matches the filter.
     * @param {NewsletterBatchFindUniqueArgs} args - Arguments to find a NewsletterBatch
     * @example
     * // Get one NewsletterBatch
     * const newsletterBatch = await prisma.newsletterBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterBatchFindUniqueArgs>(args: SelectSubset<T, NewsletterBatchFindUniqueArgs<ExtArgs>>): Prisma__NewsletterBatchClient<$Result.GetResult<Prisma.$NewsletterBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsletterBatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsletterBatchFindUniqueOrThrowArgs} args - Arguments to find a NewsletterBatch
     * @example
     * // Get one NewsletterBatch
     * const newsletterBatch = await prisma.newsletterBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterBatchClient<$Result.GetResult<Prisma.$NewsletterBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterBatchFindFirstArgs} args - Arguments to find a NewsletterBatch
     * @example
     * // Get one NewsletterBatch
     * const newsletterBatch = await prisma.newsletterBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterBatchFindFirstArgs>(args?: SelectSubset<T, NewsletterBatchFindFirstArgs<ExtArgs>>): Prisma__NewsletterBatchClient<$Result.GetResult<Prisma.$NewsletterBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterBatchFindFirstOrThrowArgs} args - Arguments to find a NewsletterBatch
     * @example
     * // Get one NewsletterBatch
     * const newsletterBatch = await prisma.newsletterBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterBatchClient<$Result.GetResult<Prisma.$NewsletterBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsletterBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsletterBatches
     * const newsletterBatches = await prisma.newsletterBatch.findMany()
     * 
     * // Get first 10 NewsletterBatches
     * const newsletterBatches = await prisma.newsletterBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterBatchWithIdOnly = await prisma.newsletterBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterBatchFindManyArgs>(args?: SelectSubset<T, NewsletterBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsletterBatch.
     * @param {NewsletterBatchCreateArgs} args - Arguments to create a NewsletterBatch.
     * @example
     * // Create one NewsletterBatch
     * const NewsletterBatch = await prisma.newsletterBatch.create({
     *   data: {
     *     // ... data to create a NewsletterBatch
     *   }
     * })
     * 
     */
    create<T extends NewsletterBatchCreateArgs>(args: SelectSubset<T, NewsletterBatchCreateArgs<ExtArgs>>): Prisma__NewsletterBatchClient<$Result.GetResult<Prisma.$NewsletterBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsletterBatches.
     * @param {NewsletterBatchCreateManyArgs} args - Arguments to create many NewsletterBatches.
     * @example
     * // Create many NewsletterBatches
     * const newsletterBatch = await prisma.newsletterBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterBatchCreateManyArgs>(args?: SelectSubset<T, NewsletterBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NewsletterBatch.
     * @param {NewsletterBatchDeleteArgs} args - Arguments to delete one NewsletterBatch.
     * @example
     * // Delete one NewsletterBatch
     * const NewsletterBatch = await prisma.newsletterBatch.delete({
     *   where: {
     *     // ... filter to delete one NewsletterBatch
     *   }
     * })
     * 
     */
    delete<T extends NewsletterBatchDeleteArgs>(args: SelectSubset<T, NewsletterBatchDeleteArgs<ExtArgs>>): Prisma__NewsletterBatchClient<$Result.GetResult<Prisma.$NewsletterBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsletterBatch.
     * @param {NewsletterBatchUpdateArgs} args - Arguments to update one NewsletterBatch.
     * @example
     * // Update one NewsletterBatch
     * const newsletterBatch = await prisma.newsletterBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterBatchUpdateArgs>(args: SelectSubset<T, NewsletterBatchUpdateArgs<ExtArgs>>): Prisma__NewsletterBatchClient<$Result.GetResult<Prisma.$NewsletterBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsletterBatches.
     * @param {NewsletterBatchDeleteManyArgs} args - Arguments to filter NewsletterBatches to delete.
     * @example
     * // Delete a few NewsletterBatches
     * const { count } = await prisma.newsletterBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterBatchDeleteManyArgs>(args?: SelectSubset<T, NewsletterBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsletterBatches
     * const newsletterBatch = await prisma.newsletterBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterBatchUpdateManyArgs>(args: SelectSubset<T, NewsletterBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsletterBatch.
     * @param {NewsletterBatchUpsertArgs} args - Arguments to update or create a NewsletterBatch.
     * @example
     * // Update or create a NewsletterBatch
     * const newsletterBatch = await prisma.newsletterBatch.upsert({
     *   create: {
     *     // ... data to create a NewsletterBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsletterBatch we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterBatchUpsertArgs>(args: SelectSubset<T, NewsletterBatchUpsertArgs<ExtArgs>>): Prisma__NewsletterBatchClient<$Result.GetResult<Prisma.$NewsletterBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsletterBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterBatchCountArgs} args - Arguments to filter NewsletterBatches to count.
     * @example
     * // Count the number of NewsletterBatches
     * const count = await prisma.newsletterBatch.count({
     *   where: {
     *     // ... the filter for the NewsletterBatches we want to count
     *   }
     * })
    **/
    count<T extends NewsletterBatchCountArgs>(
      args?: Subset<T, NewsletterBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsletterBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsletterBatchAggregateArgs>(args: Subset<T, NewsletterBatchAggregateArgs>): Prisma.PrismaPromise<GetNewsletterBatchAggregateType<T>>

    /**
     * Group by NewsletterBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterBatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsletterBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterBatchGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterBatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsletterBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsletterBatch model
   */
  readonly fields: NewsletterBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsletterBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    NewslettersMessages<T extends NewsletterBatch$NewslettersMessagesArgs<ExtArgs> = {}>(args?: Subset<T, NewsletterBatch$NewslettersMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    NewslettersErrors<T extends NewsletterBatch$NewslettersErrorsArgs<ExtArgs> = {}>(args?: Subset<T, NewsletterBatch$NewslettersErrorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterErrorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsletterBatch model
   */
  interface NewsletterBatchFieldRefs {
    readonly id: FieldRef<"NewsletterBatch", 'String'>
    readonly siteId: FieldRef<"NewsletterBatch", 'String'>
    readonly fromEmail: FieldRef<"NewsletterBatch", 'String'>
    readonly contents: FieldRef<"NewsletterBatch", 'String'>
    readonly batchId: FieldRef<"NewsletterBatch", 'String'>
    readonly created: FieldRef<"NewsletterBatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsletterBatch findUnique
   */
  export type NewsletterBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterBatch
     */
    select?: NewsletterBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterBatch
     */
    omit?: NewsletterBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterBatchInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterBatch to fetch.
     */
    where: NewsletterBatchWhereUniqueInput
  }

  /**
   * NewsletterBatch findUniqueOrThrow
   */
  export type NewsletterBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterBatch
     */
    select?: NewsletterBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterBatch
     */
    omit?: NewsletterBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterBatchInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterBatch to fetch.
     */
    where: NewsletterBatchWhereUniqueInput
  }

  /**
   * NewsletterBatch findFirst
   */
  export type NewsletterBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterBatch
     */
    select?: NewsletterBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterBatch
     */
    omit?: NewsletterBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterBatchInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterBatch to fetch.
     */
    where?: NewsletterBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterBatches to fetch.
     */
    orderBy?: NewsletterBatchOrderByWithRelationInput | NewsletterBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterBatches.
     */
    cursor?: NewsletterBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterBatches.
     */
    distinct?: NewsletterBatchScalarFieldEnum | NewsletterBatchScalarFieldEnum[]
  }

  /**
   * NewsletterBatch findFirstOrThrow
   */
  export type NewsletterBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterBatch
     */
    select?: NewsletterBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterBatch
     */
    omit?: NewsletterBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterBatchInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterBatch to fetch.
     */
    where?: NewsletterBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterBatches to fetch.
     */
    orderBy?: NewsletterBatchOrderByWithRelationInput | NewsletterBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterBatches.
     */
    cursor?: NewsletterBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterBatches.
     */
    distinct?: NewsletterBatchScalarFieldEnum | NewsletterBatchScalarFieldEnum[]
  }

  /**
   * NewsletterBatch findMany
   */
  export type NewsletterBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterBatch
     */
    select?: NewsletterBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterBatch
     */
    omit?: NewsletterBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterBatchInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterBatches to fetch.
     */
    where?: NewsletterBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterBatches to fetch.
     */
    orderBy?: NewsletterBatchOrderByWithRelationInput | NewsletterBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsletterBatches.
     */
    cursor?: NewsletterBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterBatches.
     */
    skip?: number
    distinct?: NewsletterBatchScalarFieldEnum | NewsletterBatchScalarFieldEnum[]
  }

  /**
   * NewsletterBatch create
   */
  export type NewsletterBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterBatch
     */
    select?: NewsletterBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterBatch
     */
    omit?: NewsletterBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsletterBatch.
     */
    data: XOR<NewsletterBatchCreateInput, NewsletterBatchUncheckedCreateInput>
  }

  /**
   * NewsletterBatch createMany
   */
  export type NewsletterBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsletterBatches.
     */
    data: NewsletterBatchCreateManyInput | NewsletterBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterBatch update
   */
  export type NewsletterBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterBatch
     */
    select?: NewsletterBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterBatch
     */
    omit?: NewsletterBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsletterBatch.
     */
    data: XOR<NewsletterBatchUpdateInput, NewsletterBatchUncheckedUpdateInput>
    /**
     * Choose, which NewsletterBatch to update.
     */
    where: NewsletterBatchWhereUniqueInput
  }

  /**
   * NewsletterBatch updateMany
   */
  export type NewsletterBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsletterBatches.
     */
    data: XOR<NewsletterBatchUpdateManyMutationInput, NewsletterBatchUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterBatches to update
     */
    where?: NewsletterBatchWhereInput
    /**
     * Limit how many NewsletterBatches to update.
     */
    limit?: number
  }

  /**
   * NewsletterBatch upsert
   */
  export type NewsletterBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterBatch
     */
    select?: NewsletterBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterBatch
     */
    omit?: NewsletterBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsletterBatch to update in case it exists.
     */
    where: NewsletterBatchWhereUniqueInput
    /**
     * In case the NewsletterBatch found by the `where` argument doesn't exist, create a new NewsletterBatch with this data.
     */
    create: XOR<NewsletterBatchCreateInput, NewsletterBatchUncheckedCreateInput>
    /**
     * In case the NewsletterBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterBatchUpdateInput, NewsletterBatchUncheckedUpdateInput>
  }

  /**
   * NewsletterBatch delete
   */
  export type NewsletterBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterBatch
     */
    select?: NewsletterBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterBatch
     */
    omit?: NewsletterBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterBatchInclude<ExtArgs> | null
    /**
     * Filter which NewsletterBatch to delete.
     */
    where: NewsletterBatchWhereUniqueInput
  }

  /**
   * NewsletterBatch deleteMany
   */
  export type NewsletterBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterBatches to delete
     */
    where?: NewsletterBatchWhereInput
    /**
     * Limit how many NewsletterBatches to delete.
     */
    limit?: number
  }

  /**
   * NewsletterBatch.NewslettersMessages
   */
  export type NewsletterBatch$NewslettersMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessages
     */
    select?: NewsletterMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterMessages
     */
    omit?: NewsletterMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterMessagesInclude<ExtArgs> | null
    where?: NewsletterMessagesWhereInput
    orderBy?: NewsletterMessagesOrderByWithRelationInput | NewsletterMessagesOrderByWithRelationInput[]
    cursor?: NewsletterMessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsletterMessagesScalarFieldEnum | NewsletterMessagesScalarFieldEnum[]
  }

  /**
   * NewsletterBatch.NewslettersErrors
   */
  export type NewsletterBatch$NewslettersErrorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterErrors
     */
    select?: NewsletterErrorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterErrors
     */
    omit?: NewsletterErrorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterErrorsInclude<ExtArgs> | null
    where?: NewsletterErrorsWhereInput
    orderBy?: NewsletterErrorsOrderByWithRelationInput | NewsletterErrorsOrderByWithRelationInput[]
    cursor?: NewsletterErrorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsletterErrorsScalarFieldEnum | NewsletterErrorsScalarFieldEnum[]
  }

  /**
   * NewsletterBatch without action
   */
  export type NewsletterBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterBatch
     */
    select?: NewsletterBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterBatch
     */
    omit?: NewsletterBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterBatchInclude<ExtArgs> | null
  }


  /**
   * Model NewsletterMessages
   */

  export type AggregateNewsletterMessages = {
    _count: NewsletterMessagesCountAggregateOutputType | null
    _min: NewsletterMessagesMinAggregateOutputType | null
    _max: NewsletterMessagesMaxAggregateOutputType | null
  }

  export type NewsletterMessagesMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    toEmail: string | null
    newsletterBatchId: string | null
    created: Date | null
    formatedContents: string | null
  }

  export type NewsletterMessagesMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    toEmail: string | null
    newsletterBatchId: string | null
    created: Date | null
    formatedContents: string | null
  }

  export type NewsletterMessagesCountAggregateOutputType = {
    id: number
    messageId: number
    toEmail: number
    newsletterBatchId: number
    created: number
    formatedContents: number
    _all: number
  }


  export type NewsletterMessagesMinAggregateInputType = {
    id?: true
    messageId?: true
    toEmail?: true
    newsletterBatchId?: true
    created?: true
    formatedContents?: true
  }

  export type NewsletterMessagesMaxAggregateInputType = {
    id?: true
    messageId?: true
    toEmail?: true
    newsletterBatchId?: true
    created?: true
    formatedContents?: true
  }

  export type NewsletterMessagesCountAggregateInputType = {
    id?: true
    messageId?: true
    toEmail?: true
    newsletterBatchId?: true
    created?: true
    formatedContents?: true
    _all?: true
  }

  export type NewsletterMessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterMessages to aggregate.
     */
    where?: NewsletterMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterMessages to fetch.
     */
    orderBy?: NewsletterMessagesOrderByWithRelationInput | NewsletterMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsletterMessages
    **/
    _count?: true | NewsletterMessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterMessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterMessagesMaxAggregateInputType
  }

  export type GetNewsletterMessagesAggregateType<T extends NewsletterMessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletterMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletterMessages[P]>
      : GetScalarType<T[P], AggregateNewsletterMessages[P]>
  }




  export type NewsletterMessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterMessagesWhereInput
    orderBy?: NewsletterMessagesOrderByWithAggregationInput | NewsletterMessagesOrderByWithAggregationInput[]
    by: NewsletterMessagesScalarFieldEnum[] | NewsletterMessagesScalarFieldEnum
    having?: NewsletterMessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterMessagesCountAggregateInputType | true
    _min?: NewsletterMessagesMinAggregateInputType
    _max?: NewsletterMessagesMaxAggregateInputType
  }

  export type NewsletterMessagesGroupByOutputType = {
    id: string
    messageId: string
    toEmail: string
    newsletterBatchId: string
    created: Date
    formatedContents: string
    _count: NewsletterMessagesCountAggregateOutputType | null
    _min: NewsletterMessagesMinAggregateOutputType | null
    _max: NewsletterMessagesMaxAggregateOutputType | null
  }

  type GetNewsletterMessagesGroupByPayload<T extends NewsletterMessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterMessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterMessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterMessagesGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterMessagesGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterMessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    toEmail?: boolean
    newsletterBatchId?: boolean
    created?: boolean
    formatedContents?: boolean
    notificationEvents?: boolean | NewsletterMessages$notificationEventsArgs<ExtArgs>
    newsletterBatch?: boolean | NewsletterBatchDefaultArgs<ExtArgs>
    _count?: boolean | NewsletterMessagesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsletterMessages"]>



  export type NewsletterMessagesSelectScalar = {
    id?: boolean
    messageId?: boolean
    toEmail?: boolean
    newsletterBatchId?: boolean
    created?: boolean
    formatedContents?: boolean
  }

  export type NewsletterMessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "toEmail" | "newsletterBatchId" | "created" | "formatedContents", ExtArgs["result"]["newsletterMessages"]>
  export type NewsletterMessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notificationEvents?: boolean | NewsletterMessages$notificationEventsArgs<ExtArgs>
    newsletterBatch?: boolean | NewsletterBatchDefaultArgs<ExtArgs>
    _count?: boolean | NewsletterMessagesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NewsletterMessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsletterMessages"
    objects: {
      notificationEvents: Prisma.$NewsletterNotificationsPayload<ExtArgs>[]
      newsletterBatch: Prisma.$NewsletterBatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageId: string
      toEmail: string
      newsletterBatchId: string
      created: Date
      formatedContents: string
    }, ExtArgs["result"]["newsletterMessages"]>
    composites: {}
  }

  type NewsletterMessagesGetPayload<S extends boolean | null | undefined | NewsletterMessagesDefaultArgs> = $Result.GetResult<Prisma.$NewsletterMessagesPayload, S>

  type NewsletterMessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsletterMessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsletterMessagesCountAggregateInputType | true
    }

  export interface NewsletterMessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsletterMessages'], meta: { name: 'NewsletterMessages' } }
    /**
     * Find zero or one NewsletterMessages that matches the filter.
     * @param {NewsletterMessagesFindUniqueArgs} args - Arguments to find a NewsletterMessages
     * @example
     * // Get one NewsletterMessages
     * const newsletterMessages = await prisma.newsletterMessages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterMessagesFindUniqueArgs>(args: SelectSubset<T, NewsletterMessagesFindUniqueArgs<ExtArgs>>): Prisma__NewsletterMessagesClient<$Result.GetResult<Prisma.$NewsletterMessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsletterMessages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsletterMessagesFindUniqueOrThrowArgs} args - Arguments to find a NewsletterMessages
     * @example
     * // Get one NewsletterMessages
     * const newsletterMessages = await prisma.newsletterMessages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterMessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterMessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterMessagesClient<$Result.GetResult<Prisma.$NewsletterMessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterMessagesFindFirstArgs} args - Arguments to find a NewsletterMessages
     * @example
     * // Get one NewsletterMessages
     * const newsletterMessages = await prisma.newsletterMessages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterMessagesFindFirstArgs>(args?: SelectSubset<T, NewsletterMessagesFindFirstArgs<ExtArgs>>): Prisma__NewsletterMessagesClient<$Result.GetResult<Prisma.$NewsletterMessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterMessages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterMessagesFindFirstOrThrowArgs} args - Arguments to find a NewsletterMessages
     * @example
     * // Get one NewsletterMessages
     * const newsletterMessages = await prisma.newsletterMessages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterMessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterMessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterMessagesClient<$Result.GetResult<Prisma.$NewsletterMessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsletterMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterMessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsletterMessages
     * const newsletterMessages = await prisma.newsletterMessages.findMany()
     * 
     * // Get first 10 NewsletterMessages
     * const newsletterMessages = await prisma.newsletterMessages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterMessagesWithIdOnly = await prisma.newsletterMessages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterMessagesFindManyArgs>(args?: SelectSubset<T, NewsletterMessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterMessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsletterMessages.
     * @param {NewsletterMessagesCreateArgs} args - Arguments to create a NewsletterMessages.
     * @example
     * // Create one NewsletterMessages
     * const NewsletterMessages = await prisma.newsletterMessages.create({
     *   data: {
     *     // ... data to create a NewsletterMessages
     *   }
     * })
     * 
     */
    create<T extends NewsletterMessagesCreateArgs>(args: SelectSubset<T, NewsletterMessagesCreateArgs<ExtArgs>>): Prisma__NewsletterMessagesClient<$Result.GetResult<Prisma.$NewsletterMessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsletterMessages.
     * @param {NewsletterMessagesCreateManyArgs} args - Arguments to create many NewsletterMessages.
     * @example
     * // Create many NewsletterMessages
     * const newsletterMessages = await prisma.newsletterMessages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterMessagesCreateManyArgs>(args?: SelectSubset<T, NewsletterMessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NewsletterMessages.
     * @param {NewsletterMessagesDeleteArgs} args - Arguments to delete one NewsletterMessages.
     * @example
     * // Delete one NewsletterMessages
     * const NewsletterMessages = await prisma.newsletterMessages.delete({
     *   where: {
     *     // ... filter to delete one NewsletterMessages
     *   }
     * })
     * 
     */
    delete<T extends NewsletterMessagesDeleteArgs>(args: SelectSubset<T, NewsletterMessagesDeleteArgs<ExtArgs>>): Prisma__NewsletterMessagesClient<$Result.GetResult<Prisma.$NewsletterMessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsletterMessages.
     * @param {NewsletterMessagesUpdateArgs} args - Arguments to update one NewsletterMessages.
     * @example
     * // Update one NewsletterMessages
     * const newsletterMessages = await prisma.newsletterMessages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterMessagesUpdateArgs>(args: SelectSubset<T, NewsletterMessagesUpdateArgs<ExtArgs>>): Prisma__NewsletterMessagesClient<$Result.GetResult<Prisma.$NewsletterMessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsletterMessages.
     * @param {NewsletterMessagesDeleteManyArgs} args - Arguments to filter NewsletterMessages to delete.
     * @example
     * // Delete a few NewsletterMessages
     * const { count } = await prisma.newsletterMessages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterMessagesDeleteManyArgs>(args?: SelectSubset<T, NewsletterMessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterMessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsletterMessages
     * const newsletterMessages = await prisma.newsletterMessages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterMessagesUpdateManyArgs>(args: SelectSubset<T, NewsletterMessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsletterMessages.
     * @param {NewsletterMessagesUpsertArgs} args - Arguments to update or create a NewsletterMessages.
     * @example
     * // Update or create a NewsletterMessages
     * const newsletterMessages = await prisma.newsletterMessages.upsert({
     *   create: {
     *     // ... data to create a NewsletterMessages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsletterMessages we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterMessagesUpsertArgs>(args: SelectSubset<T, NewsletterMessagesUpsertArgs<ExtArgs>>): Prisma__NewsletterMessagesClient<$Result.GetResult<Prisma.$NewsletterMessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsletterMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterMessagesCountArgs} args - Arguments to filter NewsletterMessages to count.
     * @example
     * // Count the number of NewsletterMessages
     * const count = await prisma.newsletterMessages.count({
     *   where: {
     *     // ... the filter for the NewsletterMessages we want to count
     *   }
     * })
    **/
    count<T extends NewsletterMessagesCountArgs>(
      args?: Subset<T, NewsletterMessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterMessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsletterMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterMessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsletterMessagesAggregateArgs>(args: Subset<T, NewsletterMessagesAggregateArgs>): Prisma.PrismaPromise<GetNewsletterMessagesAggregateType<T>>

    /**
     * Group by NewsletterMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterMessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsletterMessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterMessagesGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterMessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsletterMessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsletterMessages model
   */
  readonly fields: NewsletterMessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsletterMessages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterMessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notificationEvents<T extends NewsletterMessages$notificationEventsArgs<ExtArgs> = {}>(args?: Subset<T, NewsletterMessages$notificationEventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterNotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsletterBatch<T extends NewsletterBatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsletterBatchDefaultArgs<ExtArgs>>): Prisma__NewsletterBatchClient<$Result.GetResult<Prisma.$NewsletterBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsletterMessages model
   */
  interface NewsletterMessagesFieldRefs {
    readonly id: FieldRef<"NewsletterMessages", 'String'>
    readonly messageId: FieldRef<"NewsletterMessages", 'String'>
    readonly toEmail: FieldRef<"NewsletterMessages", 'String'>
    readonly newsletterBatchId: FieldRef<"NewsletterMessages", 'String'>
    readonly created: FieldRef<"NewsletterMessages", 'DateTime'>
    readonly formatedContents: FieldRef<"NewsletterMessages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsletterMessages findUnique
   */
  export type NewsletterMessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessages
     */
    select?: NewsletterMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterMessages
     */
    omit?: NewsletterMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterMessagesInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterMessages to fetch.
     */
    where: NewsletterMessagesWhereUniqueInput
  }

  /**
   * NewsletterMessages findUniqueOrThrow
   */
  export type NewsletterMessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessages
     */
    select?: NewsletterMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterMessages
     */
    omit?: NewsletterMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterMessagesInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterMessages to fetch.
     */
    where: NewsletterMessagesWhereUniqueInput
  }

  /**
   * NewsletterMessages findFirst
   */
  export type NewsletterMessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessages
     */
    select?: NewsletterMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterMessages
     */
    omit?: NewsletterMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterMessagesInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterMessages to fetch.
     */
    where?: NewsletterMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterMessages to fetch.
     */
    orderBy?: NewsletterMessagesOrderByWithRelationInput | NewsletterMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterMessages.
     */
    cursor?: NewsletterMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterMessages.
     */
    distinct?: NewsletterMessagesScalarFieldEnum | NewsletterMessagesScalarFieldEnum[]
  }

  /**
   * NewsletterMessages findFirstOrThrow
   */
  export type NewsletterMessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessages
     */
    select?: NewsletterMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterMessages
     */
    omit?: NewsletterMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterMessagesInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterMessages to fetch.
     */
    where?: NewsletterMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterMessages to fetch.
     */
    orderBy?: NewsletterMessagesOrderByWithRelationInput | NewsletterMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterMessages.
     */
    cursor?: NewsletterMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterMessages.
     */
    distinct?: NewsletterMessagesScalarFieldEnum | NewsletterMessagesScalarFieldEnum[]
  }

  /**
   * NewsletterMessages findMany
   */
  export type NewsletterMessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessages
     */
    select?: NewsletterMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterMessages
     */
    omit?: NewsletterMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterMessagesInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterMessages to fetch.
     */
    where?: NewsletterMessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterMessages to fetch.
     */
    orderBy?: NewsletterMessagesOrderByWithRelationInput | NewsletterMessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsletterMessages.
     */
    cursor?: NewsletterMessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterMessages.
     */
    skip?: number
    distinct?: NewsletterMessagesScalarFieldEnum | NewsletterMessagesScalarFieldEnum[]
  }

  /**
   * NewsletterMessages create
   */
  export type NewsletterMessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessages
     */
    select?: NewsletterMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterMessages
     */
    omit?: NewsletterMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterMessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsletterMessages.
     */
    data: XOR<NewsletterMessagesCreateInput, NewsletterMessagesUncheckedCreateInput>
  }

  /**
   * NewsletterMessages createMany
   */
  export type NewsletterMessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsletterMessages.
     */
    data: NewsletterMessagesCreateManyInput | NewsletterMessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterMessages update
   */
  export type NewsletterMessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessages
     */
    select?: NewsletterMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterMessages
     */
    omit?: NewsletterMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterMessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsletterMessages.
     */
    data: XOR<NewsletterMessagesUpdateInput, NewsletterMessagesUncheckedUpdateInput>
    /**
     * Choose, which NewsletterMessages to update.
     */
    where: NewsletterMessagesWhereUniqueInput
  }

  /**
   * NewsletterMessages updateMany
   */
  export type NewsletterMessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsletterMessages.
     */
    data: XOR<NewsletterMessagesUpdateManyMutationInput, NewsletterMessagesUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterMessages to update
     */
    where?: NewsletterMessagesWhereInput
    /**
     * Limit how many NewsletterMessages to update.
     */
    limit?: number
  }

  /**
   * NewsletterMessages upsert
   */
  export type NewsletterMessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessages
     */
    select?: NewsletterMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterMessages
     */
    omit?: NewsletterMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterMessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsletterMessages to update in case it exists.
     */
    where: NewsletterMessagesWhereUniqueInput
    /**
     * In case the NewsletterMessages found by the `where` argument doesn't exist, create a new NewsletterMessages with this data.
     */
    create: XOR<NewsletterMessagesCreateInput, NewsletterMessagesUncheckedCreateInput>
    /**
     * In case the NewsletterMessages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterMessagesUpdateInput, NewsletterMessagesUncheckedUpdateInput>
  }

  /**
   * NewsletterMessages delete
   */
  export type NewsletterMessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessages
     */
    select?: NewsletterMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterMessages
     */
    omit?: NewsletterMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterMessagesInclude<ExtArgs> | null
    /**
     * Filter which NewsletterMessages to delete.
     */
    where: NewsletterMessagesWhereUniqueInput
  }

  /**
   * NewsletterMessages deleteMany
   */
  export type NewsletterMessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterMessages to delete
     */
    where?: NewsletterMessagesWhereInput
    /**
     * Limit how many NewsletterMessages to delete.
     */
    limit?: number
  }

  /**
   * NewsletterMessages.notificationEvents
   */
  export type NewsletterMessages$notificationEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterNotifications
     */
    select?: NewsletterNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterNotifications
     */
    omit?: NewsletterNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterNotificationsInclude<ExtArgs> | null
    where?: NewsletterNotificationsWhereInput
    orderBy?: NewsletterNotificationsOrderByWithRelationInput | NewsletterNotificationsOrderByWithRelationInput[]
    cursor?: NewsletterNotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsletterNotificationsScalarFieldEnum | NewsletterNotificationsScalarFieldEnum[]
  }

  /**
   * NewsletterMessages without action
   */
  export type NewsletterMessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterMessages
     */
    select?: NewsletterMessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterMessages
     */
    omit?: NewsletterMessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterMessagesInclude<ExtArgs> | null
  }


  /**
   * Model NewsletterErrors
   */

  export type AggregateNewsletterErrors = {
    _count: NewsletterErrorsCountAggregateOutputType | null
    _min: NewsletterErrorsMinAggregateOutputType | null
    _max: NewsletterErrorsMaxAggregateOutputType | null
  }

  export type NewsletterErrorsMinAggregateOutputType = {
    id: string | null
    toEmail: string | null
    error: string | null
    created: Date | null
    newsletterBatchId: string | null
    messageId: string | null
    formatedContents: string | null
  }

  export type NewsletterErrorsMaxAggregateOutputType = {
    id: string | null
    toEmail: string | null
    error: string | null
    created: Date | null
    newsletterBatchId: string | null
    messageId: string | null
    formatedContents: string | null
  }

  export type NewsletterErrorsCountAggregateOutputType = {
    id: number
    toEmail: number
    error: number
    created: number
    newsletterBatchId: number
    messageId: number
    formatedContents: number
    _all: number
  }


  export type NewsletterErrorsMinAggregateInputType = {
    id?: true
    toEmail?: true
    error?: true
    created?: true
    newsletterBatchId?: true
    messageId?: true
    formatedContents?: true
  }

  export type NewsletterErrorsMaxAggregateInputType = {
    id?: true
    toEmail?: true
    error?: true
    created?: true
    newsletterBatchId?: true
    messageId?: true
    formatedContents?: true
  }

  export type NewsletterErrorsCountAggregateInputType = {
    id?: true
    toEmail?: true
    error?: true
    created?: true
    newsletterBatchId?: true
    messageId?: true
    formatedContents?: true
    _all?: true
  }

  export type NewsletterErrorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterErrors to aggregate.
     */
    where?: NewsletterErrorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterErrors to fetch.
     */
    orderBy?: NewsletterErrorsOrderByWithRelationInput | NewsletterErrorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterErrorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsletterErrors
    **/
    _count?: true | NewsletterErrorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterErrorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterErrorsMaxAggregateInputType
  }

  export type GetNewsletterErrorsAggregateType<T extends NewsletterErrorsAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletterErrors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletterErrors[P]>
      : GetScalarType<T[P], AggregateNewsletterErrors[P]>
  }




  export type NewsletterErrorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterErrorsWhereInput
    orderBy?: NewsletterErrorsOrderByWithAggregationInput | NewsletterErrorsOrderByWithAggregationInput[]
    by: NewsletterErrorsScalarFieldEnum[] | NewsletterErrorsScalarFieldEnum
    having?: NewsletterErrorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterErrorsCountAggregateInputType | true
    _min?: NewsletterErrorsMinAggregateInputType
    _max?: NewsletterErrorsMaxAggregateInputType
  }

  export type NewsletterErrorsGroupByOutputType = {
    id: string
    toEmail: string
    error: string
    created: Date
    newsletterBatchId: string
    messageId: string
    formatedContents: string
    _count: NewsletterErrorsCountAggregateOutputType | null
    _min: NewsletterErrorsMinAggregateOutputType | null
    _max: NewsletterErrorsMaxAggregateOutputType | null
  }

  type GetNewsletterErrorsGroupByPayload<T extends NewsletterErrorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterErrorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterErrorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterErrorsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterErrorsGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterErrorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    toEmail?: boolean
    error?: boolean
    created?: boolean
    newsletterBatchId?: boolean
    messageId?: boolean
    formatedContents?: boolean
    newsletterBatch?: boolean | NewsletterBatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsletterErrors"]>



  export type NewsletterErrorsSelectScalar = {
    id?: boolean
    toEmail?: boolean
    error?: boolean
    created?: boolean
    newsletterBatchId?: boolean
    messageId?: boolean
    formatedContents?: boolean
  }

  export type NewsletterErrorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "toEmail" | "error" | "created" | "newsletterBatchId" | "messageId" | "formatedContents", ExtArgs["result"]["newsletterErrors"]>
  export type NewsletterErrorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsletterBatch?: boolean | NewsletterBatchDefaultArgs<ExtArgs>
  }

  export type $NewsletterErrorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsletterErrors"
    objects: {
      newsletterBatch: Prisma.$NewsletterBatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      toEmail: string
      error: string
      created: Date
      newsletterBatchId: string
      messageId: string
      formatedContents: string
    }, ExtArgs["result"]["newsletterErrors"]>
    composites: {}
  }

  type NewsletterErrorsGetPayload<S extends boolean | null | undefined | NewsletterErrorsDefaultArgs> = $Result.GetResult<Prisma.$NewsletterErrorsPayload, S>

  type NewsletterErrorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsletterErrorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsletterErrorsCountAggregateInputType | true
    }

  export interface NewsletterErrorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsletterErrors'], meta: { name: 'NewsletterErrors' } }
    /**
     * Find zero or one NewsletterErrors that matches the filter.
     * @param {NewsletterErrorsFindUniqueArgs} args - Arguments to find a NewsletterErrors
     * @example
     * // Get one NewsletterErrors
     * const newsletterErrors = await prisma.newsletterErrors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterErrorsFindUniqueArgs>(args: SelectSubset<T, NewsletterErrorsFindUniqueArgs<ExtArgs>>): Prisma__NewsletterErrorsClient<$Result.GetResult<Prisma.$NewsletterErrorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsletterErrors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsletterErrorsFindUniqueOrThrowArgs} args - Arguments to find a NewsletterErrors
     * @example
     * // Get one NewsletterErrors
     * const newsletterErrors = await prisma.newsletterErrors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterErrorsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterErrorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterErrorsClient<$Result.GetResult<Prisma.$NewsletterErrorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterErrors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterErrorsFindFirstArgs} args - Arguments to find a NewsletterErrors
     * @example
     * // Get one NewsletterErrors
     * const newsletterErrors = await prisma.newsletterErrors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterErrorsFindFirstArgs>(args?: SelectSubset<T, NewsletterErrorsFindFirstArgs<ExtArgs>>): Prisma__NewsletterErrorsClient<$Result.GetResult<Prisma.$NewsletterErrorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterErrors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterErrorsFindFirstOrThrowArgs} args - Arguments to find a NewsletterErrors
     * @example
     * // Get one NewsletterErrors
     * const newsletterErrors = await prisma.newsletterErrors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterErrorsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterErrorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterErrorsClient<$Result.GetResult<Prisma.$NewsletterErrorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsletterErrors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterErrorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsletterErrors
     * const newsletterErrors = await prisma.newsletterErrors.findMany()
     * 
     * // Get first 10 NewsletterErrors
     * const newsletterErrors = await prisma.newsletterErrors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterErrorsWithIdOnly = await prisma.newsletterErrors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterErrorsFindManyArgs>(args?: SelectSubset<T, NewsletterErrorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterErrorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsletterErrors.
     * @param {NewsletterErrorsCreateArgs} args - Arguments to create a NewsletterErrors.
     * @example
     * // Create one NewsletterErrors
     * const NewsletterErrors = await prisma.newsletterErrors.create({
     *   data: {
     *     // ... data to create a NewsletterErrors
     *   }
     * })
     * 
     */
    create<T extends NewsletterErrorsCreateArgs>(args: SelectSubset<T, NewsletterErrorsCreateArgs<ExtArgs>>): Prisma__NewsletterErrorsClient<$Result.GetResult<Prisma.$NewsletterErrorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsletterErrors.
     * @param {NewsletterErrorsCreateManyArgs} args - Arguments to create many NewsletterErrors.
     * @example
     * // Create many NewsletterErrors
     * const newsletterErrors = await prisma.newsletterErrors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterErrorsCreateManyArgs>(args?: SelectSubset<T, NewsletterErrorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NewsletterErrors.
     * @param {NewsletterErrorsDeleteArgs} args - Arguments to delete one NewsletterErrors.
     * @example
     * // Delete one NewsletterErrors
     * const NewsletterErrors = await prisma.newsletterErrors.delete({
     *   where: {
     *     // ... filter to delete one NewsletterErrors
     *   }
     * })
     * 
     */
    delete<T extends NewsletterErrorsDeleteArgs>(args: SelectSubset<T, NewsletterErrorsDeleteArgs<ExtArgs>>): Prisma__NewsletterErrorsClient<$Result.GetResult<Prisma.$NewsletterErrorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsletterErrors.
     * @param {NewsletterErrorsUpdateArgs} args - Arguments to update one NewsletterErrors.
     * @example
     * // Update one NewsletterErrors
     * const newsletterErrors = await prisma.newsletterErrors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterErrorsUpdateArgs>(args: SelectSubset<T, NewsletterErrorsUpdateArgs<ExtArgs>>): Prisma__NewsletterErrorsClient<$Result.GetResult<Prisma.$NewsletterErrorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsletterErrors.
     * @param {NewsletterErrorsDeleteManyArgs} args - Arguments to filter NewsletterErrors to delete.
     * @example
     * // Delete a few NewsletterErrors
     * const { count } = await prisma.newsletterErrors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterErrorsDeleteManyArgs>(args?: SelectSubset<T, NewsletterErrorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterErrorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsletterErrors
     * const newsletterErrors = await prisma.newsletterErrors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterErrorsUpdateManyArgs>(args: SelectSubset<T, NewsletterErrorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsletterErrors.
     * @param {NewsletterErrorsUpsertArgs} args - Arguments to update or create a NewsletterErrors.
     * @example
     * // Update or create a NewsletterErrors
     * const newsletterErrors = await prisma.newsletterErrors.upsert({
     *   create: {
     *     // ... data to create a NewsletterErrors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsletterErrors we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterErrorsUpsertArgs>(args: SelectSubset<T, NewsletterErrorsUpsertArgs<ExtArgs>>): Prisma__NewsletterErrorsClient<$Result.GetResult<Prisma.$NewsletterErrorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsletterErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterErrorsCountArgs} args - Arguments to filter NewsletterErrors to count.
     * @example
     * // Count the number of NewsletterErrors
     * const count = await prisma.newsletterErrors.count({
     *   where: {
     *     // ... the filter for the NewsletterErrors we want to count
     *   }
     * })
    **/
    count<T extends NewsletterErrorsCountArgs>(
      args?: Subset<T, NewsletterErrorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterErrorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsletterErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterErrorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsletterErrorsAggregateArgs>(args: Subset<T, NewsletterErrorsAggregateArgs>): Prisma.PrismaPromise<GetNewsletterErrorsAggregateType<T>>

    /**
     * Group by NewsletterErrors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterErrorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsletterErrorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterErrorsGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterErrorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsletterErrorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterErrorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsletterErrors model
   */
  readonly fields: NewsletterErrorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsletterErrors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterErrorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    newsletterBatch<T extends NewsletterBatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsletterBatchDefaultArgs<ExtArgs>>): Prisma__NewsletterBatchClient<$Result.GetResult<Prisma.$NewsletterBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsletterErrors model
   */
  interface NewsletterErrorsFieldRefs {
    readonly id: FieldRef<"NewsletterErrors", 'String'>
    readonly toEmail: FieldRef<"NewsletterErrors", 'String'>
    readonly error: FieldRef<"NewsletterErrors", 'String'>
    readonly created: FieldRef<"NewsletterErrors", 'DateTime'>
    readonly newsletterBatchId: FieldRef<"NewsletterErrors", 'String'>
    readonly messageId: FieldRef<"NewsletterErrors", 'String'>
    readonly formatedContents: FieldRef<"NewsletterErrors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * NewsletterErrors findUnique
   */
  export type NewsletterErrorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterErrors
     */
    select?: NewsletterErrorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterErrors
     */
    omit?: NewsletterErrorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterErrorsInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterErrors to fetch.
     */
    where: NewsletterErrorsWhereUniqueInput
  }

  /**
   * NewsletterErrors findUniqueOrThrow
   */
  export type NewsletterErrorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterErrors
     */
    select?: NewsletterErrorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterErrors
     */
    omit?: NewsletterErrorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterErrorsInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterErrors to fetch.
     */
    where: NewsletterErrorsWhereUniqueInput
  }

  /**
   * NewsletterErrors findFirst
   */
  export type NewsletterErrorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterErrors
     */
    select?: NewsletterErrorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterErrors
     */
    omit?: NewsletterErrorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterErrorsInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterErrors to fetch.
     */
    where?: NewsletterErrorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterErrors to fetch.
     */
    orderBy?: NewsletterErrorsOrderByWithRelationInput | NewsletterErrorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterErrors.
     */
    cursor?: NewsletterErrorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterErrors.
     */
    distinct?: NewsletterErrorsScalarFieldEnum | NewsletterErrorsScalarFieldEnum[]
  }

  /**
   * NewsletterErrors findFirstOrThrow
   */
  export type NewsletterErrorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterErrors
     */
    select?: NewsletterErrorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterErrors
     */
    omit?: NewsletterErrorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterErrorsInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterErrors to fetch.
     */
    where?: NewsletterErrorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterErrors to fetch.
     */
    orderBy?: NewsletterErrorsOrderByWithRelationInput | NewsletterErrorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterErrors.
     */
    cursor?: NewsletterErrorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterErrors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterErrors.
     */
    distinct?: NewsletterErrorsScalarFieldEnum | NewsletterErrorsScalarFieldEnum[]
  }

  /**
   * NewsletterErrors findMany
   */
  export type NewsletterErrorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterErrors
     */
    select?: NewsletterErrorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterErrors
     */
    omit?: NewsletterErrorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterErrorsInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterErrors to fetch.
     */
    where?: NewsletterErrorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterErrors to fetch.
     */
    orderBy?: NewsletterErrorsOrderByWithRelationInput | NewsletterErrorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsletterErrors.
     */
    cursor?: NewsletterErrorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterErrors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterErrors.
     */
    skip?: number
    distinct?: NewsletterErrorsScalarFieldEnum | NewsletterErrorsScalarFieldEnum[]
  }

  /**
   * NewsletterErrors create
   */
  export type NewsletterErrorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterErrors
     */
    select?: NewsletterErrorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterErrors
     */
    omit?: NewsletterErrorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterErrorsInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsletterErrors.
     */
    data: XOR<NewsletterErrorsCreateInput, NewsletterErrorsUncheckedCreateInput>
  }

  /**
   * NewsletterErrors createMany
   */
  export type NewsletterErrorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsletterErrors.
     */
    data: NewsletterErrorsCreateManyInput | NewsletterErrorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterErrors update
   */
  export type NewsletterErrorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterErrors
     */
    select?: NewsletterErrorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterErrors
     */
    omit?: NewsletterErrorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterErrorsInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsletterErrors.
     */
    data: XOR<NewsletterErrorsUpdateInput, NewsletterErrorsUncheckedUpdateInput>
    /**
     * Choose, which NewsletterErrors to update.
     */
    where: NewsletterErrorsWhereUniqueInput
  }

  /**
   * NewsletterErrors updateMany
   */
  export type NewsletterErrorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsletterErrors.
     */
    data: XOR<NewsletterErrorsUpdateManyMutationInput, NewsletterErrorsUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterErrors to update
     */
    where?: NewsletterErrorsWhereInput
    /**
     * Limit how many NewsletterErrors to update.
     */
    limit?: number
  }

  /**
   * NewsletterErrors upsert
   */
  export type NewsletterErrorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterErrors
     */
    select?: NewsletterErrorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterErrors
     */
    omit?: NewsletterErrorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterErrorsInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsletterErrors to update in case it exists.
     */
    where: NewsletterErrorsWhereUniqueInput
    /**
     * In case the NewsletterErrors found by the `where` argument doesn't exist, create a new NewsletterErrors with this data.
     */
    create: XOR<NewsletterErrorsCreateInput, NewsletterErrorsUncheckedCreateInput>
    /**
     * In case the NewsletterErrors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterErrorsUpdateInput, NewsletterErrorsUncheckedUpdateInput>
  }

  /**
   * NewsletterErrors delete
   */
  export type NewsletterErrorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterErrors
     */
    select?: NewsletterErrorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterErrors
     */
    omit?: NewsletterErrorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterErrorsInclude<ExtArgs> | null
    /**
     * Filter which NewsletterErrors to delete.
     */
    where: NewsletterErrorsWhereUniqueInput
  }

  /**
   * NewsletterErrors deleteMany
   */
  export type NewsletterErrorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterErrors to delete
     */
    where?: NewsletterErrorsWhereInput
    /**
     * Limit how many NewsletterErrors to delete.
     */
    limit?: number
  }

  /**
   * NewsletterErrors without action
   */
  export type NewsletterErrorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterErrors
     */
    select?: NewsletterErrorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterErrors
     */
    omit?: NewsletterErrorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterErrorsInclude<ExtArgs> | null
  }


  /**
   * Model NewsletterNotifications
   */

  export type AggregateNewsletterNotifications = {
    _count: NewsletterNotificationsCountAggregateOutputType | null
    _min: NewsletterNotificationsMinAggregateOutputType | null
    _max: NewsletterNotificationsMaxAggregateOutputType | null
  }

  export type NewsletterNotificationsMinAggregateOutputType = {
    id: string | null
    type: string | null
    notificationId: string | null
    messageId: string | null
    rawEvent: string | null
    timestamp: Date | null
    created: Date | null
  }

  export type NewsletterNotificationsMaxAggregateOutputType = {
    id: string | null
    type: string | null
    notificationId: string | null
    messageId: string | null
    rawEvent: string | null
    timestamp: Date | null
    created: Date | null
  }

  export type NewsletterNotificationsCountAggregateOutputType = {
    id: number
    type: number
    notificationId: number
    messageId: number
    rawEvent: number
    timestamp: number
    created: number
    _all: number
  }


  export type NewsletterNotificationsMinAggregateInputType = {
    id?: true
    type?: true
    notificationId?: true
    messageId?: true
    rawEvent?: true
    timestamp?: true
    created?: true
  }

  export type NewsletterNotificationsMaxAggregateInputType = {
    id?: true
    type?: true
    notificationId?: true
    messageId?: true
    rawEvent?: true
    timestamp?: true
    created?: true
  }

  export type NewsletterNotificationsCountAggregateInputType = {
    id?: true
    type?: true
    notificationId?: true
    messageId?: true
    rawEvent?: true
    timestamp?: true
    created?: true
    _all?: true
  }

  export type NewsletterNotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterNotifications to aggregate.
     */
    where?: NewsletterNotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterNotifications to fetch.
     */
    orderBy?: NewsletterNotificationsOrderByWithRelationInput | NewsletterNotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterNotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsletterNotifications
    **/
    _count?: true | NewsletterNotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterNotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterNotificationsMaxAggregateInputType
  }

  export type GetNewsletterNotificationsAggregateType<T extends NewsletterNotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletterNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletterNotifications[P]>
      : GetScalarType<T[P], AggregateNewsletterNotifications[P]>
  }




  export type NewsletterNotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterNotificationsWhereInput
    orderBy?: NewsletterNotificationsOrderByWithAggregationInput | NewsletterNotificationsOrderByWithAggregationInput[]
    by: NewsletterNotificationsScalarFieldEnum[] | NewsletterNotificationsScalarFieldEnum
    having?: NewsletterNotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterNotificationsCountAggregateInputType | true
    _min?: NewsletterNotificationsMinAggregateInputType
    _max?: NewsletterNotificationsMaxAggregateInputType
  }

  export type NewsletterNotificationsGroupByOutputType = {
    id: string
    type: string
    notificationId: string
    messageId: string
    rawEvent: string
    timestamp: Date
    created: Date
    _count: NewsletterNotificationsCountAggregateOutputType | null
    _min: NewsletterNotificationsMinAggregateOutputType | null
    _max: NewsletterNotificationsMaxAggregateOutputType | null
  }

  type GetNewsletterNotificationsGroupByPayload<T extends NewsletterNotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterNotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterNotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterNotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterNotificationsGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterNotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    notificationId?: boolean
    messageId?: boolean
    rawEvent?: boolean
    timestamp?: boolean
    created?: boolean
    newsletter?: boolean | NewsletterMessagesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsletterNotifications"]>



  export type NewsletterNotificationsSelectScalar = {
    id?: boolean
    type?: boolean
    notificationId?: boolean
    messageId?: boolean
    rawEvent?: boolean
    timestamp?: boolean
    created?: boolean
  }

  export type NewsletterNotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "notificationId" | "messageId" | "rawEvent" | "timestamp" | "created", ExtArgs["result"]["newsletterNotifications"]>
  export type NewsletterNotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    newsletter?: boolean | NewsletterMessagesDefaultArgs<ExtArgs>
  }

  export type $NewsletterNotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsletterNotifications"
    objects: {
      newsletter: Prisma.$NewsletterMessagesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      notificationId: string
      messageId: string
      rawEvent: string
      timestamp: Date
      created: Date
    }, ExtArgs["result"]["newsletterNotifications"]>
    composites: {}
  }

  type NewsletterNotificationsGetPayload<S extends boolean | null | undefined | NewsletterNotificationsDefaultArgs> = $Result.GetResult<Prisma.$NewsletterNotificationsPayload, S>

  type NewsletterNotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsletterNotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsletterNotificationsCountAggregateInputType | true
    }

  export interface NewsletterNotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsletterNotifications'], meta: { name: 'NewsletterNotifications' } }
    /**
     * Find zero or one NewsletterNotifications that matches the filter.
     * @param {NewsletterNotificationsFindUniqueArgs} args - Arguments to find a NewsletterNotifications
     * @example
     * // Get one NewsletterNotifications
     * const newsletterNotifications = await prisma.newsletterNotifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterNotificationsFindUniqueArgs>(args: SelectSubset<T, NewsletterNotificationsFindUniqueArgs<ExtArgs>>): Prisma__NewsletterNotificationsClient<$Result.GetResult<Prisma.$NewsletterNotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsletterNotifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsletterNotificationsFindUniqueOrThrowArgs} args - Arguments to find a NewsletterNotifications
     * @example
     * // Get one NewsletterNotifications
     * const newsletterNotifications = await prisma.newsletterNotifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterNotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterNotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterNotificationsClient<$Result.GetResult<Prisma.$NewsletterNotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterNotificationsFindFirstArgs} args - Arguments to find a NewsletterNotifications
     * @example
     * // Get one NewsletterNotifications
     * const newsletterNotifications = await prisma.newsletterNotifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterNotificationsFindFirstArgs>(args?: SelectSubset<T, NewsletterNotificationsFindFirstArgs<ExtArgs>>): Prisma__NewsletterNotificationsClient<$Result.GetResult<Prisma.$NewsletterNotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterNotifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterNotificationsFindFirstOrThrowArgs} args - Arguments to find a NewsletterNotifications
     * @example
     * // Get one NewsletterNotifications
     * const newsletterNotifications = await prisma.newsletterNotifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterNotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterNotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterNotificationsClient<$Result.GetResult<Prisma.$NewsletterNotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsletterNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterNotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsletterNotifications
     * const newsletterNotifications = await prisma.newsletterNotifications.findMany()
     * 
     * // Get first 10 NewsletterNotifications
     * const newsletterNotifications = await prisma.newsletterNotifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterNotificationsWithIdOnly = await prisma.newsletterNotifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterNotificationsFindManyArgs>(args?: SelectSubset<T, NewsletterNotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterNotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsletterNotifications.
     * @param {NewsletterNotificationsCreateArgs} args - Arguments to create a NewsletterNotifications.
     * @example
     * // Create one NewsletterNotifications
     * const NewsletterNotifications = await prisma.newsletterNotifications.create({
     *   data: {
     *     // ... data to create a NewsletterNotifications
     *   }
     * })
     * 
     */
    create<T extends NewsletterNotificationsCreateArgs>(args: SelectSubset<T, NewsletterNotificationsCreateArgs<ExtArgs>>): Prisma__NewsletterNotificationsClient<$Result.GetResult<Prisma.$NewsletterNotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsletterNotifications.
     * @param {NewsletterNotificationsCreateManyArgs} args - Arguments to create many NewsletterNotifications.
     * @example
     * // Create many NewsletterNotifications
     * const newsletterNotifications = await prisma.newsletterNotifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterNotificationsCreateManyArgs>(args?: SelectSubset<T, NewsletterNotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NewsletterNotifications.
     * @param {NewsletterNotificationsDeleteArgs} args - Arguments to delete one NewsletterNotifications.
     * @example
     * // Delete one NewsletterNotifications
     * const NewsletterNotifications = await prisma.newsletterNotifications.delete({
     *   where: {
     *     // ... filter to delete one NewsletterNotifications
     *   }
     * })
     * 
     */
    delete<T extends NewsletterNotificationsDeleteArgs>(args: SelectSubset<T, NewsletterNotificationsDeleteArgs<ExtArgs>>): Prisma__NewsletterNotificationsClient<$Result.GetResult<Prisma.$NewsletterNotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsletterNotifications.
     * @param {NewsletterNotificationsUpdateArgs} args - Arguments to update one NewsletterNotifications.
     * @example
     * // Update one NewsletterNotifications
     * const newsletterNotifications = await prisma.newsletterNotifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterNotificationsUpdateArgs>(args: SelectSubset<T, NewsletterNotificationsUpdateArgs<ExtArgs>>): Prisma__NewsletterNotificationsClient<$Result.GetResult<Prisma.$NewsletterNotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsletterNotifications.
     * @param {NewsletterNotificationsDeleteManyArgs} args - Arguments to filter NewsletterNotifications to delete.
     * @example
     * // Delete a few NewsletterNotifications
     * const { count } = await prisma.newsletterNotifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterNotificationsDeleteManyArgs>(args?: SelectSubset<T, NewsletterNotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterNotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsletterNotifications
     * const newsletterNotifications = await prisma.newsletterNotifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterNotificationsUpdateManyArgs>(args: SelectSubset<T, NewsletterNotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NewsletterNotifications.
     * @param {NewsletterNotificationsUpsertArgs} args - Arguments to update or create a NewsletterNotifications.
     * @example
     * // Update or create a NewsletterNotifications
     * const newsletterNotifications = await prisma.newsletterNotifications.upsert({
     *   create: {
     *     // ... data to create a NewsletterNotifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsletterNotifications we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterNotificationsUpsertArgs>(args: SelectSubset<T, NewsletterNotificationsUpsertArgs<ExtArgs>>): Prisma__NewsletterNotificationsClient<$Result.GetResult<Prisma.$NewsletterNotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsletterNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterNotificationsCountArgs} args - Arguments to filter NewsletterNotifications to count.
     * @example
     * // Count the number of NewsletterNotifications
     * const count = await prisma.newsletterNotifications.count({
     *   where: {
     *     // ... the filter for the NewsletterNotifications we want to count
     *   }
     * })
    **/
    count<T extends NewsletterNotificationsCountArgs>(
      args?: Subset<T, NewsletterNotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterNotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsletterNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterNotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsletterNotificationsAggregateArgs>(args: Subset<T, NewsletterNotificationsAggregateArgs>): Prisma.PrismaPromise<GetNewsletterNotificationsAggregateType<T>>

    /**
     * Group by NewsletterNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterNotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsletterNotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterNotificationsGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterNotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsletterNotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsletterNotifications model
   */
  readonly fields: NewsletterNotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsletterNotifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterNotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    newsletter<T extends NewsletterMessagesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsletterMessagesDefaultArgs<ExtArgs>>): Prisma__NewsletterMessagesClient<$Result.GetResult<Prisma.$NewsletterMessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsletterNotifications model
   */
  interface NewsletterNotificationsFieldRefs {
    readonly id: FieldRef<"NewsletterNotifications", 'String'>
    readonly type: FieldRef<"NewsletterNotifications", 'String'>
    readonly notificationId: FieldRef<"NewsletterNotifications", 'String'>
    readonly messageId: FieldRef<"NewsletterNotifications", 'String'>
    readonly rawEvent: FieldRef<"NewsletterNotifications", 'String'>
    readonly timestamp: FieldRef<"NewsletterNotifications", 'DateTime'>
    readonly created: FieldRef<"NewsletterNotifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsletterNotifications findUnique
   */
  export type NewsletterNotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterNotifications
     */
    select?: NewsletterNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterNotifications
     */
    omit?: NewsletterNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterNotificationsInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterNotifications to fetch.
     */
    where: NewsletterNotificationsWhereUniqueInput
  }

  /**
   * NewsletterNotifications findUniqueOrThrow
   */
  export type NewsletterNotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterNotifications
     */
    select?: NewsletterNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterNotifications
     */
    omit?: NewsletterNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterNotificationsInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterNotifications to fetch.
     */
    where: NewsletterNotificationsWhereUniqueInput
  }

  /**
   * NewsletterNotifications findFirst
   */
  export type NewsletterNotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterNotifications
     */
    select?: NewsletterNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterNotifications
     */
    omit?: NewsletterNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterNotificationsInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterNotifications to fetch.
     */
    where?: NewsletterNotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterNotifications to fetch.
     */
    orderBy?: NewsletterNotificationsOrderByWithRelationInput | NewsletterNotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterNotifications.
     */
    cursor?: NewsletterNotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterNotifications.
     */
    distinct?: NewsletterNotificationsScalarFieldEnum | NewsletterNotificationsScalarFieldEnum[]
  }

  /**
   * NewsletterNotifications findFirstOrThrow
   */
  export type NewsletterNotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterNotifications
     */
    select?: NewsletterNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterNotifications
     */
    omit?: NewsletterNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterNotificationsInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterNotifications to fetch.
     */
    where?: NewsletterNotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterNotifications to fetch.
     */
    orderBy?: NewsletterNotificationsOrderByWithRelationInput | NewsletterNotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterNotifications.
     */
    cursor?: NewsletterNotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterNotifications.
     */
    distinct?: NewsletterNotificationsScalarFieldEnum | NewsletterNotificationsScalarFieldEnum[]
  }

  /**
   * NewsletterNotifications findMany
   */
  export type NewsletterNotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterNotifications
     */
    select?: NewsletterNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterNotifications
     */
    omit?: NewsletterNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterNotificationsInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterNotifications to fetch.
     */
    where?: NewsletterNotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterNotifications to fetch.
     */
    orderBy?: NewsletterNotificationsOrderByWithRelationInput | NewsletterNotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsletterNotifications.
     */
    cursor?: NewsletterNotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterNotifications.
     */
    skip?: number
    distinct?: NewsletterNotificationsScalarFieldEnum | NewsletterNotificationsScalarFieldEnum[]
  }

  /**
   * NewsletterNotifications create
   */
  export type NewsletterNotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterNotifications
     */
    select?: NewsletterNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterNotifications
     */
    omit?: NewsletterNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterNotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsletterNotifications.
     */
    data: XOR<NewsletterNotificationsCreateInput, NewsletterNotificationsUncheckedCreateInput>
  }

  /**
   * NewsletterNotifications createMany
   */
  export type NewsletterNotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsletterNotifications.
     */
    data: NewsletterNotificationsCreateManyInput | NewsletterNotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NewsletterNotifications update
   */
  export type NewsletterNotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterNotifications
     */
    select?: NewsletterNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterNotifications
     */
    omit?: NewsletterNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterNotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsletterNotifications.
     */
    data: XOR<NewsletterNotificationsUpdateInput, NewsletterNotificationsUncheckedUpdateInput>
    /**
     * Choose, which NewsletterNotifications to update.
     */
    where: NewsletterNotificationsWhereUniqueInput
  }

  /**
   * NewsletterNotifications updateMany
   */
  export type NewsletterNotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsletterNotifications.
     */
    data: XOR<NewsletterNotificationsUpdateManyMutationInput, NewsletterNotificationsUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterNotifications to update
     */
    where?: NewsletterNotificationsWhereInput
    /**
     * Limit how many NewsletterNotifications to update.
     */
    limit?: number
  }

  /**
   * NewsletterNotifications upsert
   */
  export type NewsletterNotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterNotifications
     */
    select?: NewsletterNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterNotifications
     */
    omit?: NewsletterNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterNotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsletterNotifications to update in case it exists.
     */
    where: NewsletterNotificationsWhereUniqueInput
    /**
     * In case the NewsletterNotifications found by the `where` argument doesn't exist, create a new NewsletterNotifications with this data.
     */
    create: XOR<NewsletterNotificationsCreateInput, NewsletterNotificationsUncheckedCreateInput>
    /**
     * In case the NewsletterNotifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterNotificationsUpdateInput, NewsletterNotificationsUncheckedUpdateInput>
  }

  /**
   * NewsletterNotifications delete
   */
  export type NewsletterNotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterNotifications
     */
    select?: NewsletterNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterNotifications
     */
    omit?: NewsletterNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterNotificationsInclude<ExtArgs> | null
    /**
     * Filter which NewsletterNotifications to delete.
     */
    where: NewsletterNotificationsWhereUniqueInput
  }

  /**
   * NewsletterNotifications deleteMany
   */
  export type NewsletterNotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterNotifications to delete
     */
    where?: NewsletterNotificationsWhereInput
    /**
     * Limit how many NewsletterNotifications to delete.
     */
    limit?: number
  }

  /**
   * NewsletterNotifications without action
   */
  export type NewsletterNotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterNotifications
     */
    select?: NewsletterNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterNotifications
     */
    omit?: NewsletterNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterNotificationsInclude<ExtArgs> | null
  }


  /**
   * Model SystemMailNotifications
   */

  export type AggregateSystemMailNotifications = {
    _count: SystemMailNotificationsCountAggregateOutputType | null
    _min: SystemMailNotificationsMinAggregateOutputType | null
    _max: SystemMailNotificationsMaxAggregateOutputType | null
  }

  export type SystemMailNotificationsMinAggregateOutputType = {
    id: string | null
    type: string | null
    notificationId: string | null
    messageId: string | null
    rawEvent: string | null
    timestamp: Date | null
    created: Date | null
  }

  export type SystemMailNotificationsMaxAggregateOutputType = {
    id: string | null
    type: string | null
    notificationId: string | null
    messageId: string | null
    rawEvent: string | null
    timestamp: Date | null
    created: Date | null
  }

  export type SystemMailNotificationsCountAggregateOutputType = {
    id: number
    type: number
    notificationId: number
    messageId: number
    rawEvent: number
    timestamp: number
    created: number
    _all: number
  }


  export type SystemMailNotificationsMinAggregateInputType = {
    id?: true
    type?: true
    notificationId?: true
    messageId?: true
    rawEvent?: true
    timestamp?: true
    created?: true
  }

  export type SystemMailNotificationsMaxAggregateInputType = {
    id?: true
    type?: true
    notificationId?: true
    messageId?: true
    rawEvent?: true
    timestamp?: true
    created?: true
  }

  export type SystemMailNotificationsCountAggregateInputType = {
    id?: true
    type?: true
    notificationId?: true
    messageId?: true
    rawEvent?: true
    timestamp?: true
    created?: true
    _all?: true
  }

  export type SystemMailNotificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemMailNotifications to aggregate.
     */
    where?: SystemMailNotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMailNotifications to fetch.
     */
    orderBy?: SystemMailNotificationsOrderByWithRelationInput | SystemMailNotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemMailNotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemMailNotifications
    **/
    _count?: true | SystemMailNotificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemMailNotificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemMailNotificationsMaxAggregateInputType
  }

  export type GetSystemMailNotificationsAggregateType<T extends SystemMailNotificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemMailNotifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemMailNotifications[P]>
      : GetScalarType<T[P], AggregateSystemMailNotifications[P]>
  }




  export type SystemMailNotificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemMailNotificationsWhereInput
    orderBy?: SystemMailNotificationsOrderByWithAggregationInput | SystemMailNotificationsOrderByWithAggregationInput[]
    by: SystemMailNotificationsScalarFieldEnum[] | SystemMailNotificationsScalarFieldEnum
    having?: SystemMailNotificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemMailNotificationsCountAggregateInputType | true
    _min?: SystemMailNotificationsMinAggregateInputType
    _max?: SystemMailNotificationsMaxAggregateInputType
  }

  export type SystemMailNotificationsGroupByOutputType = {
    id: string
    type: string
    notificationId: string
    messageId: string
    rawEvent: string
    timestamp: Date
    created: Date
    _count: SystemMailNotificationsCountAggregateOutputType | null
    _min: SystemMailNotificationsMinAggregateOutputType | null
    _max: SystemMailNotificationsMaxAggregateOutputType | null
  }

  type GetSystemMailNotificationsGroupByPayload<T extends SystemMailNotificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemMailNotificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemMailNotificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemMailNotificationsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemMailNotificationsGroupByOutputType[P]>
        }
      >
    >


  export type SystemMailNotificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    notificationId?: boolean
    messageId?: boolean
    rawEvent?: boolean
    timestamp?: boolean
    created?: boolean
    systemMail?: boolean | SystemMailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemMailNotifications"]>



  export type SystemMailNotificationsSelectScalar = {
    id?: boolean
    type?: boolean
    notificationId?: boolean
    messageId?: boolean
    rawEvent?: boolean
    timestamp?: boolean
    created?: boolean
  }

  export type SystemMailNotificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "notificationId" | "messageId" | "rawEvent" | "timestamp" | "created", ExtArgs["result"]["systemMailNotifications"]>
  export type SystemMailNotificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    systemMail?: boolean | SystemMailsDefaultArgs<ExtArgs>
  }

  export type $SystemMailNotificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemMailNotifications"
    objects: {
      systemMail: Prisma.$SystemMailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      notificationId: string
      messageId: string
      rawEvent: string
      timestamp: Date
      created: Date
    }, ExtArgs["result"]["systemMailNotifications"]>
    composites: {}
  }

  type SystemMailNotificationsGetPayload<S extends boolean | null | undefined | SystemMailNotificationsDefaultArgs> = $Result.GetResult<Prisma.$SystemMailNotificationsPayload, S>

  type SystemMailNotificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemMailNotificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemMailNotificationsCountAggregateInputType | true
    }

  export interface SystemMailNotificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemMailNotifications'], meta: { name: 'SystemMailNotifications' } }
    /**
     * Find zero or one SystemMailNotifications that matches the filter.
     * @param {SystemMailNotificationsFindUniqueArgs} args - Arguments to find a SystemMailNotifications
     * @example
     * // Get one SystemMailNotifications
     * const systemMailNotifications = await prisma.systemMailNotifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemMailNotificationsFindUniqueArgs>(args: SelectSubset<T, SystemMailNotificationsFindUniqueArgs<ExtArgs>>): Prisma__SystemMailNotificationsClient<$Result.GetResult<Prisma.$SystemMailNotificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemMailNotifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemMailNotificationsFindUniqueOrThrowArgs} args - Arguments to find a SystemMailNotifications
     * @example
     * // Get one SystemMailNotifications
     * const systemMailNotifications = await prisma.systemMailNotifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemMailNotificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemMailNotificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemMailNotificationsClient<$Result.GetResult<Prisma.$SystemMailNotificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemMailNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailNotificationsFindFirstArgs} args - Arguments to find a SystemMailNotifications
     * @example
     * // Get one SystemMailNotifications
     * const systemMailNotifications = await prisma.systemMailNotifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemMailNotificationsFindFirstArgs>(args?: SelectSubset<T, SystemMailNotificationsFindFirstArgs<ExtArgs>>): Prisma__SystemMailNotificationsClient<$Result.GetResult<Prisma.$SystemMailNotificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemMailNotifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailNotificationsFindFirstOrThrowArgs} args - Arguments to find a SystemMailNotifications
     * @example
     * // Get one SystemMailNotifications
     * const systemMailNotifications = await prisma.systemMailNotifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemMailNotificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemMailNotificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemMailNotificationsClient<$Result.GetResult<Prisma.$SystemMailNotificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemMailNotifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailNotificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemMailNotifications
     * const systemMailNotifications = await prisma.systemMailNotifications.findMany()
     * 
     * // Get first 10 SystemMailNotifications
     * const systemMailNotifications = await prisma.systemMailNotifications.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemMailNotificationsWithIdOnly = await prisma.systemMailNotifications.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemMailNotificationsFindManyArgs>(args?: SelectSubset<T, SystemMailNotificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemMailNotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemMailNotifications.
     * @param {SystemMailNotificationsCreateArgs} args - Arguments to create a SystemMailNotifications.
     * @example
     * // Create one SystemMailNotifications
     * const SystemMailNotifications = await prisma.systemMailNotifications.create({
     *   data: {
     *     // ... data to create a SystemMailNotifications
     *   }
     * })
     * 
     */
    create<T extends SystemMailNotificationsCreateArgs>(args: SelectSubset<T, SystemMailNotificationsCreateArgs<ExtArgs>>): Prisma__SystemMailNotificationsClient<$Result.GetResult<Prisma.$SystemMailNotificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemMailNotifications.
     * @param {SystemMailNotificationsCreateManyArgs} args - Arguments to create many SystemMailNotifications.
     * @example
     * // Create many SystemMailNotifications
     * const systemMailNotifications = await prisma.systemMailNotifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemMailNotificationsCreateManyArgs>(args?: SelectSubset<T, SystemMailNotificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemMailNotifications.
     * @param {SystemMailNotificationsDeleteArgs} args - Arguments to delete one SystemMailNotifications.
     * @example
     * // Delete one SystemMailNotifications
     * const SystemMailNotifications = await prisma.systemMailNotifications.delete({
     *   where: {
     *     // ... filter to delete one SystemMailNotifications
     *   }
     * })
     * 
     */
    delete<T extends SystemMailNotificationsDeleteArgs>(args: SelectSubset<T, SystemMailNotificationsDeleteArgs<ExtArgs>>): Prisma__SystemMailNotificationsClient<$Result.GetResult<Prisma.$SystemMailNotificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemMailNotifications.
     * @param {SystemMailNotificationsUpdateArgs} args - Arguments to update one SystemMailNotifications.
     * @example
     * // Update one SystemMailNotifications
     * const systemMailNotifications = await prisma.systemMailNotifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemMailNotificationsUpdateArgs>(args: SelectSubset<T, SystemMailNotificationsUpdateArgs<ExtArgs>>): Prisma__SystemMailNotificationsClient<$Result.GetResult<Prisma.$SystemMailNotificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemMailNotifications.
     * @param {SystemMailNotificationsDeleteManyArgs} args - Arguments to filter SystemMailNotifications to delete.
     * @example
     * // Delete a few SystemMailNotifications
     * const { count } = await prisma.systemMailNotifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemMailNotificationsDeleteManyArgs>(args?: SelectSubset<T, SystemMailNotificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemMailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailNotificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemMailNotifications
     * const systemMailNotifications = await prisma.systemMailNotifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemMailNotificationsUpdateManyArgs>(args: SelectSubset<T, SystemMailNotificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemMailNotifications.
     * @param {SystemMailNotificationsUpsertArgs} args - Arguments to update or create a SystemMailNotifications.
     * @example
     * // Update or create a SystemMailNotifications
     * const systemMailNotifications = await prisma.systemMailNotifications.upsert({
     *   create: {
     *     // ... data to create a SystemMailNotifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemMailNotifications we want to update
     *   }
     * })
     */
    upsert<T extends SystemMailNotificationsUpsertArgs>(args: SelectSubset<T, SystemMailNotificationsUpsertArgs<ExtArgs>>): Prisma__SystemMailNotificationsClient<$Result.GetResult<Prisma.$SystemMailNotificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemMailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailNotificationsCountArgs} args - Arguments to filter SystemMailNotifications to count.
     * @example
     * // Count the number of SystemMailNotifications
     * const count = await prisma.systemMailNotifications.count({
     *   where: {
     *     // ... the filter for the SystemMailNotifications we want to count
     *   }
     * })
    **/
    count<T extends SystemMailNotificationsCountArgs>(
      args?: Subset<T, SystemMailNotificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemMailNotificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemMailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailNotificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemMailNotificationsAggregateArgs>(args: Subset<T, SystemMailNotificationsAggregateArgs>): Prisma.PrismaPromise<GetSystemMailNotificationsAggregateType<T>>

    /**
     * Group by SystemMailNotifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailNotificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemMailNotificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemMailNotificationsGroupByArgs['orderBy'] }
        : { orderBy?: SystemMailNotificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemMailNotificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemMailNotificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemMailNotifications model
   */
  readonly fields: SystemMailNotificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemMailNotifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemMailNotificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    systemMail<T extends SystemMailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SystemMailsDefaultArgs<ExtArgs>>): Prisma__SystemMailsClient<$Result.GetResult<Prisma.$SystemMailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemMailNotifications model
   */
  interface SystemMailNotificationsFieldRefs {
    readonly id: FieldRef<"SystemMailNotifications", 'String'>
    readonly type: FieldRef<"SystemMailNotifications", 'String'>
    readonly notificationId: FieldRef<"SystemMailNotifications", 'String'>
    readonly messageId: FieldRef<"SystemMailNotifications", 'String'>
    readonly rawEvent: FieldRef<"SystemMailNotifications", 'String'>
    readonly timestamp: FieldRef<"SystemMailNotifications", 'DateTime'>
    readonly created: FieldRef<"SystemMailNotifications", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemMailNotifications findUnique
   */
  export type SystemMailNotificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailNotifications
     */
    select?: SystemMailNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMailNotifications
     */
    omit?: SystemMailNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailNotificationsInclude<ExtArgs> | null
    /**
     * Filter, which SystemMailNotifications to fetch.
     */
    where: SystemMailNotificationsWhereUniqueInput
  }

  /**
   * SystemMailNotifications findUniqueOrThrow
   */
  export type SystemMailNotificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailNotifications
     */
    select?: SystemMailNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMailNotifications
     */
    omit?: SystemMailNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailNotificationsInclude<ExtArgs> | null
    /**
     * Filter, which SystemMailNotifications to fetch.
     */
    where: SystemMailNotificationsWhereUniqueInput
  }

  /**
   * SystemMailNotifications findFirst
   */
  export type SystemMailNotificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailNotifications
     */
    select?: SystemMailNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMailNotifications
     */
    omit?: SystemMailNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailNotificationsInclude<ExtArgs> | null
    /**
     * Filter, which SystemMailNotifications to fetch.
     */
    where?: SystemMailNotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMailNotifications to fetch.
     */
    orderBy?: SystemMailNotificationsOrderByWithRelationInput | SystemMailNotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemMailNotifications.
     */
    cursor?: SystemMailNotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemMailNotifications.
     */
    distinct?: SystemMailNotificationsScalarFieldEnum | SystemMailNotificationsScalarFieldEnum[]
  }

  /**
   * SystemMailNotifications findFirstOrThrow
   */
  export type SystemMailNotificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailNotifications
     */
    select?: SystemMailNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMailNotifications
     */
    omit?: SystemMailNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailNotificationsInclude<ExtArgs> | null
    /**
     * Filter, which SystemMailNotifications to fetch.
     */
    where?: SystemMailNotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMailNotifications to fetch.
     */
    orderBy?: SystemMailNotificationsOrderByWithRelationInput | SystemMailNotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemMailNotifications.
     */
    cursor?: SystemMailNotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMailNotifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemMailNotifications.
     */
    distinct?: SystemMailNotificationsScalarFieldEnum | SystemMailNotificationsScalarFieldEnum[]
  }

  /**
   * SystemMailNotifications findMany
   */
  export type SystemMailNotificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailNotifications
     */
    select?: SystemMailNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMailNotifications
     */
    omit?: SystemMailNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailNotificationsInclude<ExtArgs> | null
    /**
     * Filter, which SystemMailNotifications to fetch.
     */
    where?: SystemMailNotificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMailNotifications to fetch.
     */
    orderBy?: SystemMailNotificationsOrderByWithRelationInput | SystemMailNotificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemMailNotifications.
     */
    cursor?: SystemMailNotificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMailNotifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMailNotifications.
     */
    skip?: number
    distinct?: SystemMailNotificationsScalarFieldEnum | SystemMailNotificationsScalarFieldEnum[]
  }

  /**
   * SystemMailNotifications create
   */
  export type SystemMailNotificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailNotifications
     */
    select?: SystemMailNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMailNotifications
     */
    omit?: SystemMailNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailNotificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemMailNotifications.
     */
    data: XOR<SystemMailNotificationsCreateInput, SystemMailNotificationsUncheckedCreateInput>
  }

  /**
   * SystemMailNotifications createMany
   */
  export type SystemMailNotificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemMailNotifications.
     */
    data: SystemMailNotificationsCreateManyInput | SystemMailNotificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemMailNotifications update
   */
  export type SystemMailNotificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailNotifications
     */
    select?: SystemMailNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMailNotifications
     */
    omit?: SystemMailNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailNotificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemMailNotifications.
     */
    data: XOR<SystemMailNotificationsUpdateInput, SystemMailNotificationsUncheckedUpdateInput>
    /**
     * Choose, which SystemMailNotifications to update.
     */
    where: SystemMailNotificationsWhereUniqueInput
  }

  /**
   * SystemMailNotifications updateMany
   */
  export type SystemMailNotificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemMailNotifications.
     */
    data: XOR<SystemMailNotificationsUpdateManyMutationInput, SystemMailNotificationsUncheckedUpdateManyInput>
    /**
     * Filter which SystemMailNotifications to update
     */
    where?: SystemMailNotificationsWhereInput
    /**
     * Limit how many SystemMailNotifications to update.
     */
    limit?: number
  }

  /**
   * SystemMailNotifications upsert
   */
  export type SystemMailNotificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailNotifications
     */
    select?: SystemMailNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMailNotifications
     */
    omit?: SystemMailNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailNotificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemMailNotifications to update in case it exists.
     */
    where: SystemMailNotificationsWhereUniqueInput
    /**
     * In case the SystemMailNotifications found by the `where` argument doesn't exist, create a new SystemMailNotifications with this data.
     */
    create: XOR<SystemMailNotificationsCreateInput, SystemMailNotificationsUncheckedCreateInput>
    /**
     * In case the SystemMailNotifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemMailNotificationsUpdateInput, SystemMailNotificationsUncheckedUpdateInput>
  }

  /**
   * SystemMailNotifications delete
   */
  export type SystemMailNotificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailNotifications
     */
    select?: SystemMailNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMailNotifications
     */
    omit?: SystemMailNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailNotificationsInclude<ExtArgs> | null
    /**
     * Filter which SystemMailNotifications to delete.
     */
    where: SystemMailNotificationsWhereUniqueInput
  }

  /**
   * SystemMailNotifications deleteMany
   */
  export type SystemMailNotificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemMailNotifications to delete
     */
    where?: SystemMailNotificationsWhereInput
    /**
     * Limit how many SystemMailNotifications to delete.
     */
    limit?: number
  }

  /**
   * SystemMailNotifications without action
   */
  export type SystemMailNotificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailNotifications
     */
    select?: SystemMailNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMailNotifications
     */
    omit?: SystemMailNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailNotificationsInclude<ExtArgs> | null
  }


  /**
   * Model SystemMails
   */

  export type AggregateSystemMails = {
    _count: SystemMailsCountAggregateOutputType | null
    _min: SystemMailsMinAggregateOutputType | null
    _max: SystemMailsMaxAggregateOutputType | null
  }

  export type SystemMailsMinAggregateOutputType = {
    id: string | null
    messageId: string | null
    fromEmail: string | null
    toEmail: string | null
    subject: string | null
    contents: string | null
    created: Date | null
    updated: Date | null
    status: $Enums.SystemMailStatus | null
  }

  export type SystemMailsMaxAggregateOutputType = {
    id: string | null
    messageId: string | null
    fromEmail: string | null
    toEmail: string | null
    subject: string | null
    contents: string | null
    created: Date | null
    updated: Date | null
    status: $Enums.SystemMailStatus | null
  }

  export type SystemMailsCountAggregateOutputType = {
    id: number
    messageId: number
    fromEmail: number
    toEmail: number
    subject: number
    contents: number
    created: number
    updated: number
    status: number
    _all: number
  }


  export type SystemMailsMinAggregateInputType = {
    id?: true
    messageId?: true
    fromEmail?: true
    toEmail?: true
    subject?: true
    contents?: true
    created?: true
    updated?: true
    status?: true
  }

  export type SystemMailsMaxAggregateInputType = {
    id?: true
    messageId?: true
    fromEmail?: true
    toEmail?: true
    subject?: true
    contents?: true
    created?: true
    updated?: true
    status?: true
  }

  export type SystemMailsCountAggregateInputType = {
    id?: true
    messageId?: true
    fromEmail?: true
    toEmail?: true
    subject?: true
    contents?: true
    created?: true
    updated?: true
    status?: true
    _all?: true
  }

  export type SystemMailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemMails to aggregate.
     */
    where?: SystemMailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMails to fetch.
     */
    orderBy?: SystemMailsOrderByWithRelationInput | SystemMailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemMailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemMails
    **/
    _count?: true | SystemMailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemMailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemMailsMaxAggregateInputType
  }

  export type GetSystemMailsAggregateType<T extends SystemMailsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemMails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemMails[P]>
      : GetScalarType<T[P], AggregateSystemMails[P]>
  }




  export type SystemMailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemMailsWhereInput
    orderBy?: SystemMailsOrderByWithAggregationInput | SystemMailsOrderByWithAggregationInput[]
    by: SystemMailsScalarFieldEnum[] | SystemMailsScalarFieldEnum
    having?: SystemMailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemMailsCountAggregateInputType | true
    _min?: SystemMailsMinAggregateInputType
    _max?: SystemMailsMaxAggregateInputType
  }

  export type SystemMailsGroupByOutputType = {
    id: string
    messageId: string
    fromEmail: string
    toEmail: string
    subject: string
    contents: string
    created: Date
    updated: Date
    status: $Enums.SystemMailStatus
    _count: SystemMailsCountAggregateOutputType | null
    _min: SystemMailsMinAggregateOutputType | null
    _max: SystemMailsMaxAggregateOutputType | null
  }

  type GetSystemMailsGroupByPayload<T extends SystemMailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemMailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemMailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemMailsGroupByOutputType[P]>
            : GetScalarType<T[P], SystemMailsGroupByOutputType[P]>
        }
      >
    >


  export type SystemMailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messageId?: boolean
    fromEmail?: boolean
    toEmail?: boolean
    subject?: boolean
    contents?: boolean
    created?: boolean
    updated?: boolean
    status?: boolean
    SystemMailNotifications?: boolean | SystemMails$SystemMailNotificationsArgs<ExtArgs>
    _count?: boolean | SystemMailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemMails"]>



  export type SystemMailsSelectScalar = {
    id?: boolean
    messageId?: boolean
    fromEmail?: boolean
    toEmail?: boolean
    subject?: boolean
    contents?: boolean
    created?: boolean
    updated?: boolean
    status?: boolean
  }

  export type SystemMailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "messageId" | "fromEmail" | "toEmail" | "subject" | "contents" | "created" | "updated" | "status", ExtArgs["result"]["systemMails"]>
  export type SystemMailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SystemMailNotifications?: boolean | SystemMails$SystemMailNotificationsArgs<ExtArgs>
    _count?: boolean | SystemMailsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SystemMailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemMails"
    objects: {
      SystemMailNotifications: Prisma.$SystemMailNotificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      messageId: string
      fromEmail: string
      toEmail: string
      subject: string
      contents: string
      created: Date
      updated: Date
      status: $Enums.SystemMailStatus
    }, ExtArgs["result"]["systemMails"]>
    composites: {}
  }

  type SystemMailsGetPayload<S extends boolean | null | undefined | SystemMailsDefaultArgs> = $Result.GetResult<Prisma.$SystemMailsPayload, S>

  type SystemMailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemMailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemMailsCountAggregateInputType | true
    }

  export interface SystemMailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemMails'], meta: { name: 'SystemMails' } }
    /**
     * Find zero or one SystemMails that matches the filter.
     * @param {SystemMailsFindUniqueArgs} args - Arguments to find a SystemMails
     * @example
     * // Get one SystemMails
     * const systemMails = await prisma.systemMails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemMailsFindUniqueArgs>(args: SelectSubset<T, SystemMailsFindUniqueArgs<ExtArgs>>): Prisma__SystemMailsClient<$Result.GetResult<Prisma.$SystemMailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemMails that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemMailsFindUniqueOrThrowArgs} args - Arguments to find a SystemMails
     * @example
     * // Get one SystemMails
     * const systemMails = await prisma.systemMails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemMailsFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemMailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemMailsClient<$Result.GetResult<Prisma.$SystemMailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemMails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailsFindFirstArgs} args - Arguments to find a SystemMails
     * @example
     * // Get one SystemMails
     * const systemMails = await prisma.systemMails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemMailsFindFirstArgs>(args?: SelectSubset<T, SystemMailsFindFirstArgs<ExtArgs>>): Prisma__SystemMailsClient<$Result.GetResult<Prisma.$SystemMailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemMails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailsFindFirstOrThrowArgs} args - Arguments to find a SystemMails
     * @example
     * // Get one SystemMails
     * const systemMails = await prisma.systemMails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemMailsFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemMailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemMailsClient<$Result.GetResult<Prisma.$SystemMailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemMails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemMails
     * const systemMails = await prisma.systemMails.findMany()
     * 
     * // Get first 10 SystemMails
     * const systemMails = await prisma.systemMails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemMailsWithIdOnly = await prisma.systemMails.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemMailsFindManyArgs>(args?: SelectSubset<T, SystemMailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemMailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemMails.
     * @param {SystemMailsCreateArgs} args - Arguments to create a SystemMails.
     * @example
     * // Create one SystemMails
     * const SystemMails = await prisma.systemMails.create({
     *   data: {
     *     // ... data to create a SystemMails
     *   }
     * })
     * 
     */
    create<T extends SystemMailsCreateArgs>(args: SelectSubset<T, SystemMailsCreateArgs<ExtArgs>>): Prisma__SystemMailsClient<$Result.GetResult<Prisma.$SystemMailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemMails.
     * @param {SystemMailsCreateManyArgs} args - Arguments to create many SystemMails.
     * @example
     * // Create many SystemMails
     * const systemMails = await prisma.systemMails.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemMailsCreateManyArgs>(args?: SelectSubset<T, SystemMailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemMails.
     * @param {SystemMailsDeleteArgs} args - Arguments to delete one SystemMails.
     * @example
     * // Delete one SystemMails
     * const SystemMails = await prisma.systemMails.delete({
     *   where: {
     *     // ... filter to delete one SystemMails
     *   }
     * })
     * 
     */
    delete<T extends SystemMailsDeleteArgs>(args: SelectSubset<T, SystemMailsDeleteArgs<ExtArgs>>): Prisma__SystemMailsClient<$Result.GetResult<Prisma.$SystemMailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemMails.
     * @param {SystemMailsUpdateArgs} args - Arguments to update one SystemMails.
     * @example
     * // Update one SystemMails
     * const systemMails = await prisma.systemMails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemMailsUpdateArgs>(args: SelectSubset<T, SystemMailsUpdateArgs<ExtArgs>>): Prisma__SystemMailsClient<$Result.GetResult<Prisma.$SystemMailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemMails.
     * @param {SystemMailsDeleteManyArgs} args - Arguments to filter SystemMails to delete.
     * @example
     * // Delete a few SystemMails
     * const { count } = await prisma.systemMails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemMailsDeleteManyArgs>(args?: SelectSubset<T, SystemMailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemMails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemMails
     * const systemMails = await prisma.systemMails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemMailsUpdateManyArgs>(args: SelectSubset<T, SystemMailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemMails.
     * @param {SystemMailsUpsertArgs} args - Arguments to update or create a SystemMails.
     * @example
     * // Update or create a SystemMails
     * const systemMails = await prisma.systemMails.upsert({
     *   create: {
     *     // ... data to create a SystemMails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemMails we want to update
     *   }
     * })
     */
    upsert<T extends SystemMailsUpsertArgs>(args: SelectSubset<T, SystemMailsUpsertArgs<ExtArgs>>): Prisma__SystemMailsClient<$Result.GetResult<Prisma.$SystemMailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemMails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailsCountArgs} args - Arguments to filter SystemMails to count.
     * @example
     * // Count the number of SystemMails
     * const count = await prisma.systemMails.count({
     *   where: {
     *     // ... the filter for the SystemMails we want to count
     *   }
     * })
    **/
    count<T extends SystemMailsCountArgs>(
      args?: Subset<T, SystemMailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemMailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemMails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemMailsAggregateArgs>(args: Subset<T, SystemMailsAggregateArgs>): Prisma.PrismaPromise<GetSystemMailsAggregateType<T>>

    /**
     * Group by SystemMails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemMailsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemMailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemMailsGroupByArgs['orderBy'] }
        : { orderBy?: SystemMailsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemMailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemMailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemMails model
   */
  readonly fields: SystemMailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemMails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemMailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SystemMailNotifications<T extends SystemMails$SystemMailNotificationsArgs<ExtArgs> = {}>(args?: Subset<T, SystemMails$SystemMailNotificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemMailNotificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemMails model
   */
  interface SystemMailsFieldRefs {
    readonly id: FieldRef<"SystemMails", 'String'>
    readonly messageId: FieldRef<"SystemMails", 'String'>
    readonly fromEmail: FieldRef<"SystemMails", 'String'>
    readonly toEmail: FieldRef<"SystemMails", 'String'>
    readonly subject: FieldRef<"SystemMails", 'String'>
    readonly contents: FieldRef<"SystemMails", 'String'>
    readonly created: FieldRef<"SystemMails", 'DateTime'>
    readonly updated: FieldRef<"SystemMails", 'DateTime'>
    readonly status: FieldRef<"SystemMails", 'SystemMailStatus'>
  }
    

  // Custom InputTypes
  /**
   * SystemMails findUnique
   */
  export type SystemMailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMails
     */
    select?: SystemMailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMails
     */
    omit?: SystemMailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailsInclude<ExtArgs> | null
    /**
     * Filter, which SystemMails to fetch.
     */
    where: SystemMailsWhereUniqueInput
  }

  /**
   * SystemMails findUniqueOrThrow
   */
  export type SystemMailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMails
     */
    select?: SystemMailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMails
     */
    omit?: SystemMailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailsInclude<ExtArgs> | null
    /**
     * Filter, which SystemMails to fetch.
     */
    where: SystemMailsWhereUniqueInput
  }

  /**
   * SystemMails findFirst
   */
  export type SystemMailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMails
     */
    select?: SystemMailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMails
     */
    omit?: SystemMailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailsInclude<ExtArgs> | null
    /**
     * Filter, which SystemMails to fetch.
     */
    where?: SystemMailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMails to fetch.
     */
    orderBy?: SystemMailsOrderByWithRelationInput | SystemMailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemMails.
     */
    cursor?: SystemMailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemMails.
     */
    distinct?: SystemMailsScalarFieldEnum | SystemMailsScalarFieldEnum[]
  }

  /**
   * SystemMails findFirstOrThrow
   */
  export type SystemMailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMails
     */
    select?: SystemMailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMails
     */
    omit?: SystemMailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailsInclude<ExtArgs> | null
    /**
     * Filter, which SystemMails to fetch.
     */
    where?: SystemMailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMails to fetch.
     */
    orderBy?: SystemMailsOrderByWithRelationInput | SystemMailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemMails.
     */
    cursor?: SystemMailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemMails.
     */
    distinct?: SystemMailsScalarFieldEnum | SystemMailsScalarFieldEnum[]
  }

  /**
   * SystemMails findMany
   */
  export type SystemMailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMails
     */
    select?: SystemMailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMails
     */
    omit?: SystemMailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailsInclude<ExtArgs> | null
    /**
     * Filter, which SystemMails to fetch.
     */
    where?: SystemMailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemMails to fetch.
     */
    orderBy?: SystemMailsOrderByWithRelationInput | SystemMailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemMails.
     */
    cursor?: SystemMailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemMails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemMails.
     */
    skip?: number
    distinct?: SystemMailsScalarFieldEnum | SystemMailsScalarFieldEnum[]
  }

  /**
   * SystemMails create
   */
  export type SystemMailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMails
     */
    select?: SystemMailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMails
     */
    omit?: SystemMailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailsInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemMails.
     */
    data: XOR<SystemMailsCreateInput, SystemMailsUncheckedCreateInput>
  }

  /**
   * SystemMails createMany
   */
  export type SystemMailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemMails.
     */
    data: SystemMailsCreateManyInput | SystemMailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemMails update
   */
  export type SystemMailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMails
     */
    select?: SystemMailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMails
     */
    omit?: SystemMailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailsInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemMails.
     */
    data: XOR<SystemMailsUpdateInput, SystemMailsUncheckedUpdateInput>
    /**
     * Choose, which SystemMails to update.
     */
    where: SystemMailsWhereUniqueInput
  }

  /**
   * SystemMails updateMany
   */
  export type SystemMailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemMails.
     */
    data: XOR<SystemMailsUpdateManyMutationInput, SystemMailsUncheckedUpdateManyInput>
    /**
     * Filter which SystemMails to update
     */
    where?: SystemMailsWhereInput
    /**
     * Limit how many SystemMails to update.
     */
    limit?: number
  }

  /**
   * SystemMails upsert
   */
  export type SystemMailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMails
     */
    select?: SystemMailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMails
     */
    omit?: SystemMailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailsInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemMails to update in case it exists.
     */
    where: SystemMailsWhereUniqueInput
    /**
     * In case the SystemMails found by the `where` argument doesn't exist, create a new SystemMails with this data.
     */
    create: XOR<SystemMailsCreateInput, SystemMailsUncheckedCreateInput>
    /**
     * In case the SystemMails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemMailsUpdateInput, SystemMailsUncheckedUpdateInput>
  }

  /**
   * SystemMails delete
   */
  export type SystemMailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMails
     */
    select?: SystemMailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMails
     */
    omit?: SystemMailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailsInclude<ExtArgs> | null
    /**
     * Filter which SystemMails to delete.
     */
    where: SystemMailsWhereUniqueInput
  }

  /**
   * SystemMails deleteMany
   */
  export type SystemMailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemMails to delete
     */
    where?: SystemMailsWhereInput
    /**
     * Limit how many SystemMails to delete.
     */
    limit?: number
  }

  /**
   * SystemMails.SystemMailNotifications
   */
  export type SystemMails$SystemMailNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMailNotifications
     */
    select?: SystemMailNotificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMailNotifications
     */
    omit?: SystemMailNotificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailNotificationsInclude<ExtArgs> | null
    where?: SystemMailNotificationsWhereInput
    orderBy?: SystemMailNotificationsOrderByWithRelationInput | SystemMailNotificationsOrderByWithRelationInput[]
    cursor?: SystemMailNotificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SystemMailNotificationsScalarFieldEnum | SystemMailNotificationsScalarFieldEnum[]
  }

  /**
   * SystemMails without action
   */
  export type SystemMailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemMails
     */
    select?: SystemMailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemMails
     */
    omit?: SystemMailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemMailsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const NewsletterBatchScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    fromEmail: 'fromEmail',
    contents: 'contents',
    batchId: 'batchId',
    created: 'created'
  };

  export type NewsletterBatchScalarFieldEnum = (typeof NewsletterBatchScalarFieldEnum)[keyof typeof NewsletterBatchScalarFieldEnum]


  export const NewsletterMessagesScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    toEmail: 'toEmail',
    newsletterBatchId: 'newsletterBatchId',
    created: 'created',
    formatedContents: 'formatedContents'
  };

  export type NewsletterMessagesScalarFieldEnum = (typeof NewsletterMessagesScalarFieldEnum)[keyof typeof NewsletterMessagesScalarFieldEnum]


  export const NewsletterErrorsScalarFieldEnum: {
    id: 'id',
    toEmail: 'toEmail',
    error: 'error',
    created: 'created',
    newsletterBatchId: 'newsletterBatchId',
    messageId: 'messageId',
    formatedContents: 'formatedContents'
  };

  export type NewsletterErrorsScalarFieldEnum = (typeof NewsletterErrorsScalarFieldEnum)[keyof typeof NewsletterErrorsScalarFieldEnum]


  export const NewsletterNotificationsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    notificationId: 'notificationId',
    messageId: 'messageId',
    rawEvent: 'rawEvent',
    timestamp: 'timestamp',
    created: 'created'
  };

  export type NewsletterNotificationsScalarFieldEnum = (typeof NewsletterNotificationsScalarFieldEnum)[keyof typeof NewsletterNotificationsScalarFieldEnum]


  export const SystemMailNotificationsScalarFieldEnum: {
    id: 'id',
    type: 'type',
    notificationId: 'notificationId',
    messageId: 'messageId',
    rawEvent: 'rawEvent',
    timestamp: 'timestamp',
    created: 'created'
  };

  export type SystemMailNotificationsScalarFieldEnum = (typeof SystemMailNotificationsScalarFieldEnum)[keyof typeof SystemMailNotificationsScalarFieldEnum]


  export const SystemMailsScalarFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    fromEmail: 'fromEmail',
    toEmail: 'toEmail',
    subject: 'subject',
    contents: 'contents',
    created: 'created',
    updated: 'updated',
    status: 'status'
  };

  export type SystemMailsScalarFieldEnum = (typeof SystemMailsScalarFieldEnum)[keyof typeof SystemMailsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NewsletterBatchOrderByRelevanceFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    fromEmail: 'fromEmail',
    contents: 'contents',
    batchId: 'batchId'
  };

  export type NewsletterBatchOrderByRelevanceFieldEnum = (typeof NewsletterBatchOrderByRelevanceFieldEnum)[keyof typeof NewsletterBatchOrderByRelevanceFieldEnum]


  export const NewsletterMessagesOrderByRelevanceFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    toEmail: 'toEmail',
    newsletterBatchId: 'newsletterBatchId',
    formatedContents: 'formatedContents'
  };

  export type NewsletterMessagesOrderByRelevanceFieldEnum = (typeof NewsletterMessagesOrderByRelevanceFieldEnum)[keyof typeof NewsletterMessagesOrderByRelevanceFieldEnum]


  export const NewsletterErrorsOrderByRelevanceFieldEnum: {
    id: 'id',
    toEmail: 'toEmail',
    error: 'error',
    newsletterBatchId: 'newsletterBatchId',
    messageId: 'messageId',
    formatedContents: 'formatedContents'
  };

  export type NewsletterErrorsOrderByRelevanceFieldEnum = (typeof NewsletterErrorsOrderByRelevanceFieldEnum)[keyof typeof NewsletterErrorsOrderByRelevanceFieldEnum]


  export const NewsletterNotificationsOrderByRelevanceFieldEnum: {
    id: 'id',
    type: 'type',
    notificationId: 'notificationId',
    messageId: 'messageId',
    rawEvent: 'rawEvent'
  };

  export type NewsletterNotificationsOrderByRelevanceFieldEnum = (typeof NewsletterNotificationsOrderByRelevanceFieldEnum)[keyof typeof NewsletterNotificationsOrderByRelevanceFieldEnum]


  export const SystemMailNotificationsOrderByRelevanceFieldEnum: {
    id: 'id',
    type: 'type',
    notificationId: 'notificationId',
    messageId: 'messageId',
    rawEvent: 'rawEvent'
  };

  export type SystemMailNotificationsOrderByRelevanceFieldEnum = (typeof SystemMailNotificationsOrderByRelevanceFieldEnum)[keyof typeof SystemMailNotificationsOrderByRelevanceFieldEnum]


  export const SystemMailsOrderByRelevanceFieldEnum: {
    id: 'id',
    messageId: 'messageId',
    fromEmail: 'fromEmail',
    toEmail: 'toEmail',
    subject: 'subject',
    contents: 'contents'
  };

  export type SystemMailsOrderByRelevanceFieldEnum = (typeof SystemMailsOrderByRelevanceFieldEnum)[keyof typeof SystemMailsOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'SystemMailStatus'
   */
  export type EnumSystemMailStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemMailStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type NewsletterBatchWhereInput = {
    AND?: NewsletterBatchWhereInput | NewsletterBatchWhereInput[]
    OR?: NewsletterBatchWhereInput[]
    NOT?: NewsletterBatchWhereInput | NewsletterBatchWhereInput[]
    id?: StringFilter<"NewsletterBatch"> | string
    siteId?: StringFilter<"NewsletterBatch"> | string
    fromEmail?: StringFilter<"NewsletterBatch"> | string
    contents?: StringFilter<"NewsletterBatch"> | string
    batchId?: StringFilter<"NewsletterBatch"> | string
    created?: DateTimeFilter<"NewsletterBatch"> | Date | string
    NewslettersMessages?: NewsletterMessagesListRelationFilter
    NewslettersErrors?: NewsletterErrorsListRelationFilter
  }

  export type NewsletterBatchOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    fromEmail?: SortOrder
    contents?: SortOrder
    batchId?: SortOrder
    created?: SortOrder
    NewslettersMessages?: NewsletterMessagesOrderByRelationAggregateInput
    NewslettersErrors?: NewsletterErrorsOrderByRelationAggregateInput
    _relevance?: NewsletterBatchOrderByRelevanceInput
  }

  export type NewsletterBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsletterBatchWhereInput | NewsletterBatchWhereInput[]
    OR?: NewsletterBatchWhereInput[]
    NOT?: NewsletterBatchWhereInput | NewsletterBatchWhereInput[]
    siteId?: StringFilter<"NewsletterBatch"> | string
    fromEmail?: StringFilter<"NewsletterBatch"> | string
    contents?: StringFilter<"NewsletterBatch"> | string
    batchId?: StringFilter<"NewsletterBatch"> | string
    created?: DateTimeFilter<"NewsletterBatch"> | Date | string
    NewslettersMessages?: NewsletterMessagesListRelationFilter
    NewslettersErrors?: NewsletterErrorsListRelationFilter
  }, "id">

  export type NewsletterBatchOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    fromEmail?: SortOrder
    contents?: SortOrder
    batchId?: SortOrder
    created?: SortOrder
    _count?: NewsletterBatchCountOrderByAggregateInput
    _max?: NewsletterBatchMaxOrderByAggregateInput
    _min?: NewsletterBatchMinOrderByAggregateInput
  }

  export type NewsletterBatchScalarWhereWithAggregatesInput = {
    AND?: NewsletterBatchScalarWhereWithAggregatesInput | NewsletterBatchScalarWhereWithAggregatesInput[]
    OR?: NewsletterBatchScalarWhereWithAggregatesInput[]
    NOT?: NewsletterBatchScalarWhereWithAggregatesInput | NewsletterBatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsletterBatch"> | string
    siteId?: StringWithAggregatesFilter<"NewsletterBatch"> | string
    fromEmail?: StringWithAggregatesFilter<"NewsletterBatch"> | string
    contents?: StringWithAggregatesFilter<"NewsletterBatch"> | string
    batchId?: StringWithAggregatesFilter<"NewsletterBatch"> | string
    created?: DateTimeWithAggregatesFilter<"NewsletterBatch"> | Date | string
  }

  export type NewsletterMessagesWhereInput = {
    AND?: NewsletterMessagesWhereInput | NewsletterMessagesWhereInput[]
    OR?: NewsletterMessagesWhereInput[]
    NOT?: NewsletterMessagesWhereInput | NewsletterMessagesWhereInput[]
    id?: StringFilter<"NewsletterMessages"> | string
    messageId?: StringFilter<"NewsletterMessages"> | string
    toEmail?: StringFilter<"NewsletterMessages"> | string
    newsletterBatchId?: StringFilter<"NewsletterMessages"> | string
    created?: DateTimeFilter<"NewsletterMessages"> | Date | string
    formatedContents?: StringFilter<"NewsletterMessages"> | string
    notificationEvents?: NewsletterNotificationsListRelationFilter
    newsletterBatch?: XOR<NewsletterBatchScalarRelationFilter, NewsletterBatchWhereInput>
  }

  export type NewsletterMessagesOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    toEmail?: SortOrder
    newsletterBatchId?: SortOrder
    created?: SortOrder
    formatedContents?: SortOrder
    notificationEvents?: NewsletterNotificationsOrderByRelationAggregateInput
    newsletterBatch?: NewsletterBatchOrderByWithRelationInput
    _relevance?: NewsletterMessagesOrderByRelevanceInput
  }

  export type NewsletterMessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId?: string
    AND?: NewsletterMessagesWhereInput | NewsletterMessagesWhereInput[]
    OR?: NewsletterMessagesWhereInput[]
    NOT?: NewsletterMessagesWhereInput | NewsletterMessagesWhereInput[]
    toEmail?: StringFilter<"NewsletterMessages"> | string
    newsletterBatchId?: StringFilter<"NewsletterMessages"> | string
    created?: DateTimeFilter<"NewsletterMessages"> | Date | string
    formatedContents?: StringFilter<"NewsletterMessages"> | string
    notificationEvents?: NewsletterNotificationsListRelationFilter
    newsletterBatch?: XOR<NewsletterBatchScalarRelationFilter, NewsletterBatchWhereInput>
  }, "id" | "messageId">

  export type NewsletterMessagesOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    toEmail?: SortOrder
    newsletterBatchId?: SortOrder
    created?: SortOrder
    formatedContents?: SortOrder
    _count?: NewsletterMessagesCountOrderByAggregateInput
    _max?: NewsletterMessagesMaxOrderByAggregateInput
    _min?: NewsletterMessagesMinOrderByAggregateInput
  }

  export type NewsletterMessagesScalarWhereWithAggregatesInput = {
    AND?: NewsletterMessagesScalarWhereWithAggregatesInput | NewsletterMessagesScalarWhereWithAggregatesInput[]
    OR?: NewsletterMessagesScalarWhereWithAggregatesInput[]
    NOT?: NewsletterMessagesScalarWhereWithAggregatesInput | NewsletterMessagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsletterMessages"> | string
    messageId?: StringWithAggregatesFilter<"NewsletterMessages"> | string
    toEmail?: StringWithAggregatesFilter<"NewsletterMessages"> | string
    newsletterBatchId?: StringWithAggregatesFilter<"NewsletterMessages"> | string
    created?: DateTimeWithAggregatesFilter<"NewsletterMessages"> | Date | string
    formatedContents?: StringWithAggregatesFilter<"NewsletterMessages"> | string
  }

  export type NewsletterErrorsWhereInput = {
    AND?: NewsletterErrorsWhereInput | NewsletterErrorsWhereInput[]
    OR?: NewsletterErrorsWhereInput[]
    NOT?: NewsletterErrorsWhereInput | NewsletterErrorsWhereInput[]
    id?: StringFilter<"NewsletterErrors"> | string
    toEmail?: StringFilter<"NewsletterErrors"> | string
    error?: StringFilter<"NewsletterErrors"> | string
    created?: DateTimeFilter<"NewsletterErrors"> | Date | string
    newsletterBatchId?: StringFilter<"NewsletterErrors"> | string
    messageId?: StringFilter<"NewsletterErrors"> | string
    formatedContents?: StringFilter<"NewsletterErrors"> | string
    newsletterBatch?: XOR<NewsletterBatchScalarRelationFilter, NewsletterBatchWhereInput>
  }

  export type NewsletterErrorsOrderByWithRelationInput = {
    id?: SortOrder
    toEmail?: SortOrder
    error?: SortOrder
    created?: SortOrder
    newsletterBatchId?: SortOrder
    messageId?: SortOrder
    formatedContents?: SortOrder
    newsletterBatch?: NewsletterBatchOrderByWithRelationInput
    _relevance?: NewsletterErrorsOrderByRelevanceInput
  }

  export type NewsletterErrorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId?: string
    AND?: NewsletterErrorsWhereInput | NewsletterErrorsWhereInput[]
    OR?: NewsletterErrorsWhereInput[]
    NOT?: NewsletterErrorsWhereInput | NewsletterErrorsWhereInput[]
    toEmail?: StringFilter<"NewsletterErrors"> | string
    error?: StringFilter<"NewsletterErrors"> | string
    created?: DateTimeFilter<"NewsletterErrors"> | Date | string
    newsletterBatchId?: StringFilter<"NewsletterErrors"> | string
    formatedContents?: StringFilter<"NewsletterErrors"> | string
    newsletterBatch?: XOR<NewsletterBatchScalarRelationFilter, NewsletterBatchWhereInput>
  }, "id" | "messageId">

  export type NewsletterErrorsOrderByWithAggregationInput = {
    id?: SortOrder
    toEmail?: SortOrder
    error?: SortOrder
    created?: SortOrder
    newsletterBatchId?: SortOrder
    messageId?: SortOrder
    formatedContents?: SortOrder
    _count?: NewsletterErrorsCountOrderByAggregateInput
    _max?: NewsletterErrorsMaxOrderByAggregateInput
    _min?: NewsletterErrorsMinOrderByAggregateInput
  }

  export type NewsletterErrorsScalarWhereWithAggregatesInput = {
    AND?: NewsletterErrorsScalarWhereWithAggregatesInput | NewsletterErrorsScalarWhereWithAggregatesInput[]
    OR?: NewsletterErrorsScalarWhereWithAggregatesInput[]
    NOT?: NewsletterErrorsScalarWhereWithAggregatesInput | NewsletterErrorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsletterErrors"> | string
    toEmail?: StringWithAggregatesFilter<"NewsletterErrors"> | string
    error?: StringWithAggregatesFilter<"NewsletterErrors"> | string
    created?: DateTimeWithAggregatesFilter<"NewsletterErrors"> | Date | string
    newsletterBatchId?: StringWithAggregatesFilter<"NewsletterErrors"> | string
    messageId?: StringWithAggregatesFilter<"NewsletterErrors"> | string
    formatedContents?: StringWithAggregatesFilter<"NewsletterErrors"> | string
  }

  export type NewsletterNotificationsWhereInput = {
    AND?: NewsletterNotificationsWhereInput | NewsletterNotificationsWhereInput[]
    OR?: NewsletterNotificationsWhereInput[]
    NOT?: NewsletterNotificationsWhereInput | NewsletterNotificationsWhereInput[]
    id?: StringFilter<"NewsletterNotifications"> | string
    type?: StringFilter<"NewsletterNotifications"> | string
    notificationId?: StringFilter<"NewsletterNotifications"> | string
    messageId?: StringFilter<"NewsletterNotifications"> | string
    rawEvent?: StringFilter<"NewsletterNotifications"> | string
    timestamp?: DateTimeFilter<"NewsletterNotifications"> | Date | string
    created?: DateTimeFilter<"NewsletterNotifications"> | Date | string
    newsletter?: XOR<NewsletterMessagesScalarRelationFilter, NewsletterMessagesWhereInput>
  }

  export type NewsletterNotificationsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    notificationId?: SortOrder
    messageId?: SortOrder
    rawEvent?: SortOrder
    timestamp?: SortOrder
    created?: SortOrder
    newsletter?: NewsletterMessagesOrderByWithRelationInput
    _relevance?: NewsletterNotificationsOrderByRelevanceInput
  }

  export type NewsletterNotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    notificationId?: string
    AND?: NewsletterNotificationsWhereInput | NewsletterNotificationsWhereInput[]
    OR?: NewsletterNotificationsWhereInput[]
    NOT?: NewsletterNotificationsWhereInput | NewsletterNotificationsWhereInput[]
    type?: StringFilter<"NewsletterNotifications"> | string
    messageId?: StringFilter<"NewsletterNotifications"> | string
    rawEvent?: StringFilter<"NewsletterNotifications"> | string
    timestamp?: DateTimeFilter<"NewsletterNotifications"> | Date | string
    created?: DateTimeFilter<"NewsletterNotifications"> | Date | string
    newsletter?: XOR<NewsletterMessagesScalarRelationFilter, NewsletterMessagesWhereInput>
  }, "id" | "notificationId">

  export type NewsletterNotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    notificationId?: SortOrder
    messageId?: SortOrder
    rawEvent?: SortOrder
    timestamp?: SortOrder
    created?: SortOrder
    _count?: NewsletterNotificationsCountOrderByAggregateInput
    _max?: NewsletterNotificationsMaxOrderByAggregateInput
    _min?: NewsletterNotificationsMinOrderByAggregateInput
  }

  export type NewsletterNotificationsScalarWhereWithAggregatesInput = {
    AND?: NewsletterNotificationsScalarWhereWithAggregatesInput | NewsletterNotificationsScalarWhereWithAggregatesInput[]
    OR?: NewsletterNotificationsScalarWhereWithAggregatesInput[]
    NOT?: NewsletterNotificationsScalarWhereWithAggregatesInput | NewsletterNotificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsletterNotifications"> | string
    type?: StringWithAggregatesFilter<"NewsletterNotifications"> | string
    notificationId?: StringWithAggregatesFilter<"NewsletterNotifications"> | string
    messageId?: StringWithAggregatesFilter<"NewsletterNotifications"> | string
    rawEvent?: StringWithAggregatesFilter<"NewsletterNotifications"> | string
    timestamp?: DateTimeWithAggregatesFilter<"NewsletterNotifications"> | Date | string
    created?: DateTimeWithAggregatesFilter<"NewsletterNotifications"> | Date | string
  }

  export type SystemMailNotificationsWhereInput = {
    AND?: SystemMailNotificationsWhereInput | SystemMailNotificationsWhereInput[]
    OR?: SystemMailNotificationsWhereInput[]
    NOT?: SystemMailNotificationsWhereInput | SystemMailNotificationsWhereInput[]
    id?: StringFilter<"SystemMailNotifications"> | string
    type?: StringFilter<"SystemMailNotifications"> | string
    notificationId?: StringFilter<"SystemMailNotifications"> | string
    messageId?: StringFilter<"SystemMailNotifications"> | string
    rawEvent?: StringFilter<"SystemMailNotifications"> | string
    timestamp?: DateTimeFilter<"SystemMailNotifications"> | Date | string
    created?: DateTimeFilter<"SystemMailNotifications"> | Date | string
    systemMail?: XOR<SystemMailsScalarRelationFilter, SystemMailsWhereInput>
  }

  export type SystemMailNotificationsOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    notificationId?: SortOrder
    messageId?: SortOrder
    rawEvent?: SortOrder
    timestamp?: SortOrder
    created?: SortOrder
    systemMail?: SystemMailsOrderByWithRelationInput
    _relevance?: SystemMailNotificationsOrderByRelevanceInput
  }

  export type SystemMailNotificationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    notificationId?: string
    AND?: SystemMailNotificationsWhereInput | SystemMailNotificationsWhereInput[]
    OR?: SystemMailNotificationsWhereInput[]
    NOT?: SystemMailNotificationsWhereInput | SystemMailNotificationsWhereInput[]
    type?: StringFilter<"SystemMailNotifications"> | string
    messageId?: StringFilter<"SystemMailNotifications"> | string
    rawEvent?: StringFilter<"SystemMailNotifications"> | string
    timestamp?: DateTimeFilter<"SystemMailNotifications"> | Date | string
    created?: DateTimeFilter<"SystemMailNotifications"> | Date | string
    systemMail?: XOR<SystemMailsScalarRelationFilter, SystemMailsWhereInput>
  }, "id" | "notificationId">

  export type SystemMailNotificationsOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    notificationId?: SortOrder
    messageId?: SortOrder
    rawEvent?: SortOrder
    timestamp?: SortOrder
    created?: SortOrder
    _count?: SystemMailNotificationsCountOrderByAggregateInput
    _max?: SystemMailNotificationsMaxOrderByAggregateInput
    _min?: SystemMailNotificationsMinOrderByAggregateInput
  }

  export type SystemMailNotificationsScalarWhereWithAggregatesInput = {
    AND?: SystemMailNotificationsScalarWhereWithAggregatesInput | SystemMailNotificationsScalarWhereWithAggregatesInput[]
    OR?: SystemMailNotificationsScalarWhereWithAggregatesInput[]
    NOT?: SystemMailNotificationsScalarWhereWithAggregatesInput | SystemMailNotificationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemMailNotifications"> | string
    type?: StringWithAggregatesFilter<"SystemMailNotifications"> | string
    notificationId?: StringWithAggregatesFilter<"SystemMailNotifications"> | string
    messageId?: StringWithAggregatesFilter<"SystemMailNotifications"> | string
    rawEvent?: StringWithAggregatesFilter<"SystemMailNotifications"> | string
    timestamp?: DateTimeWithAggregatesFilter<"SystemMailNotifications"> | Date | string
    created?: DateTimeWithAggregatesFilter<"SystemMailNotifications"> | Date | string
  }

  export type SystemMailsWhereInput = {
    AND?: SystemMailsWhereInput | SystemMailsWhereInput[]
    OR?: SystemMailsWhereInput[]
    NOT?: SystemMailsWhereInput | SystemMailsWhereInput[]
    id?: StringFilter<"SystemMails"> | string
    messageId?: StringFilter<"SystemMails"> | string
    fromEmail?: StringFilter<"SystemMails"> | string
    toEmail?: StringFilter<"SystemMails"> | string
    subject?: StringFilter<"SystemMails"> | string
    contents?: StringFilter<"SystemMails"> | string
    created?: DateTimeFilter<"SystemMails"> | Date | string
    updated?: DateTimeFilter<"SystemMails"> | Date | string
    status?: EnumSystemMailStatusFilter<"SystemMails"> | $Enums.SystemMailStatus
    SystemMailNotifications?: SystemMailNotificationsListRelationFilter
  }

  export type SystemMailsOrderByWithRelationInput = {
    id?: SortOrder
    messageId?: SortOrder
    fromEmail?: SortOrder
    toEmail?: SortOrder
    subject?: SortOrder
    contents?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    status?: SortOrder
    SystemMailNotifications?: SystemMailNotificationsOrderByRelationAggregateInput
    _relevance?: SystemMailsOrderByRelevanceInput
  }

  export type SystemMailsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    messageId?: string
    AND?: SystemMailsWhereInput | SystemMailsWhereInput[]
    OR?: SystemMailsWhereInput[]
    NOT?: SystemMailsWhereInput | SystemMailsWhereInput[]
    fromEmail?: StringFilter<"SystemMails"> | string
    toEmail?: StringFilter<"SystemMails"> | string
    subject?: StringFilter<"SystemMails"> | string
    contents?: StringFilter<"SystemMails"> | string
    created?: DateTimeFilter<"SystemMails"> | Date | string
    updated?: DateTimeFilter<"SystemMails"> | Date | string
    status?: EnumSystemMailStatusFilter<"SystemMails"> | $Enums.SystemMailStatus
    SystemMailNotifications?: SystemMailNotificationsListRelationFilter
  }, "id" | "messageId">

  export type SystemMailsOrderByWithAggregationInput = {
    id?: SortOrder
    messageId?: SortOrder
    fromEmail?: SortOrder
    toEmail?: SortOrder
    subject?: SortOrder
    contents?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    status?: SortOrder
    _count?: SystemMailsCountOrderByAggregateInput
    _max?: SystemMailsMaxOrderByAggregateInput
    _min?: SystemMailsMinOrderByAggregateInput
  }

  export type SystemMailsScalarWhereWithAggregatesInput = {
    AND?: SystemMailsScalarWhereWithAggregatesInput | SystemMailsScalarWhereWithAggregatesInput[]
    OR?: SystemMailsScalarWhereWithAggregatesInput[]
    NOT?: SystemMailsScalarWhereWithAggregatesInput | SystemMailsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemMails"> | string
    messageId?: StringWithAggregatesFilter<"SystemMails"> | string
    fromEmail?: StringWithAggregatesFilter<"SystemMails"> | string
    toEmail?: StringWithAggregatesFilter<"SystemMails"> | string
    subject?: StringWithAggregatesFilter<"SystemMails"> | string
    contents?: StringWithAggregatesFilter<"SystemMails"> | string
    created?: DateTimeWithAggregatesFilter<"SystemMails"> | Date | string
    updated?: DateTimeWithAggregatesFilter<"SystemMails"> | Date | string
    status?: EnumSystemMailStatusWithAggregatesFilter<"SystemMails"> | $Enums.SystemMailStatus
  }

  export type NewsletterBatchCreateInput = {
    id?: string
    siteId: string
    fromEmail: string
    contents: string
    batchId: string
    created?: Date | string
    NewslettersMessages?: NewsletterMessagesCreateNestedManyWithoutNewsletterBatchInput
    NewslettersErrors?: NewsletterErrorsCreateNestedManyWithoutNewsletterBatchInput
  }

  export type NewsletterBatchUncheckedCreateInput = {
    id?: string
    siteId: string
    fromEmail: string
    contents: string
    batchId: string
    created?: Date | string
    NewslettersMessages?: NewsletterMessagesUncheckedCreateNestedManyWithoutNewsletterBatchInput
    NewslettersErrors?: NewsletterErrorsUncheckedCreateNestedManyWithoutNewsletterBatchInput
  }

  export type NewsletterBatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    NewslettersMessages?: NewsletterMessagesUpdateManyWithoutNewsletterBatchNestedInput
    NewslettersErrors?: NewsletterErrorsUpdateManyWithoutNewsletterBatchNestedInput
  }

  export type NewsletterBatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    NewslettersMessages?: NewsletterMessagesUncheckedUpdateManyWithoutNewsletterBatchNestedInput
    NewslettersErrors?: NewsletterErrorsUncheckedUpdateManyWithoutNewsletterBatchNestedInput
  }

  export type NewsletterBatchCreateManyInput = {
    id?: string
    siteId: string
    fromEmail: string
    contents: string
    batchId: string
    created?: Date | string
  }

  export type NewsletterBatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterBatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterMessagesCreateInput = {
    id?: string
    messageId: string
    toEmail: string
    created?: Date | string
    formatedContents: string
    notificationEvents?: NewsletterNotificationsCreateNestedManyWithoutNewsletterInput
    newsletterBatch: NewsletterBatchCreateNestedOneWithoutNewslettersMessagesInput
  }

  export type NewsletterMessagesUncheckedCreateInput = {
    id?: string
    messageId: string
    toEmail: string
    newsletterBatchId: string
    created?: Date | string
    formatedContents: string
    notificationEvents?: NewsletterNotificationsUncheckedCreateNestedManyWithoutNewsletterInput
  }

  export type NewsletterMessagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    formatedContents?: StringFieldUpdateOperationsInput | string
    notificationEvents?: NewsletterNotificationsUpdateManyWithoutNewsletterNestedInput
    newsletterBatch?: NewsletterBatchUpdateOneRequiredWithoutNewslettersMessagesNestedInput
  }

  export type NewsletterMessagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    newsletterBatchId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    formatedContents?: StringFieldUpdateOperationsInput | string
    notificationEvents?: NewsletterNotificationsUncheckedUpdateManyWithoutNewsletterNestedInput
  }

  export type NewsletterMessagesCreateManyInput = {
    id?: string
    messageId: string
    toEmail: string
    newsletterBatchId: string
    created?: Date | string
    formatedContents: string
  }

  export type NewsletterMessagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    formatedContents?: StringFieldUpdateOperationsInput | string
  }

  export type NewsletterMessagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    newsletterBatchId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    formatedContents?: StringFieldUpdateOperationsInput | string
  }

  export type NewsletterErrorsCreateInput = {
    id?: string
    toEmail: string
    error: string
    created?: Date | string
    messageId: string
    formatedContents: string
    newsletterBatch: NewsletterBatchCreateNestedOneWithoutNewslettersErrorsInput
  }

  export type NewsletterErrorsUncheckedCreateInput = {
    id?: string
    toEmail: string
    error: string
    created?: Date | string
    newsletterBatchId: string
    messageId: string
    formatedContents: string
  }

  export type NewsletterErrorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: StringFieldUpdateOperationsInput | string
    formatedContents?: StringFieldUpdateOperationsInput | string
    newsletterBatch?: NewsletterBatchUpdateOneRequiredWithoutNewslettersErrorsNestedInput
  }

  export type NewsletterErrorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    newsletterBatchId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    formatedContents?: StringFieldUpdateOperationsInput | string
  }

  export type NewsletterErrorsCreateManyInput = {
    id?: string
    toEmail: string
    error: string
    created?: Date | string
    newsletterBatchId: string
    messageId: string
    formatedContents: string
  }

  export type NewsletterErrorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: StringFieldUpdateOperationsInput | string
    formatedContents?: StringFieldUpdateOperationsInput | string
  }

  export type NewsletterErrorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    newsletterBatchId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    formatedContents?: StringFieldUpdateOperationsInput | string
  }

  export type NewsletterNotificationsCreateInput = {
    id?: string
    type: string
    notificationId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
    newsletter: NewsletterMessagesCreateNestedOneWithoutNotificationEventsInput
  }

  export type NewsletterNotificationsUncheckedCreateInput = {
    id?: string
    type: string
    notificationId: string
    messageId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
  }

  export type NewsletterNotificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    newsletter?: NewsletterMessagesUpdateOneRequiredWithoutNotificationEventsNestedInput
  }

  export type NewsletterNotificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterNotificationsCreateManyInput = {
    id?: string
    type: string
    notificationId: string
    messageId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
  }

  export type NewsletterNotificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterNotificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMailNotificationsCreateInput = {
    id?: string
    type: string
    notificationId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
    systemMail: SystemMailsCreateNestedOneWithoutSystemMailNotificationsInput
  }

  export type SystemMailNotificationsUncheckedCreateInput = {
    id?: string
    type: string
    notificationId: string
    messageId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
  }

  export type SystemMailNotificationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    systemMail?: SystemMailsUpdateOneRequiredWithoutSystemMailNotificationsNestedInput
  }

  export type SystemMailNotificationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMailNotificationsCreateManyInput = {
    id?: string
    type: string
    notificationId: string
    messageId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
  }

  export type SystemMailNotificationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMailNotificationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMailsCreateInput = {
    id?: string
    messageId: string
    fromEmail: string
    toEmail: string
    subject: string
    contents: string
    created?: Date | string
    updated?: Date | string
    status?: $Enums.SystemMailStatus
    SystemMailNotifications?: SystemMailNotificationsCreateNestedManyWithoutSystemMailInput
  }

  export type SystemMailsUncheckedCreateInput = {
    id?: string
    messageId: string
    fromEmail: string
    toEmail: string
    subject: string
    contents: string
    created?: Date | string
    updated?: Date | string
    status?: $Enums.SystemMailStatus
    SystemMailNotifications?: SystemMailNotificationsUncheckedCreateNestedManyWithoutSystemMailInput
  }

  export type SystemMailsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSystemMailStatusFieldUpdateOperationsInput | $Enums.SystemMailStatus
    SystemMailNotifications?: SystemMailNotificationsUpdateManyWithoutSystemMailNestedInput
  }

  export type SystemMailsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSystemMailStatusFieldUpdateOperationsInput | $Enums.SystemMailStatus
    SystemMailNotifications?: SystemMailNotificationsUncheckedUpdateManyWithoutSystemMailNestedInput
  }

  export type SystemMailsCreateManyInput = {
    id?: string
    messageId: string
    fromEmail: string
    toEmail: string
    subject: string
    contents: string
    created?: Date | string
    updated?: Date | string
    status?: $Enums.SystemMailStatus
  }

  export type SystemMailsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSystemMailStatusFieldUpdateOperationsInput | $Enums.SystemMailStatus
  }

  export type SystemMailsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSystemMailStatusFieldUpdateOperationsInput | $Enums.SystemMailStatus
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NewsletterMessagesListRelationFilter = {
    every?: NewsletterMessagesWhereInput
    some?: NewsletterMessagesWhereInput
    none?: NewsletterMessagesWhereInput
  }

  export type NewsletterErrorsListRelationFilter = {
    every?: NewsletterErrorsWhereInput
    some?: NewsletterErrorsWhereInput
    none?: NewsletterErrorsWhereInput
  }

  export type NewsletterMessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsletterErrorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsletterBatchOrderByRelevanceInput = {
    fields: NewsletterBatchOrderByRelevanceFieldEnum | NewsletterBatchOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NewsletterBatchCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    fromEmail?: SortOrder
    contents?: SortOrder
    batchId?: SortOrder
    created?: SortOrder
  }

  export type NewsletterBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    fromEmail?: SortOrder
    contents?: SortOrder
    batchId?: SortOrder
    created?: SortOrder
  }

  export type NewsletterBatchMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    fromEmail?: SortOrder
    contents?: SortOrder
    batchId?: SortOrder
    created?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NewsletterNotificationsListRelationFilter = {
    every?: NewsletterNotificationsWhereInput
    some?: NewsletterNotificationsWhereInput
    none?: NewsletterNotificationsWhereInput
  }

  export type NewsletterBatchScalarRelationFilter = {
    is?: NewsletterBatchWhereInput
    isNot?: NewsletterBatchWhereInput
  }

  export type NewsletterNotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsletterMessagesOrderByRelevanceInput = {
    fields: NewsletterMessagesOrderByRelevanceFieldEnum | NewsletterMessagesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NewsletterMessagesCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    toEmail?: SortOrder
    newsletterBatchId?: SortOrder
    created?: SortOrder
    formatedContents?: SortOrder
  }

  export type NewsletterMessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    toEmail?: SortOrder
    newsletterBatchId?: SortOrder
    created?: SortOrder
    formatedContents?: SortOrder
  }

  export type NewsletterMessagesMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    toEmail?: SortOrder
    newsletterBatchId?: SortOrder
    created?: SortOrder
    formatedContents?: SortOrder
  }

  export type NewsletterErrorsOrderByRelevanceInput = {
    fields: NewsletterErrorsOrderByRelevanceFieldEnum | NewsletterErrorsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NewsletterErrorsCountOrderByAggregateInput = {
    id?: SortOrder
    toEmail?: SortOrder
    error?: SortOrder
    created?: SortOrder
    newsletterBatchId?: SortOrder
    messageId?: SortOrder
    formatedContents?: SortOrder
  }

  export type NewsletterErrorsMaxOrderByAggregateInput = {
    id?: SortOrder
    toEmail?: SortOrder
    error?: SortOrder
    created?: SortOrder
    newsletterBatchId?: SortOrder
    messageId?: SortOrder
    formatedContents?: SortOrder
  }

  export type NewsletterErrorsMinOrderByAggregateInput = {
    id?: SortOrder
    toEmail?: SortOrder
    error?: SortOrder
    created?: SortOrder
    newsletterBatchId?: SortOrder
    messageId?: SortOrder
    formatedContents?: SortOrder
  }

  export type NewsletterMessagesScalarRelationFilter = {
    is?: NewsletterMessagesWhereInput
    isNot?: NewsletterMessagesWhereInput
  }

  export type NewsletterNotificationsOrderByRelevanceInput = {
    fields: NewsletterNotificationsOrderByRelevanceFieldEnum | NewsletterNotificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NewsletterNotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    notificationId?: SortOrder
    messageId?: SortOrder
    rawEvent?: SortOrder
    timestamp?: SortOrder
    created?: SortOrder
  }

  export type NewsletterNotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    notificationId?: SortOrder
    messageId?: SortOrder
    rawEvent?: SortOrder
    timestamp?: SortOrder
    created?: SortOrder
  }

  export type NewsletterNotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    notificationId?: SortOrder
    messageId?: SortOrder
    rawEvent?: SortOrder
    timestamp?: SortOrder
    created?: SortOrder
  }

  export type SystemMailsScalarRelationFilter = {
    is?: SystemMailsWhereInput
    isNot?: SystemMailsWhereInput
  }

  export type SystemMailNotificationsOrderByRelevanceInput = {
    fields: SystemMailNotificationsOrderByRelevanceFieldEnum | SystemMailNotificationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SystemMailNotificationsCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    notificationId?: SortOrder
    messageId?: SortOrder
    rawEvent?: SortOrder
    timestamp?: SortOrder
    created?: SortOrder
  }

  export type SystemMailNotificationsMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    notificationId?: SortOrder
    messageId?: SortOrder
    rawEvent?: SortOrder
    timestamp?: SortOrder
    created?: SortOrder
  }

  export type SystemMailNotificationsMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    notificationId?: SortOrder
    messageId?: SortOrder
    rawEvent?: SortOrder
    timestamp?: SortOrder
    created?: SortOrder
  }

  export type EnumSystemMailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemMailStatus | EnumSystemMailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SystemMailStatus[]
    notIn?: $Enums.SystemMailStatus[]
    not?: NestedEnumSystemMailStatusFilter<$PrismaModel> | $Enums.SystemMailStatus
  }

  export type SystemMailNotificationsListRelationFilter = {
    every?: SystemMailNotificationsWhereInput
    some?: SystemMailNotificationsWhereInput
    none?: SystemMailNotificationsWhereInput
  }

  export type SystemMailNotificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SystemMailsOrderByRelevanceInput = {
    fields: SystemMailsOrderByRelevanceFieldEnum | SystemMailsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SystemMailsCountOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    fromEmail?: SortOrder
    toEmail?: SortOrder
    subject?: SortOrder
    contents?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    status?: SortOrder
  }

  export type SystemMailsMaxOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    fromEmail?: SortOrder
    toEmail?: SortOrder
    subject?: SortOrder
    contents?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    status?: SortOrder
  }

  export type SystemMailsMinOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    fromEmail?: SortOrder
    toEmail?: SortOrder
    subject?: SortOrder
    contents?: SortOrder
    created?: SortOrder
    updated?: SortOrder
    status?: SortOrder
  }

  export type EnumSystemMailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemMailStatus | EnumSystemMailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SystemMailStatus[]
    notIn?: $Enums.SystemMailStatus[]
    not?: NestedEnumSystemMailStatusWithAggregatesFilter<$PrismaModel> | $Enums.SystemMailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemMailStatusFilter<$PrismaModel>
    _max?: NestedEnumSystemMailStatusFilter<$PrismaModel>
  }

  export type NewsletterMessagesCreateNestedManyWithoutNewsletterBatchInput = {
    create?: XOR<NewsletterMessagesCreateWithoutNewsletterBatchInput, NewsletterMessagesUncheckedCreateWithoutNewsletterBatchInput> | NewsletterMessagesCreateWithoutNewsletterBatchInput[] | NewsletterMessagesUncheckedCreateWithoutNewsletterBatchInput[]
    connectOrCreate?: NewsletterMessagesCreateOrConnectWithoutNewsletterBatchInput | NewsletterMessagesCreateOrConnectWithoutNewsletterBatchInput[]
    createMany?: NewsletterMessagesCreateManyNewsletterBatchInputEnvelope
    connect?: NewsletterMessagesWhereUniqueInput | NewsletterMessagesWhereUniqueInput[]
  }

  export type NewsletterErrorsCreateNestedManyWithoutNewsletterBatchInput = {
    create?: XOR<NewsletterErrorsCreateWithoutNewsletterBatchInput, NewsletterErrorsUncheckedCreateWithoutNewsletterBatchInput> | NewsletterErrorsCreateWithoutNewsletterBatchInput[] | NewsletterErrorsUncheckedCreateWithoutNewsletterBatchInput[]
    connectOrCreate?: NewsletterErrorsCreateOrConnectWithoutNewsletterBatchInput | NewsletterErrorsCreateOrConnectWithoutNewsletterBatchInput[]
    createMany?: NewsletterErrorsCreateManyNewsletterBatchInputEnvelope
    connect?: NewsletterErrorsWhereUniqueInput | NewsletterErrorsWhereUniqueInput[]
  }

  export type NewsletterMessagesUncheckedCreateNestedManyWithoutNewsletterBatchInput = {
    create?: XOR<NewsletterMessagesCreateWithoutNewsletterBatchInput, NewsletterMessagesUncheckedCreateWithoutNewsletterBatchInput> | NewsletterMessagesCreateWithoutNewsletterBatchInput[] | NewsletterMessagesUncheckedCreateWithoutNewsletterBatchInput[]
    connectOrCreate?: NewsletterMessagesCreateOrConnectWithoutNewsletterBatchInput | NewsletterMessagesCreateOrConnectWithoutNewsletterBatchInput[]
    createMany?: NewsletterMessagesCreateManyNewsletterBatchInputEnvelope
    connect?: NewsletterMessagesWhereUniqueInput | NewsletterMessagesWhereUniqueInput[]
  }

  export type NewsletterErrorsUncheckedCreateNestedManyWithoutNewsletterBatchInput = {
    create?: XOR<NewsletterErrorsCreateWithoutNewsletterBatchInput, NewsletterErrorsUncheckedCreateWithoutNewsletterBatchInput> | NewsletterErrorsCreateWithoutNewsletterBatchInput[] | NewsletterErrorsUncheckedCreateWithoutNewsletterBatchInput[]
    connectOrCreate?: NewsletterErrorsCreateOrConnectWithoutNewsletterBatchInput | NewsletterErrorsCreateOrConnectWithoutNewsletterBatchInput[]
    createMany?: NewsletterErrorsCreateManyNewsletterBatchInputEnvelope
    connect?: NewsletterErrorsWhereUniqueInput | NewsletterErrorsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NewsletterMessagesUpdateManyWithoutNewsletterBatchNestedInput = {
    create?: XOR<NewsletterMessagesCreateWithoutNewsletterBatchInput, NewsletterMessagesUncheckedCreateWithoutNewsletterBatchInput> | NewsletterMessagesCreateWithoutNewsletterBatchInput[] | NewsletterMessagesUncheckedCreateWithoutNewsletterBatchInput[]
    connectOrCreate?: NewsletterMessagesCreateOrConnectWithoutNewsletterBatchInput | NewsletterMessagesCreateOrConnectWithoutNewsletterBatchInput[]
    upsert?: NewsletterMessagesUpsertWithWhereUniqueWithoutNewsletterBatchInput | NewsletterMessagesUpsertWithWhereUniqueWithoutNewsletterBatchInput[]
    createMany?: NewsletterMessagesCreateManyNewsletterBatchInputEnvelope
    set?: NewsletterMessagesWhereUniqueInput | NewsletterMessagesWhereUniqueInput[]
    disconnect?: NewsletterMessagesWhereUniqueInput | NewsletterMessagesWhereUniqueInput[]
    delete?: NewsletterMessagesWhereUniqueInput | NewsletterMessagesWhereUniqueInput[]
    connect?: NewsletterMessagesWhereUniqueInput | NewsletterMessagesWhereUniqueInput[]
    update?: NewsletterMessagesUpdateWithWhereUniqueWithoutNewsletterBatchInput | NewsletterMessagesUpdateWithWhereUniqueWithoutNewsletterBatchInput[]
    updateMany?: NewsletterMessagesUpdateManyWithWhereWithoutNewsletterBatchInput | NewsletterMessagesUpdateManyWithWhereWithoutNewsletterBatchInput[]
    deleteMany?: NewsletterMessagesScalarWhereInput | NewsletterMessagesScalarWhereInput[]
  }

  export type NewsletterErrorsUpdateManyWithoutNewsletterBatchNestedInput = {
    create?: XOR<NewsletterErrorsCreateWithoutNewsletterBatchInput, NewsletterErrorsUncheckedCreateWithoutNewsletterBatchInput> | NewsletterErrorsCreateWithoutNewsletterBatchInput[] | NewsletterErrorsUncheckedCreateWithoutNewsletterBatchInput[]
    connectOrCreate?: NewsletterErrorsCreateOrConnectWithoutNewsletterBatchInput | NewsletterErrorsCreateOrConnectWithoutNewsletterBatchInput[]
    upsert?: NewsletterErrorsUpsertWithWhereUniqueWithoutNewsletterBatchInput | NewsletterErrorsUpsertWithWhereUniqueWithoutNewsletterBatchInput[]
    createMany?: NewsletterErrorsCreateManyNewsletterBatchInputEnvelope
    set?: NewsletterErrorsWhereUniqueInput | NewsletterErrorsWhereUniqueInput[]
    disconnect?: NewsletterErrorsWhereUniqueInput | NewsletterErrorsWhereUniqueInput[]
    delete?: NewsletterErrorsWhereUniqueInput | NewsletterErrorsWhereUniqueInput[]
    connect?: NewsletterErrorsWhereUniqueInput | NewsletterErrorsWhereUniqueInput[]
    update?: NewsletterErrorsUpdateWithWhereUniqueWithoutNewsletterBatchInput | NewsletterErrorsUpdateWithWhereUniqueWithoutNewsletterBatchInput[]
    updateMany?: NewsletterErrorsUpdateManyWithWhereWithoutNewsletterBatchInput | NewsletterErrorsUpdateManyWithWhereWithoutNewsletterBatchInput[]
    deleteMany?: NewsletterErrorsScalarWhereInput | NewsletterErrorsScalarWhereInput[]
  }

  export type NewsletterMessagesUncheckedUpdateManyWithoutNewsletterBatchNestedInput = {
    create?: XOR<NewsletterMessagesCreateWithoutNewsletterBatchInput, NewsletterMessagesUncheckedCreateWithoutNewsletterBatchInput> | NewsletterMessagesCreateWithoutNewsletterBatchInput[] | NewsletterMessagesUncheckedCreateWithoutNewsletterBatchInput[]
    connectOrCreate?: NewsletterMessagesCreateOrConnectWithoutNewsletterBatchInput | NewsletterMessagesCreateOrConnectWithoutNewsletterBatchInput[]
    upsert?: NewsletterMessagesUpsertWithWhereUniqueWithoutNewsletterBatchInput | NewsletterMessagesUpsertWithWhereUniqueWithoutNewsletterBatchInput[]
    createMany?: NewsletterMessagesCreateManyNewsletterBatchInputEnvelope
    set?: NewsletterMessagesWhereUniqueInput | NewsletterMessagesWhereUniqueInput[]
    disconnect?: NewsletterMessagesWhereUniqueInput | NewsletterMessagesWhereUniqueInput[]
    delete?: NewsletterMessagesWhereUniqueInput | NewsletterMessagesWhereUniqueInput[]
    connect?: NewsletterMessagesWhereUniqueInput | NewsletterMessagesWhereUniqueInput[]
    update?: NewsletterMessagesUpdateWithWhereUniqueWithoutNewsletterBatchInput | NewsletterMessagesUpdateWithWhereUniqueWithoutNewsletterBatchInput[]
    updateMany?: NewsletterMessagesUpdateManyWithWhereWithoutNewsletterBatchInput | NewsletterMessagesUpdateManyWithWhereWithoutNewsletterBatchInput[]
    deleteMany?: NewsletterMessagesScalarWhereInput | NewsletterMessagesScalarWhereInput[]
  }

  export type NewsletterErrorsUncheckedUpdateManyWithoutNewsletterBatchNestedInput = {
    create?: XOR<NewsletterErrorsCreateWithoutNewsletterBatchInput, NewsletterErrorsUncheckedCreateWithoutNewsletterBatchInput> | NewsletterErrorsCreateWithoutNewsletterBatchInput[] | NewsletterErrorsUncheckedCreateWithoutNewsletterBatchInput[]
    connectOrCreate?: NewsletterErrorsCreateOrConnectWithoutNewsletterBatchInput | NewsletterErrorsCreateOrConnectWithoutNewsletterBatchInput[]
    upsert?: NewsletterErrorsUpsertWithWhereUniqueWithoutNewsletterBatchInput | NewsletterErrorsUpsertWithWhereUniqueWithoutNewsletterBatchInput[]
    createMany?: NewsletterErrorsCreateManyNewsletterBatchInputEnvelope
    set?: NewsletterErrorsWhereUniqueInput | NewsletterErrorsWhereUniqueInput[]
    disconnect?: NewsletterErrorsWhereUniqueInput | NewsletterErrorsWhereUniqueInput[]
    delete?: NewsletterErrorsWhereUniqueInput | NewsletterErrorsWhereUniqueInput[]
    connect?: NewsletterErrorsWhereUniqueInput | NewsletterErrorsWhereUniqueInput[]
    update?: NewsletterErrorsUpdateWithWhereUniqueWithoutNewsletterBatchInput | NewsletterErrorsUpdateWithWhereUniqueWithoutNewsletterBatchInput[]
    updateMany?: NewsletterErrorsUpdateManyWithWhereWithoutNewsletterBatchInput | NewsletterErrorsUpdateManyWithWhereWithoutNewsletterBatchInput[]
    deleteMany?: NewsletterErrorsScalarWhereInput | NewsletterErrorsScalarWhereInput[]
  }

  export type NewsletterNotificationsCreateNestedManyWithoutNewsletterInput = {
    create?: XOR<NewsletterNotificationsCreateWithoutNewsletterInput, NewsletterNotificationsUncheckedCreateWithoutNewsletterInput> | NewsletterNotificationsCreateWithoutNewsletterInput[] | NewsletterNotificationsUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: NewsletterNotificationsCreateOrConnectWithoutNewsletterInput | NewsletterNotificationsCreateOrConnectWithoutNewsletterInput[]
    createMany?: NewsletterNotificationsCreateManyNewsletterInputEnvelope
    connect?: NewsletterNotificationsWhereUniqueInput | NewsletterNotificationsWhereUniqueInput[]
  }

  export type NewsletterBatchCreateNestedOneWithoutNewslettersMessagesInput = {
    create?: XOR<NewsletterBatchCreateWithoutNewslettersMessagesInput, NewsletterBatchUncheckedCreateWithoutNewslettersMessagesInput>
    connectOrCreate?: NewsletterBatchCreateOrConnectWithoutNewslettersMessagesInput
    connect?: NewsletterBatchWhereUniqueInput
  }

  export type NewsletterNotificationsUncheckedCreateNestedManyWithoutNewsletterInput = {
    create?: XOR<NewsletterNotificationsCreateWithoutNewsletterInput, NewsletterNotificationsUncheckedCreateWithoutNewsletterInput> | NewsletterNotificationsCreateWithoutNewsletterInput[] | NewsletterNotificationsUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: NewsletterNotificationsCreateOrConnectWithoutNewsletterInput | NewsletterNotificationsCreateOrConnectWithoutNewsletterInput[]
    createMany?: NewsletterNotificationsCreateManyNewsletterInputEnvelope
    connect?: NewsletterNotificationsWhereUniqueInput | NewsletterNotificationsWhereUniqueInput[]
  }

  export type NewsletterNotificationsUpdateManyWithoutNewsletterNestedInput = {
    create?: XOR<NewsletterNotificationsCreateWithoutNewsletterInput, NewsletterNotificationsUncheckedCreateWithoutNewsletterInput> | NewsletterNotificationsCreateWithoutNewsletterInput[] | NewsletterNotificationsUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: NewsletterNotificationsCreateOrConnectWithoutNewsletterInput | NewsletterNotificationsCreateOrConnectWithoutNewsletterInput[]
    upsert?: NewsletterNotificationsUpsertWithWhereUniqueWithoutNewsletterInput | NewsletterNotificationsUpsertWithWhereUniqueWithoutNewsletterInput[]
    createMany?: NewsletterNotificationsCreateManyNewsletterInputEnvelope
    set?: NewsletterNotificationsWhereUniqueInput | NewsletterNotificationsWhereUniqueInput[]
    disconnect?: NewsletterNotificationsWhereUniqueInput | NewsletterNotificationsWhereUniqueInput[]
    delete?: NewsletterNotificationsWhereUniqueInput | NewsletterNotificationsWhereUniqueInput[]
    connect?: NewsletterNotificationsWhereUniqueInput | NewsletterNotificationsWhereUniqueInput[]
    update?: NewsletterNotificationsUpdateWithWhereUniqueWithoutNewsletterInput | NewsletterNotificationsUpdateWithWhereUniqueWithoutNewsletterInput[]
    updateMany?: NewsletterNotificationsUpdateManyWithWhereWithoutNewsletterInput | NewsletterNotificationsUpdateManyWithWhereWithoutNewsletterInput[]
    deleteMany?: NewsletterNotificationsScalarWhereInput | NewsletterNotificationsScalarWhereInput[]
  }

  export type NewsletterBatchUpdateOneRequiredWithoutNewslettersMessagesNestedInput = {
    create?: XOR<NewsletterBatchCreateWithoutNewslettersMessagesInput, NewsletterBatchUncheckedCreateWithoutNewslettersMessagesInput>
    connectOrCreate?: NewsletterBatchCreateOrConnectWithoutNewslettersMessagesInput
    upsert?: NewsletterBatchUpsertWithoutNewslettersMessagesInput
    connect?: NewsletterBatchWhereUniqueInput
    update?: XOR<XOR<NewsletterBatchUpdateToOneWithWhereWithoutNewslettersMessagesInput, NewsletterBatchUpdateWithoutNewslettersMessagesInput>, NewsletterBatchUncheckedUpdateWithoutNewslettersMessagesInput>
  }

  export type NewsletterNotificationsUncheckedUpdateManyWithoutNewsletterNestedInput = {
    create?: XOR<NewsletterNotificationsCreateWithoutNewsletterInput, NewsletterNotificationsUncheckedCreateWithoutNewsletterInput> | NewsletterNotificationsCreateWithoutNewsletterInput[] | NewsletterNotificationsUncheckedCreateWithoutNewsletterInput[]
    connectOrCreate?: NewsletterNotificationsCreateOrConnectWithoutNewsletterInput | NewsletterNotificationsCreateOrConnectWithoutNewsletterInput[]
    upsert?: NewsletterNotificationsUpsertWithWhereUniqueWithoutNewsletterInput | NewsletterNotificationsUpsertWithWhereUniqueWithoutNewsletterInput[]
    createMany?: NewsletterNotificationsCreateManyNewsletterInputEnvelope
    set?: NewsletterNotificationsWhereUniqueInput | NewsletterNotificationsWhereUniqueInput[]
    disconnect?: NewsletterNotificationsWhereUniqueInput | NewsletterNotificationsWhereUniqueInput[]
    delete?: NewsletterNotificationsWhereUniqueInput | NewsletterNotificationsWhereUniqueInput[]
    connect?: NewsletterNotificationsWhereUniqueInput | NewsletterNotificationsWhereUniqueInput[]
    update?: NewsletterNotificationsUpdateWithWhereUniqueWithoutNewsletterInput | NewsletterNotificationsUpdateWithWhereUniqueWithoutNewsletterInput[]
    updateMany?: NewsletterNotificationsUpdateManyWithWhereWithoutNewsletterInput | NewsletterNotificationsUpdateManyWithWhereWithoutNewsletterInput[]
    deleteMany?: NewsletterNotificationsScalarWhereInput | NewsletterNotificationsScalarWhereInput[]
  }

  export type NewsletterBatchCreateNestedOneWithoutNewslettersErrorsInput = {
    create?: XOR<NewsletterBatchCreateWithoutNewslettersErrorsInput, NewsletterBatchUncheckedCreateWithoutNewslettersErrorsInput>
    connectOrCreate?: NewsletterBatchCreateOrConnectWithoutNewslettersErrorsInput
    connect?: NewsletterBatchWhereUniqueInput
  }

  export type NewsletterBatchUpdateOneRequiredWithoutNewslettersErrorsNestedInput = {
    create?: XOR<NewsletterBatchCreateWithoutNewslettersErrorsInput, NewsletterBatchUncheckedCreateWithoutNewslettersErrorsInput>
    connectOrCreate?: NewsletterBatchCreateOrConnectWithoutNewslettersErrorsInput
    upsert?: NewsletterBatchUpsertWithoutNewslettersErrorsInput
    connect?: NewsletterBatchWhereUniqueInput
    update?: XOR<XOR<NewsletterBatchUpdateToOneWithWhereWithoutNewslettersErrorsInput, NewsletterBatchUpdateWithoutNewslettersErrorsInput>, NewsletterBatchUncheckedUpdateWithoutNewslettersErrorsInput>
  }

  export type NewsletterMessagesCreateNestedOneWithoutNotificationEventsInput = {
    create?: XOR<NewsletterMessagesCreateWithoutNotificationEventsInput, NewsletterMessagesUncheckedCreateWithoutNotificationEventsInput>
    connectOrCreate?: NewsletterMessagesCreateOrConnectWithoutNotificationEventsInput
    connect?: NewsletterMessagesWhereUniqueInput
  }

  export type NewsletterMessagesUpdateOneRequiredWithoutNotificationEventsNestedInput = {
    create?: XOR<NewsletterMessagesCreateWithoutNotificationEventsInput, NewsletterMessagesUncheckedCreateWithoutNotificationEventsInput>
    connectOrCreate?: NewsletterMessagesCreateOrConnectWithoutNotificationEventsInput
    upsert?: NewsletterMessagesUpsertWithoutNotificationEventsInput
    connect?: NewsletterMessagesWhereUniqueInput
    update?: XOR<XOR<NewsletterMessagesUpdateToOneWithWhereWithoutNotificationEventsInput, NewsletterMessagesUpdateWithoutNotificationEventsInput>, NewsletterMessagesUncheckedUpdateWithoutNotificationEventsInput>
  }

  export type SystemMailsCreateNestedOneWithoutSystemMailNotificationsInput = {
    create?: XOR<SystemMailsCreateWithoutSystemMailNotificationsInput, SystemMailsUncheckedCreateWithoutSystemMailNotificationsInput>
    connectOrCreate?: SystemMailsCreateOrConnectWithoutSystemMailNotificationsInput
    connect?: SystemMailsWhereUniqueInput
  }

  export type SystemMailsUpdateOneRequiredWithoutSystemMailNotificationsNestedInput = {
    create?: XOR<SystemMailsCreateWithoutSystemMailNotificationsInput, SystemMailsUncheckedCreateWithoutSystemMailNotificationsInput>
    connectOrCreate?: SystemMailsCreateOrConnectWithoutSystemMailNotificationsInput
    upsert?: SystemMailsUpsertWithoutSystemMailNotificationsInput
    connect?: SystemMailsWhereUniqueInput
    update?: XOR<XOR<SystemMailsUpdateToOneWithWhereWithoutSystemMailNotificationsInput, SystemMailsUpdateWithoutSystemMailNotificationsInput>, SystemMailsUncheckedUpdateWithoutSystemMailNotificationsInput>
  }

  export type SystemMailNotificationsCreateNestedManyWithoutSystemMailInput = {
    create?: XOR<SystemMailNotificationsCreateWithoutSystemMailInput, SystemMailNotificationsUncheckedCreateWithoutSystemMailInput> | SystemMailNotificationsCreateWithoutSystemMailInput[] | SystemMailNotificationsUncheckedCreateWithoutSystemMailInput[]
    connectOrCreate?: SystemMailNotificationsCreateOrConnectWithoutSystemMailInput | SystemMailNotificationsCreateOrConnectWithoutSystemMailInput[]
    createMany?: SystemMailNotificationsCreateManySystemMailInputEnvelope
    connect?: SystemMailNotificationsWhereUniqueInput | SystemMailNotificationsWhereUniqueInput[]
  }

  export type SystemMailNotificationsUncheckedCreateNestedManyWithoutSystemMailInput = {
    create?: XOR<SystemMailNotificationsCreateWithoutSystemMailInput, SystemMailNotificationsUncheckedCreateWithoutSystemMailInput> | SystemMailNotificationsCreateWithoutSystemMailInput[] | SystemMailNotificationsUncheckedCreateWithoutSystemMailInput[]
    connectOrCreate?: SystemMailNotificationsCreateOrConnectWithoutSystemMailInput | SystemMailNotificationsCreateOrConnectWithoutSystemMailInput[]
    createMany?: SystemMailNotificationsCreateManySystemMailInputEnvelope
    connect?: SystemMailNotificationsWhereUniqueInput | SystemMailNotificationsWhereUniqueInput[]
  }

  export type EnumSystemMailStatusFieldUpdateOperationsInput = {
    set?: $Enums.SystemMailStatus
  }

  export type SystemMailNotificationsUpdateManyWithoutSystemMailNestedInput = {
    create?: XOR<SystemMailNotificationsCreateWithoutSystemMailInput, SystemMailNotificationsUncheckedCreateWithoutSystemMailInput> | SystemMailNotificationsCreateWithoutSystemMailInput[] | SystemMailNotificationsUncheckedCreateWithoutSystemMailInput[]
    connectOrCreate?: SystemMailNotificationsCreateOrConnectWithoutSystemMailInput | SystemMailNotificationsCreateOrConnectWithoutSystemMailInput[]
    upsert?: SystemMailNotificationsUpsertWithWhereUniqueWithoutSystemMailInput | SystemMailNotificationsUpsertWithWhereUniqueWithoutSystemMailInput[]
    createMany?: SystemMailNotificationsCreateManySystemMailInputEnvelope
    set?: SystemMailNotificationsWhereUniqueInput | SystemMailNotificationsWhereUniqueInput[]
    disconnect?: SystemMailNotificationsWhereUniqueInput | SystemMailNotificationsWhereUniqueInput[]
    delete?: SystemMailNotificationsWhereUniqueInput | SystemMailNotificationsWhereUniqueInput[]
    connect?: SystemMailNotificationsWhereUniqueInput | SystemMailNotificationsWhereUniqueInput[]
    update?: SystemMailNotificationsUpdateWithWhereUniqueWithoutSystemMailInput | SystemMailNotificationsUpdateWithWhereUniqueWithoutSystemMailInput[]
    updateMany?: SystemMailNotificationsUpdateManyWithWhereWithoutSystemMailInput | SystemMailNotificationsUpdateManyWithWhereWithoutSystemMailInput[]
    deleteMany?: SystemMailNotificationsScalarWhereInput | SystemMailNotificationsScalarWhereInput[]
  }

  export type SystemMailNotificationsUncheckedUpdateManyWithoutSystemMailNestedInput = {
    create?: XOR<SystemMailNotificationsCreateWithoutSystemMailInput, SystemMailNotificationsUncheckedCreateWithoutSystemMailInput> | SystemMailNotificationsCreateWithoutSystemMailInput[] | SystemMailNotificationsUncheckedCreateWithoutSystemMailInput[]
    connectOrCreate?: SystemMailNotificationsCreateOrConnectWithoutSystemMailInput | SystemMailNotificationsCreateOrConnectWithoutSystemMailInput[]
    upsert?: SystemMailNotificationsUpsertWithWhereUniqueWithoutSystemMailInput | SystemMailNotificationsUpsertWithWhereUniqueWithoutSystemMailInput[]
    createMany?: SystemMailNotificationsCreateManySystemMailInputEnvelope
    set?: SystemMailNotificationsWhereUniqueInput | SystemMailNotificationsWhereUniqueInput[]
    disconnect?: SystemMailNotificationsWhereUniqueInput | SystemMailNotificationsWhereUniqueInput[]
    delete?: SystemMailNotificationsWhereUniqueInput | SystemMailNotificationsWhereUniqueInput[]
    connect?: SystemMailNotificationsWhereUniqueInput | SystemMailNotificationsWhereUniqueInput[]
    update?: SystemMailNotificationsUpdateWithWhereUniqueWithoutSystemMailInput | SystemMailNotificationsUpdateWithWhereUniqueWithoutSystemMailInput[]
    updateMany?: SystemMailNotificationsUpdateManyWithWhereWithoutSystemMailInput | SystemMailNotificationsUpdateManyWithWhereWithoutSystemMailInput[]
    deleteMany?: SystemMailNotificationsScalarWhereInput | SystemMailNotificationsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumSystemMailStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemMailStatus | EnumSystemMailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SystemMailStatus[]
    notIn?: $Enums.SystemMailStatus[]
    not?: NestedEnumSystemMailStatusFilter<$PrismaModel> | $Enums.SystemMailStatus
  }

  export type NestedEnumSystemMailStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemMailStatus | EnumSystemMailStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SystemMailStatus[]
    notIn?: $Enums.SystemMailStatus[]
    not?: NestedEnumSystemMailStatusWithAggregatesFilter<$PrismaModel> | $Enums.SystemMailStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSystemMailStatusFilter<$PrismaModel>
    _max?: NestedEnumSystemMailStatusFilter<$PrismaModel>
  }

  export type NewsletterMessagesCreateWithoutNewsletterBatchInput = {
    id?: string
    messageId: string
    toEmail: string
    created?: Date | string
    formatedContents: string
    notificationEvents?: NewsletterNotificationsCreateNestedManyWithoutNewsletterInput
  }

  export type NewsletterMessagesUncheckedCreateWithoutNewsletterBatchInput = {
    id?: string
    messageId: string
    toEmail: string
    created?: Date | string
    formatedContents: string
    notificationEvents?: NewsletterNotificationsUncheckedCreateNestedManyWithoutNewsletterInput
  }

  export type NewsletterMessagesCreateOrConnectWithoutNewsletterBatchInput = {
    where: NewsletterMessagesWhereUniqueInput
    create: XOR<NewsletterMessagesCreateWithoutNewsletterBatchInput, NewsletterMessagesUncheckedCreateWithoutNewsletterBatchInput>
  }

  export type NewsletterMessagesCreateManyNewsletterBatchInputEnvelope = {
    data: NewsletterMessagesCreateManyNewsletterBatchInput | NewsletterMessagesCreateManyNewsletterBatchInput[]
    skipDuplicates?: boolean
  }

  export type NewsletterErrorsCreateWithoutNewsletterBatchInput = {
    id?: string
    toEmail: string
    error: string
    created?: Date | string
    messageId: string
    formatedContents: string
  }

  export type NewsletterErrorsUncheckedCreateWithoutNewsletterBatchInput = {
    id?: string
    toEmail: string
    error: string
    created?: Date | string
    messageId: string
    formatedContents: string
  }

  export type NewsletterErrorsCreateOrConnectWithoutNewsletterBatchInput = {
    where: NewsletterErrorsWhereUniqueInput
    create: XOR<NewsletterErrorsCreateWithoutNewsletterBatchInput, NewsletterErrorsUncheckedCreateWithoutNewsletterBatchInput>
  }

  export type NewsletterErrorsCreateManyNewsletterBatchInputEnvelope = {
    data: NewsletterErrorsCreateManyNewsletterBatchInput | NewsletterErrorsCreateManyNewsletterBatchInput[]
    skipDuplicates?: boolean
  }

  export type NewsletterMessagesUpsertWithWhereUniqueWithoutNewsletterBatchInput = {
    where: NewsletterMessagesWhereUniqueInput
    update: XOR<NewsletterMessagesUpdateWithoutNewsletterBatchInput, NewsletterMessagesUncheckedUpdateWithoutNewsletterBatchInput>
    create: XOR<NewsletterMessagesCreateWithoutNewsletterBatchInput, NewsletterMessagesUncheckedCreateWithoutNewsletterBatchInput>
  }

  export type NewsletterMessagesUpdateWithWhereUniqueWithoutNewsletterBatchInput = {
    where: NewsletterMessagesWhereUniqueInput
    data: XOR<NewsletterMessagesUpdateWithoutNewsletterBatchInput, NewsletterMessagesUncheckedUpdateWithoutNewsletterBatchInput>
  }

  export type NewsletterMessagesUpdateManyWithWhereWithoutNewsletterBatchInput = {
    where: NewsletterMessagesScalarWhereInput
    data: XOR<NewsletterMessagesUpdateManyMutationInput, NewsletterMessagesUncheckedUpdateManyWithoutNewsletterBatchInput>
  }

  export type NewsletterMessagesScalarWhereInput = {
    AND?: NewsletterMessagesScalarWhereInput | NewsletterMessagesScalarWhereInput[]
    OR?: NewsletterMessagesScalarWhereInput[]
    NOT?: NewsletterMessagesScalarWhereInput | NewsletterMessagesScalarWhereInput[]
    id?: StringFilter<"NewsletterMessages"> | string
    messageId?: StringFilter<"NewsletterMessages"> | string
    toEmail?: StringFilter<"NewsletterMessages"> | string
    newsletterBatchId?: StringFilter<"NewsletterMessages"> | string
    created?: DateTimeFilter<"NewsletterMessages"> | Date | string
    formatedContents?: StringFilter<"NewsletterMessages"> | string
  }

  export type NewsletterErrorsUpsertWithWhereUniqueWithoutNewsletterBatchInput = {
    where: NewsletterErrorsWhereUniqueInput
    update: XOR<NewsletterErrorsUpdateWithoutNewsletterBatchInput, NewsletterErrorsUncheckedUpdateWithoutNewsletterBatchInput>
    create: XOR<NewsletterErrorsCreateWithoutNewsletterBatchInput, NewsletterErrorsUncheckedCreateWithoutNewsletterBatchInput>
  }

  export type NewsletterErrorsUpdateWithWhereUniqueWithoutNewsletterBatchInput = {
    where: NewsletterErrorsWhereUniqueInput
    data: XOR<NewsletterErrorsUpdateWithoutNewsletterBatchInput, NewsletterErrorsUncheckedUpdateWithoutNewsletterBatchInput>
  }

  export type NewsletterErrorsUpdateManyWithWhereWithoutNewsletterBatchInput = {
    where: NewsletterErrorsScalarWhereInput
    data: XOR<NewsletterErrorsUpdateManyMutationInput, NewsletterErrorsUncheckedUpdateManyWithoutNewsletterBatchInput>
  }

  export type NewsletterErrorsScalarWhereInput = {
    AND?: NewsletterErrorsScalarWhereInput | NewsletterErrorsScalarWhereInput[]
    OR?: NewsletterErrorsScalarWhereInput[]
    NOT?: NewsletterErrorsScalarWhereInput | NewsletterErrorsScalarWhereInput[]
    id?: StringFilter<"NewsletterErrors"> | string
    toEmail?: StringFilter<"NewsletterErrors"> | string
    error?: StringFilter<"NewsletterErrors"> | string
    created?: DateTimeFilter<"NewsletterErrors"> | Date | string
    newsletterBatchId?: StringFilter<"NewsletterErrors"> | string
    messageId?: StringFilter<"NewsletterErrors"> | string
    formatedContents?: StringFilter<"NewsletterErrors"> | string
  }

  export type NewsletterNotificationsCreateWithoutNewsletterInput = {
    id?: string
    type: string
    notificationId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
  }

  export type NewsletterNotificationsUncheckedCreateWithoutNewsletterInput = {
    id?: string
    type: string
    notificationId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
  }

  export type NewsletterNotificationsCreateOrConnectWithoutNewsletterInput = {
    where: NewsletterNotificationsWhereUniqueInput
    create: XOR<NewsletterNotificationsCreateWithoutNewsletterInput, NewsletterNotificationsUncheckedCreateWithoutNewsletterInput>
  }

  export type NewsletterNotificationsCreateManyNewsletterInputEnvelope = {
    data: NewsletterNotificationsCreateManyNewsletterInput | NewsletterNotificationsCreateManyNewsletterInput[]
    skipDuplicates?: boolean
  }

  export type NewsletterBatchCreateWithoutNewslettersMessagesInput = {
    id?: string
    siteId: string
    fromEmail: string
    contents: string
    batchId: string
    created?: Date | string
    NewslettersErrors?: NewsletterErrorsCreateNestedManyWithoutNewsletterBatchInput
  }

  export type NewsletterBatchUncheckedCreateWithoutNewslettersMessagesInput = {
    id?: string
    siteId: string
    fromEmail: string
    contents: string
    batchId: string
    created?: Date | string
    NewslettersErrors?: NewsletterErrorsUncheckedCreateNestedManyWithoutNewsletterBatchInput
  }

  export type NewsletterBatchCreateOrConnectWithoutNewslettersMessagesInput = {
    where: NewsletterBatchWhereUniqueInput
    create: XOR<NewsletterBatchCreateWithoutNewslettersMessagesInput, NewsletterBatchUncheckedCreateWithoutNewslettersMessagesInput>
  }

  export type NewsletterNotificationsUpsertWithWhereUniqueWithoutNewsletterInput = {
    where: NewsletterNotificationsWhereUniqueInput
    update: XOR<NewsletterNotificationsUpdateWithoutNewsletterInput, NewsletterNotificationsUncheckedUpdateWithoutNewsletterInput>
    create: XOR<NewsletterNotificationsCreateWithoutNewsletterInput, NewsletterNotificationsUncheckedCreateWithoutNewsletterInput>
  }

  export type NewsletterNotificationsUpdateWithWhereUniqueWithoutNewsletterInput = {
    where: NewsletterNotificationsWhereUniqueInput
    data: XOR<NewsletterNotificationsUpdateWithoutNewsletterInput, NewsletterNotificationsUncheckedUpdateWithoutNewsletterInput>
  }

  export type NewsletterNotificationsUpdateManyWithWhereWithoutNewsletterInput = {
    where: NewsletterNotificationsScalarWhereInput
    data: XOR<NewsletterNotificationsUpdateManyMutationInput, NewsletterNotificationsUncheckedUpdateManyWithoutNewsletterInput>
  }

  export type NewsletterNotificationsScalarWhereInput = {
    AND?: NewsletterNotificationsScalarWhereInput | NewsletterNotificationsScalarWhereInput[]
    OR?: NewsletterNotificationsScalarWhereInput[]
    NOT?: NewsletterNotificationsScalarWhereInput | NewsletterNotificationsScalarWhereInput[]
    id?: StringFilter<"NewsletterNotifications"> | string
    type?: StringFilter<"NewsletterNotifications"> | string
    notificationId?: StringFilter<"NewsletterNotifications"> | string
    messageId?: StringFilter<"NewsletterNotifications"> | string
    rawEvent?: StringFilter<"NewsletterNotifications"> | string
    timestamp?: DateTimeFilter<"NewsletterNotifications"> | Date | string
    created?: DateTimeFilter<"NewsletterNotifications"> | Date | string
  }

  export type NewsletterBatchUpsertWithoutNewslettersMessagesInput = {
    update: XOR<NewsletterBatchUpdateWithoutNewslettersMessagesInput, NewsletterBatchUncheckedUpdateWithoutNewslettersMessagesInput>
    create: XOR<NewsletterBatchCreateWithoutNewslettersMessagesInput, NewsletterBatchUncheckedCreateWithoutNewslettersMessagesInput>
    where?: NewsletterBatchWhereInput
  }

  export type NewsletterBatchUpdateToOneWithWhereWithoutNewslettersMessagesInput = {
    where?: NewsletterBatchWhereInput
    data: XOR<NewsletterBatchUpdateWithoutNewslettersMessagesInput, NewsletterBatchUncheckedUpdateWithoutNewslettersMessagesInput>
  }

  export type NewsletterBatchUpdateWithoutNewslettersMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    NewslettersErrors?: NewsletterErrorsUpdateManyWithoutNewsletterBatchNestedInput
  }

  export type NewsletterBatchUncheckedUpdateWithoutNewslettersMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    NewslettersErrors?: NewsletterErrorsUncheckedUpdateManyWithoutNewsletterBatchNestedInput
  }

  export type NewsletterBatchCreateWithoutNewslettersErrorsInput = {
    id?: string
    siteId: string
    fromEmail: string
    contents: string
    batchId: string
    created?: Date | string
    NewslettersMessages?: NewsletterMessagesCreateNestedManyWithoutNewsletterBatchInput
  }

  export type NewsletterBatchUncheckedCreateWithoutNewslettersErrorsInput = {
    id?: string
    siteId: string
    fromEmail: string
    contents: string
    batchId: string
    created?: Date | string
    NewslettersMessages?: NewsletterMessagesUncheckedCreateNestedManyWithoutNewsletterBatchInput
  }

  export type NewsletterBatchCreateOrConnectWithoutNewslettersErrorsInput = {
    where: NewsletterBatchWhereUniqueInput
    create: XOR<NewsletterBatchCreateWithoutNewslettersErrorsInput, NewsletterBatchUncheckedCreateWithoutNewslettersErrorsInput>
  }

  export type NewsletterBatchUpsertWithoutNewslettersErrorsInput = {
    update: XOR<NewsletterBatchUpdateWithoutNewslettersErrorsInput, NewsletterBatchUncheckedUpdateWithoutNewslettersErrorsInput>
    create: XOR<NewsletterBatchCreateWithoutNewslettersErrorsInput, NewsletterBatchUncheckedCreateWithoutNewslettersErrorsInput>
    where?: NewsletterBatchWhereInput
  }

  export type NewsletterBatchUpdateToOneWithWhereWithoutNewslettersErrorsInput = {
    where?: NewsletterBatchWhereInput
    data: XOR<NewsletterBatchUpdateWithoutNewslettersErrorsInput, NewsletterBatchUncheckedUpdateWithoutNewslettersErrorsInput>
  }

  export type NewsletterBatchUpdateWithoutNewslettersErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    NewslettersMessages?: NewsletterMessagesUpdateManyWithoutNewsletterBatchNestedInput
  }

  export type NewsletterBatchUncheckedUpdateWithoutNewslettersErrorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    siteId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    NewslettersMessages?: NewsletterMessagesUncheckedUpdateManyWithoutNewsletterBatchNestedInput
  }

  export type NewsletterMessagesCreateWithoutNotificationEventsInput = {
    id?: string
    messageId: string
    toEmail: string
    created?: Date | string
    formatedContents: string
    newsletterBatch: NewsletterBatchCreateNestedOneWithoutNewslettersMessagesInput
  }

  export type NewsletterMessagesUncheckedCreateWithoutNotificationEventsInput = {
    id?: string
    messageId: string
    toEmail: string
    newsletterBatchId: string
    created?: Date | string
    formatedContents: string
  }

  export type NewsletterMessagesCreateOrConnectWithoutNotificationEventsInput = {
    where: NewsletterMessagesWhereUniqueInput
    create: XOR<NewsletterMessagesCreateWithoutNotificationEventsInput, NewsletterMessagesUncheckedCreateWithoutNotificationEventsInput>
  }

  export type NewsletterMessagesUpsertWithoutNotificationEventsInput = {
    update: XOR<NewsletterMessagesUpdateWithoutNotificationEventsInput, NewsletterMessagesUncheckedUpdateWithoutNotificationEventsInput>
    create: XOR<NewsletterMessagesCreateWithoutNotificationEventsInput, NewsletterMessagesUncheckedCreateWithoutNotificationEventsInput>
    where?: NewsletterMessagesWhereInput
  }

  export type NewsletterMessagesUpdateToOneWithWhereWithoutNotificationEventsInput = {
    where?: NewsletterMessagesWhereInput
    data: XOR<NewsletterMessagesUpdateWithoutNotificationEventsInput, NewsletterMessagesUncheckedUpdateWithoutNotificationEventsInput>
  }

  export type NewsletterMessagesUpdateWithoutNotificationEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    formatedContents?: StringFieldUpdateOperationsInput | string
    newsletterBatch?: NewsletterBatchUpdateOneRequiredWithoutNewslettersMessagesNestedInput
  }

  export type NewsletterMessagesUncheckedUpdateWithoutNotificationEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    newsletterBatchId?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    formatedContents?: StringFieldUpdateOperationsInput | string
  }

  export type SystemMailsCreateWithoutSystemMailNotificationsInput = {
    id?: string
    messageId: string
    fromEmail: string
    toEmail: string
    subject: string
    contents: string
    created?: Date | string
    updated?: Date | string
    status?: $Enums.SystemMailStatus
  }

  export type SystemMailsUncheckedCreateWithoutSystemMailNotificationsInput = {
    id?: string
    messageId: string
    fromEmail: string
    toEmail: string
    subject: string
    contents: string
    created?: Date | string
    updated?: Date | string
    status?: $Enums.SystemMailStatus
  }

  export type SystemMailsCreateOrConnectWithoutSystemMailNotificationsInput = {
    where: SystemMailsWhereUniqueInput
    create: XOR<SystemMailsCreateWithoutSystemMailNotificationsInput, SystemMailsUncheckedCreateWithoutSystemMailNotificationsInput>
  }

  export type SystemMailsUpsertWithoutSystemMailNotificationsInput = {
    update: XOR<SystemMailsUpdateWithoutSystemMailNotificationsInput, SystemMailsUncheckedUpdateWithoutSystemMailNotificationsInput>
    create: XOR<SystemMailsCreateWithoutSystemMailNotificationsInput, SystemMailsUncheckedCreateWithoutSystemMailNotificationsInput>
    where?: SystemMailsWhereInput
  }

  export type SystemMailsUpdateToOneWithWhereWithoutSystemMailNotificationsInput = {
    where?: SystemMailsWhereInput
    data: XOR<SystemMailsUpdateWithoutSystemMailNotificationsInput, SystemMailsUncheckedUpdateWithoutSystemMailNotificationsInput>
  }

  export type SystemMailsUpdateWithoutSystemMailNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSystemMailStatusFieldUpdateOperationsInput | $Enums.SystemMailStatus
  }

  export type SystemMailsUncheckedUpdateWithoutSystemMailNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    fromEmail?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    contents?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSystemMailStatusFieldUpdateOperationsInput | $Enums.SystemMailStatus
  }

  export type SystemMailNotificationsCreateWithoutSystemMailInput = {
    id?: string
    type: string
    notificationId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
  }

  export type SystemMailNotificationsUncheckedCreateWithoutSystemMailInput = {
    id?: string
    type: string
    notificationId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
  }

  export type SystemMailNotificationsCreateOrConnectWithoutSystemMailInput = {
    where: SystemMailNotificationsWhereUniqueInput
    create: XOR<SystemMailNotificationsCreateWithoutSystemMailInput, SystemMailNotificationsUncheckedCreateWithoutSystemMailInput>
  }

  export type SystemMailNotificationsCreateManySystemMailInputEnvelope = {
    data: SystemMailNotificationsCreateManySystemMailInput | SystemMailNotificationsCreateManySystemMailInput[]
    skipDuplicates?: boolean
  }

  export type SystemMailNotificationsUpsertWithWhereUniqueWithoutSystemMailInput = {
    where: SystemMailNotificationsWhereUniqueInput
    update: XOR<SystemMailNotificationsUpdateWithoutSystemMailInput, SystemMailNotificationsUncheckedUpdateWithoutSystemMailInput>
    create: XOR<SystemMailNotificationsCreateWithoutSystemMailInput, SystemMailNotificationsUncheckedCreateWithoutSystemMailInput>
  }

  export type SystemMailNotificationsUpdateWithWhereUniqueWithoutSystemMailInput = {
    where: SystemMailNotificationsWhereUniqueInput
    data: XOR<SystemMailNotificationsUpdateWithoutSystemMailInput, SystemMailNotificationsUncheckedUpdateWithoutSystemMailInput>
  }

  export type SystemMailNotificationsUpdateManyWithWhereWithoutSystemMailInput = {
    where: SystemMailNotificationsScalarWhereInput
    data: XOR<SystemMailNotificationsUpdateManyMutationInput, SystemMailNotificationsUncheckedUpdateManyWithoutSystemMailInput>
  }

  export type SystemMailNotificationsScalarWhereInput = {
    AND?: SystemMailNotificationsScalarWhereInput | SystemMailNotificationsScalarWhereInput[]
    OR?: SystemMailNotificationsScalarWhereInput[]
    NOT?: SystemMailNotificationsScalarWhereInput | SystemMailNotificationsScalarWhereInput[]
    id?: StringFilter<"SystemMailNotifications"> | string
    type?: StringFilter<"SystemMailNotifications"> | string
    notificationId?: StringFilter<"SystemMailNotifications"> | string
    messageId?: StringFilter<"SystemMailNotifications"> | string
    rawEvent?: StringFilter<"SystemMailNotifications"> | string
    timestamp?: DateTimeFilter<"SystemMailNotifications"> | Date | string
    created?: DateTimeFilter<"SystemMailNotifications"> | Date | string
  }

  export type NewsletterMessagesCreateManyNewsletterBatchInput = {
    id?: string
    messageId: string
    toEmail: string
    created?: Date | string
    formatedContents: string
  }

  export type NewsletterErrorsCreateManyNewsletterBatchInput = {
    id?: string
    toEmail: string
    error: string
    created?: Date | string
    messageId: string
    formatedContents: string
  }

  export type NewsletterMessagesUpdateWithoutNewsletterBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    formatedContents?: StringFieldUpdateOperationsInput | string
    notificationEvents?: NewsletterNotificationsUpdateManyWithoutNewsletterNestedInput
  }

  export type NewsletterMessagesUncheckedUpdateWithoutNewsletterBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    formatedContents?: StringFieldUpdateOperationsInput | string
    notificationEvents?: NewsletterNotificationsUncheckedUpdateManyWithoutNewsletterNestedInput
  }

  export type NewsletterMessagesUncheckedUpdateManyWithoutNewsletterBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    messageId?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    formatedContents?: StringFieldUpdateOperationsInput | string
  }

  export type NewsletterErrorsUpdateWithoutNewsletterBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: StringFieldUpdateOperationsInput | string
    formatedContents?: StringFieldUpdateOperationsInput | string
  }

  export type NewsletterErrorsUncheckedUpdateWithoutNewsletterBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: StringFieldUpdateOperationsInput | string
    formatedContents?: StringFieldUpdateOperationsInput | string
  }

  export type NewsletterErrorsUncheckedUpdateManyWithoutNewsletterBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    toEmail?: StringFieldUpdateOperationsInput | string
    error?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: StringFieldUpdateOperationsInput | string
    formatedContents?: StringFieldUpdateOperationsInput | string
  }

  export type NewsletterNotificationsCreateManyNewsletterInput = {
    id?: string
    type: string
    notificationId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
  }

  export type NewsletterNotificationsUpdateWithoutNewsletterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterNotificationsUncheckedUpdateWithoutNewsletterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterNotificationsUncheckedUpdateManyWithoutNewsletterInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMailNotificationsCreateManySystemMailInput = {
    id?: string
    type: string
    notificationId: string
    rawEvent: string
    timestamp: Date | string
    created?: Date | string
  }

  export type SystemMailNotificationsUpdateWithoutSystemMailInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMailNotificationsUncheckedUpdateWithoutSystemMailInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemMailNotificationsUncheckedUpdateManyWithoutSystemMailInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    notificationId?: StringFieldUpdateOperationsInput | string
    rawEvent?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}