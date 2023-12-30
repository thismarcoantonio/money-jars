<div class="modal">
  <div transition:slide={{ duration: 300 }} class="modal__container">
    <div class="modal__header">
      <slot name="header" />
      <Button on:click={handleClose} icon variant="secondary">
        <Icon icon="close" />
      </Button>
    </div>
    <slot />
  </div>
  <button class="modal__overlay" on:click={handleClose} />
</div>

<script>
import { createEventDispatcher } from "svelte";
import { slide } from "svelte/transition";
import Button from "./Button.svelte";
import Icon from "./Icon.svelte";

const dispatch = createEventDispatcher();

function handleClose() {
  dispatch("close");
}
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

.modal__container {
  z-index: 1;
  position: relative;
  width: 100%;
  padding: 16px;
  height: 80vh;
  background-color: white;
  border-radius: 12px 12px 0 0;
}

.modal__header {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
