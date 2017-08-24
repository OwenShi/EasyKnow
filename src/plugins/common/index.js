export  default function (Vue) {

  Vue.mixin({
    created:function () {
      var _this = this
      _this.$Common = {
        ajax:function (type,url,opts,efn,sfn) {
          var method = type || 'post'
          var param = opts.param
          _this.$axios.defaults.headers.post['content-Type'] = 'application/json';
          _this.$axios.post(url, JSON.stringify(opts.param))
            .then(response=>{
              sfn ? sfn(response):console.log('success but not sfn')
            })
            .catch(error=>{
              efn ? efn(error):console.log('error but not efn')
            })
        }
      }
    }
  })
}
