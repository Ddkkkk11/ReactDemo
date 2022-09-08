/*
//设置sessionLocation
export const setPageSession = (pageKey: string, pageSession: IPageSession) => {
  //定义设置session方法，因为项目数据比较多，设置的话存储到一个对象中，然后每个属性对应不同的值，也减少了数据操作。
  //pageKey是key pageSession是value是一个对象形式{}
  const searchObj = getPageSession(); //定义一个对象 然后这个对象的值是getPageSession返回值，返回值有多种情况
  /!*{
一种是searchObj  这种情况是没有存储session 他就会返回一个空对象（返回值是一个null或者空对象）但是这个值做了||运算 当为null的时候searchObj为false 然后继续
判断空对象是否成立
一种是searchObj[pageKey] getSessin searchObj只有两种 结果 一种是返回了空对象，一种是拿到对应的sessionKey对应的对象
一种是{}空对象 为什么是空对象呢 有了pageKey但是没有往里面增加属性


}*!/
  /!*定义一个对象，然后从getSession中拿到这个对象 这个对象有两种情况  存在唯一的key 会返回这对象（{pageKey:{
key?: 如果有值 会返回这个session[pageKey]对象 如果没有 会返回{}空对象

}} ）
*!/
  searchObj[pageKey] = pageSession;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(searchObj));
};

export const mergePageSession = (pageKey: string, pageSession: IPageSession) => {
  const searchObj = getPageSession();
  //合并配置项 { a: 1 }{ b: 2 } 变成{ a:1, b:2 }
  console.log(searchObj,11111111111111);
  searchObj[pageKey] = Object.assign(searchObj[pageKey], pageSession);
  console.log(searchObj,2222222222222);
  sessionStorage.setItem(SESSION_KEY, JSON.stringify(searchObj));
};
export const getPageSession = (pageKey?: string): IPageSession => {
  const searchObj = JSON.parse(sessionStorage.getItem(SESSION_KEY) || '{}');
  if (!pageKey) {
    return searchObj;
  }
  return searchObj[pageKey] ||{};
};*/

const SESSION = '薛军栋';

const setSession = (key, valObj) => {

  const obj = {};
  obj[key] = valObj;
  /*
      存储后内存的值是这个 'sessionKey' 为 '薛军栋'
        obj = {
            nameKey: {
              name: 'xdd',
              gender: '男'
            }
        }
  */



  console.log(JSON.stringify(obj), '@@@@@@@@@@@@@@@@@@@@@');
  sessionStorage.setItem(SESSION, JSON.stringify(obj));
}
const getSession = (key) => {

  const searchVal = JSON.parse(sessionStorage.getItem(SESSION) || '{}');
  // console.log(searchVal, '我是searchVal');
  // console.log(JSON.parse(searchVal[]));
  if (!key) {
    return searchVal
  }


  //
  return JSON.parse(searchVal)[key];
}

setSession('nameKey', {
  age: 1,
  gender: '男'
});
// getSession('nameKey');
console.log(getSession());
