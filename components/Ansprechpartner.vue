<template>
  <div class="Person-container">
    <div class="Person">
      <img class="Person-image" :src="require('@/assets/Images/' + imagesrc + '')" :alt="imagealt" width="110" height="110c">
      <h3 class="Base-h3">{{fullname}}</h3>
      <p class="Base-p">{{position}}</p>
      <a class="Base-iconLink-phone">{{phone}}</a>
      <a class="Base-iconLink-fax">{{fax}}</a>
      <a class="Base-iconLink-email" href="">{{email}}</a>
    </div>
  </div>
</template>
<script>
export default {
  props: ['fullname','position','phone','fax','email','imagesrc', 'imagealt']
}
</script>

