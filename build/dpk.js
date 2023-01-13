const crypto = require("crypto");
// constants taken out and exported for reusing
export const TRIVIAL_PARTITION_KEY = "0";
export const MAX_PARTITION_KEY_LENGTH = 256;
// calculating sha in advance
const hash = crypto.createHash("sha3-512");
/**
 * @param { Event } event Event Object (optional)
 * @returns {string } if event is present then hex representation of the event else TRIVIAL_PARTITION_KEY, the max length supported is 256 characters.
 */
export const deterministicPartitionKey = (event) => {
    if (!event)
        return TRIVIAL_PARTITION_KEY;
    let candidate;
    if (event.partitionKey) {
        candidate = event.partitionKey;
    }
    else {
        const data = JSON.stringify(event);
        candidate = hash.update(data).digest("hex");
    }
    if (typeof candidate !== "string") {
        candidate = JSON.stringify(candidate);
    }
    if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
        candidate = hash.update(candidate).digest("hex");
    }
    return candidate;
};
