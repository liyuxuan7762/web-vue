import { Dialog } from "vant";
export const askToLoginPopup = () => {
  Dialog.alert({
    title: "请登录",
    message: "你还没有登录请先登录",
    showConfirmButton: true,
    showCancelButton: true,
    confirmButtonText: "去登录",
    cancelButtonText: "再逛逛",
  })
    .then(() => {
      this.$router.replace({
        path: "/login",
        query: {
          redirect: this.$route.fullPath,
        },
      });
    })
    .catch(() => { });
}