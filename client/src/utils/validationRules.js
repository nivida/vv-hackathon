const required = {required: true, message: 'Cant be blank'};

const email = {type: 'email', message: 'Please enter a valid email address.'};

const toNumber = (val) => typeof val === 'number' ? val : parseFloat(val);

const positiveNumber = {
  type: 'number',
  min: 1,
  transform: (val) => parseFloat(val),
  message: 'must be a positive number'
};

const greaterThanOrEqualTo = (min) => ({
  type: 'number',
  validator: (rule, value, callback) => {
    if (value >= min) return callback();
    callback(`must be ${min} or greater`)
  },
  transform: toNumber,
});

const greaterThan = (min) => ({
  type: 'number',
  validator: (rule, value, callback) => {
    if (value > min) return callback();
    callback(`must be greater than ${min}`)
  },
  transform: toNumber,
});

const lessThanOrEqualTo = (number) => ({
  type: 'number',
  validator: (rule, value, callback) => {
    if (value <= number) return callback();
    callback(`must be ${number} or less`)
  },
  transform: toNumber,
});

const integer = {
  type: 'number',
  validator: (rule, value, callback) => {
    if (value % 1 === 0) return callback();
    callback(`must be an integer`)
  },
  transform: toNumber,
};

export const ValidationRules = {
  required,
  email,
  positiveNumber,
  maxNumber: lessThanOrEqualTo,
  lessThanOrEqualTo,
  minNumber: greaterThanOrEqualTo,
  greaterThanOrEqualTo,
  greaterThan,
  integer,
};
