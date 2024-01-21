import DagField from "./DagField";

export default class DagForm {
  private _fields: Map<string, DagField>;

  constructor(fields: DagField[]) {
    if (!this.fieldsHaveUniqueIds(fields)) {
      throw Error("Unable to process fields due to non-unique ids");
    }
    this._fields = new Map(fields.map((field) => [field.id, field]));
  }

  get size() {
    return this._fields.size;
  }

  getField(id: string): DagField | undefined {
    return this._fields.get(id);
  }

  private fieldsHaveUniqueIds(fields: DagField[]): boolean {
    const ids = new Set(fields.map(field => field.id));
    return fields.length === ids.size;
  }
}
