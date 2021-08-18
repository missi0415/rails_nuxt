<template>
  <v-text-field
    v-model="setName"
    :counter='max'
    :rules="rules"
    label="ユーザー名を入力"
    placeholder="あなたの表示名"
    outlined
  ></v-text-field>
  
</template>

<script>
export default {
  data() {
    const max = 30
    return{
      max,
      rules: [
        value => !!value || '',
        value => (!!value && max >= value.length) || `${max}文字以内で入力してください`
      ]
    }
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    setName: {
      get () { return this.name },
      set (newVal) { return this.$emit('update:name',newVal) }
    }
  }
}

</script>
