<template>
  <div class="header">
    <div class="header__top-header">
      <ul class="header__top-header-nav">
        <li>Login</li>
        <li>Entries</li>
      </ul>
      <div class="header__search-box">
          <input type="text" class="header__search-input"/>
          <button class="header__btn-search"></button>
      </div>
    </div>
    <div class="header__main">
      <div class="header__logo">
        <span>CELEBRITIES</span>
        <label>fan zone</label>
      </div>
      <ul class="header__nav">
        <li><a class="active" href="#">HOME</a></li>
        <li><a href="#">CELEBRITIES</a></li>
        <li><a href="#">GALLERY</a></li>
        <li><a href="#">NEWS</a></li>
        <li><a href="#">CONTACTS</a></li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Righteous&family=Roboto+Condensed:wght@300&display=swap');

.header__btn-search{background-image: url("~@/UI/Assets/Images/search.svg")}
</style>
