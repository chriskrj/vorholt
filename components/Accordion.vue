<template>
  <dl class="Accordion" role="presentation">
    <Accordion-item
      v-for="item in content"
      :multiple="multiple"
      :item="item"
      :groupId="groupId"
      :key="item.id">
    </Accordion-item>
  </dl>
</template>
<script>
import AccordionItem from '~/components/Accordion-item.vue'

export default {
  components: {
    AccordionItem
  },
  props: {
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      groupId: null
    }
  },
  mounted() {
    this.groupId = this.$el.id
  }
}
</script>

