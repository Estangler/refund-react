import { CATEGORIES, CATEGORIES_KEYS } from "../utils/categories";
import { useState } from "react";
import { Input } from "../components/Input";
import { Upload } from "../components/Upload";
import { Select } from "../components/Select";
import { Button } from "../components/Button";

export function Refund() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [filename, setFileName] = useState<File | null>(null);
  const [isLoading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(name, amount, category, filename);
  }
  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-[512px]"
    >
      <header>
        <h1 className="text-xl font-bold text-gray-100">
          Solicitação de reembolso
        </h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Dados da despesa para solicitar reembolso.
        </p>
      </header>

      <Input required legend="Nome da solicitação" value={name} />

      <div className="flex gap-4">
        <Select
          required
          legend="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>
        <Input legend="Valor" required />
      </div>
      <Upload />

      <Button type="submit">Enviar</Button>
    </form>
  );
}
