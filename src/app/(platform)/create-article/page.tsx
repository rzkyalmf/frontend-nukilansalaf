"use client";
import { Content } from "@tiptap/react";
import { useActionState, useState } from "react";

import { MinimalTiptapEditor } from "@/components/minimal-tiptap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { articleAction } from "../(actions)/create-article";

export default function Page() {
  const [title, setTitle] = useState({ title: "" });
  const [content, setContent] = useState("");
  const [state, formAction, pending] = useActionState(articleAction, {
    status: "",
    message: "",
    title: "",
  });

  const handleSubmit = (formData: FormData) => {
    formData.append("content", content);
    formAction(formData);
  };

  const handleEventChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setTitle({ ...title, [name]: value });
  };

  return (
    <div className="flex w-full flex-col items-center space-y-10">
      <h1 className="font-philosopher gradient-ns pb-8 text-7xl">Buat Artikel</h1>
      <form action={handleSubmit} className="w-1/2">
        <div className="space-y-8">
          <div className="">
            <div className="mx-auto flex min-h-[400px] w-[685px] flex-shrink-0 flex-col items-center justify-center rounded-xl border bg-[#262626] px-24 py-8 text-center text-white shadow-[#C2B59B] transition duration-500 hover:shadow-lg">
              <h1 className="gradient-ns font-philosopher text-6xl"> {title.title} </h1>
            </div>
          </div>
          <div className="space-y-2">
            <label>Judul :</label>
            <Input
              name="title"
              maxLength={100}
              defaultValue={state?.title}
              onChange={handleEventChange}
              type="text"
              placeholder="Masukan judul artikel..."
              className="bg-white"
              required
            />
          </div>
          <div className="space-y-2">
            <label>Deskripsi : </label>
            <MinimalTiptapEditor
              value={content}
              onChange={setContent as (value: Content) => void}
              className="h-[450px] w-full bg-white"
              editorContentClassName="p-5"
              output="html"
              placeholder="Masukan deskripsi artikel..."
              autofocus={true}
              editable={true}
              editorClassName="focus:outline-none"
            />
          </div>
          {state?.status === "error" && <p className="text-red-500">{state.message}</p>}
        </div>
        <div className="mt-6">
          <Button className="w-full" disabled={pending}>
            {pending ? "Mengirim..." : "Kirim"}
          </Button>
        </div>
      </form>
    </div>
  );
}
