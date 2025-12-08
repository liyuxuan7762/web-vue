<template>
  <div class="card-container">
    <div class="card-layer layer-bottom"></div>
    <div class="card-layer layer-middle"></div>

    <div class="card-main">
      <div class="bg-shape blue-shape"></div>
      <div class="bg-shape green-shape"></div>

      <div class="card-content">
        <div class="card-header">
          <h2 class="user-name">{{ name }}</h2>
        </div>

        <div class="card-body">
          <p class="user-role">{{ role }}</p>
        </div>

        <div class="card-footer">
          <div class="details-left">
            <div class="card-number">
              <span class="num-part">{{ cardNumberDisplay.start }}</span>
              <span class="dots">
                <span class="dot">●</span><span class="dot">●</span
                ><span class="dot">●</span><span class="dot">●</span>
                &nbsp;
                <span class="dot">●</span><span class="dot">●</span
                ><span class="dot">●</span><span class="dot">●</span>
              </span>
              <span class="num-part">{{ cardNumberDisplay.end }}</span>
            </div>
            <div class="card-balance">${{ balance }}</div>
          </div>

          <div class="details-right">
            <svg
              class="visa-logo"
              viewBox="0 0 100 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#fff"
                d="M42.26,0.37L31.33,26.54L26.5,26.54L21.05,5.55C20.47,3.13,18.59,2.02,15.68,1.96L0.34,1.86L0.46,2.77C4.69,3.95,8.13,5.92,11.39,8.55L17.72,31.86L24.89,31.86L38.41,0.37L42.26,0.37ZM66.44,19.26C66.49,12.38,57.19,11.95,57.25,9.08C57.27,8.21,58.07,7.24,60.1,6.86C61.12,6.67,63.93,6.56,66.6,7.74L67.8,1.95C66.19,1.4,64.12,0.95,61.47,0.95C54.12,0.95,48.97,4.78,48.8,11.66C48.67,16.73,53.33,19.49,56.88,21.19C60.54,22.95,61.76,24.08,61.73,25.68C61.68,28.13,58.74,29.2,56.03,29.23C52.79,29.26,50.93,28.37,49.46,27.71L48.06,33.91C49.86,34.72,53.21,35.43,56.57,35.41C64.39,35.41,69.52,31.6,69.57,24.32L69.6,24.16C69.6,23.11,69.3,21.99,68.5,21.04C67.9,20.31,67.2,19.8,66.44,19.26M87.52,0.37L81.04,31.86L87.21,31.86L93.69,0.37L87.52,0.37ZM44.25,0.37L39.06,24.85L38.74,23.23L44.25,0.37Z"
                transform="scale(0.8) translate(10, 5)"
              />
              <text
                x="50"
                y="28"
                font-family="Arial, sans-serif"
                font-weight="bold"
                font-style="italic"
                font-size="24"
                fill="white"
                text-anchor="middle"
                v-if="false"
              >
                VISA
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankCard",
  props: {
    name: {
      type: String,
      default: "Gega Smith",
    },
    role: {
      type: String,
      default: "OverBridge Expert",
    },
    cardNumber: {
      type: String,
      default: "4756123456789018", // 默认全数字，用于演示脱敏
    },
    balance: {
      type: String,
      default: "3.469.52",
    },
  },
  computed: {
    cardNumberDisplay() {
      // 简单处理：取前4位和后4位，中间用圆点
      const numStr = this.cardNumber.replace(/\s/g, "");
      if (numStr.length < 8) {
        return { start: "0000", end: "0000" };
      }
      return {
        start: numStr.substring(0, 4),
        end: numStr.substring(numStr.length - 4),
      };
    },
  },
};
</script>

<style scoped>
/* 引入类似图片中的字体，这里使用 Google Fonts 的 Poppins */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

.card-container {
  position: relative;
  width: 380px; /* 卡片宽度 */
  height: 260px; /* 给下方层叠留出空间 */
  font-family: "Poppins", sans-serif;
  margin: 20px auto;
}

/* --- 层叠装饰效果 (底部黄色/橙色) --- */
.card-layer {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.layer-bottom {
  width: 80%;
  height: 40px;
  background-color: #f3dcb5; /* 浅黄色 */
  bottom: -15px;
  z-index: 0;
}

.layer-middle {
  width: 90%;
  height: 40px;
  background-color: #d97034; /* 橙色 */
  bottom: -8px;
  z-index: 1;
}

/* --- 主卡片样式 --- */
.card-main {
  position: relative;
  width: 100%;
  height: 240px;
  background-color: #344359; /* 深蓝灰色背景 */
  border-radius: 20px;
  overflow: hidden; /* 裁剪溢出的背景图形 */
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  color: white;
}

/* --- 背景几何图形 --- */
.bg-shape {
  position: absolute;
  border-radius: 50%;
}

.blue-shape {
  width: 300px;
  height: 300px;
  background-color: #4a6fe3; /* 亮蓝色 */
  top: -100px;
  left: -20px;
  opacity: 0.9;
  z-index: 1;
}

/* 那个绿色的圆角，稍微做大一点偏移到右上角 */
.green-shape {
  width: 250px;
  height: 250px;
  background-color: #5ccfa7; /* 青绿色 */
  top: -80px;
  right: -80px;
  z-index: 2;
  opacity: 0.9;
}

/* --- 卡片内容布局 --- */
.card-content {
  position: relative;
  z-index: 10;
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}

.card-header .user-name {
  margin: 0;
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 0.5px;
}

.card-body .user-role {
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
  margin-top: -30px; /* 稍微往上提一点，因为使用了 flex justify-between */
}

/* --- 底部区域：卡号、余额、Logo --- */
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.details-left {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.card-number {
  display: flex;
  align-items: center;
  font-size: 16px;
  letter-spacing: 1px;
  font-family: monospace; /* 数字等宽更好看 */
  margin-bottom: 5px;
}

.dots {
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px; /* 点稍微小一点 */
  margin: 0 10px;
  display: flex;
  align-items: center;
}

.dot {
  margin: 0 1px;
}

.card-balance {
  font-size: 22px;
  font-weight: 600;
}

.details-right {
  display: flex;
  align-items: flex-end;
}

.visa-logo {
  width: 60px;
  height: auto;
  opacity: 1;
}
</style>