/* eslint-disable no-redeclare */
/* eslint-disable func-names */
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-shadow */
/* eslint-disable no-buffer-constructor */

const crypto = require("crypto");
const CryptoJS = require('crypto-js');
const path = require("path");
const fs = require("fs");
const _ = require('lodash');

export const encryptStringWithRsaPublicKey = function (toEncrypt, relativeOrAbsolutePathToPublicKey) {
  const absolutePath = path.resolve(relativeOrAbsolutePathToPublicKey);
  const publicKey = fs.readFileSync(absolutePath, "utf8");
  const buffer = new Buffer(toEncrypt);
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString("base64");
};

export const decryptStringWithRsaPrivateKey = function (toDecrypt, relativeOrAbsolutePathtoPrivateKey) {
  const absolutePath = path.resolve(relativeOrAbsolutePathtoPrivateKey);
  const privateKey = fs.readFileSync(absolutePath, "utf8");
  const buffer = new Buffer(toDecrypt, "base64");
  const decrypted = crypto.privateDecrypt(privateKey, buffer);
  return decrypted.toString("utf8");
};

const iterations = 1000;
const bytes = 24;
// 1000:qcMqVYE0EzAU9Uz+mQxBaKFICG1vR1iq:RkdpgAcpijFqYgVxBCvJugMXqnt4j5f3

export const createSalt = () => new Buffer(crypto.randomBytes(bytes)).toString('base64')

export const hash = (text, salt) => new Promise((resolve, reject) => {
  crypto.pbkdf2(text, salt, iterations, bytes, 'sha1', (err, derivedKey) => {
    if (err) { reject(err) }
    else {
      // C# return Pbkdf2Iterations + ":" + Convert.ToBase64String(salt) + ":" + Convert.ToBase64String(hash);
      const hash = new Buffer(derivedKey).toString('base64');
      const pass = `${iterations}:${salt}:${hash}`
      resolve(pass);
    }
  });
})

export const verifyPassword = (passWord, goodHash) => new Promise((resolve) => {
  if (!goodHash || goodHash === '' || !passWord || passWord === '') {
    // console.log('false')
    resolve(false)
  }
  const delimiter = ':'
  const split = goodHash.split(delimiter)
  const salt = new Buffer(split[1], 'base64')
  const hashPass = split[2]
  const testHash = crypto.pbkdf2Sync(passWord, salt, iterations, bytes, 'sha1').toString('base64')
  if (hashPass.length !== testHash.length) {
    // console.log('iterations: %o | hashPass: %s | hashPass.length: %o | testHash.length: %o => false', iterations, hashPass, hashPass.length, testHash.length)
    resolve(false)
  }
  const isOk = _.difference(hashPass, testHash)
  // console.log(isOk)
  resolve(isOk.length === 0)
})

export const encryptedString = (data, passWord) => {
  const cipher = crypto.createCipher('aes192', passWord)
  let encrypted = cipher.update(data, 'utf8', 'hex')
  encrypted += cipher.final('hex')
  return encrypted
}

export const decryptedString = (data, passWord) => {
  const decipher = crypto.createDecipher('aes192', passWord)
  let decrypted = decipher.update(data, 'hex', 'utf8')
  decrypted += decipher.final('utf8')
  return decrypted
}

export const encryptWithAES = (data, passphrase) => CryptoJS.AES.encrypt(data, passphrase).toString();

export const decryptWithAES = (data, passphrase) => {
  const bytes = CryptoJS.AES.decrypt(data, passphrase);
  let originalText = ''
  try {
    originalText = bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    originalText = "";
  }
  return originalText;
};