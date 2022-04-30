<script>
import LoginItem from './login-item.js'

export default {
  name: 'UserName',
  mixins: [LoginItem],
  data() {
    return {
      className: 'el-pro-login-username',
      prefixIcon: 'el-icon-user',
      placeholder: '请输入用户名',
      type: 'text',
    }
  },
}
</script>
