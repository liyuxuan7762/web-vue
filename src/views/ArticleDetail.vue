<template>
  <div class="article-detail-page">
    <nav @click="goBack" class="nav">
      <span class="back">&lt;</span> 面经详情
    </nav>
    <header class="header">
      <h1>{{ article.title }}</h1>
      <p>{{ article.view }} 浏览量 | {{ article.like }} 点赞数</p>
      <p>
        <img :src="article.pic" alt="" />
        <span>{{ article.other }}</span>
      </p>
    </header>
    <main class="body">
      {{ article.body }}
    </main>
  </div>
</template>

<script>
// 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id
// 请求方式: get
export default {
  name: "ArticleDetailPage",
  data() {
    return {
      article: {},
      articleList: [
        {
          id: 1,
          title: "百度前端面经",
          other: "青春, 那么骚 | 2022-01-20",
          body: "虽然百度这几年发展势头落后于AT，甚至快被京东赶上了，毕竟瘦死的骆驼比马大，面试还是相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数）",
          like: 44,
          view: 315,
          pic: "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
        },
        {
          id: 2,
          title: "京东前端面经",
          other: "青春, 那么骚 | 2022-01-20",
          body: "京东这几年发展势头快于百度，面试也相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数）",
          like: 44,
          view: 315,
          pic: "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
        },
        {
          id: 3,
          title: "京东前端面经",
          other: "青春, 那么骚 | 2022-01-20",
          body: "京东这几年发展势头快于百度，面试也相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数）",
          like: 44,
          pic: "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
          view: 315,
        },
        {
          id: 4,
          title: "京东前端面经",
          other: "青春, 那么骚 | 2022-01-20",
          body: "京东这几年发展势头快于百度，面试也相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数）",
          like: 44,
          view: 315,
          pic: "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
        },
        {
          id: 5,
          title: "京东前端面经",
          other: "青春, 那么骚 | 2022-01-20",
          body: "京东这几年发展势头快于百度，面试也相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数）",
          like: 44,
          view: 315,
          pic: "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
        },
        {
          id: 6,
          title: "京东前端面经",
          other: "青春, 那么骚 | 2022-01-20",
          body: "京东这几年发展势头快于百度，面试也相当有难度和水准的。一面1.询问你的项目经验、学习经历、主修语言（照实答）2.解释ES6的暂时性死区（ let 和 var 的区别）3.箭头函数、闭包、异步（老生常谈，参见上文）4.高阶函数（呃……我真不太清楚这是啥，听起来挺像闭包的）5.求N的阶乘末尾有多少个0，在线码代码或讲思路（求因数，统计2、5、10的个数）",
          like: 44,
          view: 315,
          pic: "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
        },
      ],
    };
  },
  created() {
    // 获取文章id
    const id = this.$route.params.id;

    // 在文章列表中查询到这个文章
    this.article = this.articleList.find((item) => item.id === +id);
  },
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;
    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }
  .header {
    padding: 0 15px;
    p {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
  }
  .body {
    padding: 0 15px;
  }
}
</style>