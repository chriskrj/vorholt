<template>
<div :id="groupId + '-' + item.id" class="accordion-item" :class="{'is-active': item.active}">
  <dt class="accordion-item-title">
    <button @click="toggle" class="accordion-item-trigger">
      <h3 class="accordion-item-title-text">{{item.title}}</h3>
      <span class="accordion-item-trigger-icon"></span>
    </button>
  </dt>
  <transition name="accordion-item"
    @enter="startTransition"
    @after-enter="endTransition"
    @before-leave="startTransition"
    @after-leave="endTransition">
    <dd v-if="item.active" class="accordion-item-details">
      <div v-html="item.details" class="accordion-item-details-inner"></div>
      <div class="ApplyBox">
        <h3 class="Base-h3 u-marginBottom--r1">Wir freuen uns auf Ihre Bewerbung!</h3>
        <p class="Base-p">Bitte senden Sie Ihre Bewerbungsunterlagen an folgende Adresse:</p>
        <p class="Base-p"><a class="Base-iconLink-email" href="bewerbung@schlosserei-boike.de">bewerbung@schlosserei-boike.de</a></p>
      </div>
    </dd>
  </transition>
</div>
</template>
<script>

export default {
  name: 'Accordion-item',
  props: ['item', 'multiple', 'groupId'],
  methods: {
  toggle(event) {
    if (this.multiple) this.item.active = !this.item.active
    else {
      this.$parent.$children.forEach((item, index) => {
        if (item.$el.id === event.currentTarget.parentElement.parentElement.id) item.item.active = !item.item.active
        else item.item.active = false
      })
    }
  },
  startTransition(el) {
    el.style.height = el.scrollHeight + 'px'
  },

  endTransition(el) {
    el.style.height = ''
  }
  },
}
</script>

