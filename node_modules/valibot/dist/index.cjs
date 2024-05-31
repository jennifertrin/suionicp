"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  BIC_REGEX: () => BIC_REGEX,
  BrandSymbol: () => BrandSymbol,
  CUID2_REGEX: () => CUID2_REGEX,
  DECIMAL_REGEX: () => DECIMAL_REGEX,
  EMAIL_REGEX: () => EMAIL_REGEX,
  EMOJI_REGEX: () => EMOJI_REGEX,
  HEXADECIMAL_REGEX: () => HEXADECIMAL_REGEX,
  HEX_COLOR_REGEX: () => HEX_COLOR_REGEX,
  IMEI_REGEX: () => IMEI_REGEX,
  IPV4_REGEX: () => IPV4_REGEX,
  IPV6_REGEX: () => IPV6_REGEX,
  ISO_DATE_REGEX: () => ISO_DATE_REGEX,
  ISO_DATE_TIME_REGEX: () => ISO_DATE_TIME_REGEX,
  ISO_TIMESTAMP_REGEX: () => ISO_TIMESTAMP_REGEX,
  ISO_TIME_REGEX: () => ISO_TIME_REGEX,
  ISO_TIME_SECOND_REGEX: () => ISO_TIME_SECOND_REGEX,
  ISO_WEEK_REGEX: () => ISO_WEEK_REGEX,
  MAC48_REGEX: () => MAC48_REGEX,
  MAC64_REGEX: () => MAC64_REGEX,
  OCTAL_REGEX: () => OCTAL_REGEX,
  ULID_REGEX: () => ULID_REGEX,
  UUID_REGEX: () => UUID_REGEX,
  ValiError: () => ValiError,
  actionIssue: () => actionIssue,
  actionOutput: () => actionOutput,
  any: () => any,
  anyAsync: () => anyAsync,
  array: () => array,
  arrayAsync: () => arrayAsync,
  bic: () => bic,
  bigint: () => bigint,
  bigintAsync: () => bigintAsync,
  blob: () => blob,
  blobAsync: () => blobAsync,
  boolean: () => boolean,
  booleanAsync: () => booleanAsync,
  brand: () => brand,
  bytes: () => bytes,
  coerce: () => coerce,
  coerceAsync: () => coerceAsync,
  creditCard: () => creditCard,
  cuid2: () => cuid2,
  custom: () => custom,
  customAsync: () => customAsync,
  date: () => date,
  dateAsync: () => dateAsync,
  decimal: () => decimal,
  defaultArgs: () => defaultArgs,
  discriminatedUnion: () => discriminatedUnion,
  discriminatedUnionAsync: () => discriminatedUnionAsync,
  email: () => email,
  emoji: () => emoji,
  endsWith: () => endsWith,
  enumAsync: () => enumAsync,
  enumType: () => enumType,
  enumTypeAsync: () => enumTypeAsync,
  enum_: () => enum_,
  equal: () => equal,
  excludes: () => excludes,
  fallback: () => fallback,
  fallbackAsync: () => fallbackAsync,
  finite: () => finite,
  flatten: () => flatten,
  forward: () => forward,
  getDefault: () => getDefault,
  getDefaultAsync: () => getDefaultAsync,
  getDefaults: () => getDefaults,
  getDefaultsAsync: () => getDefaultsAsync,
  getFallback: () => getFallback,
  getFallbackAsync: () => getFallbackAsync,
  getFallbacks: () => getFallbacks,
  getFallbacksAsync: () => getFallbacksAsync,
  hexColor: () => hexColor,
  hexadecimal: () => hexadecimal,
  imei: () => imei,
  includes: () => includes,
  instance: () => instance,
  instanceAsync: () => instanceAsync,
  integer: () => integer,
  intersect: () => intersect,
  intersection: () => intersection,
  ip: () => ip,
  ipv4: () => ipv4,
  ipv6: () => ipv6,
  is: () => is,
  isLuhnAlgo: () => isLuhnAlgo,
  isoDate: () => isoDate,
  isoDateTime: () => isoDateTime,
  isoTime: () => isoTime,
  isoTimeSecond: () => isoTimeSecond,
  isoTimestamp: () => isoTimestamp,
  isoWeek: () => isoWeek,
  keyof: () => keyof,
  length: () => length,
  literal: () => literal,
  literalAsync: () => literalAsync,
  mac: () => mac,
  mac48: () => mac48,
  mac64: () => mac64,
  map: () => map,
  mapAsync: () => mapAsync,
  maxBytes: () => maxBytes,
  maxLength: () => maxLength,
  maxRange: () => maxRange,
  maxSize: () => maxSize,
  maxValue: () => maxValue,
  merge: () => merge,
  mergeAsync: () => mergeAsync,
  mimeType: () => mimeType,
  minBytes: () => minBytes,
  minLength: () => minLength,
  minRange: () => minRange,
  minSize: () => minSize,
  minValue: () => minValue,
  multipleOf: () => multipleOf,
  nan: () => nan,
  nanAsync: () => nanAsync,
  nativeEnum: () => nativeEnum,
  nativeEnumAsync: () => nativeEnumAsync,
  never: () => never,
  neverAsync: () => neverAsync,
  nonNullable: () => nonNullable,
  nonNullableAsync: () => nonNullableAsync,
  nonNullish: () => nonNullish,
  nonNullishAsync: () => nonNullishAsync,
  nonOptional: () => nonOptional,
  nonOptionalAsync: () => nonOptionalAsync,
  notBytes: () => notBytes,
  notLength: () => notLength,
  notSize: () => notSize,
  notValue: () => notValue,
  nullAsync: () => nullAsync,
  nullType: () => nullType,
  nullTypeAsync: () => nullTypeAsync,
  null_: () => null_,
  nullable: () => nullable,
  nullableAsync: () => nullableAsync,
  nullish: () => nullish,
  nullishAsync: () => nullishAsync,
  number: () => number,
  numberAsync: () => numberAsync,
  object: () => object,
  objectAsync: () => objectAsync,
  octal: () => octal,
  omit: () => omit,
  omitAsync: () => omitAsync,
  optional: () => optional,
  optionalAsync: () => optionalAsync,
  parse: () => parse,
  parseAsync: () => parseAsync,
  parseResult: () => parseResult,
  partial: () => partial,
  partialAsync: () => partialAsync,
  passthrough: () => passthrough,
  passthroughAsync: () => passthroughAsync,
  pick: () => pick,
  pickAsync: () => pickAsync,
  picklist: () => picklist,
  picklistAsync: () => picklistAsync,
  pipeResult: () => pipeResult,
  pipeResultAsync: () => pipeResultAsync,
  record: () => record,
  recordAsync: () => recordAsync,
  recursive: () => recursive,
  recursiveAsync: () => recursiveAsync,
  regex: () => regex,
  required: () => required,
  requiredAsync: () => requiredAsync,
  restAndDefaultArgs: () => restAndDefaultArgs,
  safeInteger: () => safeInteger,
  safeParse: () => safeParse,
  safeParseAsync: () => safeParseAsync,
  schemaIssue: () => schemaIssue,
  set: () => set,
  setAsync: () => setAsync,
  size: () => size,
  special: () => special,
  specialAsync: () => specialAsync,
  startsWith: () => startsWith,
  strict: () => strict,
  strictAsync: () => strictAsync,
  string: () => string,
  stringAsync: () => stringAsync,
  strip: () => strip,
  stripAsync: () => stripAsync,
  symbol: () => symbol,
  symbolAsync: () => symbolAsync,
  toCustom: () => toCustom,
  toCustomAsync: () => toCustomAsync,
  toLowerCase: () => toLowerCase,
  toMaxValue: () => toMaxValue,
  toMinValue: () => toMinValue,
  toTrimmed: () => toTrimmed,
  toTrimmedEnd: () => toTrimmedEnd,
  toTrimmedStart: () => toTrimmedStart,
  toUpperCase: () => toUpperCase,
  transform: () => transform,
  transformAsync: () => transformAsync,
  tuple: () => tuple,
  tupleAsync: () => tupleAsync,
  ulid: () => ulid,
  undefinedAsync: () => undefinedAsync,
  undefinedType: () => undefinedType,
  undefinedTypeAsync: () => undefinedTypeAsync,
  undefined_: () => undefined_,
  union: () => union,
  unionAsync: () => unionAsync,
  unknown: () => unknown,
  unknownAsync: () => unknownAsync,
  unwrap: () => unwrap,
  url: () => url,
  useDefault: () => useDefault,
  uuid: () => uuid,
  value: () => value,
  variant: () => variant,
  variantAsync: () => variantAsync,
  voidAsync: () => voidAsync,
  voidType: () => voidType,
  voidTypeAsync: () => voidTypeAsync,
  void_: () => void_,
  withDefault: () => withDefault
});
module.exports = __toCommonJS(src_exports);

// src/error/flatten/flatten.ts
function flatten(arg1) {
  return (Array.isArray(arg1) ? arg1 : arg1.issues).reduce(
    (flatErrors, issue) => {
      if (issue.path) {
        if (issue.path.every(
          ({ key }) => typeof key === "string" || typeof key === "number"
        )) {
          const path = issue.path.map(({ key }) => key).join(".");
          if (flatErrors.nested[path]) {
            flatErrors.nested[path].push(issue.message);
          } else {
            flatErrors.nested[path] = [issue.message];
          }
        }
      } else {
        if (flatErrors.root) {
          flatErrors.root.push(issue.message);
        } else {
          flatErrors.root = [issue.message];
        }
      }
      return flatErrors;
    },
    { nested: {} }
  );
}

// src/error/ValiError/ValiError.ts
var ValiError = class extends Error {
  issues;
  /**
   * Creates a Valibot error with useful information.
   *
   * @param issues The error issues.
   */
  constructor(issues) {
    super(issues[0].message);
    this.name = "ValiError";
    this.issues = issues;
  }
};

// src/methods/brand/brand.ts
var BrandSymbol = Symbol("brand");
function brand(schema, name) {
  return schema;
}

// src/methods/coerce/coerce.ts
function coerce(schema, action) {
  return {
    ...schema,
    _parse(input, info) {
      return schema._parse(action(input), info);
    }
  };
}

// src/methods/coerce/coerceAsync.ts
function coerceAsync(schema, action) {
  return {
    ...schema,
    async _parse(input, info) {
      return schema._parse(await action(input), info);
    }
  };
}

// src/utils/errorMessage/errorMessage.ts
function errorMessage(message) {
  return typeof message === "function" ? message() : message;
}

// src/utils/actionIssue/actionIssue.ts
function actionIssue(validation, message, input, requirement, path) {
  return {
    issues: [
      {
        validation,
        message: errorMessage(message),
        input,
        requirement,
        path
      }
    ]
  };
}

// src/utils/actionOutput/actionOutput.ts
function actionOutput(output) {
  return { output };
}

// src/utils/defaultArgs/defaultArgs.ts
function defaultArgs(arg1, arg2) {
  return Array.isArray(arg1) ? [void 0, arg1] : [arg1, arg2];
}

// src/utils/parseResult/parseResult.ts
function parseResult(typed, output, issues) {
  return { typed, output, issues };
}

// src/utils/restAndDefaultArgs/restAndDefaultArgs.ts
function restAndDefaultArgs(arg1, arg2, arg3) {
  if (!arg1 || typeof arg1 === "object" && !Array.isArray(arg1)) {
    const [error2, pipe2] = defaultArgs(arg2, arg3);
    return [arg1, error2, pipe2];
  }
  const [error, pipe] = defaultArgs(
    arg1,
    arg2
  );
  return [void 0, error, pipe];
}

