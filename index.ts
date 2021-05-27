import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import JSEncrypt from 'jsencrypt';
const source = of('World').pipe(map(x => `Hello ${x}!`));

const encript = new JSEncrypt();
encript.setPublicKey(
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCCUG3dFIiZZBGkTAC5BSBx+oNvp25bewY6nT3OOZQhZvdVpliOi8KFQrnnikk6QM6HQZfWKjdWQtwpCum2keHwdhD/hRsO/ccNrY28bRWE2QwV48k2BOG5keAVKqjWlKF1FoTdybQKGUxijtjcwA7q1p3l1XIVlE1WmFvaIH5kawIDAQAB'
);
var data = {
  name: 'kevin',
  age: '28'
};
var str = encript.encrypt(JSON.stringify(data));
console.error(str);

//source.subscribe(console.log);
