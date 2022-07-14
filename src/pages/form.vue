<script lang="ts" setup>
import { generateCode } from "~/utils/string";

const code = ref("");

const form = reactive({
  code: "",
  error: "",
});

const isSubmit = ref(false);

const refreshCode = () => {
  code.value = generateCode(6);
  form.code = "";
  form.error = "";
  isSubmit.value = false;
};

const submit = () => {
  if (form.code === "") {
    form.error = "Please enter the code";
  } else if (form.code !== code.value) {
    form.error = "Incorrect code.";
  } else {
    form.error = "";
  }
  isSubmit.value = true;
};

onMounted(() => {
  code.value = generateCode(6);
});
</script>

<template>
  <div>
    <ThePage title="Form" />
    <h1>Form</h1>
    <div class="my-3 display-5 text-center">
      <span class="font-monospace">{{ code }}</span>
      <button type="button" class="btn btn-link" @click="refreshCode()">
        Refresh
      </button>
    </div>
    <fieldset class="row">
      <div class="col-md-6 offset-md-3">
        <div class="mb-3">
          <label for="formCode" class="form-label">Code</label>
          <input
            id="formCode"
            ref="formCode"
            v-model="form.code"
            type="text"
            class="form-control"
            :class="{
              'is-invalid': form.error,
              'is-valid': !form.error && isSubmit,
            }"
            placeholder="Please enter the above code"
            @keyup.enter="submit()"
          />
          <div class="invalid-feedback">
            {{ form.error }}
          </div>
          <div class="valid-feedback">Looks Good!</div>
        </div>
        <button type="submit" class="btn btn-primary" @click="submit()">
          Submit
        </button>
      </div>
    </fieldset>
  </div>
</template>
