<script lang="ts">
  import CustomWeb3Connector from '../components/CustomWeb3Connector.svelte';
  import { connect } from "connect-web3-svelte";
</script>

<div class="container">
  <h3 class="title">Test ConnectWeb3Svelte</h3>
  <button class="connect-button" on:click={connect}>Connect</button>
</div>

<CustomWeb3Connector />

<style>
  .container {
    max-width: 600px;
  }
  .title {
    font-size: 40px;
  }
  .connect-button {
    transition: all 0.15s ease-in-out 0s;
    position: relative;
    line-height: 1em;
    background-image: none;
    outline: none;
    overflow: hidden;
    box-sizing: border-box;
    background-color: rgb(64, 153, 255);
    border: none;
    color: rgb(255, 255, 255);
    box-shadow: rgb(50 50 93 / 11%) 0 4px 6px 0px, rgb(0 0 0 / 8%) 0 1px 3px 0,
      rgb(0 0 0 / 6%) 0 0 1px 0 inset;
    border-radius: 32px;
    font-size: 16px;
    font-weight: 600;
    height: 48px;
    width: 100%;
    margin: 0px auto;
    padding: 8px 12px;
    cursor: pointer;
    will-change: transform;
    max-width: 224px;
  }
</style>
