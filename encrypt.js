// تثبيت مكتبة node-rsa باستخدام الأمر: npm install node-rsa
const NodeRSA = require('node-rsa');

// المفتاح الخاص (يتم استخدامه لفك تشفير الرسائل)
const privateKey = `-----BEGIN PRIVATE KEY-----
MIIBVwIBADANBgkqhkiG9w0BAQEFAASCAT8wggE7AgEAAkEAsZVxmdZoUXxQL71SLIvHIx5EVz0O1GOc6/dnmiteoYnoTtsXPifOG3AgkedGNtD1X/r06X2JXSn0K0EWiPQIDAQABAkAdyCWbcZzMm3tBNoGFkUBCczfaGm/YM0QKo2u/N8S0h+esMXIBG/C2NOJ3I9KcEovw/2+l2jPZrsJtbLiIaiAiAiEA9lj54ijhnh6Xq3TePjRg4XCocnO4ZdeULBsaBQ+ZxyUCIQDBrMOuHnqYyN3Rf3LEr43B7ZfQd++5pEzE35IdQNsTIQIgeWo1dtfJ+E7sOinHfHs0Ve98zANFL3mDShmvINJDEcsCIQC5k6xXk5VIKkkARF3bGymsBrri+hCMcBsLuQxkL5BO3QIhAKbQDCk8YnnOJleIHViRMJlRUYXQUQj4Omvm+xupHMMf
-----END PRIVATE KEY-----`;

function decryptMessage(encryptedMessage, privateKey) {
    const key = new NodeRSA();
    key.importKey(privateKey, 'pkcs8-private');
    return key.decrypt(encryptedMessage, 'utf8');
}

// الرسالة المشفرة (محاكاة وصول الرسالة من العميل)
const encryptedMessage = "استبدل هذا النص بالرسالة المشفرة"; // الصق الرسالة المشفرة هنا
console.log("Encrypted Message Received:", encryptedMessage);

// فك التشفير
const decryptedMessage = decryptMessage(encryptedMessage, privateKey);
console.log("Decrypted Message:", decryptedMessage);