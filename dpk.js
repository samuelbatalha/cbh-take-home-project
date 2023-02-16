const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event && event.partitionKey) {
    candidate = event.partitionKey;
  } else if (event) {
    candidate = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
  }
  
  // Transform candidate into JSON format if candidate is not a string
  typeof candidate !== "string" ? candidate = JSON.stringify(candidate) : undefined;

  // Generates a encrypted hash for candidate if its length is higher than 256
  candidate.length > MAX_PARTITION_KEY_LENGTH ? candidate = crypto.createHash("sha3-512").update(candidate).digest("hex") : undefined;

  return candidate;
};