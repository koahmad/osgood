// https://github.com/web-platform-tests/wpt/blob/376e2a8250c3824b794ec518ab320d8a82cedf95/common/utils.js

export function token() {
  var uuid = [to_hex(rand_int(32), 8),
              to_hex(rand_int(16), 4),
              to_hex(0x4000 | rand_int(12), 4),
              to_hex(0x8000 | rand_int(14), 4),
              to_hex(rand_int(48), 12)].join("-")
  return uuid;
}

export function rand_int(bits) {
  if (bits < 1 || bits > 53) {
      throw new TypeError();
  } else {
      if (bits >= 1 && bits <= 30) {
          return 0 | ((1 << bits) * Math.random());
      } else {
          var high = (0 | ((1 << (bits - 30)) * Math.random())) * (1 << 30);
          var low = 0 | ((1 << 30) * Math.random());
          return  high + low;
      }
  }
}

export function to_hex(x, length) {
  var rv = x.toString(16);
  while (rv.length < length) {
      rv = "0" + rv;
  }
  return rv;
}