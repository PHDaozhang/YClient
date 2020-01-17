import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementZhLocal from 'element-ui/lib/locale/lang/zh-CN'
import zhlocal from './zh'

Vue.use(Vuei18n);

const messages = {
    zh:{
        ...elementZhLocal,
        ...zhlocal
    },
    tw:
    {

    }
}



const i18n = new Vuei18n({
    locale:Cookies.get('language') || 'zh',
    messages
});



export default i18n;