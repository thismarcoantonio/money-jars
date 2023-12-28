<div class="jar">
  <div class="jar__header">
    {jar.title}
    <div>${jar.amount}</div>
  </div>
  <ul>
    {#each jar.history as history}
      <li>{history.amount}</li>
    {/each}
  </ul>
</div>

<script lang="ts">
import type { Jar } from '../types/Jar';

export let jar: Jar;
</script>

<style>
.jar__header {
  width: 100%;
  padding: 24px;
  border-radius: 16px;
  background-color: #b48484;
  color: white;
}
</style>