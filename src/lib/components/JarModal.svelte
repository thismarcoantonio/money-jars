<Modal on:close>
  <span slot="header">Money Jar</span>
  <div>
    <div>
      {jar.title}
      {jar.amount}
    </div>
    <button>+</button>
  </div>
  <div>
    <form>
      <input placeholder="Add expense" />
      <button type="submit">Save</button>
    </form>
    {#each jar.history as history}
      <div>
        {history.date}
        {history.amount}
      </div>
    {/each}
  </div>
</Modal>

<script lang="ts">
import Modal from "./Modal.svelte";
import type { Jar } from "../types/Jar";

export let jar: Jar;
</script>
