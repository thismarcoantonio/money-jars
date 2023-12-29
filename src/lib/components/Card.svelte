<div class="card">
  <slot />
</div>

<style>
.card {
  border: 1px solid var(--color-grey-light);
  border-radius: 6px;
  padding: 8px;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}
</style>
