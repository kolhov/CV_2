<script setup lang="ts"></script>

<template>
  <div class="timeline">
    <div class="container right">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.timeline {
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  background-color: $main-9;

  /* The line*/
  &::after {
    content: "";
    position: absolute;
    width: 3px;
    background-color: $main-6;
    top: 0;
    bottom: 0;
    left: 10%;
    margin-left: -8px;
  }

  &:nth-last-child(1)::after {
    height: 32px;
  }
  &:nth-child(2)::after {
    top: 32px;
  }
}

.container {
  padding: 16px 30px;
  position: relative;
  background-color: inherit;
  width: 85%;

  /* The circles*/
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: $main-9;
    border: 4px solid $main-4;
    box-shadow: 0 0 0 4px $main-9;

    top: 32px;
    border-radius: 50%;
    z-index: 4;
  }
}

.right {
  left: 10%;

  /* The arrows */
  &::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 32px;
    width: 0;
    z-index: 1;
    left: 22px;
    border: medium solid white;
    border-width: 8px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* The circle */
  &::after {
    left: -15px;
  }
}

.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  -webkit-box-shadow: 0px 4px 10px 1px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 10px 1px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 10px 1px rgba(34, 60, 80, 0.2);
}

@media screen and (max-width: 600px) {
  .timeline::after {
    left: 30.5px;
  }

  .container {
    width: 100%;
    padding-left: 60px;
    padding-right: 25px;

    &::before {
      left: 51px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent white transparent transparent;
    }
  }

  .right {
    left: 0%;

    &::after {
      left: 15px;
    }
  }
}
</style>
