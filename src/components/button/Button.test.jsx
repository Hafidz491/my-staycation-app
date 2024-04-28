import { it, expect } from "vitest";
import Button from "./Button";

it("should not allow click button if isDisabled is present", () => {
  const container = <Button isDisabled />;

  expect(container.props.isDisabled).toBeTruthy();
});

it("should render loading or spinner", () => {
  const container = <Button isLoading />;

  expect(container.props.isLoading).toBeTruthy();
});

it("should render <a> tag", () => {
  const container = <Button type="link" isExternal />;

  expect(container.props.isExternal).toBeTruthy();
});
