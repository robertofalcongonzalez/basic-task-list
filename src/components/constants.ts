import { TagConst } from "./types"

export const regExp = {
    email: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
    URL: /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4])|(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*\.[a-z\u00a1-\uffff]{2,})(?::\d{2,5})?(?:\/\S*)?$/
}

export const tagTextColors: TagConst = {
    email: 'text-[#F58E0A]',
    URL: 'text-[#007FFF]',
    hash: 'text-[#702EE6]',
    reference: 'text-[#07A873]',

}
export const tagBgColors: TagConst = {
    email: 'bg-[#FFE6C7]',
    URL: 'bg-[#D6EBFF]',
    hash: 'bg-[#DBC7FF]',
    reference: 'bg-[#ADF0D9]',
}
export const tagIcon: TagConst = {
    email: 'mail',
    URL: 'link',
    hash: 'hash',
    reference: '',
}
