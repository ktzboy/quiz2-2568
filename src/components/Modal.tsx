import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddExpenseModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string, 
    amount: number | string, 
    category: string
  ) => void;
};

export default function AddExpenseModal({}: AddExpenseModalProps) {
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<string | number>(0);
  const [category, setCategory] = useState<string | null>("");

  const handleSubmit = () => {
    
  };

  // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
  let val_number: number = Number("500.0");
  console.log(val_number + 100); // 600.0

  return (
    /* Type additional text here. */
    <div
      className="modal fade"
      id="modalexpense"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="modalregisterLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Expense</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Stack
              h={300}
              bg="var(--mantine-color-body)"
              align="stretch"
              justify="center"
              gap="md"
            >
              <TextInput
                label="Expense Name"
                placeholder="E.g.Coca-Cola"
                description="Expense Name"
                error={name.trim() ? "" : "Expense Name is required"}
                withAsterisk
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <NumberInput
                label="Amount"
                description="Amount"
                error={amount===0 ? "Amount is required" : ""}
                placeholder="0"
                min={0}
                value={amount} 
                onChange={setAmount}
              />
              <Select
                label="Category"
                description="Category"
                placeholder="Select Category"
                 data={['Food', 'Transport', 'Entertainment']}
                error={category?.trim() ? "" : "Category is required"}
                value={category} 
                onChange={setCategory}
              />
            </Stack>
          </div>
          <div className="modal-footer">
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
    
  );
}
