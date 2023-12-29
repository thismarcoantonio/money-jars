<Modal on:close>
  <span slot="header">Money Jar</span>
  <div class="jar-modal__info">
    <div class="jar-modal__title">
      {jar.title}
      <div class="jar-modal__amount">{formatCurrency(jar.amount)}</div>
    </div>
    <Button icon>
      <Icon icon="add" />
    </Button>
  </div>
  <div>
    <CreateExpense />
    <HistoryList historyList={jar.history} />
  </div>
</Modal>

<script lang="ts">
import Modal from "./Modal.svelte";
import Button from "./Button.svelte";
import Icon from "./Icon.svelte";
import CreateExpense from "./CreateExpense.svelte";
import HistoryList from "./HistoryList.svelte";
import { formatCurrency } from "../utils/numbers";
import type { Jar } from "../types/Jar";

export let jar: Jar;
</script>

<style>
.jar-modal__info {
  display: flex;
  justify-content: space-between;
}

.jar-modal__title {
  font-size: 18px;
  font-weight: 600;
}

.jar-modal__amount {
  font-size: 16px;
  font-weight: 400;
}
</style>
