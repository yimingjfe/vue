import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)      // 在prototype上挂载_init
stateMixin(Vue)     // prototype上挂载$data、$props、$set、$delete、$watch，指向this._data，this._props
eventsMixin(Vue)    // $on、$once、$off、$emit
lifecycleMixin(Vue)
renderMixin(Vue)    // $nextTick、_render

export default Vue
