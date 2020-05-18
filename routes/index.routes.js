import * as base from '../controllers/default.controller'

export default function(APP, params) {
  APP.get('/', (req,res) => {
    base.home(req,res,params)
  })
}
