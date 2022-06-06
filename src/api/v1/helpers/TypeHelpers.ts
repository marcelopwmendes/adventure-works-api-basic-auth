function validateAndReturnNumber(value: any): number {
  let result;

  if (typeof value === "number") {
    result = value;
  }

  result = +value;

  if (isNaN(result)) {
    result = 0;
  }

  return result;
}

export { validateAndReturnNumber };
