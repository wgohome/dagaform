import DagField from "../src/models/DagField";
import DagForm from "../src/models/DagForm";


describe("DagForm", () => {

  test("can store and retrieve fields by id", () => {
    const fields = [
      new DagField("f1"),
      new DagField("f2"),
      new DagField("f3"),
    ];
    const form = new DagForm(fields);

    expect(form.getField("f2")).toBe(fields[1]);
    expect(form.getField("f99")).toBeUndefined();
  });

  test("rejects fields with non-unique ids", () => {
    const fields = [
      new DagField("f1"),
      new DagField("f2"),
      new DagField("f3"),
      new DagField("f3"),
    ];

    expect(() => new DagForm(fields)).toThrow("Unable to process fields due to non-unique ids");
  });

});
