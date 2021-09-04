//引入express
const express = require("express");
//引入cors
const cors = require("cors");

//创建app实例对象
const app = express();

//使用中间价解析urlencoded编码形式的请求体参数
app.use(express.urlencoded({ extended: true }));

//使用中间价解析json编码形式的请求体参数
app.use(express.json());
app.use(cors());

//暴露静态资源
app.use(express.static(__dirname + "/src"));

//响应GET请求---可以接收query参数
app.get("/test_get", (request, response) => {
  console.log("有人请求test_get了--携带的query参数是：", request.query);
  /*   response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Expose-Headers", "*"); */
  response.send("hello_test_get");
});

//响应GET请求---可以接收params参数
app.get("/test_get2/:name/:age", (request, response) => {
  console.log("有人请求test_get2了--携带的params参数是：", request.params);
  response.send("hello_test_get2");
});

//响应GET请求
app.get("/get_person", (request, response) => {
  console.log("有人请求get_person了");
  const person = { name: "玫瑰花茶", age: 25, sex: "女" };
  response.send(JSON.stringify(person));
});

//响应GET请求
app.get("/get_person_delay", (request, response) => {
  console.log("有人请求get_person了");
  const person = { name: "玫瑰花茶", age: 25, sex: "女" };
  setTimeout(() => {
    response.send(JSON.stringify(person));
  }, 3000);
});

//响应POST请求---可以接收请求体参数
app.post("/test_post", (request, response) => {
  console.log("有人请求test_post了--携带的请求体参数是", request.body);
  response.send("hello_test_post");
});

//响应GET请求---jquery
app.get("/test_jquery_get", (request, response) => {
  console.log("有人请求test_jquery_get了", request.query);
  const car = { name: "特斯拉.model3", price: "30万" };
  response.send(JSON.stringify(car));
});

//响应POST请求---jquery
app.post("/test_jquery_post", (request, response) => {
  console.log("有人请求test_jquery_post了", request.body);
  const car = { name: "特斯拉.model3", price: "30万" };
  response.send(JSON.stringify(car));
});

/* app.options("/test_put", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Expose-Headers", "*");
  response.setHeader("Access-Control-Allow-Methods", "*");
  response.send();
}); */

app.put("/test_put", (request, response) => {
  response.send("hello_test_put");
});

app.get("/test_jsonp", (request, response) => {
  const { callback } = request.query;
  console.log(callback);
  const person = [
    { name: "lisa", age: 25 },
    { name: "hello", age: 44 },
  ];
  // response.send(`demo(${JSON.stringify(person)})`);
  response.send(`${a}(${JSON.stringify(person)})`);
});

//监听
app.listen(8080, (err) => {
  if (!err) {
    console.log("测试ajax请求的服务器开启成功了！测试地址如下");
    console.log("http://127.0.0.1:8080/1_ajax.html");
    console.log("http://127.0.0.1:8080/2_xhr.html");
    console.log("http://127.0.0.1:8080/3_ajax_get.html");
    console.log("http://127.0.0.1:8080/4_ajax_post.html");
    console.log("http://127.0.0.1:8080/5_ajax_parsing_json_data.html");
    console.log("http://127.0.0.1:8080/6_ajax_ie-get_cache_problem.html");
    console.log("http://127.0.0.1:8080/7_ajax_abnormal_overtime.html");
    console.log("http://127.0.0.1:8080/8_ajax_cancel_request.html");
    console.log("http://127.0.0.1:8080/9_ajax_avoid_repeated_requests.html");
    console.log("http://127.0.0.1:8080/10_jquery_encapsulated_ajax.html");
    console.log("http://127.0.0.1:8080/11_demo_callback_hell.html");
    console.log("http://127.0.0.1:8080/13_ssonp_solves_cross_domain.html");
    console.log("http://127.0.0.1:8080/14_Jsonp_encaps_ulatedby_jquery.html");
    // console.log("http://127.0.0.1:8080/15_test_cors.html");
  }
});
