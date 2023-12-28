<button on:click class="button">
  <slot />
</button>

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
</style>
