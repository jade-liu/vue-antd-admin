<template>
  <div id="components-form-demo-vuex">
    <ant-form :form="form" @submit="handleSubmit">
      <ant-form-item label="Name">
        <a-input
          v-decorator="[
            'name',
            {
              rules: [{ required: true, message: 'Name is required!' }],
            },
          ]"
        />
      </ant-form-item>
      <ant-form-item label="Username">
        <a-input
          v-decorator="[
            'username',
            {
              rules: [{ required: true, message: 'Username is required!' }],
            },
          ]"
        />
      </ant-form-item>
      <a-button type="primary" html-type="submit"> Submit </a-button>
    </ant-form>
  </div>
</template>

<script>
import antForm from "ant-design-vue/lib/form/index";
import antFormItem from "ant-design-vue/lib/form/FormItem";
export default {
  components: {
    antForm,
    antFormItem,
  },
  data() {
    return {
      name: "",
    };
  },
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
  watch: {
    username(val) {
      this.form.setFieldsValue({ username: val });
    },
  },
  created() {
    console.log('============', this.$form)
    this.form = this.$form.createForm(this, {
      onFieldsChange: (_, changedFields) => {
        console.log("changedFields", changedFields);
        this.$emit("change", changedFields);
      },
      mapPropsToFields: () => {
        return {
          username: this.$form.createFormField({
            value: this.username,
          }),
        };
      },
      onValuesChange: (_, values) => {
        console.log("values", values);
      },
    });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.commit("update", values);
        }
      });
    },
  },
};
</script>
<style>
#components-form-demo-vuex .language-bash {
  max-width: 400px;
  border-radius: 6px;
  margin-top: 24px;
}
</style>
