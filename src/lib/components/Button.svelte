<button on:click class="button" class:button--icon={icon}>
  <slot />
</button>

<script lang="ts">
export let icon: boolean = false;
</script>

<style>
.button {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 30px;
  color: var(--color-white);
  background-color: var(--color-primary);
}

.button--icon {
  padding: 8px;
  color: var(--color-text);
  background-color: var(--color-grey-light);
}
</style>
