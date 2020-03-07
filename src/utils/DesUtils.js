import Crypto from "crypto-js";

let config = {
  key: "AO89c12G", //秘钥
  iv: [0x12, 0x34, 0x56, 0x78, 0x90, 0xab, 0xcd, 0xef]
};
const getStrFromBytes = arr => {
  let r = "";

  arr.forEach(item => {
    r += String.fromCharCode(item);
  });
  console.log(r);
  return r;
};

export const encrypt = str => {
  let keyHex = Crypto.enc.Utf8.parse(config.key);
  let ivHex = Crypto.enc.Utf8.parse(getStrFromBytes(config.iv));
  let encryptData = Crypto.DES.encrypt(str, keyHex, {
    iv: ivHex,
    mode: Crypto.mode.CBC,
    padding: Crypto.pad.Pkcs7
  });
  return encryptData.toString();
};

export const decrypt = str => {
  let keyHex = Crypto.enc.Utf8.parse(config.key);
  let ivHex = Crypto.enc.Utf8.parse(getStrFromBytes(config.iv));
  let decryptData = Crypto.DES.decrypt(
    {
      ciphertext: Crypto.enc.Base64.parse(str)
    },
    keyHex,
    {
      iv: ivHex,
      mode: Crypto.mode.CBC,
      padding: Crypto.pad.Pkcs7
    }
  );
  return decryptData.toString(Crypto.enc.Utf8);
};

export const base64 = str => {
  return Crypto.enc.Base64.stringify(str);
};