// src/utils/isLuhnAlgo/isLuhnAlgo.ts
var NON_DIGIT_REGEX = /\D/gu;
function isLuhnAlgo(input) {
  const number2 = input.replace(NON_DIGIT_REGEX, "");
  let length2 = number2.length;
  let bit = 1;
  let sum = 0;
  while (length2) {
    const value2 = +number2[--length2];
    bit ^= 1;
    sum += bit ? [0, 2, 4, 6, 8, 1, 3, 5, 7, 9][value2] : value2;
  }
  return sum % 10 === 0;
}

// src/utils/pipeResult/utils/pipeIssue/pipeIssue.ts
function pipeIssue(info, issue) {
  return {
    reason: info?.reason,
    validation: issue.validation,
    origin: info?.origin || "value",
    message: issue.message,
    input: issue.input,
    requirement: issue?.requirement,
    path: issue.path,
    abortEarly: info?.abortEarly,
    abortPipeEarly: info?.abortPipeEarly,
    skipPipe: info?.skipPipe
  };
}

// src/utils/pipeResult/utils/pipeInfo/pipeInfo.ts
function pipeInfo(info, reason) {
  return {
    reason,
    origin: info?.origin,
    abortEarly: info?.abortEarly,
    abortPipeEarly: info?.abortPipeEarly,
    skipPipe: info?.skipPipe
  };
}

// src/utils/pipeResult/pipeResult.ts
function pipeResult(input, pipe, parseInfo, reason, issues) {
  let info;
  let output = input;
  if (pipe?.length && !parseInfo?.skipPipe) {
    for (const action of pipe) {
      const result = action._parse(output);
      if (result.issues) {
        info = info || pipeInfo(parseInfo, reason);
        for (const issueInfo of result.issues) {
          const issue = pipeIssue(info, issueInfo);
          issues ? issues.push(issue) : issues = [issue];
        }
        if (info.abortEarly || info.abortPipeEarly) {
          break;
        }
      } else {
        output = result.output;
      }
    }
  }
  return parseResult(true, output, issues);
}

// src/utils/pipeResult/pipeResultAsync.ts
async function pipeResultAsync(input, pipe, parseInfo, reason, issues) {
  let info;
  let output = input;
  if (pipe?.length && !parseInfo?.skipPipe) {
    for (const action of pipe) {
      const result = await action._parse(output);
      if (result.issues) {
        info = info || pipeInfo(parseInfo, reason);
        for (const issueInfo of result.issues) {
          const issue = pipeIssue(info, issueInfo);
          issues ? issues.push(issue) : issues = [issue];
        }
        if (info.abortEarly || info.abortPipeEarly) {
          break;
        }
      } else {
        output = result.output;
      }
    }
  }
  return parseResult(true, output, issues);
}

// src/utils/schemaIssue/schemaIssue.ts
function schemaIssue(info, reason, validation, message, input, path, issues) {
  return {
    typed: false,
    output: input,
    issues: [
      {
        reason,
        validation,
        origin: info?.origin || "value",
        message: errorMessage(message),
        input,
        path,
        issues,
        abortEarly: info?.abortEarly,
        abortPipeEarly: info?.abortPipeEarly,
        skipPipe: info?.skipPipe
      }
    ]
  };
}

// src/methods/getFallback/getFallback.ts
function getFallback(schema, info) {
  return typeof schema.fallback === "function" ? schema.fallback(info) : schema.fallback;
}

// src/methods/getFallback/getFallbackAsync.ts
async function getFallbackAsync(schema, info) {
  return typeof schema.fallback === "function" ? await schema.fallback(info) : schema.fallback;
}

// src/methods/fallback/fallback.ts
function fallback(schema, fallback2) {
  return {
    ...schema,
    fallback: fallback2,
    _parse(input, info) {
      const result = schema._parse(input, info);
      return result.issues ? parseResult(true, getFallback(this, { input, issues: result.issues })) : result;
    }
  };
}

// src/methods/fallback/fallbackAsync.ts
function fallbackAsync(schema, fallback2) {
  return {
    ...schema,
    fallback: fallback2,
    async _parse(input, info) {
      const result = await schema._parse(input, info);
      return result.issues ? parseResult(
        true,
        await getFallbackAsync(this, { input, issues: result.issues })
      ) : result;
    }
  };
}

// src/methods/forward/forward.ts
function forward(validation, pathList) {
  return {
    ...validation,
    _parse(input) {
      const result = validation._parse(input);
      if (result.issues) {
        for (const issue of result.issues) {
          let pathInput = input;
          for (const key of pathList) {
            const pathValue = pathInput[key];
            issue.input = pathValue;
            const pathItem = {
              type: "unknown",
              input: pathInput,
              key,
              value: pathValue
            };
            issue.path ? issue.path.push(pathItem) : issue.path = [pathItem];
            if (!pathValue) {
              break;
            }
            pathInput = pathValue;
          }
        }
      }
      return result;
    }
  };
}

// src/methods/getDefault/getDefault.ts
function getDefault(schema) {
  return typeof schema.default === "function" ? schema.default() : schema.default;
}

// src/methods/getDefault/getDefaultAsync.ts
async function getDefaultAsync(schema) {
  return typeof schema.default === "function" ? await schema.default() : schema.default;
}

// src/methods/getDefaults/getDefaults.ts
function getDefaults(schema) {
  let defaults;
  if (schema.default) {
    defaults = getDefault(schema);
  } else if ("type" in schema) {
    if (schema.type === "object") {
      defaults = {};
      for (const key in schema.entries) {
        defaults[key] = getDefaults(schema.entries[key]);
      }
    } else if (schema.type === "tuple") {
      defaults = [];
      for (let key = 0; key < schema.items.length; key++) {
        defaults.push(getDefaults(schema.items[key]));
      }
    }
  }
  return defaults;
}

// src/methods/getDefaults/getDefaultsAsync.ts
async function getDefaultsAsync(schema) {
  let defaults;
  if (schema.default) {
    defaults = await getDefaultAsync(schema);
  } else if ("type" in schema) {
    if (schema.type === "object") {
      defaults = {};
      for (const key in schema.entries) {
        defaults[key] = await getDefaultsAsync(schema.entries[key]);
      }
    } else if (schema.type === "tuple") {
      defaults = [];
      for (let key = 0; key < schema.items.length; key++) {
        defaults.push(await getDefaultsAsync(schema.items[key]));
      }
    }
  }
  return defaults;
}

// src/methods/getFallbacks/getFallbacks.ts
function getFallbacks(schema) {
  let fallbacks;
  if (schema.fallback) {
    fallbacks = getFallback(schema);
  } else if ("type" in schema) {
    if (schema.type === "object") {
      fallbacks = {};
      for (const key in schema.entries) {
        fallbacks[key] = getFallbacks(schema.entries[key]);
      }
    } else if (schema.type === "tuple") {
      fallbacks = [];
      for (let key = 0; key < schema.items.length; key++) {
        fallbacks.push(getFallbacks(schema.items[key]));
      }
    }
  }
  return fallbacks;
}

// src/methods/getFallbacks/getFallbacksAsync.ts
async function getFallbacksAsync(schema) {
  let fallbacks;
  if (schema.fallback) {
    fallbacks = await getFallbackAsync(schema);
  } else if ("type" in schema) {
    if (schema.type === "object") {
      fallbacks = {};
      await Promise.all(
        Object.entries(schema.entries).map(async ([key, schema2]) => {
          fallbacks[key] = await getFallbacksAsync(schema2);
        })
      );
    } else if (schema.type === "tuple") {
      fallbacks = await Promise.all(
        schema.items.map((schema2) => getFallbacksAsync(schema2))
      );
    }
  }
  return fallbacks;
}

// src/methods/is/is.ts
function is(schema, input, info) {
  return !schema._parse(input, {
    abortEarly: true,
    skipPipe: info?.skipPipe
  }).issues;
}

// src/schemas/any/any.ts
function any(pipe) {
  return {
    type: "any",
    async: false,
    pipe,
    _parse(input, info) {
      return pipeResult(input, this.pipe, info, "any");
    }
  };
}

// src/schemas/any/anyAsync.ts
function anyAsync(pipe) {
  return {
    type: "any",
    async: true,
    pipe,
    async _parse(input, info) {
      return pipeResultAsync(input, this.pipe, info, "any");
    }
  };
}

// src/schemas/array/array.ts
function array(item, arg2, arg3) {
  const [message = "Invalid type", pipe] = defaultArgs(arg2, arg3);
  return {
    type: "array",
    async: false,
    item,
    message,
    pipe,
    _parse(input, info) {
      if (!Array.isArray(input)) {
        return schemaIssue(info, "type", "array", this.message, input);
      }
      let typed = true;
      let issues;
      const output = [];
      for (let key = 0; key < input.length; key++) {
        const value2 = input[key];
        const result = this.item._parse(value2, info);
        if (result.issues) {
          const pathItem = {
            type: "array",
            input,
            key,
            value: value2
          };
          for (const issue of result.issues) {
            if (issue.path) {
              issue.path.unshift(pathItem);
            } else {
              issue.path = [pathItem];
            }
            issues?.push(issue);
          }
          if (!issues) {
            issues = result.issues;
          }
          if (info?.abortEarly) {
            typed = false;
            break;
          }
        }
        if (!result.typed) {
          typed = false;
        }
        output.push(result.output);
      }
      if (typed) {
        return pipeResult(
          output,
          this.pipe,
          info,
          "array",
          issues
        );
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/array/arrayAsync.ts
function arrayAsync(item, arg2, arg3) {
  const [message = "Invalid type", pipe] = defaultArgs(arg2, arg3);
  return {
    type: "array",
    async: true,
    item,
    message,
    pipe,
    async _parse(input, info) {
      if (!Array.isArray(input)) {
        return schemaIssue(info, "type", "array", this.message, input);
      }
      let typed = true;
      let issues;
      const output = [];
      await Promise.all(
        input.map(async (value2, key) => {
          if (!(info?.abortEarly && issues)) {
            const result = await this.item._parse(value2, info);
            if (!(info?.abortEarly && issues)) {
              if (result.issues) {
                const pathItem = {
                  type: "array",
                  input,
                  key,
                  value: value2
                };
                for (const issue of result.issues) {
                  if (issue.path) {
                    issue.path.unshift(pathItem);
                  } else {
                    issue.path = [pathItem];
                  }
                  issues?.push(issue);
                }
                if (!issues) {
                  issues = result.issues;
                }
                if (info?.abortEarly) {
                  typed = false;
                  throw null;
                }
              }
              if (!result.typed) {
                typed = false;
              }
              output[key] = result.output;
            }
          }
        })
      ).catch(() => null);
      if (typed) {
        return pipeResultAsync(
          output,
          this.pipe,
          info,
          "array",
          issues
        );
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/bigint/bigint.ts
function bigint(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "bigint",
    async: false,
    message,
    pipe,
    _parse(input, info) {
      if (typeof input !== "bigint") {
        return schemaIssue(info, "type", "bigint", this.message, input);
      }
      return pipeResult(input, this.pipe, info, "bigint");
    }
  };
}

// src/schemas/bigint/bigintAsync.ts
function bigintAsync(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "bigint",
    async: true,
    message,
    pipe,
    async _parse(input, info) {
      if (typeof input !== "bigint") {
        return schemaIssue(info, "type", "bigint", this.message, input);
      }
      return pipeResultAsync(input, this.pipe, info, "bigint");
    }
  };
}

// src/schemas/blob/blob.ts
function blob(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "blob",
    async: false,
    message,
    pipe,
    _parse(input, info) {
      if (!(input instanceof Blob)) {
        return schemaIssue(info, "type", "blob", this.message, input);
      }
      return pipeResult(input, this.pipe, info, "blob");
    }
  };
}

// src/schemas/blob/blobAsync.ts
function blobAsync(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "blob",
    async: true,
    message,
    pipe,
    async _parse(input, info) {
      if (!(input instanceof Blob)) {
        return schemaIssue(info, "type", "blob", this.message, input);
      }
      return pipeResultAsync(input, this.pipe, info, "blob");
    }
  };
}

// src/schemas/boolean/boolean.ts
function boolean(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "boolean",
    async: false,
    message,
    pipe,
    _parse(input, info) {
      if (typeof input !== "boolean") {
        return schemaIssue(info, "type", "boolean", this.message, input);
      }
      return pipeResult(input, this.pipe, info, "boolean");
    }
  };
}

// src/schemas/boolean/booleanAsync.ts
function booleanAsync(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "boolean",
    async: true,
    message,
    pipe,
    async _parse(input, info) {
      if (typeof input !== "boolean") {
        return schemaIssue(info, "type", "boolean", this.message, input);
      }
      return pipeResultAsync(input, this.pipe, info, "boolean");
    }
  };
}

// src/schemas/date/date.ts
function date(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "date",
    async: false,
    message,
    pipe,
    _parse(input, info) {
      if (!(input instanceof Date) || isNaN(input.getTime())) {
        return schemaIssue(info, "type", "date", this.message, input);
      }
      return pipeResult(input, this.pipe, info, "date");
    }
  };
}

// src/schemas/date/dateAsync.ts
function dateAsync(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "date",
    async: true,
    message,
    pipe,
    async _parse(input, info) {
      if (!(input instanceof Date) || isNaN(input.getTime())) {
        return schemaIssue(info, "type", "date", this.message, input);
      }
      return pipeResultAsync(input, this.pipe, info, "date");
    }
  };
}

