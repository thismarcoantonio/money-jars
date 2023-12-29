<div class="input">
  <label for={name} class="input__label">{label}</label>
  {#if type === "text"}
    <input bind:value id={name} {name} class="input__field" type="text" />
  {:else if type === "number"}
    <input bind:value id={name} {name} class="input__field" type="number" />
  {/if}
</div>

<script lang="ts">
import type { HTMLInputTypeAttribute } from "svelte/elements";

export let label: string;
export let name: string;
export let type: HTMLInputTypeAttribute = "text";
export let value: string | number | null;
</script>

<style>
.input {
  margin-bottom: 16px;
}

.input__label {
  display: block;
  font-weight: 500;
  margin-bottom: 4px;
}

.input__field {
  border: 0;
  width: 100%;
  padding: 12px;
  display: block;
  border-radius: 6px;
  background-color: var(--color-grey-light);
}
</style>
