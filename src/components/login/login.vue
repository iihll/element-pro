<template>
  <div class="el-pro-login">
    <el-form ref="formRef" @submit.native.prevent>
      <slot></slot>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      formValidate: {},
    }
  },
  provide() {
    return { LoginInstance: this }
  },
  methods: {
    handleSubmit() {
      this.$refs.formRef.validate((valid) => {
        this.$emit(
          'on-submit',
          valid,
          JSON.parse(JSON.stringify(this.formValidate))
        )
      })
    },
    handleValidate(fields, cb) {
      let status = true

      fields.forEach((field) => {
        this.$refs.formRef.validateField(field, (valid) => {
          // 验证不通过
          if (valid) status = false
        })
      })

      cb(status)
    },
  },
}
</script>
