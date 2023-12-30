<div class="create-expense">
  {#if !showExpenseForm}
    <Button fullWidth on:click={toggleExpenseForm}>Create Expense</Button>
  {:else}
    <Card>
      <form novalidate on:submit|preventDefault={handleSubmit}>
        <Input
          type="number"
          label="Amount"
          name="amount"
          bind:value={expense.amount}
        />
        <Input
          label="Description"
          name="description"
          bind:value={expense.description}
        />
        <div class="create-expense__form-actions">
          <Button on:click={toggleExpenseForm} fullWidth variant="secondary">
            Cancel
          </Button>
          <Button disabled={!expense.amount} fullWidth type="submit">
            Save
          </Button>
        </div>
      </form>
    </Card>
  {/if}
</div>

<script lang="ts">
import Button from "./Button.svelte";
import Input from "./Input.svelte";
import Card from "./Card.svelte";
import { createExpense } from "../utils/file";
import type { Jar } from "../types/Jar";

export let jarId: Jar["id"];

let expense = {
  amount: null,
  description: "",
};

let showExpenseForm: boolean = false;

function toggleExpenseForm() {
  showExpenseForm = !showExpenseForm;
}

async function handleSubmit(event: SubmitEvent) {
  if (expense.amount) {
    await createExpense({
      id: jarId,
      expense: {
        amount: expense.amount,
        date: new Date().getTime(),
        description: expense.description,
      },
    });
    (event.target as HTMLFormElement).reset();
    showExpenseForm = false;
  }
}
</script>

<style>
.create-expense {
  margin: 16px 0;
}

.create-expense__form-actions {
  gap: 8px;
  display: flex;
}
</style>
