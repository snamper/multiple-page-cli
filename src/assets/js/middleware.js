/**
 * 项目必须引用的东西，统一在这里中转
 */

import Vue from 'vue'
import axios from 'axios'
import xhr from './common/xhr'
import './lib/commonFontsizeMatchDeviceWidthAdaptatePC'
import config from './common/config'
import base from './common/base'
import common from './common/common'
import vueMixin from './common/vueMixin'
import vueFilter from './common/vueFilter'

// export const Vue = Vue
// export const axios = axios
// export const base = base
// export const common = common

// export Vue from 'vue'.....
// export axios from 'axios'.....

const middleware = {
    Vue,
    axios,
    xhr,
    config,
    base,
    common,
    vueMixin,
}

export default middleware;