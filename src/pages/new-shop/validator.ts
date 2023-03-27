import * as yup from 'yup'
import { pt } from 'yup-locale-pt'

yup.setLocale(pt)

export const schema = yup.object().shape({
    market: yup.string().required(),
})