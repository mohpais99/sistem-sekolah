/*
mod : Global
cre : fz 20180428
upd : fz 20191119
ver : 0.2
*/

const
    _asciiBitAmt = 8,
    _defaultBaseNBitLen = 7,
    StringFromCharCode = String.fromCharCode,
    _mathPow = Math.pow,
    dataIsUndefined = function (value) {
        return value === undefined
    },
    dataIsNumber = function (params) {
        return Number(params)
    },
    charCodeAt = function (src, idx) {
        return src.charCodeAt(idx);
    },
    charAt = function (src, idx) {
        return src.charAt(idx);
    },

    _genKey = function (keyType) {
        var _As = 65,
            _Ze = 91,
            _as = 97,
            _ze = 123,
            _0s = 48,
            _9e = 58,
            _QuestionMark_s = 63, //?
            _Colon_e = 59, //:
            _Number_Sign_s = 35, //#
            _Ampersand_e = 39, //Terminate before 39 (& actually 38)
            _Left_Parenthis_s = 40, //(
            _FullStop_e = 47, //Terminate before 47, FullStop actually 46
            _LeftSquareBracket_e = 92, //Terminate before 92, [ actually 91
            _RightSquareBracket_s = 93, //]
            _Low_Line_e = 96, //Terminate before 96, _ actually 95
            _Tilde_e = 127, //Terminate before 127, ~ actually 126
            _LatinAwGrave_s = 192,
            _LatinSmall_ae_e = 231, //Terminate before 231, ae actually 230
            _key = "",
            suffix = "",
            arrRange = [_As, _Ze, _as, _ze, _0s, _9e], //[[_As,_Ze],[_as,_ze],[_0s,_9e]],
            i = 0,
            j, k, l;
        if (keyType === 0) { // standard base 64
            suffix = "+/=";
        } else if (keyType === 1) { // non standard uri safe base 64
            suffix = "-_."; // standard uri safe using "+-$"
        } else if (keyType === 2) { // non standard base 64
            arrRange = [_as, _ze, _QuestionMark_s, _Ze, _0s, _Colon_e];
        } else if (keyType === 9) { // key was from server and session specific after successfull login
            arrRange = [];
            _key = _getSvrKey();
        } else { //own base 2 to base 128
            _key = "!";
            arrRange = [_Number_Sign_s, _Ampersand_e, _Left_Parenthis_s, _FullStop_e, _0s, _LeftSquareBracket_e, _RightSquareBracket_s, _Low_Line_e, _as, _Tilde_e, _LatinAwGrave_s, _LatinSmall_ae_e];
        };

        for (l = getLength(arrRange); i < l; i += 2) {
            for (j = arrRange[i], k = arrRange[i + 1]; j < k; j++) {
                _key += StringFromCharCode(j);
            }
        }
        return _key + suffix;
    },
    getLength = function (obj) {
        return obj.length
    },
    encr_data = function(noEnc, fakeKeys, keys) {
        let data = {}
        fakeKeys = fakeKeys.split("")
        let encrypt = enc(JSON.stringify(noEnc), 2)
        for (let i = 0; i < getLength(fakeKeys); i++) {
            if (fakeKeys[i] === keys) data[fakeKeys[i]] = encrypt
            else data[fakeKeys[i]] = rndStr(getLength(encrypt), 2, 3)
        }
        return data
    },
    _nBitEnc = function (source, baseNBitLen, key) {
        //return _bNE(baseNBitLen || 6, source, key);
        baseNBitLen = baseNBitLen || _defaultBaseNBitLen;
        key = key || _genKey();
        var binData = 0,
            bitLen = 0,
            baseNBit = _mathPow(2, baseNBitLen) - 1,
            encResult = source.replace(/./g, function (v) {
                var encResultTmp = "";
                binData = (binData << _asciiBitAmt) + charCodeAt(v, 0); //v.charCodeAt(0);
                bitLen += _asciiBitAmt;
                while (bitLen >= baseNBitLen) {
                    bitLen -= baseNBitLen;
                    encResultTmp += key[(binData >>> bitLen) & baseNBit];
                }
                return encResultTmp;
            });
        return bitLen > 0 ? encResult + key[(binData << (baseNBitLen - bitLen)) & baseNBit] : encResult;
    },

    _nBitDec = function (source, baseNBitLen, key) {
        //return _bND(baseNBitLen || 6, source, key);
        baseNBitLen = baseNBitLen || _defaultBaseNBitLen;
        var binData = 0,
            bitLen = 0;
        key = key || _genKey();
        return source.replace(/./g, function (v) {
            binData = (binData << baseNBitLen) + key.indexOf(v);
            bitLen += baseNBitLen;
            return bitLen < _asciiBitAmt ? '' : StringFromCharCode((binData >>> (bitLen -= _asciiBitAmt)) & 0xff);
        })
    },

    /**
     * base N bit per byte decrypt (base 64 bit decrypt)
     * @param {string} source encrypted source string
     * @param {number|string} edType decrypt type: -1, 0, 1, 2, 9 or key string
     * @param {number} nBitLen 6 for base 64, 7 for base 128, 5 for base 32, 4 for hexa decimal if passed key is "0123456789ABCDEF"
     * @example
     *  var myDecryptedString = Global.d(myEncryptedBase128String, 9) //using session dependend base64 key
     *  var myDecryptedString = Global.d(myEncryptedOwnBase64String) //using own base64 encrtption
     *  var myDecryptedString = Global.d(myEncryptedDefaultBase64String, 0) //using default base64 encrtption
     *  var myDecryptedString = Global.d(myEncryptedBase128String, -1, 7) //using default base128 encrtption
     */
    dec = function (source, edType, nBitLen) {
        if (dataIsUndefined(edType)) { //default base 128 decrypt
            return _nBitDec(source);
        } else { //base 64 uri safe decrypt
            return _nBitDec(source, nBitLen || 6, dataIsNumber(edType) ? _genKey(edType) : edType);
        }
    },

    /**
     * base N bit per byte encrypt (base 64 bit encrypt)
     * @param {string} source encrypted source string
     * @param {number|string} edType decrypt type: -1, 0, 1, 2, 9 or key string
     * @param {number} nBitLen 6 for base 64, 7 for base 128, 5 for base 32, 4 for hexa decimal if passed key is "0123456789ABCDEF"
     * @example
     *  var myEncryptedString = Global.enc(mySourceString, 9) //using session dependend base64 key
     *  var myEncryptedString = Global.enc(mySourceString) //using own base64 encrtption
     *  var myEncryptedString = Global.enc(mySourceString, 0) //using default base64 encrtption
     *  var myEncryptedString = Global.enc(mySourceString, -1, 7) //using default base128 encrtption
     */
    enc = function (source, edType, nBitLen) {
        if (dataIsUndefined(edType)) { //default base 128 encrypt
            return _nBitEnc(source);
        } else { //base 64 uri safe encrypt
            return _nBitEnc(source, nBitLen || 6, dataIsNumber(edType) ? _genKey(edType) : edType);
        }
    },

    rndStr = function (resultLength, keyType, additionalVarLen) {
        var i = 0,
            random = Math.random,
            round = Math.floor,
            result = '',
            key = _genKey(keyType || 1),
            keyLength = getLength(key);
        for (
            resultLength += additionalVarLen ? round(random() * additionalVarLen) : 0; i < resultLength; result += key[round(random() * keyLength)], i += 1
        );
        return result;
    },

    getDateInd = function (dat){
        var hari = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu'];
        var bulan = ['Januari','Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus','September','Oktober','November','Desember'];
        var basetanggal = new Date(dat);
        var tanggal = basetanggal.getDate();
        var _hari = basetanggal.getDay();
        var _bulan = basetanggal.getMonth();
        var _tahun = basetanggal.getYear();

        var day = hari[_hari];
        var month = bulan[_bulan];
        var year = (_tahun < 1000)?_tahun + 1900 : _tahun;

        return day +', ' + tanggal + ' ' + month + ' ' + year;
    },

    capitalize = function (word) {
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + lower.slice(1);
    }


export {
    charAt,
    capitalize,
    dec,
    enc,
    rndStr,
    getDateInd,
    encr_data
}