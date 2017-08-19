//灰度的工程
var alphaProject = {'leagueteam':true};
var modActReg = /^[a-z0-9_.-]+$/i;


/**
 * 判断是否是灰度用户，这里会按照工程灰度（alphaProject）,
 * 如果是灰度用户，则会在mod_act后面加上 $alpha 后缀
 * @param uin	cookies里面取
 * @param ratio 这个是通过url上的参数传过来的
 * @returns {boolean}
 */
this.isAlphaUser = function (mod, uin, ratio) {

    var alpha = false;
    var curr = (''+uin).substr(-3, 2) - 0;//to number
    ratio = (ratio - 0) || 0;

    if (alphaProject[ mod ] && curr < ratio){
        alpha = true;
    }
    return alpha;
};

/**
 * 返回mod_act字符串
 * @param {Object} req request
 */
this.getModAct	= function(req){

    if(req.params.mod_act){
        return req.params.mod_act;
    }

    var pathname= req.REQUEST.pathname || '';
    var arr		= pathname.split('/');
    var mod		= arr[1] || '';
    var act		= arr[2] || '';


    var uin = req.cookies['uin'] || "00000";
    var ratio = req.query['ratio'] || "0";

    if(!modActReg.test(mod)){
        mod = 'default';
    }

    if(!modActReg.test(act)){
        act = 'page';
    }

    req.params.mod_act = mod + '_' + act + ( this.isAlphaUser(mod, uin, ratio)? ('$alpha'):'');

    return req.params.mod_act;
}
