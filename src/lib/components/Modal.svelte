<div class="modal" class:modal--contained={contained}>
  <div transition:animate={{ duration: 300 }} class="modal__container">
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

<script lang="ts">
import { createEventDispatcher } from "svelte";
import { slide, scale } from "svelte/transition";
import type { SlideParams, ScaleParams } from "svelte/transition";
import Button from "./Button.svelte";
import Icon from "./Icon.svelte";

export let contained: boolean = false;

const dispatch = createEventDispatcher();

function handleClose() {
  dispatch("close");
}

function animate(node: Element, args: SlideParams | ScaleParams) {
  return contained ? scale(node, args) : slide(node, args);
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

.modal--contained {
  align-items: center;
  justify-content: center;
}

.modal__container {
  z-index: 1;
  position: relative;
  width: 100%;
  padding: 16px;
  height: 80vh;
  border-radius: 12px 12px 0 0;
  background-color: var(--color-white);
}

.modal--contained .modal__container {
  width: 90%;
  height: auto;
  border-radius: 12px;
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
