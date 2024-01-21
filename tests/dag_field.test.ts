import DagField from "../src/models/DagField";

test("Field stores an immutable id property based on id passed when instantiating", () => {
  const field = new DagField("some-id");

  expect(field.id).toBe("some-id");
});
