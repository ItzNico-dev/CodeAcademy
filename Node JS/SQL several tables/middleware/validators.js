export function validateId(req, res, next) {
  const { id } = req.params;
  const convertedId = +id;
  if (
    !isNumber(convertedId) ||
    convertedId < 1 ||
    !Number.isInteger(convertedId)
  ) {
    res.status(400).json({ error: `invalid ID: ${id}` });
  } else {
    next();
  }
}

export async function validateOrderBody(req, res, next) {
  const { description, price } = req.body;
  const convertedPrice = +price;

  if (isOrderBodyValid) {
    res.status(400).json({ error: `invalid price or description or both` });
  } else {
    next();
  }
}

export async function validateCustomerBody(req, res, next) {
  const { name, address, phone } = req.body;
  if (isNumber(name) || isNumber(address) || !isNumber(phone)) {
    res
      .status(400)
      .json({ error: `invalid name, address or phone or couple of them` });
  } else {
    next();
  }
}

export async function validateOrderBodyInBulk(req, res, next) {
  const { data } = req.body;
  let isValid = true;

  if (!Array.isArray(data)) {
    isValid = false;
  } else {
    data.forEach((item) => {
      if (!isOrderBodyValid(item.description, item.price)) {
        isValid = false;
        console.log(isValid)
      }
    });
  }
  if (isValid) {
    next();
  } else {
    res.status(400).json({ error: `invalid data` });
  }
}

function isOrderBodyValid(description, price) {
  const convertedPrice = +price;
  console.log(description, price)
  if (isNumber(description) || !isNumber(price) || convertedPrice < 0) {
    return false;
  } else {
    return true;
  }
}

function isNumber(value) {
  const numberValue = +value;
  return isNaN(numberValue) ? false : true;
}
