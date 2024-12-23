let counter = 0;

function generateSequentialId(): number {
  counter++;
  return counter;
}

function base62Encode(id: number) {
  const characters =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";
  while (id > 0) {
    result = characters[id % 62] + result;
    id = Math.floor(id / 62);
  }
  return result;
}

export function shortenUrl(longUrl: string): string {
  const uniqueId = generateSequentialId();
  const encodedId = base62Encode(uniqueId);
  return encodedId;
}
