<template>
  <div class="Infobox-container Base-theme--dark">
    <div class="Infobox">
      <div class="Infobox-icon">
        <svg class="u-scalingInlineSVG" xmlns="http://www.w3.org/2000/svg" width="512" height="512" role="img" viewBox="0 0 512 512" preserveAspectRatio="xMidYMin slice" style="padding-bottom: 100%;" >
          <path d="M255.93.14c141.35 0 255.93 114.58 255.93 255.93C511.86 397.42 397.27 512 255.93 512S0 397.41 0 256.07 114.59.14 255.93.14zm0 46.54c-115.65 0-209.4 93.74-209.4 209.39 0 115.65 93.75 209.4 209.4 209.4 115.64 0 209.39-93.76 209.39-209.4S371.58 46.68 255.93 46.68zm-11.779 49.2461c7.27-4.2646 16.278-4.2646 23.548 0 7.1489 4.1936 11.5184 11.866 11.496 20.133l-.005.4209v129.95l58.98 59.02c6.0258 5.8484 8.4333 14.4897 6.2995 22.6114-2.1337 8.1216-8.4777 14.4637-16.6 16.595-7.9823 2.0946-16.4651-.197-22.3046-5.9979l-.3049-.3085-65.79-65.8a22.62 22.62 0 0 1-2.91-3.56c-.37-.56-.62-1.14-.93-1.72a22.77 22.77 0 0 1-1.21-2.29 197.6412 197.6412 0 0 1-1.32-4.36 22.39 22.39 0 0 1-.4303-3.7585l-.0097-.6315V116.48c-.1747-8.4268 4.221-16.2893 11.491-20.5539z"/>
        </svg>
      </div>
      <h3 class="Base-h3 u-textAlign--center">Unsere Öffnungszeiten</h3>
      <div class="Infobox-content u-textAlign--center">
        <p class="Base-p"><strong>Montags - Donnerstags</strong></p>
        <p class="Base-p">Werkstatt: 07:00 Uhr - 15:45 Uhr<br/>
        Büro: 08:00 Uhr - 15:45 Uhr</p>
        <p class="Base-p"><strong>Freitags</strong></p>
        <p class="Base-p">Werkstatt: 07:00 Uhr - 13:15 Uhr<br/>
        Büro: 08:00 Uhr - 13:15 Uhr</p>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .Infobox-container {
    position: relative;
    background-color: var(--main-bg-color);
    border-radius: 8px;
    overflow: hidden;

    &::after {
      position: absolute;
      bottom: -25%;
      right: -10%;
      width: 100%;
      height: 100%;
      content: "";
      background-size: contain;
      background-image: url('../assets/Images/logo-white.svg');
      background-position: bottom right;
      background-repeat: no-repeat;
      opacity: 0.2;
    }
  }

  .Infobox-icon {
    display: block;
    width: 50px;
    margin: 0 auto;
    fill: white;
    margin-bottom: 32px;
  }

  .Infobox {
    padding: calc(16px + 2vw);
  }
</style>
