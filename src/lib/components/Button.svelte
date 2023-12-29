<button
  on:click
  {type}
  class="button"
  class:button--primary={variant === "primary"}
  class:button--secondary={variant === "secondary"}
  class:button--icon={icon}
  class:button--full-width={fullWidth}
>
  <slot />
</button>

<script lang="ts">
export let icon: boolean = false;
export let variant: "primary" | "secondary" = "primary";
export let type: "button" | "submit" = "button";
export let fullWidth: boolean = false;
</script>

<style>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 30px;
  color: var(--color-white);
}

.button--primary {
  background-color: var(--color-primary);
}

.button--secondary {
  color: var(--color-text);
  background-color: var(--color-grey-light);
}

.button--icon {
  padding: 8px;
}

.button--full-width {
  width: 100%;
}
</style>
