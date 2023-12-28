<header class="header">
  <h1 class="header__title">
    <Icon icon="cash" size={32} />
    moneyjars
  </h1>
  <div>
    <Button on:click={() => dispatch("create-jar")}>
      Create Jar <Icon icon="add" />
    </Button>
  </div>
</header>

<script>
import { createEventDispatcher } from "svelte";
import Button from "./Button.svelte";
import Icon from "./Icon.svelte";

const dispatch = createEventDispatcher();
</script>

<style>
.header {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__title {
  gap: 4px;
  display: flex;
  align-items: center;
  font-size: 22px;
  color: var(--color-primary);
}
</style>
