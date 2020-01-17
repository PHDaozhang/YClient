exports.install = function(Vue,options) {
    Vue.prototype.GetAssetImg = function(url) {
        return require("@/assets/" + url );
    }
}
