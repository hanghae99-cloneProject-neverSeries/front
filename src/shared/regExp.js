export const idCheck = (id) => {
    let regExp = /^[a-z0-9_-]{5,20}$/;
    return regExp.test(id);
};

export const nickCheck = (nick) => {
    let regExp = /^[0-9a-zA-Zㄱ-ㅎ|ㅏ-ㅣ|가-힣]{2,10}$/;
    return regExp.test(nick);
};

export const pwChk = (pw) => {
    let regExp = /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/;
    // 대문자, 특수문자 포함
    return regExp.test(pw);
};
