import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { page } from "vitest/browser";
import { RadioGroup } from "@/shared/ui/radio-group";
import { RadioOptionCard } from "./RadioOptionCard";
import type { DailyGoalType } from "../../model/types/types";

const mockOption: DailyGoalType = {
  id: "Casual",
  value: "15",
  header: "Casual",
  description: "Keeping your skills fresh",
};

afterEach(() => {
  cleanup();
});

describe("RadioOptionCard", () => {
  it("RadioOptionCard looks correct", async () => {
    render(
      <RadioGroup>
        <RadioOptionCard option={mockOption} />
      </RadioGroup>,
    );
    await expect(page.getByTestId("radio-option-card")).toMatchScreenshot();
  });
});
