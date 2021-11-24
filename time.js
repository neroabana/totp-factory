const hotpOtpGenerator = require('hotp-totp-generator');

const totpToken = hotpOtpGenerator.totp({ key: 'neroabana@gmail.comHENNGECHALLENGE003',
T0: "0", X: "30", algorithm: "sha512", digits: "10" 
});

console.log(totpToken);
