// eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
export const REGEX = {
	NUMBER		: /-?(?=.*[0-9])[0-9]*(?:\.[0-9]{1,})?$/,
	EMAIL		: /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,4})$/,
	WEBSITE		: /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}(\/.*)?/,
	CHARACTER	: /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9ưƯơƠ ]*$/,
	PHONE		: /^[0-9\(\)\-\+ ]*$/,
	EMOJI		: /^(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])+/,
} as const;
