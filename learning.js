function evaluateValue(val) {
  if (Array.isArray(val)) return "array";
  if (Number.isNaN(val)) return "invalid number";
  if (typeof val === "number") return "number";
  if (typeof val === "boolean") return "boolean";
  return "other";
}

function countOccurrences(arr) {
  const count = {};

  for (const element of arr) {
    count[element] = (count[element] || 0) + 1;
  }

  return count;
}

function processUsers(users) {
  return users
    .filter(({ age, role }) => age >= 18 && role !== "guest")
    .sort((a, b) => b.age - a.age)
    .map(({ id, name, age }) => ({
      id,
      displayName: `${name} (${age})`,
    }));
}

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      if (amount > 0) balance += amount;
      return balance;
    },

    withdraw(amount) {
      if (amount > balance) return "Insufficient funds";
      if (amount > 0) balance -= amount;
      return balance;
    },

    getBalance() {
      return balance;
    },
  };
}

class Timer {
  constructor(seconds = 0) {
    this.seconds = seconds;
    this.interval = null;
  }

  start() {
    if (this.interval) return;

    this.interval = setInterval(() => {
      this.seconds++;
      console.log(`Time: ${this.seconds}`);
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }
}

async function retryOperation(asyncFn, retries) {
  let lastError;

  for (let i = 0; i < retries; i++) {
    try {
      return await asyncFn(); // Return result immediately on success
    } catch (err) {
      lastError = err; // Store error and try again
    }
  }

  throw lastError; // Rethrow final error if all attempts fail
}

async function promiseAll(arr) {
  const resolvedArr = [];

  for (const element of arr) {
    resolvedArr.push(await element);
  }

  return resolvedArr;
}

function findOutlier(integers) {
  if (integers.length < 3) return;
  const even = [];
  const odd = [];

  for (const integer of integers) {
    if (integer % 2 === 0) {
      even.push(integer);
    } else {
      odd.push(integer);
    }

    if (even.length > 1 && odd.length === 1) return odd[0];
    if (odd.length > 1 && even.length === 1) return even[0];
  }
}

function digitalRoot(n) {
  while (n >= 10) {
    let sum = 0;
    while (n > 0) {
      sum += n % 10;
      n = Math.floor(n / 10);
    }
    n = sum;
  }
  return n;
}

function greet() {
  return () => {
    return this.name;
  };
}

const person = {
  name: "Salmaan",
  greet: greet(),
};

person.name = "john";
console.log(person);

// console.log(person.greet());

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
