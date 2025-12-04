<template>
  <div class="article-page">
    <div
      v-for="item in articles"
      :key="item.id"
      @click="handleClick(item.id)"
      class="article-item"
    >
      <div class="head">
        <img :src="item.pic" alt="" />
        <div class="con">
          <p class="title">{{ item.title }}</p>
          <p class="other">{{ item.other }}</p>
        </div>
      </div>
      <div class="body">
        <p>{{ item.body }}</p>
      </div>
      <div class="foot">点赞 {{ item.like }} | 浏览 {{ item.view }}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// 请求地址: https://mock.boxuegu.com/mock/3083/articles
// 请求方式: get
export default {
  name: "ArticlePage",
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    handleClick(id) {
      this.$router.push(`/detail/${id}`);
    },
  },
  created() {
    axios({
      url: "https://mock.boxuegu.com/mock/3083/articles",
      method: "get",
    })
      .then((res) => {
        // 创建mock数据
        console.log(res);
        this.articles = [
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
            view: 315,
            pic: "http://teachoss.itheima.net/heimaQuestionMiniapp/%E5%AE%98%E6%96%B9%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%402x.png",
          },
        ];
      })
      .catch((err) => {
        console.log(err);
        this.articles = [
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
        ];
      });
  },
};
</script>

<style lang="less" scoped>
.article-page {
  background: #f5f5f5;
  cursor: pointer;
}
.article-item:hover {
  background: #e4e4e4;
}
.article-item {
  cursor: pointer;
  transition: all 0.3s;
  margin-bottom: 10px;
  background: #fff;
  padding: 10px 15px;
  .head {
    display: flex;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      overflow: hidden;
    }
    .con {
      flex: 1;
      overflow: hidden;
      padding-left: 15px;
      p {
        margin: 0;
        line-height: 1.5;
        &.title {
          text-overflow: ellipsis;
          overflow: hidden;
          width: 100%;
          white-space: nowrap;
        }
        &.other {
          font-size: 10px;
          color: #999;
        }
      }
    }
  }
  .body {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .foot {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
}
</style>