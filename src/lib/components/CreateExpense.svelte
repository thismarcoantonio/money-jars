<div class="create-expense">
  {#if !showExpenseForm}
    <Button fullWidth on:click={toggleExpenseForm}>Create Expense</Button>
  {:else}
    <Card>
      <form>
        <Input
          type="number"
          label="Amount"
          name="amount"
          value={expense.amount}
        />
        <Input
          label="Description"
          name="description"
          value={expense.description}
        />
        <div class="create-expense__form-actions">
          <Button on:click={toggleExpenseForm} fullWidth variant="secondary">
            Cancel
          </Button>
          <Button fullWidth type="submit">Save</Button>
        </div>
      </form>
    </Card>
  {/if}
</div>

<script lang="ts">
import Button from "./Button.svelte";
import Input from "./Input.svelte";
import Card from "./Card.svelte";

const expense = {
  amount: null,
  description: "",
};

let showExpenseForm: boolean = false;

function toggleExpenseForm() {
  showExpenseForm = !showExpenseForm;
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
