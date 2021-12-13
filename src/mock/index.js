//引入mockjs
import Mock from "mockjs";
//使用mockjs模拟数据

import { pageList, successMes } from "./practice.js";
import { pageList as moreDataPage } from "./moreData.js";

// 设置延时
Mock.setup({
  timeout: 400,
});

// 使用拦截规则拦截命中的请求，mock(url, post/get, 返回的数据);
Mock.mock(/\/api\/practice\/page/, "get", pageList);

Mock.mock(/\/api\/practice\/save/, "post", successMes);

Mock.mock(/\/api\/moreData\/page/, "get", moreDataPage);
