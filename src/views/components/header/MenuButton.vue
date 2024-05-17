<script setup lang="ts">

</script>

<template>
  <div class="menu-button" @click="toggleDropDown">
    <div>
          <span class="line-1" :style="{
            transform: !dropDownActive ? '' : 'translateY(7px) rotate(45deg)'
          }"></span>
      <span class="line-2" :style="{
            transform: !dropDownActive ? 'translateY(13px)' : 'translateY(7px) rotate(-45deg)'
          }"></span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dropDownActive: false
    }
  },
  emits: ['toggle-dropdown'],
  methods: {
    toggleDropDown() {
      this.dropDownActive = !this.dropDownActive;
      this.$emit('toggle-dropdown', this.dropDownActive);
    }
  },
  props: {
    active: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    active(newValue, _) {
      this.dropDownActive = newValue;
    }
  }
}
</script>

<style scoped>

.menu-button {
  width: 30px;
  height: 20px;
  cursor: pointer;
  pointer-events: auto;
  position: relative;
}
.menu-button div {
  position: relative;
}
.menu-button span {
  transition: transform 0.2s ease-in-out;
  position: absolute;
  height: 2px;
  width: 26px;
  background-color: var(--black-color);
  border-radius: 4px;
}

</style>