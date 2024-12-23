"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortenUrl = shortenUrl;
let counter = 0;
function generateSequentialId() {
    counter++;
    return counter;
}
function base62Encode(id) {
    const characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    while (id > 0) {
        result = characters[id % 62] + result;
        id = Math.floor(id / 62);
    }
    return result;
}
function shortenUrl(longUrl) {
    const uniqueId = generateSequentialId();
    const encodedId = base62Encode(uniqueId);
    return encodedId;
}
//# sourceMappingURL=utils.js.map