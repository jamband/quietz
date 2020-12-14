<template>
  <div>
    <div class="my-3 display-4 text-center">
      {{ code }}
      <button type="button" class="btn btn-link" @click="refreshCode()">
        Refresh
      </button>
    </div>
    <fieldset class="row">
      <div class="col-md-6 offset-md-3">
        <div class="mb-3">
          <input
            ref="formCode"
            v-model="form.code"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': form.error, 'is-valid': !form.error && isSubmit }"
            placeholder="Please enter the above code"
            @keyup.enter="submit()"
          >
          <div class="invalid-feedback">
            {{ form.error }}
          </div>
          <div class="valid-feedback">
            Looks Good!
          </div>
        </div>
        <button type="submit" class="btn btn-primary" @click="submit()">
          Submit
        </button>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  data () {
    return {
      code: '',
      form: {
        code: '',
        error: ''
      },
      isSubmit: false
    }
  },
  mounted () {
    this.generateCode()
    this.$refs.formCode.focus()
  },
  methods: {
    generateCode () {
      this.code = [...Array(6)].map(() => {
        return Math.floor(Math.random() * Math.floor(10)).toString()
      }).join('')
    },
    refreshCode () {
      this.generateCode()
      this.form.code = ''
      this.form.error = ''
      this.isSubmit = false
    },
    submit () {
      if (this.form.code === '') {
        this.form.error = 'Please enter the code.'
      } else if (this.form.code !== this.code) {
        this.form.error = 'Incorrect code.'
      } else {
        this.form.error = ''
      }
      this.isSubmit = true
    }
  }
}
</script>
