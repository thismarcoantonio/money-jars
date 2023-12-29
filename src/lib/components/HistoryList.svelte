<ul class="history-list">
  {#each historyList as history}
    <li class="history-list__item">
      <Card>
        <div class="history-list__amount">
          {formatCurrency(history.amount)}
        </div>
        <div class="history-list__date">
          {formatDate(history.date)}
        </div>
      </Card>
    </li>
  {/each}
</ul>

<script lang="ts">
import Card from "./Card.svelte";
import { formatCurrency, formatDate } from "../utils/numbers";
import type { JarHistory } from "../types/Jar";

export let historyList: JarHistory[];
</script>

<style>
.history-list {
  list-style: none;
}

.history-list__item {
  margin-bottom: 8px;
}

.history-list__amount {
  font-size: 20px;
  font-weight: 600;
}

.history-list__date {
  opacity: 0.8;
}
</style>
