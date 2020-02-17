/* eslint-disable no-undef */
// 注意：live2d_path参数应使用绝对路径
const live2d_path = '/static/project_live2d/'
// const live2d_path = "/live2d-widget/";

// 初始化看板娘，会自动加载指定目录下的waifu-tips.json
$(window).on('load', function () {
  initWidget(live2d_path + 'waifu-tips.json', 'https://live2d.fghrsh.net/api')
})
// initWidget第一个参数为waifu-tips.json的路径
// 第二个参数为api地址（无需修改）
// api后端可自行搭建，参考https://github.com/fghrsh/live2d_api

// console.log(`
//   く__,.ヘヽ.        /  ,ー､ 〉
//            ＼ ', !-─‐-i  /  /´
//            ／｀ｰ'       L/／｀ヽ､
//          /   ／,   /|   ,   ,       ',
//        ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
//         ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
//           !,/7 '0'     ´0iソ|    |
//           |.从"    _     ,,,, / |./    |
//           ﾚ'| i＞.､,,__  _,.イ /   .i   |
//             ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
//               | |/i 〈|/   i  ,.ﾍ |  i  |
//              .|/ /  ｉ：    ﾍ!    ＼  |
//               kヽ>､ﾊ    _,.ﾍ､    /､!
//               !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
//               ﾚ'ヽL__|___i,___,ンﾚ|ノ
//                   ﾄ-,/  |___./
//                   'ｰ'    !_,.:
// `)