// src/schemas/enum/enum.ts
function enum_(enum_2, message = "Invalid type") {
  return {
    type: "enum",
    async: false,
    enum: enum_2,
    message,
    _parse(input, info) {
      if (!Object.values(this.enum).includes(input)) {
        return schemaIssue(info, "type", "enum", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}
var nativeEnum = enum_;

// src/schemas/enum/enumAsync.ts
function enumAsync(enum_2, message = "Invalid type") {
  return {
    type: "enum",
    async: true,
    enum: enum_2,
    message,
    async _parse(input, info) {
      if (!Object.values(this.enum).includes(input)) {
        return schemaIssue(info, "type", "enum", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}
var nativeEnumAsync = enumAsync;

// src/schemas/instance/instance.ts
function instance(class_, arg2, arg3) {
  const [message = "Invalid type", pipe] = defaultArgs(arg2, arg3);
  return {
    type: "instance",
    async: false,
    class: class_,
    message,
    pipe,
    _parse(input, info) {
      if (!(input instanceof this.class)) {
        return schemaIssue(info, "type", "instance", this.message, input);
      }
      return pipeResult(input, this.pipe, info, "instance");
    }
  };
}

// src/schemas/instance/instanceAsync.ts
function instanceAsync(class_, arg2, arg3) {
  const [message = "Invalid type", pipe] = defaultArgs(arg2, arg3);
  return {
    type: "instance",
    async: true,
    class: class_,
    message,
    pipe,
    async _parse(input, info) {
      if (!(input instanceof this.class)) {
        return schemaIssue(info, "type", "instance", this.message, input);
      }
      return pipeResultAsync(input, this.pipe, info, "instance");
    }
  };
}

// src/schemas/intersect/utils/mergeOutputs/mergeOutputs.ts
function mergeOutputs(output1, output2) {
  if (typeof output1 === typeof output2) {
    if (output1 === output2 || output1 instanceof Date && output2 instanceof Date && +output1 === +output2) {
      return { output: output1 };
    }
    if (Array.isArray(output1) && Array.isArray(output2)) {
      if (output1.length === output2.length) {
        const array2 = [];
        for (let index = 0; index < output1.length; index++) {
          const result = mergeOutputs(output1[index], output2[index]);
          if (result.invalid) {
            return result;
          }
          array2.push(result.output);
        }
        return { output: array2 };
      }
      return { invalid: true };
    }
    if (output1 && output2 && output1.constructor === Object && output2.constructor === Object) {
      const object2 = { ...output1, ...output2 };
      for (const key in output1) {
        if (key in output2) {
          const result = mergeOutputs(output1[key], output2[key]);
          if (result.invalid) {
            return result;
          }
          object2[key] = result.output;
        }
      }
      return { output: object2 };
    }
  }
  return { invalid: true };
}

// src/schemas/intersect/intersect.ts
function intersect(options, arg2, arg3) {
  const [message = "Invalid type", pipe] = defaultArgs(arg2, arg3);
  return {
    type: "intersect",
    async: false,
    options,
    message,
    pipe,
    _parse(input, info) {
      let typed = true;
      let issues;
      let output;
      const outputs = [];
      for (const schema of this.options) {
        const result = schema._parse(input, info);
        if (result.issues) {
          if (issues) {
            for (const issue of result.issues) {
              issues.push(issue);
            }
          } else {
            issues = result.issues;
          }
          if (info?.abortEarly) {
            typed = false;
            break;
          }
        }
        if (!result.typed) {
          typed = false;
        }
        outputs.push(result.output);
      }
      if (typed) {
        output = outputs[0];
        for (let index = 1; index < outputs.length; index++) {
          const result = mergeOutputs(output, outputs[index]);
          if (result.invalid) {
            return schemaIssue(info, "type", "intersect", this.message, input);
          }
          output = result.output;
        }
        return pipeResult(output, this.pipe, info, "intersect", issues);
      }
      return parseResult(false, output, issues);
    }
  };
}
var intersection = intersect;

// src/schemas/literal/literal.ts
function literal(literal2, message = "Invalid type") {
  return {
    type: "literal",
    async: false,
    literal: literal2,
    message,
    _parse(input, info) {
      if (input !== this.literal) {
        return schemaIssue(info, "type", "literal", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}

// src/schemas/literal/literalAsync.ts
function literalAsync(literal2, message = "Invalid type") {
  return {
    type: "literal",
    async: true,
    literal: literal2,
    message,
    async _parse(input, info) {
      if (input !== this.literal) {
        return schemaIssue(info, "type", "literal", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}

// src/schemas/map/map.ts
function map(key, value2, arg3, arg4) {
  const [message = "Invalid type", pipe] = defaultArgs(arg3, arg4);
  return {
    type: "map",
    async: false,
    key,
    value: value2,
    message,
    pipe,
    _parse(input, info) {
      if (!(input instanceof Map)) {
        return schemaIssue(info, "type", "map", this.message, input);
      }
      let typed = true;
      let issues;
      const output = /* @__PURE__ */ new Map();
      for (const [inputKey, inputValue] of input.entries()) {
        let pathItem;
        const keyResult = this.key._parse(inputKey, {
          origin: "key",
          abortEarly: info?.abortEarly,
          abortPipeEarly: info?.abortPipeEarly,
          skipPipe: info?.skipPipe
        });
        if (keyResult.issues) {
          pathItem = {
            type: "map",
            input,
            key: inputKey,
            value: inputValue
          };
          for (const issue of keyResult.issues) {
            if (issue.path) {
              issue.path.unshift(pathItem);
            } else {
              issue.path = [pathItem];
            }
            issues?.push(issue);
          }
          if (!issues) {
            issues = keyResult.issues;
          }
          if (info?.abortEarly) {
            typed = false;
            break;
          }
        }
        const valueResult = this.value._parse(inputValue, info);
        if (valueResult.issues) {
          pathItem = pathItem || {
            type: "map",
            input,
            key: inputKey,
            value: inputValue
          };
          for (const issue of valueResult.issues) {
            if (issue.path) {
              issue.path.unshift(pathItem);
            } else {
              issue.path = [pathItem];
            }
            issues?.push(issue);
          }
          if (!issues) {
            issues = valueResult.issues;
          }
          if (info?.abortEarly) {
            typed = false;
            break;
          }
        }
        if (!keyResult.typed || !valueResult.typed) {
          typed = false;
        }
        output.set(keyResult.output, valueResult.output);
      }
      if (typed) {
        return pipeResult(output, this.pipe, info, "map", issues);
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/map/mapAsync.ts
function mapAsync(key, value2, arg3, arg4) {
  const [message = "Invalid type", pipe] = defaultArgs(arg3, arg4);
  return {
    type: "map",
    async: true,
    key,
    value: value2,
    message,
    pipe,
    async _parse(input, info) {
      if (!(input instanceof Map)) {
        return schemaIssue(info, "type", "map", this.message, input);
      }
      let typed = true;
      let issues;
      const output = /* @__PURE__ */ new Map();
      await Promise.all(
        Array.from(input.entries()).map(async ([inputKey, inputValue]) => {
          let pathItem;
          const [keyResult, valueResult] = await Promise.all(
            [
              { schema: this.key, value: inputKey, origin: "key" },
              { schema: this.value, value: inputValue, origin: "value" }
            ].map(async ({ schema, value: value3, origin }) => {
              if (!(info?.abortEarly && issues)) {
                const result = await schema._parse(value3, {
                  origin,
                  abortEarly: info?.abortEarly,
                  abortPipeEarly: info?.abortPipeEarly,
                  skipPipe: info?.skipPipe
                });
                if (!(info?.abortEarly && issues)) {
                  if (result.issues) {
                    pathItem = pathItem || {
                      type: "map",
                      input,
                      key: inputKey,
                      value: inputValue
                    };
                    for (const issue of result.issues) {
                      if (issue.path) {
                        issue.path.unshift(pathItem);
                      } else {
                        issue.path = [pathItem];
                      }
                      issues?.push(issue);
                    }
                    if (!issues) {
                      issues = result.issues;
                    }
                    if (info?.abortEarly) {
                      throw null;
                    }
                  }
                  return result;
                }
              }
            })
          ).catch(() => []);
          if (!keyResult?.typed || !valueResult?.typed) {
            typed = false;
          }
          if (keyResult && valueResult) {
            output.set(keyResult.output, valueResult.output);
          }
        })
      );
      if (typed) {
        return pipeResultAsync(output, this.pipe, info, "map", issues);
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/nan/nan.ts
function nan(message = "Invalid type") {
  return {
    type: "nan",
    async: false,
    message,
    _parse(input, info) {
      if (!Number.isNaN(input)) {
        return schemaIssue(info, "type", "nan", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}

// src/schemas/nan/nanAsync.ts
function nanAsync(message = "Invalid type") {
  return {
    type: "nan",
    async: true,
    message,
    async _parse(input, info) {
      if (!Number.isNaN(input)) {
        return schemaIssue(info, "type", "nan", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}

// src/schemas/never/never.ts
function never(message = "Invalid type") {
  return {
    type: "never",
    async: false,
    message,
    _parse(input, info) {
      return schemaIssue(info, "type", "never", this.message, input);
    }
  };
}

// src/schemas/never/neverAsync.ts
function neverAsync(message = "Invalid type") {
  return {
    type: "never",
    async: true,
    message,
    async _parse(input, info) {
      return schemaIssue(info, "type", "never", this.message, input);
    }
  };
}

// src/schemas/nonNullable/nonNullable.ts
function nonNullable(wrapped, message = "Invalid type") {
  return {
    type: "non_nullable",
    async: false,
    wrapped,
    message,
    _parse(input, info) {
      if (input === null) {
        return schemaIssue(info, "type", "non_nullable", this.message, input);
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/nonNullable/nonNullableAsync.ts
function nonNullableAsync(wrapped, message = "Invalid type") {
  return {
    type: "non_nullable",
    async: true,
    wrapped,
    message,
    async _parse(input, info) {
      if (input === null) {
        return schemaIssue(info, "type", "non_nullable", this.message, input);
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/nonNullish/nonNullish.ts
function nonNullish(wrapped, message = "Invalid type") {
  return {
    type: "non_nullish",
    async: false,
    wrapped,
    message,
    _parse(input, info) {
      if (input === null || input === void 0) {
        return schemaIssue(info, "type", "non_nullish", this.message, input);
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/nonNullish/nonNullishAsync.ts
function nonNullishAsync(wrapped, message = "Invalid type") {
  return {
    type: "non_nullish",
    async: true,
    wrapped,
    message,
    async _parse(input, info) {
      if (input === null || input === void 0) {
        return schemaIssue(info, "type", "non_nullish", this.message, input);
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/nonOptional/nonOptional.ts
function nonOptional(wrapped, message = "Invalid type") {
  return {
    type: "non_optional",
    async: false,
    wrapped,
    message,
    _parse(input, info) {
      if (input === void 0) {
        return schemaIssue(info, "type", "non_optional", this.message, input);
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/nonOptional/nonOptionalAsync.ts
function nonOptionalAsync(wrapped, message = "Invalid type") {
  return {
    type: "non_optional",
    async: true,
    wrapped,
    message,
    async _parse(input, info) {
      if (input === void 0) {
        return schemaIssue(info, "type", "non_optional", this.message, input);
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/nullable/nullable.ts
function nullable(wrapped, default_) {
  return {
    type: "nullable",
    async: false,
    wrapped,
    default: default_,
    _parse(input, info) {
      if (input === null) {
        const override = getDefault(this);
        if (override === void 0) {
          return parseResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/nullable/nullableAsync.ts
function nullableAsync(wrapped, default_) {
  return {
    type: "nullable",
    async: true,
    wrapped,
    default: default_,
    async _parse(input, info) {
      if (input === null) {
        const override = await getDefaultAsync(this);
        if (override === void 0) {
          return parseResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/nullish/nullish.ts
function nullish(wrapped, default_) {
  return {
    type: "nullish",
    async: false,
    wrapped,
    default: default_,
    _parse(input, info) {
      if (input === null || input === void 0) {
        const override = getDefault(this);
        if (override === void 0) {
          return parseResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/nullish/nullishAsync.ts
function nullishAsync(wrapped, default_) {
  return {
    type: "nullish",
    async: true,
    wrapped,
    default: default_,
    async _parse(input, info) {
      if (input === null || input === void 0) {
        const override = await getDefaultAsync(this);
        if (override === void 0) {
          return parseResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/null/null.ts
function null_(message = "Invalid type") {
  return {
    type: "null",
    async: false,
    message,
    _parse(input, info) {
      if (input !== null) {
        return schemaIssue(info, "type", "null", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}
var nullType = null_;

// src/schemas/null/nullAsync.ts
function nullAsync(message = "Invalid type") {
  return {
    type: "null",
    async: true,
    message,
    async _parse(input, info) {
      if (input !== null) {
        return schemaIssue(info, "type", "null", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}
var nullTypeAsync = nullAsync;

// src/schemas/number/number.ts
function number(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "number",
    async: false,
    message,
    pipe,
    _parse(input, info) {
      if (typeof input !== "number" || isNaN(input)) {
        return schemaIssue(info, "type", "number", this.message, input);
      }
      return pipeResult(input, this.pipe, info, "number");
    }
  };
}

// src/schemas/number/numberAsync.ts
function numberAsync(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "number",
    async: true,
    message,
    pipe,
    async _parse(input, info) {
      if (typeof input !== "number" || isNaN(input)) {
        return schemaIssue(info, "type", "number", this.message, input);
      }
      return pipeResultAsync(input, this.pipe, info, "number");
    }
  };
}

// src/schemas/object/object.ts
function object(entries, arg2, arg3, arg4) {
  const [rest, message = "Invalid type", pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  let cachedEntries;
  return {
    type: "object",
    async: false,
    entries,
    rest,
    message,
    pipe,
    _parse(input, info) {
      if (!input || typeof input !== "object") {
        return schemaIssue(info, "type", "object", this.message, input);
      }
      cachedEntries = cachedEntries || Object.entries(this.entries);
      let typed = true;
      let issues;
      const output = {};
      for (const [key, schema] of cachedEntries) {
        const value2 = input[key];
        const result = schema._parse(value2, info);
        if (result.issues) {
          const pathItem = {
            type: "object",
            input,
            key,
            value: value2
          };
          for (const issue of result.issues) {
            if (issue.path) {
              issue.path.unshift(pathItem);
            } else {
              issue.path = [pathItem];
            }
            issues?.push(issue);
          }
          if (!issues) {
            issues = result.issues;
          }
          if (info?.abortEarly) {
            typed = false;
            break;
          }
        }
        if (!result.typed) {
          typed = false;
        }
        if (result.output !== void 0 || key in input) {
          output[key] = result.output;
        }
      }
      if (this.rest && !(info?.abortEarly && issues)) {
        for (const key in input) {
          if (!(key in this.entries)) {
            const value2 = input[key];
            const result = this.rest._parse(value2, info);
            if (result.issues) {
              const pathItem = {
                type: "object",
                input,
                key,
                value: value2
              };
              for (const issue of result.issues) {
                if (issue.path) {
                  issue.path.unshift(pathItem);
                } else {
                  issue.path = [pathItem];
                }
                issues?.push(issue);
              }
              if (!issues) {
                issues = result.issues;
              }
              if (info?.abortEarly) {
                typed = false;
                break;
              }
            }
            if (!result.typed) {
              typed = false;
            }
            output[key] = result.output;
          }
        }
      }
      if (typed) {
        return pipeResult(
          output,
          this.pipe,
          info,
          "object",
          issues
        );
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/object/objectAsync.ts
function objectAsync(entries, arg2, arg3, arg4) {
  const [rest, message = "Invalid type", pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  let cachedEntries;
  return {
    type: "object",
    async: true,
    entries,
    rest,
    message,
    pipe,
    async _parse(input, info) {
      if (!input || typeof input !== "object") {
        return schemaIssue(info, "type", "object", this.message, input);
      }
      cachedEntries = cachedEntries || Object.entries(this.entries);
      let typed = true;
      let issues;
      const output = {};
      await Promise.all([
        Promise.all(
          cachedEntries.map(async ([key, schema]) => {
            if (!(info?.abortEarly && issues)) {
              const value2 = input[key];
              const result = await schema._parse(value2, info);
              if (!(info?.abortEarly && issues)) {
                if (result.issues) {
                  const pathItem = {
                    type: "object",
                    input,
                    key,
                    value: value2
                  };
                  for (const issue of result.issues) {
                    if (issue.path) {
                      issue.path.unshift(pathItem);
                    } else {
                      issue.path = [pathItem];
                    }
                    issues?.push(issue);
                  }
                  if (!issues) {
                    issues = result.issues;
                  }
                  if (info?.abortEarly) {
                    typed = false;
                    throw null;
                  }
                }
                if (!result.typed) {
                  typed = false;
                }
                if (result.output !== void 0 || key in input) {
                  output[key] = result.output;
                }
              }
            }
          })
        ),
        this.rest && Promise.all(
          Object.entries(input).map(async ([key, value2]) => {
            if (!(info?.abortEarly && issues)) {
              if (!(key in this.entries)) {
                const result = await this.rest._parse(value2, info);
                if (!(info?.abortEarly && issues)) {
                  if (result.issues) {
                    const pathItem = {
                      type: "object",
                      input,
                      key,
                      value: value2
                    };
                    for (const issue of result.issues) {
                      if (issue.path) {
                        issue.path.unshift(pathItem);
                      } else {
                        issue.path = [pathItem];
                      }
                      issues?.push(issue);
                    }
                    if (!issues) {
                      issues = result.issues;
                    }
                    if (info?.abortEarly) {
                      typed = false;
                      throw null;
                    }
                  }
                  if (!result.typed) {
                    typed = false;
                  }
                  output[key] = result.output;
                }
              }
            }
          })
        )
      ]).catch(() => null);
      if (typed) {
        return pipeResultAsync(
          output,
          this.pipe,
          info,
          "object",
          issues
        );
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/optional/optional.ts
function optional(wrapped, default_) {
  return {
    type: "optional",
    async: false,
    wrapped,
    default: default_,
    _parse(input, info) {
      if (input === void 0) {
        const override = getDefault(this);
        if (override === void 0) {
          return parseResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/optional/optionalAsync.ts
function optionalAsync(wrapped, default_) {
  return {
    type: "optional",
    async: true,
    wrapped,
    default: default_,
    async _parse(input, info) {
      if (input === void 0) {
        const override = await getDefaultAsync(this);
        if (override === void 0) {
          return parseResult(true, input);
        }
        input = override;
      }
      return this.wrapped._parse(input, info);
    }
  };
}

// src/schemas/picklist/picklist.ts
function picklist(options, message = "Invalid type") {
  return {
    type: "picklist",
    async: false,
    options,
    message,
    _parse(input, info) {
      if (!this.options.includes(input)) {
        return schemaIssue(info, "type", "picklist", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}
var enumType = picklist;

// src/schemas/picklist/picklistAsync.ts
function picklistAsync(options, message = "Invalid type") {
  return {
    type: "picklist",
    async: true,
    options,
    message,
    async _parse(input, info) {
      if (!this.options.includes(input)) {
        return schemaIssue(info, "type", "picklist", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}
var enumTypeAsync = picklistAsync;

// src/schemas/string/string.ts
function string(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "string",
    async: false,
    message,
    pipe,
    _parse(input, info) {
      if (typeof input !== "string") {
        return schemaIssue(info, "type", "string", this.message, input);
      }
      return pipeResult(input, this.pipe, info, "string");
    }
  };
}

// src/schemas/string/stringAsync.ts
function stringAsync(arg1, arg2) {
  const [message = "Invalid type", pipe] = defaultArgs(arg1, arg2);
  return {
    type: "string",
    async: true,
    message,
    pipe,
    async _parse(input, info) {
      if (typeof input !== "string") {
        return schemaIssue(info, "type", "string", this.message, input);
      }
      return pipeResultAsync(input, this.pipe, info, "string");
    }
  };
}

// src/schemas/record/utils/recordArgs/recordArgs.ts
function recordArgs(arg1, arg2, arg3, arg4) {
  if (typeof arg2 === "object" && !Array.isArray(arg2)) {
    const [message2, pipe2] = defaultArgs(arg3, arg4);
    return [arg1, arg2, message2, pipe2];
  }
  const [message, pipe] = defaultArgs(
    arg2,
    arg3
  );
  return [string(), arg1, message, pipe];
}

// src/schemas/record/values.ts
var BLOCKED_KEYS = ["__proto__", "prototype", "constructor"];

// src/schemas/record/record.ts
function record(arg1, arg2, arg3, arg4) {
  const [key, value2, message = "Invalid type", pipe] = recordArgs(arg1, arg2, arg3, arg4);
  return {
    type: "record",
    async: false,
    key,
    value: value2,
    message,
    pipe,
    _parse(input, info) {
      if (!input || typeof input !== "object") {
        return schemaIssue(info, "type", "record", this.message, input);
      }
      let typed = true;
      let issues;
      const output = {};
      for (const [inputKey, inputValue] of Object.entries(input)) {
        if (!BLOCKED_KEYS.includes(inputKey)) {
          let pathItem;
          const keyResult = this.key._parse(inputKey, {
            origin: "key",
            abortEarly: info?.abortEarly,
            abortPipeEarly: info?.abortPipeEarly,
            skipPipe: info?.skipPipe
          });
          if (keyResult.issues) {
            pathItem = {
              type: "record",
              input,
              key: inputKey,
              value: inputValue
            };
            for (const issue of keyResult.issues) {
              issue.path = [pathItem];
              issues?.push(issue);
            }
            if (!issues) {
              issues = keyResult.issues;
            }
            if (info?.abortEarly) {
              typed = false;
              break;
            }
          }
          const valueResult = this.value._parse(inputValue, info);
          if (valueResult.issues) {
            pathItem = pathItem || {
              type: "record",
              input,
              key: inputKey,
              value: inputValue
            };
            for (const issue of valueResult.issues) {
              if (issue.path) {
                issue.path.unshift(pathItem);
              } else {
                issue.path = [pathItem];
              }
              issues?.push(issue);
            }
            if (!issues) {
              issues = valueResult.issues;
            }
            if (info?.abortEarly) {
              typed = false;
              break;
            }
          }
          if (!keyResult.typed || !valueResult.typed) {
            typed = false;
          }
          if (keyResult.typed) {
            output[keyResult.output] = valueResult.output;
          }
        }
      }
      if (typed) {
        return pipeResult(
          output,
          this.pipe,
          info,
          "record",
          issues
        );
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/record/recordAsync.ts
function recordAsync(arg1, arg2, arg3, arg4) {
  const [key, value2, message = "Invalid type", pipe] = recordArgs(arg1, arg2, arg3, arg4);
  return {
    type: "record",
    async: true,
    key,
    value: value2,
    message,
    pipe,
    async _parse(input, info) {
      if (!input || typeof input !== "object") {
        return schemaIssue(info, "type", "record", this.message, input);
      }
      let typed = true;
      let issues;
      const output = {};
      await Promise.all(
        // Note: `Object.entries(...)` converts each key to a string
        Object.entries(input).map(async ([inputKey, inputValue]) => {
          if (!BLOCKED_KEYS.includes(inputKey)) {
            let pathItem;
            const [keyResult, valueResult] = await Promise.all(
              [
                { schema: this.key, value: inputKey, origin: "key" },
                { schema: this.value, value: inputValue, origin: "value" }
              ].map(async ({ schema, value: value3, origin }) => {
                if (!(info?.abortEarly && issues)) {
                  const result = await schema._parse(value3, {
                    origin,
                    abortEarly: info?.abortEarly,
                    abortPipeEarly: info?.abortPipeEarly,
                    skipPipe: info?.skipPipe
                  });
                  if (!(info?.abortEarly && issues)) {
                    if (result.issues) {
                      pathItem = pathItem || {
                        type: "record",
                        input,
                        key: inputKey,
                        value: inputValue
                      };
                      for (const issue of result.issues) {
                        if (issue.path) {
                          issue.path.unshift(pathItem);
                        } else {
                          issue.path = [pathItem];
                        }
                        issues?.push(issue);
                      }
                      if (!issues) {
                        issues = result.issues;
                      }
                      if (info?.abortEarly) {
                        throw null;
                      }
                    }
                    return result;
                  }
                }
              })
            ).catch(() => []);
            if (!keyResult?.typed || !valueResult?.typed) {
              typed = false;
            }
            if (keyResult?.typed && valueResult) {
              output[keyResult.output] = valueResult.output;
            }
          }
        })
      );
      if (typed) {
        return pipeResultAsync(
          output,
          this.pipe,
          info,
          "record",
          issues
        );
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/recursive/recursive.ts
function recursive(getter) {
  return {
    type: "recursive",
    async: false,
    getter,
    _parse(input, info) {
      return this.getter()._parse(input, info);
    }
  };
}

// src/schemas/recursive/recursiveAsync.ts
function recursiveAsync(getter) {
  return {
    type: "recursive",
    async: true,
    getter,
    async _parse(input, info) {
      return this.getter()._parse(input, info);
    }
  };
}

// src/schemas/set/set.ts
function set(value2, arg2, arg3) {
  const [message = "Invalid type", pipe] = defaultArgs(arg2, arg3);
  return {
    type: "set",
    async: false,
    value: value2,
    message,
    pipe,
    _parse(input, info) {
      if (!(input instanceof Set)) {
        return schemaIssue(info, "type", "set", this.message, input);
      }
      let key = 0;
      let typed = true;
      let issues;
      const output = /* @__PURE__ */ new Set();
      for (const inputValue of input) {
        const result = this.value._parse(inputValue, info);
        if (result.issues) {
          const pathItem = {
            type: "set",
            input,
            key,
            value: inputValue
          };
          for (const issue of result.issues) {
            if (issue.path) {
              issue.path.unshift(pathItem);
            } else {
              issue.path = [pathItem];
            }
            issues?.push(issue);
          }
          if (!issues) {
            issues = result.issues;
          }
          if (info?.abortEarly) {
            typed = false;
            break;
          }
        }
        if (!result.typed) {
          typed = false;
        }
        output.add(result.output);
        key++;
      }
      if (typed) {
        return pipeResult(output, this.pipe, info, "set", issues);
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/set/setAsync.ts
function setAsync(value2, arg2, arg3) {
  const [message = "Invalid type", pipe] = defaultArgs(arg2, arg3);
  return {
    type: "set",
    async: true,
    value: value2,
    message,
    pipe,
    async _parse(input, info) {
      if (!(input instanceof Set)) {
        return schemaIssue(info, "type", "set", this.message, input);
      }
      let typed = true;
      let issues;
      const output = /* @__PURE__ */ new Set();
      await Promise.all(
        Array.from(input.values()).map(async (inputValue, key) => {
          if (!(info?.abortEarly && issues)) {
            const result = await this.value._parse(inputValue, info);
            if (!(info?.abortEarly && issues)) {
              if (result.issues) {
                const pathItem = {
                  type: "set",
                  input,
                  key,
                  value: inputValue
                };
                for (const issue of result.issues) {
                  if (issue.path) {
                    issue.path.unshift(pathItem);
                  } else {
                    issue.path = [pathItem];
                  }
                  issues?.push(issue);
                }
                if (!issues) {
                  issues = result.issues;
                }
                if (info?.abortEarly) {
                  typed = false;
                  throw null;
                }
              }
              if (!result.typed) {
                typed = false;
              }
              output.add(result.output);
            }
          }
        })
      ).catch(() => null);
      if (typed) {
        return pipeResultAsync(output, this.pipe, info, "set", issues);
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/special/special.ts
function special(check, arg2, arg3) {
  const [message = "Invalid type", pipe] = defaultArgs(arg2, arg3);
  return {
    type: "special",
    async: false,
    check,
    message,
    pipe,
    _parse(input, info) {
      if (!this.check(input)) {
        return schemaIssue(info, "type", "special", this.message, input);
      }
      return pipeResult(input, this.pipe, info, "special");
    }
  };
}

// src/schemas/special/specialAsync.ts
function specialAsync(check, arg2, arg3) {
  const [message = "Invalid type", pipe] = defaultArgs(arg2, arg3);
  return {
    type: "special",
    async: true,
    check,
    message,
    pipe,
    async _parse(input, info) {
      if (!await this.check(input)) {
        return schemaIssue(info, "type", "special", this.message, input);
      }
      return pipeResultAsync(input, this.pipe, info, "special");
    }
  };
}

// src/schemas/symbol/symbol.ts
function symbol(message = "Invalid type") {
  return {
    type: "symbol",
    async: false,
    message,
    _parse(input, info) {
      if (typeof input !== "symbol") {
        return schemaIssue(info, "type", "symbol", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}

// src/schemas/symbol/symbolAsync.ts
function symbolAsync(message = "Invalid type") {
  return {
    type: "symbol",
    async: true,
    message,
    async _parse(input, info) {
      if (typeof input !== "symbol") {
        return schemaIssue(info, "type", "symbol", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}

// src/schemas/tuple/tuple.ts
function tuple(items, arg2, arg3, arg4) {
  const [rest, message = "Invalid type", pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return {
    type: "tuple",
    async: false,
    items,
    rest,
    message,
    pipe,
    _parse(input, info) {
      if (!Array.isArray(input) || this.items.length > input.length) {
        return schemaIssue(info, "type", "tuple", this.message, input);
      }
      let typed = true;
      let issues;
      const output = [];
      for (let key = 0; key < this.items.length; key++) {
        const value2 = input[key];
        const result = this.items[key]._parse(value2, info);
        if (result.issues) {
          const pathItem = {
            type: "tuple",
            input,
            key,
            value: value2
          };
          for (const issue of result.issues) {
            if (issue.path) {
              issue.path.unshift(pathItem);
            } else {
              issue.path = [pathItem];
            }
            issues?.push(issue);
          }
          if (!issues) {
            issues = result.issues;
          }
          if (info?.abortEarly) {
            typed = false;
            break;
          }
        }
        if (!result.typed) {
          typed = false;
        }
        output[key] = result.output;
      }
      if (this.rest && !(info?.abortEarly && issues)) {
        for (let key = this.items.length; key < input.length; key++) {
          const value2 = input[key];
          const result = this.rest._parse(value2, info);
          if (result.issues) {
            const pathItem = {
              type: "tuple",
              input,
              key,
              value: value2
            };
            for (const issue of result.issues) {
              if (issue.path) {
                issue.path.unshift(pathItem);
              } else {
                issue.path = [pathItem];
              }
              issues?.push(issue);
            }
            if (!issues) {
              issues = result.issues;
            }
            if (info?.abortEarly) {
              typed = false;
              break;
            }
          }
          if (!result.typed) {
            typed = false;
          }
          output[key] = result.output;
        }
      }
      if (typed) {
        return pipeResult(
          output,
          this.pipe,
          info,
          "tuple",
          issues
        );
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/tuple/tupleAsync.ts
function tupleAsync(items, arg2, arg3, arg4) {
  const [rest, message = "Invalid type", pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return {
    type: "tuple",
    async: true,
    items,
    rest,
    message,
    pipe,
    async _parse(input, info) {
      if (!Array.isArray(input) || this.items.length > input.length) {
        return schemaIssue(info, "type", "tuple", this.message, input);
      }
      let typed = true;
      let issues;
      const output = [];
      await Promise.all([
        // Parse schema of each tuple item
        Promise.all(
          this.items.map(async (schema, key) => {
            if (!(info?.abortEarly && issues)) {
              const value2 = input[key];
              const result = await schema._parse(value2, info);
              if (!(info?.abortEarly && issues)) {
                if (result.issues) {
                  const pathItem = {
                    type: "tuple",
                    input,
                    key,
                    value: value2
                  };
                  for (const issue of result.issues) {
                    if (issue.path) {
                      issue.path.unshift(pathItem);
                    } else {
                      issue.path = [pathItem];
                    }
                    issues?.push(issue);
                  }
                  if (!issues) {
                    issues = result.issues;
                  }
                  if (info?.abortEarly) {
                    typed = false;
                    throw null;
                  }
                }
                if (!result.typed) {
                  typed = false;
                }
                output[key] = result.output;
              }
            }
          })
        ),
        // If necessary parse schema of each rest item
        this.rest && Promise.all(
          input.slice(this.items.length).map(async (value2, index) => {
            if (!(info?.abortEarly && issues)) {
              const key = this.items.length + index;
              const result = await this.rest._parse(value2, info);
              if (!(info?.abortEarly && issues)) {
                if (result.issues) {
                  const pathItem = {
                    type: "tuple",
                    input,
                    key,
                    value: value2
                  };
                  for (const issue of result.issues) {
                    if (issue.path) {
                      issue.path.unshift(pathItem);
                    } else {
                      issue.path = [pathItem];
                    }
                    issues?.push(issue);
                  }
                  if (!issues) {
                    issues = result.issues;
                  }
                  if (info?.abortEarly) {
                    typed = false;
                    throw null;
                  }
                }
                if (!result.typed) {
                  typed = false;
                }
                output[key] = result.output;
              }
            }
          })
        )
      ]).catch(() => null);
      if (typed) {
        return pipeResultAsync(
          output,
          this.pipe,
          info,
          "tuple",
          issues
        );
      }
      return parseResult(false, output, issues);
    }
  };
}

// src/schemas/undefined/undefined.ts
function undefined_(message = "Invalid type") {
  return {
    type: "undefined",
    async: false,
    message,
    _parse(input, info) {
      if (typeof input !== "undefined") {
        return schemaIssue(info, "type", "undefined", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}
var undefinedType = undefined_;

// src/schemas/undefined/undefinedAsync.ts
function undefinedAsync(message = "Invalid type") {
  return {
    type: "undefined",
    async: true,
    message,
    async _parse(input, info) {
      if (typeof input !== "undefined") {
        return schemaIssue(info, "type", "undefined", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}
var undefinedTypeAsync = undefinedAsync;

// src/schemas/union/union.ts
function union(options, arg2, arg3) {
  const [message = "Invalid type", pipe] = defaultArgs(arg2, arg3);
  return {
    type: "union",
    async: false,
    options,
    message,
    pipe,
    _parse(input, info) {
      let issues;
      let output;
      for (const schema of this.options) {
        const result = schema._parse(input, info);
        if (result.issues) {
          if (issues) {
            for (const issue of result.issues) {
              issues.push(issue);
            }
          } else {
            issues = result.issues;
          }
        } else {
          output = [result.output];
          break;
        }
      }
      if (output) {
        return pipeResult(output[0], this.pipe, info, "union");
      }
      return schemaIssue(
        info,
        "type",
        "union",
        this.message,
        input,
        void 0,
        issues
      );
    }
  };
}

// src/schemas/union/unionAsync.ts
function unionAsync(options, arg2, arg3) {
  const [message = "Invalid type", pipe] = defaultArgs(arg2, arg3);
  return {
    type: "union",
    async: true,
    options,
    message,
    pipe,
    async _parse(input, info) {
      let issues;
      let output;
      for (const schema of this.options) {
        const result = await schema._parse(input, info);
        if (result.issues) {
          if (issues) {
            for (const issue of result.issues) {
              issues.push(issue);
            }
          } else {
            issues = result.issues;
          }
        } else {
          output = [result.output];
          break;
        }
      }
      if (output) {
        return pipeResultAsync(output[0], this.pipe, info, "union");
      }
      return schemaIssue(
        info,
        "type",
        "union",
        this.message,
        input,
        void 0,
        issues
      );
    }
  };
}

// src/schemas/unknown/unknown.ts
function unknown(pipe) {
  return {
    type: "unknown",
    async: false,
    pipe,
    _parse(input, info) {
      return pipeResult(input, this.pipe, info, "unknown");
    }
  };
}

// src/schemas/unknown/unknownAsync.ts
function unknownAsync(pipe) {
  return {
    type: "unknown",
    async: true,
    pipe,
    async _parse(input, info) {
      return pipeResultAsync(input, this.pipe, info, "unknown");
    }
  };
}

// src/schemas/variant/variant.ts
function variant(key, options, arg3, arg4) {
  const [message = "Invalid type", pipe] = defaultArgs(arg3, arg4);
  return {
    type: "variant",
    async: false,
    key,
    options,
    message,
    pipe,
    _parse(input, info) {
      if (!input || typeof input !== "object") {
        return schemaIssue(info, "type", "variant", this.message, input);
      }
      if (this.key in input) {
        let issues;
        let output;
        const parseOptions = (options2) => {
          for (const schema of options2) {
            if (schema.type === "object") {
              const keyResult = schema.entries[this.key]._parse(
                input[this.key],
                info
              );
              if (!keyResult.issues) {
                const dataResult = schema._parse(input, info);
                if (dataResult.issues) {
                  issues = dataResult.issues;
                } else {
                  output = [dataResult.output];
                  break;
                }
              }
            } else if (schema.type === "variant") {
              parseOptions(schema.options);
              if (output) {
                break;
              }
            }
          }
        };
        parseOptions(this.options);
        if (output) {
          return pipeResult(output[0], this.pipe, info, "variant");
        }
        if (issues) {
          return parseResult(false, output, issues);
        }
      }
      return schemaIssue(info, "type", "variant", this.message, input, [
        {
          type: "object",
          input,
          key: this.key,
          value: void 0
        }
      ]);
    }
  };
}
var discriminatedUnion = variant;

// src/schemas/variant/variantAsync.ts
function variantAsync(key, options, arg3, arg4) {
  const [message = "Invalid type", pipe] = defaultArgs(arg3, arg4);
  return {
    type: "variant",
    async: true,
    key,
    options,
    message,
    pipe,
    async _parse(input, info) {
      if (!input || typeof input !== "object") {
        return schemaIssue(info, "type", "variant", this.message, input);
      }
      if (this.key in input) {
        let issues;
        let output;
        const parseOptions = async (options2) => {
          for (const schema of options2) {
            if (schema.type === "object") {
              const keyResult = await schema.entries[this.key]._parse(
                input[this.key],
                info
              );
              if (!keyResult.issues) {
                const dataResult = await schema._parse(input, info);
                if (dataResult.issues) {
                  issues = dataResult.issues;
                } else {
                  output = [dataResult.output];
                  break;
                }
              }
            } else if (schema.type === "variant") {
              await parseOptions(schema.options);
              if (output) {
                break;
              }
            }
          }
        };
        await parseOptions(this.options);
        if (output) {
          return pipeResultAsync(output[0], this.pipe, info, "variant");
        }
        if (issues) {
          return parseResult(false, output, issues);
        }
      }
      return schemaIssue(info, "type", "variant", this.message, input, [
        {
          type: "object",
          input,
          key: this.key,
          value: void 0
        }
      ]);
    }
  };
}
var discriminatedUnionAsync = variantAsync;

// src/schemas/void/void.ts
function void_(message = "Invalid type") {
  return {
    type: "void",
    async: false,
    message,
    _parse(input, info) {
      if (typeof input !== "undefined") {
        return schemaIssue(info, "type", "void", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}
var voidType = void_;

// src/schemas/void/voidAsync.ts
function voidAsync(message = "Invalid type") {
  return {
    type: "void",
    async: true,
    message,
    async _parse(input, info) {
      if (typeof input !== "undefined") {
        return schemaIssue(info, "type", "void", this.message, input);
      }
      return parseResult(true, input);
    }
  };
}
var voidTypeAsync = voidAsync;

// src/methods/keyof/keyof.ts
function keyof(schema) {
  return picklist(
    Object.keys(schema.entries)
  );
}

// src/methods/merge/merge.ts
function merge(schemas, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return object(
    schemas.reduce(
      (entries, schema) => ({ ...entries, ...schema.entries }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/merge/mergeAsync.ts
function mergeAsync(schemas, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return objectAsync(
    schemas.reduce(
      (entries, schema) => ({ ...entries, ...schema.entries }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/omit/omit.ts
function omit(schema, keys, arg3, arg4, arg5) {
  const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
  return object(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => keys.includes(key) ? entries : { ...entries, [key]: schema2 },
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/omit/omitAsync.ts
function omitAsync(schema, keys, arg3, arg4, arg5) {
  const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
  return objectAsync(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => keys.includes(key) ? entries : { ...entries, [key]: schema2 },
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/parse/parse.ts
function parse(schema, input, info) {
  const result = schema._parse(input, info);
  if (result.issues) {
    throw new ValiError(result.issues);
  }
  return result.output;
}

// src/methods/parse/parseAsync.ts
async function parseAsync(schema, input, info) {
  const result = await schema._parse(input, info);
  if (result.issues) {
    throw new ValiError(result.issues);
  }
  return result.output;
}

// src/methods/partial/partial.ts
function partial(schema, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return object(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => ({
        ...entries,
        [key]: optional(schema2)
      }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/partial/partialAsync.ts
function partialAsync(schema, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return objectAsync(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => ({
        ...entries,
        [key]: optionalAsync(schema2)
      }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/passthrough/passthrough.ts
function passthrough(schema) {
  return {
    ...schema,
    _parse(input, info) {
      const result = schema._parse(input, info);
      if (result.typed) {
        result.output = { ...input, ...result.output };
      }
      return result;
    }
  };
}

// src/methods/passthrough/passthroughAsync.ts
function passthroughAsync(schema) {
  return {
    ...schema,
    async _parse(input, info) {
      const result = await schema._parse(input, info);
      if (result.typed) {
        result.output = { ...input, ...result.output };
      }
      return result;
    }
  };
}

// src/methods/pick/pick.ts
function pick(schema, keys, arg3, arg4, arg5) {
  const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
  return object(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => keys.includes(key) ? { ...entries, [key]: schema2 } : entries,
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/pick/pickAsync.ts
function pickAsync(schema, keys, arg3, arg4, arg5) {
  const [rest, message, pipe] = restAndDefaultArgs(arg3, arg4, arg5);
  return objectAsync(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => keys.includes(key) ? { ...entries, [key]: schema2 } : entries,
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/required/required.ts
function required(schema, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return object(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => ({
        ...entries,
        [key]: nonOptional(schema2)
      }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/required/requiredAsync.ts
function requiredAsync(schema, arg2, arg3, arg4) {
  const [rest, message, pipe] = restAndDefaultArgs(arg2, arg3, arg4);
  return objectAsync(
    Object.entries(schema.entries).reduce(
      (entries, [key, schema2]) => ({
        ...entries,
        [key]: nonOptionalAsync(schema2)
      }),
      {}
    ),
    rest,
    message,
    pipe
  );
}

// src/methods/safeParse/safeParse.ts
function safeParse(schema, input, info) {
  const result = schema._parse(input, info);
  return {
    typed: result.typed,
    success: !result.issues,
    data: result.output,
    output: result.output,
    error: result.issues && new ValiError(result.issues),
    issues: result.issues
  };
}

// src/methods/safeParse/safeParseAsync.ts
async function safeParseAsync(schema, input, info) {
  const result = await schema._parse(input, info);
  return {
    typed: result.typed,
    success: !result.issues,
    data: result.output,
    output: result.output,
    error: result.issues && new ValiError(result.issues),
    issues: result.issues
  };
}

// src/methods/strict/strict.ts
function strict(schema, message = "Invalid keys") {
  return {
    ...schema,
    _parse(input, info) {
      const result = schema._parse(input, info);
      return !result.issues && Object.keys(input).some((key) => !(key in schema.entries)) ? schemaIssue(info, "object", "strict", message, input) : result;
    }
  };
}

// src/methods/strict/strictAsync.ts
function strictAsync(schema, message = "Invalid keys") {
  return {
    ...schema,
    message,
    async _parse(input, info) {
      const result = await schema._parse(input, info);
      return !result.issues && Object.keys(input).some((key) => !(key in schema.entries)) ? schemaIssue(info, "object", "strict", message, input) : result;
    }
  };
}

// src/methods/strip/strip.ts
function strip(schema) {
  let cachedKeys;
  return {
    ...schema,
    _parse(input, info) {
      const result = schema._parse(input, info);
      if (result.typed) {
        cachedKeys = cachedKeys || Object.keys(schema.entries);
        const output = {};
        for (const key of cachedKeys) {
          output[key] = result.output[key];
        }
        result.output = output;
      }
      return result;
    }
  };
}

// src/methods/strip/stripAsync.ts
function stripAsync(schema) {
  let cachedKeys;
  return {
    ...schema,
    async _parse(input, info) {
      const result = await schema._parse(input, info);
      if (result.typed) {
        cachedKeys = cachedKeys || Object.keys(schema.entries);
        const output = {};
        for (const key of cachedKeys) {
          output[key] = result.output[key];
        }
        result.output = output;
      }
      return result;
    }
  };
}

// src/methods/transform/transform.ts
function transform(schema, action, arg1) {
  return {
    ...schema,
    _parse(input, info) {
      const result = schema._parse(input, info);
      if (result.typed) {
        result.output = action(result.output, { issues: result.issues });
        if (result.issues || !arg1) {
          return result;
        }
        if (Array.isArray(arg1)) {
          return pipeResult(result.output, arg1, info, typeof result.output);
        }
        return arg1._parse(result.output, info);
      }
      return result;
    }
  };
}

// src/methods/transform/transformAsync.ts
function transformAsync(schema, action, arg1) {
  return {
    ...schema,
    async: true,
    async _parse(input, info) {
      const result = await schema._parse(input, info);
      if (result.typed) {
        result.output = await action(result.output, { issues: result.issues });
        if (result.issues || !arg1) {
          return result;
        }
        if (Array.isArray(arg1)) {
          return pipeResultAsync(
            result.output,
            arg1,
            info,
            typeof result.output
          );
        }
        return arg1._parse(result.output, info);
      }
      return result;
    }
  };
}

// src/methods/unwrap/unwrap.ts
function unwrap(schema) {
  return schema.wrapped;
}

// src/methods/withDefault/withDefault.ts
function withDefault(schema, value2) {
  return {
    ...schema,
    _parse(input, info) {
      return schema._parse(
        input === void 0 ? typeof value2 === "function" ? value2() : value2 : input,
        info
      );
    }
  };
}
var useDefault = withDefault;

// src/regex.ts
var BIC_REGEX = /^[A-Z]{6}(?!00)[A-Z\d]{2}(?:[A-Z\d]{3})?$/u;
var CUID2_REGEX = /^[a-z][\da-z]*$/u;
var DECIMAL_REGEX = /^\d+$/u;
var EMAIL_REGEX = /^[\w+-]+(?:\.[\w+-]+)*@[\da-z]+(?:[.-][\da-z]+)*\.[a-z]{2,}$/iu;
var EMOJI_REGEX = /^[\p{Extended_Pictographic}\p{Emoji_Component}]+$/u;
var HEXADECIMAL_REGEX = /^(0h|0x)?[\da-f]+$/iu;
var HEX_COLOR_REGEX = /^#([\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/iu;
var IMEI_REGEX = /^\d{2}(?:[ /|-]?\d{6}){2}[ /|-]?\d$/u;
var IPV4_REGEX = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive
  /^(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])(?:\.(?:(?:[1-9]|1\d|2[0-4])?\d|25[0-5])){3}$/u
);
var IPV6_REGEX = /^(?:(?:[\da-f]{1,4}:){7}[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,7}:|(?:[\da-f]{1,4}:){1,6}:[\da-f]{1,4}|(?:[\da-f]{1,4}:){1,5}(?::[\da-f]{1,4}){1,2}|(?:[\da-f]{1,4}:){1,4}(?::[\da-f]{1,4}){1,3}|(?:[\da-f]{1,4}:){1,3}(?::[\da-f]{1,4}){1,4}|(?:[\da-f]{1,4}:){1,2}(?::[\da-f]{1,4}){1,5}|[\da-f]{1,4}:(?::[\da-f]{1,4}){1,6}|:(?:(?::[\da-f]{1,4}){1,7}|:)|fe80:(?::[\da-f]{0,4}){0,4}%[\da-z]+|::(?:f{4}(?::0{1,4})?:)?(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d)|(?:[\da-f]{1,4}:){1,4}:(?:(?:25[0-5]|(?:2[0-4]|1?\d)?\d)\.){3}(?:25[0-5]|(?:2[0-4]|1?\d)?\d))$/iu;
var ISO_DATE_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])$/u;
var ISO_DATE_TIME_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])T(?:0\d|1\d|2[0-3]):[0-5]\d$/u;
var ISO_TIME_REGEX = /^(?:0\d|1\d|2[0-3]):[0-5]\d$/u;
var ISO_TIME_SECOND_REGEX = /^(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}$/u;
var ISO_TIMESTAMP_REGEX = /^\d{4}-(?:0[1-9]|1[0-2])-(?:[12]\d|0[1-9]|3[01])T(?:0\d|1\d|2[0-3])(?::[0-5]\d){2}\.\d{3}Z$/u;
var ISO_WEEK_REGEX = /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])$/u;
var MAC48_REGEX = /^(?:[\da-f]{2}:){5}[\da-f]{2}$|^(?:[\da-f]{2}-){5}[\da-f]{2}$|^(?:[\da-f]{4}\.){2}[\da-f]{4}$/iu;
var MAC64_REGEX = /^(?:[\da-f]{2}:){7}[\da-f]{2}$|^(?:[\da-f]{2}-){7}[\da-f]{2}$|^(?:[\da-f]{4}\.){3}[\da-f]{4}$|^(?:[\da-f]{4}:){3}[\da-f]{4}$/iu;
var OCTAL_REGEX = /^(0o)?[0-7]+$/iu;
var ULID_REGEX = /^[\da-hjkmnp-tv-z]{26}$/iu;
var UUID_REGEX = /^[\da-f]{8}(?:-[\da-f]{4}){3}-[\da-f]{12}$/iu;

// src/transformations/toCustom/toCustom.ts
function toCustom(action) {
  return {
    type: "to_custom",
    async: false,
    _parse(input) {
      return actionOutput(action(input));
    }
  };
}

// src/transformations/toCustom/toCustomAsync.ts
function toCustomAsync(action) {
  return {
    type: "to_custom",
    async: true,
    async _parse(input) {
      return actionOutput(await action(input));
    }
  };
}

// src/transformations/toLowerCase/toLowerCase.ts
function toLowerCase() {
  return {
    type: "to_lower_case",
    async: false,
    _parse(input) {
      return actionOutput(input.toLocaleLowerCase());
    }
  };
}

// src/transformations/toMaxValue/toMaxValue.ts
function toMaxValue(requirement) {
  return {
    type: "to_max_value",
    async: false,
    requirement,
    _parse(input) {
      return actionOutput(input > this.requirement ? this.requirement : input);
    }
  };
}

// src/transformations/toMinValue/toMinValue.ts
function toMinValue(requirement) {
  return {
    type: "to_min_value",
    async: false,
    requirement,
    _parse(input) {
      return actionOutput(input < this.requirement ? this.requirement : input);
    }
  };
}

// src/transformations/toTrimmed/toTrimmed.ts
function toTrimmed() {
  return {
    type: "to_trimmed",
    async: false,
    _parse(input) {
      return actionOutput(input.trim());
    }
  };
}

// src/transformations/toTrimmedEnd/toTrimmedEnd.ts
function toTrimmedEnd() {
  return {
    type: "to_trimmed_end",
    async: false,
    _parse(input) {
      return actionOutput(input.trimEnd());
    }
  };
}

// src/transformations/toTrimmedStart/toTrimmedStart.ts
function toTrimmedStart() {
  return {
    type: "to_trimmed_start",
    async: false,
    _parse(input) {
      return actionOutput(input.trimStart());
    }
  };
}

// src/transformations/toUpperCase/toUpperCase.ts
function toUpperCase() {
  return {
    type: "to_upper_case",
    async: false,
    _parse(input) {
      return actionOutput(input.toUpperCase());
    }
  };
}

// src/validations/bic/bic.ts
function bic(message = "Invalid BIC") {
  return {
    type: "bic",
    async: false,
    message,
    requirement: BIC_REGEX,
    _parse(input) {
      return !this.requirement.test(input.toUpperCase()) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/bytes/bytes.ts
function bytes(requirement, message = "Invalid byte length") {
  return {
    type: "bytes",
    async: false,
    message,
    requirement,
    _parse(input) {
      return new TextEncoder().encode(input).length !== this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/creditCard/creditCard.ts
var SANITIZE_REGEX = /[- ]+/gu;
var PROVIDER_REGEX_LIST = [
  // American Express
  /^3[47]\d{13}$/u,
  // Diners Club
  /^3(?:0[0-5]|[68]\d)\d{11}$/u,
  // Discover
  /^6(?:011|5\d{2})\d{12,15}$/u,
  // JCB
  /^(?:2131|1800|35\d{3})\d{11}$/u,
  // Mastercard
  /^5[1-5]\d{2}|(222\d|22[3-9]\d|2[3-6]\d{2}|27[01]\d|2720)\d{12}$/u,
  // UnionPay
  /^(6[27]\d{14}|81\d{14,17})$/u,
  // Visa
  /^4\d{12}(?:\d{3,6})?$/u
];
function creditCard(message = "Invalid credit card") {
  return {
    type: "credit_card",
    async: false,
    message,
    requirement: (input) => {
      const sanitized = input.replace(SANITIZE_REGEX, "");
      return PROVIDER_REGEX_LIST.some((regex2) => regex2.test(sanitized)) && isLuhnAlgo(sanitized);
    },
    _parse(input) {
      return !this.requirement(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/cuid2/cuid2.ts
function cuid2(message = "Invalid Cuid2") {
  return {
    type: "cuid2",
    async: false,
    message,
    requirement: CUID2_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/custom/custom.ts
function custom(requirement, message = "Invalid input") {
  return {
    type: "custom",
    async: false,
    message,
    requirement,
    _parse(input) {
      return !this.requirement(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/custom/customAsync.ts
function customAsync(requirement, message = "Invalid input") {
  return {
    type: "custom",
    async: true,
    message,
    requirement,
    async _parse(input) {
      return !await this.requirement(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/decimal/decimal.ts
function decimal(message = "Invalid decimal") {
  return {
    type: "decimal",
    async: false,
    message,
    requirement: DECIMAL_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/email/email.ts
function email(message = "Invalid email") {
  return {
    type: "email",
    async: false,
    message,
    requirement: EMAIL_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/emoji/emoji.ts
function emoji(message = "Invalid emoji") {
  return {
    type: "emoji",
    async: false,
    message,
    requirement: EMOJI_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/endsWith/endsWith.ts
function endsWith(requirement, message = "Invalid end") {
  return {
    type: "ends_with",
    async: false,
    message,
    requirement,
    _parse(input) {
      return !input.endsWith(this.requirement) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/equal/equal.ts
function equal(requirement, message = "Invalid input") {
  return {
    type: "equal",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input !== this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/excludes/excludes.ts
function excludes(requirement, message = "Invalid content") {
  return {
    type: "excludes",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input.includes(this.requirement) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/finite/finite.ts
function finite(message = "Invalid finite number") {
  return {
    type: "finite",
    async: false,
    message,
    requirement: Number.isFinite,
    _parse(input) {
      return !this.requirement(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/hexadecimal/hexadecimal.ts
function hexadecimal(message = "Invalid hexadecimal") {
  return {
    type: "hexadecimal",
    async: false,
    message,
    requirement: HEXADECIMAL_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/hexColor/hexColor.ts
function hexColor(message = "Invalid hex color") {
  return {
    type: "hex_color",
    async: false,
    message,
    requirement: HEX_COLOR_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/imei/imei.ts
function imei(message = "Invalid IMEI") {
  return {
    type: "imei",
    async: false,
    message,
    requirement: [IMEI_REGEX, isLuhnAlgo],
    _parse(input) {
      return !this.requirement[0].test(input) || !this.requirement[1](input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/includes/includes.ts
function includes(requirement, message = "Invalid content") {
  return {
    type: "includes",
    async: false,
    message,
    requirement,
    _parse(input) {
      return !input.includes(requirement) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/integer/integer.ts
function integer(message = "Invalid integer") {
  return {
    type: "integer",
    async: false,
    message,
    requirement: Number.isInteger,
    _parse(input) {
      return !this.requirement(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/ip/ip.ts
function ip(message = "Invalid IP") {
  return {
    type: "ip",
    async: false,
    message,
    requirement: [IPV4_REGEX, IPV6_REGEX],
    _parse(input) {
      return !this.requirement[0].test(input) && !this.requirement[1].test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/ipv4/ipv4.ts
function ipv4(message = "Invalid IPv4") {
  return {
    type: "ipv4",
    async: false,
    message,
    requirement: IPV4_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/ipv6/ipv6.ts
function ipv6(message = "Invalid IPv6") {
  return {
    type: "ipv6",
    async: false,
    message,
    requirement: IPV6_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/isoDate/isoDate.ts
function isoDate(message = "Invalid date") {
  return {
    type: "iso_date",
    async: false,
    message,
    requirement: ISO_DATE_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/isoDateTime/isoDateTime.ts
function isoDateTime(message = "Invalid date-time") {
  return {
    type: "iso_date_time",
    async: false,
    message,
    requirement: ISO_DATE_TIME_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/isoTime/isoTime.ts
function isoTime(message = "Invalid time") {
  return {
    type: "iso_time",
    async: false,
    message,
    requirement: ISO_TIME_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/isoTimeSecond/isoTimeSecond.ts
function isoTimeSecond(message = "Invalid time second") {
  return {
    type: "iso_time_second",
    async: false,
    message,
    requirement: ISO_TIME_SECOND_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/isoTimestamp/isoTimestamp.ts
function isoTimestamp(message = "Invalid timestamp") {
  return {
    type: "iso_timestamp",
    async: false,
    message,
    requirement: ISO_TIMESTAMP_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/isoWeek/isoWeek.ts
function isoWeek(message = "Invalid week") {
  return {
    type: "iso_week",
    async: false,
    message,
    requirement: ISO_WEEK_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/length/length.ts
function length(requirement, message = "Invalid length") {
  return {
    type: "length",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input.length !== this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/mac/mac.ts
function mac(message = "Invalid MAC") {
  return {
    type: "mac",
    async: false,
    message,
    requirement: [MAC48_REGEX, MAC64_REGEX],
    _parse(input) {
      return !this.requirement[0].test(input) && !this.requirement[1].test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/mac48/mac48.ts
function mac48(message = "Invalid 48 bit MAC") {
  return {
    type: "mac48",
    async: false,
    message,
    requirement: MAC48_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/mac64/mac64.ts
function mac64(message = "Invalid 64 bit MAC") {
  return {
    type: "mac64",
    async: false,
    message,
    requirement: MAC64_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/maxBytes/maxBytes.ts
function maxBytes(requirement, message = "Invalid byte length") {
  return {
    type: "max_bytes",
    async: false,
    message,
    requirement,
    _parse(input) {
      return new TextEncoder().encode(input).length > this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/maxLength/maxLength.ts
function maxLength(requirement, message = "Invalid length") {
  return {
    type: "max_length",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input.length > this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/maxSize/maxSize.ts
function maxSize(requirement, message = "Invalid size") {
  return {
    type: "max_size",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input.size > this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/maxValue/maxValue.ts
function maxValue(requirement, message = "Invalid value") {
  return {
    type: "max_value",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input > this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}
var maxRange = maxValue;

// src/validations/minBytes/minBytes.ts
function minBytes(requirement, message = "Invalid byte length") {
  return {
    type: "min_bytes",
    async: false,
    message,
    requirement,
    _parse(input) {
      return new TextEncoder().encode(input).length < this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/mimeType/mimeType.ts
function mimeType(requirement, message = "Invalid MIME type") {
  return {
    type: "mime_type",
    async: false,
    message,
    requirement,
    _parse(input) {
      return !this.requirement.includes(input.type) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/minLength/minLength.ts
function minLength(requirement, message = "Invalid length") {
  return {
    type: "min_length",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input.length < this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/minSize/minSize.ts
function minSize(requirement, message = "Invalid size") {
  return {
    type: "min_size",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input.size < this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/minValue/minValue.ts
function minValue(requirement, message = "Invalid value") {
  return {
    type: "min_value",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input < this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}
var minRange = minValue;

// src/validations/multipleOf/multipleOf.ts
function multipleOf(requirement, message = "Invalid multiple") {
  return {
    type: "multiple_of",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input % this.requirement !== 0 ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/notBytes/notBytes.ts
function notBytes(requirement, message = "Invalid byte length") {
  return {
    type: "not_bytes",
    async: false,
    message,
    requirement,
    _parse(input) {
      return new TextEncoder().encode(input).length === this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/notLength/notLength.ts
function notLength(requirement, message = "Invalid length") {
  return {
    type: "not_length",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input.length === this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/notSize/notSize.ts
function notSize(requirement, message = "Invalid size") {
  return {
    type: "not_size",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input.size === this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/notValue/notValue.ts
function notValue(requirement, message = "Invalid value") {
  return {
    type: "not_value",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input === this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/octal/octal.ts
function octal(message = "Invalid octal") {
  return {
    type: "octal",
    async: false,
    message,
    requirement: OCTAL_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/regex/regex.ts
function regex(requirement, message = "Invalid regex") {
  return {
    type: "regex",
    async: false,
    message,
    requirement,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/safeInteger/safeInteger.ts
function safeInteger(message = "Invalid safe integer") {
  return {
    type: "safe_integer",
    async: false,
    message,
    requirement: Number.isSafeInteger,
    _parse(input) {
      return !this.requirement(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/size/size.ts
function size(requirement, message = "Invalid size") {
  return {
    type: "size",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input.size !== this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/startsWith/startsWith.ts
function startsWith(requirement, message = "Invalid start") {
  return {
    type: "stars_with",
    async: false,
    message,
    requirement,
    _parse(input) {
      return !input.startsWith(this.requirement) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/ulid/ulid.ts
function ulid(message = "Invalid ULID") {
  return {
    type: "ulid",
    async: false,
    message,
    requirement: ULID_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/url/url.ts
function url(message = "Invalid URL") {
  return {
    type: "url",
    async: false,
    message,
    requirement(input) {
      try {
        new URL(input);
        return true;
      } catch {
        return false;
      }
    },
    _parse(input) {
      return !this.requirement(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/uuid/uuid.ts
function uuid(message = "Invalid UUID") {
  return {
    type: "uuid",
    async: false,
    message,
    requirement: UUID_REGEX,
    _parse(input) {
      return !this.requirement.test(input) ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}

// src/validations/value/value.ts
function value(requirement, message = "Invalid value") {
  return {
    type: "value",
    async: false,
    message,
    requirement,
    _parse(input) {
      return input !== this.requirement ? actionIssue(this.type, this.message, input, this.requirement) : actionOutput(input);
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BIC_REGEX,
  BrandSymbol,
  CUID2_REGEX,
  DECIMAL_REGEX,
  EMAIL_REGEX,
  EMOJI_REGEX,
  HEXADECIMAL_REGEX,
  HEX_COLOR_REGEX,
  IMEI_REGEX,
  IPV4_REGEX,
  IPV6_REGEX,
  ISO_DATE_REGEX,
  ISO_DATE_TIME_REGEX,
  ISO_TIMESTAMP_REGEX,
  ISO_TIME_REGEX,
  ISO_TIME_SECOND_REGEX,
  ISO_WEEK_REGEX,
  MAC48_REGEX,
  MAC64_REGEX,
  OCTAL_REGEX,
  ULID_REGEX,
  UUID_REGEX,
  ValiError,
  actionIssue,
  actionOutput,
  any,
  anyAsync,
  array,
  arrayAsync,
  bic,
  bigint,
  bigintAsync,
  blob,
  blobAsync,
  boolean,
  booleanAsync,
  brand,
  bytes,
  coerce,
  coerceAsync,
  creditCard,
  cuid2,
  custom,
  customAsync,
  date,
  dateAsync,
  decimal,
  defaultArgs,
  discriminatedUnion,
  discriminatedUnionAsync,
  email,
  emoji,
  endsWith,
  enumAsync,
  enumType,
  enumTypeAsync,
  enum_,
  equal,
  excludes,
  fallback,
  fallbackAsync,
  finite,
  flatten,
  forward,
  getDefault,
  getDefaultAsync,
  getDefaults,
  getDefaultsAsync,
  getFallback,
  getFallbackAsync,
  getFallbacks,
  getFallbacksAsync,
  hexColor,
  hexadecimal,
  imei,
  includes,
  instance,
  instanceAsync,
  integer,
  intersect,
  intersection,
  ip,
  ipv4,
  ipv6,
  is,
  isLuhnAlgo,
  isoDate,
  isoDateTime,
  isoTime,
  isoTimeSecond,
  isoTimestamp,
  isoWeek,
  keyof,
  length,
  literal,
  literalAsync,
  mac,
  mac48,
  mac64,
  map,
  mapAsync,
  maxBytes,
  maxLength,
  maxRange,
  maxSize,
  maxValue,
  merge,
  mergeAsync,
  mimeType,
  minBytes,
  minLength,
  minRange,
  minSize,
  minValue,
  multipleOf,
  nan,
  nanAsync,
  nativeEnum,
  nativeEnumAsync,
  never,
  neverAsync,
  nonNullable,
  nonNullableAsync,
  nonNullish,
  nonNullishAsync,
  nonOptional,
  nonOptionalAsync,
  notBytes,
  notLength,
  notSize,
  notValue,
  nullAsync,
  nullType,
  nullTypeAsync,
  null_,
  nullable,
  nullableAsync,
  nullish,
  nullishAsync,
  number,
  numberAsync,
  object,
  objectAsync,
  octal,
  omit,
  omitAsync,
  optional,
  optionalAsync,
  parse,
  parseAsync,
  parseResult,
  partial,
  partialAsync,
  passthrough,
  passthroughAsync,
  pick,
  pickAsync,
  picklist,
  picklistAsync,
  pipeResult,
  pipeResultAsync,
  record,
  recordAsync,
  recursive,
  recursiveAsync,
  regex,
  required,
  requiredAsync,
  restAndDefaultArgs,
  safeInteger,
  safeParse,
  safeParseAsync,
  schemaIssue,
  set,
  setAsync,
  size,
  special,
  specialAsync,
  startsWith,
  strict,
  strictAsync,
  string,
  stringAsync,
  strip,
  stripAsync,
  symbol,
  symbolAsync,
  toCustom,
  toCustomAsync,
  toLowerCase,
  toMaxValue,
  toMinValue,
  toTrimmed,
  toTrimmedEnd,
  toTrimmedStart,
  toUpperCase,
  transform,
  transformAsync,
  tuple,
  tupleAsync,
  ulid,
  undefinedAsync,
  undefinedType,
  undefinedTypeAsync,
  undefined_,
  union,
  unionAsync,
  unknown,
  unknownAsync,
  unwrap,
  url,
  useDefault,
  uuid,
  value,
  variant,
  variantAsync,
  voidAsync,
  voidType,
  voidTypeAsync,
  void_,
  withDefault
});
