<header class="header">
  <h1>Money Jars</h1>
  <div>
    <button on:click={() => dispatch("create-jar")}> create jar + </button>
  </div>
</header>

<script>
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();
</script>

<style>
.header {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
