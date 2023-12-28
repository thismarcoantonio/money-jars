<div class="modal">
  <div transition:slide={{ duration: 300 }} class="modal__content">
    <slot name="header" />
    <slot />
  </div>
  <button class="modal__overlay" on:click={() => dispatch("close")} />
</div>

<!-- https://dribbble.com/shots/18258781-Inbox-requests-for-web3-mobile-app/attachments/13464398?mode=media -->

<script>
import { createEventDispatcher } from "svelte";
import { slide } from "svelte/transition";

const dispatch = createEventDispatcher();
</script>

<style>
.modal {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: flex-end;
}

.modal__content {
  z-index: 1;
  position: relative;
  width: 100%;
  padding: 16px;
  height: 60vh;
  background-color: white;
  border-radius: 12px 12px 0 0;
}

.modal__overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
