<div class="jar">
  <button class="jar__header" on:click>
    {jar.title}
    <div>${jar.amount}</div>
  </button>
  <HistoryList historyList={jar.history} />
</div>

<script lang="ts">
import HistoryList from "./HistoryList.svelte";
import type { Jar } from "../types/Jar";

export let jar: Jar;
</script>

<style>
.jar {
  flex-shrink: 0;
  margin-right: 16px;
  width: calc(50% - 16px);
}

.jar__header {
  width: 100%;
  height: 160px;
  padding: 24px;
  border-radius: 16px;
  background-color: #b48484;
  color: white;
  margin-bottom: 16px;
}
</style>
