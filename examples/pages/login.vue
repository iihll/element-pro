<template>
  <div style="margin: 50px 400px">
    <!--
        api:
          rules、name
          @on-change
          @on-submit

          captcha slot
          text，也支持图形验证码，点击换图像
          type 改名为 button-type
          -->
    <Button @click="pl = '新的 PL'">改 pl</Button>
    <Login @on-submit="hs">
      <UserName
        @on-change="hc"
        :placeholder="pl"
        :rules="usernameRule"
        name="username"
      />
      <Submit />
    </Login>
  </div>
</template>
<script>
import Login from '../../src/components/login'

const { UserName, Submit } = Login

export default {
  components: { Login, UserName, Submit },
  data() {
    return {
      username: 'aresn',
      pl: '我是 UserName',
      usernameRule: [
        {
          required: true,
          message: '用户名不能为空',
          trigger: 'change',
        },
      ],
    }
  },
  methods: {
    hs(status, values) {
      console.log(status)
      console.log(values)
    },
    hc(val) {
      console.log(val)
    },
    handleCaptcha(val, valAll) {
      console.log(val)
      console.log(valAll)
    },
    handleGet(val) {
      console.log(val)
    },
    handleBeforeClick() {
      return new Promise((resolve, reject) => {})
    },
  },
}
</script>
